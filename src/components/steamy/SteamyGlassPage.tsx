import React, { useEffect } from 'react';
import { SteamyBackground } from './SteamyBackground';
import { SteamyTopBar } from './SteamyTopBar';
import { SteamWipeCanvas } from './SteamWipeCanvas';
import { SteamyHeroCard } from './SteamyHeroCard';
import { SteamyImpactMetrics } from './SteamyImpactMetrics';
import { SteamyCaseStudies } from './SteamyCaseStudies';
import { SteamyExperiences } from './SteamyExperiences';
import { SteamyTechMatrix } from './SteamyTechMatrix';
import { SteamyBottomBar } from './SteamyBottomBar';
import { PortfolioSwitcher } from '../PortfolioSwitcher';

interface SteamyGlassPageProps {
  onNavigateModern?: () => void;
}

export const SteamyGlassPage: React.FC<SteamyGlassPageProps> = ({ onNavigateModern }) => {
  useEffect(() => {
    document.title = 'João Vinícius Guerber | Proposta 06 — Steamy Frosted Glass & Bath Fog';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen text-slate-800 relative overflow-x-hidden select-text font-sans antialiased">
      {/* 1. Atmospheric Morning Bath Mist Background with Botanical Leaves & Droplets */}
      <SteamyBackground steamDensity={0.88} />

      {/* 2. Main Page Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Sticky Tactile Top Bar */}
        <SteamyTopBar onNavigateModern={onNavigateModern} />

        {/* Interactive Finger Wipe Glass Mirror Sandbox */}
        <SteamWipeCanvas />

        {/* Finger Wiped Clear Area (Figma: Finger_Wiped_Clear_Area) */}
        <main
          className="relative w-full p-4 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[44px] bg-white/70 backdrop-blur-2xl border border-white/85 shadow-[0_24px_56px_rgba(30,45,65,0.07),0_4px_16px_rgba(30,45,65,0.03),inset_0_2.5px_4px_rgba(255,255,255,0.95),inset_0_-2.5px_6px_rgba(0,0,0,0.02)] transition-all"
        >
          {/* Hero Section Card */}
          <SteamyHeroCard />

          {/* Quantified Impact Metrics Section (5 Dew Pods) */}
          <SteamyImpactMetrics />

          {/* Engineering & Architecture Case Studies (3 Cards) */}
          <SteamyCaseStudies />

          {/* Split Row: Career Experiences & Tech Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Career Timeline */}
            <div className="lg:col-span-5">
              <SteamyExperiences />
            </div>

            {/* Right Column: 32 Skills Matrix, Certifications & Languages */}
            <div className="lg:col-span-7">
              <SteamyTechMatrix />
            </div>
          </div>
        </main>

        {/* Telemetry & Specifications Bottom Bar */}
        <SteamyBottomBar />
      </div>

      {/* Floating Portfolio Switcher */}
      <PortfolioSwitcher variant="floating" />
    </div>
  );
};

export default SteamyGlassPage;
