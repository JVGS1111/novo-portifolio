import React, { useState } from 'react';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { isSoundEnabled, setSoundEnabled, playIndustrialClick } from './monolithAudio';
import { PortfolioSwitcher } from '../PortfolioSwitcher';

interface MonolithMastheadProps {
  onNavigateHome?: () => void;
}

export const MonolithMasthead: React.FC<MonolithMastheadProps> = ({
  onNavigateHome
}) => {
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    setSoundOn(next);
    if (next) {
      playIndustrialClick();
    }
  };

  return (
    <header className="relative w-full border-b border-[#484b54] bg-[#0d0f12]/95 backdrop-blur-md px-4 py-3 z-30 font-mono text-[11px] uppercase tracking-wider text-slate-300">
      {/* 4 Corner Screws */}
      <div className="absolute top-1.5 left-2 w-1.5 h-1.5 rounded-full border border-[#484b54] flex items-center justify-center pointer-events-none">
        <div className="w-[2px] h-[2px] rounded-full bg-[#8e95a5]" />
      </div>
      <div className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full border border-[#484b54] flex items-center justify-center pointer-events-none">
        <div className="w-[2px] h-[2px] rounded-full bg-[#8e95a5]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left Side: System ID and Engine telemetry */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff9900] rounded-sm animate-pulse" />
            <span className="font-bold text-[#ffaa00] tracking-widest">SYS.ID // MONOLITH_04</span>
          </div>
          <span className="text-[#484b54] hidden sm:inline">|</span>
          <span className="text-slate-400 text-[10px] hidden sm:inline">
            THREE.JS v164.0 · WEBGL_2.0 · 60.0 FPS · PBR_CONCRETE
          </span>
        </div>

        {/* Center: Sector Title */}
        <div className="hidden lg:block text-slate-300 font-bold text-center tracking-widest text-[12px]">
          SECTOR 04 // COLOSSAL CONCRETE SCI-FI BRUTALISM
        </div>

        {/* Right Side: Online Status & Interactive Actions */}
        <div className="flex items-center gap-3">
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[#16251b] border border-[#22c55e]/50 text-[#22c55e] text-[10px] font-bold rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
            <span>ONLINE: DISPONÍVEL P/ PROJETOS DE ALTO IMPACTO</span>
          </div>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            title={soundOn ? 'Desativar áudio tátil' : 'Ativar áudio tátil'}
            className="p-1.5 bg-[#1a1d22] border border-[#484b54] hover:border-[#ff9900] text-slate-300 hover:text-[#ff9900] transition-colors"
          >
            {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} className="text-slate-500" />}
          </button>

          {/* Switcher Dropdown in Masthead */}
          <div className="hidden sm:block">
            <PortfolioSwitcher variant="navbar" />
          </div>

          {/* Home Return */}
          {onNavigateHome && (
            <button
              type="button"
              onClick={() => {
                playIndustrialClick();
                onNavigateHome();
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1a1d22] border border-[#484b54] hover:border-[#ff9900] hover:text-[#ff9900] text-slate-200 transition-colors text-[10px] font-bold"
            >
              <span>MODERN 3D</span>
              <ExternalLink size={12} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
