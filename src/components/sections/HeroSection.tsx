import React from 'react';
import { weddingConfig } from '../../config/wedding';
import { LotusIcon, PeacockFeatherIcon, OrnateDivider } from '../shared/GoldOrnament';
import { ResponsiveHeroVideo } from '../shared/ResponsiveHeroVideo';
import { useParallax } from '../../hooks/useParallax';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { couple } = weddingConfig;
  const { videoParallaxY, contentParallaxY, contentOpacity, reverseFloatY } = useParallax();

  const scrollToStory = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#inspiration');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-6 pt-20 pb-8 overflow-hidden">
      {/* Responsive Cinematic Background Video with Parallax Translation */}
      <ResponsiveHeroVideo parallaxTranslateY={videoParallaxY} overlayGradient={true} />

      {/* Floating Decorative Peacock Feathers with Independent Reverse Parallax */}
      <div
        className="pointer-events-none absolute left-6 top-1/4 hidden lg:block z-10 transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(0, ${reverseFloatY}px, 0)` }}
      >
        <PeacockFeatherIcon size={56} className="opacity-40 animate-float" />
      </div>
      <div
        className="pointer-events-none absolute right-6 top-1/3 hidden lg:block z-10 transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(0, ${reverseFloatY * 1.3}px, 0)` }}
      >
        <PeacockFeatherIcon size={56} className="opacity-40 scale-x-[-1] animate-float-delayed" />
      </div>

      {/* Top spacing placeholder for flex alignment */}
      <div className="w-full h-2" />

      {/* Parallax Content Container */}
      <div
        className="relative z-10 max-w-5xl mx-auto text-center will-change-transform my-auto py-2 px-4 w-full"
        style={{
          transform: `translate3d(0, ${contentParallaxY}px, 0)`,
          opacity: contentOpacity,
        }}
      >
        {/* Top Header Motif */}
        <div className="inline-flex items-center justify-center gap-2 mb-2 sm:mb-4 animate-float">
          <PeacockFeatherIcon size={24} />
          <LotusIcon size={22} />
          <PeacockFeatherIcon size={24} className="scale-x-[-1]" />
        </div>

        {/* Subtitle / Blessing */}
        <p className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] text-gold-champagne uppercase font-medium mb-1 sm:mb-2">
          A LOVE WRITTEN IN THE STARS
        </p>

        {/* Couple Names: Grand, majestic fluid typography fitted perfectly on all viewports */}
        <h1 className="font-cormorant text-[clamp(2.4rem,9.5vw,7.5rem)] font-light tracking-[0.05em] sm:tracking-[0.1em] text-soft-ivory leading-[0.95] sm:leading-[0.92] my-2 sm:my-3 drop-shadow-[0_8px_35px_rgba(197,161,90,0.45)]">
          <span className="block gold-text-gradient font-normal">
            {couple.bride.firstName.toUpperCase()}
          </span>
          <span className="inline-block font-playfair italic text-2xl sm:text-4xl md:text-5xl text-gold-champagne my-0.5 sm:my-1 font-normal drop-shadow-[0_2px_15px_rgba(230,205,148,0.6)]">
            &
          </span>
          <span className="block gold-text-gradient font-normal">
            {couple.groom.firstName.toUpperCase()}
          </span>
        </h1>

        <div className="max-w-md mx-auto my-1 sm:my-2 px-4">
          <OrnateDivider className="!my-1.5 sm:!my-2" />
        </div>

        {/* Subtitle */}
        <p className="font-cormorant text-sm sm:text-xl italic text-soft-ivory/90 font-light max-w-xl mx-auto mb-3 sm:mb-4 px-2">
          "Two Souls. One Sacred Promise. An Eternal Story."
        </p>

        {/* Sacred Celebration Tag */}
        <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full glass-card purple-gold-border shadow-gold-subtle mb-3 sm:mb-4 max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-antique animate-pulse" />
          <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-gold-champagne uppercase font-medium">
            From Best Friends to Forever ❤️
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-antique animate-pulse" />
        </div>
      </div>

      {/* Scroll Indicator: Anchored cleanly above the bottom edge */}
      <div className="flex justify-center pb-2 z-10 shrink-0">
        <a
          href="#inspiration"
          onClick={scrollToStory}
          aria-label="Scroll down to begin story"
          className="flex flex-col items-center gap-1.5 text-gold-champagne hover:text-soft-ivory transition-colors group cursor-pointer"
        >
          <span className="font-cinzel text-[9px] tracking-[0.25em] uppercase">
            Begin Journey
          </span>
          <div className="w-7 h-7 rounded-full border border-gold-antique/40 flex items-center justify-center group-hover:border-gold-champagne transition-all group-hover:translate-y-0.5">
            <ChevronDown className="w-3.5 h-3.5 text-gold-champagne animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
