import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const MotionCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse/trackpad), skip touch screens
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer, .interactive-card');
      setIsHovering(!!interactive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Ambient soft glow aura */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 240 : 160,
          height: isHovering ? 240 : 160,
          background: isHovering
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 70%)',
          filter: 'blur(20px)',
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
        }}
      />

      {/* Crisp glowing cursor ring */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 pointer-events-none backdrop-blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          scale: isClicking ? 0.8 : 1,
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.12)' : 'rgba(56, 189, 248, 0.04)',
          borderColor: isHovering ? 'rgba(56, 189, 248, 0.7)' : 'rgba(56, 189, 248, 0.35)',
          transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), scale 0.15s ease, border-color 0.2s ease, background-color 0.2s ease',
        }}
      />

      {/* Tiny sharp center point */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 pointer-events-none shadow-sm shadow-cyan-300"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isHovering ? 0.3 : 0.9,
          scale: isClicking ? 1.5 : 1,
          transition: 'opacity 0.2s ease, scale 0.15s ease',
        }}
      />
    </div>
  );
};
