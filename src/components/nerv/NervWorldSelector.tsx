import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../../data/portfolioRegistry';

interface NervWorldSelectorProps {
  lang: 'en' | 'pt';
}

export const NervWorldSelector: React.FC<NervWorldSelectorProps> = ({ lang }) => {
  const isPt = lang === 'pt';
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
    <div ref={containerRef} className="relative font-mono select-none">
      {/* Trigger Button - NERV Cockpit Style */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2.5 py-1 text-xs border border-red-600/70 bg-black/80 hover:bg-red-950/40 text-red-400 hover:text-white transition-all shadow-[0_0_10px_rgba(255,24,1,0.2)] tracking-wider uppercase group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <Globe className="w-3.5 h-3.5 text-red-500 group-hover:rotate-12 transition-transform" />
        <span className="font-bold text-[11px] hidden sm:inline text-red-100">
          {current.shortName || current.name}
        </span>
        <span className="text-[9px] px-1 py-0.2 bg-red-600/30 text-red-300 border border-red-500/40">
          {current.tag}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-red-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-80 sm:w-88 bg-[#090B0E] border-2 border-[#FF1801] shadow-[0_0_30px_rgba(255,24,1,0.4)] z-50 overflow-hidden text-left"
          >
            {/* Top Warning Stripes */}
            <div
              className="h-1.5 w-full"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #FF1801, #FF1801 8px, #000 8px, #000 16px)'
              }}
            />

            {/* Header */}
            <div className="bg-[#150909] px-3 py-2 border-b border-red-600/60 flex items-center justify-between">
              <div>
                <div className="text-[10.5px] font-bold text-[#FF1801] tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF1801] animate-ping" />
                  NERV // {isPt ? 'SELEÇÃO DE COORDENADAS' : 'DIMENSIONAL RELAYS'}
                </div>
                <div className="text-[8.5px] text-zinc-400">
                  CLASSIFICATION: NERV-HQ // 世界座標
                </div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 bg-red-600/20 text-red-300 border border-red-500/40 font-bold">
                {activeCount} {isPt ? 'MUNDOS ATIVOS' : 'ACTIVE WORLDS'}
              </span>
            </div>

            {/* World List */}
            <div className="p-2 space-y-1.5 max-h-80 overflow-y-auto pr-1">
              {portfolioRegistry.map((item) => {
                const isCurrent = current.id === item.id;
                const isComingSoon = item.status === 'coming_soon';
                const tagText = lang === 'en' && item.tagEn ? item.tagEn : item.tag;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left p-2.5 flex items-start gap-2.5 transition-colors cursor-pointer border ${
                      isCurrent
                        ? 'bg-[#FF1801]/15 border-[#FF1801] text-white shadow-[0_0_12px_rgba(255,24,1,0.3)]'
                        : 'bg-[#0f1217] hover:bg-[#1a1112] border-zinc-800 hover:border-red-600/70 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div className="text-base p-1 bg-black/60 border border-red-600/40 shrink-0 text-red-400">
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span
                          className={`text-xs font-bold truncate ${
                            isCurrent ? 'text-red-400' : 'text-zinc-200'
                          }`}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`text-[9px] px-1 py-0.2 shrink-0 border uppercase font-mono ${
                            isComingSoon
                              ? 'bg-zinc-800 text-zinc-400 border-zinc-700'
                              : isCurrent
                              ? 'bg-red-600 text-white border-red-500'
                              : 'bg-red-950/60 text-red-400 border-red-800'
                          }`}
                        >
                          {tagText}
                        </span>
                      </div>

                      <p className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                        {lang === 'en' && item.descriptionEn
                          ? item.descriptionEn
                          : item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer warning bar */}
            <div className="px-3 py-1.5 bg-black/90 border-t border-red-900/50 flex items-center justify-between text-[9px] text-red-500/80">
              <span>SECURITY: LEVEL-A</span>
              <span>MAGI-SYS: ONLINE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
