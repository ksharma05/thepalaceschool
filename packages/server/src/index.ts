import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { env } from './config/env';
import { applyDnsOverride } from './config/dns';
import staticContentRoutes from './routes/staticContent';
import contactRoutes from './routes/contact';
import authRoutes from './routes/auth';
import socialMediaRoutes from './routes/socialMedia';

applyDnsOverride();

const app = express();

// Railway sits behind one proxy; trust it so req.ip is the visitor's address
// (needed for per-IP rate limits).
app.set('trust proxy', 1);

app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      // Requests with no Origin (curl, server-to-server, same-origin) are allowed;
      // CORS only governs what browsers on other sites may read.
      if (!origin || env.corsOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, false);
    },
  })
);
app.use(express.json({ limit: '1mb' }));

app.use('/api/content', staticContentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/social-media', socialMediaRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// DB Connection
mongoose.connect(env.mongoUri)
  .then(() => {
    console.log('MongoDB connected...');
    app.listen(env.port, () => {
      console.log(`Server is running on port ${env.port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
