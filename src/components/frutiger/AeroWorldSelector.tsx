import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Sparkles, X } from 'lucide-react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../../data/portfolioRegistry';
import { useLanguage } from '../../i18n/LanguageContext';
import { playBubblePop, playAeroClick } from './soundEffectsAero';

export const AeroWorldSelector: React.FC = () => {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const current = getCurrentPortfolio(currentHash);

  const handleSelect = (item: PortfolioItem) => {
    playAeroClick();
    setIsOpen(false);
    navigateToPortfolio(item, isPt ? 'pt' : 'en');
  };

  const activeCount = portfolioRegistry.filter((p) => p.status === 'active').length;

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-40 select-none">
      {/* Vista Aero Glass Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
            className="absolute bottom-16 right-0 w-[calc(100vw-2.5rem)] max-w-[340px] sm:w-84 rounded-2xl bg-gradient-to-b from-sky-50/95 via-white/90 to-sky-100/95 backdrop-blur-xl border-2 border-white/90 shadow-[0_20px_50px_rgba(13,139,242,0.35),inset_0_2px_4px_rgba(255,255,255,0.9)] overflow-hidden text-left p-1"
          >
            {/* Vista Aero Glass Titlebar */}
            <div className="rounded-xl bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 text-white px-3 py-2 flex items-center justify-between shadow-sm relative overflow-hidden">
              {/* Glass Glint reflection */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 pointer-events-none" />

              <div className="flex items-center gap-2 relative z-10">
                <span className="text-base drop-shadow-sm">🫧</span>
                <span className="text-xs font-bold font-sans tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {isPt ? 'Mundos & Ambientes' : 'Worlds & Dimensions'}
                </span>
              </div>

              {/* Vista Control Buttons */}
              <div className="flex items-center gap-1 relative z-10">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/25 text-white font-mono font-bold">
                  {activeCount} {isPt ? 'Mundos' : 'Worlds'}
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-5 h-5 rounded-full bg-red-500/80 hover:bg-red-500 text-white flex items-center justify-center text-[10px] shadow-xs cursor-pointer ml-1"
                  title="Fechar"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* List of Worlds */}
            <div className="space-y-1.5 p-2 max-h-84 overflow-y-auto pr-1">
              {portfolioRegistry.map((item) => {
                const isCurrent = current.id === item.id;
                const isComingSoon = item.status === 'coming_soon';
                const tagText = language === 'en' && item.tagEn ? item.tagEn : item.tag;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => playBubblePop()}
                    className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all cursor-pointer relative overflow-hidden ${
                      isCurrent
                        ? 'bg-gradient-to-r from-sky-500/20 via-cyan-500/20 to-blue-500/20 border-2 border-sky-400 text-sky-950 font-semibold shadow-sm'
                        : 'bg-white/70 hover:bg-white/95 border border-sky-200/60 hover:border-sky-300 text-slate-800 hover:shadow-sm'
                    }`}
                  >
                    <div className="text-xl p-1.5 rounded-xl bg-gradient-to-br from-sky-100 to-white border border-sky-200/80 shadow-xs shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {item.name}
                        </span>
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded-full font-mono uppercase font-bold shrink-0 shadow-xs ${
                            isComingSoon
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          }`}
                        >
                          {tagText}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-600 line-clamp-1 leading-snug">
                        {isPt ? item.description : (item.descriptionEn || item.description)}
                      </p>
                    </div>

                    {isCurrent && (
                      <div className="shrink-0 self-center text-sky-600">
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Vista Aero Bottom Status */}
            <div className="px-3 py-1.5 bg-sky-100/60 border-t border-sky-200/60 rounded-b-xl flex items-center justify-between text-[10px] text-sky-900">
              <span className="flex items-center gap-1 font-medium">
                <Sparkles className="w-3 h-3 text-sky-600" />
                Windows Vista Aero Style
              </span>
              <span className="font-mono text-sky-700">WebGL 60FPS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button - Glossy Aqua Gel Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => {
          playBubblePop();
          setIsOpen(!isOpen)}
        }
        className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 text-white font-sans text-xs font-bold shadow-[0_8px_24px_rgba(13,139,242,0.5),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(13,139,242,0.65)] border-2 border-white/70 cursor-pointer transition-all overflow-hidden"
        title={isPt ? 'Alternar entre mundos e landing pages' : 'Switch between worlds and landing pages'}
      >
        {/* Curved Glass Highlight Specular */}
        <div className="absolute inset-x-2 top-0.5 h-1/2 bg-gradient-to-b from-white/70 to-transparent rounded-full pointer-events-none" />

        <span className="relative z-10 text-base group-hover:rotate-12 transition-transform drop-shadow-sm">
          {current.icon}
        </span>
        <span className="relative z-10 tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          {current.shortName}
        </span>
        <span className="relative z-10 text-[10px] uppercase px-2 py-0.5 rounded-full bg-white/30 text-white border border-white/40 drop-shadow-xs font-mono">
          {isPt ? 'Mundos' : 'Worlds'}
        </span>
        <ChevronDown className={`relative z-10 w-3.5 h-3.5 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
    </div>
  );
};
