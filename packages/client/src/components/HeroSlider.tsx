import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// import schoolLogo from '../assets/WhatsApp_Image_2025-11-04_at_09.59.04-removebg-preview.png';
// import schoolNameText from '../assets/WhatsApp Image 2025-12-11 at 21.13.04-Photoroom.png';

// Import slider images
import slide1 from '../assets/slider/IMG_5400.JPG';
import slide2 from '../assets/slider/IMG_5141.JPG';
import slide3 from '../assets/slider/IMG-20251029-WA0007.jpeg';
import slide4 from '../assets/slider/IMG_5390.JPG';
import slide5 from '../assets/slider/IMG_5389.JPG';
import slide6 from '../assets/slider/IMG_5396.JPG';
import slide7 from '../assets/slider/IMG_5388.JPG';
import slide8 from '../assets/slider/IMG_5391.JPG';
import slide9 from '../assets/slider/Investiture Ceremony 2025 group picture.jpeg';
import slide10 from '../assets/slider/IMG_5519.JPG';
import slide11 from '../assets/slider/SPS_6086.jpeg';

const HeroSlider: React.FC = () => {
  const slides = [
    { id: 1, image: slide1, alt: 'The Palace School Campus' },
    { id: 2, image: slide2, alt: 'The Palace School Students' },
    { id: 3, image: slide3, alt: 'The Palace School Activities' },
    { id: 4, image: slide4, alt: 'The Palace School Facilities' },
    { id: 5, image: slide5, alt: 'The Palace School Events' },
    { id: 6, image: slide6, alt: 'The Palace School Life' },
    { id: 7, image: slide7, alt: 'The Palace School Campus View' },
    { id: 8, image: slide8, alt: 'The Palace School Students Activities' },
    { id: 9, image: slide9, alt: 'Investiture Ceremony 2025' },
    { id: 10, image: slide10, alt: 'The Palace School Excellence' },
    { id: 11, image: slide11, alt: 'The Palace School Heritage' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slider Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div> */}
          </div>
        ))}
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
        <div className="pb-8">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Slider Dots */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-white rounded-full'
                      : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation - Desktop Only */}
            <div className="hidden md:flex items-center justify-center space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <span className="text-white/80 text-sm font-medium">
                {currentSlide + 1} / {slides.length}
              </span>
              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Left Arrow - Fixed Position */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>

      {/* Right Arrow - Fixed Position */}
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>

      {/* Custom animations */}
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
      `}</style>
    </section>
  );
};

export default HeroSlider;

