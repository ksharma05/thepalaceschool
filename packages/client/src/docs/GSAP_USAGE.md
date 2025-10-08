# GSAP Animation Usage Guide

This document explains how to use the GSAP animations implemented in The Palace School website.

## Overview

The website includes a comprehensive GSAP animation system with:
- Smooth scrolling for the entire site
- Scroll-triggered animations
- Reusable animation hooks
- Dark mode support

## Components

### 1. GSAPScrollUtils Class

Located in `src/utils/gsap.ts`, this class provides static methods for creating animations:

```typescript
import { GSAPScrollUtils } from '../utils/gsap';

// Fade in animation
GSAPScrollUtils.fadeInOnScroll(element, { delay: 0, duration: 1, y: 50 });

// Slide in from left
GSAPScrollUtils.slideInLeft(element, { delay: 0.2, duration: 1 });

// Slide in from right
GSAPScrollUtils.slideInRight(element, { delay: 0.4, duration: 1 });

// Scale in animation
GSAPScrollUtils.scaleIn(element, { delay: 0.6, duration: 1 });

// Parallax effect
GSAPScrollUtils.parallax(element, 0.5); // speed multiplier
```

### 2. useGSAP Hook

Located in `src/hooks/useGSAP.ts`, this hook provides an easy way to animate elements:

```typescript
import { useGSAP } from '../hooks/useGSAP';

const MyComponent = () => {
  // Simple fade in animation
  const fadeRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  
  // Slide in from left with delay
  const slideRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  
  // Scale in animation
  const scaleRef = useGSAP({ animation: 'scaleIn', delay: 0.4 });

  return (
    <div>
      <div ref={fadeRef}>This will fade in</div>
      <div ref={slideRef}>This will slide in from left</div>
      <div ref={scaleRef}>This will scale in</div>
    </div>
  );
};
```

### 3. useGSAPTimeline Hook

For animating multiple elements in sequence:

```typescript
import { useGSAPTimeline } from '../hooks/useGSAP';

const MyComponent = () => {
  const containerRef = useGSAPTimeline([
    { selector: '.element-1', animation: 'fadeIn', delay: 0, duration: 1 },
    { selector: '.element-2', animation: 'slideInLeft', delay: 0.2, duration: 1 },
    { selector: '.element-3', animation: 'scaleIn', delay: 0.4, duration: 1 }
  ]);

  return (
    <div ref={containerRef}>
      <div className="element-1">First element</div>
      <div className="element-2">Second element</div>
      <div className="element-3">Third element</div>
    </div>
  );
};
```

## Available Animations

### 1. fadeIn
- Elements fade in from below
- Options: `delay`, `duration`, `y` (starting Y position)

### 2. slideInLeft
- Elements slide in from the left
- Options: `delay`, `duration`, `x` (starting X position)

### 3. slideInRight
- Elements slide in from the right
- Options: `delay`, `duration`, `x` (starting X position)

### 4. scaleIn
- Elements scale in from smaller to normal size
- Options: `delay`, `duration`, `scale` (starting scale)

### 5. parallax
- Elements move at different speeds creating parallax effect
- Options: `speed` (speed multiplier, 0.5 = half speed)

## Smooth Scrolling

Smooth scrolling is automatically initialized in the Layout component. It applies to the entire website and provides:

- Smooth scroll behavior
- Performance optimizations
- Mobile-friendly scrolling

## Dark Mode Integration

All animations work seamlessly with the dark mode toggle. The animations automatically adapt to theme changes.

## Performance Considerations

1. **ScrollTrigger Refresh**: Call `GSAPScrollUtils.refresh()` after adding dynamic content
2. **Cleanup**: Animations are automatically cleaned up when components unmount
3. **Mobile Optimization**: Smooth scrolling is disabled on mobile for better performance
4. **Reduced Motion**: Respects user's motion preferences

## Example Implementation

Here's a complete example of how to use GSAP animations in a page:

```typescript
import React from 'react';
import { useGSAP } from '../hooks/useGSAP';

const ExamplePage = () => {
  const heroRef = useGSAP({ animation: 'fadeIn', duration: 1.5 });
  const contentRef = useGSAP({ animation: 'slideInLeft', delay: 0.2 });
  const sidebarRef = useGSAP({ animation: 'slideInRight', delay: 0.4 });

  return (
    <div>
      <section ref={heroRef} className="hero">
        <h1>Hero Section</h1>
      </section>
      
      <section ref={contentRef} className="content">
        <h2>Main Content</h2>
      </section>
      
      <aside ref={sidebarRef} className="sidebar">
        <h3>Sidebar</h3>
      </aside>
    </div>
  );
};
```

## Troubleshooting

1. **Animations not working**: Check that the element ref is properly attached
2. **Performance issues**: Reduce the number of simultaneous animations
3. **Mobile issues**: Ensure animations are optimized for touch devices
4. **TypeScript errors**: Make sure all GSAP types are properly imported

## Future Enhancements

- More animation types (rotate, skew, etc.)
- Custom easing functions
- Animation presets for common use cases
- Intersection Observer integration for better performance
