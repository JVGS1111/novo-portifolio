import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Sparkles } from 'lucide-react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../data/portfolioRegistry';
import { useLanguage } from '../i18n';

interface PortfolioSwitcherProps {
  variant?: 'navbar' | 'floating';
}

export const PortfolioSwitcher: React.FC<PortfolioSwitcherProps> = ({ variant = 'floating' }) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [isOpen]);

  const current = getCurrentPortfolio(currentHash);

  const handleSelect = (item: PortfolioItem) => {
    setIsOpen(false);
    navigateToPortfolio(item, language);
  };

  if (variant === 'navbar') {
    return (
      <div ref={containerRef} className="relative inline-block text-left">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 text-xs font-mono text-slate-200 hover:text-white transition-all shadow-xs cursor-pointer"
          title={language === 'pt' ? 'Alternar entre versões do portfólio' : 'Switch between portfolio versions'}
        >
          <span className="text-xs">{current.icon}</span>
          <span className="font-semibold text-[11px] hidden xl:inline">{current.shortName}</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            {portfolioRegistry.filter((p) => p.status === 'active').length} {language === 'pt' ? 'temas' : 'themes'}
          </span>
          <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-slate-950/95 border border-slate-800 backdrop-blur-2xl shadow-2xl shadow-black/80 z-50 p-2 overflow-hidden"
            >
              <div className="px-3 py-2 border-b border-slate-800/80 mb-1 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  {language === 'pt' ? 'Galeria de Portfólios' : 'Portfolio Gallery'}
                </span>
                <span className="text-[10px] font-mono text-cyan-400">
                  {language === 'pt' ? 'Hub Interativo' : 'Interactive Hub'}
                </span>
              </div>

              <div className="space-y-1">
                {portfolioRegistry.map((item) => {
                  const isCurrent = current.id === item.id;
                  const isComingSoon = item.status === 'coming_soon';
                  const tagText = (language === 'en' && item.tagEn) ? item.tagEn : item.tag;
                  const descText = (language === 'en' && item.descriptionEn) ? item.descriptionEn : item.description;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item)}
                      className={`w-full text-left p-2.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-cyan-500/15 border border-cyan-500/40 text-white shadow-inner'
                          : 'hover:bg-slate-800/60 border border-transparent text-slate-300'
                      }`}
                    >
                      <div className="text-xl p-1.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                        {item.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-xs font-bold text-slate-100 truncate">
                            {item.name}
                          </span>
                          <span
                            className={`text-[9px] font-mono px-1.5 py-0.2 rounded shrink-0 uppercase ${
                              isComingSoon
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            }`}
                          >
                            {tagText}
                          </span>
                        </div>
                        <p className="text-[10.5px] text-slate-400 line-clamp-1 leading-snug">
                          {descText}
                        </p>
                      </div>

                      {isCurrent && (
                        <div className="shrink-0 self-center text-cyan-400">
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
      </div>
    );
  }

  // Floating Widget variant (Fixed in bottom-right)
  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-40">
      {/* Dropdown Menu Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-14 right-0 w-84 rounded-2xl bg-slate-950/95 border border-slate-800 backdrop-blur-2xl shadow-2xl shadow-black/80 p-2.5 mb-2 overflow-hidden"
          >
            <div className="px-3 py-2 border-b border-slate-800/80 mb-2 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-300 flex items-center gap-1.5">
                <span>🎨</span>
                {language === 'pt' ? 'Seletor de Portfólio' : 'Portfolio Selector'}
              </span>
              <span className="text-[10px] font-mono text-cyan-400">
                {portfolioRegistry.filter((p) => p.status === 'active').length} {language === 'pt' ? 'disponíveis' : 'available'}
              </span>
            </div>

            <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
              {portfolioRegistry.map((item) => {
                const isCurrent = current.id === item.id;
                const isComingSoon = item.status === 'coming_soon';
                const tagText = (language === 'en' && item.tagEn) ? item.tagEn : item.tag;
                const descText = (language === 'en' && item.descriptionEn) ? item.descriptionEn : item.description;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left p-2.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-cyan-500/15 border border-cyan-500/40 text-white shadow-inner'
                        : 'hover:bg-slate-900 border border-slate-800/60 text-slate-300'
                    }`}
                  >
                    <div className="text-xl p-1.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-xs font-bold text-slate-100 truncate">
                          {item.name}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.2 rounded shrink-0 uppercase font-semibold ${
                            isComingSoon
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {tagText}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-400 line-clamp-1 leading-snug">
                        {descText}
                      </p>
                    </div>

                    {isCurrent && (
                      <div className="shrink-0 self-center text-cyan-400">
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

      {/* Main Trigger Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-slate-900/90 hover:bg-slate-850 text-slate-100 font-mono text-xs font-semibold rounded-full border border-cyan-500/40 hover:border-cyan-400 shadow-xl shadow-cyan-950/40 backdrop-blur-md cursor-pointer transition-all duration-300"
        title={language === 'pt' ? 'Alternar entre versões e conceitos de portfólio' : 'Switch between portfolio versions and concepts'}
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
        </span>
        <span className="text-base group-hover:rotate-12 transition-transform">{current.icon}</span>
        <span className="tracking-tight">{current.shortName}</span>
        <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
          {language === 'pt' ? 'Galeria' : 'Gallery'}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
    </div>
  );
};
