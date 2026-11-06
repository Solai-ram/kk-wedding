import React from 'react';
import { weddingConfig } from '../../config/wedding';
import { LotusIcon, PeacockFeatherIcon, FluteMotif, OrnateDivider, CornerOrnament } from '../shared/GoldOrnament';
import { Sparkles, Heart } from 'lucide-react';

export const DivineInspiration: React.FC = () => {
  const { couple } = weddingConfig;

  return (
    <section
      id="inspiration"
      className="relative min-h-[100dvh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 py-12 lg:py-6 overflow-hidden"
    >
      {/* Background Ambient Violet & Amethyst Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[450px] h-[450px] bg-royal-violet/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amethyst/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col justify-center my-auto">

        {/* ================= SECTION HEADER (COMPACT & MAJESTIC) ================= */}
        <div className="text-center mb-6 sm:mb-8 shrink-0">
          <div className="inline-flex items-center gap-2 mb-1">
            <PeacockFeatherIcon size={22} />
            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.35em] text-gold-champagne uppercase font-medium">
              THE SACRED CONNECTION
            </span>
            <PeacockFeatherIcon size={22} className="scale-x-[-1]" />
          </div>

          <h2 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl text-soft-ivory font-light tracking-[0.06em] leading-tight">
            Two Souls, <span className="gold-text-gradient font-normal">One Sacred Melody</span>
          </h2>

          <div className="max-w-xs mx-auto my-1">
            <OrnateDivider className="!my-1.5" />
          </div>
        </div>

        {/* ================= VIEWPORT-FITTED EDITORIAL SPLIT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* Left Column: Artwork Framed to Viewport Proportion */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden purple-gold-border shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-gradient-to-b from-royal-dark via-midnight to-royal-dark group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[370px] aspect-[3/4] max-h-[54vh] p-2 sm:p-2.5 flex flex-col items-center justify-center">
              <CornerOrnament position="top-left" className="absolute top-2 left-2 z-20 opacity-80" size={28} />
              <CornerOrnament position="top-right" className="absolute top-2 right-2 z-20 opacity-80" size={28} />
              <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 z-20 opacity-80" size={28} />
              <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 z-20 opacity-80" size={28} />

              {/* Image Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-royal-dark/90 shadow-inner">
                <img
                  src="/images/couple/couple-divine-inspiration.jpg"
                  alt="Kavya and Krishna — Two Souls, One Sacred Melody"
                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Floating Top Aura Badge */}
              <div className="absolute top-3.5 right-3.5 z-20 px-2.5 py-0.5 rounded-full bg-midnight/90 border border-gold-antique/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg pointer-events-none">
                <Sparkles className="w-2.5 h-2.5 text-gold-champagne" />
                <span className="font-cinzel text-[9px] tracking-wider text-gold-champagne uppercase font-medium">
                  Two Souls • One Melody
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Concise, Poetic & Moving Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 text-center lg:text-left">

            {/* Header Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gold-champagne">
              <FluteMotif size={36} />
              <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
                An Eternal Symphony of Love
              </span>
            </div>

            {/* Lead Headline */}
            <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl text-soft-ivory font-normal leading-snug">
              "Some stories are written by destiny. Some connections transcend time."
            </h3>

            {/* Concise Poetic Narrative */}
            <p className="font-cormorant text-base sm:text-xl text-soft-ivory/90 leading-relaxed font-light italic border-l-0 lg:border-l-2 border-gold-antique/50 lg:pl-4">
              "Bound by mutual devotion, patience, and pure friendship, our journey begins with two hearts, one sacred promise, and a lifetime of togetherness."
            </p>

            <p className="font-sans text-xs sm:text-sm text-soft-ivory/70 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Guided by unconditional love, shared understanding, and pure devotion, destiny has united <span className="text-gold-champagne font-medium">{couple.bride.firstName}</span> and <span className="text-gold-champagne font-medium">{couple.groom.firstName}</span> to unite their destinies with the warm blessings of our families.
            </p>

            {/* 3 Compact Spiritual Pillars (Single Row) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="p-2.5 sm:p-3 rounded-xl bg-royal-dark/60 border border-gold-antique/30 text-center">
                <div className="flex justify-center text-gold-champagne mb-1">
                  <LotusIcon size={20} />
                </div>
                <span className="font-cinzel text-[10px] sm:text-[11px] tracking-wider text-gold-champagne uppercase font-bold block">
                  DEVOTION
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] text-soft-ivory/60">
                  Pure Love
                </span>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-royal-dark/60 border border-gold-antique/30 text-center">
                <div className="flex justify-center text-gold-champagne mb-1">
                  <Heart className="w-4 h-4 text-gold-champagne" />
                </div>
                <span className="font-cinzel text-[10px] sm:text-[11px] tracking-wider text-gold-champagne uppercase font-bold block">
                  HARMONY
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] text-soft-ivory/60">
                  Sacred Bond
                </span>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-royal-dark/60 border border-gold-antique/30 text-center">
                <div className="flex justify-center text-gold-champagne mb-1">
                  <Sparkles className="w-4 h-4 text-gold-champagne" />
                </div>
                <span className="font-cinzel text-[10px] sm:text-[11px] tracking-wider text-gold-champagne uppercase font-bold block">
                  ETERNITY
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] text-soft-ivory/60">
                  Everlasting Grace
                </span>
              </div>
            </div>

            {/* Dedication Tag */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-gold-antique/80">
              <Sparkles className="w-3.5 h-3.5 text-gold-champagne" />
              <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase font-semibold text-gold-champagne">
                KAVYA & KRISHNA • WEDDING CELEBRATION
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
