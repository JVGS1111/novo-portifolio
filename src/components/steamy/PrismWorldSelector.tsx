import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Sparkles } from 'lucide-react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../../data/portfolioRegistry';
import { useLanguage } from '../../i18n/LanguageContext';

export const PrismWorldSelector: React.FC = () => {
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
    navigateToPortfolio(item, language === 'pt' ? 'pt' : 'en');
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-40">
      {/* Dropdown Menu Popup - Apple Liquid Glass Frosted */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ position: 'absolute' }}
            className="!absolute bottom-14 right-0 w-[calc(100vw-2.5rem)] max-w-[340px] sm:w-84 rounded-2xl apple-liquid-glass-light border border-white/95 shadow-[0_24px_64px_rgba(20,30,55,0.12),inset_0_2px_3px_rgba(255,255,255,1)] p-2.5 mb-2 overflow-hidden text-left"
          >
            {/* Specular Glint Line */}
            <div className="absolute inset-x-4 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-full" />

            <div className="px-3 py-2 border-b border-slate-200/60 mb-2 flex items-center justify-between">
              <span className="text-[11px] font-sans uppercase font-bold text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                {isPt ? 'Mundos & Ambientes' : 'Worlds & Environments'}
              </span>
              <span className="text-[10px] font-mono text-indigo-600 font-semibold px-2 py-0.5 rounded-full bg-indigo-50/80 border border-indigo-100">
                {portfolioRegistry.filter((p) => p.status === 'active').length} {isPt ? 'ativos' : 'active'}
              </span>
            </div>

            <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
              {portfolioRegistry.map((item) => {
                const isCurrent = current.id === item.id;
                const isComingSoon = item.status === 'coming_soon';
                const tagText = language === 'en' && item.tagEn ? item.tagEn : item.tag;
                const descText = language === 'en' && item.descriptionEn ? item.descriptionEn : item.description;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left p-2.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-indigo-50/95 border border-indigo-200/80 text-indigo-950 shadow-xs'
                        : 'hover:bg-white/80 border border-transparent text-slate-700'
                    }`}
                  >
                    <div className="text-xl p-1.5 rounded-lg bg-white/90 border border-slate-200/80 shadow-xs shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {item.name}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full shrink-0 uppercase font-semibold ${
                            isComingSoon
                              ? 'bg-amber-100/80 text-amber-800 border border-amber-200'
                              : 'bg-emerald-100/80 text-emerald-800 border border-emerald-200'
                          }`}
                        >
                          {tagText}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-500 line-clamp-1 leading-snug">
                        {descText}
                      </p>
                    </div>

                    {isCurrent && (
                      <div className="shrink-0 self-center text-indigo-600">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button - Apple Liquid Glass Pill */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full apple-liquid-pill-light bg-white/85 hover:bg-white text-slate-800 font-sans text-xs font-semibold shadow-[0_12px_32px_rgba(20,30,55,0.08),inset_0_2px_3px_rgba(255,255,255,1)] hover:shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 relative border border-white/90"
        title={isPt ? 'Alternar entre mundos e landing pages' : 'Switch between worlds and landing pages'}
      >
        {/* Specular Glint Line */}
        <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-full" />

        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
        </span>
        <span className="text-base group-hover:rotate-12 transition-transform">{current.icon}</span>
        <span className="tracking-tight text-slate-900 font-bold">{current.shortName}</span>
        <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-200 text-indigo-700 font-mono font-medium">
          {isPt ? 'Mundos' : 'Worlds'}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
    </div>
  );
};
