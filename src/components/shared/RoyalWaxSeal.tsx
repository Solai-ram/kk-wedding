import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface RoyalWaxSealProps {
  onBreakSeal: () => void;
  isOpening: boolean;
}

export const RoyalWaxSeal: React.FC<RoyalWaxSealProps> = ({ onBreakSeal, isOpening }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer select-none group">
      {/* Outer Pulse Glow Ring */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Golden Halo Pulse */}
        <div
          className={`absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-r from-gold-antique/30 via-gold-champagne/40 to-gold-antique/30 blur-xl transition-all duration-700 pointer-events-none ${isHovered ? 'scale-125 opacity-90' : 'scale-100 opacity-50 animate-pulse'
            }`}
        />

        {/* Orbiting Stardust Sparkles */}
        <div className="absolute -inset-6 sm:-inset-8 pointer-events-none animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-champagne shadow-[0_0_8px_#E6CD94]" />
          <div className="absolute bottom-1 left-1/4 w-1 h-1 rounded-full bg-gold-antique shadow-[0_0_6px_#C5A15A]" />
          <div className="absolute top-1/3 right-0 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#fff]" />
        </div>

        {/* The Wax Seal Button */}
        <button
          onClick={onBreakSeal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disabled={isOpening}
          aria-label="Break golden royal seal to unveil invitation"
          className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full focus:outline-none transition-all duration-700 transform cursor-pointer ${isOpening
              ? 'scale-150 opacity-0 rotate-45'
              : isHovered
                ? 'scale-108 rotate-6 shadow-[0_0_40px_rgba(230,205,148,0.8)]'
                : 'scale-100 shadow-[0_8px_25px_rgba(16,9,29,0.9),0_0_20px_rgba(197,161,90,0.35)]'
            }`}
        >
          {/* Detailed SVG Wax Seal with Antique Gold & Amethyst Depth */}
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full filter drop-shadow-xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Metallic Gold Gradient */}
              <radialGradient id="sealMetallic" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFF4D4" />
                <stop offset="35%" stopColor="#E6CD94" />
                <stop offset="70%" stopColor="#C5A15A" />
                <stop offset="100%" stopColor="#7E5C1E" />
              </radialGradient>

              {/* Inner Velvet Depths */}
              <radialGradient id="innerVelvet" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#35204F" />
                <stop offset="85%" stopColor="#1A1030" />
                <stop offset="100%" stopColor="#10091D" />
              </radialGradient>

              {/* Gold Filigree Gradient */}
              <linearGradient id="filigreeGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF1D0" />
                <stop offset="50%" stopColor="#E6CD94" />
                <stop offset="100%" stopColor="#C5A15A" />
              </linearGradient>
            </defs>

            {/* Organic Wax Seal Scalloped Rim */}
            <path
              d="M60 4 C68 4 72 8 80 10 C88 12 94 10 100 16 C106 22 104 28 108 36 C112 44 116 48 116 56 C116 64 112 68 110 76 C108 84 110 90 104 96 C98 102 92 100 84 104 C76 108 72 112 64 114 C56 116 50 112 42 110 C34 108 28 110 22 104 C16 98 18 92 14 84 C10 76 6 72 4 64 C2 56 6 50 8 42 C10 34 8 28 14 22 C20 16 26 18 34 14 C42 10 46 6 54 4 Z"
              fill="url(#sealMetallic)"
              stroke="#54366E"
              strokeWidth="1.5"
            />

            {/* Beaded Outer Border */}
            <circle
              cx="60"
              cy="60"
              r="47"
              stroke="url(#filigreeGold)"
              strokeWidth="1.5"
              strokeDasharray="2.5 3"
              fill="none"
            />

            {/* Inner Depressed Wax Core */}
            <circle
              cx="60"
              cy="60"
              r="42"
              fill="url(#innerVelvet)"
              stroke="#E6CD94"
              strokeWidth="1.5"
            />

            {/* Subtle Sunburst Filigree Rays */}
            <g stroke="#C5A15A" strokeWidth="0.6" opacity="0.4">
              {[...Array(16)].map((_, i) => (
                <line
                  key={i}
                  x1="60"
                  y1="60"
                  x2={60 + 38 * Math.cos((i * Math.PI) / 8)}
                  y2={60 + 38 * Math.sin((i * Math.PI) / 8)}
                />
              ))}
            </g>

            {/* Central Monogram: K & K */}
            {/* Top Sanskrit Blessing */}
            <text
              x="60"
              y="34"
              textAnchor="middle"
              fill="#E6CD94"
              fontSize="7"
              fontFamily="serif"
              letterSpacing="1"
            >
              ROYAL WEDDING
            </text>

            {/* The Monogram Letters */}
            <text
              x="46"
              y="68"
              textAnchor="middle"
              fill="url(#sealMetallic)"
              fontSize="26"
              fontFamily="'Cinzel', serif"
              fontWeight="bold"
              style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.8))' }}
            >
              K
            </text>

            <text
              x="60"
              y="63"
              textAnchor="middle"
              fill="#FFF4D4"
              fontSize="14"
              fontFamily="'Playfair Display', serif"
              fontStyle="italic"
            >
              &
            </text>

            <text
              x="74"
              y="68"
              textAnchor="middle"
              fill="url(#sealMetallic)"
              fontSize="26"
              fontFamily="'Cinzel', serif"
              fontWeight="bold"
              style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.8))' }}
            >
              K
            </text>

            {/* Bottom Auspicious Lotus Glyph */}
            <path
              d="M54 84 C57 80 60 78 60 76 C60 78 63 80 66 84 C62 83 58 83 54 84 Z"
              fill="#E6CD94"
            />
            <circle cx="60" cy="80" r="1.5" fill="#FFF4D4" />
          </svg>
        </button>
      </div>

      {/* Interactive Label Beneath Seal (Tight & Viewport Aware) */}
      <div className="mt-3 text-center">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-1.5 rounded-full bg-midnight/80 border border-gold-antique/40 backdrop-blur-md shadow-lg group-hover:border-gold-champagne group-hover:bg-gold-antique/10 transition-all duration-300">
          <Sparkles className="w-3 h-3 text-gold-champagne group-hover:rotate-45 transition-transform" />
          <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] text-gold-champagne uppercase font-semibold">
            {isOpening ? 'Unveiling Ceremony...' : 'Tap Seal to Unveil Invitation'}
          </span>
          <Sparkles className="w-3 h-3 text-gold-champagne group-hover:-rotate-45 transition-transform" />
        </div>
      </div>
    </div>
  );
};
