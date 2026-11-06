import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../../config/wedding';
import {
  LotusIcon,
  PeacockFeatherIcon,
  OrnateDivider,
  CornerOrnament,
  DeepamIcon,
} from '../shared/GoldOrnament';
import { playTempleBellChime } from '../../utils/templeSound';
import {
  Sparkles,
  Heart,
  Share2,
  CalendarCheck,
  Check,
} from 'lucide-react';

export const WeddingInvitationCard: React.FC = () => {
  const { couple, narratives } = weddingConfig;
  const [blessed, setBlessed] = useState(false);
  const [shared, setShared] = useState(false);
  const [blessingCount, setBlessingCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('kk_wedding_blessings');
      return saved ? parseInt(saved, 10) : 1008;
    } catch {
      return 1008;
    }
  });

  // ================= SACRED AKSHATHAI & FLOWER PETALS BLESSING =================
  const handleBlessing = () => {
    setBlessed(true);
    const newCount = blessingCount + 1;
    setBlessingCount(newCount);
    try {
      localStorage.setItem('kk_wedding_blessings', newCount.toString());
    } catch {
      // ignore
    }

    // Play sacred temple bronze bell chime
    playTempleBellChime();

    // Sacred Akshathai (turmeric yellow rice) and fragrant rose & jasmine petals shower
    confetti({
      particleCount: 65,
      angle: 60,
      spread: 70,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#F6C85F', '#E6CD94', '#C5A15A', '#D9384E', '#FFFBF0'],
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 65,
      angle: 120,
      spread: 70,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#F6C85F', '#E6CD94', '#C5A15A', '#D9384E', '#FFFBF0'],
      disableForReducedMotion: true,
    });

    setTimeout(() => setBlessed(false), 3000);
  };

  // ================= SCROLL TO CELEBRATIONS SECTION AT THE END =================
  const scrollToCelebrations = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#celebrations') || document.querySelector('#events');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ================= SHARE INVITATION =================
  const handleShare = async () => {
    const shareData = {
      title: 'Kavya & Krishna Wedding Invitation',
      text: 'You are cordially invited to celebrate the royal wedding of Kavya & Krishna.',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or not supported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    }
  };

  return (
    <section id="invitation" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Architectural Texture with Parallax Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/images/generated/purple-gold-texture.jpg"
          alt="Royal Wedding Atmosphere"
          className="w-full h-full object-cover object-center filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight" />
      </div>

      {/* Subtle Amethyst Glow in Center */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full h-[650px] bg-royal-violet/15 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-gold-champagne mb-2">
            <PeacockFeatherIcon size={24} />
            <span className="font-cinzel text-xs tracking-[0.35em] uppercase font-medium">
              THE SACRED UNION
            </span>
            <PeacockFeatherIcon size={24} className="scale-x-[-1]" />
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-soft-ivory font-light tracking-[0.06em]">
            The Royal <span className="gold-text-gradient font-normal">Wedding Invitation</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-soft-ivory/70 italic mt-1.5 max-w-xl mx-auto">
            An auspicious proclamation of eternal companionship, tradition, and sacred joy.
          </p>
          <OrnateDivider className="!my-3" />
        </div>

        {/* ================= THE HEIRLOOM INVITATION FOLIO ================= */}
        <div className="relative rounded-3xl md:rounded-[2.5rem] p-5 sm:p-10 md:p-14 purple-gold-border shadow-purple-glow overflow-hidden bg-gradient-to-b from-[#1E1236]/98 via-[#160D27]/98 to-[#10081E]/98 backdrop-blur-2xl w-full">
          {/* Background Geometric Kolam / Mandala Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] overflow-hidden">
            <div className="w-[240px] sm:w-[480px] h-[240px] sm:h-[480px] rounded-full border-[8px] sm:border-[18px] border-gold-antique rotate-45 shrink-0" />
            <div className="absolute w-[180px] sm:w-[360px] h-[180px] sm:h-[360px] rounded-full border-[6px] sm:border-[10px] border-gold-champagne shrink-0" />
          </div>

          {/* 4 Ornate Golden Corner Filigree Brackets */}
          <CornerOrnament position="top-left" className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5" size={44} />
          <CornerOrnament position="top-right" className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5" size={44} />
          <CornerOrnament position="bottom-left" className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5" size={44} />
          <CornerOrnament position="bottom-right" className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5" size={44} />

          {/* Internal Inner Border with Delicate Double Gold Line */}
          <div className="border border-gold-antique/30 rounded-2xl md:rounded-3xl p-5 sm:p-10 relative">
            
            {/* ================= MANDAPAM ARCH APEX & 3D ROYAL SEAL ================= */}
            <div className="text-center space-y-5 sm:space-y-7">
              
              {/* Flanked Sacred Deepams & Golden Medallion Crest */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 pt-1 sm:pt-2">
                {/* Left Sacred Deepam */}
                <div className="flex flex-col items-center">
                  <DeepamIcon size={36} className="text-gold-champagne animate-pulse-glow" />
                  <div className="w-8 h-[1px] bg-gold-antique/40 mt-1" />
                </div>

                {/* Central 3D Embossed Royal K&K Medallion Seal */}
                <div className="relative group cursor-pointer" onClick={handleBlessing} title="Click to shower sacred blessings">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-gold-antique/40 via-gold-champagne/70 to-gold-antique/40 blur-md group-hover:scale-115 transition-transform duration-500 animate-pulse" />
                  <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-b from-[#2B1749] via-[#1A0E2E] to-[#10081E] border-2 border-gold-champagne shadow-[0_0_25px_rgba(230,205,148,0.5),inset_0_2px_4px_rgba(255,244,212,0.6)] flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <LotusIcon size={24} className="mb-0.5 text-gold-champagne" />
                    <span className="font-cinzel text-xs sm:text-sm tracking-widest text-gold-champagne font-bold leading-none">
                      K&K
                    </span>
                  </div>
                </div>

                {/* Right Sacred Deepam */}
                <div className="flex flex-col items-center">
                  <DeepamIcon size={36} className="text-gold-champagne animate-pulse-glow" />
                  <div className="w-8 h-[1px] bg-gold-antique/40 mt-1" />
                </div>
              </div>

              {/* Sacred Auspicious Heading */}
              <div className="space-y-1.5">
                <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.35em] text-gold-champagne uppercase font-bold">
                  SUBHA MUHURTHAM • INVOCATION OF BLESSINGS
                </p>
                <p className="font-cormorant text-sm sm:text-base text-soft-ivory/75 italic">
                  {narratives.invitationGreeting}
                </p>
                <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-gold-antique/60 to-transparent mx-auto mt-2" />
              </div>

              {/* Proclamation Lead Sentence */}
              <p className="font-cormorant text-lg sm:text-2xl italic text-soft-ivory/95 max-w-2xl mx-auto font-light leading-relaxed px-2">
                "{narratives.invitationBlessing}"
              </p>

              <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-muted-lavender uppercase font-medium">
                Cordially invite you to share in the joy and sacred union of
              </p>

              {/* ================= THE GRAND ROYAL COUPLE NAMES (BRIDE KAVYA FIRST) ================= */}
              <div className="py-6 sm:py-8 border-y border-gold-antique/25 my-4 sm:my-6 bg-gradient-to-r from-transparent via-royal-dark/50 to-transparent">
                <div className="font-cormorant text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.08em] text-soft-ivory leading-tight">
                  
                  {/* Bride: Kavya */}
                  <div className="space-y-1">
                    <span className="block gold-text-gradient font-normal drop-shadow-[0_4px_25px_rgba(197,161,90,0.35)]">
                      {couple.bride.fullName.toUpperCase()}
                    </span>
                    <span className="block font-sans text-xs sm:text-sm text-soft-ivory/80 font-light">
                      {couple.bride.qualification}
                    </span>
                    <span className="block font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-gold-antique/90 uppercase font-medium mt-1">
                      {couple.bride.parents}
                    </span>
                  </div>

                  {/* Ornate Weds Connector */}
                  <div className="flex items-center justify-center gap-3 sm:gap-5 my-3 sm:my-4">
                    <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-gold-champagne/60 to-gold-champagne" />
                    <span className="font-playfair italic text-2xl sm:text-3xl md:text-4xl text-gold-champagne font-normal px-2">
                      weds
                    </span>
                    <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent via-gold-champagne/60 to-gold-champagne" />
                  </div>

                  {/* Groom: Krishna */}
                  <div className="space-y-1">
                    <span className="block gold-text-gradient font-normal drop-shadow-[0_4px_25px_rgba(197,161,90,0.35)]">
                      {couple.groom.fullName.toUpperCase()}
                    </span>
                    <span className="block font-sans text-xs sm:text-sm text-soft-ivory/80 font-light">
                      {couple.groom.qualification}
                    </span>
                    <span className="block font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-gold-antique/90 uppercase font-medium mt-1">
                      {couple.groom.parents}
                    </span>
                  </div>

                </div>
              </div>

              {/* ================= SACRED AKSHATHAI & FLOWER PETALS BUTTON ================= */}
              <div className="pt-2 flex flex-col items-center">
                <button
                  onClick={handleBlessing}
                  className="group relative inline-flex items-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-royal-violet via-amethyst to-royal-violet border-2 border-gold-champagne text-soft-ivory shadow-[0_0_25px_rgba(230,205,148,0.35)] hover:shadow-[0_0_40px_rgba(230,205,148,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  aria-label="Shower Sacred Akshathai and flowers to bless Kavya and Krishna"
                >
                  <Sparkles className="w-4 h-4 text-gold-champagne animate-pulse" />
                  <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-soft-ivory group-hover:text-gold-champagne">
                    {blessed ? 'Blessed With Sacred Joy!' : 'Shower Sacred Akshathai & Flowers'}
                  </span>
                  <Heart className={`w-4 h-4 text-gold-champagne ${blessed ? 'fill-gold-champagne animate-ping' : ''}`} />
                </button>

                {/* Live Blessings Counter */}
                <div className="mt-3 flex items-center gap-2 text-xs font-cinzel tracking-wider text-gold-antique">
                  <span>✨</span>
                  <span className="font-bold text-gold-champagne text-sm">{blessingCount.toLocaleString()}</span>
                  <span className="text-soft-ivory/70">Sacred Blessings Showered by Loved Ones</span>
                </div>
              </div>

              {/* ================= ACTION FOIL BAR ================= */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 border-t border-gold-antique/20">
                {/* Scroll to Events & Venue at the end */}
                <a
                  href="#celebrations"
                  onClick={scrollToCelebrations}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-antique to-gold-champagne text-midnight font-cinzel text-xs tracking-wider font-semibold shadow-gold-subtle hover:scale-105 transition-all cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>View Celebrations & Venue Schedule ↓</span>
                </a>

                {/* Share Invitation */}
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-royal-dark/90 border border-gold-antique/40 text-soft-ivory/90 hover:text-gold-champagne hover:border-gold-champagne text-xs font-cinzel tracking-wider transition-all cursor-pointer"
                >
                  {shared ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Invitation</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
