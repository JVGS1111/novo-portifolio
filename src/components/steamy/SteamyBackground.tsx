import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SteamyBackgroundProps {
  steamDensity?: number; // 0 (clear) to 1 (dense fog)
}

export const SteamyBackground: React.FC<SteamyBackgroundProps> = ({ steamDensity = 0.85 }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Gentle normalized parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-10 bg-[#F0F4F8]"
      style={{
        background: 'linear-gradient(175deg, #F8FAFC 0%, #EEF2F6 40%, #E2E8F0 100%)',
      }}
    >
      {/* 1. Deep Atmospheric Botanical Leaf Silhouettes (Blurred Behind Shower Glass) */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: mousePos.x * 0.4,
          y: mousePos.y * 0.4,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 60 }}
      >
        {/* Top-Right Palm/Monstera Silhouette */}
        <div
          className="absolute -top-12 -right-16 w-[560px] h-[480px] rounded-full opacity-70"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(40, 85, 65, 0.22) 0%, rgba(30, 70, 50, 0.08) 55%, transparent 75%)',
            filter: 'blur(56px)',
            transform: 'rotate(-25deg) scale(1.1)',
          }}
        />

        {/* Top-Left Fern Leaf */}
        <div
          className="absolute top-16 -left-20 w-[480px] h-[380px] rounded-full opacity-65"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(45, 90, 70, 0.18) 0%, rgba(35, 75, 55, 0.06) 60%, transparent 80%)',
            filter: 'blur(52px)',
            transform: 'rotate(35deg)',
          }}
        />

        {/* Mid-Right Tropical Frond */}
        <div
          className="absolute top-[45%] -right-24 w-[600px] h-[440px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(40, 85, 65, 0.2) 0%, rgba(35, 75, 55, 0.05) 60%, transparent 80%)',
            filter: 'blur(58px)',
            transform: 'rotate(15deg)',
          }}
        />

        {/* Mid-Left Bamboo Silhouette */}
        <div
          className="absolute top-[52%] -left-28 w-[500px] h-[420px] rounded-full opacity-55"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(45, 95, 75, 0.18) 0%, transparent 70%)',
            filter: 'blur(50px)',
            transform: 'rotate(-15deg)',
          }}
        />

        {/* Bottom Ambient Foliage */}
        <div
          className="absolute -bottom-24 left-[20%] w-[680px] h-[420px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(40, 85, 65, 0.2) 0%, transparent 75%)',
            filter: 'blur(60px)',
            transform: 'rotate(5deg)',
          }}
        />
      </motion.div>

      {/* 2. Floating Steam Vapor Nebulae (Pure Morning Bath Mist) */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: steamDensity }}
      >
        {/* Steam Nebula 1 - Top Left */}
        <motion.div
          animate={{
            x: [0, 25, -20, 0],
            y: [0, -18, 12, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-10 w-[840px] h-[600px] rounded-full bg-white/75"
          style={{ filter: 'blur(100px)' }}
        />

        {/* Steam Nebula 2 - Top Right */}
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 22, -15, 0],
            scale: [1, 0.94, 1.06, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-10 right-[-100px] w-[860px] h-[580px] rounded-full bg-white/70"
          style={{ filter: 'blur(105px)' }}
        />

        {/* Steam Nebula 3 - Center Ambient */}
        <motion.div
          animate={{
            scale: [1, 1.12, 0.95, 1],
            opacity: [0.6, 0.75, 0.62, 0.6],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[35%] left-[10%] w-[1000px] h-[720px] rounded-full bg-white/65"
          style={{ filter: 'blur(120px)' }}
        />

        {/* Steam Nebula 4 - Bottom Right */}
        <motion.div
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -15, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-20 right-[-50px] w-[880px] h-[640px] rounded-full bg-white/75"
          style={{ filter: 'blur(100px)' }}
        />
      </motion.div>

      {/* 3. Margin Condensation Droplets & Specular Reflections (Fixed on Glass Surface) */}
      {/* Left Margin Droplets & Trickle Trails */}
      <div className="absolute top-0 bottom-0 left-0 w-12 hidden sm:block">
        {/* Droplet group */}
        {[
          { top: 60, size: 7, left: 16 },
          { top: 110, size: 10, left: 22 },
          { top: 180, size: 8, left: 14 },
          { top: 260, size: 11, left: 18 },
          { top: 340, size: 8, left: 24 },
          { top: 520, size: 10, left: 12 },
          { top: 680, size: 7, left: 16 },
          { top: 840, size: 12, left: 20 },
          { top: 1020, size: 9, left: 15 },
          { top: 1240, size: 10, left: 22 },
          { top: 1420, size: 8, left: 14 },
          { top: 1600, size: 11, left: 18 },
        ].map((d, i) => (
          <div
            key={`left-drop-${i}`}
            className="absolute rounded-full"
            style={{
              top: `${d.top}px`,
              left: `${d.left}px`,
              width: `${d.size}px`,
              height: `${d.size}px`,
              background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.8) 40%, rgba(186,215,233,0.5) 80%, rgba(140,175,200,0.6) 100%)',
              boxShadow: '0 1.5px 3px rgba(30, 45, 65, 0.15), inset 0 1px 1.5px rgba(255,255,255,0.9), inset 0 -0.8px 1.5px rgba(50, 75, 100, 0.25)',
            }}
          />
        ))}

        {/* Moisture Wipe Trickle Trail 1 */}
        <div
          className="absolute w-[3px] rounded-full"
          style={{
            top: '130px',
            left: '20px',
            height: '48px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 80%, transparent 100%)',
            boxShadow: 'inset 0 0 1px rgba(0,0,0,0.06)',
          }}
        />

        {/* Moisture Wipe Trickle Trail 2 (Animated Trickling Down) */}
        <motion.div
          className="absolute left-[16px] w-[3.5px] rounded-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.15) 100%)',
          }}
          animate={{
            top: [690, 760, 690],
            height: [35, 65, 35],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div
            className="absolute -bottom-1 -left-[3px] w-2.5 h-2.5 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, rgba(186,215,233,0.8) 75%)',
              boxShadow: '0 1.5px 3px rgba(30,45,65,0.18)',
            }}
          />
        </motion.div>
      </div>

      {/* Right Margin Droplets & Trickle Trails */}
      <div className="absolute top-0 bottom-0 right-0 w-12 hidden sm:block">
        {[
          { top: 70, size: 8, right: 18 },
          { top: 130, size: 11, right: 14 },
          { top: 240, size: 8, right: 22 },
          { top: 390, size: 10, right: 16 },
          { top: 580, size: 8, right: 20 },
          { top: 760, size: 12, right: 14 },
          { top: 980, size: 7, right: 22 },
          { top: 1190, size: 9, right: 16 },
          { top: 1380, size: 11, right: 18 },
          { top: 1560, size: 8, right: 22 },
          { top: 1720, size: 10, right: 16 },
        ].map((d, i) => (
          <div
            key={`right-drop-${i}`}
            className="absolute rounded-full"
            style={{
              top: `${d.top}px`,
              right: `${d.right}px`,
              width: `${d.size}px`,
              height: `${d.size}px`,
              background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.8) 40%, rgba(186,215,233,0.5) 80%, rgba(140,175,200,0.6) 100%)',
              boxShadow: '0 1.5px 3px rgba(30, 45, 65, 0.15), inset 0 1px 1.5px rgba(255,255,255,0.9), inset 0 -0.8px 1.5px rgba(50, 75, 100, 0.25)',
            }}
          />
        ))}

        {/* Moisture Wipe Trickle Trail (Right Animated) */}
        <motion.div
          className="absolute right-[18px] w-[3.5px] rounded-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.15) 100%)',
          }}
          animate={{
            top: [140, 210, 140],
            height: [40, 70, 40],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <div
            className="absolute -bottom-1 -left-[3px] w-2.5 h-2.5 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, rgba(186,215,233,0.8) 75%)',
              boxShadow: '0 1.5px 3px rgba(30,45,65,0.18)',
            }}
          />
        </motion.div>
      </div>

      {/* Top & Bottom Header Droplets */}
      <div className="absolute top-3 left-20 right-20 flex justify-between opacity-70 pointer-events-none hidden md:flex">
        {[180, 340, 620, 890, 1120].map((_pos, idx) => (
          <div
            key={`top-drop-${idx}`}
            className="w-2 h-2 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fff 0%, rgba(186,215,233,0.6) 70%)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            }}
          />
        ))}
      </div>
    </div>
  );
};
