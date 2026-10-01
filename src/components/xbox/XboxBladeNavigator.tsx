import React from 'react';
import { motion } from 'framer-motion';
import { type XboxTranslationType } from './xboxTranslations';

interface XboxBladeNavigatorProps {
  t: XboxTranslationType;
  activeSector: string;
  onSelectSector: (sectorId: string) => void;
  isPt: boolean;
}

export const XboxBladeNavigator: React.FC<XboxBladeNavigatorProps> = ({
  t,
  activeSector,
  onSelectSector,
  isPt
}) => {
  const blades = [
    { id: 'chassis', label: t.blades.chassis, num: '00', keyHint: '0' },
    { id: 'memory', label: t.blades.memory, num: '01', keyHint: '1' },
    { id: 'disc-bay', label: t.blades.discBay, num: '02', keyHint: '2' },
    { id: 'silicon', label: t.blades.silicon, num: '03', keyHint: '3' },
    { id: 'eeprom', label: t.blades.eeprom, num: '04', keyHint: '4' },
    { id: 'comm-dock', label: t.blades.commDock, num: '05', keyHint: '5' }
  ];

  return (
    <nav className="w-full bg-[#011206]/90 border-b border-[#00ff55]/30 backdrop-blur-md sticky top-[53px] z-30 px-3 sm:px-6 py-2 font-mono select-none overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1 sm:gap-2 min-w-max">
        <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 mr-2 hidden xl:flex">
          <span className="text-[#00ff55] font-bold">DASHBOARD CHANNELS:</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 w-full justify-between sm:justify-start">
          {blades.map((blade) => {
            const isActive = activeSector === blade.id;

            return (
              <button
                key={blade.id}
                type="button"
                onClick={() => onSelectSector(blade.id)}
                className={`relative px-3 sm:px-4 py-1.5 rounded-lg border text-xs transition-all flex items-center gap-2 cursor-pointer group ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00ff55]/25 via-[#00ff55]/20 to-[#00ff55]/10 border-[#00ff55] text-white shadow-[0_0_16px_rgba(0,255,85,0.35)]'
                    : 'bg-[#020b05]/60 border-zinc-800 text-zinc-400 hover:border-[#00ff55]/50 hover:bg-[#00ff55]/10 hover:text-white'
                }`}
              >
                {/* Active Glow Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeBladeGlow"
                    className="absolute inset-0 rounded-lg border-2 border-[#00ff55] shadow-[inset_0_0_12px_rgba(0,255,85,0.3)] pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Number & Key Hint */}
                <span
                  className={`text-[9.5px] px-1 py-0.2 rounded font-bold ${
                    isActive ? 'bg-[#00ff55] text-black' : 'bg-black/60 text-zinc-500 group-hover:text-[#00ff55]'
                  }`}
                >
                  [{blade.num}]
                </span>

                {/* Blade Label */}
                <span className={`text-[11px] font-bold tracking-wider ${isActive ? 'text-[#00ff55]' : ''}`}>
                  {blade.label}
                </span>

                {/* Keyboard Shortcut Cue */}
                <span className="text-[8.5px] text-zinc-600 hidden md:inline group-hover:text-zinc-400">
                  [{blade.keyHint}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Controller Legend Shortcut Hint */}
        <div className="hidden lg:flex items-center gap-2 text-[9.5px] text-zinc-400 bg-black/50 px-2.5 py-1 rounded-md border border-[#00ff55]/20">
          <span className="text-[#00ff55] font-bold">(A)</span> {isPt ? 'SELECIONAR' : 'SELECT'}
          <span className="text-zinc-600">|</span>
          <span className="text-[#00eeff] font-bold">(X)</span> {isPt ? 'RAIO-X' : 'X-RAY'}
          <span className="text-zinc-600">|</span>
          <span className="text-[#ffaa00] font-bold">(Y)</span> COMMS
        </div>
      </div>
    </nav>
  );
};
