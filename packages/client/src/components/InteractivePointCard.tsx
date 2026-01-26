import React, { useState } from 'react';

interface InteractivePointCardProps {
  number: number;
  title: string;
  content: React.ReactNode;
  image: string;
  imageAlt: string;
}

const InteractivePointCard: React.FC<InteractivePointCardProps> = ({
  number,
  title,
  content,
  image,
  imageAlt,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: '500px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Initial State - Dark Overlay with Title */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          {/* Number Badge */}
          <div className="mb-4">
            <span className="flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold shadow-lg">
              {number}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Hover State - White Overlay with Content (Fades in from center) */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: isHovered
            ? 'radial-gradient(circle, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.98) 60%, rgba(255,255,255,0.95) 100%)'
            : 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)',
          transitionDelay: isHovered ? '400ms' : '0ms',
        }}
      >
        <div
          className={`p-8 max-w-full transition-all duration-500 ${
            isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}
          style={{
            transitionDelay: isHovered ? '700ms' : '0ms',
          }}
        >
          {/* Number Badge */}
          <div className="flex justify-center mb-4">
            <span className="flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full text-lg font-bold shadow-md">
              {number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-secondary-600 mb-4 text-center">
            {title}
          </h3>

          {/* Content */}
          <div className="text-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      </div>

      {/* Subtle border animation on hover */}
      <div
        className={`absolute inset-0 border-4 border-primary-600 rounded-xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transitionDelay: isHovered ? '600ms' : '0ms',
        }}
      />
    </div>
  );
};

export default InteractivePointCard;

