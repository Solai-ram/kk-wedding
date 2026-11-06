import React, { useState, useEffect } from 'react';
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
import { getGoogleCalendarUrl, getReceptionGoogleCalendarUrl, downloadIcsFile } from '../../utils/calendar';
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Download,
  ExternalLink,
  Check,
  Copy,
  Navigation,
  Compass,
  Building2,
  Car,
  Train,
  Plane,
  Heart,
} from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CelebrationsAndVenue: React.FC = () => {
  const { events, weddingDetails } = weddingConfig;
  const { venue, muhurthamTime, reception, displayDatesRange } = weddingDetails;
  const receptionEvent = events.find((e) => e.id === 'event-reception') || events[0];
  const marriageEvent = events.find((e) => e.id === 'event-marriage') || events[1];

  const [copied, setCopied] = useState(false);

  // ================= LIVE MUHURTHAM COUNTDOWN TIMER =================
  const calculateTimeLeft = (): TimeLeft => {
    // Muhurtham Date: November 13, 2026, 10:00:00 AM IST (+05:30)
    const target = new Date('2026-11-13T10:00:00+05:30').getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="celebrations" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-midnight via-royal-dark/60 to-midnight overflow-hidden">
      {/* Target anchor for legacy #events or #location links */}
      <span id="events" className="absolute top-0 -mt-24" />
      <span id="location" className="absolute top-1/2" />

      {/* Background Palace & Atmosphere Backdrop */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/images/generated/palace-archway.jpg"
          alt="Palace Architecture"
          className="w-full h-full object-cover object-center filter brightness-[0.25] blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight" />
      </div>

      {/* Ambient Violet Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] max-w-full h-[600px] bg-royal-violet/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[550px] max-w-full h-[550px] bg-amethyst/20 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2 text-gold-champagne">
            <PeacockFeatherIcon size={24} />
            <span className="font-cinzel text-xs tracking-[0.35em] uppercase font-medium">
              CELEBRATION SCHEDULE & SACRED VENUE
            </span>
            <PeacockFeatherIcon size={24} className="scale-x-[-1]" />
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-soft-ivory font-light tracking-[0.06em]">
            When & Where <span className="gold-text-gradient font-normal">We Celebrate</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-soft-ivory/70 italic mt-1.5 max-w-xl mx-auto">
            Moments of auspicious rituals, divine music, and eternal joy under the sacred mandapam of GMS Mahal.
          </p>
          <OrnateDivider className="!my-3" />
        </div>

        {/* ================= LIVE AUSPICIOUS MUHURTHAM COUNTDOWN ================= */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-royal-dark/90 border border-gold-antique/35 shadow-gold-subtle backdrop-blur-xl">
          <div className="flex items-center justify-center gap-2 text-gold-champagne mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-champagne animate-pulse" />
            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold text-center">
              COUNTDOWN TO AUSPICIOUS MUHURTHAM
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-champagne animate-pulse" />
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {/* Days */}
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-midnight/90 border border-gold-antique/40 shadow-inner">
              <span className="font-cormorant text-2xl sm:text-4xl text-soft-ivory font-light leading-none">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[9px] sm:text-[10px] tracking-widest text-gold-champagne uppercase mt-1">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-midnight/90 border border-gold-antique/40 shadow-inner">
              <span className="font-cormorant text-2xl sm:text-4xl text-soft-ivory font-light leading-none">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[9px] sm:text-[10px] tracking-widest text-gold-champagne uppercase mt-1">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-midnight/90 border border-gold-antique/40 shadow-inner">
              <span className="font-cormorant text-2xl sm:text-4xl text-soft-ivory font-light leading-none">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[9px] sm:text-[10px] tracking-widest text-gold-champagne uppercase mt-1">
                Mins
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-midnight/90 border border-gold-antique/40 shadow-inner">
              <span className="font-cormorant text-2xl sm:text-4xl text-gold-champagne font-light leading-none animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[9px] sm:text-[10px] tracking-widest text-gold-champagne uppercase mt-1">
                Secs
              </span>
            </div>
          </div>

          <p className="font-cormorant text-xs sm:text-sm text-soft-ivory/60 italic text-center mt-3">
            "Counting every sacred breath until Friday, November 13, 2026 • 10:00 AM"
          </p>
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

        {/* ================= 2-COLUMN EVENT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-12 sm:mb-16">

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

        {/* ================= THE SACRED VENUE & TRAVEL GUIDE (CONSOLIDATED) ================= */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 purple-gold-border relative shadow-purple-glow overflow-hidden bg-gradient-to-b from-[#1C1132]/95 via-[#160D27]/98 to-[#10081E]/98 mb-12">
          <CornerOrnament position="top-left" className="absolute top-4 left-4" size={44} />
          <CornerOrnament position="top-right" className="absolute top-4 right-4" size={44} />
          <CornerOrnament position="bottom-left" className="absolute bottom-4 left-4" size={44} />
          <CornerOrnament position="bottom-right" className="absolute bottom-4 right-4" size={44} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Venue Details & Timing */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-gold-champagne mb-3">
                  <Building2 className="w-5 h-5 text-gold-antique" />
                  <span className="font-cinzel text-xs tracking-[0.25em] uppercase font-semibold">
                    {venue.hall}
                  </span>
                </div>

                <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-soft-ivory font-normal leading-snug">
                  {venue.name}
                </h3>
                <p className="font-cinzel text-xs tracking-wider text-gold-champagne/90 mt-1">
                  Thirukalukundram, Tamil Nadu
                </p>

                <div className="space-y-3.5 text-soft-ivory/85 font-sans text-sm sm:text-base leading-relaxed mt-5 pt-5 border-t border-gold-antique/20">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-antique shrink-0 mt-0.5" />
                    <span>{venue.fullAddress}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-antique shrink-0" />
                    <span><strong>Muhurtham:</strong> {muhurthamTime}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-antique shrink-0" />
                    <span><strong>Reception:</strong> {reception.time}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-6 border-t border-gold-antique/20">
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-gold-antique to-gold-champagne text-midnight font-cinzel text-xs tracking-wider font-semibold shadow-gold-subtle hover:scale-105 transition-all"
                >
                  <Navigation className="w-4 h-4 fill-midnight" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-royal-dark/90 border border-gold-antique/40 text-gold-champagne hover:border-gold-champagne text-xs font-cinzel tracking-wider transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <button
                  onClick={downloadIcsFile}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-midnight/80 border border-gold-antique/30 text-soft-ivory/80 hover:text-gold-champagne text-xs font-cinzel tracking-wider transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-gold-antique" />
                  <span>Download iCal</span>
                </button>
              </div>
            </div>

            {/* Right Column: Travel & Highway Connections */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-gold-antique/30 bg-royal-dark/85 p-6 shadow-inner">
              <div>
                <div className="flex items-center gap-2 text-gold-champagne mb-2">
                  <Compass className="w-4 h-4 text-gold-antique" />
                  <span className="font-cinzel text-xs tracking-widest uppercase font-semibold">
                    TRAVEL & ROUTE GUIDE
                  </span>
                </div>

                <h4 className="font-cormorant text-2xl text-soft-ivory mb-1">
                  Reaching the Venue
                </h4>
                <p className="font-sans text-xs text-soft-ivory/70 leading-relaxed mb-4">
                  Conveniently situated on the Chengalpattu – Mahabalipuram highway (SH-58) in the sacred temple town of Thirukalukundram.
                </p>

                {/* Highway & Transit Distance List */}
                <div className="space-y-3 pt-3 border-t border-gold-antique/15 text-xs font-sans">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight/70 border border-gold-antique/20">
                    <div className="flex items-center gap-2.5 text-soft-ivory/90">
                      <Car className="w-4 h-4 text-gold-champagne shrink-0" />
                      <span>From Mahabalipuram (ECR)</span>
                    </div>
                    <span className="font-cinzel text-gold-champagne font-bold">~15 Mins</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight/70 border border-gold-antique/20">
                    <div className="flex items-center gap-2.5 text-soft-ivory/90">
                      <Train className="w-4 h-4 text-gold-champagne shrink-0" />
                      <span>From Chengalpattu Junction</span>
                    </div>
                    <span className="font-cinzel text-gold-champagne font-bold">~25 Mins</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight/70 border border-gold-antique/20">
                    <div className="flex items-center gap-2.5 text-soft-ivory/90">
                      <Plane className="w-4 h-4 text-gold-champagne shrink-0" />
                      <span>From Chennai Airport (MAA)</span>
                    </div>
                    <span className="font-cinzel text-gold-champagne font-bold">~65 Mins</span>
                  </div>
                </div>
              </div>

              {/* Auspicious Dates Pill */}
              <div className="mt-5 pt-4 border-t border-gold-antique/20 text-center">
                <span className="font-cinzel text-[11px] tracking-widest text-gold-champagne uppercase font-medium">
                  {displayDatesRange} • GMS Mahal
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM HOSPITALITY NOTE ================= */}
        <div className="text-center max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-royal-dark/50 border border-gold-antique/20">
          <p className="font-cormorant text-base sm:text-lg italic text-soft-ivory/90 font-light">
            "Your presence, love, and heartfelt blessings are our greatest gift as we begin this sacred lifelong journey together."
          </p>
          <div className="flex items-center justify-center gap-2 mt-2.5 text-gold-champagne">
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
