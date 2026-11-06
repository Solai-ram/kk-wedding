import React, { useState, useEffect, useCallback } from 'react';
import { weddingConfig, GalleryItem } from '../../config/wedding';
import { LotusIcon, OrnateDivider, CornerOrnament } from '../shared/GoldOrnament';
import { X, ChevronLeft, ChevronRight, Maximize2, Heart } from 'lucide-react';

export const VisualGallery: React.FC = () => {
  const { gallery } = weddingConfig;
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (item: GalleryItem, index: number) => {
    setActiveItem(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveItem(null);
    document.body.style.overflow = '';
    document.body.style.overflowX = 'hidden';
  }, []);

  const showNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % gallery.length;
    setCurrentIndex(nextIdx);
    setActiveItem(gallery[nextIdx]);
  }, [currentIndex, gallery]);

  const showPrev = useCallback(() => {
    const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length;
    setCurrentIndex(prevIdx);
    setActiveItem(gallery[prevIdx]);
  }, [currentIndex, gallery]);

  // Keyboard navigation
  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, closeLightbox, showNext, showPrev]);

  // Touch swipe support for mobile lightbox
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) showNext();
    if (diff < -50) showPrev();
    setTouchStart(null);
  };

  return (
    <section id="gallery" className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden w-full max-w-full">
      {/* Background ambient lighting (Encapsulated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/3 w-[600px] max-w-full h-[600px] bg-royal-violet/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold-champagne uppercase font-medium block mb-2">
            CHERISHED MEMORIES
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-soft-ivory font-light tracking-[0.08em]">
            The Visual <span className="gold-text-gradient font-normal">Gallery</span>
          </h2>
          <p className="font-cormorant text-lg sm:text-xl text-soft-ivory/70 italic mt-2">
            Moments etched in time, love reflected in every smile.
          </p>
          <OrnateDivider />
        </div>

        {/* Responsive Editorial Grid of Cherished Memories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gallery.map((item, index) => {
            const isLandscape = item.aspect === 'landscape';
            const isFeatured = index === 0 || index === 12;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item, index)}
                className={`group relative rounded-2xl overflow-hidden purple-gold-border cursor-pointer bg-royal-dark/60 transition-all duration-500 hover:shadow-gold-card ${isFeatured
                    ? 'sm:col-span-2 sm:row-span-2'
                    : isLandscape
                      ? 'sm:col-span-2'
                      : ''
                  }`}
              >
                <div
                  className={`w-full overflow-hidden ${isFeatured
                      ? 'aspect-[4/3] sm:aspect-auto sm:h-full min-h-[320px]'
                      : isLandscape
                        ? 'aspect-[16/10]'
                        : 'aspect-[3/4]'
                    }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Hover Gradient Overlay with Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-gold-champagne mb-1">
                    <span className="font-cinzel text-[10px] tracking-widest uppercase">
                      Memory #{index + 1}
                    </span>
                    <Maximize2 className="w-4 h-4 text-gold-champagne" />
                  </div>
                  <p className="font-cormorant text-lg text-soft-ivory italic leading-snug">
                    {item.caption}
                  </p>
                </div>

                {/* Subtle gold badge in corner */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-midnight/70 border border-gold-antique/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-3.5 h-3.5 text-gold-champagne" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-midnight/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-royal-dark/80 border border-gold-antique/40 text-gold-champagne hover:bg-gold-antique/20 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={showPrev}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-royal-dark/80 border border-gold-antique/40 text-gold-champagne hover:bg-gold-antique/20 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-royal-dark/80 border border-gold-antique/40 text-gold-champagne hover:bg-gold-antique/20 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Image & Caption */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden border border-gold-antique/50 shadow-purple-glow max-h-[75vh]">
              <CornerOrnament position="top-left" className="absolute top-3 left-3 z-10" size={36} />
              <CornerOrnament position="bottom-right" className="absolute bottom-3 right-3 z-10" size={36} />
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[72vh] w-auto object-contain mx-auto rounded-xl"
              />
            </div>

            <div className="mt-4 text-center">
              <p className="font-cormorant text-2xl text-soft-ivory italic">
                {activeItem.caption}
              </p>
              <p className="font-cinzel text-xs tracking-[0.25em] text-gold-champagne uppercase mt-1">
                {currentIndex + 1} of {gallery.length} • Kavya & Krishna
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

