import { Cloudinary } from '@cloudinary/url-gen';

// Initialize Cloudinary with your cloud name
// You'll need to replace 'YOUR_CLOUD_NAME' with your actual Cloudinary cloud name
export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo'
  },
  url: {
    secure: true
  }
});

// Helper function to get optimized image URL
export const getCloudinaryUrl = (publicId: string, options?: {
  width?: number;
  height?: number;
  crop?: string;
  quality?: string;
}) => {
  const { width, height, crop = 'fill', quality = 'auto' } = options || {};
  
  let url = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo'}/image/upload`;
  
  // Add transformations
  const transformations: string[] = [];
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  if (quality) transformations.push(`q_${quality}`);
  transformations.push('f_auto'); // Auto format (webp, etc.)
  
  if (transformations.length > 0) {
    url += `/${transformations.join(',')}`;
  }
  
  url += `/${publicId}`;
  
  return url;
};

// Gallery image type
export type GalleryImage = {
  id: string;
  publicId: string;
  title: string;
  category: string;
  event?: string;
  date?: string;
  description?: string;
};

// Gallery images - organized by event categories
export const galleryImages: GalleryImage[] = [
  // Annual Day 2025 (14 images)
  { id: '1', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.15_bwlt8e', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '2', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.16_2_sghrwj', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '3', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.15_1_juqplu', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '4', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.15_2_uez6kc', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '5', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.17_cszode', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '6', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.17_1_tuzp9z', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '7', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.15_3_o0vlef', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '8', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.19_k1qqcb', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '9', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.18_1_mjshsl', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '10', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.19_1_rfuvwh', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '11', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.16_xtndpz', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '12', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.16_1_h5dmdk', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '13', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.18_tkhq7r', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },
  { id: '14', publicId: 'WhatsApp_Image_2025-11-06_at_06.53.17_2_r6nayy', title: 'Annual Day 2025', category: 'Annual Day', event: 'Annual Day Celebration' },

  // Career Fair 2025 (2 images)
  { id: '15', publicId: 'IMG_6093_ic6e03', title: 'Career Fair 2025', category: 'Academics', event: 'Career Fair' },
  { id: '16', publicId: 'IMG_6092_yp2lnp', title: 'Career Fair 2025', category: 'Academics', event: 'Career Fair' },

  // Diwali Celebration (7 images)
  { id: '17', publicId: 'IMG_5929_ghr4hx', title: 'Diwali Celebration', category: 'Celebrations', event: 'Diwali Celebration' },
  { id: '18', publicId: 'IMG_5928_ycr2ll', title: 'Diwali Celebration', category: 'Celebrations', event: 'Diwali Celebration' },
  { id: '19', publicId: 'IMG_5927_oimw0z', title: 'Diwali Celebration', category: 'Celebrations', event: 'Diwali Celebration' },
  { id: '20', publicId: 'IMG_5926_ee2keo', title: 'Diwali Celebration', category: 'Celebrations', event: 'Diwali Celebration' },
  { id: '21', publicId: 'IMG_5925_zjharr', title: 'Diwali Celebration', category: 'Celebrations', event: 'Diwali Celebration' },
  { id: '22', publicId: 'IMG_5924_nlo0k3', title: 'Diwali Celebration', category: 'Celebrations', event: 'Diwali Celebration' },
  { id: '23', publicId: 'IMG_5923_nm08qq', title: 'Diwali Celebration', category: 'Celebrations', event: 'Diwali Celebration' },

  // Football (2 images)
  { id: '24', publicId: 'IMG_5918_rah7yx', title: 'Football', category: 'Sports Day', event: 'Football Match' },
  { id: '25', publicId: 'IMG_5919_fof6ts', title: 'Football', category: 'Sports Day', event: 'Football Match' },

  // Panache 2.0 - The Roller Coaster of Life (2 images)
  { id: '26', publicId: 'IMG_5917_jjfdz3', title: 'Panache 2.0 - Roller Coaster of Life', category: 'Cultural Events', event: 'Panache 2.0' },
  { id: '27', publicId: 'IMG_5916_wig9el', title: 'Panache 2.0 - Roller Coaster of Life', category: 'Cultural Events', event: 'Panache 2.0' },

  // Panache 2.0 - Wellness Chefs Senior (3 images)
  { id: '28', publicId: 'IMG_5922_clwlva', title: 'Panache 2.0 - Wellness Chefs', category: 'Cultural Events', event: 'Panache 2.0' },
  { id: '29', publicId: 'IMG_5921_thon0a', title: 'Panache 2.0 - Wellness Chefs', category: 'Cultural Events', event: 'Panache 2.0' },
  { id: '30', publicId: 'IMG_5920_kzp8as', title: 'Panache 2.0 - Wellness Chefs', category: 'Cultural Events', event: 'Panache 2.0' },

  // Princess Gaurvi Ji Annual Function (5 images)
  { id: '31', publicId: 'WhatsApp_Image_2024-12-06_at_13.16.57_8_pl8nhx', title: 'Princess Gaurvi Ji Annual Function', category: 'Cultural Events', event: 'Annual Function' },
  { id: '32', publicId: 'WhatsApp_Image_2024-12-06_at_13.46.10_3_e5zr5g', title: 'Princess Gaurvi Ji Annual Function', category: 'Cultural Events', event: 'Annual Function' },
  { id: '33', publicId: 'CRG_2652_xw53xy', title: 'Princess Gaurvi Ji Annual Function', category: 'Cultural Events', event: 'Annual Function' },
  { id: '34', publicId: 'BSP_7924_ma5mio', title: 'Princess Gaurvi Ji Annual Function', category: 'Cultural Events', event: 'Annual Function' },
  { id: '35', publicId: 'BSP_7827_-_Copy_kefpnu', title: 'Princess Gaurvi Ji Annual Function', category: 'Cultural Events', event: 'Annual Function' },

  // Walk for Dyslexia (2 images)
  { id: '36', publicId: '4aa07bb2-bcd7-425a-ad84-f6631517e241_wauhln', title: 'Walk for Dyslexia', category: 'Academics', event: 'Walk for Dyslexia Awareness' },
  { id: '37', publicId: 'a2bd634f-464e-4489-9bad-7d838f44d4ad_pmmwzw', title: 'Walk for Dyslexia', category: 'Academics', event: 'Walk for Dyslexia Awareness' },
];

// Gallery categories
export const galleryCategories = [
  'All',
  'Annual Day',
  'Sports Day',
  'Cultural Events',
  'Academics',
  'Workshops',
  'Celebrations',
  'Field Trips',
  'Achievements'
];

