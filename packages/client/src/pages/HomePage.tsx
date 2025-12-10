import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { GSAPScrollUtils } from '../utils/gsap';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  BookOpenIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import schoolHeaderImage from '../assets/school_header.jpeg';

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featuresTitleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsNumbersRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const linksTitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Cleanup: kill any existing scroll triggers before creating new ones
    GSAPScrollUtils.cleanup();
    
    // Hero section - elegant fade with parallax background
    if (heroRef.current) {
      GSAPScrollUtils.elegantFadeIn(heroRef.current, { duration: 1.8, y: 30 });
    }

    // Hero title - split text reveal
    if (heroTitleRef.current) {
      GSAPScrollUtils.splitTextReveal(heroTitleRef.current, { delay: 0.2, stagger: 0.08 });
    }

    // Hero subtitle - elegant fade
    if (heroSubtitleRef.current) {
      GSAPScrollUtils.elegantFadeIn(heroSubtitleRef.current, { delay: 0.6, duration: 1.2, y: 20 });
    }

    // Video section - scroll width scale animation with opacity fade
    if (videoRef.current) {
      GSAPScrollUtils.scrollWidthScale(videoRef.current, {
        startWidth: '50vw',
        endWidth: '100vw',
        scrub: true,
        start: 'top 70%',
        end: 'top 20%'
      });
      
      // Add opacity animation (0 to 1) starting from current visible position
      gsap.fromTo(videoRef.current, 
        { opacity: 0 },
        { 
          opacity: 1,
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: true
          }
        }
      );
    }

    // Features section title - split reveal
    if (featuresTitleRef.current) {
      GSAPScrollUtils.splitTextReveal(featuresTitleRef.current, { delay: 0.1, stagger: 0.06 });
    }

    // Features grid - staggered children reveal
    if (featuresRef.current) {
      GSAPScrollUtils.staggerChildren(featuresRef.current, { 
        delay: 0.2, 
        stagger: 0.1, 
        duration: 0.7 
      });
    }

    // Stats section - elegant fade
    if (statsRef.current) {
      GSAPScrollUtils.elegantFadeIn(statsRef.current, { duration: 1.2 });
    }

    // Stats numbers - count up animation
    if (statsNumbersRef.current) {
      const stats = statsNumbersRef.current.querySelectorAll('.stat-number');
      stats.forEach((stat, index) => {
        const text = stat.textContent || '';
        const number = parseInt(text.replace(/\D/g, ''));
        const suffix = text.includes('%') ? '%' : text.includes('+') ? '+' : '';
        
        if (!isNaN(number)) {
          GSAPScrollUtils.countUp(stat, {
            endValue: number,
            duration: 2,
            delay: index * 0.15,
            suffix: suffix
          });
        }
      });
    }

    // Links section title - elegant fade
    if (linksTitleRef.current) {
      GSAPScrollUtils.elegantFadeIn(linksTitleRef.current, { duration: 1 });
    }

    // Links cards - staggered elegant scale
    if (linksRef.current) {
      GSAPScrollUtils.staggerChildren(linksRef.current, { 
        delay: 0.2, 
        stagger: 0.12, 
        duration: 0.8 
      });
    }

    // CTA title - split text reveal
    if (ctaTitleRef.current) {
      GSAPScrollUtils.splitTextReveal(ctaTitleRef.current, { delay: 0.1, stagger: 0.08 });
    }

    // CTA section - elegant fade
    if (ctaRef.current) {
      GSAPScrollUtils.elegantFadeIn(ctaRef.current, { duration: 1.5, y: 30 });
    }

    // Parallax effect on hero background elements
    const heroBg = heroRef.current?.querySelector('.hero-bg-decorative');
    if (heroBg) {
      GSAPScrollUtils.elegantParallax(heroBg, { speed: 0.3, direction: 'up' });
    }
    
    // Cleanup function
    return () => {
      GSAPScrollUtils.cleanup();
    };
  }, []);

  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Excellence in Academics',
      description: 'Comprehensive curriculum designed to foster critical thinking and academic excellence.',
      color: 'bg-feature-blue'
    },
    {
      icon: UserGroupIcon,
      title: 'Holistic Development',
      description: 'Focus on character building, leadership skills, and personal growth.',
      color: 'bg-feature-green'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Perspective',
      description: 'International programs and cultural exchange opportunities.',
      color: 'bg-feature-purple'
    },
    {
      icon: BookOpenIcon,
      title: 'Innovative Learning',
      description: 'Modern teaching methods and technology-integrated classrooms.',
      color: 'bg-feature-orange'
    },
    {
      icon: TrophyIcon,
      title: 'Sports & Activities',
      description: 'State-of-the-art facilities for sports and extracurricular activities.',
      color: 'bg-feature-red'
    },
    {
      icon: HeartIcon,
      title: 'Community Service',
      description: 'Instilling values of compassion and social responsibility.',
      color: 'bg-feature-pink'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '2000+', label: 'Successful Alumni' },
    { number: '95%', label: 'Board Results' },
    { number: '50+', label: 'Awards & Recognition' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={schoolHeaderImage} 
            alt="The Palace School Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 ref={heroTitleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-accent-yellow-400">
                The Palace School
              </span>
            </h1>
            <p ref={heroSubtitleRef} className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Nurturing young minds for a brighter tomorrow through excellence in education, 
              character building, and holistic development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Video placeholder for TRAILER - HOMEPAGE */}
        <div className="relative -mt-20 pb-20">
          <div className="container mx-auto px-6">
            <div ref={videoRef} className="bg-surface-secondary rounded-2xl shadow-2xl overflow-hidden opacity-0">
              <div className="aspect-video bg-bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <p className="text-text-primary text-lg font-semibold">School Introduction Video</p>
                  <p className="text-text-tertiary text-sm">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-primary">
        <div className="container mx-auto px-6">
          <div ref={featuresTitleRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Choose The Palace School?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We are committed to providing world-class education that prepares students 
              for success in an ever-changing world.
            </p>
          </div>
          
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card bg-surface-primary p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border-primary"
                >
                  <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-stats-bg">
        <div className="container mx-auto px-6">
          <div ref={statsNumbersRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number text-4xl md:text-5xl font-bold text-stats-text mb-2">
                  {stat.number}
                </div>
                <div className="text-stats-accent text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div ref={linksTitleRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Explore Our School
            </h2>
            <p className="text-xl text-text-secondary">
              Discover what makes The Palace School a special place to learn and grow.
            </p>
          </div>
          
          <div ref={linksRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/history"
              className="group bg-surface-primary p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border-primary hover:border-primary-500"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary-600 transition-colors">
                Our History
              </h3>
              <p className="text-text-secondary mb-4">
                Learn about our rich heritage and the journey that has made us who we are today.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                Read More →
              </span>
            </Link>

            <Link
              to="/contact"
              className="group bg-surface-primary p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border-primary hover:border-primary-500"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary-600 transition-colors">
                Contact Us
              </h3>
              <p className="text-text-secondary mb-4">
                Get in touch with us for admissions, inquiries, or to schedule a visit.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                Get in Touch →
              </span>
            </Link>

            <Link
              to="/leadership"
              className="group bg-surface-primary p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border-primary hover:border-primary-500"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary-600 transition-colors">
                Leadership
              </h3>
              <p className="text-text-secondary mb-4">
                Meet our visionary leaders who guide us towards excellence in education.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                Meet Our Leaders →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="py-20 bg-cta-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 ref={ctaTitleRef} className="text-3xl md:text-4xl font-bold text-cta-text mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-stats-accent mb-8 max-w-2xl mx-auto">
            Take the first step towards a transformative educational journey. 
            Contact us today to learn more about admissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-bg-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Schedule Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
