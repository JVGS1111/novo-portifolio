import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { CaseStudies } from './components/CaseStudies';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechMatrix } from './components/TechMatrix';
import { CertificationsEducation } from './components/CertificationsEducation';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
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

      {/* Footer & Contact */}
      <ContactFooter />
    </div>
  );
};

export default App;
