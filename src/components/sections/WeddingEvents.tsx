import React from 'react';
import { weddingConfig } from '../../config/wedding';
import {
  LotusIcon,
  PeacockFeatherIcon,
  FluteMotif,
  OrnateDivider,
  CornerOrnament,
  DeepamIcon,
  KalashIcon,
} from '../shared/GoldOrnament';
import { getGoogleCalendarUrl, getReceptionGoogleCalendarUrl } from '../../utils/calendar';
import { Clock, MapPin, Sparkles, Calendar, Navigation, ExternalLink, Heart } from 'lucide-react';

export const WeddingEvents: React.FC = () => {
  const { events } = weddingConfig;
  const receptionEvent = events.find((e) => e.id === 'event-reception') || events[0];
  const marriageEvent = events.find((e) => e.id === 'event-marriage') || events[1];

  return (
    <section id="events" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-midnight via-royal-dark/60 to-midnight overflow-hidden">
      {/* Background Ambient Violet & Amethyst Glow (Encapsulated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[550px] max-w-full h-[550px] bg-royal-violet/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] max-w-full h-[500px] bg-amethyst/20 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2 text-gold-champagne">
            <PeacockFeatherIcon size={24} />
            <span className="font-cinzel text-xs tracking-[0.35em] uppercase font-medium">
              CELEBRATION SCHEDULE • TWO SACRED DAYS
            </span>
            <PeacockFeatherIcon size={24} className="scale-x-[-1]" />
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-soft-ivory font-light tracking-[0.06em]">
            The Wedding <span className="gold-text-gradient font-normal">Celebrations</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-soft-ivory/70 italic mt-1.5 max-w-xl mx-auto">
            Moments of auspicious rituals, divine music, and eternal joy.
          </p>
          <OrnateDivider className="!my-3" />
        </div>

        {/* ================= 2-DAY AUSPICIOUS TIMELINE RIBBON ================= */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="p-3 sm:p-4 rounded-2xl bg-royal-dark/85 border border-gold-antique/30 backdrop-blur-xl shadow-gold-subtle flex items-center justify-between gap-3 text-center">

            {/* Day 1 Pill */}
            <div className="flex-1">
              <span className="font-cinzel text-[10px] sm:text-xs tracking-widest text-gold-champagne uppercase font-bold block">
                DAY 01 • THURSDAY
              </span>
              <span className="font-cormorant text-sm sm:text-base text-soft-ivory/90 italic">
                Evening Reception & Feast
              </span>
            </div>

            {/* Central Connector Motif */}
            <div className="flex items-center gap-1.5 text-gold-antique px-2">
              <div className="w-4 sm:w-8 h-[1px] bg-gold-antique/50" />
              <DeepamIcon size={20} className="text-gold-champagne animate-pulse-glow" />
              <div className="w-4 sm:w-8 h-[1px] bg-gold-antique/50" />
            </div>

            {/* Day 2 Pill */}
            <div className="flex-1">
              <span className="font-cinzel text-[10px] sm:text-xs tracking-widest text-gold-champagne uppercase font-bold block">
                DAY 02 • FRIDAY
              </span>
              <span className="font-cormorant text-sm sm:text-base text-soft-ivory/90 italic">
                Subha Muhurtham Ceremony
              </span>
            </div>

          </div>
        </div>

        {/* ================= PERFECTLY BALANCED 2-COLUMN EVENT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* ================= CARD 1: THE WEDDING RECEPTION (THURSDAY EVENING) ================= */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-9 purple-gold-border relative flex flex-col justify-between group overflow-hidden bg-gradient-to-b from-[#1E1236]/90 via-[#170E2A]/95 to-[#120920]/95 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
            <CornerOrnament position="top-left" className="absolute top-3.5 left-3.5 opacity-80" size={36} />
            <CornerOrnament position="top-right" className="absolute top-3.5 right-3.5 opacity-80" size={36} />

            <div className="relative z-10">
              {/* Event Badge & Icon Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-royal-dark/90 border border-gold-antique/50 flex items-center justify-center shadow-gold-subtle group-hover:border-gold-champagne group-hover:scale-105 transition-all duration-300">
                  <FluteMotif size={36} />
                </div>
                <div className="text-right">
                  <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase px-3.5 py-1.5 rounded-full bg-royal-violet/30 text-gold-champagne border border-gold-antique/40 font-semibold inline-block">
                    {receptionEvent.day}
                  </span>
                  <span className="block font-cormorant text-xs text-soft-ivory/60 italic mt-1">
                    Eve of the Wedding
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-cormorant text-3xl sm:text-4xl text-soft-ivory font-normal tracking-wide group-hover:text-gold-champagne transition-colors leading-tight">
                {receptionEvent.title}
              </h3>
              <h4 className="font-playfair text-xs sm:text-sm text-gold-champagne italic mt-1 mb-4">
                {receptionEvent.subtitle}
              </h4>

              {/* Timing & Venue Box */}
              <div className="space-y-3 my-5 p-4 sm:p-5 rounded-2xl bg-midnight/80 border border-gold-antique/25">
                <div className="flex items-center gap-3 text-soft-ivory/95">
                  <div className="w-8 h-8 rounded-lg bg-royal-dark flex items-center justify-center border border-gold-antique/30 shrink-0">
                    <Calendar className="w-4 h-4 text-gold-champagne" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs text-gold-champagne block font-semibold">
                      Date & Day
                    </span>
                    <span className="font-cormorant text-lg text-soft-ivory">
                      {receptionEvent.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-soft-ivory/95">
                  <div className="w-8 h-8 rounded-lg bg-royal-dark flex items-center justify-center border border-gold-antique/30 shrink-0">
                    <Clock className="w-4 h-4 text-gold-champagne" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs text-gold-champagne block font-semibold">
                      Celebration Time
                    </span>
                    <span className="font-sans text-sm font-medium text-soft-ivory">
                      {receptionEvent.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-soft-ivory/90">
                  <div className="w-8 h-8 rounded-lg bg-royal-dark flex items-center justify-center border border-gold-antique/30 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-gold-champagne" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs text-gold-champagne block font-semibold">
                      Location
                    </span>
                    <span className="font-sans text-xs text-soft-ivory/80 leading-relaxed block">
                      {receptionEvent.venueName} — {receptionEvent.venueAddress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ceremony Highlights Chips */}
              <div className="my-5">
                <span className="font-cinzel text-[11px] tracking-wider text-gold-antique/90 uppercase font-semibold block mb-2.5">
                  Evening Highlights
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-antique/25 font-sans text-xs text-soft-ivory/80 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold-champagne" />
                    <span>Grand Couple Entry</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-antique/25 font-sans text-xs text-soft-ivory/80 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold-champagne" />
                    <span>Stage Greetings & Photos</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-antique/25 font-sans text-xs text-soft-ivory/80 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold-champagne" />
                    <span>Melodic Music</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-antique/25 font-sans text-xs text-soft-ivory/80 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold-champagne" />
                    <span>Royal Feast (Virundhu)</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-soft-ivory/75 leading-relaxed font-light mb-5">
                {receptionEvent.description}
              </p>
            </div>

            {/* Bottom Attire Guide & Direct Actions */}
            <div className="relative z-10 pt-5 border-t border-gold-antique/20 space-y-4">
              {receptionEvent.dressCode && (
                <div className="flex items-center justify-between text-xs font-cinzel">
                  <span className="text-muted-lavender tracking-wider">Suggested Attire:</span>
                  <span className="text-gold-champagne font-medium">{receptionEvent.dressCode}</span>
                </div>
              )}

              <div className="flex items-center gap-3 pt-1">
                {/* 1-Click Google Calendar */}
                <a
                  href={getReceptionGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-royal-dark border border-gold-antique/40 text-gold-champagne hover:border-gold-champagne hover:bg-gold-antique/20 transition-all font-cinzel text-xs tracking-wider font-semibold cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Add to Calendar</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                {/* Direct Google Maps */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(receptionEvent.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-gold-antique/20 border border-gold-champagne text-gold-champagne hover:bg-gold-antique/30 transition-all font-cinzel text-xs tracking-wider font-semibold cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Map</span>
                </a>
              </div>
            </div>

          </div>

          {/* ================= CARD 2: THE MARRIAGE CEREMONY (FRIDAY MORNING) ================= */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-9 purple-gold-border relative flex flex-col justify-between group overflow-hidden bg-gradient-to-b from-[#22153D]/90 via-[#180E2B]/95 to-[#120920]/95 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
            <CornerOrnament position="top-left" className="absolute top-3.5 left-3.5 opacity-80" size={36} />
            <CornerOrnament position="top-right" className="absolute top-3.5 right-3.5 opacity-80" size={36} />

            <div className="relative z-10">
              {/* Event Badge & Icon Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-royal-dark/90 border border-gold-antique/50 flex items-center justify-center shadow-gold-subtle group-hover:border-gold-champagne group-hover:scale-105 transition-all duration-300">
                  <KalashIcon size={34} />
                </div>
                <div className="text-right">
                  <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase px-3.5 py-1.5 rounded-full bg-gold-antique/25 text-gold-champagne border border-gold-champagne/50 font-bold inline-block shadow-[0_0_12px_rgba(230,205,148,0.3)]">
                    {marriageEvent.day}
                  </span>
                  <span className="block font-cormorant text-xs text-gold-champagne italic mt-1 font-medium">
                    Auspicious Muhurtham
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-cormorant text-3xl sm:text-4xl text-soft-ivory font-normal tracking-wide group-hover:text-gold-champagne transition-colors leading-tight">
                {marriageEvent.title}
              </h3>
              <h4 className="font-playfair text-xs sm:text-sm text-gold-champagne italic mt-1 mb-4">
                {marriageEvent.subtitle}
              </h4>

              {/* Timing & Venue Box */}
              <div className="space-y-3 my-5 p-4 sm:p-5 rounded-2xl bg-midnight/80 border border-gold-antique/30 shadow-[inset_0_0_15px_rgba(197,161,90,0.06)]">
                <div className="flex items-center gap-3 text-soft-ivory/95">
                  <div className="w-8 h-8 rounded-lg bg-royal-dark flex items-center justify-center border border-gold-antique/30 shrink-0">
                    <Calendar className="w-4 h-4 text-gold-champagne" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs text-gold-champagne block font-semibold">
                      Auspicious Date
                    </span>
                    <span className="font-cormorant text-lg text-soft-ivory">
                      {marriageEvent.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-soft-ivory/95">
                  <div className="w-8 h-8 rounded-lg bg-royal-dark flex items-center justify-center border border-gold-antique/30 shrink-0">
                    <Clock className="w-4 h-4 text-gold-champagne" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs text-gold-champagne block font-semibold">
                      Muhurtham Time
                    </span>
                    <span className="font-sans text-sm font-semibold text-gold-champagne">
                      {marriageEvent.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-soft-ivory/90">
                  <div className="w-8 h-8 rounded-lg bg-royal-dark flex items-center justify-center border border-gold-antique/30 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-gold-champagne" />
                  </div>
                  <div>
                    <span className="font-cinzel text-xs text-gold-champagne block font-semibold">
                      Mandapam
                    </span>
                    <span className="font-sans text-xs text-soft-ivory/80 leading-relaxed block">
                      Grand Mandapam, {marriageEvent.venueName} — {marriageEvent.venueAddress}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ceremony Highlights Chips */}
              <div className="my-5">
                <span className="font-cinzel text-[11px] tracking-wider text-gold-antique/90 uppercase font-semibold block mb-2.5">
                  Sacred Rituals
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-antique/25 font-sans text-xs text-soft-ivory/80 flex items-center gap-1.5">
                    <LotusIcon size={14} className="text-gold-champagne" />
                    <span>Oonjal (Swing Ceremony)</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-antique/25 font-sans text-xs text-soft-ivory/80 flex items-center gap-1.5">
                    <LotusIcon size={14} className="text-gold-champagne" />
                    <span>Kanyadaanam</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-antique/25 font-sans text-xs text-soft-ivory/80 flex items-center gap-1.5">
                    <LotusIcon size={14} className="text-gold-champagne" />
                    <span>Maangalya Dhaaranam (Thali)</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-royal-dark/80 border border-gold-antique/25 font-sans text-xs text-soft-ivory/80 flex items-center gap-1.5">
                    <LotusIcon size={14} className="text-gold-champagne" />
                    <span>Sapthapadi (7 Steps)</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-soft-ivory/75 leading-relaxed font-light mb-5">
                {marriageEvent.description}
              </p>
            </div>

            {/* Bottom Attire Guide & Direct Actions */}
            <div className="relative z-10 pt-5 border-t border-gold-antique/20 space-y-4">
              {marriageEvent.dressCode && (
                <div className="flex items-center justify-between text-xs font-cinzel">
                  <span className="text-muted-lavender tracking-wider">Suggested Attire:</span>
                  <span className="text-gold-champagne font-medium">{marriageEvent.dressCode}</span>
                </div>
              )}

              <div className="flex items-center gap-3 pt-1">
                {/* 1-Click Google Calendar */}
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-royal-dark border border-gold-antique/40 text-gold-champagne hover:border-gold-champagne hover:bg-gold-antique/20 transition-all font-cinzel text-xs tracking-wider font-semibold cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Add to Calendar</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                {/* Direct Google Maps */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(marriageEvent.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-gold-antique/20 border border-gold-champagne text-gold-champagne hover:bg-gold-antique/30 transition-all font-cinzel text-xs tracking-wider font-semibold cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Map</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM HOSPITALITY NOTE ================= */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-2xl bg-royal-dark/50 border border-gold-antique/20">
          <p className="font-cormorant text-base sm:text-lg italic text-soft-ivory/90 font-light">
            "Your presence and heartfelt blessings are our greatest gift as we begin this sacred lifelong journey together."
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-gold-champagne">
            <Heart className="w-3.5 h-3.5 fill-gold-champagne/40" />
            <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase font-semibold">
              Kavya & Krishna • With Family
            </span>
            <Heart className="w-3.5 h-3.5 fill-gold-champagne/40" />
          </div>
        </div>

      </div>
    </section>
  );
};
