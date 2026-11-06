import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDelta: number;
  color: string;
}

export const ParticleBackground: React.FC<{ density?: 'low' | 'medium' | 'high' }> = ({
  density = 'medium',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = document.documentElement.clientWidth || window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = document.documentElement.clientWidth || window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const countMap = { low: 35, medium: 70, high: 120 };
    const particleCount = countMap[density];
    const particles: Particle[] = [];

    const goldColors = [
      'rgba(230, 205, 148, ', // Champagne gold
      'rgba(197, 161, 90, ',  // Antique gold
      'rgba(255, 241, 208, ', // Pale glowing ivory gold
      'rgba(169, 154, 184, ', // Muted lavender
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.5 - 0.15, // gently drift upward
        opacity: Math.random() * 0.7 + 0.2,
        opacityDelta: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacityDelta;

        if (p.opacity > 0.85 || p.opacity < 0.15) {
          p.opacityDelta = -p.opacityDelta;
        }

        // Wrap around screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle with gentle radial glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.opacity))})`;
        ctx.shadowBlur = p.size > 1.5 ? 8 : 4;
        ctx.shadowColor = '#C5A15A';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-60 transition-opacity duration-1000 max-w-full overflow-hidden"
      aria-hidden="true"
    />
  );
};

