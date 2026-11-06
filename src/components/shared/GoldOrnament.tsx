import React from 'react';

interface OrnamentProps {
  className?: string;
  size?: number;
  color?: string;
}

export const LotusIcon: React.FC<OrnamentProps> = ({ className = '', size = 32, color = '#C5A15A' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Central Petal */}
    <path
      d="M32 8 C27 22 24 38 32 54 C40 38 37 22 32 8 Z"
      fill="url(#goldLotusGrad)"
      stroke={color}
      strokeWidth="1.2"
    />
    {/* Inner Left Petal */}
    <path
      d="M32 20 C22 28 14 40 23 52 C28 42 30 32 32 20 Z"
      fill="url(#goldLotusGrad)"
      fillOpacity="0.8"
      stroke={color}
      strokeWidth="1"
    />
    {/* Inner Right Petal */}
    <path
      d="M32 20 C42 28 50 40 41 52 C36 42 34 32 32 20 Z"
      fill="url(#goldLotusGrad)"
      fillOpacity="0.8"
      stroke={color}
      strokeWidth="1"
    />
    {/* Outer Left Petal */}
    <path
      d="M26 34 C16 40 8 48 16 56 C24 53 26 44 26 34 Z"
      fill="url(#goldLotusGrad)"
      fillOpacity="0.6"
      stroke={color}
      strokeWidth="1"
    />
    {/* Outer Right Petal */}
    <path
      d="M38 34 C48 40 56 48 48 56 C40 53 38 44 38 34 Z"
      fill="url(#goldLotusGrad)"
      fillOpacity="0.6"
      stroke={color}
      strokeWidth="1"
    />
    {/* Base Pad */}
    <path
      d="M18 56 C26 60 38 60 46 56 C38 57 26 57 18 56 Z"
      fill={color}
    />
    <defs>
      <linearGradient id="goldLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2D6" />
        <stop offset="50%" stopColor="#E6CD94" />
        <stop offset="100%" stopColor="#C5A15A" />
      </linearGradient>
    </defs>
  </svg>
);

export const PeacockFeatherIcon: React.FC<OrnamentProps> = ({ className = '', size = 36, color = '#C5A15A' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Feather Stem */}
    <path
      d="M14 58 C24 46 36 32 46 12"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Eye Outer Oval */}
    <ellipse
      cx="44"
      cy="20"
      rx="12"
      ry="16"
      transform="rotate(25 44 20)"
      stroke={color}
      strokeWidth="1.5"
      fill="rgba(53, 32, 79, 0.4)"
    />
    {/* Eye Middle (Royal Violet / Teal hue) */}
    <ellipse
      cx="44"
      cy="20"
      rx="8"
      ry="11"
      transform="rotate(25 44 20)"
      fill="#54366E"
      stroke="#E6CD94"
      strokeWidth="1"
    />
    {/* Eye Center */}
    <circle
      cx="44"
      cy="20"
      r="4"
      fill="#1A1030"
      stroke="#E6CD94"
      strokeWidth="1.2"
    />
    {/* Delicate Barbs */}
    <path
      d="M34 34 C26 30 20 28 16 32 M38 28 C30 22 24 20 22 24 M42 22 C36 16 30 14 28 17 M46 14 C44 8 38 6 34 8"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M38 38 C44 42 50 44 54 40 M42 32 C48 36 54 36 56 32 M46 26 C52 28 58 26 58 22"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);

export const FluteMotif: React.FC<OrnamentProps> = ({ className = '', size = 48, color = '#C5A15A' }) => (
  <svg
    width={size}
    height={size / 2}
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Divine Bansuri Flute */}
    <rect x="20" y="27" width="80" height="6" rx="3" fill="url(#fluteGold)" stroke={color} strokeWidth="1" />
    {/* Flute Holes */}
    <circle cx="45" cy="30" r="1.5" fill="#10091D" />
    <circle cx="55" cy="30" r="1.5" fill="#10091D" />
    <circle cx="65" cy="30" r="1.5" fill="#10091D" />
    <circle cx="75" cy="30" r="1.5" fill="#10091D" />
    <circle cx="85" cy="30" r="1.5" fill="#10091D" />
    {/* Peacock Feather Crest on Flute */}
    <path d="M22 27 C16 18 20 8 28 6 C32 12 30 22 25 27 Z" fill="url(#featherCrest)" stroke={color} strokeWidth="0.8" />
    <circle cx="25" cy="14" r="2.5" fill="#54366E" />
    {/* Flute Tassels */}
    <path d="M96 33 C98 42 102 48 100 52 M98 33 C102 44 105 47 106 50" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <defs>
      <linearGradient id="fluteGold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#C5A15A" />
        <stop offset="50%" stopColor="#FFF1D0" />
        <stop offset="100%" stopColor="#C5A15A" />
      </linearGradient>
      <linearGradient id="featherCrest" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#35204F" />
        <stop offset="100%" stopColor="#54366E" />
      </linearGradient>
    </defs>
  </svg>
);

