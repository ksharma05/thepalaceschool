import dotenv from 'dotenv';

dotenv.config();

const MIN_JWT_SECRET_LENGTH = 32;
const DEFAULT_CORS_ORIGINS = ['http://localhost:5173'];

export interface ServerEnv {
  port: number;
  mongoUri: string;
  jwtSecret: string;
  corsOrigins: string[];
}

const fail = (message: string): never => {
  console.error(`FATAL ERROR: ${message}`);
  process.exit(1);
};

const parseOrigins = (raw: string | undefined): string[] => {
  if (!raw || !raw.trim()) return DEFAULT_CORS_ORIGINS;
  return raw
    .split(',')
    .map((origin) => origin.trim().replace(/\/+$/, ''))
    .filter(Boolean);
};

/**
 * Reads and validates the server's environment once, at startup.
 *
 * The server refuses to start without a strong JWT secret: a missing or short
 * secret would let anyone forge an admin token.
 */
const loadEnv = (): ServerEnv => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) fail('MONGO_URI is not defined.');

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    fail(
      'JWT_SECRET is not defined. Generate one with: ' +
        `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`
    );
  }
  if (jwtSecret!.length < MIN_JWT_SECRET_LENGTH) {
    fail(`JWT_SECRET must be at least ${MIN_JWT_SECRET_LENGTH} characters long.`);
  }

  return {
    port: Number(process.env.PORT) || 3001,
    mongoUri: mongoUri!,
    jwtSecret: jwtSecret!,
    corsOrigins: parseOrigins(process.env.CORS_ORIGINS),
  };
};

export const env = loadEnv();
