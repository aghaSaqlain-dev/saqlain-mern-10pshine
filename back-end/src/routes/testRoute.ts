import express, { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();
const router = express.Router();

//prisma test endpoint
router.get('/test', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({ take: 1 });
    if(users.length === 0) {
      res.send('No users found');
      return;
    }
    res.json({ ok: true, users });
  } catch (error) {
    res.status(500).json({ ok: false, error: (error as Error).message });
  }
});
router.get('/add-dummy-user', async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Dummy User',
        email: 'dummy@example.com',
        password_hash: 'hashedpassword123',
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;