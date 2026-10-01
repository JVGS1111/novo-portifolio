import React from 'react';
import { Navbar } from '../Navbar';
import { Hero } from '../Hero';
import { ImpactMetrics } from '../ImpactMetrics';
import { CaseStudies } from '../CaseStudies';
import { ExperienceTimeline } from '../ExperienceTimeline';
import { TechMatrix } from '../TechMatrix';
import { CertificationsEducation } from '../CertificationsEducation';
import { ContactFooter } from '../ContactFooter';
import { MotionCursor } from '../motion/MotionCursor';
import { ScrollProgress } from '../motion/ScrollProgress';
import { PortfolioSwitcher } from '../PortfolioSwitcher';

export const ModernExecutivePage: React.FC = () => {
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

export default ModernExecutivePage;
