import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// GSAP Scroll Utilities
export class GSAPScrollUtils {
  private static smoother: ScrollSmoother | null = null;

  // Initialize smooth scrolling for the entire page
  static initSmoothScroll(containerId: string = 'smooth-wrapper') {
    if (this.smoother) {
      this.smoother.kill();
    }

    this.smoother = ScrollSmoother.create({
      wrapper: `#${containerId}`,
      content: `#${containerId}-content`,
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    return this.smoother;
  }

  // Create fade-in animation on scroll
  static fadeInOnScroll(element: string | Element, options: {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
  } = {}) {
    const {
      delay = 0,
      duration = 1,
      y = 50,
      stagger = 0.1
    } = options;

    return gsap.fromTo(element, 
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }

  // Create slide-in animation from left
  static slideInLeft(element: string | Element, options: {
    delay?: number;
    duration?: number;
    x?: number;
  } = {}) {
    const {
      delay = 0,
      duration = 1,
      x = -100
    } = options;

    return gsap.fromTo(element,
      {
        opacity: 0,
        x: x,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }

  // Create slide-in animation from right
  static slideInRight(element: string | Element, options: {
    delay?: number;
    duration?: number;
    x?: number;
  } = {}) {
    const {
      delay = 0,
      duration = 1,
      x = 100
    } = options;

    return gsap.fromTo(element,
      {
        opacity: 0,
        x: x,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }

  // Create scale-in animation
  static scaleIn(element: string | Element, options: {
    delay?: number;
    duration?: number;
    scale?: number;
  } = {}) {
    const {
      delay = 0,
      duration = 1,
      scale = 0.8
    } = options;

    return gsap.fromTo(element,
      {
        opacity: 0,
        scale: scale,
      },
      {
        opacity: 1,
        scale: 1,
        duration: duration,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }

  // Create parallax effect
  static parallax(element: string | Element, speed: number = 0.5) {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  }

  // Create elegant fade-in with smooth easing (more classic feel)
  static elegantFadeIn(element: string | Element, options: {
    delay?: number;
    duration?: number;
    y?: number;
    ease?: string;
  } = {}) {
    const {
      delay = 0,
      duration = 1.2,
      y = 40,
      ease = 'power2.out'
    } = options;

    return gsap.fromTo(element, 
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: ease,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }

  // Split text reveal animation (very elegant for headings)
  static splitTextReveal(element: string | Element, options: {
    delay?: number;
    duration?: number;
    stagger?: number;
  } = {}) {
    const {
      delay = 0,
      duration = 0.8,
      stagger = 0.05
    } = options;

    const target = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;

    if (!target || !(target instanceof HTMLElement)) return null;

    const text = target.textContent || '';
    const words = text.split(' ');
    
    // Store original content if not already wrapped
    if (!target.querySelector('span')) {
      target.innerHTML = words.map(word => 
        `<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${word}</span>`
      ).join(' ');
    }

    const spans = target.querySelectorAll('span');

    return gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration: duration,
      stagger: stagger,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    });
  }

  // Count up animation for numbers (classic stat reveal)
  static countUp(element: string | Element, options: {
    endValue: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    delay?: number;
  }) {
    const {
      endValue,
      duration = 2,
      prefix = '',
      suffix = '',
      delay = 0
    } = options;

    const obj = { value: 0 };
    const textElement = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;

    return ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(obj, {
          value: endValue,
          duration: duration,
          delay: delay,
          ease: 'power2.out',
          onUpdate: () => {
            if (textElement) {
              const rounded = Math.round(obj.value);
              if (textElement instanceof HTMLElement) {
                textElement.textContent = `${prefix}${rounded}${suffix}`;
              }
            }
          }
        });
      }
    });
  }

  // Elegant scale reveal with rotation (sophisticated entrance)
  static elegantScaleIn(element: string | Element, options: {
    delay?: number;
    duration?: number;
    scale?: number;
  } = {}) {
    const {
      delay = 0,
      duration = 1,
      scale = 0.9
    } = options;

    return gsap.fromTo(element,
      {
        opacity: 0,
        scale: scale,
        rotation: -2,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: duration,
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }

  // Staggered children reveal (elegant for lists/grids)
  static staggerChildren(element: string | Element, options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    from?: 'start' | 'center' | 'end' | 'random';
  } = {}) {
    const {
      delay = 0,
      duration = 0.6,
      stagger = 0.1,
      from = 'start'
    } = options;

    const target = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;

    if (!target) return null;

    const children = Array.from(target.children);

    return gsap.fromTo(children,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: duration,
        stagger: {
          amount: stagger * children.length,
          from: from,
        },
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }

  // Parallax with elegant easing
  static elegantParallax(element: string | Element, options: {
    speed?: number;
    direction?: 'up' | 'down';
  } = {}) {
    const {
      speed = 0.5,
      direction = 'down'
    } = options;

    const yPercent = direction === 'up' ? -50 * speed : 50 * speed;

    return gsap.to(element, {
      yPercent: yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, // Smooth scrubbing
      }
    });
  }

  // Clip path reveal (very sophisticated)
  static clipReveal(element: string | Element, options: {
    delay?: number;
    duration?: number;
    direction?: 'left' | 'right' | 'top' | 'bottom';
  } = {}) {
    const {
      delay = 0,
      duration = 1.2,
      direction = 'left'
    } = options;

    const clipMap = {
      left: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
      right: ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
      top: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'],
      bottom: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
    };

    const [fromClip, toClip] = clipMap[direction];

    return gsap.fromTo(element,
      {
        opacity: 0,
        clipPath: fromClip,
      },
      {
        opacity: 1,
        clipPath: toClip,
        duration: duration,
        delay: delay,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }

  // Scroll-based width scale animation (for trailer/hero elements)
  static scrollWidthScale(element: string | Element, options: {
    startWidth?: string;
    endWidth?: string;
    scrub?: boolean;
    start?: string;
    end?: string;
    ease?: string;
  } = {}) {
    const {
      startWidth = 'auto',
      endWidth = '100vw',
      scrub = true,
      start = 'top bottom',
      end = 'center center',
      ease = 'none'
    } = options;

    const target = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;

    if (!target || !(target instanceof HTMLElement)) return null;

    // Calculate initial width based on viewport units
    let initialWidth: number;
    if (startWidth === '50vw') {
      // For 50vw, calculate 50% of viewport width directly
      initialWidth = window.innerWidth * 0.5;
    } else if (startWidth.endsWith('vw')) {
      // Handle other viewport width units
      const vwValue = parseFloat(startWidth);
      initialWidth = (window.innerWidth * vwValue) / 100;
    } else if (startWidth === 'auto') {
      // For auto, get the element's natural width
      initialWidth = target.offsetWidth;
    } else {
      // For pixel or other units, parse directly
      initialWidth = parseInt(startWidth) || target.offsetWidth;
    }

    // Get final width
    let finalWidth: number;
    if (endWidth === '100vw') {
      finalWidth = window.innerWidth;
    } else if (endWidth.endsWith('vw')) {
      const vwValue = parseFloat(endWidth);
      finalWidth = (window.innerWidth * vwValue) / 100;
    } else {
      finalWidth = parseInt(endWidth) || window.innerWidth;
    }

    // Reset and set initial state - ensure clean start with no transforms
    gsap.set(target, { 
      clearProps: 'all',
      width: `${initialWidth}px`,
      x: 0
    });

    // Get the initial centered position of the element (within its container)
    const container = target.parentElement;
    if (!container) return null;

    // Wait one frame for layout to settle, then calculate and create animation
    let animationInstance: gsap.core.Tween | null = null;
    
    requestAnimationFrame(() => {
      // Position relative to viewport, not container
      // We want the element to be centered in the viewport at all times
      
      // At start (50vw): element should be centered in viewport
      // So left edge should be at: viewportCenter - initialWidth/2
      const viewportCenter = window.innerWidth / 2;
      const initialLeftEdge = viewportCenter - (initialWidth / 2);
      
      // Get the container's position to calculate relative shift
      const container = target.parentElement;
      if (!container) return null;
      
      const containerRect = container.getBoundingClientRect();
      const containerPadding = parseInt(window.getComputedStyle(container).paddingLeft || '0');
      
      // The element starts at 0 within the container (after margin auto)
      // We need to shift it to the left to position it at initialLeftEdge
      const containerLeftEdge = containerRect.left + containerPadding;
      const initialShift = initialLeftEdge - containerLeftEdge;
      
      // Width increases by (finalWidth - initialWidth)
      // To keep center fixed, we need to move left by half the increase
      const widthIncrease = finalWidth - initialWidth;
      
      // As the element expands from 50vw to 100vw, it grows equally on both sides
      // from its center. To maintain the center at viewport center, we need to
      // shift left by half the width increase
      const adjustedFinalShift = initialShift - (widthIncrease / 2);

      // Create animation with proper initial state
      animationInstance = gsap.fromTo(target, 
        {
          width: initialWidth,
          x: initialShift,
          immediateRender: false
        },
        {
          width: finalWidth,
          x: adjustedFinalShift,
          ease: ease,
          scrollTrigger: {
            trigger: target,
            start: start,
            end: end,
            scrub: scrub,
            markers: false,
            invalidateOnRefresh: false,
          }
        }
      );
    });

    // Return a placeholder that will be replaced, or just return the target set operation
    // The actual animation will be created in the next frame
    return animationInstance || gsap.set(target, {}) as any;
  }

  // Create timeline with multiple animations
  static createTimeline(elements: {
    selector: string | Element;
    animation: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
    delay?: number;
    duration?: number;
  }[]) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elements[0].selector,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });

    elements.forEach((element, index) => {
      const delay = element.delay || index * 0.2;
      const duration = element.duration || 1;

      switch (element.animation) {
        case 'fadeIn':
          tl.fromTo(element.selector, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration, delay }
          );
          break;
        case 'slideInLeft':
          tl.fromTo(element.selector,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration, delay }
          );
          break;
        case 'slideInRight':
          tl.fromTo(element.selector,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration, delay }
          );
          break;
        case 'scaleIn':
          tl.fromTo(element.selector,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration, delay }
          );
          break;
      }
    });

    return tl;
  }

  // Clean up scroll triggers
  static cleanup() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    if (this.smoother) {
      this.smoother.kill();
      this.smoother = null;
    }
  }

  // Refresh scroll triggers (useful after dynamic content changes)
  static refresh() {
    ScrollTrigger.refresh();
  }
}

// Hook for using GSAP animations in React components
export const useGSAPAnimation = () => {
  return {
    fadeInOnScroll: GSAPScrollUtils.fadeInOnScroll,
    slideInLeft: GSAPScrollUtils.slideInLeft,
    slideInRight: GSAPScrollUtils.slideInRight,
    scaleIn: GSAPScrollUtils.scaleIn,
    parallax: GSAPScrollUtils.parallax,
    createTimeline: GSAPScrollUtils.createTimeline,
  };
};

export default GSAPScrollUtils;
