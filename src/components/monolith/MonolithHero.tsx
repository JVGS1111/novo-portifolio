import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';
import { MonolithPanel } from './MonolithPanel';
import { MonolithCanvas } from './MonolithCanvas';
import { playIndustrialClick } from './monolithAudio';

export const MonolithHero: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pt-6 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Monolithic Dossier (lg:col-span-7) */}
        <MonolithPanel className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between" withRivets>
          <div className="space-y-4">
            {/* Classification Header */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#ff9900] tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 bg-[#ff9900] rounded-sm" />
              <span>/// CLASSIFICAÇÃO: ENGENHEIRO DE SOFTWARE SÊNIOR · 6 ANOS DE EXPERIÊNCIA · BRASIL (REMOTO)</span>
            </div>

            {/* Monumental Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-tight">
              JOÃO VINÍCIUS GUERBER DE SOUZA
            </h1>

            {/* Role / Subtitle */}
            <div className="text-sm sm:text-base font-mono font-bold tracking-wider text-[#00f0ff]">
              SENIOR SOFTWARE ENGINEER // FRONT-END & MOBILE SPECIALIST
            </div>

            {/* Sys Core Directive Box */}
            <div className="relative pl-4 py-3 bg-[#111317]/90 border-l-4 border-[#ff9900] border-y border-r border-[#383b44] my-4">
              <div className="text-[10px] font-mono font-bold text-[#8e95a5] tracking-widest mb-1.5 uppercase">
                SYS_CORE_DIRECTIVE // PERFIL PROFISSIONAL
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Engenheiro de Software Sênior especializado em modernização de aplicações móveis e web de alto impacto e escala. Foco em arquitetura limpa, módulos nativos (Kotlin/Swift), estabilidade extrema de sistemas, eliminação de débito técnico e automação inteligente com IA.
              </p>
            </div>
          </div>

          {/* Contact Badges Grid */}
          <div className="pt-4 border-t border-[#383b44]/80 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Email */}
              <a
                href="mailto:joaoviniciusgs@gmail.com"
                onClick={playIndustrialClick}
                className="flex items-center gap-2.5 p-2.5 bg-[#121418] border border-[#383b44] hover:border-[#ff9900] group transition-all"
              >
                <div className="w-1.5 h-full min-h-[20px] bg-[#ff9900] shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[9px] font-mono uppercase text-[#8e95a5] group-hover:text-[#ff9900] flex items-center gap-1">
                    <Mail size={10} />
                    <span>EMAIL</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-200 truncate font-semibold">
                    joaoviniciusgs@gmail.com
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/joaoguebrer/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playIndustrialClick}
                className="flex items-center gap-2.5 p-2.5 bg-[#121418] border border-[#383b44] hover:border-[#00f0ff] group transition-all"
              >
                <div className="w-1.5 h-full min-h-[20px] bg-[#00f0ff] shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[9px] font-mono uppercase text-[#8e95a5] group-hover:text-[#00f0ff] flex items-center gap-1">
                    <LinkedinIcon className="w-3 h-3 text-[#00f0ff]" />
                    <span>LINKEDIN</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-200 truncate font-semibold">
                    /in/joaoguebrer
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Guerber"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playIndustrialClick}
                className="flex items-center gap-2.5 p-2.5 bg-[#121418] border border-[#383b44] hover:border-[#22c55e] group transition-all"
              >
                <div className="w-1.5 h-full min-h-[20px] bg-[#22c55e] shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[9px] font-mono uppercase text-[#8e95a5] group-hover:text-[#22c55e] flex items-center gap-1">
                    <GithubIcon className="w-3 h-3 text-[#22c55e]" />
                    <span>GITHUB</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-200 truncate font-semibold">
                    /Guerber
                  </div>
                </div>
              </a>
            </div>

            {/* Bottom Status Ticker */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#8e95a5] pt-2 border-t border-[#262930]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                <span>STATUS: OPERAÇÃO ATIVA // ARQUITETURA MOBILE & WEB // VERIFICADO EM ESCALA CRÍTICA</span>
              </div>
            </div>
          </div>
        </MonolithPanel>

        {/* Right Column: WebGL 3D Viewport Monolith Renderer (lg:col-span-5) */}
        <MonolithPanel className="lg:col-span-5 min-h-[420px] overflow-hidden flex flex-col p-0" withRivets>
          <MonolithCanvas />
        </MonolithPanel>
      </div>
    </section>
  );
};
