import { Router, Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { loginRateLimit } from '../middleware/rateLimit';

const router = Router();

router.post('/login', loginRateLimit, async (req: Request, res: Response) => {
  const { email, password } = req.body ?? {};

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const payload = {
      id: user._id,
      email: user.email,
      name: user.name,
    };

    const token = jwt.sign(payload, env.jwtSecret, {
      algorithm: 'HS256',
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

export default router;
