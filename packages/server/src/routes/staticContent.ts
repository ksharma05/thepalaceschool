import { Router, Request, Response } from 'express';
import StaticContent from '../models/StaticContent';
import { requireAuth } from '../middleware/requireAuth';

const router = Router();

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

// Get all static content (admin only)
router.get('/', requireAuth, async (req: Request, res: Response) => {
  try {
    const contents = await StaticContent.find().sort({ page: 1 });
    res.json(contents);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// Get content for a specific page (public: the website reads this)
router.get('/:page', async (req: Request, res: Response) => {
  try {
    const content = await StaticContent.findOne({ page: req.params.page });
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// Create or update content for a page (admin only)
router.post('/', requireAuth, async (req: Request, res: Response) => {
  const { page, content } = req.body ?? {};

  if (!isNonEmptyString(page) || !isNonEmptyString(content)) {
    return res.status(400).json({ message: 'Both "page" and "content" must be non-empty text.' });
  }

  try {
    let staticContent = await StaticContent.findOne({ page });

    if (staticContent) {
      // Update existing content
      staticContent.content = content;
    } else {
      // Create new content
      staticContent = new StaticContent({ page, content });
    }

    const updatedContent = await staticContent.save();
    res.status(201).json(updatedContent);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

export default router;
