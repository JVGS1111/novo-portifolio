import React, { useRef } from 'react';
import './frutigerAero.css';
import { FrutigerBackground } from './FrutigerBackground';
import { FrutigerHeroWindow } from './FrutigerHeroWindow';
import { MsnMessengerWindow } from './MsnMessengerWindow';
import { AeroMetricsSection } from './AeroMetricsSection';
import { AeroCaseStudies } from './AeroCaseStudies';
import { AeroExperienceAndTech } from './AeroExperienceAndTech';
import { AeroActionDock } from './AeroActionDock';
import { AeroTaskbarVista } from './AeroTaskbarVista';
import { PortfolioSwitcher } from '../PortfolioSwitcher';
import { playAeroClick } from './soundEffectsAero';
import { useLanguage } from '../../i18n';

interface FrutigerAeroPageProps {
  onNavigateModern?: () => void;
}

export const FrutigerAeroPage: React.FC<FrutigerAeroPageProps> = ({ onNavigateModern }) => {
  const { language, setLanguage } = useLanguage();
  const msnRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);

  const scrollToMsn = () => {
    msnRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToThree = () => {
    threeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToCases = () => {
    casesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="frutiger-root min-h-screen relative overflow-x-hidden selection:bg-sky-400/40 selection:text-sky-950 pb-20">
      {/* 1. Dynamic Frutiger Aero Scenery & Water Bubbles */}
      <FrutigerBackground />

      {/* 2. Top Proposal Header Bar */}
      <header className="relative z-30 px-3 sm:px-6 py-2.5 bg-gradient-to-r from-sky-900/80 via-blue-900/85 to-sky-900/80 backdrop-blur-xl border-b border-sky-300/40 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Title & Concept summary */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-tight">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm animate-pulse shrink-0" />
            <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {language === 'pt'
                ? 'PROPOSTA 5: FRUTIGER AERO & AQUA ECOTOPIA'
                : 'PROPOSAL 5: FRUTIGER AERO & AQUA ECOTOPIA'}
            </span>
            <span className="hidden lg:inline text-sky-200 text-xs font-normal opacity-90">
              • Windows Live Messenger 8.5 • Three.js WebGL Bio-Spheres • Skeuomorphic Gel & Aero Glass
            </span>
          </div>

          {/* Status Badges & Quick Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-mono">
              🟢 Live WebGL 60 FPS
            </span>
            <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[10px] font-mono">
              💬 MSN 8.5 Live
            </span>
            <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-[10px] font-mono">
              🌱 Ecotopia 2000s
            </span>

            {/* Language Toggle Button */}
            <button
              type="button"
              onClick={() => {
                playAeroClick();
                setLanguage(language === 'en' ? 'pt' : 'en');
              }}
              className="btn-jelly-glass px-2.5 py-1 rounded-full text-xs font-bold font-mono text-sky-950 flex items-center gap-1 cursor-pointer"
              title={language === 'en' ? 'Mudar para Português' : 'Switch to English'}
            >
              <span>{language === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}</span>
            </button>

            {/* Switch to Modern Portfolio Button */}
            <button
              type="button"
              onClick={() => {
                playAeroClick();
                if (onNavigateModern) {
                  onNavigateModern();
                } else {
                  window.location.hash = '';
                }
              }}
              className="btn-jelly-blue px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer"
              title={language === 'pt' ? 'Voltar ao Portfólio Moderno 3D' : 'Back to Modern 3D Portfolio'}
            >
              <span>✨</span>
              <span>Modern 3D</span>
            </button>

            {/* Switch to Windows 98 Button */}
            <button
              type="button"
              onClick={() => {
                playAeroClick();
                window.location.hash = '#/win98';
              }}
              className="btn-jelly-green px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer"
              title={language === 'pt' ? 'Ir para o Windows 98' : 'Go to Windows 98'}
            >
              <span>🕹️</span>
              <span>Win 98</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Main Content Container */}
      <main className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 pt-5 pb-10">
        {/* Split Hero Windows: Left Profile + 3D / Right MSN Live Messenger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Window: Hero & Three.js Canvas */}
          <div ref={threeRef} className="lg:col-span-7">
            <FrutigerHeroWindow />
          </div>

          {/* Right Window: Authentic MSN Messenger 8.5 */}
          <div ref={msnRef} className="lg:col-span-5">
            <MsnMessengerWindow />
          </div>
        </div>

        {/* Impact Metrics 5 Glossy Cards */}
        <AeroMetricsSection />

        {/* Case Studies 3 Aero Windows */}
        <div ref={casesRef}>
          <AeroCaseStudies />
        </div>

        {/* Experience Timeline and Aquatic Tech Matrix */}
        <AeroExperienceAndTech />

        {/* Bottom CTA Action Dock */}
        <AeroActionDock onScrollToMsn={scrollToMsn} />
      </main>

      {/* 4. Bottom Vista Aero Glass Taskbar */}
      <AeroTaskbarVista
        onScrollToMsn={scrollToMsn}
        onScrollToThree={scrollToThree}
        onScrollToCases={scrollToCases}
        onNavigateModern={onNavigateModern}
      />

      {/* 5. Floating Portfolio Switcher */}
      <PortfolioSwitcher variant="floating" />
    </div>
  );
};

export default FrutigerAeroPage;
