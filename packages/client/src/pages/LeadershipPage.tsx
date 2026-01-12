import React, { useEffect, useRef } from 'react';
import { useGSAP } from '../hooks/useGSAP';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  UserCircleIcon
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);
import gauraviKumariImage from '../assets/Princess Gauravi Kumari.jpg';
import lakshrajPrakashImage from '../assets/HH Maharaja Lakshraj Prakash.jpg';
import rajmataPadminiDeviImage from '../assets/HH Rajmata Padmini Devi .jpg';
import padmanabhSinghImage from '../assets/WhatsApp Image 2025-12-11 at 09.02.43.jpeg';
import diyaKumariImage from '../assets/WhatsApp Image 2025-12-10 at 15.30.36.jpeg';

const LeadershipPage: React.FC = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const leadershipRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const leadershipMessages = [
    {
      id: 'rajmata-sahib',
      title: 'Message from The Chairperson',
      name: 'HH Rajmata Padmini Devi',
      role: 'Chairperson',
      excerpt: 'A message from the Chairperson about supporting her daughter\'s vision and the school\'s growth at The City Palace, Jaipur...',
      image: rajmataPadminiDeviImage,
      hasImage: true,
      link: '/leadership/rajmata-sahib'
    },
    {
      id: 'vice-chairperson',
      title: 'Message From The Vice Chairperson',
      name: 'HH Maharaja Sawai Padmanabh Singh',
      role: 'Vice-Chairperson',
      excerpt: 'As the Vice Chairperson and its very first student, I take immense pride in witnessing how far the school has come since its inception in 2001...',
      image: padmanabhSinghImage,
      hasImage: true,
      link: '/leadership/vice-chairperson'
    },
    {
      id: 'founder',
      title: 'Message From The Founder',
      name: 'Princess Diya Kumari',
      role: 'Deputy Chief Minister, Rajasthan & Founder',
      excerpt: 'The Palace School, founded in 2001 as a Montessori pre-school, has grown into a nationally recognized institution known for its excellence in education and values...',
      image: diyaKumariImage,
      hasImage: true,
      link: '/leadership/founder'
    },
    {
      id: 'princess-gaurav',
      title: 'Message From The Treasurer',
      name: 'Princess Gauravi Kumari',
      role: 'Treasurer',
      excerpt: 'A heartfelt message from an alumna and treasurer about the school\'s remarkable growth and continued vision...',
      image: gauraviKumariImage,
      hasImage: true,
      link: '/leadership/princess-gaurav'
    },
    {
      id: 'maharaja-lakshraj-prakash',
      title: 'Message from HH Maharaja Lakshraj Prakash',
      name: 'HH Maharaja Lakshraj Prakash of Sirmour',
      role: 'Member, Board of Governors & Alumnus',
      excerpt: 'A heartfelt message from an alumnus and Board member about returning to The Palace School...',
      image: lakshrajPrakashImage,
      hasImage: true,
      link: '/leadership/maharaja-lakshraj-prakash'
    }
  ];

  useEffect(() => {
    if (!carouselContainerRef.current || !carouselRef.current) return;

    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll('.leadership-card');
    
    if (cards.length === 0) return;
    
    // Calculate total scroll width
    const totalWidth = cards.length * window.innerWidth;
    
    // Create snap points for each card
    const snapValues = Array.from({ length: cards.length }, (_, i) => i / (cards.length - 1));
    
    // Create horizontal scroll animation with snap
    // In the useEffect, after getting the cards:
gsap.set(cards, { opacity: 1 });
    gsap.to(carousel, {
      x: () => -(totalWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: carouselContainerRef.current,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        snap: {
          snapTo: snapValues,
          duration: { min: 0.2, max: 0.6 },
          ease: 'power2.inOut',
        },
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [leadershipMessages.length]);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Leadership
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Meet the visionary leaders who guide The Palace School towards 
              excellence in education and character building.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <section ref={leadershipRef} className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Leadership Messages
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Inspiring messages from our distinguished patrons and founders
            </p>
            <p className="text-sm text-text-tertiary mt-4">
              Scroll down to explore each message
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section ref={carouselContainerRef} className="relative bg-bg-primary overflow-hidden">
        <div ref={carouselRef} className="flex items-center h-screen">
          {leadershipMessages.map((message) => {
            const IconComponent = UserCircleIcon;
            const hasImage = message.hasImage && message.image && message.image !== '/api/placeholder/400/300';
            return (
              <div
                key={message.id}
                className="leadership-card flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 md:px-16 lg:px-24"
              >
                <Link
                  to={message.link}
                  className="group w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Image Section */}
                  <div className="relative w-full">
                    <div className="aspect-[3/4] lg:aspect-[3/4] bg-primary-600 rounded-2xl overflow-hidden shadow-2xl border-4 border-border-primary group-hover:border-primary-500 transition-all duration-500">
                      {hasImage ? (
                        <img
                          src={message.image}
                          alt={message.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <IconComponent className="h-32 w-32 text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 group-hover:text-primary-600 transition-colors duration-300">
                        {message.title}
                      </h3>
                      <p className="text-2xl md:text-3xl text-primary-600 font-bold mb-3">
                        {message.name}
                      </p>
                      <p className="text-lg md:text-xl text-text-secondary font-medium mb-6">
                        {message.role}
                      </p>
                    </div>
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                      {message.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary-600 text-lg font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Read Full Message</span>
                      <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Team Section */}
      {/* <section ref={messagesRef} className="py-20 bg-bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our dedicated team of educational leaders who make excellence possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={index}
                  className="bg-surface-secondary p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300 border border-border-primary"
                >
                  <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-text-secondary text-sm mb-2">
                    {member.department}
                  </p>
                  <p className="text-text-tertiary text-xs">
                    {member.experience}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-cta-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Educational Journey
          </h2>
          <p className="text-xl text-stats-accent mb-8 max-w-2xl mx-auto">
            Experience the difference that visionary leadership makes in education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-bg-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              to="/history"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
