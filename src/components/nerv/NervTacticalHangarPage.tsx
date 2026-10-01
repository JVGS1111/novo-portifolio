import React, { useState } from 'react';
import { NervTopNav } from './NervTopNav';
import { NervLeftTabBar } from './NervLeftTabBar';
import { NervPersonalTerminal } from './NervPersonalTerminal';
import { NervHangarView } from './NervHangarView';
import { NervRightSidebarHud } from './NervRightSidebarHud';
import { NervSelectedProjects } from './NervSelectedProjects';
import { NervDossierModal } from './NervDossierModal';
import { nervTranslations, type NervProjectItem } from './nervTranslations';

interface NervTacticalHangarPageProps {
  onNavigateModern?: () => void;
}

export const NervTacticalHangarPage: React.FC<NervTacticalHangarPageProps> = () => {
  const [lang, setLang] = useState<'en' | 'pt'>('en');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<NervProjectItem | null>(null);

  const content = nervTranslations[lang];

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  const handleOpenCv = () => {
    // Open resume or triggers contact
    setActiveSection('contact');
  };

  const handleViewProjects = () => {
    // Automatically select first project or open project dossier
    if (content.selectedProjects.items[0]) {
      setSelectedProject(content.selectedProjects.items[0]);
    }
  };

  return (
    <div className="min-h-screen h-screen w-screen max-w-full bg-[#080A0E] text-zinc-100 flex flex-col font-mono overflow-hidden select-none relative">
      {/* 1. Top Tactical Navigation Bar */}
      <NervTopNav
        content={content}
        lang={lang}
        onToggleLang={handleToggleLang}
        activeSection={activeSection}
        onSelectSection={(sectionId) => setActiveSection(sectionId)}
      />

      {/* 2. Main Middle Deck (Left Tabs + Center Hangar + Right HUD) */}
      <div className="flex-1 flex min-h-0 w-full relative overflow-hidden">
        {/* Left Vertical Numeric Tab Bar (01 - 06) */}
        <NervLeftTabBar
          content={content}
          activeSection={activeSection}
          onSelectSection={(sectionId) => setActiveSection(sectionId)}
        />

        {/* Center Hangar Bay & Personal Terminal Workspace */}
        <main className="flex-1 relative overflow-y-auto lg:overflow-hidden flex flex-col justify-between">
          {/* Atmospheric EVA-01 Hangar Background Art */}
          <NervHangarView />

          {/* Terminal Placement Area */}
          <div className="relative z-10 p-3 sm:p-5 lg:p-6 flex-1 flex items-start">
            <NervPersonalTerminal
              content={content}
              onViewProjects={handleViewProjects}
              onOpenCv={handleOpenCv}
            />
          </div>

          {/* Bottom Selected Projects Horizontal Rail */}
          <NervSelectedProjects
            content={content}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        </main>

        {/* Right Tactical Sidebar HUD (Hidden on mobile, visible on lg+) */}
        <div className="hidden lg:flex">
          <NervRightSidebarHud
            content={content}
            onOpenUnitDossier={() => setActiveSection('about')}
          />
        </div>
      </div>

      {/* 3. Tactical Dossier & Modal Windows */}
      <NervDossierModal
        content={content}
        selectedProject={selectedProject}
        onCloseProject={() => setSelectedProject(null)}
        activeSection={activeSection}
        onCloseSection={() => setActiveSection('home')}
      />
    </div>
  );
};
