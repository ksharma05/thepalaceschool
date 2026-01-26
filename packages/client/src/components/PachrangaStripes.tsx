import React from 'react';

interface PachrangaStripesProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thinner' | 'thin' | 'medium' | 'thick';
  className?: string;
}

/**
 * PachrangaStripes Component
 * Displays the 5 colors of the Jaipur Royal Family's Pachranga flag
 * Colors (in order): Red, Yellow, Cream/Araish, Green, Blue
 */
const PachrangaStripes: React.FC<PachrangaStripesProps> = ({ 
  orientation = 'horizontal', 
  thickness = 'thin',
  className = '' 
}) => {
  // JEF 2025 Pachranga colors in order
  const colors = [
    '#C5202F', // Red - top
    '#F9A11B', // Yellow - second
    '#F7F1E5', // Cream/Araish - middle
    '#225657', // Green - fourth
    '#2B2860', // Blue - bottom
  ];

  // Thickness mapping
  const thicknessMap = {
    thinner: orientation === 'horizontal' ? 'h-0.5' : 'w-0.5',
    thin: orientation === 'horizontal' ? 'h-1' : 'w-1',
    medium: orientation === 'horizontal' ? 'h-2' : 'w-2',
    thick: orientation === 'horizontal' ? 'h-3' : 'w-3',
  };

  const sizeClass = thicknessMap[thickness];

  if (orientation === 'vertical') {
    return (
      <div className={`flex flex-row ${className}`}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={`${sizeClass} flex-1`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    );
  }

  // Horizontal (default)
  return (
    <div className={`flex flex-col ${className}`}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={`${sizeClass} w-full`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default PachrangaStripes;

