import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { weddingConfig } from '../../config/wedding';
import { LotusIcon } from '../shared/GoldOrnament';

interface NavbarProps {
  isEntered: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isEntered }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Bottom-of-page check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('celebrations');
        return;
      }

      // Active section detection from bottom to top
      const sections = ['celebrations', 'gallery', 'invitation', 'couple', 'story', 'inspiration', 'hero'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open, restore overflowX strictly
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
    }
  }, [mobileMenuOpen]);

  // Handle ESC key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Sacred Bond', href: '#inspiration', id: 'inspiration' },
    { label: 'Our Journey', href: '#story', id: 'story' },
    { label: 'The Couple', href: '#couple', id: 'couple' },
    { label: 'Invitation', href: '#invitation', id: 'invitation' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Celebrations & Venue', href: '#celebrations', id: 'celebrations' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    document.body.style.overflowX = 'hidden';

    // Allow drawer animation to start before scrolling smoothly
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
          !isEntered ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'
        } ${
          isScrolled
            ? 'bg-midnight/95 backdrop-blur-md py-3 border-b border-gold-antique/25 shadow-[0_4px_25px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between">
          {/* Couple Monogram / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Kavya & Krishna Wedding"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-antique/50 flex items-center justify-center bg-royal-dark/90 group-hover:border-gold-champagne group-hover:shadow-[0_0_15px_rgba(230,205,148,0.5)] transition-all duration-300 shrink-0">
              <span className="font-cinzel text-xs tracking-widest text-gold-champagne font-bold">
                K&K
              </span>
            </div>
            <span className="font-cormorant text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.2em] text-gold-champagne uppercase font-medium">
              Kavya & Krishna
            </span>
          </a>

          {/* Desktop Navigation Links (Responsive: hidden on mobile and tablet, active on lg/xl) */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-2.5 xl:px-3 py-1 font-cinzel text-[11px] xl:text-xs tracking-[0.18em] uppercase transition-colors group ${
                    isActive ? 'text-gold-champagne font-semibold' : 'text-soft-ivory/80 hover:text-gold-champagne'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-gradient-to-r from-transparent via-gold-champagne to-transparent transition-transform duration-300 origin-center ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile & Tablet Hamburger Trigger (Visible on < lg: 1024px, hidden on desktop) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 sm:p-2.5 text-gold-champagne hover:text-soft-ivory border border-gold-antique/30 rounded-xl bg-royal-dark/70 backdrop-blur-md active:scale-95 transition-transform flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Full-Screen Overlay Menu (Smooth, scrollable, safe-area padded) */}
      <div
        className={`fixed inset-0 z-50 bg-midnight/98 backdrop-blur-2xl transition-all duration-300 lg:hidden overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="min-h-full flex flex-col justify-between p-5 sm:p-8">
          {/* Top Header inside Drawer */}
          <div className="flex items-center justify-between border-b border-gold-antique/20 pb-4 shrink-0">
            <div className="flex items-center gap-2.5">
              <LotusIcon size={24} />
              <span className="font-cormorant text-lg sm:text-xl tracking-[0.15em] text-gold-champagne font-medium">
                KAVYA & KRISHNA
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-gold-champagne border border-gold-antique/30 rounded-full hover:bg-royal-dark/60 active:scale-95 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links list */}
          <nav className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 my-auto py-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-cormorant text-xl sm:text-2xl tracking-[0.18em] transition-colors py-1.5 flex items-center gap-2 group ${
                    isActive ? 'text-gold-champagne font-medium scale-105' : 'text-soft-ivory/80 hover:text-gold-champagne'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-gold-antique transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Footer info inside Drawer */}
          <div className="text-center pt-4 border-t border-gold-antique/20 shrink-0">
            <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-gold-antique/80 uppercase">
              Kavya & Krishna
            </p>
            <p className="font-cormorant text-xs sm:text-sm italic text-soft-ivory/60 mt-0.5">
              "A Sacred Journey of Love & Friendship"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
