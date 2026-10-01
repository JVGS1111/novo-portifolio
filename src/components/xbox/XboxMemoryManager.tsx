import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, ShieldCheck, HardDrive } from 'lucide-react';
import { type XboxTranslationType } from './xboxTranslations';

interface XboxMemoryManagerProps {
  t: XboxTranslationType;
  isPt?: boolean;
}

export const XboxMemoryManager: React.FC<XboxMemoryManagerProps> = ({ t, isPt }) => {
  const [selectedBlockId, setSelectedBlockId] = useState<string>(t.memory.blocks[0].id);

  const selectedBlock = t.memory.blocks.find((b) => b.id === selectedBlockId) || t.memory.blocks[0];

  return (
    <section id="memory" className="relative w-full py-10 px-4 sm:px-6 font-mono select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#00ff55]/30 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-[#00ff55] animate-pulse" />
            <h2 className="text-xs sm:text-sm font-bold text-[#00ff55] tracking-widest">
              {t.memory.sectionTag}
            </h2>
          </div>
          <div className="text-[10px] text-zinc-400 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff66]" />
            <span>{t.memory.auditNotice}</span>
          </div>
        </div>

        {/* Main Memory Manager Console Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#020d06]/90 border border-[#00ff55]/40 rounded-2xl p-4 sm:p-6 shadow-[0_0_35px_rgba(0,255,85,0.12)]">
          {/* Left Console (7 Cols): The 5 Partition Blocks Deck */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Top Stats Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-black/70 border border-[#00ff55]/30 rounded-xl p-3 mb-4 text-[10.5px]">
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#00ff55]" />
                <span className="text-zinc-300 font-bold">{t.memory.totalBlocks}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#00ff55] font-bold">● {t.memory.usedBlocks}</span>
                <span className="text-zinc-500">○ {t.memory.freeBlocks}</span>
              </div>
            </div>

            {/* The 5 Interactive Memory Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {t.memory.blocks.map((block, idx) => {
                const isSelected = block.id === selectedBlockId;

                return (
                  <button
                    key={block.id}
                    type="button"
                    onClick={() => setSelectedBlockId(block.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-4 cursor-pointer group ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#00ff55]/20 via-[#01260e]/80 to-[#001708] border-[#00ff55] shadow-[0_0_20px_rgba(0,255,85,0.25)] scale-[1.01]'
                        : 'bg-black/50 border-zinc-800 text-zinc-300 hover:border-[#00ff55]/50 hover:bg-[#00ff55]/10'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Block Number Indicator */}
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#00ff55] text-black shadow-[0_0_10px_#00ff55]'
                            : 'bg-[#00240d] text-[#00ff66] border border-[#00ff55]/30 group-hover:border-[#00ff55]'
                        }`}
                      >
                        0{idx + 1}
                      </div>

                      <div className="min-w-0">
                        <div className="text-[10px] text-zinc-400 group-hover:text-[#88ffa8] transition-colors">
                          {block.code}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                          {block.label}
                        </div>
                        <div className="text-[10px] text-[#00ff66]/80 truncate">
                          {block.source}
                        </div>
                      </div>
                    </div>

                    {/* Metric Number Display */}
                    <div className="text-right flex-shrink-0">
                      <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#88ffa8] to-[#00ff55] drop-shadow-[0_0_10px_rgba(0,255,85,0.5)]">
                        {block.metric}
                      </div>
                      {/* Mini Block Progress Bar */}
                      <div className="w-20 sm:w-24 h-1.5 bg-[#001f0b] rounded-full overflow-hidden border border-[#00ff55]/30 mt-1">
                        <div
                          className="h-full bg-[#00ff55] rounded-full shadow-[0_0_6px_#00ff55]"
                          style={{ width: `${block.fillPct}%` }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Console (5 Cols): Live Memory Block Inspector & Visual LED Cluster */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-black/75 border border-[#00ff55]/30 rounded-xl p-4 sm:p-5 relative overflow-hidden">
            {/* Visual Header */}
            <div>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-3 border-b border-[#00ff55]/20 pb-2">
                <span className="text-[#00ff55] font-bold">SECTOR INSPECTOR READOUT</span>
                <span className="text-zinc-500">64,000 BLOCKS MAP</span>
              </div>

              {/* 64 Memory Blocks LED Grid Simulation */}
              <div className="mb-5 bg-[#020e06] p-3 rounded-lg border border-[#00ff55]/20">
                <div className="text-[9px] text-[#88ffa8] mb-2 flex items-center justify-between">
                  <span>FLASH MEMORY CLUSTER MATRIX:</span>
                  <span className="text-[#00ff55] font-bold">55,000 BLOCKS ALLOCATED</span>
                </div>
                <div className="grid grid-cols-16 gap-1">
                  {[...Array(64)].map((_, i) => {
                    const isAllocated = i < 55;
                    const isFocusGroup =
                      selectedBlockId === 'crash-reduction'
                        ? i < 15
                        : selectedBlockId === 'ram-optimization'
                        ? i >= 15 && i < 28
                        : selectedBlockId === 'boot-velocity'
                        ? i >= 28 && i < 39
                        : selectedBlockId === 'cloud-savings'
                        ? i >= 39 && i < 48
                        : i >= 48 && i < 55;

                    return (
                      <div
                        key={i}
                        className={`h-2 sm:h-2.5 rounded-xs transition-all ${
                          isFocusGroup
                            ? 'bg-[#00ff55] shadow-[0_0_8px_#00ff55] scale-110 z-10 animate-pulse'
                            : isAllocated
                            ? 'bg-[#00551e] border border-[#00ff55]/30'
                            : 'bg-black/60 border border-zinc-800'
                        }`}
                        title={`Block #${i + 1}`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Active Selected Block Telemetry Detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBlock.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.16 }}
                  className="space-y-3"
                >
                  <div className="p-3.5 rounded-xl bg-gradient-to-b from-[#01220c] to-[#011206] border border-[#00ff55]/50 shadow-[0_0_15px_rgba(0,255,85,0.15)]">
                    <div className="text-[10px] text-zinc-400 font-mono mb-1">
                      {selectedBlock.code}
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#00ff55] mb-1">
                      {selectedBlock.metric}
                    </div>
                    <div className="text-sm font-bold text-white mb-2">
                      {selectedBlock.label}
                    </div>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      {selectedBlock.detail}
                    </p>
                  </div>

                  <div className="bg-[#020b05] p-3 rounded-lg border border-zinc-800 text-[10px] space-y-1 text-zinc-400">
                    <div className="flex justify-between">
                      <span>{isPt ? 'FONTE DE AUDITORIA:' : 'AUDIT ORIGIN:'}</span>
                      <span className="text-[#88ffa8]">{selectedBlock.source}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{isPt ? 'TAXA DE INTEGRIDADE:' : 'INTEGRITY RATIO:'}</span>
                      <span className="text-[#00ff66]">100% VERIFIED</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{isPt ? 'STATUS DO SISTEMA:' : 'SYSTEM STATUS:'}</span>
                      <span className="text-[#00ff55] font-bold">NOMINAL / PRODUCTION READY</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Memory Prompt */}
            <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[9px] text-zinc-500">
              <span>{isPt ? 'TELEMETRIA EM TEMPO REAL' : 'REAL-TIME TELEMETRY'}</span>
              <span className="text-[#00ff55] font-bold">XBOX ORIGINAL KERNEL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
