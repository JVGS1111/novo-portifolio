import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../../data/portfolioRegistry';
import { useLanguage } from '../../i18n/LanguageContext';

export const EvaWorldSelector: React.FC = () => {
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
    setIsOpen(false);
    navigateToPortfolio(item, isPt ? 'pt' : 'en');
  };

  const activeCount = portfolioRegistry.filter((p) => p.status === 'active').length;

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-40 font-eva-mono select-none">
      {/* MAGI Tactical World Directory Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-14 right-0 w-[calc(100vw-2.5rem)] max-w-[340px] sm:w-88 bg-[#040407] border-2 border-[#FF5500] shadow-[0_0_35px_rgba(255,85,0,0.4)] p-0 mb-2 overflow-hidden text-left"
          >
            {/* Top Hazard Warning Strip */}
            <div className="h-1.5 w-full eva-hazard-stripes" />

            {/* Tactical Masthead Header */}
            <div className="bg-[#120805] px-3 py-2 border-b border-[#FF5500]/60 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-[#FF5500] tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                  MAGI // {isPt ? 'SELEÇÃO DE MUNDO' : 'WORLD COORDINATES'}
                </div>
                <div className="text-[8.5px] text-zinc-500 font-mono">
                  CLASSIFICATION: TOP SECRET // 極秘
                </div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#FF5500]/20 text-[#FFAA00] border border-[#FF5500]/40 font-bold">
                {activeCount} {isPt ? 'MUNDOS' : 'WORLDS'}
              </span>
            </div>

            {/* List of Tactical Worlds */}
            <div className="p-2 space-y-1.5 max-h-80 overflow-y-auto pr-1">
              {portfolioRegistry.map((item, idx) => {
                const isCurrent = current.id === item.id;
                const isComingSoon = item.status === 'coming_soon';
                const tagText = language === 'en' && item.tagEn ? item.tagEn : item.tag;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left p-2.5 flex items-start gap-2.5 transition-colors cursor-pointer border ${
                      isCurrent
                        ? 'bg-[#FF5500]/15 border-[#FF5500] text-white shadow-[0_0_12px_rgba(255,85,0,0.3)]'
                        : 'bg-black hover:bg-[#140b08] border-zinc-800 hover:border-[#FF5500]/60 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div className="text-base p-1 bg-[#100806] border border-[#FF5500]/40 shrink-0 text-[#FFAA00]">
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-xs font-bold text-zinc-100 truncate tracking-wide">
                          {item.name}
                        </span>
                        <span
                          className={`text-[8px] px-1 py-0.2 uppercase shrink-0 font-bold border ${
                            isComingSoon
                              ? 'bg-amber-950/80 text-amber-400 border-amber-600/50'
                              : 'bg-[#FF5500]/20 text-[#FF5500] border-[#FF5500]/50'
                          }`}
                        >
                          {tagText}
                        </span>
                      </div>
                      <div className="text-[9px] text-[#FFAA00]/80 font-mono">
                        COORD: {`0x0${idx + 1}`} // {item.yearVibe}
                      </div>
                      <p className="text-[9.5px] text-zinc-500 line-clamp-1 leading-snug mt-0.5">
                        {isPt ? item.description : (item.descriptionEn || item.description)}
                      </p>
                    </div>

                    {isCurrent && (
                      <div className="shrink-0 self-center text-[#00FF66] font-bold text-xs">
                        [承認]
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Hazard Strip & Footer Telemetry */}
            <div className="px-3 py-1.5 bg-[#0a0504] border-t border-[#FF5500]/40 flex items-center justify-between text-[8.5px] text-zinc-500">
              <span className="text-[#FF5500]">CENTRAL DOGMA // LEVEL EEE</span>
              <span className="text-[#FFAA00]">PATTERN: BLUE // パターン青</span>
            </div>
            <div className="h-1 w-full eva-hazard-stripes" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button - NERV Tactical Emergency Badge */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-3.5 py-2.5 bg-black hover:bg-[#120805] text-white font-bold text-xs border-2 border-[#FF5500] shadow-[0_0_20px_rgba(255,85,0,0.5)] cursor-pointer transition-all"
        title={isPt ? 'Alternar entre mundos e landing pages' : 'Switch between worlds and landing pages'}
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full bg-[#FF5500] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5500]" />
        </span>
        <span className="text-base">{current.icon}</span>
        <span className="tracking-widest uppercase text-[11px] text-[#FFAA00] font-bold">{current.shortName}</span>
        <span className="text-[9px] uppercase px-1.5 py-0.5 bg-[#FF5500]/25 border border-[#FF5500]/60 text-white font-bold">
          {isPt ? 'MUNDOS' : 'WORLDS'}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#FF5500] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};
