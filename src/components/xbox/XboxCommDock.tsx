import React, { useState } from 'react';
import { Check, Download, Radio, Gamepad2 } from 'lucide-react';
import { type XboxTranslationType } from './xboxTranslations';

interface XboxCommDockProps {
  t: XboxTranslationType;
  isPt?: boolean;
}

export const XboxCommDock: React.FC<XboxCommDockProps> = ({ t }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('joaoviniciusgs@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2800);
  };

  return (
    <footer id="comm-dock" className="relative w-full pt-10 pb-16 px-4 sm:px-6 font-mono select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#00ff55]/30 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#00ff55] animate-pulse" />
            <h2 className="text-xs sm:text-sm font-bold text-[#00ff55] tracking-widest">
              SECTOR 05 // XBOX LIVE COMM DOCK & CONTROLLER BUS
            </h2>
          </div>
          <div className="text-[10px] text-[#00ff66] font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff55] animate-ping" />
            <span>{t.commDock.portConnected}</span>
          </div>
        </div>

        {/* Main Comm Console Card */}
        <div className="rounded-2xl bg-gradient-to-b from-[#021809]/95 via-[#010e05]/95 to-[#000502] border-2 border-[#00ff55]/50 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,85,0.2)] relative overflow-hidden">
          {/* Top Copper Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00ff55] via-[#cc6633] to-[#00ff55]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#88ffa8] to-[#00ff55]">
                  {t.commDock.heading}
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-6 max-w-xl">
                {t.commDock.description}
              </p>

              {/* Action Buttons styled as Xbox Controller Face Buttons */}
              <div className="flex flex-wrap gap-3">
                {/* (A) Copy Email Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`px-4 py-3 rounded-xl font-black text-xs transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 ${
                    copied
                      ? 'bg-[#33ff77] text-black shadow-[0_0_20px_#33ff77]'
                      : 'bg-[#00ff55] text-black hover:bg-[#33ff77] hover:shadow-[0_0_20px_#00ff55]'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>{t.commDock.emailCopiedNotice}</span>
                    </>
                  ) : (
                    <>
                      <span className="w-5 h-5 rounded-full bg-black text-[#00ff55] flex items-center justify-center text-[10px] font-black">
                        A
                      </span>
                      <span>{t.commDock.btnCopyEmail}</span>
                    </>
                  )}
                </button>

                {/* (X) GitHub */}
                <a
                  href="https://github.com/JVGS1111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#01220c] border border-[#00eeff]/50 text-[#00eeff] hover:bg-[#00eeff]/20 hover:border-[#00eeff] font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <span className="w-5 h-5 rounded-full bg-[#00eeff]/20 text-[#00eeff] border border-[#00eeff]/40 flex items-center justify-center text-[10px] font-black">
                    X
                  </span>
                  <span>{t.commDock.btnGithub}</span>
                </a>

                {/* (Y) LinkedIn */}
                <a
                  href="https://linkedin.com/in/joaovinicius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#01220c] border border-[#ffaa00]/50 text-[#ffaa00] hover:bg-[#ffaa00]/20 hover:border-[#ffaa00] font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <span className="w-5 h-5 rounded-full bg-[#ffaa00]/20 text-[#ffaa00] border border-[#ffaa00]/40 flex items-center justify-center text-[10px] font-black">
                    Y
                  </span>
                  <span>{t.commDock.btnLinkedin}</span>
                </a>

                {/* (⏏) Download CV */}
                <a
                  href="#/xbox"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/JVGS1111', '_blank');
                  }}
                  className="px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-zinc-300 hover:border-[#00ff55] hover:text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Download className="w-4 h-4 text-[#00ff55]" />
                  <span>{t.commDock.btnDownloadCv}</span>
                </a>
              </div>
            </div>

            {/* Right Graphic: 4 Controller Ports Console Visualizer (5 Cols) */}
            <div className="lg:col-span-5 bg-black/70 border border-[#00ff55]/30 rounded-xl p-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00ff55] mb-4">
                <Gamepad2 className="w-4 h-4 text-[#00ff55]" />
                <span>4-PORT CONTROLLER HARDWARE BUS</span>
              </div>

              {/* 4 Port Sockets Visualizer */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[1, 2, 3, 4].map((port) => (
                  <div
                    key={port}
                    className={`p-2.5 rounded-lg border text-center flex flex-col items-center gap-1.5 ${
                      port === 1
                        ? 'bg-[#003814] border-[#00ff55] shadow-[0_0_12px_rgba(0,255,85,0.3)]'
                        : 'bg-black/50 border-zinc-800 opacity-50'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                        port === 1 ? 'border-[#00ff55] text-[#00ff55] bg-[#00ff55]/20' : 'border-zinc-700 text-zinc-600'
                      }`}
                    >
                      P{port}
                    </div>
                    <span className="text-[8.5px] font-mono text-zinc-400">
                      {port === 1 ? 'ONLINE' : 'EMPTY'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Global Controller Keybinding Legend */}
              <div className="bg-[#020b05] p-3 rounded-lg border border-zinc-800 text-[10px] space-y-1.5 text-zinc-400">
                <div className="text-[#00ff55] font-bold mb-1">
                  TACTILE CONTROLLER SHORTCUTS:
                </div>
                <div className="flex justify-between">
                  <span>KEY [A]</span>
                  <span className="text-white font-bold">{t.commDock.controllerBar.aSelect}</span>
                </div>
                <div className="flex justify-between">
                  <span>KEY [B]</span>
                  <span className="text-zinc-300">{t.commDock.controllerBar.bBack}</span>
                </div>
                <div className="flex justify-between">
                  <span>KEY [X]</span>
                  <span className="text-[#00eeff] font-bold">{t.commDock.controllerBar.xInspect}</span>
                </div>
                <div className="flex justify-between">
                  <span>KEY [Y]</span>
                  <span className="text-[#ffaa00] font-bold">{t.commDock.controllerBar.yLive}</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Spec Footer Text */}
          <div className="mt-8 pt-4 border-t border-[#00ff55]/30 text-[9px] text-zinc-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div className="whitespace-pre-line leading-relaxed">
              {t.commDock.footerLegend}
            </div>
            <div className="text-[#00ff55] font-bold flex items-center gap-1.5">
              <span>● SYSTEM NORMAL</span>
              <span className="text-zinc-600">|</span>
              <span>100% GREEN CRYSTAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
