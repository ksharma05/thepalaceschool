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
