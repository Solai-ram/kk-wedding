import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { OpeningScreen } from './components/sections/OpeningScreen';
import { HeroSection } from './components/sections/HeroSection';
import { DivineInspiration } from './components/sections/DivineInspiration';
import { LoveStoryTimeline } from './components/sections/LoveStoryTimeline';
import { TheCouple } from './components/sections/TheCouple';
import { WeddingInvitationCard } from './components/sections/WeddingInvitationCard';
import { VisualGallery } from './components/sections/VisualGallery';
import { CelebrationsAndVenue } from './components/sections/CelebrationsAndVenue';
import { FinalBlessings } from './components/sections/FinalBlessings';
import { ParticleBackground } from './components/shared/ParticleBackground';
import { AudioPlayer } from './components/shared/AudioPlayer';

export function App() {
  const [isEntered, setIsEntered] = useState(false);

  // Lock body scroll while temple doors are closed
  useEffect(() => {
    if (!isEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
    }
  }, [isEntered]);

  const handleEnter = () => {
    setIsEntered(true);
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="min-h-screen bg-midnight text-soft-ivory relative selection:bg-gold-antique selection:text-midnight overflow-x-hidden w-full max-w-full">
      {/* Golden Particle and Celestial Starry Dust Canvas */}
      <ParticleBackground density="medium" />

      {/* 3D Grand Temple Doors Opening Screen (Overlay in front of Hero) */}
      <OpeningScreen onEnter={handleEnter} isEntered={isEntered} />

      {/* Main Website Experience (Sitting directly behind the temple doors, revealed as they part!) */}
      <div className="relative z-10 overflow-x-hidden w-full max-w-full">
        {/* Navigation Bar (Fades in gracefully when doors part) */}
        <Navbar isEntered={isEntered} />

        {/* Main Storytelling Sections */}
        <main>
          {/* Section 01: Hero Experience */}
          <HeroSection />

          {/* Section 02: Divine Inspiration (Two Souls, One Sacred Melody) */}
          <DivineInspiration />

          {/* Section 03: Our Love Story (Childhood to Eternity Timeline) */}
          <LoveStoryTimeline />

          {/* Section 04: The Couple (Bride Kavya & Groom Krishna) */}
          <TheCouple />

          {/* Section 05: The Wedding Invitation (Heirloom Royal Proclamation Card & Akshathai Shower) */}
          <WeddingInvitationCard />

          {/* Section 06: The Visual Gallery (Real couple memories with Lightbox) */}
          <VisualGallery />

          {/* Section 07: Celebrations & Sacred Venue (ONE TIME AT THE LAST!) */}
          <CelebrationsAndVenue />
        </main>

        {/* Section 08: Final Blessings & Footer */}
        <FinalBlessings />

        {/* Persistent Ambient Sound Toggle (Divine Bansuri / Tanpura Harmonics) */}
        <AudioPlayer isEntered={isEntered} />
      </div>
    </div>
  );
}

export default App;
