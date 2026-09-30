import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { CaseStudies } from './components/CaseStudies';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechMatrix } from './components/TechMatrix';
import { CertificationsEducation } from './components/CertificationsEducation';
import { ContactFooter } from './components/ContactFooter';
import { MotionCursor } from './components/motion/MotionCursor';
import { ScrollProgress } from './components/motion/ScrollProgress';
import { Windows98Page } from './components/win98/Windows98Page';
import { SteamyGlassPage } from './components/steamy/SteamyGlassPage';
import { FrutigerAeroPage } from './components/frutiger/FrutigerAeroPage';
import { MonolithicBrutalismPage } from './components/monolith/MonolithicBrutalismPage';
import { EvaEpisodePage } from './components/eva/EvaEpisodePage';
import { PortfolioSwitcher } from './components/PortfolioSwitcher';

const AppContent: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash.toLowerCase();
    }
    return '';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.toLowerCase());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToModern = () => {
    window.location.hash = '';
  };

  const isMonolith =
    currentHash.includes('monolith') ||
    currentHash.includes('brutalism') ||
    currentHash.includes('proposta-4') ||
    currentHash.includes('proposal-4') ||
    currentHash.includes('proposta4');

  if (isMonolith) {
    return <MonolithicBrutalismPage onNavigateModern={navigateToModern} />;
  }

  const isSteamy =
    currentHash.includes('steamy') ||
    currentHash.includes('proposta-6') ||
    currentHash.includes('proposal-6') ||
    currentHash.includes('glass') ||
    currentHash.includes('glassmorphism') ||
    currentHash.includes('fog') ||
    currentHash.includes('frosted');

  if (isSteamy) {
    return <SteamyGlassPage onNavigateModern={navigateToModern} />;
  }

  const isAero =
    currentHash.includes('frutiger') ||
    currentHash.includes('aero') ||
    currentHash.includes('proposta5') ||
    currentHash.includes('proposta-5') ||
    currentHash.includes('proposal-5') ||
    currentHash.includes('msn');

  if (isAero) {
    return <FrutigerAeroPage onNavigateModern={navigateToModern} />;
  }

  const isWin98 = currentHash.includes('win98');

  if (isWin98) {
    return <Windows98Page onNavigateModern={navigateToModern} />;
  }

  const isEva =
    currentHash.includes('eva') ||
    currentHash.includes('nerv') ||
    currentHash.includes('dogma') ||
    currentHash.includes('central-dogma') ||
    currentHash.includes('proposta-8') ||
    currentHash.includes('proposta8') ||
    currentHash.includes('proposal-8') ||
    currentHash.includes('proposta-7') ||
    currentHash.includes('proposta7') ||
    currentHash.includes('evangelion');

  if (isEva) {
    return <EvaEpisodePage onNavigateModern={navigateToModern} />;
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden w-full max-w-full">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Ambient Interactive Motion Cursor */}
      <MotionCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <ImpactMetrics />
        <CaseStudies />
        <ExperienceTimeline />
        <TechMatrix />
        <CertificationsEducation />
      </main>

      {/* Floating Portfolio Gallery Switcher */}
      <PortfolioSwitcher variant="floating" />

      {/* Footer & Contact */}
      <ContactFooter />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
