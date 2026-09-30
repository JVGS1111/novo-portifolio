import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { UsaFlagIcon, BrazilFlagIcon } from './FlagIcons';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';
import { PortfolioSwitcher } from './PortfolioSwitcher';
import { portfolioRegistry, navigateToPortfolio } from '../data/portfolioRegistry';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.metrics, href: '#metricas' },
    { name: t.nav.cases, href: '#projetos' },
    { name: t.nav.trajectory, href: '#experiencia' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contato' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Logo with Hover Spring */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 shadow-md shadow-cyan-500/10 shrink-0">
            JG
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
              {personalInfo.name}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-mono flex items-center gap-1.5 whitespace-nowrap">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500" />
              </span>
              <span className="hidden sm:inline">{t.nav.roleBadge}</span>
              <span className="sm:hidden text-emerald-400 font-medium">Disponível</span>
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links (Visible on large screens) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -1 }}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/70 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Action, Flags & Social Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Streamlined Language Toggle */}
          <div className="flex items-center bg-slate-900/80 p-0.5 rounded-full border border-slate-800/90 shadow-inner">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-xs font-bold'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
              aria-label="Switch to English"
              title="English (US)"
            >
              <UsaFlagIcon className="w-3.5 h-2.5" />
              <span>EN</span>
            </button>
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                language === 'pt'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-xs font-bold'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
              aria-label="Mudar para Português"
              title="Português (Brasil)"
            >
              <BrazilFlagIcon className="w-3.5 h-2.5" />
              <span>PT</span>
            </button>
          </div>

          {/* Social Icons (Extra Large Screens) */}
          <div className="hidden xl:flex items-center gap-1">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-700"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-purple-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-700"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Dynamic Portfolio Hub Switcher Dropdown */}
          <PortfolioSwitcher variant="navbar" />

          {/* Connect CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contato"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-full shadow-md shadow-cyan-500/20 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.nav.connectBtn}</span>
          </motion.a>
        </div>

        {/* Mobile Header Right: One-touch Language Toggle & Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Quick One-touch Language Toggle */}
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-cyan-300 hover:bg-slate-800 transition-colors cursor-pointer shadow-sm"
            aria-label="Toggle language"
            title={language === 'en' ? 'Mudar para Português' : 'Switch to English'}
          >
            {language === 'en' ? (
              <>
                <UsaFlagIcon className="w-3.5 h-2.5" />
                <span className="font-bold">EN</span>
              </>
            ) : (
              <>
                <BrazilFlagIcon className="w-3.5 h-2.5" />
                <span className="font-bold">PT</span>
              </>
            )}
          </button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800 hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden px-4 pt-4 pb-6 bg-[#0c0f18]/95 backdrop-blur-xl border-b border-slate-800 space-y-3"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Registered Portfolios Gallery in Mobile Drawer */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="px-2 py-1 text-[11px] font-mono uppercase text-slate-400 font-bold flex items-center justify-between">
                  <span>🎨 Portfólios & Conceitos</span>
                  <span className="text-[10px] text-cyan-400 font-normal">
                    {portfolioRegistry.filter((p) => p.status === 'active').length} versões
                  </span>
                </div>
                <div className="space-y-1.5 mt-1.5">
                  {portfolioRegistry.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigateToPortfolio(item);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-200 bg-slate-900/60 hover:bg-slate-800/70 rounded-lg border border-slate-800 transition-colors font-mono cursor-pointer text-left"
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span className="text-base">{item.icon}</span>
                        <span className="truncate">{item.name}</span>
                      </span>
                      <span
                        className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          item.status === 'coming_soon'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        }`}
                      >
                        {item.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
            
            {/* Mobile Language Selection Buttons */}
            <div className="py-2 px-2 flex items-center justify-between border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400">Language / Idioma:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono cursor-pointer ${
                    language === 'en'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}
                >
                  <UsaFlagIcon className="w-4 h-3" />
                  <span>English</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('pt')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono cursor-pointer ${
                    language === 'pt'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}
                >
                  <BrazilFlagIcon className="w-4 h-3" />
                  <span>Português</span>
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 rounded-full shadow-md"
              >
                {t.nav.connectBtn}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
