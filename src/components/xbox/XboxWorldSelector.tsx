import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Disc } from 'lucide-react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../../data/portfolioRegistry';
import { useLanguage } from '../../i18n/LanguageContext';
import jewelMedallionUrl from '../../assets/xbox_jewel_medallion.png';

interface XboxWorldSelectorProps {
  variant?: 'masthead' | 'floating';
}

export const XboxWorldSelector: React.FC<XboxWorldSelectorProps> = ({ variant = 'masthead' }) => {
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
    <div
      ref={containerRef}
      className={`select-none font-mono ${variant === 'floating' ? 'fixed bottom-5 right-5 z-50' : 'relative inline-block'}`}
    >
      {/* Trigger Button: Translucent Emerald Polycarbonate Pill with 3D Jewel */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#003814]/90 via-[#01220c]/90 to-[#001708]/90 border border-[#00ff55]/50 hover:border-[#00ff55] text-xs text-white transition-all shadow-[0_0_18px_rgba(0,255,85,0.25)] hover:shadow-[0_0_24px_rgba(0,255,85,0.45)] backdrop-blur-md cursor-pointer group"
        title={isPt ? 'Alternar mundos do multiverso' : 'Switch multiverse worlds'}
      >
        {/* Glowing Jewel Icon */}
        <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#00ff55]/80 shadow-[0_0_8px_#00ff55] flex-shrink-0">
          <img src={jewelMedallionUrl} alt="Xbox Jewel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#00ff55]/10 animate-pulse pointer-events-none" />
        </div>

        {/* Title */}
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#88ffa8] group-hover:text-white">
          <span className="hidden sm:inline">⏏ BOOT DISK:</span>
          <span className="text-[#00ff55] font-bold">{current.shortName}</span>
        </div>

        {/* Worlds Count Badge */}
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00ff55]/20 text-[#00ff55] border border-[#00ff55]/40 font-bold ml-0.5">
          {activeCount} {isPt ? 'MUNDOS' : 'WORLDS'}
        </span>

        <ChevronDown
          className={`w-3.5 h-3.5 text-[#00ff55] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Xbox BIOS Boot Disk Multiverse Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: variant === 'floating' ? -8 : 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: variant === 'floating' ? -8 : 8, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className={`absolute ${
              variant === 'floating' ? 'bottom-12 right-0' : 'top-full right-0 mt-2'
            } w-[calc(100vw-2.5rem)] max-w-[340px] sm:w-88 rounded-xl bg-[#020b05]/95 border-2 border-[#00ff55] shadow-[0_0_40px_rgba(0,255,85,0.35)] backdrop-blur-2xl z-50 overflow-hidden text-left`}
          >
            {/* Header: BIOS Optical Disc Bay */}
            <div className="bg-gradient-to-r from-[#01240c] via-[#023311] to-[#011a08] px-3.5 py-2.5 border-b border-[#00ff55]/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Disc className="w-4 h-4 text-[#00ff55] animate-spin" style={{ animationDuration: '6s' }} />
                <div>
                  <div className="text-[10px] font-bold text-[#00ff55] tracking-widest flex items-center gap-1.5">
                    XBOX BIOS // {isPt ? 'LEITOR MULTIVERSO' : 'BOOT DISK TRAY'}
                  </div>
                  <div className="text-[8.5px] text-zinc-400 font-mono">
                    KERNEL v1.00.5960 // TITAN GREEN
                  </div>
                </div>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00ff55]/20 text-[#00ff55] border border-[#00ff55]/50 font-bold">
                W09 ACTIVE
              </span>
            </div>

            {/* List of Multiverse Portfolios */}
            <div className="p-2 space-y-1.5 max-h-80 overflow-y-auto pr-1">
              {portfolioRegistry.map((item) => {
                const isSelected = item.id === current.id;
                const isActive = item.status === 'active';

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left p-2 rounded-lg border transition-all flex items-start gap-2.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#00ff55]/20 border-[#00ff55] text-white shadow-[0_0_15px_rgba(0,255,85,0.25)]'
                        : isActive
                        ? 'bg-[#041408]/60 border-zinc-800 text-zinc-300 hover:border-[#00ff55]/60 hover:bg-[#00ff55]/10 hover:text-white'
                        : 'bg-black/40 border-zinc-900 text-zinc-500 opacity-60 hover:opacity-80'
                    }`}
                  >
                    <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-xs font-bold truncate text-[#88ffa8]">
                          {item.name}
                        </span>
                        <span
                          className={`text-[8.5px] px-1 rounded flex-shrink-0 font-bold ${
                            isActive
                              ? isSelected
                                ? 'bg-[#00ff55] text-black'
                                : 'bg-[#00ff55]/20 text-[#00ff55] border border-[#00ff55]/30'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          {isActive
                            ? isSelected
                              ? isPt
                                ? '● ATIVO'
                                : '● LOADED'
                              : isPt
                              ? 'DISCO'
                              : 'DISC'
                            : isPt
                            ? 'EM BREVE'
                            : 'SOON'}
                        </span>
                      </div>

                      <p className="text-[10px] text-zinc-400 line-clamp-1">
                        {isPt ? item.description : item.descriptionEn || item.description}
                      </p>

                      <div className="flex items-center gap-2 mt-1 text-[8.5px] text-zinc-500">
                        <span>{item.yearVibe}</span>
                        <span>•</span>
                        <span className="text-[#00ff66]/80">{item.hash}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Status Ribbon */}
            <div className="bg-[#011408] px-3 py-1.5 border-t border-[#00ff55]/30 flex items-center justify-between text-[8.5px] text-zinc-400">
              <span className="text-[#00ff55]">{isPt ? '(A) BOOT DISCO' : '(A) BOOT DISK'}</span>
              <span>{isPt ? '(B) FECHAR' : '(B) RETURN'}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
