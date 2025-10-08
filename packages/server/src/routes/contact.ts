import { Router, Request, Response } from 'express';
import ContactSubmission from '../models/ContactSubmission';

const router = Router();

// Create a new contact form submission
router.post('/', async (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    const newSubmission = new ContactSubmission({
      name,
      email,
      phone,
      subject,
      message,
    });

    const savedSubmission = await newSubmission.save();
    res.status(201).json(savedSubmission);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Get all contact submissions (admin only)
router.get('/', async (req: Request, res: Response) => {
  try {
    const submissions = await ContactSubmission.find()
      .sort({ createdAt: -1 })
      .limit(50);
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

export default router;
