import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import staticContentRoutes from './routes/staticContent';
import contactRoutes from './routes/contact';
import authRoutes from './routes/auth';
import socialMediaRoutes from './routes/socialMedia';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// DB Connection
if (!process.env.MONGO_URI) {
  console.error('FATAL ERROR: MONGO_URI is not defined.');
  process.exit(1);
}
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected...')
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/content', staticContentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/social-media', socialMediaRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});


