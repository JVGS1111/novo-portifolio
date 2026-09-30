import React, { useState, useEffect } from 'react';
import type { WindowState, WindowId } from './win98Types';
import { playClickSound, getMuted, setMuted } from './soundEffects';
import { useLanguage } from '../../i18n/LanguageContext';

interface Win98TaskbarProps {
  windows: Record<WindowId, WindowState>;
  activeWindowId: WindowId | null;
  startMenuOpen: boolean;
  crtEnabled: boolean;
  onToggleStartMenu: () => void;
  onToggleWindow: (id: WindowId) => void;
  onToggleCrt: () => void;
  onNavigateModern: () => void;
}

export const Win98Taskbar: React.FC<Win98TaskbarProps> = ({
  windows,
  activeWindowId,
  startMenuOpen,
  crtEnabled,
  onToggleStartMenu,
  onToggleWindow,
  onToggleCrt,
  onNavigateModern
}) => {
  const { language, setLanguage } = useLanguage();
  const [currentTime, setCurrentTime] = useState('');
  const [muted, setMutedState] = useState(getMuted());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString(language === 'pt' ? 'pt-BR' : 'en-US', { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  const handleToggleMute = () => {
    playClickSound();
    const next = !muted;
    setMuted(next);
    setMutedState(next);
  };

  const openWindows = (Object.keys(windows) as WindowId[]).filter(
    (id) => windows[id].isOpen
  );

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[36px] bg-[#C0C0C0] border-t-2 border-t-white z-[9000] flex items-center justify-between px-1 select-none font-['Tahoma',sans-serif]">
      {/* Left side: Start Button & Quick Launch */}
      <div className="flex items-center gap-1.5 h-full py-1">
        {/* Start Button */}
        <button
          type="button"
          onClick={() => {
            playClickSound();
            onToggleStartMenu();
          }}
          className={`h-full px-2 flex items-center gap-1.5 text-xs font-bold text-black border-2 cursor-pointer transition-none ${
            startMenuOpen
              ? 'bg-[#DFDFDF] border-t-black border-l-black border-r-white border-b-white pt-[1px] pl-[1px]'
              : 'bg-[#C0C0C0] border-t-white border-l-white border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white'
          }`}
        >
          {/* Win98 4-color flag */}
          <div className="grid grid-cols-2 gap-[1px] w-3.5 h-3.5 shrink-0">
            <span className="bg-[#EA4335]" />
            <span className="bg-[#4285F4]" />
            <span className="bg-[#FBBC05]" />
            <span className="bg-[#34A853]" />
          </div>
          <span>{language === 'pt' ? 'Iniciar' : 'Start'}</span>
        </button>

        {/* Separator */}
        <div className="w-[2px] h-5 bg-[#808080] border-r border-white mx-0.5" />

        {/* Quick Launch Button to Modern Portfolio */}
        <button
          type="button"
          onClick={() => {
            playClickSound();
            onNavigateModern();
          }}
          className="h-full px-1.5 flex items-center gap-1 bg-[#C0C0C0] hover:bg-slate-200 border border-transparent hover:border-slate-400 rounded-xs text-[10px] text-slate-800 cursor-pointer"
          title={language === 'pt' ? 'Alternar para o Portfólio Moderno 3D' : 'Switch to Modern 3D Portfolio'}
        >
          <span>🚀</span>
          <span className="hidden sm:inline font-bold text-blue-900">
            {language === 'pt' ? 'Portfólio Moderno' : 'Modern Portfolio'}
          </span>
        </button>

        {/* Separator */}
        <div className="w-[2px] h-5 bg-[#808080] border-r border-white mx-0.5" />

        {/* Open Windows Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-[55vw]">
          {openWindows.map((id) => {
            const win = windows[id];
            const isActive = activeWindowId === id && !win.isMinimized;

            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  playClickSound();
                  onToggleWindow(id);
                }}
                className={`h-full min-w-[120px] max-w-[180px] px-2 flex items-center gap-1.5 text-[11px] truncate border-2 cursor-pointer transition-none ${
                  isActive
                    ? 'bg-[#DFDFDF] border-t-black border-l-black border-r-white border-b-white font-bold pt-[1px] pl-[1px]'
                    : 'bg-[#C0C0C0] border-t-white border-l-white border-r-black border-b-black text-black'
                }`}
                title={win.title}
              >
                <span className="text-xs shrink-0">{win.icon}</span>
                <span className="truncate text-left">{win.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right side: System Tray */}
      <div className="flex items-center gap-2 px-2 py-0.5 bg-[#C0C0C0] border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white text-[11px] text-black">
        {/* Language Locale Toggle (Classic Win98 System Tray Taskbar) */}
        <button
          type="button"
          onClick={() => {
            playClickSound();
            setLanguage(language === 'en' ? 'pt' : 'en');
          }}
          className="px-1.5 py-0.5 text-[10px] font-bold border border-t-[#808080] border-l-[#808080] border-r-white border-b-white bg-[#C0C0C0] hover:bg-slate-200 cursor-pointer flex items-center gap-1"
          title={language === 'en' ? 'Switch to Portuguese (PT)' : 'Switch to English (EN)'}
        >
          <span>{language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}</span>
        </button>

        {/* CRT Scanline Toggle */}
        <button
          type="button"
          onClick={() => {
            playClickSound();
            onToggleCrt();
          }}
          className={`px-1 text-[10px] rounded cursor-pointer ${
            crtEnabled ? 'bg-emerald-700 text-white font-bold' : 'text-slate-600 hover:text-black'
          }`}
          title={crtEnabled ? (language === 'pt' ? 'Desativar Efeito CRT' : 'Disable CRT Effect') : (language === 'pt' ? 'Ativar Efeito CRT' : 'Enable CRT Effect')}
        >
          📺 CRT {crtEnabled ? 'ON' : 'OFF'}
        </button>

        {/* Mute Toggle */}
        <button
          type="button"
          onClick={handleToggleMute}
          className="text-xs cursor-pointer hover:opacity-80"
          title={muted ? (language === 'pt' ? 'Desmutar Som' : 'Unmute Sound') : (language === 'pt' ? 'Mutar Som' : 'Mute Sound')}
        >
          {muted ? '🔇' : '🔊'}
        </button>

        {/* Live Clock */}
        <span className="font-mono text-xs font-semibold pl-1">
          {currentTime || '16:58'}
        </span>
      </div>
    </footer>
  );
};
