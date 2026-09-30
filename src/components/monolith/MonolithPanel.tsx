import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { playIndustrialClick } from './monolithAudio';

interface MonolithPanelProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  withRivets?: boolean;
  accentBorder?: 'default' | 'amber' | 'cyan' | 'green';
}

export const MonolithPanel: React.FC<MonolithPanelProps> = ({
  children,
  className = '',
  interactive = false,
  withRivets = true,
  accentBorder = 'default',
  onClick,
  ...props
}) => {
  const getBorderColor = () => {
    switch (accentBorder) {
      case 'amber':
        return 'border-[#ff9900]/60 hover:border-[#ff9900]';
      case 'cyan':
        return 'border-[#00f0ff]/60 hover:border-[#00f0ff]';
      case 'green':
        return 'border-[#22c55e]/60 hover:border-[#22c55e]';
      default:
        return 'border-[#484b54] hover:border-[#6b7280]';
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
              x: -2,
              y: -2,
              transition: { duration: 0.05, ease: 'linear' }
            }
          : undefined
      }
      className={`relative bg-[#16181c]/95 border ${getBorderColor()} rounded-[2px] transition-shadow duration-100 ${
        interactive
          ? 'cursor-pointer hover:shadow-[4px_4px_0px_#484b54]'
          : 'shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
      } ${className}`}
    >
      {/* 4 Corner Industrial Rivets / Screws as in Figma Spec (8px outer + 3px inner dot) */}
      {withRivets && (
        <>
          {/* Top-Left */}
          <div className="absolute top-2 left-2 w-2 h-2 rounded-full border border-[#484b54] flex items-center justify-center pointer-events-none z-10 opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-[#8e95a5]" />
          </div>

          {/* Top-Right */}
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full border border-[#484b54] flex items-center justify-center pointer-events-none z-10 opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-[#8e95a5]" />
          </div>

          {/* Bottom-Left */}
          <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full border border-[#484b54] flex items-center justify-center pointer-events-none z-10 opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-[#8e95a5]" />
          </div>

          {/* Bottom-Right */}
          <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full border border-[#484b54] flex items-center justify-center pointer-events-none z-10 opacity-70">
            <div className="w-[3px] h-[3px] rounded-full bg-[#8e95a5]" />
          </div>
        </>
      )}

      {children}
    </motion.div>
  );
};