export const OrnateDivider: React.FC<{ className?: string; title?: string }> = ({ className = '', title }) => (
  <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
    <div className="flex items-center flex-1 max-w-[140px] md:max-w-[200px]">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold-antique/60 to-gold-champagne" />
      <div className="w-1.5 h-1.5 rotate-45 border border-gold-champagne bg-midnight" />
    </div>

    <div className="flex items-center gap-2 px-2">
      <LotusIcon size={24} />
      {title && (
        <span className="font-cinzel text-xs tracking-[0.25em] text-gold-champagne uppercase font-medium">
          {title}
        </span>
      )}
    </div>

    <div className="flex items-center flex-1 max-w-[140px] md:max-w-[200px]">
      <div className="w-1.5 h-1.5 rotate-45 border border-gold-champagne bg-midnight" />
      <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-gold-antique/60 to-gold-champagne" />
    </div>
  </div>
);

export const CornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position, className = '', size = 48 }) => {
  const rotation = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  }[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${rotation} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 58 V16 C2 8 8 2 16 2 H58"
        stroke="#C5A15A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 58 V20 C8 13 13 8 20 8 H58"
        stroke="#E6CD94"
        strokeWidth="0.8"
        strokeDasharray="2 3"
      />
      <circle cx="16" cy="16" r="3" fill="#C5A15A" />
      <circle cx="2" cy="2" r="1.5" fill="#E6CD94" />
      {/* Delicate floral scroll */}
      <path
        d="M16 26 C18 20 20 18 26 16 C20 18 18 20 16 26 Z"
        fill="#C5A15A"
      />
    </svg>
  );
};

export const DeepamIcon: React.FC<OrnamentProps> = ({ className = '', size = 32, color = '#C5A15A' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Brass Pedestal Stand */}
    <path d="M18 42 H30 M24 36 V42 M16 44 H32" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 33 C20 36 28 36 28 33 Z" fill={color} />
    {/* Diya Bowl (Agal Vilakku) */}
    <path
      d="M10 28 C10 35 38 35 38 28 C34 25 14 25 10 28 Z"
      fill="url(#deepamBowlGrad)"
      stroke="#E6CD94"
      strokeWidth="1"
    />
    {/* Diya Spout / Oil Surface */}
    <ellipse cx="24" cy="27" rx="13" ry="3" fill="#35204F" stroke={color} strokeWidth="0.8" />
    {/* Flickering Sacred Flame */}
    <path
      d="M24 7 C20 14 18 19 22 25 C23 26 25 26 26 25 C30 19 28 14 24 7 Z"
      fill="url(#deepamFlameGrad)"
    />
    <circle cx="24" cy="21" r="2.2" fill="#FFFBF0" />
    <defs>
      <linearGradient id="deepamBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2D6" />
        <stop offset="50%" stopColor="#E6CD94" />
        <stop offset="100%" stopColor="#C5A15A" />
      </linearGradient>
      <linearGradient id="deepamFlameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF4D0" />
        <stop offset="35%" stopColor="#FFB347" />
        <stop offset="100%" stopColor="#D9384E" />
      </linearGradient>
    </defs>
  </svg>
);

export const KalashIcon: React.FC<OrnamentProps> = ({ className = '', size = 36, color = '#C5A15A' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Coconut on top */}
    <path d="M24 6 C20 12 18 17 24 20 C30 17 28 12 24 6 Z" fill="url(#kalashCoconutGrad)" stroke={color} strokeWidth="0.8" />
    {/* Mango Leaves */}
    <path d="M14 18 C18 15 22 17 24 20 C20 20 16 19 14 18 Z" fill="#4B6B40" stroke="#7BA86E" strokeWidth="0.6" />
    <path d="M34 18 C30 15 26 17 24 20 C28 20 32 19 34 18 Z" fill="#4B6B40" stroke="#7BA86E" strokeWidth="0.6" />
    <path d="M17 13 C20 12 23 16 24 20 C21 18 18 16 17 13 Z" fill="#5F8552" stroke="#7BA86E" strokeWidth="0.6" />
    <path d="M31 13 C28 12 25 16 24 20 C27 18 30 16 31 13 Z" fill="#5F8552" stroke="#7BA86E" strokeWidth="0.6" />
    {/* Kalash Pot Rim */}
    <path d="M17 20 H31 V22 H17 Z" fill="#E6CD94" stroke={color} strokeWidth="0.8" />
    {/* Kalash Pot Body */}
    <path
      d="M17 22 C14 26 12 30 14 36 C16 41 32 41 34 36 C36 30 34 26 31 22 Z"
      fill="url(#kalashPotGrad)"
      stroke={color}
      strokeWidth="1"
    />
    {/* Auspicious Sacred Swastika / Flower Motif on Pot */}
    <circle cx="24" cy="30" r="3" fill="none" stroke="#35204F" strokeWidth="0.8" />
    <circle cx="24" cy="30" r="1.2" fill="#D9384E" />
    {/* Base Stand */}
    <path d="M19 41 H29 V43 H19 Z" fill={color} />
    <defs>
      <linearGradient id="kalashPotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2D6" />
        <stop offset="40%" stopColor="#E6CD94" />
        <stop offset="100%" stopColor="#C5A15A" />
      </linearGradient>
      <linearGradient id="kalashCoconutGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8D5B34" />
        <stop offset="100%" stopColor="#5A3416" />
      </linearGradient>
    </defs>
  </svg>
);

