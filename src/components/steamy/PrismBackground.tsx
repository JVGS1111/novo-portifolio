import React, { useEffect, useRef } from 'react';

/**
 * PrismBackground
 * 
 * High-Performance Apple Liquid Glass Background (Exclusively for Proposta 06):
 * - Vibrant liquid color pools (Electric Cyan, Soft Violet, Sunset Rose, Mint)
 * - Zero heavy blur filters, zero SVG turbulence, zero blend-mode thrashing
 * - Smooth, hardware-accelerated 60-120 FPS performance
 * - Beautifully visible through translucent liquid glass cards
 */
export const PrismBackground: React.FC = () => {
  const causticsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isRunning = false;

    const updatePosition = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.08;
      currentY += dy * 0.08;

      if (causticsRef.current) {
        causticsRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      }

      // Stop RAF when at rest to ensure 0 CPU/GPU usage during scroll
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        animationFrameId = requestAnimationFrame(updatePosition);
      } else {
        isRunning = false;
        animationFrameId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 25;
      targetY = (e.clientY / window.innerHeight - 0.5) * 20;

      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-10 bg-[#EEF2F7] transform-gpu"
    >
      {/* 1. Luminous Soft Studio Base with Subtle Depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 15%, #FFFFFF 0%, #EEF2F7 60%, #E3E9F2 100%)',
        }}
      />

      {/* 2. Interactive Liquid Color Pools (Vibrant & Visible Through Liquid Glass) */}
      <div
        ref={causticsRef}
        className="absolute inset-0 pointer-events-none transform-gpu will-change-transform"
      >
        {/* Pool 1: Apple Electric Cyan (Hero Upper Right - refracts behind code card) */}
        <div
          className="absolute -top-[5%] right-[5%] w-[720px] h-[640px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(56, 189, 248, 0.42) 0%, rgba(14, 165, 233, 0.22) 40%, rgba(99, 102, 241, 0.1) 60%, transparent 75%)',
          }}
        />

        {/* Pool 2: Apple Soft Violet & Purple (Mid-Left - refracts behind intro & navbar) */}
        <div
          className="absolute top-[22%] -left-[6%] w-[680px] h-[600px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(168, 85, 247, 0.38) 0%, rgba(129, 140, 248, 0.22) 42%, transparent 70%)',
          }}
        />

        {/* Pool 3: Apple Sunset Rose / Coral (Center-Right - refracts behind projects) */}
        <div
          className="absolute top-[48%] right-[8%] w-[640px] h-[560px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(244, 114, 182, 0.35) 0%, rgba(251, 146, 60, 0.2) 42%, transparent 70%)',
          }}
        />

        {/* Pool 4: Apple Mint & Teal (Lower-Left - refracts behind metrics & experience) */}
        <div
          className="absolute top-[72%] left-[4%] w-[620px] h-[540px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(45, 212, 191, 0.35) 0%, rgba(56, 189, 248, 0.18) 45%, transparent 70%)',
          }}
        />

        {/* Pool 5: Warm Amber Accent (Bottom Right - refracts behind contact) */}
        <div
          className="absolute bottom-[-5%] right-[15%] w-[660px] h-[520px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(251, 191, 36, 0.32) 0%, rgba(249, 115, 22, 0.15) 45%, transparent 70%)',
          }}
        />

        {/* Specular White Caustic Flare (Highlights Glass Edges in Hero) */}
        <div
          className="absolute top-[8%] right-[16%] w-[580px] h-[440px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.4) 35%, transparent 70%)',
          }}
        />

        {/* Prismatic Rainbow Dispersion Ribbon (Diagonal Light Streak) */}
        <div
          className="absolute top-[14%] right-[12%] w-[600px] h-[260px] pointer-events-none opacity-75"
          style={{
            background:
              'linear-gradient(135deg, rgba(244, 114, 182, 0.25) 0%, rgba(168, 85, 247, 0.22) 30%, rgba(56, 189, 248, 0.25) 60%, rgba(251, 191, 36, 0.18) 100%)',
            borderRadius: '9999px',
            transform: 'rotate(-18deg)',
          }}
        />
      </div>
    </div>
  );
};

export default PrismBackground;
