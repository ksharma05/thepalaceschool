# Social Media API Integration Setup Guide

This guide explains how to set up automatic fetching of social media posts for The Palace School website.

## Overview

The website can automatically fetch and display recent posts from:
- Facebook
- Instagram
- X (Twitter)
- LinkedIn

## Current Setup

✅ **Frontend**: Ready to display posts with Cloudinary images
✅ **Backend**: API endpoints created (`/api/social-media/posts`)
⏳ **API Integration**: Needs configuration (see below)

## Quick Start (Using Sample Posts)

The system currently uses **sample posts** from `src/config/socialMedia.ts`. These posts:
- Show real event images from Cloudinary
- Update automatically with timestamps
- Can be manually edited until API is configured

## Setting Up Real Social Media Feeds

### Option 1: Manual Updates (Easiest)

Edit `packages/server/src/routes/socialMedia.ts` and update the `samplePosts` array with your actual posts.

### Option 2: Automatic Fetching (Recommended for Production)

#### Prerequisites
You'll need API access from each platform:

1. **Facebook/Instagram**
   - Create a Facebook App at [developers.facebook.com](https://developers.facebook.com)
   - Get a Page Access Token
   - Enable Instagram Graph API

2. **X (Twitter)**
   - Apply for developer access at [developer.twitter.com](https://developer.twitter.com)
   - Create an app and get Bearer Token
   - Use Twitter API v2

3. **LinkedIn**
   - Create an app at [developer.linkedin.com](https://www.linkedin.com/developers/)
   - Request access to LinkedIn Pages API
   - Get Access Token

#### Environment Variables

Add to `packages/server/.env`:

```env
# Facebook
FACEBOOK_PAGE_ID=your_page_id
FACEBOOK_ACCESS_TOKEN=your_access_token

# Instagram (via Facebook Graph API)
INSTAGRAM_ACCOUNT_ID=your_instagram_business_account_id

# X (Twitter)
TWITTER_BEARER_TOKEN=your_bearer_token

# LinkedIn
LINKEDIN_ACCESS_TOKEN=your_access_token
LINKEDIN_ORGANIZATION_ID=your_org_id

# Cache settings
SOCIAL_MEDIA_CACHE_DURATION=900000  # 15 minutes in milliseconds
```

#### Implementation Steps

1. **Install required packages**:
```bash
cd packages/server
npm install node-fetch axios
```

2. **Implement API Fetchers** in `src/routes/socialMedia.ts`:

```typescript
// Example: Facebook Posts Fetcher
async function fetchFacebookPosts() {
  const response = await fetch(
    `https://graph.facebook.com/v18.0/${process.env.FACEBOOK_PAGE_ID}/posts?fields=id,message,created_time,full_picture,likes.summary(true),comments.summary(true)&access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`
  );
  const data = await response.json();
  
  return data.data.map((post: any) => ({
    id: post.id,
    platform: 'Facebook',
    content: post.message || '',
    image: post.full_picture,
    url: `https://www.facebook.com/${post.id}`,
    likes: post.likes?.summary?.total_count,
    comments: post.comments?.summary?.total_count,
    timestamp: post.created_time
  }));
}

// Similar implementations for Instagram, Twitter, LinkedIn
```

3. **Update the `/posts` endpoint** to use the real fetchers

4. **Set up a cron job** (optional) to refresh posts periodically:
```bash
npm install node-cron
```

## Testing

### Test the endpoint:
```bash
curl http://localhost:3001/api/social-media/posts
```

### Expected response:
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "platform": "Instagram",
      "content": "Amazing Annual Day 2025...",
      "image": "WhatsApp_Image_2025-11-06_at_06.53.16_2_sghrwj",
      "url": "https://www.instagram.com/p/...",
      "likes": 156,
      "comments": 23,
      "timestamp": "2025-12-14T..."
    }
  ],
  "cached": false
}
```

## Rate Limits & Best Practices

| Platform | Rate Limit | Recommendation |
|----------|------------|----------------|
| Facebook | 200 calls/hour | Cache for 15-30 min |
| Instagram | 200 calls/hour | Cache for 15-30 min |
| Twitter | 300 tweets/15 min | Cache for 30 min |
| LinkedIn | Varies | Cache for 1 hour |

**Best Practice**: 
- Use 15-minute cache to reduce API calls
- Implement exponential backoff for errors
- Log API usage for monitoring

## Alternatives

If API access is difficult to obtain, consider:

1. **Manual Updates**: Update posts weekly via admin panel
2. **RSS Feeds**: Some platforms offer RSS feeds
3. **Third-party Services**: 
   - [Juicer.io](https://www.juicer.io/)
   - [Taggbox](https://taggbox.com/)
   - [Flockler](https://flockler.com/)

## Current Status

- ✅ Frontend displays posts with images from Cloudinary
- ✅ Backend endpoint created with caching
- ✅ Sample data structure in place
- ⏳ Waiting for social media API credentials

## Next Steps

1. Decide: Manual updates or API integration?
2. If API: Apply for developer access on each platform
3. Add credentials to `.env`
4. Implement platform-specific fetchers
5. Test and deploy

---

**Note**: The sample posts are currently linked to actual gallery images from Cloudinary, so they will display beautifully even before API integration is complete.

