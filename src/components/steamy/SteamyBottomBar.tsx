import React from 'react';
import { ArrowUp, Droplets } from 'lucide-react';
import { playDropletSound } from './steamyAudio';

export const SteamyBottomBar: React.FC = () => {
  const scrollToTop = () => {
    playDropletSound(1.5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-12 mb-6">
      <div className="w-full p-4 sm:p-5 rounded-[24px] bg-white/75 backdrop-blur-xl border border-white/80 shadow-[0_12px_32px_rgba(30,45,65,0.06),inset_0_1.5px_2px_rgba(255,255,255,0.9)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="font-extrabold text-slate-800 tracking-wide font-mono flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-sky-600" />
            STEAMY FROSTED GLASS & BATH FOG // TACTILE LIGHT THEME
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="text-slate-500 font-mono">
            JOÃO VINÍCIUS GUERBER DE SOUZA
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono font-bold text-sky-700 hidden md:inline">
            FROSTED TRANSMISSION: 0.92 // REFRACTION IOR: 1.52
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold shadow-xs transition-all cursor-pointer"
            title="Voltar ao início do portfólio"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Início</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
