// Single source of truth for leadership content — feeds both the leadership
// listing page (LeadershipPage.tsx) and the per-person detail pages via
// LeadershipDetailTemplate. All text below is copied verbatim from the
// pages/pages that previously hardcoded it; do not reword when editing.
import type { ReactNode } from 'react';

import diyaKumariImage from '../assets/WhatsApp Image 2025-12-10 at 15.30.36.jpeg';
import rajmataPadminiDeviImage from '../assets/HH Rajmata Padmini Devi .jpg';
import lakshrajPrakashImage from '../assets/HH Maharaja Lakshraj Prakash.jpg';
import gauraviKumariImage from '../assets/Princess Gauravi Kumari.jpg';
import padmanabhSinghImage from '../assets/WhatsApp Image 2025-12-11 at 09.02.43.jpeg';

export interface LeadershipSignatureLine {
  text: string;
  variant?: 'primary' | 'secondary';
}

export interface LeadershipAboutBlock {
  heading: string;
  body: string;
}

export interface LeadershipProfile {
  id: string;
  path: string;
  image: string;
  listing: {
    title: string;
    name: string;
    role?: string;
    excerpt: string;
  };
  detail: {
    title: string;
    imageAlt: string;
    bioParagraphs: ReactNode[];
    signature: {
      salutation?: string;
      name: string;
      // roleLines: LeadershipSignatureLine[];
    };
    aboutHeading: string;
    aboutBlocks: LeadershipAboutBlock[];
  };
}

