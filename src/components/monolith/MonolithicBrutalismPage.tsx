import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonolithCinematicHero } from './MonolithCinematicHero';
import { MonolithImpactMetrics } from './MonolithImpactMetrics';
import { MonolithCaseStudies } from './MonolithCaseStudies';
import { MonolithExperience } from './MonolithExperience';
import { MonolithTechMatrix } from './MonolithTechMatrix';
import { MonolithContact } from './MonolithContact';
import { PortfolioSwitcher } from '../PortfolioSwitcher';
import { Terminal, Shield, Cpu, ArrowUp, Compass } from 'lucide-react';
import { playIndustrialClick } from './monolithAudio';

interface MonolithicBrutalismPageProps {
  onNavigateModern?: () => void;
}

export const MonolithicBrutalismPage: React.FC<MonolithicBrutalismPageProps> = ({
  onNavigateModern
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('citadel-hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);

      const sections = [
        { id: 'citadel-hero', el: document.getElementById('citadel-hero') },
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
    <div className="min-h-screen bg-[#0a0d12] text-slate-100 flex flex-col font-sans selection:bg-[#ff9900]/30 selection:text-[#ffaa00] relative overflow-x-hidden">
      {/* Background Architectural Grid & Subtle Noise */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #383b44 1px, transparent 1px),
              linear-gradient(to bottom, #383b44 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px'
          }}
        />
      </div>

      {/* Subtle Laser Scanning Beam Effect */}
      <motion.div
        animate={{ y: ['-100%', '1200%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="fixed left-0 right-0 h-28 bg-gradient-to-b from-transparent via-[#ff9900]/[0.025] to-transparent pointer-events-none z-10"
      />

      {/* STICKY COMPACT TOP HUD (Visible when user scrolls past Hero) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 z-40 bg-[#0d1015]/90 border-b border-[#383b44] backdrop-blur-md px-6 py-2.5 flex items-center justify-between text-[11px] font-mono shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="font-black text-sm text-white tracking-wider font-['Space_Grotesk'] hover:text-[#ffaa00] transition-colors cursor-pointer"
              >
                JV // CITADEL
              </button>
              <span className="text-[#383b44]">|</span>
              <span className="text-white/60 text-[10px] hidden sm:inline">
                JOÃO VINÍCIUS · SENIOR SOFTWARE ENGINEER
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-white/70">
                <button
                  type="button"
                  onClick={() => scrollToSection('citadel-hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  01 CITADEL
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('monolith-projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  02 PROJETOS
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('monolith-experience')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  03 CARREIRA
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('monolith-tech')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  04 MATRIX
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('monolith-contact')}
                  className="hover:text-white transition-colors cursor-pointer text-[#ffaa00]"
                >
                  05 CONTATO
                </button>
              </div>

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

      {/* SECTION 01: MONUMENTAL 3D CINEMATIC HERO (Exact 1:1 match to Reference Image) */}
      <MonolithCinematicHero
        onNavigateSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* SECTIONS 02 to 05: MONUMENTAL BRUTALIST DOSSIER CONTENT */}
      <main className="flex-1 relative z-10 space-y-6 pt-4 pb-16">
        {/* Telemetry Impact Metrics */}
        <MonolithImpactMetrics />

        {/* Featured Case Studies (02) */}
        <MonolithCaseStudies />

        {/* Operations & Experience (03) */}
        <MonolithExperience />

        {/* Technical Matrix, Certifications & Skills (04) */}
        <MonolithTechMatrix />

        {/* Encrypted Transmission Terminal & Contact (05) */}
        <MonolithContact />
      </main>

      {/* Industrial Brutalist Footer */}
      <footer className="relative border-t border-[#383b44] bg-[#0b0e13] py-8 px-6 font-mono text-[11px] text-[#8e95a5] z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#ffaa00] rounded-sm animate-pulse" />
            <span className="text-white font-bold tracking-wider">
              JOÃO VINÍCIUS GUERBER DE SOUZA
            </span>
            <span className="text-[#383b44]">|</span>
            <span className="text-[10px] text-slate-400">
              BUILDING SOFTWARE FOR A BIGGER TOMORROW
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Cpu size={12} className="text-[#ff9900]" />
              <span>THREE.JS REALISTIC WEBGL</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Shield size={12} className="text-[#22c55e]" />
              <span>PBR CONCRETE & VOLUMETRIC FOG</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Terminal size={12} className="text-[#00f0ff]" />
              <span>REACT 19 + VITE</span>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} · ARQUITETURA MOBILE & WEB DE ALTA CONVERSÃO
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
            className="fixed bottom-22 right-6 z-40 p-2.5 bg-[#14171d]/95 backdrop-blur-md border border-[#484b54] hover:border-[#ffaa00] text-slate-300 hover:text-[#ffaa00] shadow-[0_4px_16px_rgba(0,0,0,0.8)] transition-colors rounded-sm cursor-pointer"
            title="Voltar ao topo"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Portfolio Switcher */}
      <PortfolioSwitcher variant="floating" />
    </div>
  );
};

export default MonolithicBrutalismPage;
