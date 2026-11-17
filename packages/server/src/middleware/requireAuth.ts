import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { env } from '../config/env';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthUser;
}

interface TokenPayload {
  id: string;
}

const unauthorized = (res: Response, message = 'Authentication required') =>
  res.status(401).json({ message });

/**
 * Lets the request through only with a valid admin token in
 * `Authorization: Bearer <token>`. The user is looked up on every request so
 * a deleted admin loses access immediately rather than when the token expires.
 */
export const requireAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return unauthorized(res);
  }

  const token = header.slice('Bearer '.length).trim();
  if (!token) return unauthorized(res);

  let payload: TokenPayload;
  try {
    payload = jwt.verify(token, env.jwtSecret, { algorithms: ['HS256'] }) as TokenPayload;
  } catch {
    return unauthorized(res, 'Session expired or invalid. Please log in again.');
  }

  try {
    const user = await User.findById(payload.id).select('email name');
    if (!user) return unauthorized(res, 'Session expired or invalid. Please log in again.');

    req.user = { id: String(user._id), email: user.email, name: user.name };
    return next();
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message });
  }
};
