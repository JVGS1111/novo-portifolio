import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../../data/portfolioRegistry';
import { useLanguage } from '../../i18n/LanguageContext';

interface PrismNavbarProps {
  onNavigateModern?: () => void;
  onOpenContact?: () => void;
}

export const PrismNavbar: React.FC<PrismNavbarProps> = ({ onNavigateModern, onOpenContact }) => {
  const { language, setLanguage } = useLanguage();
  const isPt = language === 'pt';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));
  const [activeSection, setActiveSection] = useState('about');
  const hubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHash = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (hubRef.current && !hubRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const current = getCurrentPortfolio(currentHash);

  const handleSelectPortfolio = (item: PortfolioItem) => {
    setIsMenuOpen(false);
    if (item.id === 'modern' && onNavigateModern) {
      onNavigateModern();
    } else {
      navigateToPortfolio(item);
    }
  };


  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'about', label: isPt ? 'Sobre' : 'About' },
    { id: 'projects', label: isPt ? 'Projetos' : 'Projects' },
    { id: 'experience', label: isPt ? 'Experiência' : 'Experience' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: isPt ? 'Contato' : 'Contact' },
  ];

  return (
    <header className="sticky top-4 z-50 w-full mb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-3 rounded-full apple-liquid-pill-light shadow-[0_20px_48px_rgba(20,30,55,0.06),inset_0_2px_3px_rgba(255,255,255,1)] flex items-center justify-between gap-2 sm:gap-4 transform-gpu will-change-transform relative"
      >
        {/* Top Specular Glint Refraction Line */}
        <div className="absolute inset-x-4 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-full" />

        {/* Left: JVGS Brand + Refractive Status Circle */}
        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-hidden"
          >
            <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              JVGS
            </span>
            {/* Subtle glass circle status dot from design */}
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-40 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-tr from-indigo-500 to-sky-400 ring-2 ring-white shadow-xs" />
            </span>
          </button>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 relative z-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'text-slate-900 bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Side: Language Toggle, Portfolio Switcher & Let's Talk CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 relative z-10">
          {/* Frosted Glass Language Toggle */}
          <div className="flex items-center apple-liquid-pill-light p-0.5 rounded-full shadow-xs shrink-0">
            <button
              type="button"
              onClick={() => {
                setLanguage('en');
              }}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => {
                setLanguage('pt');
              }}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                language === 'pt'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              PT
            </button>
          </div>

          {/* Portfolio Hub Dropdown */}
          <div ref={hubRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              title={isPt ? "Alternar entre mundos" : "Switch between worlds"}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full apple-liquid-pill-light hover:bg-white text-slate-700 text-xs font-semibold shadow-xs transition-all cursor-pointer shrink-0"
            >
              <Sparkles className="w-3 h-3 text-indigo-500 shrink-0" />
              <span className="hidden sm:inline">{isPt ? 'Mundos' : 'Worlds'}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu (Guaranteed not to break responsive viewports or expand navbar) */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.16 }}
                  style={{ position: 'absolute' }}
                  className="!absolute top-full right-[-64px] xs:right-[-48px] sm:right-0 mt-2.5 w-[calc(100vw-2.5rem)] max-w-[320px] sm:w-80 rounded-2xl apple-liquid-glass-light border border-white/95 shadow-2xl p-2 z-50 text-left flex flex-col max-h-[min(480px,75vh)] overflow-hidden"
                >
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between mb-1 shrink-0">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      {isPt ? 'Alternar Mundo' : 'Switch World'}
                    </span>
                    <span className="text-[10px] text-indigo-600 font-semibold font-mono">
                      {portfolioRegistry.filter((p) => p.status === 'active').length} {isPt ? 'Mundos' : 'Worlds'}
                    </span>
                  </div>

                  <div className="space-y-1 overflow-y-auto pr-1">
                    {portfolioRegistry.map((item) => {
                      const isCurrent = current.id === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleSelectPortfolio(item)}
                          className={`w-full text-left p-2 rounded-xl flex items-center gap-2.5 transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-indigo-50/90 border border-indigo-200/60 text-indigo-950 font-medium'
                              : 'hover:bg-slate-50 border border-transparent text-slate-700'
                          }`}
                        >
                          <span className="text-base p-1.5 rounded-lg bg-white border border-slate-200/60 shadow-xs shrink-0">
                            {item.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 truncate">
                              {item.name}
                            </div>
                            <div className="text-[10px] text-slate-500 truncate">
                              {item.shortName}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Let's Talk Button - Glass Pill */}
          <button
            type="button"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                scrollToSection('contact');
              }
            }}
            className="flex items-center gap-1 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/80 hover:bg-white text-slate-900 hover:text-indigo-600 border border-white/90 shadow-[0_4px_14px_rgba(0,0,0,0.03),inset_0_1.5px_2px_rgba(255,255,255,0.95)] hover:shadow-md text-xs sm:text-sm font-semibold transition-all cursor-pointer group shrink-0 whitespace-nowrap"
          >
            <span>{isPt ? 'Conversar' : "Let's talk"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </motion.div>
    </header>
  );
};
