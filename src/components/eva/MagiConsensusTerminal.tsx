import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EvaEpisodeContent } from './evaTranslations';
import { CheckCircle2 } from 'lucide-react';

interface MagiConsensusTerminalProps {
  content: EvaEpisodeContent['magi'];
  lang?: 'en' | 'pt';
}

export const MagiConsensusTerminal: React.FC<MagiConsensusTerminalProps> = ({ content }) => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [isDeliberating, setIsDeliberating] = useState(false);

  const activeQuery = content.queries[activeQueryIndex];

  const handleSelectQuery = (index: number) => {
    if (index === activeQueryIndex) return;
    setIsDeliberating(true);
    setActiveQueryIndex(index);
    setTimeout(() => {
      setIsDeliberating(false);
    }, 450);
  };

  return (
    <div className="relative border border-[#ff9900]/40 bg-black/95 p-4 md:p-8 overflow-hidden select-none">
      {/* Background Subtle Watermark */}
      <div className="absolute top-2 right-4 text-7xl md:text-9xl font-eva-title font-bold text-zinc-900 pointer-events-none select-none">
        合議
      </div>

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#ff9900]/40 pb-4 mb-6 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-eva-mono text-[#ff9900] tracking-widest uppercase">
            <span className="w-2.5 h-2.5 bg-[#ff9900] inline-block animate-pulse" />
            <span>{content.sectionTag}</span>
          </div>
          <h3 className="font-eva-title text-2xl md:text-3xl text-white font-bold tracking-tight mt-1">
            {content.sectionTitle}
          </h3>
        </div>

        {/* Global Verdict Badge */}
        <div className="flex items-center gap-3 bg-[#ff5500]/10 border border-[#ff5500]/50 px-3 py-1.5 self-start sm:self-auto">
          <CheckCircle2 size={16} className="text-[#00ff66]" />
          <span className="font-eva-mono text-xs md:text-sm text-white font-bold tracking-wider">
            {content.triadLabel}
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-zinc-400 text-xs md:text-sm font-eva-mono leading-relaxed mb-6 max-w-3xl">
        {content.sectionSubtitle}
      </p>

      {/* Query Selector Tabs */}
      <div className="mb-8">
        <label className="block text-[11px] font-eva-mono text-zinc-500 uppercase tracking-widest mb-3">
          {content.selectQueryPrompt}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {content.queries.map((q, idx) => {
            const isSelected = idx === activeQueryIndex;
            return (
              <button
                key={q.id}
                onClick={() => handleSelectQuery(idx)}
                className={`text-left p-3 border font-eva-mono text-xs transition-all relative ${
                  isSelected
                    ? 'border-[#ff9900] bg-[#ff9900]/15 text-white shadow-[0_0_15px_rgba(255,153,0,0.15)]'
                    : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] tracking-wider ${isSelected ? 'text-[#ff9900]' : 'text-zinc-500'}`}>
                    QUERY [0{idx + 1}]
                  </span>
                  {isSelected && (
                    <span className="text-[10px] text-[#00ff66] font-bold">
                      RESOLVED
                    </span>
                  )}
                </div>
                <div className="line-clamp-2 font-medium">{q.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deliberation Chamber: The 3 MAGI Nodes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative">
        <AnimatePresence mode="wait">
          {/* Node 1: MELCHIOR */}
          <motion.div
            key={`melchior-${activeQuery.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border border-[#ff9900]/30 bg-black/80 p-5 flex flex-col justify-between relative group"
          >
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-20 text-zinc-700 font-eva-title text-xl flex items-center justify-center">
              壱
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                <div>
                  <div className="text-[#ff9900] font-eva-mono font-bold text-sm tracking-wider">
                    {content.melchiorName}
                  </div>
                  <div className="text-[10px] font-eva-mono text-zinc-500 tracking-wider">
                    {content.melchiorPersona}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-eva-mono text-[#00ff66] border border-[#00ff66]/40 px-2 py-0.5 bg-[#00ff66]/10 font-bold">
                    {isDeliberating ? content.statusDeliberating : content.statusAgree}
                  </span>
                </div>
              </div>

              <p className="text-xs font-eva-mono text-zinc-300 leading-relaxed min-h-[96px]">
                {activeQuery.melchiorVerdict}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] font-eva-mono text-zinc-500">
              <span>CORE ARCH: C++ JSI / AST</span>
              <span>SYNAPSE: 99.8%</span>
            </div>
          </motion.div>

          {/* Node 2: BALTHASAR */}
          <motion.div
            key={`balthasar-${activeQuery.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="border border-[#ff9900]/30 bg-black/80 p-5 flex flex-col justify-between relative group"
          >
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-20 text-zinc-700 font-eva-title text-xl flex items-center justify-center">
              弐
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                <div>
                  <div className="text-[#ff9900] font-eva-mono font-bold text-sm tracking-wider">
                    {content.balthasarName}
                  </div>
                  <div className="text-[10px] font-eva-mono text-zinc-500 tracking-wider">
                    {content.balthasarPersona}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-eva-mono text-[#00ff66] border border-[#00ff66]/40 px-2 py-0.5 bg-[#00ff66]/10 font-bold">
                    {isDeliberating ? content.statusDeliberating : content.statusAgree}
                  </span>
                </div>
              </div>

              <p className="text-xs font-eva-mono text-zinc-300 leading-relaxed min-h-[96px]">
                {activeQuery.balthasarVerdict}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] font-eva-mono text-zinc-500">
              <span>HUMAN FACTORS: EMPATHY / UX</span>
              <span>SYNAPSE: 99.4%</span>
            </div>
          </motion.div>

          {/* Node 3: CASPER */}
          <motion.div
            key={`casper-${activeQuery.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-[#ff9900]/30 bg-black/80 p-5 flex flex-col justify-between relative group"
          >
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-20 text-zinc-700 font-eva-title text-xl flex items-center justify-center">
              参
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                <div>
                  <div className="text-[#ff9900] font-eva-mono font-bold text-sm tracking-wider">
                    {content.casperName}
                  </div>
                  <div className="text-[10px] font-eva-mono text-zinc-500 tracking-wider">
                    {content.casperPersona}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-eva-mono text-[#00ff66] border border-[#00ff66]/40 px-2 py-0.5 bg-[#00ff66]/10 font-bold">
                    {isDeliberating ? content.statusDeliberating : content.statusAgree}
                  </span>
                </div>
              </div>

              <p className="text-xs font-eva-mono text-zinc-300 leading-relaxed min-h-[96px]">
                {activeQuery.casperVerdict}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] font-eva-mono text-zinc-500">
              <span>BUSINESS IMPACT: PRAGMATISM</span>
              <span>SYNAPSE: 99.6%</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Consensus Footer Banner */}
      <div className="mt-6 border border-[#00ff66]/40 bg-[#00ff66]/5 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-eva-mono">
        <div className="flex items-center gap-2 text-[#00ff66] font-bold">
          <CheckCircle2 size={16} />
          <span>{content.unanimousResolution}</span>
        </div>
        <div className="text-zinc-400 text-[11px]">
          MAGI CLUSTER CODE: <span className="text-white">NERV-TOKYO3-SYNC-9942</span>
        </div>
      </div>
    </div>
  );
};
