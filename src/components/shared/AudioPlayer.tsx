import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { weddingConfig } from '../../config/wedding';

export const AudioPlayer: React.FC<{ isEntered?: boolean }> = ({ isEntered = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Web Audio drone for divine Indian flute & tanpura harmonics
  const startDrone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Filter for warm, resonant temple sound
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);
      filter.Q.setValueAtTime(3, ctx.currentTime);
      filter.connect(masterGain);

      // Traditional Indian Sa-Pa-Sa Tanpura harmonics (D note: 146.83 Hz, 220 Hz, 293.66 Hz, 440 Hz)
      const freqs = [146.83, 220.00, 293.66, 440.00, 587.33];
      const oscs: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // LFO for gentle breath-like wavering (mimicking flute breath)
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.08 / (idx + 1), ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(filter);

        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
    } catch {
      // Audio context might be restricted before gesture
    }
  };

  const stopDrone = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      const ctx = audioContextRef.current;
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      setTimeout(() => {
        oscillatorsRef.current.forEach((o) => {
          try { o.stop(); } catch { }
        });
        oscillatorsRef.current = [];
        ctx.close().catch(() => { });
      }, 1200);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
      stopDrone();
      setIsPlaying(false);
    } else {
      // Never autoplay - user explicitly clicked
      startDrone();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopDrone();
    };
  }, []);

  if (!weddingConfig.audio.enabled) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex items-center transition-all duration-700 ease-out ${isEntered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Mute ambient flute sound' : 'Play ambient flute sound'}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-500 shadow-lg ${isPlaying
            ? 'bg-royal-dark/95 border-gold-champagne text-gold-champagne shadow-gold-subtle scale-105'
            : 'bg-midnight/80 backdrop-blur-md border-gold-antique/30 text-soft-ivory/70 hover:border-gold-antique hover:text-soft-ivory'
          }`}
      >
        {isPlaying ? (
          <>
            <div className="relative flex items-center justify-center">
              <Volume2 className="w-4 h-4 text-gold-champagne animate-pulse" />
              <span className="absolute -inset-1 rounded-full bg-gold-antique/20 animate-ping" />
            </div>
            <span className="text-xs font-cinzel tracking-wider text-gold-champagne">
              Divine Melodies Playing
            </span>
            <div className="flex items-center gap-0.5 ml-1">
              <span className="w-0.5 h-3 bg-gold-champagne animate-[pulse_1s_infinite_100ms]" />
              <span className="w-0.5 h-4 bg-gold-champagne animate-[pulse_1s_infinite_300ms]" />
              <span className="w-0.5 h-2 bg-gold-champagne animate-[pulse_1s_infinite_500ms]" />
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="text-xs font-cinzel tracking-wider hidden sm:inline">
              Play Music
            </span>
            <Sparkles className="w-3 h-3 text-gold-antique opacity-0 group-hover:opacity-100 transition-opacity" />
          </>
        )}
      </button>
    </div>
  );
};

