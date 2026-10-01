import React, { useState, useEffect } from 'react';
import type { WindowId, WindowState, DesktopIconItem } from './win98Types';
import { Win98Window } from './Win98Window';
import { Win98Icon } from './Win98Icon';
import { Win98Taskbar } from './Win98Taskbar';
import { Win98StartMenu } from './Win98StartMenu';
import { CrtOverlay } from './CrtOverlay';
import { ShutdownScreen } from './ShutdownScreen';
import { ProfileApp } from './apps/ProfileApp';
import { PerformanceMonitorApp } from './apps/PerformanceMonitorApp';
import { CaseStudiesApp } from './apps/CaseStudiesApp';
import { DosPromptApp } from './apps/DosPromptApp';
import { InternetExplorerApp } from './apps/InternetExplorerApp';
import { RecycleBinApp } from './apps/RecycleBinApp';
import { Win98PortfolioSelector } from './Win98PortfolioSelector';
import { playStartupChime, playRestoreSound, playMinimizeSound } from './soundEffects';
import { useLanguage } from '../../i18n/LanguageContext';

interface Windows98PageProps {
  onNavigateModern: () => void;
}

const windowTitles: Record<'en' | 'pt', Record<WindowId, string>> = {
  en: {
    profile: 'Guerber_Profile.exe — [João Vinícius Guerber]',
    perf: 'Performance_Monitor.exe — [Real-time banQi Telemetry]',
    cases: 'C:\\Projects_Case_Studies\\ — [banQi, AI & Design System]',
    cmd: 'MS-DOS Prompt — C:\\WINDOWS\\system32\\cmd.exe',
    ie: 'Internet Explorer 5.0 — Guerber Online',
    recycle: 'Recycle Bin — 0 Technical Debt',
    about: 'About System'
  },
  pt: {
    profile: 'Guerber_Profile.exe — [João Vinícius Guerber]',
    perf: 'Performance_Monitor.exe — [Telemetria Real banQi]',
    cases: 'C:\\Projetos_Case_Studies\\ — [banQi, IA & Design System]',
    cmd: 'MS-DOS Prompt — C:\\WINDOWS\\system32\\cmd.exe',
    ie: 'Internet Explorer 5.0 — Guerber Online',
    recycle: 'Lixeira — 0 Débitos Técnicos',
    about: 'Sobre o Sistema'
  }
};

