import React, { useState, useEffect } from 'react';
import { NervWorldSelector } from './NervWorldSelector';
import type { NervContent } from './nervTranslations';

interface NervTopNavProps {
  content: NervContent;
  lang: 'en' | 'pt';
  onToggleLang: () => void;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const NervTopNav: React.FC<NervTopNavProps> = ({
  content,
  lang,
  onToggleLang,
  activeSection,
  onSelectSection
}) => {
  const [timeString, setTimeString] = useState('');
  const [timezoneMode, setTimezoneMode] = useState<'JST' | 'BRT'>('JST');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // JST is UTC+9, BRT is UTC-3
      const timeFormatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: timezoneMode === 'JST' ? 'Asia/Tokyo' : 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setTimeString(timeFormatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezoneMode]);

  const navItems = [
    { id: 'home', label: content.header.nav.home },
    { id: 'projects', label: content.header.nav.projects },
    { id: 'experience', label: content.header.nav.experience },
    { id: 'skills', label: content.header.nav.skills },
    { id: 'about', label: content.header.nav.about },
    { id: 'contact', label: content.header.nav.contact }
  ];

  return (
    <header className="relative w-full z-40 bg-[#0E1015]/95 border-b border-[#2C323E] backdrop-blur-md font-mono select-none">
      {/* Top thin hazard bar */}
      <div
        className="h-[2px] w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #FF1801, #FF1801 16px, #181c24 16px, #181c24 32px)'
        }}
      />

      <div className="w-full px-3 lg:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Left Side: Brand and Engineer Identity */}
        <div className="flex items-center gap-3 lg:gap-5 min-w-0">
          {/* NERV Emblem with motto */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => onSelectSection('home')}>
            <div className="w-8 h-8 relative flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,24,1,0.5)]">
                {/* Stylized serrated red fig leaf */}
                <path
                  d="M50 15 C45 25 35 25 30 35 C25 45 15 48 20 62 C25 72 32 75 35 85 C42 80 48 85 50 95 C52 85 58 80 65 85 C68 75 75 72 80 62 C85 48 75 45 70 35 C65 25 55 25 50 15 Z"
                  fill="#FF1801"
                />
                {/* Stem / cut */}
                <path d="M50 15 L50 92" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M50 45 L32 38" stroke="#FFFFFF" strokeWidth="1.5" />
                <path d="M50 60 L28 58" stroke="#FFFFFF" strokeWidth="1.5" />
                <path d="M50 50 L68 42" stroke="#FFFFFF" strokeWidth="1.5" />
                <path d="M50 65 L72 62" stroke="#FFFFFF" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[13px] font-black tracking-widest text-[#FF1801] leading-none">
                NERV
              </span>
              <span className="text-[6.5px] text-zinc-400 font-mono tracking-tight leading-tight uppercase">
                GOD'S IN HIS HEAVEN. ALL'S RIGHT WITH THE WORLD.
              </span>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="h-6 w-[1px] bg-zinc-700 hidden sm:block" />

          {/* Engineer Name & Japanese Subtitle */}
          <div className="flex flex-col min-w-0">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-zinc-100 truncate">
              {content.header.engineerName}
            </span>
            <span className="text-[10px] text-zinc-400 tracking-wider">
              {content.header.japaneseRole}
            </span>
          </div>
        </div>

        {/* Center: Navigation Menu Tabs */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectSection(item.id)}
                className={`px-3 py-1 text-xs tracking-wider transition-all relative font-medium ${
                  isActive
                    ? 'text-white bg-[#FF1801]/20 font-bold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF1801] shadow-[0_0_8px_#FF1801]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Side: World Selector, Lang Toggle, and Tokyo-3 Clock */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          {/* World Selector */}
          <NervWorldSelector lang={lang} />

          {/* Language Toggle */}
          <button
            type="button"
            onClick={onToggleLang}
            className="px-2 py-1 text-xs border border-zinc-700 bg-black/60 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors tracking-wider flex items-center gap-1"
            title="Toggle Language"
          >
            {content.header.toggleLang}
          </button>

          {/* Local Tokyo-3 Clock */}
          <div
            onClick={() => setTimezoneMode((prev) => (prev === 'JST' ? 'BRT' : 'JST'))}
            className="hidden md:flex flex-col items-end cursor-pointer px-2 py-0.5 border border-zinc-800 bg-black/40 hover:border-red-600/50 transition-colors"
            title="Click to switch Tokyo-3 (JST) / São Paulo (BRT)"
          >
            <div className="text-[8.5px] text-zinc-400 tracking-widest flex items-center gap-1 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              TOKYO-3 ({timezoneMode})
            </div>
            <div className="text-xs font-bold text-red-400 tracking-widest font-mono">
              {timeString || '11:24:36'}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
