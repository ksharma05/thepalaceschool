import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// import schoolLogo from '../assets/WhatsApp_Image_2025-11-04_at_09.59.04-removebg-preview.png';
// import schoolNameText from '../assets/WhatsApp Image 2025-12-11 at 21.13.04-Photoroom.png';

// Import slider images
import slide1 from '../assets/slider/one.jpeg';
import slide2 from '../assets/slider/two.jpeg';
import slide3 from '../assets/slider/three.jpeg';
import slide4 from '../assets/slider/four.jpeg';
import slide5 from '../assets/slider/five.jpeg';
import slide6 from '../assets/slider/six.jpeg';
import slide7 from '../assets/slider/seven.jpeg';
import slide8 from '../assets/slider/eight.jpeg';
import slide9 from '../assets/slider/nine.jpeg';
import slide10 from '../assets/slider/fourteen.jpeg';
import slide14 from '../assets/slider/nineteen.jpeg';
import slide15 from '../assets/slider/initial.jpeg';



const HeroSlider: React.FC = () => {
  const slides = [
    { id: 1, image: slide15, alt: 'The Palace School Campus' },
    { id: 2, image: slide1, alt: 'The Palace School Students' },
    { id: 3, image: slide2, alt: 'The Palace School Activities' },
    { id: 4, image: slide3, alt: 'The Palace School Facilities' },
    { id: 5, image: slide4, alt: 'The Palace School Events' },
    { id: 6, image: slide5, alt: 'The Palace School Life' },
    { id: 7, image: slide6, alt: 'The Palace School Campus View' },
    { id: 8, image: slide7, alt: 'The Palace School Students Activities' },
    { id: 9, image: slide8, alt: 'Investiture Ceremony 2025' },
    { id: 10, image: slide9, alt: 'Investiture Ceremony 2025' },
    { id: 11, image: slide10, alt: 'Investiture Ceremony 2025' },
    { id: 15, image: slide14, alt: 'Investiture Ceremony 2025' },
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
      className="relative w-full overflow-hidden pt-0 sm:mt-0 bg-white sm:bg-gray-100"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Images */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center bg-white sm:bg-gray-100">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-auto max-h-[65vh] sm:max-h-[85vh] object-contain"
            />
            {/* Dark overlay removed to show full image clearly */}
          </div>
        ))}
      </div>

      {/* Mobile Swipe Indicator - Shows briefly on page load */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden pointer-events-none z-20">
        <div className="flex items-center space-x-2 bg-black/60 px-4 py-2 rounded-full text-white text-xs sm:text-sm animate-pulse">
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="font-medium">Swipe to navigate</span>
          <ChevronRightIcon className="h-4 w-4" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col">
        {/* Top Section - Logo and School Info */}
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Side - Logo and School Name */}
                {/* <div className="flex flex-col items-center md:items-start space-y-4 animate-fade-in">
                  <img
                    src={schoolLogo}
                    alt="The Palace School"
                    className="h-32 md:h-40 w-auto drop-shadow-2xl"
                  />
                  <img
                    src={schoolNameText}
                    alt="The Palace School"
                    className="h-12 md:h-16 w-auto brightness-0 invert drop-shadow-lg"
                  />
                </div> */}

                {/* Right Side - CTA and Info */}
                {/* <div className="text-center md:text-right space-y-6 animate-fade-in-delay">
                  <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                      Excellence in Education
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                      Nurturing Young Minds at The City Palace, Jaipur
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                    <Link
                      to="/contact"
                      className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Admission Enquiry
                    </Link>
                    <Link
                      to="/about"
                      className="border-2 border-white text-white hover:bg-white hover:text-secondary-600 px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 backdrop-blur-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Navigation Controls */}
        <div className="pb-4 sm:pb-6 md:pb-8">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Slider Dots */}
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-primary-600 sm:bg-white rounded-full shadow-lg'
                      : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-gray-400 sm:bg-white/50 rounded-full hover:bg-primary-500 sm:hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation & Counter - Desktop Only */}
            <div className="hidden md:flex items-center justify-center space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 md:p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <span className="text-white/90 text-xs md:text-sm font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
                {currentSlide + 1} / {slides.length}
              </span>
              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 md:p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Left Arrow - Fixed Position (Hidden on Mobile/Tablet) */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-200 hover:scale-110 z-10 items-center justify-center shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
      </button>

      {/* Right Arrow - Fixed Position (Hidden on Mobile/Tablet) */}
      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-200 hover:scale-110 z-10 items-center justify-center shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
      </button>

      {/* Custom animations and responsive styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        /* Hide swipe indicator after 3 seconds */
        @keyframes fadeOut {
          0%, 70% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .md\\:hidden.animate-pulse {
            animation: fadeOut 3s ease-in-out forwards;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;

