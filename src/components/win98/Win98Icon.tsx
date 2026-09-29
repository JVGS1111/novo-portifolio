import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { playClickSound } from './soundEffects';

interface Win98IconProps {
  id: string;
  title: string;
  icon: string;
  badge?: string;
  onOpen: () => void;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const Win98Icon: React.FC<Win98IconProps> = ({
  title,
  icon,
  badge,
  onOpen,
  isSelected = false,
  onSelect
}) => {
  const [clickTimer, setClickTimer] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound();
    if (onSelect) onSelect();

    // Double click detection (also friendly on mobile / touch)
    if (clickTimer) {
      clearTimeout(clickTimer);
      setClickTimer(null);
      onOpen();
    } else {
      const timer = window.setTimeout(() => {
        setClickTimer(null);
      }, 350);
      setClickTimer(timer);
    }
  };

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`group flex flex-col items-center justify-start w-22 p-2 rounded cursor-pointer select-none text-center outline-none transition-colors ${
        isSelected ? 'bg-[#000080]/60 ring-1 ring-dotted ring-yellow-300' : 'hover:bg-white/10'
      }`}
    >
      <div className="relative text-3xl mb-1 filter drop-shadow">
        {icon}
        {badge && (
          <span className="absolute -top-1 -right-1 px-1 py-0.2 text-[9px] font-bold bg-amber-400 text-black border border-black rounded shadow">
            {badge}
          </span>
        )}
      </div>
      <span
        className={`text-[11px] leading-tight px-1 font-['Tahoma',sans-serif] ${
          isSelected
            ? 'bg-[#000080] text-white'
            : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,1)]'
        }`}
      >
        {title}
      </span>
    </motion.button>
  );
};
