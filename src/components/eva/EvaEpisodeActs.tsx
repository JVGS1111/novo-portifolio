import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EvaEpisodeContent } from './evaTranslations';
import { AlertTriangle, ShieldCheck, Terminal, Layers } from 'lucide-react';

interface EvaEpisodeActsProps {
  content: EvaEpisodeContent['episodes'];
  lang?: 'en' | 'pt';
}

export const EvaEpisodeActs: React.FC<EvaEpisodeActsProps> = ({ content }) => {
  const [activeEpisodeIdx, setActiveEpisodeIdx] = useState(0);

  const activeEpisode = content.list[activeEpisodeIdx];

  return (
    <div className="relative border border-[#ff5500]/40 bg-black/95 p-4 md:p-8 overflow-hidden select-none">
      {/* Background Japanese Watermark */}
      <div className="absolute top-2 right-6 text-7xl md:text-9xl font-eva-title font-bold text-zinc-900 pointer-events-none select-none">
        作戦
      </div>

      {/* Header */}
      <div className="border-b border-[#ff5500]/40 pb-4 mb-6">
        <div className="flex items-center gap-2 text-xs font-eva-mono text-[#ff5500] tracking-widest uppercase">
          <span className="w-2.5 h-2.5 bg-[#ff5500] inline-block animate-pulse" />
          <span>{content.sectionTag}</span>
        </div>
        <h3 className="font-eva-title text-2xl md:text-4xl text-white font-bold tracking-tight mt-1">
          {content.sectionTitle}
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm font-eva-mono mt-1">
          {content.sectionSubtitle}
        </p>
      </div>

      {/* Episode Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
        {content.list.map((ep, idx) => {
          const isSelected = idx === activeEpisodeIdx;
          return (
            <button
              key={ep.number}
              onClick={() => setActiveEpisodeIdx(idx)}
              className={`p-3 text-left border font-eva-mono transition-all relative ${
                isSelected
                  ? 'border-[#ff5500] bg-[#ff5500]/15 text-white shadow-[0_0_15px_rgba(255,85,0,0.2)]'
                  : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
              }`}
            >
              <div className="text-[10px] text-[#ff9900] tracking-wider mb-1">
                {ep.number}
              </div>
              <div className="font-eva-title text-sm md:text-base font-bold text-white truncate">
                {ep.kanjiTitle}
              </div>
              <div className="text-[10px] text-zinc-500 truncate mt-0.5">
                {ep.westernTitle.replace('OPERATION ', '')}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Episode Dossier Body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEpisode.number}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="border border-zinc-800 bg-zinc-950/90 p-5 md:p-8 relative"
        >
          {/* Top Title Banner */}
          <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-zinc-800 pb-5 mb-6 gap-4">
            <div>
              <div className="flex items-center gap-3 text-xs font-eva-mono text-[#ff9900] tracking-widest uppercase mb-1">
                <span className="bg-[#ff5500] text-black font-bold px-2 py-0.5">
                  {activeEpisode.number}
                </span>
                <span>{activeEpisode.company}</span>
              </div>

              <div className="flex items-baseline gap-4 mt-2">
                <h4 className="font-eva-title text-3xl md:text-5xl font-extrabold text-white">
                  {activeEpisode.kanjiTitle}
                </h4>
                <span className="font-eva-latin text-base md:text-xl text-zinc-300 font-semibold tracking-wide">
                  {activeEpisode.westernTitle}
                </span>
              </div>

              <p className="text-xs md:text-sm font-eva-mono text-zinc-400 mt-2">
                {activeEpisode.subtitle} · <span className="text-[#ff9900]">{activeEpisode.role}</span>
              </p>
            </div>

            {/* Official NERV Clearance Stamp */}
            <div className="border-2 border-red-600 text-red-500 font-eva-title font-bold px-3 py-1.5 text-xs md:text-sm tracking-widest uppercase self-start rotate-1 shadow-[0_0_12px_rgba(230,0,18,0.25)]">
              任務完了 · VERIFIED
            </div>
          </div>

          {/* 3-Section Combat Analysis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 1. Threat Assessment */}
            <div className="border border-red-950 bg-red-950/10 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-500 font-eva-mono font-bold text-xs tracking-wider mb-2">
                  <AlertTriangle size={15} />
                  <span>{activeEpisode.threatTitle}</span>
                </div>
                <p className="text-xs font-eva-mono text-zinc-300 leading-relaxed">
                  {activeEpisode.threatDesc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-red-900/40 text-[10px] font-eva-mono text-red-400">
                CRITICAL EMERGENCY SEVERITY: HIGH
              </div>
            </div>

            {/* 2. Countermeasure */}
            <div className="border border-[#ff9900]/30 bg-[#ff9900]/5 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#ff9900] font-eva-mono font-bold text-xs tracking-wider mb-2">
                  <Terminal size={15} />
                  <span>{activeEpisode.countermeasureTitle}</span>
                </div>
                <p className="text-xs font-eva-mono text-zinc-300 leading-relaxed">
                  {activeEpisode.countermeasureDesc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#ff9900]/30 text-[10px] font-eva-mono text-[#ff9900]">
                TACTICAL DEFENSE: DEPLOYED
              </div>
            </div>

            {/* 3. Audited Outcome */}
            <div className="border border-[#00ff66]/40 bg-[#00ff66]/5 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#00ff66] font-eva-mono font-bold text-xs tracking-wider mb-2">
                  <ShieldCheck size={15} />
                  <span>{activeEpisode.outcomeTitle}</span>
                </div>
                <p className="text-xs font-eva-mono text-zinc-200 leading-relaxed font-medium">
                  {activeEpisode.outcomeDesc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#00ff66]/30 text-[10px] font-eva-mono text-[#00ff66]">
                AUDITED STATUS: RESILIENCE MAXIMUM
              </div>
            </div>
          </div>

          {/* Tech Stack Arsenal */}
          <div>
            <div className="text-[10px] font-eva-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Layers size={13} className="text-zinc-400" />
              <span>ARSENAL DEPLOYED (使用技術):</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeEpisode.stack.map((item) => (
                <span
                  key={item}
                  className="font-eva-mono text-xs px-2.5 py-1 bg-black border border-zinc-700 text-zinc-300 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
