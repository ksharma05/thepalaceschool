import { Router } from 'express';
import { fetchAllSocialPosts, fetchSocialMediaStats } from '../services/socialMediaService';

const router = Router();

/**
 * Social Media Posts Endpoint
 * 
 * This endpoint will fetch and cache social media posts from various platforms.
 * 
 * Required API Keys (add to .env):
 * - FACEBOOK_ACCESS_TOKEN
 * - INSTAGRAM_ACCESS_TOKEN (via Facebook Graph API)
 * - TWITTER_BEARER_TOKEN (X API v2)
 * - LINKEDIN_ACCESS_TOKEN
 */

interface SocialPost {
  id: string;
  platform: 'Facebook' | 'Instagram' | 'Twitter' | 'LinkedIn';
  content: string;
  image?: string;
  url: string;
  likes?: number;
  comments?: number;
  shares?: number;
  timestamp: string;
  author?: string;
}

// In-memory cache (replace with Redis in production)
let cachedPosts: SocialPost[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

/**
 * GET /api/social-media/posts
 * Fetch recent posts from all social media platforms
 */
router.get('/posts', async (req, res) => {
  try {
    // Check cache
    const now = Date.now();
    if (cachedPosts.length > 0 && now - lastFetchTime < CACHE_DURATION) {
      return res.json({
        success: true,
        data: cachedPosts,
        cached: true,
        nextUpdate: new Date(lastFetchTime + CACHE_DURATION).toISOString()
      });
    }

    // Fetch from social media APIs
    const fetchedPosts = await fetchAllSocialPosts();

    // Update cache
    cachedPosts = fetchedPosts;
    lastFetchTime = now;

    res.json({
      success: true,
      data: fetchedPosts,
      cached: false
    });
  } catch (error) {
    console.error('Error fetching social media posts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch social media posts'
    });
  }
});

/**
 * GET /api/social-media/stats
 * Get aggregated social media statistics
 */
router.get('/stats', async (req, res) => {
  try {
    const stats = await fetchSocialMediaStats();

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Error fetching social media stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch social media stats'
    });
  }
});

/**
 * POST /api/social-media/refresh
 * Manually trigger a refresh of cached posts
 */
router.post('/refresh', async (req, res) => {
  try {
    // Clear cache
    cachedPosts = [];
    lastFetchTime = 0;

    res.json({
      success: true,
      message: 'Cache cleared. Next request will fetch fresh data.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to refresh cache'
    });
  }
});

export default router;

