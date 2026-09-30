import React from 'react';
import { motion } from 'framer-motion';
import { ThreeAquaSpheres } from './ThreeAquaSpheres';
import { playAeroClick } from './soundEffectsAero';
import { personalInfo } from '../../data/portfolioData';

interface FrutigerHeroWindowProps {
  className?: string;
}

export const FrutigerHeroWindow: React.FC<FrutigerHeroWindowProps> = ({ className = '' }) => {
  return (
    <div className={`aero-window flex flex-col overflow-hidden text-slate-800 ${className}`}>
      {/* 1. Vista Aero Glass Header */}
      <div className="aero-titlebar px-3 py-2 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <span className="text-sm">🌐</span>
          <span className="text-xs font-bold text-white tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            João Vinícius — Senior Software Engineer | Portfolio Explorer v8.5
          </span>
        </div>

        {/* Aero Window Control Dots */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={playAeroClick}
            className="w-3.5 h-3.5 rounded-full bg-emerald-400/90 border border-white/80 shadow-sm hover:brightness-110 cursor-pointer"
            title="Minimizar"
          />
          <button
            type="button"
            onClick={playAeroClick}
            className="w-3.5 h-3.5 rounded-full bg-amber-400/90 border border-white/80 shadow-sm hover:brightness-110 cursor-pointer"
            title="Maximizar"
          />
          <button
            type="button"
            onClick={playAeroClick}
            className="w-3.5 h-3.5 rounded-full bg-rose-500/90 border border-white/80 shadow-sm hover:brightness-110 cursor-pointer"
            title="Fechar"
          />
        </div>
      </div>

      {/* 2. Profile Details & Bio */}
      <div className="p-4 sm:p-5 bg-gradient-to-b from-white/95 via-sky-50/70 to-white/90 border-b border-sky-200/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 mb-3">
          {/* Avatar Disc */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 p-0.5 shadow-lg shadow-sky-500/25 shrink-0">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-sky-600 text-lg shadow-inner">
              JV
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {personalInfo.fullName}
            </h1>
            <p className="text-xs font-semibold text-sky-800">
              {personalInfo.title} ({personalInfo.subtitle}) • {personalInfo.yearsOfExperience} de Experiência
            </p>
          </div>
        </div>

        {/* Status Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Disponível para Projetos de Alto Impacto
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-sky-100 text-sky-800 border border-sky-300 shadow-sm">
            <span>📍</span> Brasil (Remoto/Híbrido)
          </span>
        </div>

        {/* Bio Copy */}
        <p className="text-xs text-slate-700 leading-relaxed font-normal mb-3.5">
          {personalInfo.bio}
        </p>

        {/* Quick Social / Contact Jelly Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={`mailto:${personalInfo.email}`}
            onClick={playAeroClick}
            className="btn-jelly-blue px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>📧</span>
            <span>{personalInfo.email}</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playAeroClick}
            className="btn-jelly-blue px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>💼</span>
            <span>LinkedIn /in/joaoguebrer</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playAeroClick}
            className="btn-jelly-green px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>🐙</span>
            <span>GitHub /Guerber</span>
          </motion.a>
        </div>
      </div>

      {/* 3. Three.js Aquatic Ecotopia Lab Embedded Canvas */}
      <div className="p-3 sm:p-4 bg-gradient-to-b from-sky-50/50 to-white/60">
        <ThreeAquaSpheres />
      </div>
    </div>
  );
};
