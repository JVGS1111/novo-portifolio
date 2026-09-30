import React, { useEffect, useRef } from 'react';

/**
 * LiquidGlassBackground
 * 
 * Apple-inspired Liquid Glass & Optical Refraction Canvas:
 * - Fluid organic aurora orbs (Apple Cyan, Ultra Violet, Electric Indigo, Rose Magenta, Amber)
 * - GPU-accelerated smooth floating & breathing physics
 * - Interactive cursor-following optical refraction lens (smooth lerp)
 * - Prismatic caustic refraction streaks simulating light passing through curved liquid glass
 * - Zero layout thrashing, 60-120 FPS high performance
 */
export const LiquidGlassBackground: React.FC = () => {
  const lensRef = useRef<HTMLDivElement>(null);
  const causticsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only add mouse interaction on devices with fine pointer (mouse/trackpad)
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animationFrameId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      // Smooth lerp (linear interpolation) for optical inertia
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (lensRef.current) {
        lensRef.current.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      }

      if (causticsRef.current) {
        const causticsOffsetX = (currentX / window.innerWidth - 0.5) * 40;
        const causticsOffsetY = (currentY / window.innerHeight - 0.5) * 30;
        causticsRef.current.style.transform = `translate3d(${causticsOffsetX.toFixed(2)}px, ${causticsOffsetY.toFixed(2)}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-0 transform-gpu"
    >
      {/* 1. Deep Oceanic Substrate Gradient */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: 'radial-gradient(ellipse 120% 100% at 50% -20%, #0c1424 0%, #07090e 65%, #040508 100%)',
        }}
      />

      {/* 2. Apple Liquid Aurora Mesh Orbs */}
      <div className="absolute inset-0 overflow-hidden transform-gpu">
        {/* Orb 1: Apple Electric Cyan (Hero Upper Right) */}
        <div
          className="absolute -top-[10%] right-[5%] w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full mix-blend-screen opacity-35 filter blur-[110px] animate-liquid-drift-1 transform-gpu will-change-transform"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #06b6d4 0%, #0284c7 45%, rgba(6, 182, 212, 0) 70%)',
          }}
        />

        {/* Orb 2: Apple Ultra Violet & Indigo (Mid Left) */}
        <div
          className="absolute top-[28%] -left-[12%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full mix-blend-screen opacity-30 filter blur-[120px] animate-liquid-drift-2 transform-gpu will-change-transform"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #8b5cf6 0%, #6366f1 40%, rgba(99, 102, 241, 0) 70%)',
          }}
        />

        {/* Orb 3: Apple Rose Magenta / Fuchsia (Mid-Center Refraction) */}
        <div
          className="absolute top-[55%] right-[10%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full mix-blend-screen opacity-22 filter blur-[130px] animate-liquid-drift-3 transform-gpu will-change-transform"
          style={{
            background: 'radial-gradient(circle at 45% 45%, #ec4899 0%, #a855f7 45%, rgba(236, 72, 153, 0) 70%)',
          }}
        />

        {/* Orb 4: Apple Deep Emerald & Teal (Lower Left) */}
        <div
          className="absolute top-[78%] left-[8%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full mix-blend-screen opacity-20 filter blur-[120px] animate-liquid-drift-1 transform-gpu will-change-transform"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #10b981 0%, #06b6d4 45%, rgba(16, 185, 129, 0) 70%)',
          }}
        />

        {/* Orb 5: Apple Solar Amber Glow (Bottom Accent) */}
        <div
          className="absolute bottom-[-15%] right-[25%] w-[600px] h-[600px] rounded-full mix-blend-screen opacity-18 filter blur-[130px] animate-liquid-drift-2 transform-gpu will-change-transform"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #f59e0b 0%, #ea580c 40%, rgba(245, 158, 11, 0) 70%)',
          }}
        />
      </div>

      {/* 3. Interactive Optical Refraction Lens (Follows cursor smoothly) */}
      <div
        ref={lensRef}
        className="hidden md:block absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen filter blur-[90px] opacity-35 transform-gpu will-change-transform"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.4) 0%, rgba(168, 85, 247, 0.25) 35%, rgba(6, 182, 212, 0.1) 60%, transparent 75%)',
        }}
      />

      {/* 4. Optical Refraction Caustic Streaks (Prismatic dispersion light rays) */}
      <div
        ref={causticsRef}
        className="absolute inset-0 pointer-events-none transform-gpu will-change-transform opacity-30"
      >
        {/* Diagonal Refraction Caustic Beam 1 */}
        <div
          className="absolute top-[8%] left-[15%] w-[900px] h-[180px] pointer-events-none transform-gpu animate-caustic-shimmer"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(56, 189, 248, 0.2) 30%, rgba(168, 85, 247, 0.15) 55%, transparent 75%)',
            transform: 'rotate(-28deg) translateZ(0)',
          }}
        />

        {/* Diagonal Refraction Caustic Beam 2 */}
        <div
          className="absolute top-[42%] right-[5%] w-[800px] h-[140px] pointer-events-none transform-gpu animate-caustic-shimmer"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.35) 0%, rgba(147, 197, 253, 0.2) 35%, rgba(236, 72, 153, 0.12) 60%, transparent 75%)',
            transform: 'rotate(32deg) translateZ(0)',
            animationDelay: '3.5s',
          }}
        />

        {/* Lower Prismatic Dispersion Arc */}
        <div
          className="absolute top-[72%] left-[20%] w-[850px] h-[160px] pointer-events-none transform-gpu animate-caustic-shimmer"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, rgba(168, 85, 247, 0.2) 35%, rgba(6, 182, 212, 0.15) 60%, transparent 75%)',
            transform: 'rotate(-18deg) translateZ(0)',
            animationDelay: '6s',
          }}
        />
      </div>

      {/* 5. Ultra-subtle Micro-Noise / Crystal Frost Texture (Pure SVG, 0 HTTP requests) */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default LiquidGlassBackground;
