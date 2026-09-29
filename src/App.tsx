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
import { PortfolioSwitcher } from './components/PortfolioSwitcher';

export const App: React.FC = () => {
  const [isWin98, setIsWin98] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash.toLowerCase().includes('win98');
    }
    return false;
  });

  useEffect(() => {
    const handleHashChange = () => {
      setIsWin98(window.location.hash.toLowerCase().includes('win98'));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToModern = () => {
    window.location.hash = '';
  };

  if (isWin98) {
    return <Windows98Page onNavigateModern={navigateToModern} />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
        {/* Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Ambient Interactive Motion Cursor */}
        <MotionCursor />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
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
    </LanguageProvider>
  );
};

export default App;
