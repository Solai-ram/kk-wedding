import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { playTempleBellChime } from '../../utils/templeSound';
import { Sparkles } from 'lucide-react';
import { LotusIcon, CornerOrnament, OrnateDivider } from '../shared/GoldOrnament';

interface OpeningScreenProps {
  onEnter: () => void;
  isEntered: boolean;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onEnter, isEntered }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullyDismissed, setIsFullyDismissed] = useState(false);
  
  // Synchronous initial mobile check on frame 0 to avoid source swap flicker
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenDoors = () => {
    if (isOpen) return;
    setIsOpen(true);

    // 1. Play sacred temple bronze bell chime with rich harmonic resonance
    playTempleBellChime();

    // 2. Sacred celebratory gold, champagne, and stardust burst
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.5 },
      colors: ['#E6CD94', '#C5A15A', '#FFF4D4', '#F4EBDD', '#D4AF37'],
      disableForReducedMotion: true,
    });

    // 3. Immediately activate hero experience and navbar as doors begin to part (smooth seamless flow!)
    setTimeout(() => {
      onEnter();
    }, 250);

    // 4. Completely dismiss the door overlay right as the 1.2s smooth slide completes
    setTimeout(() => {
      setIsFullyDismissed(true);
    }, 1300);
  };

  if (isFullyDismissed) return null;

  // Responsive full-door image
  const doorImg = isMobile
    ? '/images/temple/temple-doors-mobile.jpg'
    : '/images/temple/temple-doors-desktop.jpg';

  return (
    <div
      className={`fixed inset-0 z-[100] h-[100dvh] w-full max-w-full overflow-hidden select-none flex items-center justify-center transition-opacity duration-500 ease-out ${
        isOpen ? 'bg-transparent pointer-events-none' : 'bg-midnight'
      } ${
        isEntered ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Doors Stage */}
      <div
        onClick={handleOpenDoors}
        className="relative w-full h-full flex overflow-hidden cursor-pointer"
      >
        
        {/* Quick, delicate golden shimmer beam along the seam that dissolves quickly */}
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-all duration-500 ease-out ${
            isOpen ? 'opacity-0 scale-110' : 'opacity-80 scale-100'
          }`}
        >
          {/* Vertical core golden seam light ray */}
          <div className="w-[6px] sm:w-[10px] h-full bg-gradient-to-r from-transparent via-gold-champagne to-transparent blur-[4px]" />
          {/* Soft ambient golden halo */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-gold-champagne/30 via-gold-antique/10 to-transparent blur-[80px]" />
        </div>

        {/* ================= LEFT TEMPLE DOOR (SMOOTH & CRISP 1.2s REGAL PARTING) ================= */}
        <div
          className="relative w-1/2 h-full z-10 overflow-hidden will-change-transform bg-[#160c23]"
          style={{
            transform: isOpen ? 'translateX(-100%)' : 'translateX(0)',
            // 1.2s smooth, fluid luxury easing — eliminates the long 2-second wait!
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Image pinned to left edge, spanning full screen width so left 50% is shown */}
          <div className="absolute top-0 bottom-0 left-0 w-[200%] h-full max-w-none">
            <img
              src={doorImg}
              alt="Sacred Royal Indian Temple Gates"
              className="w-full h-full object-cover object-left"
              draggable={false}
              loading="eager"
            />
          </div>

          {/* Deep inner drop shadow along the right seam edge */}
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />

          {/* Golden highlight on the central seam edge */}
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-antique/30 via-gold-champagne/90 to-gold-antique/30 shadow-[0_0_12px_rgba(230,205,148,0.8)]" />
        </div>

        {/* ================= RIGHT TEMPLE DOOR (SMOOTH & CRISP 1.2s REGAL PARTING) ================= */}
        <div
          className="relative w-1/2 h-full z-10 overflow-hidden will-change-transform bg-[#160c23]"
          style={{
            transform: isOpen ? 'translateX(100%)' : 'translateX(0)',
            // 1.2s smooth, fluid luxury easing — eliminates the long 2-second wait!
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Image pinned to right edge, spanning full screen width so right 50% is shown */}
          <div className="absolute top-0 bottom-0 right-0 w-[200%] h-full max-w-none">
            <img
              src={doorImg}
              alt="Sacred Royal Indian Temple Gates"
              className="w-full h-full object-cover object-right"
              draggable={false}
              loading="eager"
            />
          </div>

          {/* Deep inner drop shadow along the left seam edge */}
          <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />

          {/* Golden highlight on the central seam edge */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-antique/30 via-gold-champagne/90 to-gold-antique/30 shadow-[0_0_12px_rgba(230,205,148,0.8)]" />
        </div>

        {/* ================= CENTER INTERACTIVE TEMPLE LATCH ================= */}
        <div className="absolute inset-0 z-30 flex items-center justify-center p-4 pointer-events-none">
          <div
            className={`pointer-events-auto flex flex-col items-center transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          >
            {/* Latch Crest */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gold-antique bg-midnight/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(197,161,90,0.6)] mb-4 sm:mb-5 group cursor-pointer animate-pulse-glow">
              <LotusIcon size={36} className="text-gold-champagne" />
            </div>

            {/* Sacred Invitation Prompt */}
            <div className="text-center mb-4 sm:mb-5 max-w-xs sm:max-w-md">
              <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.35em] text-gold-champagne uppercase font-medium mb-1 drop-shadow-md">
                THE AUSPICIOUS CELEBRATION
              </p>
              <h2 className="font-cormorant text-3xl sm:text-4xl text-soft-ivory tracking-wide font-normal drop-shadow-lg">
                Kavya <span className="text-gold-champagne italic">&</span> Krishna
              </h2>
            </div>

            {/* Enter Button */}
            <button
              onClick={handleOpenDoors}
              className="group pointer-events-auto relative px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-antique/25 via-royal-dark/90 to-gold-antique/25 border-2 border-gold-champagne/90 shadow-[0_0_30px_rgba(197,161,90,0.45)] hover:shadow-[0_0_45px_rgba(230,205,148,0.85)] hover:scale-105 active:scale-95 transition-all duration-500 cursor-pointer overflow-hidden"
              aria-label="Open Temple Gates to Enter Wedding Celebration"
            >
              {/* Shimmer light bar across button */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-soft-ivory font-cinzel text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-champagne animate-pulse" />
                <span>TAP TO ENTER</span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-champagne animate-pulse" />
              </span>
            </button>

            <span className="font-cormorant text-xs sm:text-sm text-soft-ivory/70 italic mt-3 tracking-wider drop-shadow-md">
              Touch to part the sacred temple doors
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
