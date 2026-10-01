import React from 'react';
import type { NervContent } from './nervTranslations';

interface NervPersonalTerminalProps {
  content: NervContent;
  onViewProjects: () => void;
  onOpenCv: () => void;
}

export const NervPersonalTerminal: React.FC<NervPersonalTerminalProps> = ({
  content,
  onViewProjects,
  onOpenCv
}) => {
  const { terminal } = content;

  return (
    <div className="relative w-full max-w-[420px] lg:max-w-[440px] xl:max-w-[460px] bg-[#EAE8E3] text-[#121316] p-5 sm:p-6 md:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.5)] border-r-2 border-b-2 border-[#D2CFC7] font-mono select-none flex flex-col justify-between z-20">
      {/* Decorative Red corner crosshairs & technical registration marks */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#FF1801]" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#FF1801]" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#FF1801]" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#FF1801]" />

      {/* Header Info: Personal Terminal / User */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-[11px] font-bold text-zinc-600 tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#FF1801] rounded-full inline-block" />
            {terminal.personalTerminal}
          </span>
          <span className="text-[#FF1801] font-mono font-black">{terminal.userTag}</span>
        </div>
      </div>

      {/* Monumental Japanese Title */}
      <div className="mb-2">
        <h1 className="text-4xl sm:text-5xl md:text-[52px] font-black tracking-tighter leading-[1.05] text-[#111113] font-serif">
          <div>{terminal.softwareKatakana}</div>
          <div>{terminal.engineerKatakana}</div>
        </h1>
      </div>

      {/* Subtitle in Red: João Vinícius Guerber */}
      <div className="mb-3">
        <h2 className="text-base sm:text-lg font-black tracking-widest text-[#FF1801] uppercase font-mono">
          {terminal.fullName}
        </h2>
      </div>

      {/* Japanese & Western Motto */}
      <div className="mb-4 space-y-0.5 border-l-2 border-[#FF1801] pl-2.5">
        <div className="text-xs sm:text-sm font-bold text-zinc-900 tracking-wider">
          {terminal.japaneseMotto}
        </div>
        <div className="text-[9.5px] sm:text-[10px] font-bold tracking-widest text-zinc-600 uppercase font-mono">
          {terminal.englishMotto}
        </div>
      </div>

      {/* Description Paragraph */}
      <p className="text-[12px] sm:text-[13px] leading-relaxed text-zinc-700 font-sans mb-6">
        {terminal.bioParagraph}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Primary Button: View Projects */}
        <button
          type="button"
          onClick={onViewProjects}
          className="flex-1 min-w-[140px] px-4 py-2.5 bg-[#FF1801] hover:bg-[#d81501] text-white text-xs sm:text-sm font-bold tracking-wider flex items-center justify-between shadow-[0_4px_12px_rgba(255,24,1,0.35)] transition-all cursor-pointer group"
        >
          <span>{terminal.btnViewProjects}</span>
          <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            ↗
          </span>
        </button>

        {/* Secondary Button: Download CV */}
        <button
          type="button"
          onClick={onOpenCv}
          className="px-4 py-2.5 bg-[#F0EEE9] hover:bg-white text-zinc-900 border border-zinc-400 hover:border-zinc-800 text-xs sm:text-sm font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer"
        >
          <span>{terminal.btnDownloadCv}</span>
          <span>——</span>
        </button>
      </div>

      {/* Core Skills Box */}
      <div className="pt-3 border-t border-zinc-300">
        {/* Core Skills Header with diagonal stripes */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-3 border border-red-600/70"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #FF1801, #FF1801 3px, #000 3px, #000 6px)'
              }}
            />
            <span className="text-[11px] font-black tracking-wider text-[#111113]">
              {terminal.coreSkillsTitle}
            </span>
            <span className="text-[10px] text-zinc-500 font-medium">
              {terminal.coreSkillsKanji}
            </span>
          </div>
          <span className="text-[#FF1801] text-xs font-bold">+</span>
        </div>

        {/* Skills 2-Column List */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] sm:text-[11.5px] font-semibold text-zinc-800">
          {terminal.coreSkills.map((skill) => (
            <div key={skill} className="flex items-center gap-1.5 truncate">
              <span className="w-1 h-1 bg-[#FF1801] shrink-0" />
              <span className="truncate">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