export const Windows98Page: React.FC<Windows98PageProps> = ({ onNavigateModern }) => {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [shutdownActive, setShutdownActive] = useState(false);
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);
  const [activeWindowId, setActiveWindowId] = useState<WindowId | null>('profile');
  const [nextZIndex, setNextZIndex] = useState(20);

  // Check if screen is mobile initially
  const isMobileInitial = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  // Initialize Window States
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>({
    profile: {
      id: 'profile',
      title: windowTitles[language].profile,
      icon: '💻',
      isOpen: true,
      isMinimized: false,
      isMaximized: isMobileInitial,
      zIndex: 10,
      defaultPosition: { x: isMobileInitial ? 4 : 120, y: isMobileInitial ? 4 : 30 },
      defaultSize: { width: 720, height: 520 }
    },
    perf: {
      id: 'perf',
      title: windowTitles[language].perf,
      icon: '📊',
      isOpen: !isMobileInitial, // On mobile, start minimized so screen isn't overloaded
      isMinimized: false,
      isMaximized: isMobileInitial,
      zIndex: 11,
      defaultPosition: { x: isMobileInitial ? 4 : 440, y: isMobileInitial ? 4 : 180 },
      defaultSize: { width: 680, height: 480 }
    },
    cases: {
      id: 'cases',
      title: windowTitles[language].cases,
      icon: '🚀',
      isOpen: false,
      isMinimized: false,
      isMaximized: isMobileInitial,
      zIndex: 12,
      defaultPosition: { x: isMobileInitial ? 4 : 200, y: isMobileInitial ? 4 : 80 },
      defaultSize: { width: 740, height: 490 }
    },
    cmd: {
      id: 'cmd',
      title: windowTitles[language].cmd,
      icon: '📟',
      isOpen: false,
      isMinimized: false,
      isMaximized: isMobileInitial,
      zIndex: 13,
      defaultPosition: { x: isMobileInitial ? 4 : 160, y: isMobileInitial ? 4 : 140 },
      defaultSize: { width: 600, height: 380 }
    },
    ie: {
      id: 'ie',
      title: windowTitles[language].ie,
      icon: '🌐',
      isOpen: false,
      isMinimized: false,
      isMaximized: isMobileInitial,
      zIndex: 14,
      defaultPosition: { x: isMobileInitial ? 4 : 240, y: isMobileInitial ? 4 : 90 },
      defaultSize: { width: 640, height: 440 }
    },
    recycle: {
      id: 'recycle',
      title: windowTitles[language].recycle,
      icon: '🗑️',
      isOpen: false,
      isMinimized: false,
      isMaximized: isMobileInitial,
      zIndex: 10,
      defaultPosition: { x: isMobileInitial ? 4 : 300, y: isMobileInitial ? 4 : 150 },
      defaultSize: { width: 440, height: 300 }
    },
    about: {
      id: 'about',
      title: windowTitles[language].about,
      icon: 'ℹ️',
      isOpen: false,
      isMinimized: false,
      isMaximized: isMobileInitial,
      zIndex: 10,
      defaultPosition: { x: isMobileInitial ? 4 : 320, y: isMobileInitial ? 4 : 160 },
      defaultSize: { width: 400, height: 260 }
    }
  });

  // Dynamically localized windows with localized titles
  const localizedWindows = {
    ...windows,
    profile: { ...windows.profile, title: windowTitles[language].profile },
    perf: { ...windows.perf, title: windowTitles[language].perf },
    cases: { ...windows.cases, title: windowTitles[language].cases },
    cmd: { ...windows.cmd, title: windowTitles[language].cmd },
    ie: { ...windows.ie, title: windowTitles[language].ie },
    recycle: { ...windows.recycle, title: windowTitles[language].recycle },
    about: { ...windows.about, title: windowTitles[language].about },
  };

  // Play startup sound on mount (once user has interacted or gesture unlocks audio)
  useEffect(() => {
    const handleFirstGesture = () => {
      playStartupChime();
      window.removeEventListener('pointerdown', handleFirstGesture);
    };
    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
    return () => window.removeEventListener('pointerdown', handleFirstGesture);
  }, []);

  // Bring window to top focus
  const focusWindow = (id: WindowId) => {
    setNextZIndex((prev) => prev + 1);
    setActiveWindowId(id);
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        zIndex: nextZIndex + 1
      }
    }));
  };

  const openWindow = (id: WindowId) => {
    playRestoreSound();
    focusWindow(id);
  };

  const closeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false }
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (id: WindowId) => {
    playMinimizeSound();
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true }
    }));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const toggleMaximizeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMaximized: !prev[id].isMaximized }
    }));
    focusWindow(id);
  };

  // Toggle window from taskbar
  const toggleWindowFromTaskbar = (id: WindowId) => {
    const win = windows[id];
    if (win.isMinimized) {
      playRestoreSound();
      focusWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  // Desktop Icons Configuration
  const desktopIcons: DesktopIconItem[] = [
    { id: 'profile', title: isPt ? 'Meu Computador' : 'My Computer', icon: '💻', badge: 'Guerber' },
    { id: 'perf', title: 'Performance_Monitor', icon: '📊', badge: '-98% Crash' },
    { id: 'cases', title: isPt ? 'Meus Projetos' : 'My Projects', icon: '📁', badge: '3 Cases' },
    { id: 'cmd', title: 'MS-DOS Prompt', icon: '📟' },
    { id: 'ie', title: 'Internet Explorer', icon: '🌐' },
    { id: 'recycle', title: isPt ? 'Lixeira (Vazia)' : 'Recycle Bin (Empty)', icon: '🗑️' },
    {
      id: 'modern',
      title: isPt ? 'Portfólio Moderno' : 'Modern Portfolio',
      icon: '🚀',
      badge: 'Next-Gen',
      action: onNavigateModern
    },
    {
      id: 'monolith',
      title: isPt ? 'Monolito Sci-Fi' : 'Sci-Fi Monolith',
      icon: '🗿',
      badge: isPt ? 'Mundo 4' : 'World 4',
      action: () => {
        window.location.hash = '#/monolith';
      }
    },
    {
      id: 'frutiger',
      title: 'Frutiger Aero MSN',
      icon: '🫧',
      badge: isPt ? 'Mundo 5' : 'World 5',
      action: () => {
        window.location.hash = '#/proposta5';
      }
    },
    {
      id: 'steamy',
      title: isPt ? 'Vidro Prismático' : 'Prism Glass',
      icon: '💎',
      badge: isPt ? 'Mundo 6' : 'World 6',
      action: () => {
        window.location.hash = '#/steamy-glass';
      }
    },
    {
      id: 'eva',
      title: 'Evangelion NERV',
      icon: '⚡',
      badge: isPt ? 'Mundo 8' : 'World 8',
      action: () => {
        window.location.hash = '#/proposta-8';
      }
    }
  ];

  return (
    <div
      onClick={() => {
        setSelectedIconId(null);
        if (startMenuOpen) setStartMenuOpen(false);
      }}
      className="fixed inset-0 w-screen h-screen overflow-hidden select-none bg-[#008080] font-['Tahoma',sans-serif]"
    >
      {/* CRT Scanline & Phosphor Overlay */}
      <CrtOverlay enabled={crtEnabled} />

      {/* Shutdown Modal Screen */}
      {shutdownActive && (
        <ShutdownScreen
          onRestart={() => setShutdownActive(false)}
          onNavigateModern={onNavigateModern}
        />
      )}

      {/* Portfolio Selector Hub (Select / Dropdown with all registered portfolios) */}
      <div className="absolute top-2 right-2 sm:right-3 z-[8000] flex items-center gap-2">
        <Win98PortfolioSelector />
      </div>

      {/* Desktop Icons: FIXED z-[2] so all windows (z-[10]+) ALWAYS sit above them cleanly! */}
      <div className="absolute top-2 left-2 z-[2] flex flex-col flex-wrap max-h-[calc(100vh-50px)] gap-1.5 p-1">
        {desktopIcons.map((ic) => (
          <Win98Icon
            key={ic.id}
            id={ic.id}
            title={ic.title}
            icon={ic.icon}
            badge={ic.badge}
            isSelected={selectedIconId === ic.id}
            onSelect={() => setSelectedIconId(ic.id)}
            onOpen={() => {
              if (ic.action) {
                ic.action();
              } else {
                openWindow(ic.id as WindowId);
              }
            }}
          />
        ))}
      </div>

      {/* WINDOW 1: Guerber_Profile.exe */}
      <Win98Window
        id="profile"
        title={localizedWindows.profile.title}
        icon={windows.profile.icon}
        isOpen={windows.profile.isOpen}
        isMinimized={windows.profile.isMinimized}
        isMaximized={windows.profile.isMaximized}
        isActive={activeWindowId === 'profile'}
        zIndex={windows.profile.zIndex}
        initialX={windows.profile.defaultPosition.x}
        initialY={windows.profile.defaultPosition.y}
        width={windows.profile.defaultSize.width}
        height={windows.profile.defaultSize.height}
        menuItems={isPt ? ['Arquivo', 'Editar', 'Exibir', 'Ajuda'] : ['File', 'Edit', 'View', 'Help']}
        statusText={isPt ? 'Status: 100% Operacional | Disponível para novos desafios' : 'Status: 100% Operational | Open for high-impact challenges'}
        onFocus={() => focusWindow('profile')}
        onClose={() => closeWindow('profile')}
        onMinimize={() => minimizeWindow('profile')}
        onToggleMaximize={() => toggleMaximizeWindow('profile')}
      >
        <ProfileApp />
      </Win98Window>

      {/* WINDOW 2: Performance_Monitor.exe */}
      <Win98Window
        id="perf"
        title={localizedWindows.perf.title}
        icon={windows.perf.icon}
        isOpen={windows.perf.isOpen}
        isMinimized={windows.perf.isMinimized}
        isMaximized={windows.perf.isMaximized}
        isActive={activeWindowId === 'perf'}
        zIndex={windows.perf.zIndex}
        initialX={windows.perf.defaultPosition.x}
        initialY={windows.perf.defaultPosition.y}
        width={windows.perf.defaultSize.width}
        height={windows.perf.defaultSize.height}
        menuItems={isPt ? ['Telemetria', 'Sensores', 'Relatórios', 'Ajuda'] : ['Telemetry', 'Sensors', 'Reports', 'Help']}
        statusText={isPt ? 'Métricas Auditadas: -98% Crashes | -55% RAM | -75% Boot | +$10k Cloud' : 'Audited Metrics: -98% Crashes | -55% RAM | -75% Boot | +$10k Cloud'}
        onFocus={() => focusWindow('perf')}
        onClose={() => closeWindow('perf')}
        onMinimize={() => minimizeWindow('perf')}
        onToggleMaximize={() => toggleMaximizeWindow('perf')}
      >
        <PerformanceMonitorApp />
      </Win98Window>

      {/* WINDOW 3: Meus Projetos / Case Studies */}
      <Win98Window
        id="cases"
        title={localizedWindows.cases.title}
        icon={windows.cases.icon}
        isOpen={windows.cases.isOpen}
        isMinimized={windows.cases.isMinimized}
        isMaximized={windows.cases.isMaximized}
        isActive={activeWindowId === 'cases'}
        zIndex={windows.cases.zIndex}
        initialX={windows.cases.defaultPosition.x}
        initialY={windows.cases.defaultPosition.y}
        width={windows.cases.defaultSize.width}
        height={windows.cases.defaultSize.height}
        menuItems={isPt ? ['Arquivo', 'Exibir', 'Ferramentas', 'Ajuda'] : ['File', 'View', 'Tools', 'Help']}
        statusText={isPt ? '3 Objetos de Produção Encontrados' : '3 Production Objects Found'}
        onFocus={() => focusWindow('cases')}
        onClose={() => closeWindow('cases')}
        onMinimize={() => minimizeWindow('cases')}
        onToggleMaximize={() => toggleMaximizeWindow('cases')}
      >
        <CaseStudiesApp />
      </Win98Window>

      {/* WINDOW 4: MS-DOS Prompt */}
      <Win98Window
        id="cmd"
        title={localizedWindows.cmd.title}
        icon={windows.cmd.icon}
        isOpen={windows.cmd.isOpen}
        isMinimized={windows.cmd.isMinimized}
        isMaximized={windows.cmd.isMaximized}
        isActive={activeWindowId === 'cmd'}
        zIndex={windows.cmd.zIndex}
        initialX={windows.cmd.defaultPosition.x}
        initialY={windows.cmd.defaultPosition.y}
        width={windows.cmd.defaultSize.width}
        height={windows.cmd.defaultSize.height}
        menuItems={[]}
        statusText="Console DOS 16-bit Emulation"
        onFocus={() => focusWindow('cmd')}
        onClose={() => closeWindow('cmd')}
        onMinimize={() => minimizeWindow('cmd')}
        onToggleMaximize={() => toggleMaximizeWindow('cmd')}
      >
        <DosPromptApp onNavigateModern={onNavigateModern} />
      </Win98Window>

      {/* WINDOW 5: Internet Explorer 5.0 */}
      <Win98Window
        id="ie"
        title={localizedWindows.ie.title}
        icon={windows.ie.icon}
        isOpen={windows.ie.isOpen}
        isMinimized={windows.ie.isMinimized}
        isMaximized={windows.ie.isMaximized}
        isActive={activeWindowId === 'ie'}
        zIndex={windows.ie.zIndex}
        initialX={windows.ie.defaultPosition.x}
        initialY={windows.ie.defaultPosition.y}
        width={windows.ie.defaultSize.width}
        height={windows.ie.defaultSize.height}
        menuItems={isPt ? ['Arquivo', 'Editar', 'Exibir', 'Favoritos', 'Ajuda'] : ['File', 'Edit', 'View', 'Favorites', 'Help']}
        statusText={isPt ? 'Conexão com a Internet Estabelecida (T1 1.544 Mbps)' : 'Connected to the Internet (T1 1.544 Mbps)'}
        onFocus={() => focusWindow('ie')}
        onClose={() => closeWindow('ie')}
        onMinimize={() => minimizeWindow('ie')}
        onToggleMaximize={() => toggleMaximizeWindow('ie')}
      >
        <InternetExplorerApp />
      </Win98Window>

      {/* WINDOW 6: Lixeira */}
      <Win98Window
        id="recycle"
        title={localizedWindows.recycle.title}
        icon={windows.recycle.icon}
        isOpen={windows.recycle.isOpen}
        isMinimized={windows.recycle.isMinimized}
        isMaximized={windows.recycle.isMaximized}
        isActive={activeWindowId === 'recycle'}
        zIndex={windows.recycle.zIndex}
        initialX={windows.recycle.defaultPosition.x}
        initialY={windows.recycle.defaultPosition.y}
        width={windows.recycle.defaultSize.width}
        height={windows.recycle.defaultSize.height}
        menuItems={isPt ? ['Arquivo', 'Editar', 'Exibir', 'Ajuda'] : ['File', 'Edit', 'View', 'Help']}
        statusText={isPt ? '0 itens na Lixeira' : '0 items in Recycle Bin'}
        onFocus={() => focusWindow('recycle')}
        onClose={() => closeWindow('recycle')}
        onMinimize={() => minimizeWindow('recycle')}
        onToggleMaximize={() => toggleMaximizeWindow('recycle')}
      >
        <RecycleBinApp />
      </Win98Window>

      {/* Start Menu */}
      <Win98StartMenu
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onOpenWindow={openWindow}
        onShutdown={() => setShutdownActive(true)}
        onNavigateModern={onNavigateModern}
      />

      {/* Taskbar */}
      <Win98Taskbar
        windows={localizedWindows}
        activeWindowId={activeWindowId}
        startMenuOpen={startMenuOpen}
        crtEnabled={crtEnabled}
        onToggleStartMenu={() => setStartMenuOpen(!startMenuOpen)}
        onToggleWindow={toggleWindowFromTaskbar}
        onToggleCrt={() => setCrtEnabled(!crtEnabled)}
        onNavigateModern={onNavigateModern}
      />
    </div>
  );
};
