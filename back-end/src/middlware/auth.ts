import { NextFunction, Request, Response } from "express";
import jwt  from "jsonwebtoken";
import rareLimit from "express-rate-limit";
import logger from '../utils/logger';

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
    message: { error: 'Too many requests, please try again later.' },
    handler: (req: Request, res: Response) => {
        logger.warn({
            ip: req.ip,
            userAgent: req.get('User-Agent'),
            url: req.url,
            method: req.method,
            action: 'rate_limit_exceeded'
        }, 'Rate limit exceeded');
        
        res.status(429).json({ error: 'Too many requests, please try again later.' });
    }
});

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        const userAgent = req.get('User-Agent');
        const ip = req.ip;

        logger.debug({
            ip,
            userAgent,
            url: req.url,
            method: req.method,
            hasToken: !!token,
            action: 'auth_attempt'
        }, 'Authentication attempt');

        if (!token) {
            logger.warn({
                ip,
                userAgent,
                url: req.url,
                method: req.method,
                action: 'auth_no_token'
            }, 'Authentication failed: No token provided');
            
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        if (!JWT_SECRET) {
            logger.error({
                action: 'auth_no_secret'
            }, 'JWT secret is not configured');
            
            res.status(500).json({ error: 'JWT secret is not configured' });
            return;
        }

        const decoded = jwt.verify(token, JWT_SECRET as string);
        if (typeof decoded === 'object') {
            req.user = decoded;
            
            logger.info({
                userId: (decoded as any).userId,
                ip,
                userAgent,
                url: req.url,
                method: req.method,
                action: 'auth_success'
            }, 'Authentication successful');
            
            next();
        } else {
            logger.warn({
                ip,
                userAgent,
                url: req.url,
                method: req.method,
                tokenType: typeof decoded,
                action: 'auth_invalid_payload'
            }, 'Authentication failed: Invalid token payload');
            
            res.status(401).json({ error: 'Invalid token payload' });
        }
    } catch (error) {
        const errorMessage = error instanceof jwt.JsonWebTokenError ? error.message : 'Unknown JWT error';
        const errorName = error instanceof Error ? error.name : 'UnknownError';
        
        logger.warn({
            ip: req.ip,
            userAgent: req.get('User-Agent'),
            url: req.url,
            method: req.method,
            error: errorMessage,
            errorType: errorName,
            action: 'auth_token_invalid'
        }, 'Authentication failed: Invalid or expired token');
        
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};

// Optional: Additional middleware for logging successful requests
export const logRequest = (req: Request, res: Response, next: NextFunction): void => {
    const startTime = Date.now();
    
    // Log incoming request
    logger.info({
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        userId: req.user?.userId,
        action: 'request_start'
    }, 'Request received');

    // Log response when finished
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        
        logger.info({
            method: req.method,
            url: req.url,
            statusCode: res.statusCode,
            duration: `${duration}ms`,
            userId: req.user?.userId,
            action: 'request_complete'
        }, 'Request completed');
    });

    next();
};