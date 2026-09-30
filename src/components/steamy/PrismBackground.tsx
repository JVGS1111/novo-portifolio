import React, { useEffect, useRef } from 'react';

export const PrismBackground: React.FC = () => {
  const causticsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 20;
      targetY = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    const updatePosition = () => {
      // Smooth lerp (linear interpolation) without React re-renders
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (causticsRef.current) {
        causticsRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-10 bg-[#F4F6F9] transform-gpu">
      {/* 1. Luminous Studio White & Silver Base Gradient */}
      <div
        className="absolute inset-0 transform-gpu"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #FFFFFF 0%, #F5F7FA 45%, #EBF0F5 100%)',
        }}
      />

      {/* 2. Interactive Parallax Light Caustics (GPU-Accelerated Radial Gradients with ZERO blur filter overhead) */}
      <div
        ref={causticsRef}
        className="absolute inset-0 pointer-events-none transform-gpu will-change-transform"
      >
        {/* Specular White Caustic Hotspot behind 3D Glass centerpiece */}
        <div
          className="absolute top-[6%] right-[10%] w-[680px] h-[540px] rounded-full pointer-events-none transform-gpu"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(240, 246, 255, 0.45) 35%, rgba(240, 246, 255, 0) 70%)',
          }}
        />

        {/* Primary Rainbow Spectral Caustic (Chromatic Aberration Dispersion) */}
        <div
          className="absolute top-[16%] right-[20%] w-[500px] h-[300px] rounded-[100px] pointer-events-none transform-gpu opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(244, 114, 182, 0.22) 0%, rgba(168, 85, 247, 0.18) 32%, rgba(56, 189, 248, 0.22) 58%, rgba(251, 191, 36, 0.15) 75%, transparent 85%)',
            transform: 'rotate(-22deg) translateZ(0)',
          }}
        />

        {/* Diagonal Glass Edge Light Ray */}
        <div
          className="absolute top-[2%] right-[5%] w-[800px] h-[160px] pointer-events-none transform-gpu opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(192, 132, 252, 0.18) 40%, rgba(56, 189, 248, 0.12) 65%, transparent 80%)',
            transform: 'rotate(38deg) translateZ(0)',
          }}
        />

        {/* Secondary Lower Refraction Flare (Behind featured projects) */}
        <div
          className="absolute top-[52%] left-[6%] w-[600px] h-[340px] rounded-full pointer-events-none transform-gpu opacity-45"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(147, 197, 253, 0.22) 0%, rgba(196, 181, 253, 0.14) 40%, transparent 70%)',
          }}
        />

        {/* Bottom Ambient Caustic Reflection */}
        <div
          className="absolute bottom-[-8%] right-[12%] w-[750px] h-[380px] rounded-full pointer-events-none transform-gpu opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(254, 240, 138, 0.16) 0%, rgba(167, 139, 250, 0.14) 40%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default PrismBackground;
