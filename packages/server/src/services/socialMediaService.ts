/**
 * Social Media Service
 * Handles fetching posts from various social media platforms
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

/**
 * Fetch Facebook Posts
 * Uses Facebook Graph API
 * Required: FACEBOOK_PAGE_ID, FACEBOOK_ACCESS_TOKEN
 */
export async function fetchFacebookPosts(limit: number = 5): Promise<SocialPost[]> {
  try {
    const pageId = process.env.FACEBOOK_PAGE_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!pageId || !accessToken) {
      console.warn('Facebook credentials not configured');
      return [];
    }

    const fields = 'id,message,created_time,full_picture,permalink_url,likes.summary(true),comments.summary(true),shares';
    const url = `https://graph.facebook.com/v18.0/${pageId}/posts?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Facebook API error: ${response.statusText}`);
    }

    const data = await response.json();

    return data.data.map((post: any) => ({
      id: `fb-${post.id}`,
      platform: 'Facebook' as const,
      content: post.message || '',
      image: post.full_picture,
      url: post.permalink_url || `https://www.facebook.com/${post.id}`,
      likes: post.likes?.summary?.total_count,
      comments: post.comments?.summary?.total_count,
      shares: post.shares?.count,
      timestamp: post.created_time
    }));
  } catch (error) {
    console.error('Error fetching Facebook posts:', error);
    return [];
  }
}

/**
 * Fetch Instagram Posts
 * Uses Instagram Graph API (requires Facebook Business account)
 * Required: INSTAGRAM_ACCOUNT_ID, FACEBOOK_ACCESS_TOKEN
 */
export async function fetchInstagramPosts(limit: number = 6): Promise<SocialPost[]> {
  try {
    const accountId = process.env.INSTAGRAM_ACCOUNT_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!accountId || !accessToken) {
      console.warn('Instagram credentials not configured');
      return [];
    }

    const fields = 'id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count';
    const url = `https://graph.facebook.com/v18.0/${accountId}/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.statusText}`);
    }

    const data = await response.json();

    return data.data
      .filter((post: any) => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM')
      .map((post: any) => ({
        id: `ig-${post.id}`,
        platform: 'Instagram' as const,
        content: post.caption || '',
        image: post.media_url,
        url: post.permalink,
        likes: post.like_count,
        comments: post.comments_count,
        timestamp: post.timestamp
      }));
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
}

/**
 * Fetch X (Twitter) Posts
 * Uses X API v2
 * Required: TWITTER_BEARER_TOKEN, TWITTER_USER_ID
 */
export async function fetchTwitterPosts(limit: number = 5): Promise<SocialPost[]> {
  try {
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    const userId = process.env.TWITTER_USER_ID;

    if (!bearerToken || !userId) {
      console.warn('Twitter credentials not configured');
      return [];
    }

    const fields = 'tweet.fields=created_at,public_metrics,attachments&media.fields=url&expansions=attachments.media_keys';
    const url = `https://api.twitter.com/2/users/${userId}/tweets?max_results=${limit}&${fields}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Twitter API error: ${response.statusText}`);
    }

    const data = await response.json();

    return data.data.map((tweet: any) => {
      const media = data.includes?.media?.find((m: any) => 
        tweet.attachments?.media_keys?.includes(m.media_key)
      );

      return {
        id: `tw-${tweet.id}`,
        platform: 'Twitter' as const,
        content: tweet.text,
        image: media?.url,
        url: `https://x.com/thepalaceschool/status/${tweet.id}`,
        likes: tweet.public_metrics?.like_count,
        comments: tweet.public_metrics?.reply_count,
        shares: tweet.public_metrics?.retweet_count,
        timestamp: tweet.created_at
      };
    });
  } catch (error) {
    console.error('Error fetching Twitter posts:', error);
    return [];
  }
}

/**
 * Fetch LinkedIn Posts
 * Uses LinkedIn API
 * Required: LINKEDIN_ACCESS_TOKEN, LINKEDIN_ORGANIZATION_ID
 */
export async function fetchLinkedInPosts(limit: number = 5): Promise<SocialPost[]> {
  try {
    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
    const orgId = process.env.LINKEDIN_ORGANIZATION_ID;

    if (!accessToken || !orgId) {
      console.warn('LinkedIn credentials not configured');
      return [];
    }

    const url = `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(urn:li:organization:${orgId})&count=${limit}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0'
      }
    });

    if (!response.ok) {
      throw new Error(`LinkedIn API error: ${response.statusText}`);
    }

    const data = await response.json();

    return data.elements.map((post: any) => {
      const specificContent = post.specificContent?.['com.linkedin.ugc.ShareContent'];
      const media = specificContent?.media?.[0];

      return {
        id: `li-${post.id}`,
        platform: 'LinkedIn' as const,
        content: post.commentary || '',
        image: media?.thumbnails?.[0]?.url,
        url: `https://www.linkedin.com/feed/update/${post.id}`,
        likes: post.numLikes,
        comments: post.numComments,
        timestamp: new Date(post.created?.time || Date.now()).toISOString()
      };
    });
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    return [];
  }
}

/**
 * Fetch all social media posts from all platforms
 */
export async function fetchAllSocialPosts(): Promise<SocialPost[]> {
  const [facebookPosts, instagramPosts, twitterPosts, linkedInPosts] = await Promise.all([
    fetchFacebookPosts(5),
    fetchInstagramPosts(6),
    fetchTwitterPosts(5),
    fetchLinkedInPosts(5)
  ]);

  // Combine and sort by timestamp (newest first)
  const allPosts = [
    ...facebookPosts,
    ...instagramPosts,
    ...twitterPosts,
    ...linkedInPosts
  ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return allPosts.slice(0, 12); // Return top 12 most recent posts
}

/**
 * Get social media statistics
 */
export async function fetchSocialMediaStats() {
  try {
    // TODO: Implement actual API calls for follower counts
    // For now, return estimated stats

    return {
      totalFollowers: '10K+',
      monthlyReach: '50K+',
      engagementRate: '85%',
      totalPosts: '500+',
      platforms: [
        { name: 'Facebook', followers: 2500, url: 'https://www.facebook.com/share/1AF8tQzQWH/' },
        { name: 'Instagram', followers: 3200, url: 'https://www.instagram.com/thepalaceschool' },
        { name: 'Twitter', followers: 1800, url: 'https://x.com/thepalaceschool' },
        { name: 'LinkedIn', followers: 950, url: 'https://www.linkedin.com/in/the-palace-school-the-city-palace-jaipur-a21b48374' }
      ]
    };
  } catch (error) {
    console.error('Error fetching social media stats:', error);
    throw error;
  }
}

