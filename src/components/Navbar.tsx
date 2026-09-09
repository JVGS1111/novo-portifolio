import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { UsaFlagIcon, BrazilFlagIcon } from './FlagIcons';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
        {/* Monogram / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-cyan-400 group-hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/10 group-hover:scale-105">
            JG
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.nav.roleBadge}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/70 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action, Flags & Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher with USA & BR Flags */}
          <div className="flex items-center bg-slate-900/80 p-1 rounded-full border border-slate-800/90 shadow-inner">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-all ${
                language === 'en'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
              aria-label="Switch to English"
              title="English (US)"
            >
              <UsaFlagIcon className="w-4 h-3" />
              <span className="text-[11px]">EN</span>
            </button>
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-all ${
                language === 'pt'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
              aria-label="Mudar para Português"
              title="Português (Brasil)"
            >
              <BrazilFlagIcon className="w-4 h-3" />
              <span className="text-[11px]">PT</span>
            </button>
          </div>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-purple-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.nav.connectBtn}
          </a>
        </div>

        {/* Mobile Flag Switcher & Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Quick Language Toggle in Mobile Header */}
          <div className="flex items-center bg-slate-900/80 p-0.5 rounded-full border border-slate-800">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`p-1.5 rounded-full transition-all ${
                language === 'en' ? 'bg-cyan-500/20 border border-cyan-500/40' : 'opacity-60 hover:opacity-100'
              }`}
              aria-label="English"
              title="English"
            >
              <UsaFlagIcon className="w-4 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={`p-1.5 rounded-full transition-all ${
                language === 'pt' ? 'bg-cyan-500/20 border border-cyan-500/40' : 'opacity-60 hover:opacity-100'
              }`}
              aria-label="Português"
              title="Português"
            >
              <BrazilFlagIcon className="w-4 h-3" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-[#0c0f18]/95 backdrop-blur-xl border-b border-slate-800 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Language Selection Buttons */}
          <div className="py-2 px-2 flex items-center justify-between border-t border-slate-800/80">
            <span className="text-xs font-mono text-slate-400">Language / Idioma:</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono ${
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
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono ${
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
        </div>
      )}
    </header>
  );
};
