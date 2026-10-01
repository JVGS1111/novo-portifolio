import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../../data/portfolioRegistry';
import { useLanguage } from '../../i18n/LanguageContext';
import { playIndustrialClick, playButtonHover, playLaserHum } from './monolithAudio';

interface MonolithWorldSelectorProps {
  variant?: 'navbar' | 'floating';
}

export const MonolithWorldSelector: React.FC<MonolithWorldSelectorProps> = ({ variant = 'floating' }) => {
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
    playIndustrialClick();
    setIsOpen(false);
    navigateToPortfolio(item, isPt ? 'pt' : 'en');
  };

  const activeCount = portfolioRegistry.filter((p) => p.status === 'active').length;

  if (variant === 'navbar') {
    return (
      <div ref={containerRef} className="relative inline-block font-mono text-left">
        <button
          type="button"
          onClick={() => {
            playIndustrialClick();
            setIsOpen(!isOpen);
          }}
          onMouseEnter={playButtonHover}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#0c0e12] border border-[#484b54] hover:border-[#ffaa00] text-slate-200 hover:text-[#ffaa00] text-[11px] font-bold tracking-wider transition-colors cursor-pointer"
          title={isPt ? 'Alternar entre mundos' : 'Switch between worlds'}
        >
          <span className="text-[#ffaa00]">{current.icon}</span>
          <span className="uppercase text-[10px] hidden xl:inline">{current.shortName}</span>
          <span className="text-[9px] px-1 py-0.2 bg-[#ffaa00]/15 text-[#ffaa00] border border-[#ffaa00]/30">
            {activeCount} {isPt ? 'MUNDOS' : 'WORLDS'}
          </span>
          <ChevronDown className={`w-3 h-3 text-[#ffaa00] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu (Brutalist Concrete Chamber) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.14 }}
              className="absolute right-0 mt-2 w-76 sm:w-84 bg-[#080a0e] border-2 border-[#ffaa00]/70 shadow-[0_12px_36px_rgba(0,0,0,0.95)] z-50 p-2.5 overflow-hidden text-left"
            >
              <div className="px-2.5 py-1.5 border-b border-[#323640] mb-2 flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#ffaa00] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="text-xs">🗿</span>
                  // SECTOR_JUMP // {isPt ? 'MUNDOS' : 'WORLDS'}
                </span>
                <span className="text-[9px] text-zinc-400 font-mono">
                  [ {activeCount} AUDITED ]
                </span>
              </div>

              <div className="space-y-1 max-h-72 overflow-y-auto pr-1">
                {portfolioRegistry.map((item) => {
                  const isCurrent = current.id === item.id;
                  const isComingSoon = item.status === 'coming_soon';
                  const tagText = language === 'en' && item.tagEn ? item.tagEn : item.tag;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item)}
                      onMouseEnter={playButtonHover}
                      className={`w-full text-left p-2 flex items-start gap-2.5 transition-colors cursor-pointer border ${
                        isCurrent
                          ? 'bg-[#ffaa00]/15 border-[#ffaa00] text-white shadow-inner'
                          : 'bg-[#101319] hover:bg-[#181c24] border-[#252932] hover:border-[#ffaa00]/60 text-zinc-300'
                      }`}
                    >
                      <div className="text-base p-1 bg-black/60 border border-[#323640] shrink-0">
                        {item.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[11px] font-bold text-white truncate tracking-wide">
                            {item.name}
                          </span>
                          <span
                            className={`text-[8.5px] px-1 py-0.2 uppercase shrink-0 font-bold border ${
                              isComingSoon
                                ? 'bg-amber-950/60 text-amber-400 border-amber-500/40'
                                : 'bg-[#ffaa00]/20 text-[#ffaa00] border-[#ffaa00]/40'
                            }`}
                          >
                            {tagText}
                          </span>
                        </div>
                        <p className="text-[9.5px] text-zinc-400 line-clamp-1 leading-snug">
                          {isPt ? item.description : (item.descriptionEn || item.description)}
                        </p>
                      </div>

                      {isCurrent && (
                        <div className="shrink-0 self-center text-[#ffaa00]">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-2 pt-1.5 border-t border-[#252932] text-[9px] text-zinc-500 text-right">
                // SYSTEM_COORDINATE: STABLE
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Floating Variant
  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-40 font-mono">
      {/* Brutalist Concrete Dropdown Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.16 }}
            className="absolute bottom-14 right-0 w-[calc(100vw-2.5rem)] max-w-[340px] sm:w-84 bg-[#0a0d12] border-2 border-[#ffaa00] shadow-[0_16px_48px_rgba(0,0,0,0.95)] p-2.5 mb-2 overflow-hidden text-left"
          >
            {/* Telemetry Header */}
            <div className="px-2.5 py-1.5 border-b border-[#30343d] mb-2 flex items-center justify-between">
              <span className="text-[10.5px] uppercase font-bold text-[#ffaa00] flex items-center gap-1.5 tracking-wider">
                <span>🗿</span>
                // {isPt ? 'SELETOR DE MUNDOS' : 'WORLD SELECTOR'}
              </span>
              <span className="text-[9px] px-1.5 py-0.2 bg-[#ffaa00]/15 text-[#ffaa00] border border-[#ffaa00]/40 font-bold">
                {activeCount} {isPt ? 'MUNDOS' : 'WORLDS'}
              </span>
            </div>

            <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
              {portfolioRegistry.map((item) => {
                const isCurrent = current.id === item.id;
                const isComingSoon = item.status === 'coming_soon';
                const tagText = language === 'en' && item.tagEn ? item.tagEn : item.tag;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item)}
                    onMouseEnter={playButtonHover}
                    className={`w-full text-left p-2.5 flex items-start gap-2.5 transition-colors cursor-pointer border ${
                      isCurrent
                        ? 'bg-[#ffaa00]/15 border-[#ffaa00] text-white shadow-inner'
                        : 'bg-[#12161f] hover:bg-[#1a1f2c] border-[#252b38] hover:border-[#ffaa00]/70 text-zinc-300'
                    }`}
                  >
                    <div className="text-lg p-1 bg-black/70 border border-[#30343d] shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-xs font-bold text-white truncate tracking-wide">
                          {item.name}
                        </span>
                        <span
                          className={`text-[8.5px] px-1.5 py-0.2 uppercase shrink-0 font-bold border ${
                            isComingSoon
                              ? 'bg-amber-950/60 text-amber-400 border-amber-500/40'
                              : 'bg-[#ffaa00]/20 text-[#ffaa00] border-[#ffaa00]/40'
                          }`}
                        >
                          {tagText}
                        </span>
                      </div>
                      <p className="text-[10px] text-zinc-400 line-clamp-1 leading-snug">
                        {isPt ? item.description : (item.descriptionEn || item.description)}
                      </p>
                    </div>

                    {isCurrent && (
                      <div className="shrink-0 self-center text-[#ffaa00]">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-2 pt-1.5 border-t border-[#252b38] text-[9px] text-zinc-500 flex justify-between items-center">
              <span>// PROTOCOL: SECTOR_JUMP</span>
              <span className="text-[#ffaa00]">PORTAL READY</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button - Sharp Monolithic Angular Badge */}
      <button
        type="button"
        onClick={() => {
          playLaserHum();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={playButtonHover}
        className="group flex items-center gap-2 px-3.5 py-2.5 bg-[#0a0d12]/95 hover:bg-[#12161f] text-white font-bold text-xs border-2 border-[#ffaa00]/70 hover:border-[#ffaa00] shadow-[0_8px_24px_rgba(0,0,0,0.9)] cursor-pointer transition-all duration-200"
        title={isPt ? 'Alternar entre mundos e landing pages' : 'Switch between worlds and landing pages'}
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full bg-[#ffaa00] opacity-75" />
          <span className="relative inline-flex h-2 w-2 bg-[#ffaa00]" />
        </span>
        <span className="text-base">{current.icon}</span>
        <span className="tracking-widest uppercase text-[11px]">{current.shortName}</span>
        <span className="text-[9px] uppercase px-1.5 py-0.5 bg-[#ffaa00]/20 border border-[#ffaa00]/50 text-[#ffaa00] font-bold">
          {isPt ? 'MUNDOS' : 'WORLDS'}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#ffaa00] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};
