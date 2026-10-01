import React from 'react';
import { Terminal, Cpu, Cloud } from 'lucide-react';
import { XboxChassisCanvas } from './XboxChassisCanvas';
import { type XboxTranslationType } from './xboxTranslations';

interface XboxChassisHeroProps {
  t: XboxTranslationType;
  onNavigateSection: (sectionId: string) => void;
  isPt: boolean;
}

export const XboxChassisHero: React.FC<XboxChassisHeroProps> = ({
  t,
  onNavigateSection,
  isPt
}) => {
  return (
    <section id="chassis" className="relative w-full py-8 lg:py-12 px-4 sm:px-6 font-mono select-none">
      <div className="max-w-7xl mx-auto">
        {/* Top Bio-Mechanical Header Bar */}
        <div className="flex items-center justify-between gap-2 border-b border-[#00ff55]/30 pb-2 mb-6 text-[10px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00ff55] animate-pulse" />
            <span className="text-[#00ff55] font-bold tracking-widest">
              SECTOR 00 // HARDWARE CHASSIS DIAGNOSTIC DECK
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>MODEL: XBOX-TRANSLUCENT-GREEN-Y2K</span>
            <span className="text-zinc-600">|</span>
            <span className="text-[#88ffa8]">POWER: 100W NOMINAL</span>
          </div>
        </div>

        {/* Main Grid: Asymmetrical Bio-Mechanical Cockpit Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column (5 Cols): Architect Bio-Mechanical Profile Pod */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#021408]/90 via-[#010c05]/95 to-[#000603] border border-[#00ff55]/40 shadow-[0_0_35px_rgba(0,255,85,0.12)] relative overflow-hidden">
            {/* Ambient Copper Bus Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#cc6633] to-transparent opacity-80" />

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff55]/15 border border-[#00ff55]/40 text-[#00ff55] text-[10px] font-bold tracking-wider mb-4 shadow-[0_0_12px_rgba(0,255,85,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff55] animate-ping" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Title & Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 flex flex-col">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#88ffa8] to-[#00ff55] drop-shadow-[0_0_18px_rgba(0,255,85,0.4)]">
                  {t.hero.name}
                </span>
              </h1>

              <div className="text-xs sm:text-sm font-bold text-[#00ff55] tracking-wide mb-4">
                {t.hero.role}
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed mb-6 font-sans">
                {t.hero.summary}
              </p>

              {/* Three Bio-Mechanical Core Runtimes */}
              <div className="space-y-2.5 mb-6">
                {/* Core 01 */}
                <div className="p-3 rounded-xl bg-black/60 border border-[#00ff55]/20 hover:border-[#00ff55]/50 transition-all group">
                  <div className="flex items-center gap-2 text-[10.5px] font-bold text-[#00ff55] mb-1">
                    <Terminal className="w-3.5 h-3.5 text-[#00ff55] group-hover:scale-110 transition-transform" />
                    <span>{t.hero.core01Title}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-sans leading-snug">
                    {t.hero.core01Desc}
                  </p>
                </div>

                {/* Core 02 */}
                <div className="p-3 rounded-xl bg-black/60 border border-[#00ffee]/20 hover:border-[#00ffee]/50 transition-all group">
                  <div className="flex items-center gap-2 text-[10.5px] font-bold text-[#00ffee] mb-1">
                    <Cpu className="w-3.5 h-3.5 text-[#00ffee] group-hover:scale-110 transition-transform" />
                    <span>{t.hero.core02Title}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-sans leading-snug">
                    {t.hero.core02Desc}
                  </p>
                </div>

                {/* Core 03 */}
                <div className="p-3 rounded-xl bg-black/60 border border-[#ffaa00]/20 hover:border-[#ffaa00]/50 transition-all group">
                  <div className="flex items-center gap-2 text-[10.5px] font-bold text-[#ffaa00] mb-1">
                    <Cloud className="w-3.5 h-3.5 text-[#ffaa00] group-hover:scale-110 transition-transform" />
                    <span>{t.hero.core03Title}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-sans leading-snug">
                    {t.hero.core03Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Controller Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-[#00ff55]/20">
              <button
                type="button"
                onClick={() => onNavigateSection('disc-bay')}
                className="w-full py-2.5 px-3 rounded-lg bg-[#00ff55] text-black font-bold text-xs hover:bg-[#33ff77] hover:shadow-[0_0_18px_#00ff55] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>{t.hero.btnExecute}</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateSection('memory')}
                className="w-full py-2.5 px-3 rounded-lg bg-[#003814] border border-[#00ff55]/50 text-[#88ffa8] hover:text-white hover:border-[#00ff55] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>{t.hero.btnInspect}</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateSection('comm-dock')}
                className="w-full py-2.5 px-3 rounded-lg bg-black/70 border border-zinc-700 text-zinc-300 hover:border-[#00ff55]/60 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>{t.hero.btnComm}</span>
              </button>
            </div>
          </div>

          {/* Right Column (7 Cols): The Interactive 3D Translucent Plastic Chassis ("Caixa Translúcida") */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <XboxChassisCanvas isPt={isPt} />
          </div>
        </div>
      </div>
    </section>
  );
};
