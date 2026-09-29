import React from 'react';
import { motion } from 'framer-motion';

export const FloatingRetroButton: React.FC = () => {
  const handleNavigate = () => {
    window.location.hash = '#/win98';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.button
        type="button"
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNavigate}
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-cyan-500/20 hover:from-teal-500/30 hover:to-cyan-500/30 text-teal-300 font-mono text-xs font-semibold rounded-full border border-teal-500/40 hover:border-teal-400 shadow-xl shadow-teal-950/40 backdrop-blur-md cursor-pointer transition-all duration-300"
        title="Alternar para a versão retro Windows 98"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
        </span>
        <span className="text-base group-hover:rotate-12 transition-transform">🕹️</span>
        <span className="tracking-tight">Windows 98 Edition</span>
        <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-teal-500/20 border border-teal-500/30 text-teal-200">
          Retro OS
        </span>
      </motion.button>
    </motion.div>
  );
};
