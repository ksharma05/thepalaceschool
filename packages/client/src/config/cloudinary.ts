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

  // Visual Arts (22 images). publicIds read from the Cloudinary Admin API and each verified
  // to return 200 (2026-10-14).
  //
  // Two things to know before adding more: every asset sits at the ACCOUNT ROOT with a
  // unique 6-character suffix, and the `visual arts` Media Library folder is display-only
  // metadata (dynamic folders) that never appears in the publicId — so `visual arts/IMG_0080`
  // 404s while `IMG_0080_eh6bic` resolves. Don't derive these ids from filenames; read them
  // from `GET /v1_1/dgevgrakr/resources/image`.
  //
  // IMG_1674/1682/1956/1971 are .heif sources. `f_auto` transcodes them to JPEG on delivery
  // (2.9 MB heic -> 33 KB jpeg), so the browser never sees HEIF and no extension belongs here.
  { id: '38', publicId: '454928d6-5503-4628-9ec1-6a21c63f3ab4_p1nd0i', title: 'Student Artwork', category: 'Cultural Events', section: 'visual-arts' },
  { id: '39', publicId: '78bd1b23-3495-4be7-9f29-1c35b1d2bf1b_k86scr', title: 'Student Artwork', category: 'Cultural Events', section: 'visual-arts' },
  { id: '40', publicId: 'IMG_0080_eh6bic', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '41', publicId: 'IMG_0081_pr4bul', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '42', publicId: 'IMG_0082_ovhhtt', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '43', publicId: 'IMG_0083_fffsqo', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '44', publicId: 'IMG_0084_b18re5', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '45', publicId: 'IMG_0085_skfar2', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '46', publicId: 'IMG_0086_m2nser', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '47', publicId: 'IMG_0087_fpavpa', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '48', publicId: 'IMG_0088_ajzjpm', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '49', publicId: 'IMG_0089_rgtvpg', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '50', publicId: 'IMG_0090_odfmdf', title: 'Art & Craft Display', category: 'Cultural Events', section: 'visual-arts' },
  { id: '51', publicId: 'IMG_0104_sb5ao6', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '52', publicId: 'IMG_0105_zdky5f', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '53', publicId: 'IMG_0106_uoh1rm', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '54', publicId: 'IMG_0107_xi9j7g', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '55', publicId: 'IMG_0108_hpinor', title: 'Student Paintings', category: 'Cultural Events', section: 'visual-arts' },
  { id: '56', publicId: 'IMG_1674_c8ykg0', title: 'Creative Expression', category: 'Cultural Events', section: 'visual-arts' },
  { id: '57', publicId: 'IMG_1682_focp4r', title: 'Creative Expression', category: 'Cultural Events', section: 'visual-arts' },
  { id: '58', publicId: 'IMG_1956_h6e54f', title: 'Creative Expression', category: 'Cultural Events', section: 'visual-arts' },
  { id: '59', publicId: 'IMG_1971_gyszmz', title: 'Creative Expression', category: 'Cultural Events', section: 'visual-arts' },

  // Music (9 images). publicIds read from the Cloudinary Admin API and each verified
  // to return 200 (2026-11-16). The first entry is the section's lead image.
  //
  // IMG_1443_1 skipped (byte-identical to IMG_1443). BSP_7941, SPS_1360 and SPS_1361 are not
  // included: they exceed the Free plan's 10 MB upload limit and were never uploaded.
  { id: '60', publicId: 'SPS_1367_z5nfi4', title: 'Music', category: 'Cultural Events', section: 'music' },
  { id: '61', publicId: '488994094_1065919588888167_3825127417869359300_n_o2a85l', title: 'Music', category: 'Cultural Events', section: 'music' },
  { id: '62', publicId: 'BSP_7939_ua7uht', title: 'Music', category: 'Cultural Events', section: 'music' },
  { id: '63', publicId: 'BSP_7944_tfhmxl', title: 'Music', category: 'Cultural Events', section: 'music' },
  { id: '64', publicId: 'IMG_1357_i9cbfn', title: 'Music', category: 'Cultural Events', section: 'music' },
  { id: '65', publicId: 'IMG_1367_me4vlm', title: 'Music', category: 'Cultural Events', section: 'music' },
  { id: '66', publicId: 'IMG_1443_b2ahfa', title: 'Music', category: 'Cultural Events', section: 'music' },
  { id: '67', publicId: 'IMG_1571_o6zuku', title: 'Music', category: 'Cultural Events', section: 'music' },
  { id: '68', publicId: 'IMG_2683_vxw1ob', title: 'Music', category: 'Cultural Events', section: 'music' },

  // Performing Arts (72 images). publicIds read from the Cloudinary Admin API and each verified
  // to return 200 (2026-11-16). The first entry is the section's lead image.
  //
  // IMG_0928_1 skipped (byte-identical to IMG_0928); 488994094_..._n is listed under Music only so
  // it does not appear twice in the full gallery. 20 BSP/CRG/SPS sources over 10 MB were never
  // uploaded and are not included. The four .heic assets are served as JPEG by `f_auto`.
  { id: '69', publicId: 'IMG_3954_v8z2ts', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '70', publicId: '488356584_1067056778774448_1902619185538971266_n_oqnedj', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '71', publicId: '488770611_1068059732007486_1761952768851332244_n_n7xgol', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '72', publicId: '488831758_1068060482007411_7886059596044376389_n_j8ea4w', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '73', publicId: '532314985_1166905375456254_6848644654359677680_n_s9fcyc', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '74', publicId: 'BSP_8001_tabpod', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '75', publicId: 'BSP_8006_djr5dl', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '76', publicId: 'BSP_8101_rybbmq', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '77', publicId: 'BSP_8103_ktivk0', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '78', publicId: 'BSP_8121_x8cqf8', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '79', publicId: 'BSP_8187_secdvo', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '80', publicId: 'CRG_2856_m4yh93', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '81', publicId: 'CRG_2868_dk7fdd', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '82', publicId: 'CRG_2871_gcd5f7', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '83', publicId: 'CRG_2974_yxwzy2', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '84', publicId: 'CRG_3005_e1i8ir', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '85', publicId: 'CRG_3042_l6w3kr', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '86', publicId: 'CRG_3058_dljbcm', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '87', publicId: 'CRG_3081_uuip1m', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '88', publicId: 'CRG_3099_de0p4m', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '89', publicId: 'CRG_3156_rrycjk', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '90', publicId: 'CRG_3242_roebus', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '91', publicId: 'CRG_3252_unttvt', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '92', publicId: 'CRG_3259_j6mhos', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '93', publicId: 'CRG_3279_onmwf6', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '94', publicId: 'CRG_3291_dbkcsf', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '95', publicId: 'IMG-20231207-WA0083_hqxdhd', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '96', publicId: 'IMG-20231207-WA0085_jzlc5v', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '97', publicId: 'IMG-20231207-WA0089_zwn5ft', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '98', publicId: 'IMG-20231207-WA0090_hxm0gg', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '99', publicId: 'IMG-20231207-WA0093_cz6b1p', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '100', publicId: 'IMG-20231207-WA0094_ouh1je', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '101', publicId: 'IMG-20231207-WA0095_us8hg1', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '102', publicId: 'IMG-20231207-WA0105_cgzbcu', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '103', publicId: 'IMG-20231207-WA0106_frptqq', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '104', publicId: 'IMG-20231207-WA0107_ptveyt', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '105', publicId: 'IMG_0109_zcx14c', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '106', publicId: 'IMG_0110_lh8q53', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '107', publicId: 'IMG_0111_w7kkul', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '108', publicId: 'IMG_0114_hwxmao', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '109', publicId: 'IMG_0915_fg4upw', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '110', publicId: 'IMG_0917_esk9sh', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '111', publicId: 'IMG_0919_nyukmf', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '112', publicId: 'IMG_0920_rujx5v', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '113', publicId: 'IMG_0922_xcl8ff', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '114', publicId: 'IMG_0925_cntvkz', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '115', publicId: 'IMG_0926_vgwdgl', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '116', publicId: 'IMG_0928_bix0yt', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '117', publicId: 'IMG_0930_tuxyuv', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '118', publicId: 'IMG_0931_ppsqzt', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '119', publicId: 'IMG_0932_id2th0', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '120', publicId: 'IMG_0933_lbwavj', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '121', publicId: 'IMG_0934_k1wnzc', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '122', publicId: 'IMG_0936_zmpee3', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '123', publicId: 'IMG_1083_e6l4j5', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '124', publicId: 'IMG_1085_ln2zac', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '125', publicId: 'IMG_1113_psqkku', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '126', publicId: 'IMG_1242_egagig', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '127', publicId: 'IMG_1444_dww9na', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '128', publicId: 'IMG_1545_nkjgg3', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '129', publicId: 'IMG_1859_pysjbb', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '130', publicId: 'IMG_20241030_105923_ycv4xr', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '131', publicId: 'IMG_20241030_112431_xd6nt2', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '132', publicId: 'IMG_20241030_113034_ucihet', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '133', publicId: 'IMG_20241205_155523_sn8zxb', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '134', publicId: 'IMG_2669_o1a7vm', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '135', publicId: 'IMG_2701_f3dyhb', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '136', publicId: 'IMG_3586_vl3j9m', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '137', publicId: 'IMG_3590_fcryar', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '138', publicId: 'IMG_3741_zsl8bt', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '139', publicId: 'IMG_3849_yjz4iq', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },
  { id: '140', publicId: 'IMG_6753_ozctrb', title: 'Performing Arts', category: 'Cultural Events', section: 'performing-arts' },

  // Sports (30 images). publicIds read from the Cloudinary Admin API and each verified
  // to return 200 (2026-11-16). The first entry is the section's lead image.
  { id: '141', publicId: 'IMG_20251017_085856_j3uxat', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '142', publicId: '489617145_1067781042035355_8636970190333322943_n_liv7vq', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '143', publicId: '558755544_1212269137586544_1542820377437849074_n_cilvd6', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '144', publicId: '559369126_1210145574465567_730105564448700938_n_u3vwiq', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '145', publicId: '560359970_1212271544252970_7478515663173015105_n_tselav', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '146', publicId: '85461ab8-11b1-461c-9c1e-9dc16bfddf13_a5ksrg', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '147', publicId: 'CRG_2464_lo2pw1', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '148', publicId: 'CRG_2465_lj9rnz', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '149', publicId: 'IMG-20230522-WA0032_dvflq5', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '150', publicId: 'IMG-20230523-WA0012_uxjxzl', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '151', publicId: 'IMG_1191_xfgqfl', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '152', publicId: 'IMG_1192_zbqe8m', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '153', publicId: 'IMG_1194_lu1oq5', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '154', publicId: 'IMG_1327_ca5ijs', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '155', publicId: 'IMG_1462_sfep3l', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '156', publicId: 'IMG_1477_uvfelo', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '157', publicId: 'IMG_1479_ge8mty', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '158', publicId: 'IMG_1490_ib2ir1', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '159', publicId: 'IMG_1494_uwftxf', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '160', publicId: 'IMG_1495_sultca', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '161', publicId: 'IMG_20250918_083126_fjctlz', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '162', publicId: 'IMG_20250919_151533_04_idasfp', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '163', publicId: 'IMG_20250923_082711_inxmn6', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '164', publicId: 'IMG_20250925_080648_dgnbiy', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '165', publicId: 'IMG_20250925_214809_a4gt5j', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '166', publicId: 'IMG_20251007_075949_Burst01_tbwhka', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '167', publicId: 'IMG_20251007_083802_reb6je', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '168', publicId: 'IMG_20251022_121313_10_r9g1b6', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '169', publicId: 'IMG_20251022_130537_01_rof09b', title: 'Sports', category: 'Sports Day', section: 'sports' },
  { id: '170', publicId: 'ecbf3f10-8843-4f4f-b1f0-64501a478a46_z166bj', title: 'Sports', category: 'Sports Day', section: 'sports' },

  // Health & Well-Being (15 images). publicIds read from the Cloudinary Admin API and each verified
  // to return 200 (2026-11-16). The first entry is the section's lead image.
  //
  // IMG_0914_er3iox was uploaded to the account root rather than the folder; it is byte-identical to
  // the source file, so it is included here.
  { id: '171', publicId: 'IMG_0913_erll4c', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '172', publicId: 'IMG_0911_tuspqe', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '173', publicId: 'IMG_0912_xipx4a', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '174', publicId: 'IMG_0914_er3iox', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '175', publicId: 'IMG_0918_zx8o4h', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '176', publicId: 'IMG_0935_w7jdmc', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '177', publicId: 'IMG_0995_ajco1v', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '178', publicId: 'IMG_0996_ym0of3', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '179', publicId: 'IMG_0998_hjc8ze', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '180', publicId: 'IMG_1001_azucbx', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '181', publicId: 'IMG_1003_hye6yp', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '182', publicId: 'IMG_1004_swknnh', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '183', publicId: 'IMG_1008_pufk0z', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '184', publicId: 'IMG_1009_i3kam7', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
  { id: '185', publicId: 'IMG_1010_jh47gh', title: 'Health & Well-Being', category: 'Workshops', section: 'health' },
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

