import React from 'react';
import type { NervContent } from './nervTranslations';

interface NervLeftTabBarProps {
  content: NervContent;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const NervLeftTabBar: React.FC<NervLeftTabBarProps> = ({
  content: _content,
  activeSection,
  onSelectSection
}) => {
  const tabs = [
    { id: 'home', num: '01', title: 'HOME', kanji: 'ホーム' },
    { id: 'projects', num: '02', title: 'PROJECTS', kanji: 'プロジェクト' },
    { id: 'experience', num: '03', title: 'EXPERIENCE', kanji: '経験' },
    { id: 'skills', num: '04', title: 'SKILLS', kanji: 'スキル' },
    { id: 'about', num: '05', title: 'ABOUT', kanji: '概要' },
    { id: 'contact', num: '06', title: 'CONTACT', kanji: '連絡' }
  ];

  return (
    <aside className="w-20 md:w-24 shrink-0 flex flex-col justify-between border-r border-[#2C323E] bg-[#0A0C10] font-mono select-none z-20">
      {/* Top Section: NERV Crest */}
      <div className="p-3 border-b border-[#2C323E] flex flex-col items-center text-center">
        <div className="w-10 h-10 relative flex items-center justify-center mb-1">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,24,1,0.6)]">
            <path
              d="M50 15 C45 25 35 25 30 35 C25 45 15 48 20 62 C25 72 32 75 35 85 C42 80 48 85 50 95 C52 85 58 80 65 85 C68 75 75 72 80 62 C85 48 75 45 70 35 C65 25 55 25 50 15 Z"
              fill="#FF1801"
            />
            <path d="M50 15 L50 92" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M50 45 L32 38" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M50 60 L28 58" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M50 50 L68 42" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M50 65 L72 62" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="text-[11px] font-black text-[#FF1801] tracking-widest leading-none">
          NERV
        </span>
        <div className="text-[6px] text-zinc-500 tracking-tighter leading-tight mt-1 hidden md:block">
          GOD'S IN HIS HEAVEN.
          <br />
          ALL'S RIGHT WITH THE WORLD.
        </div>
      </div>

      {/* Middle Section: Numerical Tabs (01 - 06) */}
      <div className="flex-1 flex flex-col justify-start py-2 space-y-0.5">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectSection(tab.id)}
              className={`w-full py-3 px-2 text-left relative transition-all group flex flex-col items-start ${
                isActive
                  ? 'bg-[#FF1801] text-black font-bold shadow-[inset_0_0_12px_rgba(0,0,0,0.3)]'
                  : 'bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              {/* Active Indicator pip */}
              {isActive && (
                <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-black" />
              )}

              <span
                className={`text-sm md:text-base font-black tracking-wider leading-none ${
                  isActive ? 'text-black' : 'text-zinc-500 group-hover:text-red-400'
                }`}
              >
                {tab.num}
              </span>
              <span
                className={`text-[9px] md:text-[10px] tracking-wider font-bold mt-0.5 leading-tight ${
                  isActive ? 'text-black' : 'text-zinc-300'
                }`}
              >
                {tab.title}
              </span>
              <span
                className={`text-[8px] md:text-[9px] leading-tight ${
                  isActive ? 'text-black/80 font-medium' : 'text-zinc-500'
                }`}
              >
                {tab.kanji}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Section: Hazard stripes & Technological Research Division */}
      <div className="p-2 border-t border-[#2C323E] flex flex-col items-center">
        {/* Warning Hazard Bar */}
        <div
          className="h-4 w-full mb-2 border border-red-600/60"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #FF1801, #FF1801 6px, #000000 6px, #000000 12px)'
          }}
        />

        <div className="text-[7.5px] md:text-[8px] text-zinc-400 tracking-wider text-center uppercase font-mono leading-tight">
          NERV
          <br />
          TECHNOLOGICAL
          <br />
          RESEARCH
          <br />
          DIVISION
        </div>
      </div>
    </aside>
  );
};
