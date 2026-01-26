import React from 'react';
import { Link } from 'react-router-dom';
import schoolHeaderImage from '../assets/school_header.jpeg';
import PachrangaStripes from '../components/PachrangaStripes';
import InteractivePointCard from '../components/InteractivePointCard';

const WhyChooseUsPage: React.FC = () => {
  // Define the 8 points with their content
  const points = [
    {
      number: 1,
      title: 'A School Like No Other — Learning in Living History',
      image: new URL('../assets/slider/IMG_5400.JPG', import.meta.url).href,
      imageAlt: 'City Palace Campus Heritage',
      content: (
        <p className="text-base md:text-lg">
          Located within the City Palace, Jaipur, our campus offers students the extraordinary privilege of learning in a space rich with culture, heritage, and history. Surrounded by royal architecture, serene gardens, and spiritual landmarks, children grow in an environment that fosters a deep sense of identity, pride, and perspective.
        </p>
      ),
    },
    {
      number: 2,
      title: 'Academic Excellence with Future-Ready Learning',
      image: new URL('../assets/slider/IMG_5141.JPG', import.meta.url).href,
      imageAlt: 'Academic Excellence',
      content: (
        <div>
          <p className="text-base md:text-lg mb-3">
            We offer a strong academic foundation aligned with CBSE, NEP-2020, and modern pedagogical practices, integrating:
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Conceptual clarity and critical thinking</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Experiential and project-based learning</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="font-semibold">Digital literacy, research skills, and innovation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Skill education through <span className="font-semibold">Kaushal Kendra</span></span>
            </li>
          </ul>
          <p className="text-sm md:text-base font-semibold italic mt-3">
            Our focus is not just on marks, but on mastery, meaning, and mindset.
          </p>
        </div>
      ),
    },
    {
      number: 3,
      title: 'Holistic Development — Mind, Body, Heart & Spirit',
      image: new URL('../assets/slider/IMG-20251029-WA0007.jpeg', import.meta.url).href,
      imageAlt: 'Holistic Development Activities',
      content: (
        <div>
          <p className="text-base md:text-lg mb-3">
            At The Palace School, education goes far beyond textbooks. We nurture the whole child through:
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Sports, swimming, yoga, and fitness</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Visual and performing arts</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Leadership programs and student voice platforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Emotional intelligence, values education, and life-skills training</span>
            </li>
          </ul>
          <p className="text-sm md:text-base mt-3">
            We believe true success lies in balanced growth and inner strength.
          </p>
        </div>
      ),
    },
    {
      number: 4,
      title: 'Inclusion, Care & Emotional Well-Being — The Magic Pie',
      image: new URL('../assets/slider/IMG_5390.JPG', import.meta.url).href,
      imageAlt: 'Inclusive Education',
      content: (
        <p className="text-base md:text-lg">
          Our pioneering <span className="font-semibold">Magic Pie model</span> ensures inclusive education and personalized support for every learner. With special educators, counsellors, therapists, and individualized learning plans, we celebrate diversity, empathy, and equity, ensuring no child is left behind.
        </p>
      ),
    },
    {
      number: 5,
      title: 'Safe, Supportive & Child-Centric Environment',
      image: new URL('../assets/slider/IMG_5389.JPG', import.meta.url).href,
      imageAlt: 'Safe Learning Environment',
      content: (
        <p className="text-base md:text-lg">
          We offer a secure, nurturing, and respectful school culture where children feel seen, heard, and valued. Our dedicated mentors, counsellors, and teachers <span className="font-semibold">focus on building confidence, resilience, and independence</span>, preparing students to <span className="font-semibold">navigate life with strength and grace</span>.
        </p>
      ),
    },
    {
      number: 6,
      title: 'Leadership, Values & Character Building',
      image: new URL('../assets/slider/IMG_5396.JPG', import.meta.url).href,
      imageAlt: 'Leadership Development',
      content: (
        <div>
          <p className="text-base md:text-lg mb-3">
            Inspired by India's cultural wisdom and global outlook, we cultivate:
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Integrity and responsibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Leadership and service</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Environmental and social consciousness</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span><span className="font-semibold">Respect for tradition</span> alongside openness to change</span>
            </li>
          </ul>
          <p className="text-sm md:text-base mt-3">
            Our students grow into thoughtful leaders and compassionate changemakers.
          </p>
        </div>
      ),
    },
    {
      number: 7,
      title: 'Experiential Learning Rooted in Heritage & Innovation',
      image: new URL('../assets/slider/IMG_5388.JPG', import.meta.url).href,
      imageAlt: 'Experiential Learning',
      content: (
        <div>
          <p className="text-base md:text-lg mb-3">
            From Education Through Monuments to student-led innovation projects, cultural collaborations, and global exchanges, learning at The Palace School is hands-on, meaningful, and memorable.
          </p>
          <p className="text-sm md:text-base font-semibold">
            <span className="italic">Children</span> don't just learn — <span className="italic">they create, explore, perform, research, design, and lead</span>.
          </p>
        </div>
      ),
    },
    {
      number: 8,
      title: 'A Vibrant Community of Excellence & Purpose',
      image: new URL('../assets/slider/IMG_5391.JPG', import.meta.url).href,
      imageAlt: 'School Community',
      content: (
        <p className="text-base md:text-lg">
          With <span className="font-semibold">strong partnerships, inspiring mentors, supportive parents, and a legacy of excellence</span>, The Palace School fosters a <span className="font-semibold">dynamic learning ecosystem</span> where students are encouraged to dream boldly and achieve confidently.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800 text-white py-48">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={schoolHeaderImage} 
            alt="The Palace School Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose The Palace School
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Where Knowledge Becomes Wisdom, and Learning Becomes a Legacy
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Pachranga Stripes - Top Border */}
              <PachrangaStripes orientation="horizontal" thickness="thinner" />
              
              <div className="p-8">
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Choosing the right school is one of the most important decisions a parent makes — it shapes not only a child's academic future but also their values, confidence, creativity, and character.
                  </p>
                  
                  <p>
                    The Palace School offers a rare and enriching educational experience where heritage, innovation, inclusion, and holistic development come together to nurture future-ready global citizens.
                  </p>
                  
                  <div className="flex items-stretch">
                    <PachrangaStripes orientation="vertical" thickness="thinner" className="mr-6" />
                    <p className="text-xl font-semibold text-secondary-600 py-2">
                      Guided by our motto, "Vidyaay Amritum Ashnute" — Knowledge is the Elixir of Life, we believe education must inspire wisdom, compassion, courage, and lifelong curiosity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Points Section - Interactive Cards */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {points.map((point) => (
              <InteractivePointCard
                key={point.number}
                number={point.number}
                title={point.title}
                content={point.content}
                image={point.image}
                imageAlt={point.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Quote Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-primary-600 pl-8 py-6 bg-gradient-to-r from-white to-gray-50 rounded-r-xl shadow-md">
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-600 italic leading-relaxed">
                The Palace School — Where Knowledge Becomes Wisdom, and Learning Becomes a Legacy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Join a community where tradition meets innovation, and every child's potential is nurtured with care and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule a Campus Visit
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Apply for Admission
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsPage;

