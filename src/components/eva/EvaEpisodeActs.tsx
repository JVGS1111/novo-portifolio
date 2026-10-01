import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EvaEpisodeContent } from './evaTranslations';
import { AlertTriangle, ShieldCheck, Terminal, Layers, X, ExternalLink } from 'lucide-react';

interface EvaEpisodeActsProps {
  content: EvaEpisodeContent['episodes'];
  lang?: 'en' | 'pt';
}

export const EvaEpisodeActs: React.FC<EvaEpisodeActsProps> = ({ content, lang = 'en' }) => {
  const [activeEpisodeIdx, setActiveEpisodeIdx] = useState(0);
  const [isDossierModalOpen, setIsDossierModalOpen] = useState(false);
  const [modalEpisodeIdx, setModalEpisodeIdx] = useState(0);

  const activeEpisode = content.list[activeEpisodeIdx];
  const modalEpisode = content.list[modalEpisodeIdx];

  const handleOpenModal = (idx: number) => {
    setModalEpisodeIdx(idx);
    setIsDossierModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDossierModalOpen) {
        setIsDossierModalOpen(false);
      }
    };
    if (isDossierModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDossierModalOpen]);

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
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-500 font-bold">{lang === 'pt' ? 'TÓQUIO-3' : 'TOKYO-3'}</span>
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
                {ep.westernTitle.replace('OPERATION ', '').replace('OPERAÇÃO ', '')}
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

              <div className="flex flex-wrap items-baseline gap-4 mt-2">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
          <div className="mb-6">
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

          {/* Dossier Modal Expansion Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-zinc-800">
            <div className="text-[10.5px] font-eva-mono text-zinc-500">
              ARCHIVE REFERENCE: <span className="text-[#ff9900] font-bold">NERV-DOGMA-ACT-0{activeEpisodeIdx + 1}</span>
            </div>

            <button
              type="button"
              onClick={() => handleOpenModal(activeEpisodeIdx)}
              className="px-4 py-2 bg-[#ff5500] hover:bg-[#ff6600] text-black font-eva-mono font-extrabold text-xs tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,85,0,0.35)]"
            >
              <ExternalLink size={14} />
              <span>{content.dossierBtn}</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ========================================================
          FULL-SCREEN CLASSIFIED TACTICAL DOSSIER MODAL
          ======================================================== */}
      <AnimatePresence>
        {isDossierModalOpen && modalEpisode && (
          <div
            onClick={() => setIsDossierModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md font-eva-mono select-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[92vh] bg-[#050608] border-2 border-red-600 shadow-[0_0_60px_rgba(230,0,18,0.4)] flex flex-col overflow-hidden text-left relative"
            >
              {/* Top Warning Hazard Stripes */}
              <div className="h-2 w-full shrink-0 eva-hazard-stripes-red" />

              {/* Modal Header Bar */}
              <div className="bg-[#120505] px-4 sm:px-6 py-3 border-b border-red-900/60 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-red-500 uppercase">
                    NERV // CLASSIFIED COMBAT DOSSIER // 極秘
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsDossierModalOpen(false)}
                  className="p-1.5 hover:bg-red-600/30 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-zinc-800"
                  title="Close Dossier (ESC)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Episode Switcher Tabs inside Modal */}
              <div className="bg-black/90 border-b border-zinc-900 px-4 sm:px-6 py-2 flex gap-1.5 overflow-x-auto shrink-0">
                {content.list.map((ep, idx) => {
                  const isCur = idx === modalEpisodeIdx;
                  return (
                    <button
                      key={ep.number}
                      type="button"
                      onClick={() => setModalEpisodeIdx(idx)}
                      className={`px-3 py-1.5 text-xs font-eva-mono shrink-0 transition-all border ${
                        isCur
                          ? 'bg-[#ff5500]/20 border-[#ff5500] text-white font-bold'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {content.modalTabPrefix} 0{idx + 1}: {ep.kanjiTitle}
                    </button>
                  );
                })}
              </div>

              {/* Modal Body - Scrollable */}
              <div className="p-4 sm:p-8 overflow-y-auto space-y-6 text-zinc-200 flex-1">
                {/* Title & Metadata Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-800 pb-5">
                  <div>
                    <div className="text-[11px] text-[#ff9900] tracking-widest font-bold mb-1">
                      {modalEpisode.number} · {modalEpisode.company}
                    </div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h2 className="font-eva-title text-3xl sm:text-4xl font-black text-white">
                        {modalEpisode.kanjiTitle}
                      </h2>
                      <span className="font-eva-latin text-lg sm:text-xl text-zinc-300 font-bold">
                        {modalEpisode.westernTitle}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 mt-1">
                      {modalEpisode.subtitle} · <span className="text-[#ff9900] font-semibold">{modalEpisode.role}</span>
                    </div>
                  </div>

                  <div className="border-2 border-red-600 text-red-500 font-eva-title font-bold px-3 py-1 text-xs tracking-widest uppercase self-start rotate-1">
                    極秘 · TOP SECRET
                  </div>
                </div>

                {/* Threat Assessment Deep Dive */}
                <div className="border border-red-950/80 bg-red-950/15 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-red-500 font-bold text-xs tracking-wider mb-2">
                    <AlertTriangle size={16} />
                    <span>{modalEpisode.threatTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                    {modalEpisode.threatDesc}
                  </p>
                  {modalEpisode.threatPoints && (
                    <ul className="space-y-1.5 pt-2 border-t border-red-900/40 text-xs text-zinc-400">
                      {modalEpisode.threatPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">✕</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Countermeasure Architecture Deep Dive */}
                <div className="border border-[#ff9900]/40 bg-[#ff9900]/5 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-[#ff9900] font-bold text-xs tracking-wider mb-2">
                    <Terminal size={16} />
                    <span>{modalEpisode.countermeasureTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                    {modalEpisode.countermeasureDesc}
                  </p>
                  {modalEpisode.countermeasurePoints && (
                    <ul className="space-y-1.5 pt-2 border-t border-[#ff9900]/30 text-xs text-zinc-300">
                      {modalEpisode.countermeasurePoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#ff9900] mt-0.5">▶</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Audited Outcome Telemetry */}
                <div className="border border-[#00ff66]/40 bg-[#00ff66]/5 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-[#00ff66] font-bold text-xs tracking-wider mb-2">
                    <ShieldCheck size={16} />
                    <span>{modalEpisode.outcomeTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium mb-3">
                    {modalEpisode.outcomeDesc}
                  </p>
                  {modalEpisode.outcomePoints && (
                    <ul className="space-y-1.5 pt-2 border-t border-[#00ff66]/30 text-xs text-zinc-300">
                      {modalEpisode.outcomePoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#00ff66] mt-0.5">✔</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tech Stack Arsenal in Modal */}
                <div>
                  <div className="text-[10px] font-eva-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Layers size={13} className="text-zinc-400" />
                    <span>ARSENAL DEPLOYED (使用技術):</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {modalEpisode.stack.map((item) => (
                      <span
                        key={item}
                        className="font-eva-mono text-xs px-2.5 py-1 bg-black border border-zinc-700 text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pilot Clearance Signature */}
                <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-500 flex flex-wrap items-center justify-between gap-2">
                  <span>COMMAND CLASSIFICATION: S-CLASS CODE ARCHITECT</span>
                  <span className="text-[#ff5500]">PILOT: JOÃO VINÍCIUS GUERBER DE SOUZA (JVGS-01)</span>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="bg-[#0b0404] px-4 sm:px-6 py-3 border-t border-zinc-900 flex items-center justify-between shrink-0">
                <span className="text-[10px] text-zinc-500 uppercase">
                  {content.modalClearance}
                </span>

                <button
                  type="button"
                  onClick={() => setIsDossierModalOpen(false)}
                  className="px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-zinc-200 transition-colors cursor-pointer"
                >
                  {content.modalCloseBtn}
                </button>
              </div>

              {/* Bottom Hazard Strip */}
              <div className="h-1.5 w-full shrink-0 eva-hazard-stripes-red" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
