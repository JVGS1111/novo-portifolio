import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  spotlightColor?: string;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 7,
  spotlightColor = 'rgba(56, 189, 248, 0.12)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
      const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 260 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const spotlightBg = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const specularGlassGlint = useMotionTemplate`radial-gradient(160px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.22), transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    rotateX.set(rotX);
    rotateY.set(rotY);
  };

  const handleMouseEnter = () => {
    if (canHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={
        canHover
          ? {
              transformStyle: 'preserve-3d',
              rotateX,
              rotateY,
            }
          : undefined
      }
      whileHover={canHover ? { scale: 1.015 } : undefined}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden w-full h-full min-w-0 ${className}`}
    >
      {/* Dynamic Cursor Spotlight & Apple Liquid Glass Specular Glint */}
      {canHover && isHovered && (
        <>
          <motion.div
            className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300 rounded-[inherit]"
            style={{ background: spotlightBg }}
          />
          <motion.div
            className="pointer-events-none absolute -inset-px z-20 transition-opacity duration-300 rounded-[inherit] mix-blend-screen"
            style={{ background: specularGlassGlint }}
          />
        </>
      )}

      {/* Content wrapper with robust flex and sizing */}
      <div className="relative z-0 h-full w-full min-w-0 flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};
