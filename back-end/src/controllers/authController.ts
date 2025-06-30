import { Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma';
import { hashPass, comparePassword } from '../utils/passHandler';
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ error: "Name, Email, and password are required." });

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res.status(409).json({ error: "User already exists." });
    const hashedPassword = await hashPass(password); 
    const user = await prisma.user.create({
      data: { name, email, password_hash: hashedPassword },
    });

    res.status(201).json({
      message: "User registered successfully.",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
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

// export const logoutUser = async (req: Request, res: Response) => {
//   // For stateless JWT, logout is handled on client by deleting token.
//   // Optionally, you can implement token blacklisting here.
//   res.json({ message: "Logged out successfully." });
// };

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