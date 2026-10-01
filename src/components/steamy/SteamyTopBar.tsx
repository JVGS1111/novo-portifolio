import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Sparkles, ChevronDown, Check, Volume2, VolumeX, ArrowLeft } from 'lucide-react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../../data/portfolioRegistry';
import { isSteamyMuted, setSteamyMuted, playDropletSound } from './steamyAudio';

interface SteamyTopBarProps {
  onNavigateModern?: () => void;
  onToggleSound?: () => void;
  onWipeToggle?: () => void;
}

export const SteamyTopBar: React.FC<SteamyTopBarProps> = ({ onNavigateModern }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));
  const [muted, setMuted] = useState(isSteamyMuted);

  useEffect(() => {
    const handleHash = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const current = getCurrentPortfolio(currentHash);

  const toggleAudio = () => {
    const next = !muted;
    setMuted(next);
    setSteamyMuted(next);
    if (!next) playDropletSound();
  };

  const handleSelectPortfolio = (item: PortfolioItem) => {
    setIsMenuOpen(false);
    playDropletSound();
    navigateToPortfolio(item);
  };

  return (
    <header className="sticky top-4 z-40 w-full mb-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mx-auto px-4 sm:px-6 py-2.5 rounded-full bg-white/75 backdrop-blur-2xl border border-white/80 shadow-[0_12px_32px_rgba(30,45,65,0.06),inset_0_1.5px_2px_rgba(255,255,255,0.9)] flex items-center justify-between gap-3 text-xs"
      >
        {/* Left Side: Status & World Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
            </span>
            <span className="font-extrabold tracking-wider text-[11px] text-slate-900 hidden sm:inline uppercase">
              MUNDO 06 — STEAMY FROSTED GLASS
            </span>
            <span className="font-extrabold tracking-wider text-[11px] text-slate-900 sm:hidden">
              MUNDO 06
            </span>
          </div>

          <span className="hidden md:inline-block text-slate-300">|</span>

          {/* Environmental Sensor Badge */}
          <div className="hidden lg:flex items-center gap-1.5 text-slate-600 font-medium text-[11.5px] truncate">
            <Droplets className="w-3.5 h-3.5 text-sky-500" />
            <span>Umidade: 98% · Névoa Térmica Matinal 26°C</span>
          </div>
        </div>

        {/* Right Side: Availability Pill, Audio & Portfolio Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Availability Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Disponível para Projetos Críticos</span>
          </div>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleAudio}
            title={muted ? 'Ativar efeitos sonoros táteis' : 'Silenciar áudio'}
            className="p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-sky-600 border border-slate-200/60 shadow-xs transition-all cursor-pointer"
          >
            {muted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-sky-500" />}
          </button>

          {/* Portfolio Hub Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                playDropletSound();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-[11px] font-semibold shadow-xs border border-slate-700 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden xs:inline">Galeria</span>
              <span className="px-1.5 py-0.2 rounded-full bg-sky-500/30 text-sky-300 text-[10px]">
                {portfolioRegistry.filter((p) => p.status === 'active').length}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-300 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 mt-2 w-80 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl p-2 z-50 overflow-hidden text-left"
                >
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span>🎨</span> Hub de Mundos
                    </span>
                    <span className="text-[10px] text-sky-600 font-semibold font-mono">
                      Alternar Mundo
                    </span>
                  </div>

                  <div className="space-y-1">
                    {portfolioRegistry.map((item) => {
                      const isCurrent = current.id === item.id;
                      const isComingSoon = item.status === 'coming_soon';

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleSelectPortfolio(item)}
                          className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-sky-500/10 border border-sky-500/30 text-sky-950 font-medium'
                              : 'hover:bg-slate-100/80 border border-transparent text-slate-700'
                          }`}
                        >
                          <div className="text-lg p-1.5 rounded-lg bg-white border border-slate-200 shrink-0 shadow-xs">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <span className="text-xs font-bold text-slate-900 truncate">
                                {item.name}
                              </span>
                              <span
                                className={`text-[9px] px-1.5 py-0.2 rounded font-mono uppercase ${
                                  isComingSoon
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-emerald-100 text-emerald-800'
                                }`}
                              >
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[10.5px] text-slate-500 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                          {isCurrent && (
                            <div className="shrink-0 self-center text-sky-600">
                              <Check className="w-4 h-4" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {onNavigateModern && (
                    <div className="mt-2 pt-2 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={onNavigateModern}
                        className="w-full py-1.5 px-3 rounded-lg text-[11px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Retornar ao Portfólio Moderno 3D
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
