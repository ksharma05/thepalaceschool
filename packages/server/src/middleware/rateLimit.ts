import { Request, Response, NextFunction } from 'express';

interface RateLimitOptions {
  /** Length of one counting window, in milliseconds. */
  windowMs: number;
  /** Requests allowed per IP within one window. */
  max: number;
  /** Message returned with the 429 response. */
  message: string;
}

interface Bucket {
  count: number;
  resetAt: number;
}

/**
 * Small in-memory, fixed-window rate limiter keyed by client IP.
 *
 * Counts live in this process only, which is fine for the single Railway
 * instance this server runs on. If the server is ever scaled to several
 * instances, swap this for a shared store (e.g. express-rate-limit + Redis).
 *
 * Relies on `app.set('trust proxy', 1)` so `req.ip` is the visitor's address
 * rather than the proxy's.
 */
export const rateLimit = ({ windowMs, max, message }: RateLimitOptions) => {
  const buckets = new Map<string, Bucket>();

  // Drop expired buckets so the map doesn't grow without bound.
  const sweep = setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(key);
    }
  }, windowMs);
  sweep.unref();

  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip || 'unknown';
    const now = Date.now();

    let bucket = buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      bucket = { count: 0, resetAt: now + windowMs };
      buckets.set(key, bucket);
    }

    bucket.count += 1;

    if (bucket.count > max) {
      const retryAfterSeconds = Math.ceil((bucket.resetAt - now) / 1000);
      res.setHeader('Retry-After', String(retryAfterSeconds));
      return res.status(429).json({ message });
    }

    return next();
  };
};

export const loginRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many login attempts. Please try again in 15 minutes.',
});

export const contactRateLimit = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: 'Too many messages sent. Please try again in a few minutes.',
});
