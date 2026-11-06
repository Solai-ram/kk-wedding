import { useState, useEffect } from 'react';

export function useParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return {
    scrollY,
    // Video background moves at 35% speed (deep layer)
    videoParallaxY: scrollY * 0.35,
    // Content moves at 15% speed (mid layer)
    contentParallaxY: scrollY * 0.15,
    // Subtle opacity fade for hero content as you scroll past it
    contentOpacity: Math.max(0, 1 - scrollY / 700),
    // Floating ornaments move at 25% reverse speed
    reverseFloatY: -scrollY * 0.2,
  };
}

