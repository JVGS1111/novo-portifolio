import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonolithCinematicHero } from './MonolithCinematicHero';
import { MonolithImpactMetrics } from './MonolithImpactMetrics';
import { MonolithCaseStudies } from './MonolithCaseStudies';
import { MonolithExperience } from './MonolithExperience';
import { MonolithTechMatrix } from './MonolithTechMatrix';
import { MonolithContact } from './MonolithContact';
import { MonolithWorldSelector } from './MonolithWorldSelector';
import { ArrowUp, Compass } from 'lucide-react';
import { playIndustrialClick } from './monolithAudio';
import { useLanguage } from '../../i18n';

interface MonolithicBrutalismPageProps {
  onNavigateModern?: () => void;
}

export const MonolithicBrutalismPage: React.FC<MonolithicBrutalismPageProps> = ({
  onNavigateModern
}) => {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('citadel-hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);

      const sections = [
        { id: 'citadel-hero', el: document.getElementById('citadel-hero') },
        { id: 'monolith-metrics', el: document.getElementById('monolith-metrics') },
        { id: 'monolith-projects', el: document.getElementById('monolith-projects') },
        { id: 'monolith-experience', el: document.getElementById('monolith-experience') },
        { id: 'monolith-tech', el: document.getElementById('monolith-tech') },
        { id: 'monolith-contact', el: document.getElementById('monolith-contact') }
      ];

      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s.el && s.el.offsetTop <= scrollPos) {
          setActiveSection(s.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    playIndustrialClick();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    playIndustrialClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('citadel-hero');
  };

  return (
    <div className="min-h-screen bg-[#0a0d12] text-white flex flex-col font-sans selection:bg-[#ffaa00]/30 selection:text-[#ffaa00] relative overflow-x-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #484b54 1px, transparent 1px),
              linear-gradient(to bottom, #484b54 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      {/* STICKY COMPACT TOP HUD (Visible when user scrolls past Hero) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-40 bg-[#0a0d12]/92 border-b border-white/10 backdrop-blur-md px-6 sm:px-12 py-3 flex items-center justify-between text-[11px] font-mono shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="font-black text-base text-white tracking-tight font-['Space_Grotesk'] hover:text-[#ffaa00] transition-colors cursor-pointer"
              >
                JVGS
              </button>
              <span className="text-white/20">|</span>
              <span className="text-white/60 text-[10px] hidden sm:inline font-mono tracking-widest uppercase">
                JOÃO VINÍCIUS GUERBER DE SOUZA · SENIOR SOFTWARE ENGINEER (FRONT-END & MOBILE)
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <nav className="hidden md:flex items-center gap-5 text-[10px] tracking-widest uppercase text-white/60">
                <button
                  type="button"
                  onClick={() => scrollToSection('citadel-hero')}
                  className={`hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'citadel-hero' ? 'text-white font-bold' : ''
                  }`}
                >
                  01 HOME
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('monolith-metrics')}
                  className={`hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'monolith-metrics' ? 'text-white font-bold' : ''
                  }`}
                >
                  02 {language === 'pt' ? 'MÉTRICAS' : 'METRICS'}
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('monolith-projects')}
                  className={`hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'monolith-projects' ? 'text-white font-bold' : ''
                  }`}
                >
                  03 {language === 'pt' ? 'PROJETOS' : 'PROJECTS'}
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('monolith-experience')}
                  className={`hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'monolith-experience' ? 'text-white font-bold' : ''
                  }`}
                >
                  04 {language === 'pt' ? 'EXPERIÊNCIA' : 'EXPERIENCE'}
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('monolith-tech')}
                  className={`hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'monolith-tech' ? 'text-white font-bold' : ''
                  }`}
                >
                  05 MATRIX
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('monolith-contact')}
                  className={`hover:text-white transition-colors cursor-pointer text-[#ffaa00] ${
                    activeSection === 'monolith-contact' ? 'font-bold' : ''
                  }`}
                >
                  06 {language === 'pt' ? 'CONTATO' : 'CONTACT'}
                </button>
              </nav>

              {/* Language Switch Button */}
              <button
                type="button"
                onClick={() => {
                  playIndustrialClick();
                  setLanguage(language === 'en' ? 'pt' : 'en');
                }}
                className="px-2 py-1 bg-white/5 hover:bg-white/10 border border-white/20 text-[#ffaa00] text-[10px] font-mono font-bold uppercase transition-colors cursor-pointer"
                title={language === 'en' ? 'Mudar para Português' : 'Switch to English'}
              >
                [{language === 'en' ? 'EN' : 'PT'}]
              </button>

              {onNavigateModern && (
                <button
                  type="button"
                  onClick={onNavigateModern}
                  className="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Compass size={12} className="text-[#00f0ff]" />
                  <span>MODERN 3D</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 01: MONUMENTAL 2.5D CINEMATIC HERO */}
      <MonolithCinematicHero
        onNavigateSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* SECTIONS 02 to 06: SLEEK ARCHITECTURAL DOSSIER CONTENT */}
      <main className="flex-1 relative z-10 space-y-4 pt-6 pb-20">
        {/* Telemetry Impact Metrics (02) */}
        <MonolithImpactMetrics />

        {/* Featured Case Studies (03) */}
        <MonolithCaseStudies />

        {/* Operations & Experience (04) */}
        <MonolithExperience />

        {/* Technical Matrix, Certifications & Skills (05) */}
        <MonolithTechMatrix />

        {/* Encrypted Transmission Terminal & Contact (06) */}
        <MonolithContact />
      </main>

      {/* Minimalist Architectural Sci-Fi Footer */}
      <footer className="relative border-t border-white/10 bg-[#0a0d12] py-10 px-6 sm:px-12 font-mono text-[11px] text-white/60 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#ffaa00] rounded-none animate-pulse" />
            <span className="text-white font-bold tracking-wider font-['Space_Grotesk'] text-sm">
              JOÃO VINÍCIUS GUERBER DE SOUZA
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase">
              BUILDING SOFTWARE FOR A BIGGER TOMORROW
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-white/50">
            <span>{language === 'pt' ? 'IDEIAS' : 'IDEAS'}</span>
            <span className="text-white/20">/</span>
            <span>{language === 'pt' ? 'SISTEMAS' : 'SYSTEMS'}</span>
            <span className="text-white/20">/</span>
            <span>{language === 'pt' ? 'PESSOAS' : 'PEOPLE'}</span>
          </div>

          <div className="text-[10px] text-white/40 text-center md:text-right tracking-widest uppercase">
            © {new Date().getFullYear()} · {language === 'pt' ? 'ARQUITETURA MOBILE & WEB DE ALTA CONVERSÃO' : 'HIGH-CONVERSION MOBILE & WEB ARCHITECTURE'}
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-22 right-6 z-40 p-3 bg-[#0e1117]/95 backdrop-blur-md border border-white/20 hover:border-[#ffaa00] text-white/80 hover:text-[#ffaa00] shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all cursor-pointer"
            title={language === 'pt' ? 'Voltar ao topo' : 'Scroll to top'}
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Monolith World Selector */}
      <MonolithWorldSelector variant="floating" />
    </div>
  );
};

export default MonolithicBrutalismPage;
