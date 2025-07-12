import { Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma'; 
import { hashPass, comparePassword } from '../utils/passHandler';
import jwt from "jsonwebtoken";
import redis from '../utils/redisClient';
import { sendEmail } from "../services/sendEmail";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export const sendOtp = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(400).json({ error: "Email, username, and password are required." });
  }
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
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

    res.json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error("Error in sendOtp:", error);
    return res.status(500).json({ error: "Failed to send OTP email." });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  try {
    const regData = await redis.get(`register:${email}`);
    if (!regData) {
      return res.status(400).json({ error: 'OTP expired or registration not found.' });
    }
    const { username, hashedPassword, otp: storedOtp } = JSON.parse(regData);
    if (storedOtp !== otp) {
      return res.status(400).json({ error: 'Invalid OTP.' });
    }

    // Create user in DB
    const user = await prisma.user.create({
      data: { name: username, email, password_hash: hashedPassword },
    });

    // Clean up Redis
    await redis.del(`register:${email}`);

    res.status(201).json({
      message: 'Registration successful.',
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Error in verifyOtp:", error);
    res.status(500).json({ error: "Failed to verify OTP." });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email)
  console.log(password)
  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required." });

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
    return res.status(404).json({ error: "User not found. Please register first" });
    }
    const isMatch = await comparePassword(password, user.password_hash);
    if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials." });
    }
    // Issue JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};


// export const getCurrentUser = async (req: Request, res: Response) => {
//   // Expect JWT in Authorization header: Bearer <token>
//   const authHeader = req.headers.authorization;
//   if (!authHeader) return res.status(401).json({ error: "No token provided." });

//   const token = authHeader.split(" ")[1];
//   try {
//     const payload = jwt.verify(token, JWT_SECRET) as { userId: number };
//     const user = await prisma.user.findUnique({
//       where: { id: payload.userId },
//       select: { id: true, name: true, email: true },
//     });
//     if (!user) return res.status(404).json({ error: "User not found." });
//     res.json({ user });
//   } catch (error) {
//     res.status(401).json({ error: "Invalid or expired token." });
//   }
// };