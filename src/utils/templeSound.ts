/**
 * Authentic Resonant Bronze Temple Bell Synthesizer (Web Audio API)
 * Zero external audio files required, runs 100% reliably in all browsers.
 */
export function playTempleBellChime() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.03); // Quick strike
    masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.8); // Long bell resonance
    masterGain.connect(ctx.destination);

    // Auspicious fundamental & overtone frequencies of a South Indian Bronze Ghanta (Temple Bell)
    // 528 Hz (Solfeggio/divine harmony), 792 Hz, 1056 Hz, 1457 Hz, 1848 Hz
    const bellFrequencies = [528, 792, 1056, 1457, 1848, 2376];
    const decayTimes = [3.8, 3.2, 2.6, 2.0, 1.5, 1.0];

    bellFrequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx === 0 ? 'sine' : idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.2 / (idx + 1), ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + decayTimes[idx]);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start();
      osc.stop(ctx.currentTime + 4.0);
    });
  } catch {
    // Audio context may require user interaction
  }
}

