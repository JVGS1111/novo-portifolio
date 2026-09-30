import React from 'react';
import type { EvaEpisodeContent } from './evaTranslations';
import { Award, GraduationCap } from 'lucide-react';

interface EvaMagiBankProps {
  synapticBank: EvaEpisodeContent['synapticBank'];
  career: EvaEpisodeContent['career'];
  lang?: 'en' | 'pt';
}

export const EvaMagiBank: React.FC<EvaMagiBankProps> = ({ synapticBank, career }) => {
  return (
    <div className="space-y-8 select-none">
      {/* 1. MAGI Synaptic Matrix (32 Skills) */}
      <div className="border border-[#ff9900]/40 bg-black/95 p-4 md:p-8 relative overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#ff9900]/30 pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-eva-mono text-[#ff9900] tracking-widest uppercase">
            <span className="w-2.5 h-2.5 bg-[#ff9900] inline-block animate-pulse" />
            <span>{synapticBank.sectionTag}</span>
          </div>
          <h3 className="font-eva-title text-2xl md:text-3xl text-white font-bold tracking-tight mt-1">
            {synapticBank.sectionTitle}
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm font-eva-mono mt-1">
            {synapticBank.sectionSubtitle}
          </p>
        </div>

        {/* 4 Category Banks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {synapticBank.categories.map((cat, idx) => (
            <div
              key={cat.name}
              className="border border-zinc-800 bg-zinc-950/70 p-4 relative group hover:border-[#ff9900]/60 transition-colors"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-eva-mono bg-[#ff9900]/20 text-[#ff9900] px-1.5 py-0.5 border border-[#ff9900]/30 font-bold">
                    BANK [0{idx + 1}]
                  </span>
                  <span className="font-eva-mono font-bold text-xs text-white tracking-wider">
                    {cat.name}
                  </span>
                </div>
                <span className="font-eva-title text-zinc-500 text-sm">{cat.kanji}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1.5 text-xs font-eva-mono text-zinc-300 bg-black/60 px-2 py-1.5 border border-zinc-900 group-hover:border-zinc-800"
                  >
                    <span className="text-[#ff5500] text-[10px]">■</span>
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Bar (Copilot Certified & Degree) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
          {/* GitHub Copilot Official */}
          <div className="border border-amber-500/40 bg-amber-500/5 p-4 flex items-start gap-4">
            <div className="p-2 border border-amber-500/60 bg-black text-amber-400">
              <Award size={24} />
            </div>
            <div>
              <div className="text-[10px] font-eva-mono text-amber-500 font-bold tracking-widest uppercase">
                {synapticBank.certIssuer}
              </div>
              <h4 className="font-eva-title text-base font-bold text-white mt-0.5">
                {synapticBank.certTitle}
              </h4>
              <p className="text-xs font-eva-mono text-zinc-400 mt-1">
                {synapticBank.certStatus}
              </p>
            </div>
          </div>

          {/* Software Engineering Degree */}
          <div className="border border-blue-500/40 bg-blue-500/5 p-4 flex items-start gap-4">
            <div className="p-2 border border-blue-500/60 bg-black text-blue-400">
              <GraduationCap size={24} />
            </div>
            <div>
              <div className="text-[10px] font-eva-mono text-blue-400 font-bold tracking-widest uppercase">
                {synapticBank.degreeInstitution}
              </div>
              <h4 className="font-eva-title text-base font-bold text-white mt-0.5">
                {synapticBank.degreeTitle}
              </h4>
              <p className="text-xs font-eva-mono text-zinc-400 mt-1">
                {synapticBank.degreeStatus}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Deployment Chronicle (Career Flight Log) */}
      <div className="border border-[#ff5500]/40 bg-black/95 p-4 md:p-8 relative overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#ff5500]/30 pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-eva-mono text-[#ff5500] tracking-widest uppercase">
            <span className="w-2.5 h-2.5 bg-[#ff5500] inline-block animate-pulse" />
            <span>{career.sectionTag}</span>
          </div>
          <h3 className="font-eva-title text-2xl md:text-3xl text-white font-bold tracking-tight mt-1">
            {career.sectionTitle}
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm font-eva-mono mt-1">
            {career.sectionSubtitle}
          </p>
        </div>

        {/* Timeline Log Entries */}
        <div className="space-y-6">
          {career.timeline.map((entry) => (
            <div
              key={entry.period}
              className="border-l-2 border-[#ff5500] pl-4 md:pl-6 relative py-1"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[#ff5500] ring-4 ring-black" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-eva-mono text-xs font-bold text-[#ff9900]">
                    {entry.period}
                  </span>
                  <span className="text-zinc-600">|</span>
                  <span className="font-eva-mono text-xs text-zinc-400 font-bold uppercase">
                    {entry.unit}
                  </span>
                </div>
                <span className="text-[10px] font-eva-mono text-[#00ff66] bg-[#00ff66]/10 px-2 py-0.5 border border-[#00ff66]/30 self-start sm:self-auto font-semibold">
                  {entry.status}
                </span>
              </div>

              <h4 className="font-eva-latin text-base md:text-lg text-white font-bold mb-2">
                {entry.role}
              </h4>

              <ul className="space-y-1.5">
                {entry.missions.map((mission, mIdx) => (
                  <li
                    key={mIdx}
                    className="text-xs font-eva-mono text-zinc-300 flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-[#ff5500] mt-0.5">▸</span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
