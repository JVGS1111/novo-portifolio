import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonolithMasthead } from './MonolithMasthead';
import { MonolithHero } from './MonolithHero';
import { MonolithImpactMetrics } from './MonolithImpactMetrics';
import { MonolithCaseStudies } from './MonolithCaseStudies';
import { MonolithExperience } from './MonolithExperience';
import { MonolithTechMatrix } from './MonolithTechMatrix';
import { PortfolioSwitcher } from '../PortfolioSwitcher';
import { Terminal, Shield, Cpu, ArrowUp } from 'lucide-react';
import { playIndustrialClick } from './monolithAudio';

interface MonolithicBrutalismPageProps {
  onNavigateModern?: () => void;
}

export const MonolithicBrutalismPage: React.FC<MonolithicBrutalismPageProps> = ({
  onNavigateModern
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playIndustrialClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0e11] text-slate-100 flex flex-col font-sans selection:bg-[#ff9900]/30 selection:text-[#ffaa00] relative overflow-x-hidden">
      {/* Background Architectural Grid & Noise */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #383b44 1px, transparent 1px),
              linear-gradient(to bottom, #383b44 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Subtle Laser Scanning Beam Effect */}
      <motion.div
        animate={{ y: ['-100%', '1000%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="fixed left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[#ff9900]/[0.03] to-transparent pointer-events-none z-10"
      />

      {/* Technical Masthead HUD */}
      <MonolithMasthead
        onNavigateHome={onNavigateModern}
      />

      {/* Main Monumental Content */}
      <main className="flex-1 relative z-10 pb-16">
        <MonolithHero />
        <MonolithImpactMetrics />
        <MonolithCaseStudies />
        <MonolithExperience />
        <MonolithTechMatrix />
      </main>

      {/* Industrial Brutalist Footer */}
      <footer className="relative border-t border-[#484b54] bg-[#0d0f12] py-8 px-4 font-mono text-[11px] text-[#8e95a5] z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#00f0ff] rounded-sm" />
            <span className="text-white font-bold tracking-wider">
              JOÃO VINÍCIUS GUERBER DE SOUZA
            </span>
            <span className="text-[#383b44]">|</span>
            <span className="text-[10px]">MONOLITH_04 // CONCRETE SCI-FI BRUTALISM</span>
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Cpu size={12} className="text-[#ff9900]" />
              <span>THREE.JS r164</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Shield size={12} className="text-[#22c55e]" />
              <span>PBR ROUGH SHADER</span>
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
            className="fixed bottom-22 right-6 z-40 p-2.5 bg-[#16181c]/90 backdrop-blur-md border border-[#484b54] hover:border-[#ff9900] text-slate-300 hover:text-[#ff9900] shadow-[3px_3px_0px_#000] transition-colors rounded-sm cursor-pointer"
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
