import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../src/models/User';
import { applyDnsOverride } from '../src/config/dns';

/**
 * Creates an admin user, or resets an existing admin's password.
 *
 * Credentials come from the environment and are never printed:
 *   ADMIN_EMAIL     required
 *   ADMIN_PASSWORD  required, at least 12 characters
 *   ADMIN_NAME      optional, defaults to "Admin"
 *
 * Usage:
 *   npm run create-admin                        create the admin (stops if it exists)
 *   npm run create-admin -- --reset-password    set a new password for an existing admin
 *
 * Tip: set ADMIN_PASSWORD only for the one command rather than saving it in .env.
 */

dotenv.config();
applyDnsOverride();

const MIN_PASSWORD_LENGTH = 12;

const fail = (message: string): never => {
  console.error(`❌ ${message}`);
  process.exit(1);
};

const run = async () => {
  const resetPassword = process.argv.includes('--reset-password');

  const mongoUri = process.env.MONGO_URI;
  // Matched exactly, the same way the login route looks users up.
  const email = process.env.ADMIN_EMAIL?.trim();
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME?.trim() || 'Admin';

  if (!mongoUri) fail('MONGO_URI is not defined.');
  if (!email) fail('ADMIN_EMAIL is not defined.');
  if (!password) fail('ADMIN_PASSWORD is not defined.');
  if (password!.length < MIN_PASSWORD_LENGTH) {
    fail(`ADMIN_PASSWORD must be at least ${MIN_PASSWORD_LENGTH} characters long.`);
  }

  let exitCode = 0;

  try {
    await mongoose.connect(mongoUri!);
    console.log('Connected to MongoDB');

    const existing = await User.findOne({ email });

    if (existing) {
      if (!resetPassword) {
        console.log(`Admin ${email} already exists. Nothing changed.`);
        console.log('To set a new password, run again with --reset-password.');
      } else {
        existing.password = password!; // re-hashed by the pre-save hook
        await existing.save();
        console.log(`✅ Password reset for ${email}.`);
      }
    } else if (resetPassword) {
      console.error(`❌ No admin with email ${email} exists, so there is no password to reset.`);
      exitCode = 1;
    } else {
      await new User({ name, email, password }).save(); // hashed by the pre-save hook
      console.log(`✅ Admin ${email} created.`);
    }
  } catch (error) {
    console.error('❌ Error:', (error as Error).message);
    exitCode = 1;
  } finally {
    await mongoose.connection.close();
    process.exit(exitCode);
  }
};

run();
