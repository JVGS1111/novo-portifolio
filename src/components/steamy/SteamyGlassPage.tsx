import React, { useEffect } from 'react';
import { PrismBackground } from './PrismBackground';
import { PrismNavbar } from './PrismNavbar';
import { PrismHeroSection } from './PrismHeroSection';
import { PrismFeaturedProjects } from './PrismFeaturedProjects';
import { PrismImpactMetrics } from './PrismImpactMetrics';
import { PrismExperience } from './PrismExperience';
import { PrismTechMatrix } from './PrismTechMatrix';
import { PrismContact } from './PrismContact';
import { PrismBottomBar } from './PrismBottomBar';
import { PortfolioSwitcher } from '../PortfolioSwitcher';

interface SteamyGlassPageProps {
  onNavigateModern?: () => void;
}

export const SteamyGlassPage: React.FC<SteamyGlassPageProps> = ({ onNavigateModern }) => {
  useEffect(() => {
    document.title = 'João Vinícius Guerber | Proposta 06 — Luminous Prism Glassmorphism';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen text-slate-900 relative overflow-x-hidden select-text font-sans antialiased bg-[#F4F6F9]">
      {/* 1. Luminous Studio White & Prismatic Caustics Background */}
      <PrismBackground />

      {/* 2. Main Page Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Sticky Frosted Glass Navbar */}
        <PrismNavbar
          onNavigateModern={onNavigateModern}
          onOpenContact={handleOpenContact}
        />

        {/* Hero Section: Typography, 3D WebGL Crystal Glass & Code Card Centerpiece */}
        <PrismHeroSection />

        {/* Featured Projects: BanQi App (Phone), Guepsi (SaaS Dashboard), Open Source (Terminal) */}
        <PrismFeaturedProjects />

        {/* Quantified Engineering Impact (5 Glass Pods) */}
        <PrismImpactMetrics />

        {/* Professional Career Timeline */}
        <PrismExperience />

        {/* Comprehensive Tech Stack & Certifications */}
        <PrismTechMatrix />

        {/* Contact & Let's Talk CTA */}
        <PrismContact />

        {/* Optical Glass Spec & Footer */}
        <PrismBottomBar />
      </div>

      {/* Floating Portfolio Hub Switcher */}
      <PortfolioSwitcher variant="floating" />
    </div>
  );
};

export default SteamyGlassPage;
