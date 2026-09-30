import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playBubblePop } from './soundEffectsAero';

interface Bubble {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  amplitude: number;
}

export const FrutigerBackground: React.FC = () => {
  const [poppedBubbles, setPoppedBubbles] = useState<Record<number, boolean>>({});

  const bubbles: Bubble[] = [
    { id: 1, size: 96, top: '8%', left: '4%', duration: 4.2, delay: 0.1, amplitude: 14 },
    { id: 2, size: 64, top: '6%', left: '26%', duration: 3.8, delay: 0.4, amplitude: 10 },
    { id: 3, size: 108, top: '9%', left: '72%', duration: 5.0, delay: 0.2, amplitude: 18 },
    { id: 4, size: 128, top: '7%', left: '88%', duration: 5.6, delay: 0.7, amplitude: 16 },
    { id: 5, size: 72, top: '38%', left: '2%', duration: 4.5, delay: 0.9, amplitude: 12 },
    { id: 6, size: 104, top: '35%', left: '92%', duration: 4.8, delay: 0.3, amplitude: 15 },
    { id: 7, size: 84, top: '64%', left: '5%', duration: 4.1, delay: 0.5, amplitude: 11 },
    { id: 8, size: 92, top: '66%', left: '90%', duration: 4.4, delay: 0.8, amplitude: 13 }
  ];

  const handlePop = (id: number) => {
    playBubblePop();
    setPoppedBubbles((prev) => ({ ...prev, [id]: true }));
    // Respawn after 3 seconds
    setTimeout(() => {
      setPoppedBubbles((prev) => ({ ...prev, [id]: false }));
    }, 3000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Base Radiant Sky Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0d8bf2 0%, #38bdf8 38%, #59d0fa 60%, #2ed18c 92%, #15803d 100%)'
        }}
      />

      {/* 2. Radiant Sunburst Lens Flare Glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[650px] rounded-full opacity-65"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 245, 200, 0.6) 25%, rgba(125, 211, 252, 0.3) 60%, transparent 80%)',
          filter: 'blur(45px)'
        }}
      />

      {/* 3. Ecotopia Rolling Green Hills (Background Layer) */}
      <div
        className="absolute -bottom-24 -left-20 w-[120%] h-[480px] rounded-[100%] opacity-85"
        style={{
          background: 'linear-gradient(180deg, #34d399 0%, #10b981 40%, #059669 100%)',
          transform: 'rotate(-2deg)'
        }}
      />

      {/* 4. Ecotopia Rolling Green Hills (Foreground Layer) */}
      <div
        className="absolute -bottom-36 -right-20 w-[125%] h-[440px] rounded-[100%]"
        style={{
          background: 'linear-gradient(180deg, #4ade80 0%, #22c55e 35%, #15803d 100%)',
          transform: 'rotate(2.5deg)',
          boxShadow: '0 -15px 30px rgba(0, 100, 50, 0.15)'
        }}
      />

      {/* 5. Aquatic Crystal Lake Reflection at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-40"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, #0284c7 40%, #0369a1 100%)',
          backdropFilter: 'blur(4px)'
        }}
      />
      <div className="absolute bottom-20 left-1/4 right-1/4 h-[2px] bg-white/40 blur-[1px]" />

      {/* 6. Animated Water Bubbles with Refraction & Specular Highlights */}
      {bubbles.map((b) => {
        const isPopped = poppedBubbles[b.id];

        return (
          <AnimatePresence key={b.id}>
            {!isPopped && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 0.92,
                  y: [0, -b.amplitude, 0],
                  x: [0, b.amplitude * 0.4, 0]
                }}
                exit={{ scale: 1.4, opacity: 0 }}
                transition={{
                  y: { repeat: Infinity, duration: b.duration, ease: 'easeInOut', delay: b.delay },
                  x: { repeat: Infinity, duration: b.duration * 1.3, ease: 'easeInOut', delay: b.delay },
                  scale: { duration: 0.4 },
                  opacity: { duration: 0.4 }
                }}
                whileHover={{ scale: 1.15 }}
                onClick={() => handlePop(b.id)}
                className="aero-bubble absolute pointer-events-auto shadow-xl"
                style={{
                  width: `${b.size}px`,
                  height: `${b.size}px`,
                  top: b.top,
                  left: b.left
                }}
                title="Clique para estourar a bolha d'água!"
              />
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
};
