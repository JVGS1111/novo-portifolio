import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playAeroClick, setAeroMuted, getAeroMuted } from './soundEffectsAero';
import { portfolioRegistry, navigateToPortfolio } from '../../data/portfolioRegistry';

interface AeroTaskbarVistaProps {
  onScrollToMsn?: () => void;
  onScrollToThree?: () => void;
  onScrollToCases?: () => void;
  onNavigateModern?: () => void;
}

export const AeroTaskbarVista: React.FC<AeroTaskbarVistaProps> = ({
  onScrollToMsn,
  onScrollToThree,
  onScrollToCases,
  onNavigateModern
}) => {
  const [timeStr, setTimeStr] = useState('');
  const [isMuted, setIsMutedState] = useState(() => getAeroMuted());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);

  // Live Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      setTimeStr(`${hours}:${minutes} • ${day}/${month}/${year}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close start menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (startMenuRef.current && !startMenuRef.current.contains(e.target as Node)) {
        setIsStartMenuOpen(false);
      }
    };
    if (isStartMenuOpen) {
      document.addEventListener('pointerdown', handleOutsideClick);
    }
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, [isStartMenuOpen]);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMutedState(next);
    setAeroMuted(next);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 aero-taskbar z-50 flex items-center justify-between px-3 select-none">
      {/* 1. Left: Vista Start Orb & App Tabs */}
      <div className="flex items-center gap-2">
        {/* Vista Start Orb */}
        <div ref={startMenuRef} className="relative">
          <button
            type="button"
            onClick={() => {
              playAeroClick();
              setIsStartMenuOpen(!isStartMenuOpen);
            }}
            className="vista-orb w-9 h-9 rounded-full flex items-center justify-center cursor-pointer shadow-lg relative group"
            title="Menu Iniciar Frutiger Aero"
          >
            <span className="text-sm drop-shadow-md">🌐</span>
          </button>

          {/* Vista Start Menu Popup */}
          <AnimatePresence>
            {isStartMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-12 left-0 w-80 rounded-2xl aero-window p-3 shadow-2xl z-50 overflow-hidden"
              >
                {/* Start Menu Header */}
                <div className="p-3 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 rounded-xl text-white mb-2 shadow-inner flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-sky-700 font-black text-sm flex items-center justify-center shadow-md">
                    JV
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight">João Vinícius</h4>
                    <p className="text-[10px] text-sky-100">Senior Software Engineer</p>
                  </div>
                </div>

                {/* Portfolio Selector in Start Menu */}
                <div className="text-[11px] font-bold text-sky-950 px-2 py-1 uppercase tracking-wider font-mono">
                  Alternar Portfólio / Temas
                </div>

                <div className="space-y-1 my-1">
                  {portfolioRegistry.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setIsStartMenuOpen(false);
                        navigateToPortfolio(item);
                      }}
                      className="w-full text-left p-2 rounded-xl flex items-center gap-2.5 hover:bg-sky-100/80 transition-colors cursor-pointer text-slate-800"
                    >
                      <span className="text-lg p-1 rounded-lg bg-sky-50 border border-sky-200">
                        {item.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">{item.name}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{item.yearVibe} • {item.tag}</div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Modern Return Shortcut */}
                <div className="pt-2 border-t border-sky-200 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsStartMenuOpen(false);
                      if (onNavigateModern) {
                        onNavigateModern();
                      } else {
                        window.location.hash = '';
                      }
                    }}
                    className="w-full py-1.5 px-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs hover:brightness-110 cursor-pointer shadow-sm text-center"
                  >
                    ✨ Retornar ao Portfólio Moderno 3D
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Running Taskbar Application Buttons */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              playAeroClick();
              if (onScrollToMsn) onScrollToMsn();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 border border-white/40 text-xs font-semibold text-white cursor-pointer shadow-inner backdrop-blur-md transition-colors"
          >
            <span>💬</span>
            <span className="truncate max-w-[140px]">Windows Live Messenger</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playAeroClick();
              if (onScrollToThree) onScrollToThree();
            }}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 border border-white/30 text-xs font-semibold text-white/90 cursor-pointer backdrop-blur-md transition-colors"
          >
            <span>💧</span>
            <span className="truncate max-w-[140px]">Aquatic Bio-Spheres</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playAeroClick();
              if (onScrollToCases) onScrollToCases();
            }}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 border border-white/30 text-xs font-semibold text-white/90 cursor-pointer backdrop-blur-md transition-colors"
          >
            <span>📱</span>
            <span className="truncate max-w-[140px]">banQi Architecture Hub</span>
          </button>
        </div>
      </div>

      {/* 2. Right: System Tray & Clock */}
      <div className="flex items-center gap-3 text-white/90 text-xs">
        {/* Audio Mute Toggle Button */}
        <button
          type="button"
          onClick={toggleMute}
          className="p-1 rounded hover:bg-white/20 cursor-pointer transition-colors"
          title={isMuted ? 'Desmutar sons' : 'Mutar sons'}
        >
          <span>{isMuted ? '🔇' : '🔊'}</span>
        </button>

        {/* Network and Battery Icons */}
        <span className="hidden sm:inline" title="Conexão de Rede Ativa">
          📶
        </span>
        <span className="hidden sm:inline" title="Energia Otimizada">
          ⚡
        </span>

        {/* Live Clock with Date */}
        <div className="px-2.5 py-1 rounded bg-black/30 border border-white/15 font-mono text-[11px] text-cyan-200 tracking-tight">
          {timeStr || '17:50 • 29/09/2026'}
        </div>
      </div>
    </div>
  );
};
