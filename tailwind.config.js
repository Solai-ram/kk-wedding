/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#10091D',
        'royal-dark': '#1A1030',
        amethyst: '#35204F',
        'royal-violet': '#54366E',
        'gold-antique': '#C5A15A',
        'gold-champagne': '#E6CD94',
        'soft-ivory': '#F4EBDD',
        'muted-lavender': '#A99AB8',
        'gold-glow': 'rgba(197, 161, 90, 0.4)',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(180deg, #10091D 0%, #1A1030 50%, #10091D 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E6CD94 0%, #C5A15A 50%, #9F7E36 100%)',
        'purple-gold': 'linear-gradient(135deg, rgba(53, 32, 79, 0.8) 0%, rgba(26, 16, 48, 0.95) 100%)',
      },
      boxShadow: {
        'gold-subtle': '0 0 25px rgba(197, 161, 90, 0.15)',
        'gold-card': '0 10px 40px -10px rgba(197, 161, 90, 0.25), 0 0 1px 1px rgba(197, 161, 90, 0.3)',
        'purple-glow': '0 0 50px rgba(84, 54, 110, 0.35)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 3s infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

