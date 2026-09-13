// Single source of truth for awards & achievements content — feeds AwardsPage.tsx.
// Narrative copy is supplied by the school; do not reword when editing.
// To add a new award: drop the image in ../assets/awards, import it below, and
// prepend an entry to `awards` (newest first).

import educationWorldRankingsImage from '../assets/awards/education-world-rankings-2025-26.jpeg';
import designThinkingTrophyImage from '../assets/awards/education-world-design-thinking-trophy.jpeg';
import ridsCertificatePresentationImage from '../assets/awards/rids-certificate-presentation.jpeg';
import ridsAwardCeremonyImage from '../assets/awards/rids-award-ceremony.jpeg';
import ridsCertificateImage from '../assets/awards/rids-certificate.jpeg';

export interface AwardImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Award {
  /** Anchor id — enables deep links such as /awards#rids-award */
  id: string;
  title: string;
  awardingBody: string;
  year: string;
  date?: string;
  /** Short headline used on the summary cards at the top of the page */
  summary: string;
  /** Icon key mapped to a Heroicon + feature colour in AwardsPage */
  icon: 'globe' | 'trophy' | 'academic';
  /** Bullet honours, rendered as pills */
  highlights: string[];
  /** Narrative paragraphs */
  body: string[];
  images: AwardImage[];
}

export const awards: Award[] = [
  {
    id: 'rids-award',
    title: 'RIDS Award — Recognition of International Dimension in Schools',
    awardingBody: 'British Council',
    year: '2025–2028',
    date: '25 August 2025 · New Delhi',
    summary: 'Recognised by the British Council for embedding an international dimension across the curriculum.',
    icon: 'globe',
    highlights: [
      'Recognised for outstanding development of the international dimension in the curriculum',
      'Valid 2025–2028',
    ],
    body: [
      'The Palace School received the prestigious RIDS Award (Recognition of International Dimension in Schools) from the British Council. This honour acknowledges the school’s sustained efforts in embedding international dimension across its curriculum. Through collaborative projects with our partner school abroad, cultural exchange programmes, and activities integrating global issues such as sustainability, financial literacy, and environmental awareness, students developed broader perspectives and cross-cultural understanding.',
      'We extend our heartfelt gratitude to Institution Saint Louis - Saumur for their unwavering collaboration and support.',
    ],
    images: [
      {
        src: ridsAwardCeremonyImage,
        alt: 'The Palace School receiving the RIDS Award at the British Council ceremony in New Delhi',
        caption: 'The RIDS Award presented at the British Council ceremony, New Delhi',
      },
      {
        src: ridsCertificatePresentationImage,
        alt: 'The Palace School representative with the RIDS certificate at the British Council backdrop',
        caption: 'Recognition of International Dimension in Schools 2025–2028',
      },
      {
        src: ridsCertificateImage,
        alt: 'British Council RIDS certificate awarded to The Palace School, Jaipur for 2025–28',
        caption: 'The certificate, signed by Duncan Wilson, Managing Director, BC Education India',
      },
    ],
  },
  {
    id: 'education-world-design-thinking',
    title: 'Design Thinking & Experiential Learning Leader — Ranked No. 1 in India',
    awardingBody: 'EducationWorld Grand Jury India School Rankings',
    year: '2025-26',
    summary: 'Ranked No. 1 in India, Rajasthan and Jaipur for design thinking and experiential learning.',
    icon: 'trophy',
    highlights: [
      'India — Ranked No. 1',
      'Rajasthan — Ranked No. 1',
      'Jaipur — Ranked No. 1',
    ],
    body: [
      'The EducationWorld Grand Jury India School Rankings 2025-26 placed The Palace School first in the country as a Design Thinking & Experiential Learning Leader, alongside the top rank in both Rajasthan and Jaipur.',
      'The recognition reflects a classroom culture built on enquiry, hands-on problem solving and learning that reaches well beyond the textbook.',
    ],
    images: [
      {
        src: designThinkingTrophyImage,
        alt: 'EducationWorld Grand Jury India School Rankings 2025-26 trophy naming The Palace School India’s No. 1 Design Thinking & Experiential Learning Leader',
        caption: 'EducationWorld Grand Jury India School Rankings 2025-26',
      },
    ],
  },
  {
    id: 'education-world-rankings',
    title: 'Indian School Rankings 2025-26',
    awardingBody: 'EducationWorld',
    year: '2025-26',
    summary: 'Ranked No. 3 in Rajasthan and No. 3 in Jaipur in the Day Co-ed category.',
    icon: 'academic',
    highlights: [
      'Ranked No. 3 in Rajasthan',
      'Ranked No. 3 in Jaipur (Day Co-ed Category)',
    ],
    body: [
      'We are delighted to share that The Palace School has been recognised in the Indian School Rankings 2025-26 Awards with distinguished honours.',
      'This prestigious award was received by our esteemed Principal, Ms. Urvashi Warman. The visionary leadership of The Management has been instrumental in achieving this milestone.',
      'This recognition reflects the collective dedication of our students, the steadfast support of our parents, and the commitment of our faculty and staff. Your trust in our vision drives us to pursue excellence in education and holistic development. We extend our heartfelt gratitude to our parents and students for being integral to this journey. Together, we will continue to inspire and shape bright futures.',
    ],
    images: [
      {
        src: educationWorldRankingsImage,
        alt: 'The Palace School announcement of its Indian School Rankings 2025-26 honours',
        caption: 'Ranked No. 3 in Rajasthan and No. 3 in Jaipur (Day Co-ed Category)',
      },
    ],
  },
];
