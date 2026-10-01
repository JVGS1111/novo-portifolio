import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc, Play, X, CheckCircle2 } from 'lucide-react';
import { type XboxTranslationType } from './xboxTranslations';

interface XboxDiscDriveCasesProps {
  t: XboxTranslationType;
  isPt?: boolean;
}

export const XboxDiscDriveCases: React.FC<XboxDiscDriveCasesProps> = ({ t }) => {
  const [activeDossierId, setActiveDossierId] = useState<string | null>(null);

  const activeGame = t.discBay.games.find((g) => g.id === activeDossierId);

  return (
    <section id="disc-bay" className="relative w-full py-10 px-4 sm:px-6 font-mono select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#00ff55]/30 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <Disc className="w-4 h-4 text-[#00ff55] animate-spin" style={{ animationDuration: '8s' }} />
            <h2 className="text-xs sm:text-sm font-bold text-[#00ff55] tracking-widest">
              {t.discBay.sectionTag}
            </h2>
          </div>
          <div className="text-[10px] text-zinc-400">
            <span className="text-[#00ff66] font-semibold">{t.discBay.statusNotice}</span>
          </div>
        </div>

        {/* 3 Translucent Emerald Xbox Game Cases in 3D Perspective */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.discBay.games.map((game) => {
            return (
              <div
                key={game.id}
                className="relative group rounded-2xl bg-gradient-to-b from-[#021c0b]/90 via-[#011206]/95 to-[#000803] border-2 border-[#00ff55]/40 hover:border-[#00ff55] transition-all duration-300 shadow-[0_0_30px_rgba(0,255,85,0.12)] hover:shadow-[0_0_40px_rgba(0,255,85,0.3)] flex flex-col justify-between overflow-hidden"
              >
                {/* Emerald Polycarbonate Top Sheen */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00ff55] via-[#88ffa8] to-[#00aa33] opacity-80" />

                {/* Game Case Header: Official Xbox Holographic Banner */}
                <div className="p-4 sm:p-5 pb-0">
                  <div className="flex items-center justify-between gap-2 mb-3 bg-[#011408] border border-[#00ff55]/30 px-3 py-1.5 rounded-lg text-[9.5px]">
                    <div className="flex items-center gap-1.5 font-bold text-[#00ff55]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff55] animate-pulse" />
                      <span>XBOX TITAN ARCHIVE</span>
                    </div>
                    <span className="text-zinc-400 font-bold">{game.blocks}</span>
                  </div>

                  {/* Save State & Category */}
                  <div className="text-[10px] text-[#00ff66] font-bold tracking-wider mb-1">
                    {game.saveState}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-1 group-hover:text-[#88ffa8] transition-colors">
                    {game.title}
                  </h3>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wide mb-3">
                    {game.category}
                  </div>

                  <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
                    {game.synopsis}
                  </p>

                  {/* Impact Highlight Box */}
                  <div className="p-2.5 rounded-lg bg-black/60 border border-[#00ff55]/25 text-[11px] text-[#88ffa8] font-sans mb-4">
                    {game.impact}
                  </div>
                </div>

                {/* Optical Disc Bay Interactive Graphic (Disc slides out on hover!) */}
                <div className="relative px-5 py-3 flex items-center justify-center overflow-hidden min-h-[100px]">
                  {/* Optical Disc that slides out on hover */}
                  <div className="relative w-28 h-28 rounded-full border-2 border-zinc-600 bg-gradient-to-tr from-zinc-700 via-zinc-400 to-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:translate-x-6 group-hover:rotate-45 transition-all duration-500 flex items-center justify-center flex-shrink-0">
                    {/* Iridescent Rainbow Laser Caustic sheen */}
                    <div
                      className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
                      style={{
                        background:
                          'conic-gradient(from 180deg at 50% 50%, rgba(255, 0, 0, 0.4) 0deg, rgba(255, 255, 0, 0.4) 60deg, rgba(0, 255, 0, 0.4) 120deg, rgba(0, 255, 255, 0.4) 180deg, rgba(0, 0, 255, 0.4) 240deg, rgba(255, 0, 255, 0.4) 300deg, rgba(255, 0, 0, 0.4) 360deg)'
                      }}
                    />
                    {/* Center Spindle Hole */}
                    <div className="w-9 h-9 rounded-full bg-black/90 border border-zinc-500 flex items-center justify-center z-10">
                      <div className="w-4 h-4 rounded-full bg-transparent border border-zinc-400" />
                    </div>
                  </div>
                </div>

                {/* Tech Stack Chips & Action Boot Button */}
                <div className="p-4 sm:p-5 pt-2 border-t border-[#00ff55]/20 bg-black/40">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {game.stack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[9.5px] px-2 py-0.5 rounded bg-[#011e0c] border border-[#00ff55]/30 text-[#88ffa8]"
                      >
                        {tech}
                      </span>
                    ))}
                    {game.stack.length > 4 && (
                      <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-black/60 border border-zinc-700 text-zinc-400">
                        +{game.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveDossierId(game.id)}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#00ff55] to-[#00cc44] text-black font-black text-xs hover:from-[#33ff77] hover:to-[#00ff55] hover:shadow-[0_0_20px_#00ff55] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{t.discBay.btnBoot}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Full Technical Architecture Dossier */}
        <AnimatePresence>
          {activeGame && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 16 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-full max-w-3xl rounded-2xl bg-[#020e06] border-2 border-[#00ff55] shadow-[0_0_50px_rgba(0,255,85,0.4)] p-5 sm:p-7 max-h-[90vh] overflow-y-auto text-left relative font-mono"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#00ff55]/30 mb-5">
                  <div className="flex items-center gap-2.5">
                    <Disc className="w-5 h-5 text-[#00ff55] animate-spin" style={{ animationDuration: '6s' }} />
                    <div>
                      <div className="text-[10px] text-[#00ff55] font-bold tracking-widest">
                        {t.discBay.dossierLabel}
                      </div>
                      <div className="text-lg sm:text-xl font-black text-white">
                        {activeGame.title}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveDossierId(null)}
                    className="p-1.5 rounded-lg border border-zinc-700 hover:border-[#00ff55] text-zinc-400 hover:text-white transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Dossier Body */}
                <div className="space-y-5">
                  {/* Challenge */}
                  <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                    <div className="text-[10px] text-[#ffaa00] font-bold mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ffaa00]" />
                      <span>{t.discBay.challengesLabel}</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-zinc-300 font-sans leading-relaxed">
                      {activeGame.fullDossier.challenge}
                    </p>
                  </div>

                  {/* Architecture & Solution */}
                  <div className="p-4 rounded-xl bg-[#011809] border border-[#00ff55]/40 shadow-[0_0_15px_rgba(0,255,85,0.1)]">
                    <div className="text-[10px] text-[#00ff55] font-bold mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00ff55]" />
                      <span>{t.discBay.solutionLabel}</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-zinc-200 font-sans leading-relaxed">
                      {activeGame.fullDossier.architecture}
                    </p>
                  </div>

                  {/* Production Impact Metrics */}
                  <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                    <div className="text-[10px] text-[#00ffee] font-bold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00ffee]" />
                      <span>{t.discBay.metricsLabel}</span>
                    </div>
                    <div className="space-y-2">
                      {activeGame.fullDossier.impactMetrics.map((metric, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-[#00ff55] flex-shrink-0 mt-0.5" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hardware & Software Technologies */}
                  <div>
                    <div className="text-[10px] text-zinc-400 font-bold mb-2">
                      {t.discBay.stackLabel}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeGame.fullDossier.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-[#00260e] border border-[#00ff55]/40 text-[#88ffa8] text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-6 pt-4 border-t border-[#00ff55]/30 flex items-center justify-between">
                  <div className="text-[10px] text-zinc-500">
                    MEMORY FOOTPRINT: {activeGame.blocks}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveDossierId(null)}
                    className="px-4 py-2 rounded-lg bg-[#003814] border border-[#00ff55]/60 text-[#00ff55] hover:bg-[#00ff55] hover:text-black font-bold text-xs transition-all cursor-pointer"
                  >
                    {t.discBay.btnCloseModal}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
