// Social Media Configuration and Types

export type SocialPost = {
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
};

export type SocialPlatform = {
  name: string;
  handle: string;
  url: string;
  icon: string;
  followers: string;
  description: string;
  color: string;
};

// Official social media accounts
export const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Facebook',
    handle: '@thepalaceschool',
    url: 'https://www.facebook.com/share/1AF8tQzQWH/?mibextid=wwXIfr',
    icon: 'facebook',
    followers: 'Follow us',
    description: 'Follow us for school updates, events, and community highlights',
    color: 'bg-blue-600'
  },
  {
    name: 'Instagram',
    handle: '@thepalaceschool',
    url: 'https://www.instagram.com/thepalaceschool?igsh=MWdidzVyYWV5NThncw%3D%3D&utm_source=qr',
    icon: 'instagram',
    followers: 'Follow us',
    description: 'See daily moments, student achievements, and campus life',
    color: 'bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500'
  },
  {
    name: 'X (Twitter)',
    handle: '@thepalaceschool',
    url: 'https://x.com/thepalaceschool?s=21',
    icon: 'twitter',
    followers: 'Follow us',
    description: 'Get quick updates, news, and educational insights',
    color: 'bg-black'
  },
  {
    name: 'LinkedIn',
    handle: 'The Palace School - The City Palace, Jaipur',
    url: 'https://www.linkedin.com/in/the-palace-school-the-city-palace-jaipur-a21b48374',
    icon: 'linkedin',
    followers: 'Connect',
    description: 'Professional updates and alumni network connections',
    color: 'bg-blue-700'
  }
];

// Sample posts - will be fetched from backend API
export const samplePosts: SocialPost[] = [
  {
    id: '1',
    platform: 'Instagram',
    content: 'Amazing Annual Day 2025 celebration! Our students showcased incredible talent. 🎭✨',
    image: 'WhatsApp_Image_2025-11-06_at_06.53.16_2_sghrwj', // Cloudinary public ID
    url: 'https://www.instagram.com/p/example/',
    likes: 156,
    comments: 23,
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    platform: 'Facebook',
    content: 'Congratulations to our students for the wonderful Career Fair presentation! 🏆',
    image: 'IMG_6093_ic6e03',
    url: 'https://www.facebook.com/example',
    likes: 89,
    comments: 15,
    shares: 12,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    platform: 'Twitter',
    content: 'Celebrating Diwali with joy and lights! Happy Diwali from The Palace School family. 🪔✨',
    image: 'IMG_5929_ghr4hx',
    url: 'https://x.com/example',
    likes: 45,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  }
];

// API endpoint for fetching social media posts (to be implemented in backend)
export const SOCIAL_MEDIA_API = {
  FETCH_POSTS: '/api/social-media/posts',
  FETCH_STATS: '/api/social-media/stats',
};

