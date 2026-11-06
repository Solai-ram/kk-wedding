import React from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../../config/wedding';
import { LotusIcon, PeacockFeatherIcon, FluteMotif, OrnateDivider, CornerOrnament } from '../shared/GoldOrnament';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export const FinalBlessings: React.FC = () => {
  const { couple, narratives, weddingDetails } = weddingConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowerLove = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.8 },
      colors: ['#E6CD94', '#C5A15A', '#F4EBDD', '#A99AB8', '#D4AF37'],
    });
  };

  return (
    <footer className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-t from-midnight via-royal-dark to-midnight w-full max-w-full">
      {/* Background Decorative Radial Lighting (Encapsulated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[500px] bg-royal-violet/20 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">

        {/* Divine Feather Crest */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <PeacockFeatherIcon size={30} />
          <LotusIcon size={26} />
          <PeacockFeatherIcon size={30} className="scale-x-[-1]" />
        </div>

        {/* Closing Headline */}
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.35em] text-gold-champagne uppercase font-medium mb-3">
          {narratives.finalBlessingHeading}
        </p>

        {/* Majestic Monogram & Couple Wordmark */}
        <h2 className="font-cormorant text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.1em] text-soft-ivory my-3 sm:my-4">
          <span className="gold-text-gradient font-normal">
            {couple.groom.firstName} & {couple.bride.firstName}
          </span>
        </h2>

        <OrnateDivider className="!my-3" />

        {/* Heartfelt Words */}
        <p className="font-cormorant text-lg sm:text-2xl italic text-soft-ivory/90 max-w-xl mx-auto font-light leading-relaxed mb-3">
          "{narratives.finalBlessingText}"
        </p>

        <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-champagne uppercase font-semibold mb-8">
          "YOUR PRESENCE IS OUR GREATEST GIFT"
        </p>

        {/* Shower Love & Blessings Button */}
        <div className="mb-8">
          <button
            onClick={handleShowerLove}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-royal-dark/90 border border-gold-champagne text-gold-champagne hover:bg-gold-antique/20 hover:scale-105 shadow-gold-subtle transition-all duration-300 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-gold-champagne/40 group-hover:fill-gold-champagne transition-colors" />
            <span className="font-cinzel text-xs tracking-[0.25em] uppercase font-semibold text-soft-ivory group-hover:text-gold-champagne">
              Shower Love & Lotus Petals
            </span>
            <Sparkles className="w-4 h-4 text-gold-champagne" />
          </button>
        </div>

        {/* Back To Top Control */}
        <div className="flex justify-center mb-10">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex flex-col items-center gap-2 text-gold-antique hover:text-gold-champagne transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border border-gold-antique/40 flex items-center justify-center group-hover:border-gold-champagne group-hover:-translate-y-1 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
            <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase">
              Back to Beginning
            </span>
          </button>
        </div>

        {/* Copyright & Date Footer */}
        <div className="border-t border-gold-antique/20 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-soft-ivory/50 font-sans gap-4">
          <p className="font-cinzel tracking-wider text-gold-antique/80">
            Auspicious Matrimonial Celebration
          </p>
          <div className="flex items-center gap-2 text-gold-antique/70 font-cormorant text-sm italic">
            <span>Kavya & Krishna — A Sacred Journey of Love & Friendship</span>
          </div>
          <p className="font-cinzel text-[10px] tracking-widest text-gold-antique/70">
            KAVYA & KRISHNA WEDDING
          </p>
        </div>

      </div>
    </footer>
  );
};

