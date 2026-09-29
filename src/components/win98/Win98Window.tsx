import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound, playMinimizeSound } from './soundEffects';

interface Win98WindowProps {
  id: string;
  title: string;
  icon?: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  isActive: boolean;
  zIndex: number;
  initialX?: number;
  initialY?: number;
  width?: number | string;
  height?: number | string;
  menuItems?: string[];
  statusText?: string;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  children: React.ReactNode;
}

export const Win98Window: React.FC<Win98WindowProps> = ({
  title,
  icon = '📁',
  isOpen,
  isMinimized,
  isMaximized,
  isActive,
  zIndex,
  initialX = 80,
  initialY = 40,
  width = 720,
  height = 500,
  menuItems = ['Arquivo', 'Editar', 'Exibir', 'Ajuda'],
  statusText = 'Pronto',
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  children
}) => {
  const [screenDims, setScreenDims] = useState(() => ({
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  }));

  useEffect(() => {
    const handleResize = () => {
      setScreenDims({
        isMobile: window.innerWidth < 768,
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isOpen) return null;

  // Responsive calculations:
  // On mobile (<768px), windows adapt to fit the screen neatly without breaking the retro vibe
  const effectiveWidth = screenDims.isMobile
    ? screenDims.width - 8
    : typeof width === 'number'
      ? Math.min(width, screenDims.width - 16)
      : width;

  const effectiveHeight = screenDims.isMobile
    ? screenDims.height - 44
    : typeof height === 'number'
      ? Math.min(height, screenDims.height - 50)
      : height;

  const effectiveX = screenDims.isMobile
    ? 4
    : Math.min(initialX, Math.max(10, screenDims.width - (typeof effectiveWidth === 'number' ? effectiveWidth : 600) - 20));

  const effectiveY = screenDims.isMobile
    ? 4
    : Math.min(initialY, Math.max(10, screenDims.height - (typeof effectiveHeight === 'number' ? effectiveHeight : 400) - 50));

  const shouldBeFullscreen = isMaximized || screenDims.isMobile;

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          onPointerDown={onFocus}
          drag={!shouldBeFullscreen}
          dragMomentum={false}
          dragElastic={0.05}
          dragConstraints={{
            left: 0,
            top: 0,
            right: Math.max(0, screenDims.width - (typeof effectiveWidth === 'number' ? effectiveWidth : 500)),
            bottom: Math.max(0, screenDims.height - 80)
          }}
          initial={{ opacity: 0, scale: 0.95, y: effectiveY + 15, x: effectiveX }}
          animate={
            shouldBeFullscreen
              ? { opacity: 1, scale: 1, x: 0, y: 0, width: '100%', height: 'calc(100% - 36px)' }
              : { opacity: 1, scale: 1, x: effectiveX, y: effectiveY, width: effectiveWidth, height: effectiveHeight }
          }
          exit={{ opacity: 0, scale: 0.8, y: 350, transition: { duration: 0.2 } }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          style={{
            zIndex,
            position: shouldBeFullscreen ? 'fixed' : 'absolute',
            top: 0,
            left: 0
          }}
          className={`flex flex-col select-none font-['Tahoma',sans-serif] bg-[#C0C0C0] p-[3px] shadow-[2px_2px_10px_rgba(0,0,0,0.5)] border-t-[2px] border-l-[2px] border-r-[2px] border-b-[2px] border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#000000] border-b-[#000000] max-w-[100vw] max-h-[calc(100vh-36px)] ${
            shouldBeFullscreen ? 'inset-0 bottom-[36px]' : ''
          }`}
        >
          {/* Classic Windows 98 Titlebar */}
          <div
            onDoubleClick={() => {
              if (!screenDims.isMobile) {
                playClickSound();
                onToggleMaximize();
              }
            }}
            className={`flex items-center justify-between px-1.5 py-0.5 cursor-grab active:cursor-grabbing text-white h-[22px] shrink-0 transition-colors ${
              isActive
                ? 'bg-gradient-to-r from-[#000080] via-[#084b9e] to-[#1084d0]'
                : 'bg-[#808080]'
            }`}
          >
            <div className="flex items-center gap-1.5 overflow-hidden">
              <span className="text-sm shrink-0 leading-none">{icon}</span>
              <span className="text-[11px] font-bold tracking-tight truncate leading-none">
                {title}
              </span>
            </div>

            {/* Window Controls: _ [] X */}
            <div className="flex items-center gap-[2px] shrink-0" onPointerDown={(e) => e.stopPropagation()}>
              {/* Minimize button */}
              <button
                type="button"
                onClick={() => {
                  playMinimizeSound();
                  onMinimize();
                }}
                className="w-4 h-3.5 bg-[#C0C0C0] text-black font-bold text-[9px] flex items-center justify-center border-t border-l border-white border-r border-b border-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white active:pt-[1px] active:pl-[1px] cursor-pointer"
                title="Minimizar"
              >
                _
              </button>

              {/* Maximize / Restore button (Hidden or disabled on small mobile) */}
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onToggleMaximize();
                }}
                className={`w-4 h-3.5 bg-[#C0C0C0] text-black font-bold text-[9px] items-center justify-center border-t border-l border-white border-r border-b border-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white active:pt-[1px] active:pl-[1px] cursor-pointer ${
                  screenDims.isMobile ? 'hidden' : 'flex'
                }`}
                title={isMaximized ? 'Restaurar' : 'Maximizar'}
              >
                {isMaximized ? '❐' : '□'}
              </button>

              {/* Close button */}
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                className="w-4 h-3.5 bg-[#C0C0C0] text-black font-bold text-[10px] flex items-center justify-center border-t border-l border-white border-r border-b border-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white active:pt-[1px] active:pl-[1px] cursor-pointer"
                title="Fechar"
              >
                ×
              </button>
            </div>
          </div>

          {/* Menu Bar */}
          {menuItems.length > 0 && (
            <div className="flex items-center gap-2 sm:gap-3 px-1.5 py-0.5 bg-[#C0C0C0] border-b border-[#808080] text-[10.5px] text-black overflow-x-auto shrink-0">
              {menuItems.map((item) => (
                <span
                  key={item}
                  onClick={playClickSound}
                  className="px-1 py-0.2 hover:bg-[#000080] hover:text-white cursor-pointer rounded-xs whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Window Body (Sunken Area) */}
          <div className="flex-1 overflow-auto bg-[#DFDFDF] border-t border-l border-[#808080] border-r border-b border-white m-[2px]">
            {children}
          </div>

          {/* Status Bar */}
          {statusText && (
            <div className="flex items-center justify-between px-2 py-0.5 mt-[1px] bg-[#C0C0C0] text-[10px] text-black border-t border-l border-[#808080] border-r border-b border-white shrink-0">
              <span className="truncate">{statusText}</span>
              <span className="shrink-0 text-slate-600 font-mono text-[9px] hidden sm:inline">
                Guerber OS 98 SE
              </span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
