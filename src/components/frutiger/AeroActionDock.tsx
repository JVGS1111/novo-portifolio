import React from 'react';
import { motion } from 'framer-motion';
import { playAeroClick, playMsnNudgeSound } from './soundEffectsAero';
import { personalInfo } from '../../data/portfolioData';

interface AeroActionDockProps {
  onScrollToMsn?: () => void;
}

export const AeroActionDock: React.FC<AeroActionDockProps> = ({ onScrollToMsn }) => {
  const handleMsnClick = () => {
    playMsnNudgeSound();
    if (onScrollToMsn) {
      onScrollToMsn();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 my-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="aero-window p-6 sm:p-7 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="max-w-2xl text-center md:text-left">
          <h3 className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight mb-1.5">
            Pronto para modernizar seu ecossistema mobile e web com estabilidade extrema?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5">
            Liderança técnica, módulos nativos Kotlin/Swift, Clean Architecture e aceleração de engenharia com IA.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-[10.5px] font-bold">
            <span>🌿</span>
            <span>Nature & High Performance Technology in Radiant Equilibrium • Frutiger Aero v8.5</span>
          </div>
        </div>

        {/* Jelly Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMsnClick}
            type="button"
            className="btn-jelly-green px-4 py-2.5 rounded-full text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>💬</span>
            <span>Chamar no MSN Live</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:joaoviniciusgs@gmail.com?subject=Contato%20via%20Portfolio%20Frutiger%20Aero&body=Olá%20João,%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade!"
            onClick={playAeroClick}
            className="btn-jelly-blue px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>📧</span>
            <span>Enviar E-mail</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playAeroClick}
            className="btn-jelly-blue px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
