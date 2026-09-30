import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { playIndustrialClick } from './monolithAudio';

interface MonolithPanelProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  withCorners?: boolean;
  withRivets?: boolean;
  accentBorder?: 'default' | 'amber' | 'cyan' | 'green';
  bgImage?: string;
}

export const MonolithPanel: React.FC<MonolithPanelProps> = ({
  children,
  className = '',
  interactive = false,
  withCorners = true,
  withRivets: _withRivets,
  accentBorder = 'default',
  bgImage,
  onClick,
  ...props
}) => {
  const getBorderColor = () => {
    switch (accentBorder) {
      case 'amber':
        return 'border-[#ffaa00]/40 hover:border-[#ffaa00]';
      case 'cyan':
        return 'border-[#00f0ff]/40 hover:border-[#00f0ff]';
      case 'green':
        return 'border-[#22c55e]/40 hover:border-[#22c55e]';
      default:
        return 'border-white/10 hover:border-white/25';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (interactive) {
      playIndustrialClick();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.div
      {...props}
      onClick={handleClick}
      whileHover={
        interactive
          ? {
              y: -3,
              transition: { duration: 0.15, ease: 'easeOut' }
            }
          : undefined
      }
      className={`relative bg-[#0d1016]/85 hover:bg-[#121620]/95 backdrop-blur-md border ${getBorderColor()} rounded-none transition-all duration-200 overflow-hidden ${
        interactive
          ? 'cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_30px_rgba(255,170,0,0.12)]'
          : 'shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
      } ${className}`}
    >
      {/* Ambient Background Texture / Image if provided */}
      {bgImage && (
        <div
          className="absolute inset-0 opacity-15 hover:opacity-25 transition-opacity bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Architectural Corner Reticles (Minimalist Sci-Fi Brackets) */}
      {withCorners && (
        <>
          <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/30 pointer-events-none z-10" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/30 pointer-events-none z-10" />
          <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/30 pointer-events-none z-10" />
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/30 pointer-events-none z-10" />
        </>
      )}

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default MonolithPanel;
