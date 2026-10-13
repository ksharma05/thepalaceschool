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

  // Encode per path segment so a publicId inside a folder whose name contains spaces
  // (e.g. `visual arts/IMG_0080`) still produces a valid URL, while leaving the `/`
  // folder separators intact.
  url += `/${publicId.split('/').map(encodeURIComponent).join('/')}`;

  return url;
};

// Student-life sections, as linked from the "Beyond Academics" cards on the home page.
//
// This is a SEPARATE axis from `category` below: `category` describes the event an image
// came from ('Annual Day', 'Sports Day', ...) and drives the gallery's filter chips, while
// `section` describes the activity it illustrates. One image can legitimately be both
// 'Sports Day' and `sports`, so the two must not be collapsed into one field.
export type SiteSectionSlug =
  | 'visual-arts'
  | 'performing-arts'
  | 'sports'
  | 'music'
  | 'health'
  | 'house-system';

export type SiteSection = {
  slug: SiteSectionSlug;
  /** Hero heading for the section-scoped gallery view. */
  label: string;
  /** Hero sub-heading, mirroring the wording on the home-page card. */
  description: string;
};

export const siteSections: SiteSection[] = [
  {
    slug: 'visual-arts',
    label: 'Visual Arts',
    description: 'Exploring creativity through painting, sculpture, and various art forms',
  },
  {
    slug: 'performing-arts',
    label: 'Performing Arts',
    description: 'Drama, theatre, and stage performances that build confidence',
  },
  {
    slug: 'sports',
    label: 'Sports',
    description: 'State-of-the-art facilities for a wide range of indoor and outdoor sports',
  },
  {
    slug: 'music',
    label: 'Music',
    description: 'Learning instruments, vocals, and music theory from experts',
  },
  {
    slug: 'health',
    label: 'Health & Well-Being',
    description: 'Physical and mental wellness programmes for holistic development',
  },
  {
    slug: 'house-system',
    label: 'House System',
    description: 'Fostering teamwork, leadership, and healthy competition',
  },
];

/** Resolves a `?section=` query value to a known section, or `undefined` if unrecognised. */
export const getSiteSection = (slug: string | null): SiteSection | undefined =>
  slug ? siteSections.find((section) => section.slug === slug) : undefined;

// Gallery image type
export type GalleryImage = {
  id: string;
  publicId: string;
  title: string;
  category: string;
  /** Which student-life section this image illustrates, if any. */
  section?: SiteSectionSlug;
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

  // Visual Arts (22 images) — uploaded to the `visual arts` folder.
  //
  // !! VERIFY THE publicIds BELOW BEFORE SHIPPING !!
  // These assume the publicId is `visual arts/<original filename without extension>`.
  // Cloudinary appends a random 6-character suffix when "unique filename" is enabled on
  // upload — every other entry in this file shows that (`..._pmmwzw`, `..._bwlt8e`). If the
  // visual-arts uploads got suffixes too, copy the real publicIds out of the Cloudinary
  // Media Library (or `GET /resources/image?prefix=visual arts`) and replace these.
  // The 4 source files were .heif; `f_auto` in getCloudinaryUrl transcodes them on delivery,
  // so no extension belongs in the publicId.
  { id: '38', publicId: 'visual arts/454928d6-5503-4628-9ec1-6a21c63f3ab4', title: 'Student Artwork', category: 'Cultural Events', section: 'visual-arts' },
  { id: '39', publicId: 'visual arts/78bd1b23-3495-4be7-9f29-1c35b1d2bf1b', title: 'Student Artwork', category: 'Cultural Events', section: 'visual-arts' },
  { id: '40', publicId: 'visual arts/IMG_0080', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '41', publicId: 'visual arts/IMG_0081', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '42', publicId: 'visual arts/IMG_0082', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '43', publicId: 'visual arts/IMG_0083', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '44', publicId: 'visual arts/IMG_0084', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '45', publicId: 'visual arts/IMG_0085', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '46', publicId: 'visual arts/IMG_0086', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '47', publicId: 'visual arts/IMG_0087', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '48', publicId: 'visual arts/IMG_0088', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '49', publicId: 'visual arts/IMG_0089', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '50', publicId: 'visual arts/IMG_0090', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '51', publicId: 'visual arts/IMG_0104', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '52', publicId: 'visual arts/IMG_0105', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '53', publicId: 'visual arts/IMG_0106', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '54', publicId: 'visual arts/IMG_0107', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '55', publicId: 'visual arts/IMG_0108', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '56', publicId: 'visual arts/IMG_1674', title: 'Creative Expression', category: 'Cultural Events', section: 'visual-arts' },
  { id: '57', publicId: 'visual arts/IMG_1682', title: 'Creative Expression', category: 'Cultural Events', section: 'visual-arts' },
  { id: '58', publicId: 'visual arts/IMG_1956', title: 'Creative Expression', category: 'Cultural Events', section: 'visual-arts' },
  { id: '59', publicId: 'visual arts/IMG_1971', title: 'Creative Expression', category: 'Cultural Events', section: 'visual-arts' },
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

