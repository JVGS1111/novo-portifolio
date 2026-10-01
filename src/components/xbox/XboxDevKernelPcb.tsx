import React, { useState } from 'react';
import { Cpu, Award, Sparkles } from 'lucide-react';
import { type XboxTranslationType } from './xboxTranslations';

interface XboxDevKernelPcbProps {
  t: XboxTranslationType;
  isPt?: boolean;
}

export const XboxDevKernelPcb: React.FC<XboxDevKernelPcbProps> = ({ t }) => {
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);

  return (
    <section id="silicon" className="relative w-full py-10 px-4 sm:px-6 font-mono select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#00ff55]/30 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#00ff55] animate-pulse" />
            <h2 className="text-xs sm:text-sm font-bold text-[#00ff55] tracking-widest">
              {t.silicon.sectionTag}
            </h2>
          </div>
          <div className="text-[10px] text-zinc-400 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-[#ffcc00]" />
            <span className="text-[#88ffa8]">{t.silicon.credentialNotice}</span>
          </div>
        </div>

        {/* Silicon Motherboard PCB Schematic Container */}
        <div className="relative rounded-2xl bg-[#020e06]/95 border-2 border-[#00ff55]/40 p-4 sm:p-6 lg:p-8 shadow-[0_0_40px_rgba(0,255,85,0.15)] overflow-hidden">
          {/* Subtle PCB Copper Circuit Traces Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, rgba(0, 255, 85, 0.15) 0%, transparent 70%), linear-gradient(0deg, rgba(204, 102, 51, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 102, 51, 0.1) 1px, transparent 1px)',
              backgroundSize: '100% 100%, 32px 32px, 32px 32px'
            }}
          />

          {/* 4 Hardware Banks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {t.silicon.banks.map((bank) => (
              <div
                key={bank.id}
                className="flex flex-col justify-between rounded-xl bg-black/60 border border-[#00ff55]/30 p-4 relative group hover:border-[#00ff55]/80 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
              >
                {/* Bank Header */}
                <div className="border-b border-[#00ff55]/20 pb-2.5 mb-3">
                  <div className="text-xs font-black text-[#00ff55] tracking-wider flex items-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff55]" />
                    <span>{bank.bankName}</span>
                  </div>
                  <div className="text-[10px] text-zinc-400 font-sans">
                    {bank.subtitle}
                  </div>
                </div>

                {/* 8 SMT Microchip Packages per Bank */}
                <div className="space-y-2">
                  {bank.chips.map((chip) => {
                    const isHovered = hoveredChip === chip.name;

                    return (
                      <div
                        key={chip.name}
                        onMouseEnter={() => setHoveredChip(chip.name)}
                        onMouseLeave={() => setHoveredChip(null)}
                        className={`p-2 rounded-lg border transition-all flex items-center justify-between gap-2 cursor-default ${
                          chip.certified
                            ? 'bg-gradient-to-r from-[#2e1d04] via-[#4d3209] to-[#1f1302] border-[#ffcc00] shadow-[0_0_15px_rgba(255,204,0,0.3)]'
                            : isHovered
                            ? 'bg-[#003814] border-[#00ff55] shadow-[0_0_12px_rgba(0,255,85,0.3)] scale-[1.02]'
                            : 'bg-[#021206]/80 border-zinc-800 hover:border-[#00ff55]/40 text-zinc-300'
                        }`}
                      >
                        {/* Chip Name and Role */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                chip.certified
                                  ? 'bg-[#ffcc00] animate-ping'
                                  : isHovered
                                  ? 'bg-[#00ff55] animate-pulse'
                                  : 'bg-[#008828]'
                              }`}
                            />
                            <span
                              className={`text-[11px] font-bold truncate ${
                                chip.certified
                                  ? 'text-[#ffea75]'
                                  : isHovered
                                  ? 'text-white'
                                  : 'text-[#88ffa8]'
                              }`}
                            >
                              {chip.name}
                            </span>
                          </div>
                          <div className="text-[9px] text-zinc-400 truncate pl-3">
                            {chip.role}
                          </div>
                        </div>

                        {/* Frequency / Status Badge */}
                        <div className="text-right flex-shrink-0">
                          <span
                            className={`text-[8.5px] px-1.5 py-0.5 rounded font-mono font-bold ${
                              chip.certified
                                ? 'bg-[#ffcc00] text-black shadow-[0_0_8px_#ffcc00]'
                                : isHovered
                                ? 'bg-[#00ff55] text-black'
                                : 'bg-[#00240d] text-[#00ff66] border border-[#00ff55]/20'
                            }`}
                          >
                            {chip.freq || 'ACTIVE'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Motherboard Central Bus Status Footer */}
          <div className="mt-6 pt-4 border-t border-[#00ff55]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="text-[#00ff55] font-bold">NORTHBRIDGE BUS: 128-BIT</span>
              <span className="text-zinc-600">|</span>
              <span>MEMORY INTERLEAVE: 4-WAY</span>
              <span className="text-zinc-600">|</span>
              <span className="text-[#88ffa8]">32 CHIPS ONLINE</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#ffcc00]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-bold">CREDENTIAL VERIFIED: GITHUB COPILOT CERTIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
