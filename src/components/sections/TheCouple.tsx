import React from 'react';
import { weddingConfig } from '../../config/wedding';
import { LotusIcon, PeacockFeatherIcon, OrnateDivider, CornerOrnament } from '../shared/GoldOrnament';
import { Heart, GraduationCap, Briefcase, ChevronRight, Sparkles } from 'lucide-react';

export const TheCouple: React.FC = () => {
  const { groom, bride, evolution, motto, reflection } = weddingConfig.couple;

  return (
    <section id="couple" className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden w-full max-w-full">
      {/* Background Subtle Amethyst Glow (Encapsulated in clipped layer) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[500px] bg-royal-violet/15 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full min-w-0">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold-champagne uppercase font-medium block mb-2">
            TWO HEARTS, ONE DESTINY
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-soft-ivory font-light tracking-[0.08em]">
            The <span className="gold-text-gradient font-normal">Bride & Groom</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-soft-ivory/70 italic mt-2">
            From Best Friends to Forever ❤️
          </p>
          <OrnateDivider />
        </div>

        {/* Relationship Evolution Strip */}
        {evolution && (
          <div className="mb-8 sm:mb-12 max-w-4xl mx-auto">
            <div className="p-3 sm:p-4 rounded-2xl glass-card purple-gold-border text-center overflow-x-auto">
              <span className="font-cinzel text-[10px] tracking-[0.25em] text-gold-champagne uppercase font-semibold block mb-2 sm:mb-3">
                OUR JOURNEY OF DESTINY
              </span>
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap text-xs sm:text-sm">
                {evolution.map((stage, idx) => (
                  <React.Fragment key={stage}>
                    <span
                      className={`px-3 py-1 rounded-full font-cinzel tracking-wider transition-colors duration-300 ${idx === evolution.length - 1
                          ? 'bg-gradient-to-r from-gold-antique/30 to-gold-champagne/40 text-gold-champagne border border-gold-antique/70 font-semibold'
                          : 'bg-midnight/70 text-soft-ivory/80 border border-gold-antique/25'
                        }`}
                    >
                      {stage}
                    </span>
                    {idx < evolution.length - 1 && (
                      <ChevronRight className="w-3.5 h-3.5 text-gold-antique/60 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Portraits Grid with Connecting Central Motif: Bride (Kavya) First, then Groom (Krishna) */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-8 md:gap-4 items-center">

          {/* Bride Panel: KAVYA (5 cols) - First */}
          <div className="md:col-span-5 flex flex-col items-center text-center w-full min-w-0">
            <div className="w-full max-w-md glass-card glass-card-hover rounded-3xl p-6 sm:p-8 purple-gold-border relative group overflow-hidden">
              <CornerOrnament position="top-left" className="absolute top-3 left-3" size={36} />
              <CornerOrnament position="top-right" className="absolute top-3 right-3" size={36} />

              {/* Portrait Image */}
              <div className="relative mx-auto mb-5 w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-gold-antique/60 shadow-gold-subtle bg-royal-dark">
                <img
                  src={bride.image}
                  alt={bride.fullName}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="font-cinzel text-[10px] tracking-[0.25em] text-gold-champagne uppercase bg-midnight/70 px-3 py-1 rounded-full border border-gold-antique/40">
                    {bride.title}
                  </span>
                </div>
              </div>

              {/* Bride Details */}
              <h3 className="font-cormorant text-3xl sm:text-4xl text-soft-ivory tracking-wide font-normal">
                {bride.fullName}
              </h3>

              {/* Qualification / Profession Pill */}
              <div className="my-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-cinzel tracking-wider text-gold-champagne bg-amethyst/60 border border-gold-antique/30">
                  <GraduationCap className="w-3.5 h-3.5 text-gold-antique" />
                  {bride.qualification || 'MSc Graduate • School Teacher'}
                </span>
              </div>

              <p className="font-cinzel text-xs tracking-[0.2em] text-gold-champagne uppercase mt-1 mb-3">
                {bride.parents}
              </p>
              <p className="font-sans text-sm text-soft-ivory/80 leading-relaxed font-light">
                {bride.bio}
              </p>

              {/* Decorative Subtext */}
              <div className="mt-4 pt-4 border-t border-gold-antique/20 flex items-center justify-center gap-2 text-gold-champagne">
                <LotusIcon size={20} />
                <span className="font-cormorant text-sm italic text-gold-champagne">
                  "Two hearts beat with one harmonious promise forever"
                </span>
              </div>
            </div>
          </div>

          {/* Central Connecting Element (1 col on desktop) */}
          <div className="md:col-span-1 flex flex-col items-center justify-center my-4 md:my-0">
            <div className="hidden md:flex flex-col items-center gap-3">
              <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-gold-antique/60 to-gold-champagne" />
              <div className="w-12 h-12 rounded-full border border-gold-antique/60 bg-royal-dark flex items-center justify-center shadow-gold-subtle animate-pulse-glow">
                <LotusIcon size={26} />
              </div>
              <div className="font-cormorant italic text-gold-champagne text-2xl font-light">
                &
              </div>
              <div className="w-8 h-8 rounded-full border border-gold-antique/30 bg-amethyst/40 flex items-center justify-center">
                <Heart className="w-4 h-4 text-gold-champagne" />
              </div>
              <div className="h-20 w-[1px] bg-gradient-to-t from-transparent via-gold-antique/60 to-gold-champagne" />
            </div>

            {/* Mobile Horizontal Connector */}
            <div className="md:hidden flex items-center gap-3 my-2">
              <div className="w-16 h-[1px] bg-gold-antique/40" />
              <div className="w-10 h-10 rounded-full border border-gold-antique/60 bg-royal-dark flex items-center justify-center">
                <Heart className="w-4 h-4 text-gold-champagne" />
              </div>
              <div className="w-16 h-[1px] bg-gold-antique/40" />
            </div>
          </div>

          {/* Groom Panel: KRISHNA (5 cols) - Second */}
          <div className="md:col-span-5 flex flex-col items-center text-center w-full min-w-0">
            <div className="w-full max-w-md glass-card glass-card-hover rounded-3xl p-6 sm:p-8 purple-gold-border relative group overflow-hidden">
              <CornerOrnament position="top-left" className="absolute top-3 left-3" size={36} />
              <CornerOrnament position="top-right" className="absolute top-3 right-3" size={36} />

              {/* Portrait Image */}
              <div className="relative mx-auto mb-5 w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-gold-antique/60 shadow-gold-subtle bg-royal-dark">
                <img
                  src={groom.image}
                  alt={groom.fullName}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="font-cinzel text-[10px] tracking-[0.25em] text-gold-champagne uppercase bg-midnight/70 px-3 py-1 rounded-full border border-gold-antique/40">
                    {groom.title}
                  </span>
                </div>
              </div>

              {/* Groom Details */}
              <h3 className="font-cormorant text-3xl sm:text-4xl text-soft-ivory tracking-wide font-normal">
                {groom.fullName}
              </h3>

              {/* Qualification / Profession Pill */}
              <div className="my-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-cinzel tracking-wider text-gold-champagne bg-amethyst/60 border border-gold-antique/30">
                  <Briefcase className="w-3.5 h-3.5 text-gold-antique" />
                  {groom.qualification || 'MBA Graduate • Bank Employee at CUB'}
                </span>
              </div>

              <p className="font-cinzel text-xs tracking-[0.2em] text-gold-champagne uppercase mt-1 mb-3">
                {groom.parents}
              </p>
              <p className="font-sans text-sm text-soft-ivory/80 leading-relaxed font-light">
                {groom.bio}
              </p>

              {/* Decorative Subtext */}
              <div className="mt-4 pt-4 border-t border-gold-antique/20 flex items-center justify-center gap-2 text-gold-champagne">
                <PeacockFeatherIcon size={20} />
                <span className="font-cormorant text-sm italic text-gold-champagne">
                  "Two hearts beat with one harmonious promise forever"
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Line Motto & Heartfelt Reflection Card */}
        {motto && reflection && (
          <div className="mt-12 sm:mt-16 max-w-2xl mx-auto text-center p-6 sm:p-8 rounded-2xl glass-card purple-gold-border relative overflow-hidden">
            <CornerOrnament position="top-left" size={28} className="absolute top-3 left-3 opacity-70" />
            <CornerOrnament position="top-right" size={28} className="absolute top-3 right-3 opacity-70" />
            <CornerOrnament position="bottom-left" size={28} className="absolute bottom-3 left-3 opacity-70" />
            <CornerOrnament position="bottom-right" size={28} className="absolute bottom-3 right-3 opacity-70" />

            <span className="font-cinzel text-[10px] tracking-[0.3em] text-gold-champagne uppercase font-medium block mb-3">
              OUR PROMISE IN THREE LINES
            </span>

            <div className="flex items-center justify-center gap-2 sm:gap-4 text-gold-champagne font-cormorant text-xl sm:text-3xl font-light tracking-wide mb-4">
              <span>"{motto[0]}</span>
              <span className="text-gold-antique/60">•</span>
              <span>{motto[1]}</span>
              <span className="text-gold-antique/60">•</span>
              <span>{motto[2]}"</span>
            </div>

            <p className="font-playfair text-sm sm:text-base text-soft-ivory/85 italic max-w-lg mx-auto leading-relaxed">
              "{reflection}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
