import React from 'react';
import { motion } from 'framer-motion';
import { playClickSound, playStartupChime } from './soundEffects';

interface ShutdownScreenProps {
  onRestart: () => void;
  onNavigateModern: () => void;
}

export const ShutdownScreen: React.FC<ShutdownScreenProps> = ({ onRestart, onNavigateModern }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-6 text-center select-none font-mono"
    >
      <div className="space-y-6 max-w-lg">
        {/* Retro orange text */}
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-500 tracking-wider">
          É seguro desligar o seu computador.
        </h1>
        <p className="text-sm text-slate-400">
          (It's now safe to turn off your computer)
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              playClickSound();
              playStartupChime();
              onRestart();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#C0C0C0] text-black font-bold font-['Tahoma',sans-serif] text-xs border-2 border-t-white border-l-white border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white cursor-pointer shadow"
          >
            🔄 Reiniciar Guerber OS 98
          </button>
          
          <button
            type="button"
            onClick={() => {
              playClickSound();
              onNavigateModern();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold font-['Tahoma',sans-serif] text-xs rounded-xs cursor-pointer shadow"
          >
            🚀 Ir para Portfólio Moderno
          </button>
        </div>
      </div>
    </motion.div>
  );
};
