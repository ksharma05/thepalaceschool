import { useEffect, useRef } from 'react';
import { GSAPScrollUtils } from '../utils/gsap';

interface UseGSAPOptions {
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'parallax';
  delay?: number;
  duration?: number;
  stagger?: number;
  speed?: number; // for parallax
  trigger?: string; // custom trigger selector
}

/**
 * Custom hook for easy GSAP animations
 * @param options Animation options
 * @returns ref to attach to the element you want to animate
 */
export const useGSAP = (options: UseGSAPOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const {
      animation = 'fadeIn',
      delay = 0,
      duration = 1,
      stagger = 0.1,
      speed = 0.5,
      // trigger
    } = options;

    let animationInstance: any;

    switch (animation) {
      case 'fadeIn':
        animationInstance = GSAPScrollUtils.fadeInOnScroll(element, {
          delay,
          duration,
          stagger
        });
        break;
      
      case 'slideInLeft':
        animationInstance = GSAPScrollUtils.slideInLeft(element, {
          delay,
          duration
        });
        break;
      
      case 'slideInRight':
        animationInstance = GSAPScrollUtils.slideInRight(element, {
          delay,
          duration
        });
        break;
      
      case 'scaleIn':
        animationInstance = GSAPScrollUtils.scaleIn(element, {
          delay,
          duration
        });
        break;
      
      case 'parallax':
        animationInstance = GSAPScrollUtils.parallax(element, speed);
        break;
    }

    return () => {
      if (animationInstance && animationInstance.kill) {
        animationInstance.kill();
      }
    };
  }, [options]);

  return elementRef;
};

/**
 * Hook for animating multiple elements with a timeline
 * @param elements Array of element configurations
 * @returns ref to attach to the container element
 */
export const useGSAPTimeline = (elements: {
  selector: string;
  animation: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
}[]) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const timeline = GSAPScrollUtils.createTimeline(elements);

    return () => {
      if (timeline && timeline.kill) {
        timeline.kill();
      }
    };
  }, [elements]);

  return containerRef;
};

/**
 * Hook for animating elements on page load (not scroll)
 * @param options Animation options
 * @returns ref to attach to the element you want to animate
 */
export const useGSAPOnLoad = (options: UseGSAPOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const {
      animation = 'fadeIn',
      delay = 0,
      duration = 1
    } = options;

    // Set initial state
    switch (animation) {
      case 'fadeIn':
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        break;
      case 'slideInLeft':
        element.style.opacity = '0';
        element.style.transform = 'translateX(-100px)';
        break;
      case 'slideInRight':
        element.style.opacity = '0';
        element.style.transform = 'translateX(100px)';
        break;
      case 'scaleIn':
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        break;
    }

    // Animate to final state
    const timer = setTimeout(() => {
      element.style.transition = `all ${duration}s ease-out`;
      element.style.opacity = '1';
      element.style.transform = 'translateY(0) translateX(0) scale(1)';
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [options]);

  return elementRef;
};

export default useGSAP;
