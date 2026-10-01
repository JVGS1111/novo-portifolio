import React from 'react';
import { XboxWorldSelector } from './XboxWorldSelector';
import { useLanguage } from '../../i18n';
import jewelMedallionUrl from '../../assets/xbox_jewel_medallion.png';
import { type XboxTranslationType } from './xboxTranslations';

interface XboxDashboardMastheadProps {
  t: XboxTranslationType;
  isPt: boolean;
}

export const XboxDashboardMasthead: React.FC<XboxDashboardMastheadProps> = ({ t, isPt }) => {
  const { setLanguage } = useLanguage();

  return (
    <header className="w-full bg-[#020b05]/95 border-b border-[#00ff55]/30 shadow-[0_4px_24px_rgba(0,255,85,0.12)] backdrop-blur-md sticky top-0 z-40 px-3 sm:px-6 py-2.5 font-mono select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Jewel & BIOS Gamertag Info */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#00ff55] shadow-[0_0_10px_#00ff55] flex-shrink-0">
              <img src={jewelMedallionUrl} alt="Xbox Jewel" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#00ff55]/15 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#00ff55] tracking-wider flex items-center gap-2">
                <span>{t.meta.biosVersion}</span>
              </div>
              <div className="text-[9px] text-[#88ffa8] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff55] animate-ping" />
                <span>{t.meta.xboxLiveStatus}</span>
                <span className="text-zinc-600">|</span>
                <span className="text-white font-bold">{t.meta.gamertag}</span>
              </div>
            </div>
          </div>

          {/* Mobile World Selector on right */}
          <div className="md:hidden">
            <XboxWorldSelector variant="masthead" />
          </div>
        </div>

        {/* Center: Live Memory Blocks Gauge & Audio/Temp Telemetry */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 text-[10.5px] font-bold text-[#88ffa8]">
            <span className="text-zinc-400">{t.meta.memoryBlocksLabel}:</span>
            <span className="text-[#00ff55]">{t.meta.memoryBlocksValue}</span>
            <div className="flex gap-0.5 ml-1">
              {[...Array(12)].map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-2.5 rounded-xs ${
                    i < 10 ? 'bg-[#00ff55] shadow-[0_0_4px_#00ff55]' : 'bg-[#003814] border border-[#00ff55]/30'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-[9px] text-zinc-400 flex items-center gap-2 mt-0.5">
            <span>{t.meta.audioSpec}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-[#00ff66]">{t.meta.tempSpec}</span>
            <span className="text-zinc-600">|</span>
            <span>{t.meta.fpsSpec}</span>
          </div>
        </div>

        {/* Right: Language Switcher Pill & Desktop World Selector */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
          {/* Bilingual Language Pill (EN Default) */}
          <div className="flex items-center p-0.5 rounded-full bg-[#011408] border border-[#00ff55]/40 shadow-[0_0_10px_rgba(0,255,85,0.15)] text-[10.5px]">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full font-bold transition-all cursor-pointer ${
                !isPt
                  ? 'bg-[#00ff55] text-black shadow-[0_0_8px_#00ff55]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              🇺🇸 EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={`px-2.5 py-1 rounded-full font-bold transition-all cursor-pointer ${
                isPt
                  ? 'bg-[#00ff55] text-black shadow-[0_0_8px_#00ff55]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              🇧🇷 PT
            </button>
          </div>

          {/* Desktop World Selector */}
          <div className="hidden md:block">
            <XboxWorldSelector variant="masthead" />
          </div>
        </div>
      </div>
    </header>
  );
};
