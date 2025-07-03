import { NextFunction, Request, Response } from "express";
import jwt  from "jsonwebtoken";
import rareLimit from "express-rate-limit";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
export const rateLimiter = rareLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: { error: 'Too many requests, please try again later.' }

})

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        if (!JWT_SECRET) {
            res.status(500).json({ error: 'JWT secret is not configured' });
            return;
        }

        const decoded = jwt.verify(token, JWT_SECRET as string);
        if (typeof decoded === 'object') {
            req.user = decoded;
            next();
        } else {
            res.status(401).json({ error: 'Invalid token payload' });
        }
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};