export const leadershipProfiles: Record<string, LeadershipProfile> = {
  'rajmata-sahib': {
    id: 'rajmata-sahib',
    path: '/leadership/rajmata-sahib',
    image: rajmataPadminiDeviImage,
    listing: {
      title: 'Message from The Chairperson',
      name: 'HH Rajmata Padmini Devi Ji',
      excerpt:
        "A message from the Chairperson about supporting her daughter's vision and the school's growth at The City Palace, Jaipur...",
    },
    detail: {
      title: 'Message from The Chairperson',
      imageAlt: 'HH Rajmata Padmini Devi',
      bioParagraphs: [
        "As Chairperson of The Palace School, it gives me immense joy to see the vision of my daughter, Diya Kumari, flourish into a nationally acclaimed institution. From its beginnings in 2001, the school has grown with dedication, values, and a commitment to excellence.",
        <>
          My late husband, <span className="font-semibold">HH Maharaja Sawai Bhawani Singh MVC</span>, and I were proud to support this endeavour and chose to make The City Palace, Jaipur, its home. We believed that the royal heritage, serene surroundings, and inspiring architecture would provide children with an environment that nurtures discipline, creativity, and pride in their culture.
        </>,
        "Today, seeing young minds thrive here reaffirms that decision, as the Palace's rich history blends seamlessly with modern education, shaping confident and well-rounded individuals.",
      ],
      signature: {
        salutation: 'With warm regards,',
        name: 'HH Rajmata Padmini Devi Ji',
        // roleLines: [{ text: 'Chairperson' }, { text: 'The Palace School' }],
      },
      aboutHeading: 'About HH Rajmata Padmini Devi',
      aboutBlocks: [
        {
          heading: 'Visionary Leadership',
          body: "As Chairperson, HH Rajmata Padmini Devi has been instrumental in supporting her daughter's vision and ensuring The Palace School maintains its commitment to excellence while honoring its royal heritage.",
        },
        {
          heading: 'Royal Heritage & Modern Education',
          body: 'Together with her late husband HH Maharaja Sawai Bhawani Singh MVC, she made the visionary decision to establish The Palace School at The City Palace, Jaipur, blending rich history with modern educational practices.',
        },
      ],
    },
  },

  'vice-chairperson': {
    id: 'vice-chairperson',
    path: '/leadership/vice-chairperson',
    image: padmanabhSinghImage,
    listing: {
      title: 'Message From The Vice Chairperson',
      name: 'HH Maharaja Sawai Padmanabh Singh Ji',
      excerpt:
        'As the Vice Chairperson and its very first student, I take immense pride in witnessing how far the school has come since its inception in 2001...',
    },
    detail: {
      title: 'Message From The Vice Chairperson',
      imageAlt: 'HH Maharaja Sawai Padmanabh Singh',
      bioParagraphs: [
        "As the Vice Chairperson of The Palace School, and its very first student, I take immense pride in witnessing how far the school has come since its inception in 2001. What began as my mother, Diya Kumari's, vision to provide a nurturing and progressive learning environment has now grown into a nationally respected institution.",
        'Seeing the same classrooms that shaped my early years now ignite curiosity and confidence in so many young learners fills me with deep satisfaction.',
        "I remain committed to carrying forward my mother's vision — strengthening the school's academic excellence, global outlook, and value-based education — while ensuring that The Palace School continues to prepare students to meet the future with wisdom, grace, and leadership.",
      ],
      signature: {
        salutation: 'With warm regards,',
        name: 'HH Maharaja Sawai Padmanabh Singh Ji',
        // roleLines: [
        //   { text: 'Vice-Chairperson' },
        //   { text: 'The Palace School' },
        //   { text: 'Jaipur', variant: 'secondary' },
        // ],
      },
      aboutHeading: 'About HH Maharaja Sawai Padmanabh Singh',
      aboutBlocks: [
        {
          heading: 'The First Student',
          body: "As the very first student of The Palace School, HH Maharaja Sawai Padmanabh Singh holds a unique connection to the institution. His journey from student to Vice-Chairperson embodies the school's commitment to nurturing future leaders.",
        },
        {
          heading: 'Continuing the Legacy',
          body: "Committed to carrying forward his mother's vision, he focuses on strengthening academic excellence, fostering a global outlook, and maintaining value-based education that prepares students for leadership with wisdom and grace.",
        },
      ],
    },
  },

  founder: {
    id: 'founder',
    path: '/leadership/founder',
    image: diyaKumariImage,
    listing: {
      title: 'Message From The Founder',
      name: 'Princess Diya Kumari Ji',
      role: 'Deputy Chief Minister, Rajasthan',
      excerpt:
        'The Palace School, founded in 2001 as a Montessori pre-school, has grown into a nationally recognized institution known for its excellence in education and values...',
    },
    detail: {
      title: 'Message From The Founder',
      imageAlt: 'Princess Diya Kumari',
      bioParagraphs: [
        'The Palace School, founded in 2001 as a Montessori pre-school, has grown into a nationally recognized institution known for its excellence in education and values. It fills me with immense pride to see our vision of nurturing confident, compassionate, and creative learners come alive each day.',
        'Our pedagogy integrates the latest educational practices aligned with the tenets of NEP 2020, ensuring holistic development and experiential learning. At The Palace School, we believe in empowering every child to discover their innate potential and become a lifelong learner ready to contribute meaningfully to the nation and the world.',
        "The school's location within the historic City Palace complex is not merely symbolic — it represents our commitment to blending heritage with modernity, tradition with innovation. We are proud to provide an environment where students are exposed to the rich cultural legacy of Rajasthan while being prepared for a globalized future.",
      ],
      signature: {
        salutation: 'With warm regards',
        name: 'Shrimati Diya Kumari Ji',
        // roleLines: [{ text: 'Deputy Chief Minister, Rajasthan' }, { text: 'Founder, The Palace School' }],
      },
      aboutHeading: 'About Shrimati Diya Kumari',
      aboutBlocks: [
        {
          heading: 'Founder & Visionary',
          body: 'Shrimati Diya Kumari founded The Palace School in 2001 with a vision to create an institution that combines excellence in education with strong values. Under her guidance, the school has grown from a small Montessori pre-school to a nationally recognized institution.',
        },
        {
          heading: 'Public Service',
          body: 'As the Deputy Chief Minister of Rajasthan, Shrimati Diya Kumari brings her commitment to education and development to a larger platform. Her dedication to empowering young minds continues to inspire the entire Palace School community.',
        },
      ],
    },
  },

  'princess-gaurav': {
    id: 'princess-gaurav',
    path: '/leadership/princess-gaurav',
    image: gauraviKumariImage,
    listing: {
      title: 'Message From The Treasurer',
      name: 'Princess Gauravi Kumari Ji',
      excerpt:
        "A heartfelt message from an alumna and treasurer about the school's remarkable growth and continued vision...",
    },
    detail: {
      title: 'Message From The Treasurer',
      imageAlt: 'Princess Gauravi Kumari',
      bioParagraphs: [
        "As an alumna of The Palace School and now serving as Treasurer of its School Management Committee, I feel immense pride and joy in witnessing the school's remarkable growth. Having studied here till Class 3, when the school offered only pre-primary and early primary classes, it is truly heartwarming to see how far this institution—founded by my mother, Diya Kumari—has advanced in both scale and spirit.",
        'The Palace School continues to embody her vision of holistic education rooted in values, creativity, and excellence. I am deeply committed to contributing to its ongoing journey and look forward to being an active part of its continued progress and success.',
      ],
      signature: {
        salutation: 'With warm regards,',
        name: 'Princess Gauravi Kumari Ji',
        // roleLines: [
        //   { text: 'Treasurer' },
        //   { text: 'The Palace School' },
        //   { text: 'School Management Committee' },
        // ],
      },
      aboutHeading: 'About Princess Gauravi Kumari',
      aboutBlocks: [
        {
          heading: 'Alumna & Treasurer',
          body: 'Princess Gauravi Kumari is a proud alumna of The Palace School, having studied here till Class 3. Now serving as Treasurer of the School Management Committee, she brings both personal connection and dedication to the institution\'s growth.',
        },
        {
          heading: 'Continuing the Vision',
          body: "As the daughter of the founder, Princess Gauravi Kumari is deeply committed to continuing her mother's vision of holistic education, ensuring the school's continued progress and success.",
        },
      ],
    },
  },

  'maharaja-lakshraj-prakash': {
    id: 'maharaja-lakshraj-prakash',
    path: '/leadership/maharaja-lakshraj-prakash',
    image: lakshrajPrakashImage,
    listing: {
      title: 'Message from HH Maharaja Lakshraj Prakash',
      name: 'HH Maharaja Lakshraj Prakash of Sirmour Ji',
      role: 'Member, Board of Governors & Alumnus',
      excerpt:
        'A heartfelt message from an alumnus and Board member about returning to The Palace School...',
    },
    detail: {
      title: 'Message from HH Maharaja Lakshraj Prakash of Sirmour',
      imageAlt: 'HH Maharaja Lakshraj Prakash',
      bioParagraphs: [
        'Returning to The Palace School, not as a student this time but as a Member of its Board of Governors, feels like coming home. Some of my earliest and happiest memories were made within these very walls — where curiosity was encouraged, friendships were forged, and every day was an adventure in learning.',
        <>
          Having pursued my education abroad, I now realise even more deeply how forward-thinking yet grounded my early schooling here was. The Palace School blends global standards of education with the warmth and rootedness of Indian values — giving its students not just knowledge, but character and confidence. It is this rare balance that makes all <span className="font-semibold text-primary-600">PalS</span> (Palace School student) stand out, wherever in the world they may go.
        </>,
      ],
      signature: {
        salutation: 'With warm regards,',
        name: 'HH Maharaja Lakshraj Prakash Ji',
        // roleLines: [{ text: 'Sirmour' }],
      },
      aboutHeading: 'About HH Maharaja Lakshraj Prakash',
      aboutBlocks: [
        {
          heading: 'Alumnus & Board Member',
          body: 'HH Maharaja Lakshraj Prakash is a proud alumnus of The Palace School, where he spent his formative years creating lasting memories. Now serving as a Member of the Board of Governors, he brings a unique perspective combining his student experience with his leadership role.',
        },
        {
          heading: 'Global Perspective',
          body: "Having pursued education abroad, HH Maharaja Lakshraj Prakash brings valuable insights into how The Palace School's balanced approach to global standards and Indian values prepares students for success anywhere in the world.",
        },
      ],
    },
  },
};
