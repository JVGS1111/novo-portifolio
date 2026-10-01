import React from 'react';
import { Shield, Clock, Bookmark } from 'lucide-react';
import { type XboxTranslationType } from './xboxTranslations';

interface XboxCareerEepromProps {
  t: XboxTranslationType;
  isPt?: boolean;
}

export const XboxCareerEeprom: React.FC<XboxCareerEepromProps> = ({ t }) => {
  return (
    <section id="eeprom" className="relative w-full py-10 px-4 sm:px-6 font-mono select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#00ff55]/30 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#00ff55] animate-pulse" />
            <h2 className="text-xs sm:text-sm font-bold text-[#00ff55] tracking-widest">
              {t.eeprom.sectionTag}
            </h2>
          </div>
          <div className="text-[10px] text-zinc-400 flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#00ff66]" />
            <span className="text-[#88ffa8]">{t.eeprom.integrityNotice}</span>
          </div>
        </div>

        {/* 4 EEPROM Memory Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.eeprom.sectors.map((sector, index) => {
            const isActive = index === 0;

            return (
              <div
                key={sector.id}
                className={`flex flex-col justify-between rounded-xl p-5 border relative overflow-hidden transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-b from-[#02240e]/95 via-[#011408]/95 to-[#000803] border-[#00ff55] shadow-[0_0_25px_rgba(0,255,85,0.2)]'
                    : 'bg-[#020d06]/80 border-zinc-800 hover:border-[#00ff55]/50'
                }`}
              >
                {/* Copper Data Bus Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isActive ? 'from-[#00ff55] via-[#cc6633] to-[#00ff55]' : 'from-transparent via-[#cc6633]/60 to-transparent'
                  }`}
                />

                <div>
                  {/* Period Badge & Clock Speed */}
                  <div className="flex items-center justify-between gap-2 mb-2 text-[10px]">
                    <span
                      className={`px-2 py-0.5 rounded font-bold ${
                        isActive
                          ? 'bg-[#00ff55] text-black shadow-[0_0_8px_#00ff55]'
                          : 'bg-[#011e0b] text-[#88ffa8] border border-[#00ff55]/30'
                      }`}
                    >
                      {sector.period}
                    </span>
                    <span className="text-zinc-500 font-bold">SECTOR 0{index + 1}</span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-sm sm:text-base font-black text-white tracking-wide mb-1">
                    {sector.company}
                  </h3>

                  {/* Role Title */}
                  <div className="text-xs font-bold text-[#00ff55] mb-3">
                    {sector.role}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
                    {sector.description}
                  </p>
                </div>

                {/* Clock Bus & Status Footer */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[9px] text-zinc-400">
                  <div className="flex items-center gap-1.5 text-[#00ff66]">
                    <Clock className="w-3 h-3" />
                    <span>{sector.clock}</span>
                  </div>
                  <span className="text-[#88ffa8]">100% PASS</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
