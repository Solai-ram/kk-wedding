import React from 'react';
import { weddingConfig } from '../../config/wedding';
import { LotusIcon, OrnateDivider, CornerOrnament } from '../shared/GoldOrnament';
import { Calendar, Sparkles } from 'lucide-react';

export const LoveStoryTimeline: React.FC = () => {
  const { storyMilestones } = weddingConfig;

  return (
    <section id="story" className="relative py-14 sm:py-20 md:py-24 px-3 sm:px-6 bg-gradient-to-b from-midnight via-royal-dark/60 to-midnight overflow-hidden w-full max-w-full">
      {/* Decorative background texture overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#C5A15A_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Background Subtle Ambient Glow (Strictly clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-[500px] bg-royal-violet/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-[500px] bg-amethyst/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full min-w-0">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold-champagne uppercase font-medium block mb-2">
            OUR SACRED JOURNEY
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-soft-ivory font-light tracking-[0.08em]">
            From Best Friends <span className="gold-text-gradient font-normal">to Forever ❤️</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-soft-ivory/70 italic mt-3 max-w-xl mx-auto px-2">
            "We fight. We solve. We stay." — A beautiful journey of friendship, patience, and choosing each other every day.
          </p>
          <OrnateDivider />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative w-full max-w-full">
          {/* Golden Spine: Left-aligned on mobile (left-4), centered on desktop (left-1/2) */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-gold-antique/50 to-transparent pointer-events-none" />

          <div className="space-y-8 sm:space-y-12">
            {storyMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full min-w-0 ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Central / Left Node Badge */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-midnight border-2 border-gold-antique shadow-gold-subtle group shrink-0">
                    <LotusIcon size={16} className="group-hover:rotate-45 transition-transform duration-500" />
                  </div>

                  {/* Content Card: Placed right on mobile with pl-8 sm:pl-12, half-width on desktop */}
                  <div className="w-full min-w-0 pl-8 sm:pl-12 md:pl-0 md:w-1/2 md:px-8">
                    <div className="glass-card glass-card-hover rounded-2xl p-4 sm:p-7 purple-gold-border relative overflow-hidden group w-full min-w-0">
                      <CornerOrnament
                        position={isEven ? 'top-right' : 'top-left'}
                        className="absolute top-2 right-2 md:top-3 md:right-3 opacity-60"
                        size={28}
                      />

                      {/* Tag & Year Badges (Wrapped nicely for mobile) */}
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        {milestone.tag && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-cinzel tracking-wider text-gold-champagne bg-amethyst/60 border border-gold-antique/30">
                            <Sparkles className="w-3 h-3 text-gold-antique shrink-0" />
                            <span>{milestone.tag}</span>
                          </span>
                        )}
                        {milestone.year && (
                          <span className="font-cinzel text-[11px] sm:text-xs text-soft-ivory/60 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-gold-antique/70 shrink-0" />
                            <span>{milestone.year}</span>
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl text-soft-ivory font-normal tracking-wide leading-tight">
                        {milestone.title}
                      </h3>
                      <h4 className="font-playfair text-xs sm:text-sm text-gold-champagne italic mb-3">
                        {milestone.subtitle}
                      </h4>

                      {/* Milestone Image */}
                      {milestone.image && (
                        <div className="my-4 rounded-xl overflow-hidden border border-gold-antique/40 relative aspect-[4/5] w-full max-w-sm mx-auto bg-royal-dark shadow-[0_12px_30px_rgba(0,0,0,0.85)] group">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className={`w-full h-full ${milestone.id === 'milestone-childhood'
                                ? 'object-contain p-1.5 bg-[#0f091c]'
                                : 'object-cover object-top'
                              } group-hover:scale-105 transition-transform duration-700 ease-out`}
                            loading="lazy"
                          />

                          {/* Gradient Overlays (preserves clean white polaroid) */}
                          {milestone.id !== 'milestone-childhood' && (
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent pointer-events-none" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark/40 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute inset-0 border border-gold-antique/25 rounded-xl pointer-events-none group-hover:border-gold-champagne/60 transition-colors duration-500" />

                          {/* Subtle Corner Badge */}
                          <div className={`absolute ${milestone.id === 'milestone-childhood' ? 'top-2.5 right-2.5' : 'bottom-2.5 right-2.5'} px-2.5 py-0.5 rounded-full bg-midnight/90 border border-gold-antique/40 backdrop-blur-md pointer-events-none flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity`}>
                            <Sparkles className="w-2.5 h-2.5 text-gold-champagne" />
                            <span className="font-cinzel text-[9px] tracking-wider text-gold-champagne uppercase font-medium">
                              {milestone.year}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm md:text-base text-soft-ivory/80 leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
