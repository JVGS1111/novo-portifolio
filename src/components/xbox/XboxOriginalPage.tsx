import React, { useState, useEffect } from 'react';
import { XboxDashboardMasthead } from './XboxDashboardMasthead';
import { XboxBladeNavigator } from './XboxBladeNavigator';
import { XboxChassisHero } from './XboxChassisHero';
import { XboxMemoryManager } from './XboxMemoryManager';
import { XboxDiscDriveCases } from './XboxDiscDriveCases';
import { XboxDevKernelPcb } from './XboxDevKernelPcb';
import { XboxCareerEeprom } from './XboxCareerEeprom';
import { XboxCommDock } from './XboxCommDock';
import { XboxWorldSelector } from './XboxWorldSelector';
import { xboxTranslations } from './xboxTranslations';
import { useLanguage } from '../../i18n';
import bioDashboardBgUrl from '../../assets/xbox_bio_dashboard_bg.jpg';

interface XboxOriginalPageProps {
  onNavigateModern?: () => void;
}

export const XboxOriginalPage: React.FC<XboxOriginalPageProps> = () => {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const t = isPt ? xboxTranslations.pt : xboxTranslations.en;

  const [activeSector, setActiveSector] = useState<string>('chassis');

  // Smooth scroll to sector
  const handleSelectSector = (sectorId: string) => {
    setActiveSector(sectorId);
    const el = document.getElementById(sectorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Keyboard Controller Shortcuts ([0-5], [A], [B], [X], [Y])
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === '0') handleSelectSector('chassis');
      else if (key === '1') handleSelectSector('memory');
      else if (key === '2') handleSelectSector('disc-bay');
      else if (key === '3') handleSelectSector('silicon');
      else if (key === '4') handleSelectSector('eeprom');
      else if (key === '5') handleSelectSector('comm-dock');
      else if (key === 'a') handleSelectSector('disc-bay');
      else if (key === 'x') handleSelectSector('memory');
      else if (key === 'y') handleSelectSector('comm-dock');
      else if (key === 'b') handleSelectSector('chassis');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update active sector on scroll
  useEffect(() => {
    const sectors = ['chassis', 'memory', 'disc-bay', 'silicon', 'eeprom', 'comm-dock'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sectors.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectors[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSector(sectors[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000502] text-[#e0ffe8] relative overflow-x-hidden w-full max-w-full font-mono selection:bg-[#00ff55] selection:text-black">
      {/* Background Bio-Mechanical Graphic & Scanlines Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bioDashboardBgUrl})` }}
      />

      {/* Atmospheric Emerald Tint & Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#010f05]/75 via-[#000803]/85 to-[#000301]/95" />

      {/* CRT Phosphor Scanline Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 255, 85, 0.06) 3px, rgba(0, 255, 85, 0.06) 6px)'
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top BIOS Masthead */}
        <XboxDashboardMasthead t={t} isPt={isPt} />

        {/* Bio-Mechanical Blade Channels Navigation */}
        <XboxBladeNavigator
          t={t}
          activeSector={activeSector}
          onSelectSector={handleSelectSector}
          isPt={isPt}
        />

        {/* Main Content Sections */}
        <main className="flex-1 w-full max-w-full">
          {/* Sector 00: 3D Translucent Plastic Chassis & Hero */}
          <XboxChassisHero t={t} onNavigateSection={handleSelectSector} isPt={isPt} />

          {/* Sector 01: 64,000 Memory Blocks Console */}
          <XboxMemoryManager t={t} isPt={isPt} />

          {/* Sector 02: Optical Disc Drive Bay & Translucent Keep Cases */}
          <XboxDiscDriveCases t={t} isPt={isPt} />

          {/* Sector 03: Silicon Motherboard Dev Kernel (32 Chips) */}
          <XboxDevKernelPcb t={t} isPt={isPt} />

          {/* Sector 04: EEPROM Non-Volatile Career Memory */}
          <XboxCareerEeprom t={t} isPt={isPt} />

          {/* Sector 05: Xbox Live Comm Dock & Controller Console */}
          <XboxCommDock t={t} isPt={isPt} />
        </main>

        {/* Floating Quick World Selector Button (Custom Xbox Design) */}
        <XboxWorldSelector variant="floating" />
      </div>
    </div>
  );
};
