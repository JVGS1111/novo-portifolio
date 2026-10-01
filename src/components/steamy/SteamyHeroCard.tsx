import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, ExternalLink, Download, Sparkles, MapPin, Briefcase, Award } from 'lucide-react';
import { playDropletSound } from './steamyAudio';

export const SteamyHeroCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('joaoviniciusgs@gmail.com');
    setCopied(true);
    playDropletSound(1.4);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full mb-8"
    >
      <div
        className="w-full p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-slate-50/90 backdrop-blur-2xl border border-white/90 shadow-[0_20px_48px_rgba(30,45,65,0.07),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,0,0,0.02)] transition-all duration-300"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Left Column: Roles, Name, Subtitle, Bio */}
          <div className="flex-1 max-w-3xl">
            {/* Top Tactical Badges */}
            {/* Top Tactical Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-700 font-bold text-xs tracking-wide shadow-xs">
                JVGS
              </span>

              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-700 font-bold text-xs tracking-wide shadow-xs flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-sky-600" />
                ENGENHEIRO DE SOFTWARE SÊNIOR
              </span>

              <span className="px-3 py-1 rounded-full bg-slate-200/60 border border-slate-300/60 text-slate-700 font-bold text-xs tracking-wide shadow-xs flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-slate-600" />
                6 ANOS DE EXPERIÊNCIA
              </span>

              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 font-bold text-xs tracking-wide shadow-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                BRASIL · REMOTO / HÍBRIDO
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-3">
              João Vinícius Guerber de Souza
            </h1>

            {/* Specialist Subheading */}
            <p className="text-base sm:text-lg font-semibold text-sky-600 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-500 shrink-0" />
              <span>Senior Software Engineer · Front-end & Mobile Specialist · Alto Impacto & Escala</span>
            </p>

            {/* Bio Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Engenheiro de Software Sênior especializado em modernização de aplicações móveis e web de alto impacto e escala. Foco em arquitetura limpa, módulos nativos (Kotlin/Swift), estabilidade extrema de sistemas, eliminação de débito técnico e automação inteligente com IA.
            </p>
          </div>

          {/* Right Column: Contact Pills & Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 sm:items-center lg:items-end justify-center">
            {/* Status Pill */}
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold shadow-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponível para Projetos de Alto Impacto</span>
            </div>

            {/* Email Button with Copy Feedback */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-white hover:bg-sky-50/80 border border-slate-200/90 text-slate-700 hover:text-sky-700 text-xs font-bold shadow-xs flex items-center justify-between sm:justify-start gap-2.5 transition-all cursor-pointer group"
              title="Clique para copiar o email"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-600" />
                <span>joaoviniciusgs@gmail.com</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 group-hover:bg-sky-100 text-slate-500 group-hover:text-sky-700 font-mono font-semibold">
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : 'Copiar'}
              </span>
            </button>

            {/* LinkedIn Pill */}
            <a
              href="https://www.linkedin.com/in/joaoguebrer/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playDropletSound()}
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-white hover:bg-sky-50/80 border border-slate-200/90 text-sky-700 text-xs font-bold shadow-xs flex items-center justify-between sm:justify-start gap-2.5 transition-all group"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">💼</span>
                <span>linkedin.com/in/joaoguebrer</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-sky-600" />
            </a>

            {/* GitHub Pill */}
            <a
              href="https://github.com/Guerber"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playDropletSound()}
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200/90 text-slate-800 text-xs font-bold shadow-xs flex items-center justify-between sm:justify-start gap-2.5 transition-all group"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">🐙</span>
                <span>github.com/Guerber</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-800" />
            </a>

            {/* Resume / Executive Summary Download Pill */}
            <a
              href="#/steamy-glass"
              onClick={(e) => {
                e.preventDefault();
                playDropletSound();
                alert('Currículo executivo em PDF de João Vinícius Guerber de Souza pronto para envio sob demanda via email ou LinkedIn!');
              }}
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Baixar Resumo Executivo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
