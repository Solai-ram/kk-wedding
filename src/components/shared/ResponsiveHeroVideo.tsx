import React, { useRef, useEffect, useState } from 'react';

interface ResponsiveHeroVideoProps {
  parallaxTranslateY?: number;
  className?: string;
  overlayGradient?: boolean;
}

export const ResponsiveHeroVideo: React.FC<ResponsiveHeroVideoProps> = ({
  parallaxTranslateY = 0,
  className = '',
  overlayGradient = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Synchronously compute initial video source on first render (frame 0)
  const getInitialSrc = () =>
    typeof window !== 'undefined' && window.innerWidth <= 768
      ? '/videos/hero-bg-mobile.mp4'
      : '/videos/hero-bg-desktop.mp4';

  const [videoSrc, setVideoSrc] = useState<string>(getInitialSrc);

  useEffect(() => {
    const handleResize = () => {
      const nextSrc =
        window.innerWidth <= 768
          ? '/videos/hero-bg-mobile.mp4'
          : '/videos/hero-bg-desktop.mp4';
      if (nextSrc !== videoSrc) {
        setVideoSrc(nextSrc);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback
        });
      }
    }
  }, [videoSrc]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {/* Parallax Video Container - Stable, rock-solid without scale-jumping or transition lag */}
      <div
        className="w-full h-full scale-105 sm:scale-110 transform-gpu will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxTranslateY}px, 0)`,
          transformOrigin: 'center center',
        }}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/generated/hero-radha-krishna.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08]"
        />
      </div>

      {/* Layered Luxury Midnight-Purple Gradient Overlays */}
      {overlayGradient && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/85 via-midnight/50 to-midnight pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-midnight/40 to-midnight/90 pointer-events-none" />
        </>
      )}
    </div>
  );
};
