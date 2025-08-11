import { Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma'; 
import { hashPass, comparePassword } from '../utils/passHandler';
import jwt from "jsonwebtoken";
import redis from '../utils/redisClient';
import { sendEmail } from "../services/sendEmail";
import logger from '../utils/logger'

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET ?? "dev_secret";

export const sendOtp = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  
  logger.info({ email, username, action: 'send_otp_attempt' }, 'OTP request received');
  
  if (!email || !username || !password) {
    logger.warn({ email, username, action: 'send_otp_validation_failed' }, 'Missing required fields');
    return res.status(400).json({ error: "Email, username, and password are required." });
  }
  
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      logger.warn({ email, action: 'send_otp_user_exists' }, 'User already exists');
      return res.status(409).json({ error: "User already exists." });
    }

    const hashedPassword = await hashPass(password);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store registration data and OTP in Redis
    await redis.setEx(
      `register:${email}`,
      60, // 1 minutes
      JSON.stringify({ username, hashedPassword, otp })
    );

    const text = `Your OTP code is ${otp}. It is valid for 1 minute.`;
    const subject = 'Your OTP Code';

    await sendEmail(email, subject, text);

    logger.info({ email, action: 'send_otp_success' }, 'OTP sent successfully');
    res.json({ message: 'OTP sent to email' });
  } catch (error) {
    logger.error({ 
      email, 
      action: 'send_otp_error', 
      error: (error as Error).message 
    }, 'Failed to send OTP');
    return res.status(500).json({ error: "Failed to send OTP email." });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  
  logger.info({ email, action: 'verify_otp_attempt' }, 'OTP verification requested');
  
  try {
    const regData = await redis.get(`register:${email}`);
    if (!regData) {
      logger.warn({ email, action: 'verify_otp_expired' }, 'OTP expired or not found');
      return res.status(400).json({ error: 'OTP expired or registration not found.' });
    }
    
    const { username, hashedPassword, otp: storedOtp } = JSON.parse(regData);
    if (storedOtp !== otp) {
      logger.warn({ email, action: 'verify_otp_invalid' }, 'Invalid OTP provided');
      return res.status(400).json({ error: 'Invalid OTP.' });
    }

    // Create user in DB
    const user = await prisma.user.create({
      data: { name: username, email, password_hash: hashedPassword },
    });

    // Clean up Redis
    await redis.del(`register:${email}`);

    logger.info({ 
      email, 
      userId: user.id, 
      action: 'user_registered_success' 
    }, 'User registered successfully');
    
    res.status(201).json({
      message: 'Registration successful.',
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    logger.error({ 
      email, 
      action: 'verify_otp_error', 
      error: (error as Error).message 
    }, 'Failed to verify OTP');
    res.status(500).json({ error: "Failed to verify OTP." });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  // ✅ FIXED - Only log email, never password!
  logger.info({ email, action: 'login_attempt' }, 'User login attempt');
  
  if (!email || !password) {
    logger.warn({ email, action: 'login_validation_failed' }, 'Missing email or password');
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      logger.warn({ email, action: 'login_user_not_found' }, 'User not found');
      return res.status(404).json({ error: "User not found. Please register first" });
    }
    
    const isMatch = await comparePassword(password, user.password_hash);
    if (!isMatch) {
      logger.warn({ email, userId: user.id, action: 'login_invalid_password' }, 'Invalid credentials');
      return res.status(401).json({ error: "Invalid credentials." });
    }
    
    // Issue JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    
    logger.info({ 
      email, 
      userId: user.id, 
      action: 'login_success' 
    }, 'User logged in successfully');
    
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    logger.error({ 
      email, 
      action: 'login_error', 
      error: (error as Error).message 
    }, 'Login failed with error');
    res.status(500).json({ error: (error as Error).message });
  }
};

