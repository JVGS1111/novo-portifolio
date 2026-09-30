import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Volume2, VolumeX, Sparkles, X } from 'lucide-react';
import { MonolithCinematicCanvas } from './MonolithCinematicCanvas';
import {
  playIndustrialClick,
  playLaserHum,
  playButtonHover,
  isSoundEnabled,
  setSoundEnabled,
  startAtmosphericDrone,
  stopAtmosphericDrone
} from './monolithAudio';
import { PortfolioSwitcher } from '../PortfolioSwitcher';
import thumbBanqi from '../../assets/monolith_thumb_banqi.jpg';
import thumbAi from '../../assets/monolith_thumb_ai.jpg';
import thumbDesign from '../../assets/monolith_thumb_design.jpg';

interface MonolithCinematicHeroProps {
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
}

interface ProjectPreviewModal {
  title: string;
  tag?: string;
  category: string;
  description: string;
  metrics: string[];
  stack: string[];
  link?: string;
}

export const MonolithCinematicHero: React.FC<MonolithCinematicHeroProps> = ({
  onNavigateSection,
  activeSection
}) => {
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());
  const [selectedProject, setSelectedProject] = useState<ProjectPreviewModal | null>(null);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    setSoundOn(next);
    if (next) {
      playIndustrialClick();
      startAtmosphericDrone();
    } else {
      stopAtmosphericDrone();
    }
  };

  const featuredProjects = [
    {
      id: 'banqi',
      title: 'BANQI',
      category: 'MOBILE FINTECH',
      thumbImg: thumbBanqi,
      description:
        'Engenharia mobile sênior no aplicativo do Grupo Casas Bahia com milhões de usuários ativos. Refatoração arquitetural, eliminação de 98% dos crashes e redução drástica do tempo de boot.',
      metrics: ['-98% Crashes em produção', '-55% Consumo de RAM', '-75% Splash Time', '$10k economia AWS'],
      stack: ['React Native', 'Kotlin Native', 'Swift', 'TypeScript', 'Fastlane', 'AppDome RASP']
    },
    {
      id: 'ai-agents',
      title: 'AI AGENTS',
      category: 'DEV WORKFLOW & IA',
      thumbImg: thumbAi,
      description:
        'Orquestração de agentes autônomos de IA e pipelines contínuos de análise estática para geração de suítes de testes, auditoria de regressões e aceleração de esteiras CI/CD.',
      metrics: ['GitHub Copilot Certified', 'Suítes automatizadas Jest/Vitest', 'Homologação acelerada de PRs', 'Agentes autônomos de código'],
      stack: ['GitHub Copilot', 'TypeScript', 'Custom AI Agents', 'Vitest', 'CI/CD Automation']
    },
    {
      id: 'design-system',
      title: 'DESIGN SYSTEM',
      category: 'MULTI-OS TOKENS',
      thumbImg: thumbDesign,
      description:
        'Ecossistema unificado de design tokens e componentes desacoplados tipados em TypeScript, com pontes nativas e paridade absoluta entre Android, iOS e Web.',
      metrics: ['Padronização Multi-SO', '2x Velocidade de entrega', '100% Cobertura de tipos', 'Testes automatizados Jest/Vitest'],
      stack: ['Design Tokens', 'React Native', 'React', 'Next.js', 'TypeScript', 'Storybook']
    }
  ];

  return (
    <section id="citadel-hero" className="relative w-full h-screen min-h-[720px] overflow-hidden select-none bg-[#0a0d12]">
      {/* 3D WebGL Monolithic Citadel Canvas (Always Active in Background) */}
      <div className="absolute inset-0 z-0">
        <MonolithCinematicCanvas className="w-full h-full" />
      </div>

      {/* Subtle edge gradients for typography contrast without darkening the 3D building */}
      <div className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none z-10 bg-gradient-to-t from-[#0a0d12]/80 via-[#0a0d12]/30 to-transparent" />
      <div className="absolute top-0 bottom-0 left-0 w-full sm:w-[500px] pointer-events-none z-10 bg-gradient-to-r from-[#0a0d12]/60 via-[#0a0d12]/15 to-transparent" />

      {/* TOP BAR / NAVIGATION (Matches Image 1:1) */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-12 py-7 flex items-center justify-between text-white font-sans transition-opacity duration-300">
        {/* Left: JV — JOÃO VINÍCIUS SOFTWARE DEVELOPER */}
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={() => {
              playIndustrialClick();
              onNavigateSection('citadel-hero');
            }}
            className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Space_Grotesk'] hover:opacity-80 transition-opacity cursor-pointer"
          >
            JV
          </button>

          <span className="w-5 h-[1.5px] bg-white/40 block" />

          <div className="flex flex-col text-[10px] sm:text-[11px] font-mono tracking-widest uppercase leading-tight text-white/90">
            <span className="font-semibold">JOÃO VINÍCIUS</span>
            <span className="text-white/50 text-[9px]">SOFTWARE DEVELOPER</span>
          </div>
        </div>

        {/* Center/Right Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest uppercase text-white/80">
          <button
            type="button"
            onClick={() => {
              playIndustrialClick();
              onNavigateSection('citadel-hero');
            }}
            onMouseEnter={playButtonHover}
            className={`transition-colors cursor-pointer relative py-1 ${
              activeSection === 'citadel-hero' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            <span>HOME</span>
            {activeSection === 'citadel-hero' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#ffaa00]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              playIndustrialClick();
              onNavigateSection('monolith-projects');
            }}
            onMouseEnter={playButtonHover}
            className={`transition-colors cursor-pointer relative py-1 ${
              activeSection === 'monolith-projects' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            <span>PROJECTS</span>
            {activeSection === 'monolith-projects' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#ffaa00]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              playIndustrialClick();
              onNavigateSection('monolith-experience');
            }}
            onMouseEnter={playButtonHover}
            className={`transition-colors cursor-pointer relative py-1 ${
              activeSection === 'monolith-experience' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            <span>EXPERIENCE</span>
            {activeSection === 'monolith-experience' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#ffaa00]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              playIndustrialClick();
              onNavigateSection('monolith-tech');
            }}
            onMouseEnter={playButtonHover}
            className={`transition-colors cursor-pointer relative py-1 ${
              activeSection === 'monolith-tech' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            <span>ABOUT</span>
            {activeSection === 'monolith-tech' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#ffaa00]" />
            )}
          </button>
        </nav>

        {/* Right: Sound Toggle, Switcher & [ /// CONTACT /// ] */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            title={soundOn ? 'Desativar áudio tátil & atmosfera' : 'Ativar áudio tátil & atmosfera'}
            className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-sm border border-white/10 transition-colors cursor-pointer"
          >
            {soundOn ? <Volume2 size={13} className="text-[#ffaa00]" /> : <VolumeX size={13} />}
          </button>

          {/* Quick Portfolio Theme Switcher */}
          <div className="hidden lg:block">
            <PortfolioSwitcher variant="navbar" />
          </div>

          {/* [ /// CONTACT /// ] Bracketed Button */}
          <button
            type="button"
            onClick={() => {
              playLaserHum();
              onNavigateSection('monolith-contact');
            }}
            onMouseEnter={playButtonHover}
            className="px-4 py-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-white hover:text-[#ffaa00] border border-white/30 hover:border-[#ffaa00] bg-black/40 hover:bg-black/80 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            [ /// CONTACT /// ]
          </button>
        </div>
      </header>

      {/* MAIN HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 w-full h-full flex flex-col justify-between px-6 sm:px-12 pt-28 pb-8 pointer-events-none"
      >
        {/* Top/Middle Left: Monumental Title Block */}
        <div className="max-w-xl space-y-4 pt-4 sm:pt-10 pointer-events-auto">
          {/* // 01 Tag */}
          <div className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-white/60">
            // 01
          </div>

          {/* Massive Monumental Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[1.03]">
            BUILDING<br />
            SOFTWARE<br />
            FOR A<br />
            BIGGER<br />
            TOMORROW
          </h1>

          {/* Subtext */}
          <p className="font-mono text-xs sm:text-[13px] tracking-wider uppercase text-white/70 max-w-md leading-relaxed pt-2">
            I TURN COMPLEX IDEAS INTO SCALABLE PRODUCTS, FOCUSED ON MOBILE, WEB AND REAL-WORLD IMPACT.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary Button: VIEW PROJECTS ↗ */}
            <button
              type="button"
              onClick={() => {
                playIndustrialClick();
                onNavigateSection('monolith-projects');
              }}
              onMouseEnter={playButtonHover}
              className="px-6 py-3.5 bg-white hover:bg-slate-200 text-black font-mono font-extrabold text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_10px_35px_rgba(255,255,255,0.35)] cursor-pointer"
            >
              <span>VIEW PROJECTS</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>

            {/* Secondary Button: // EXPLORE (Smooth scroll to Case Studies) */}
            <button
              type="button"
              onClick={() => {
                playLaserHum();
                onNavigateSection('monolith-projects');
              }}
              onMouseEnter={playButtonHover}
              className="px-5 py-3.5 bg-transparent hover:bg-white/10 text-white/80 hover:text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 border border-transparent hover:border-white/20 transition-all cursor-pointer"
            >
              <Sparkles size={14} className="text-[#ffaa00]" />
              <span>// EXPLORE</span>
            </button>
          </div>
        </div>

            {/* Bottom Row: Featured Projects (Left) + Minimalist Slogan (Right) */}
            <div className="w-full flex flex-col md:flex-row items-end justify-between gap-6 pointer-events-auto">
              {/* Left: // FEATURED PROJECTS Strip */}
              <div className="w-full md:max-w-2xl space-y-2.5">
                <div className="font-mono text-[11px] font-semibold tracking-widest uppercase text-white/50">
                  // FEATURED PROJECTS
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {featuredProjects.map((p) => (
                    <motion.div
                      key={p.id}
                      whileHover={{ y: -3 }}
                      onClick={() => {
                        playIndustrialClick();
                        setSelectedProject(p);
                      }}
                      onMouseEnter={playButtonHover}
                      className="group relative bg-[#0a0d12] border border-white/20 hover:border-[#ffaa00]/90 p-4 transition-all cursor-pointer overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
                    >
                      {/* Dark Atmospheric Brutalist Thumbnail */}
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-65 group-hover:opacity-85 scale-100 group-hover:scale-105 transition-all duration-400 ease-out pointer-events-none"
                        style={{ backgroundImage: `url(${p.thumbImg})` }}
                      />
                      {/* Dark Contrast Veil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 pointer-events-none" />

                      <div className="relative z-10 flex flex-col justify-between h-14">
                        <div className="flex items-center justify-between">
                          <h3 className="font-mono font-bold text-xs sm:text-sm tracking-wider text-white group-hover:text-[#ffaa00] transition-colors drop-shadow-md">
                            {p.title}
                          </h3>
                          <ArrowUpRight
                            size={14}
                            className="text-white/60 group-hover:text-[#ffaa00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          />
                        </div>

                        <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-white/60 uppercase font-semibold">
                          {p.category}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Right: IDEAS / SYSTEMS / PEOPLE Slogan */}
              <div className="hidden lg:flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-white/60 text-right">
                <div className="space-y-0.5">
                  <div>IDEAS</div>
                  <div>SYSTEMS</div>
                  <div>PEOPLE</div>
                </div>
                <div className="w-[1.5px] h-10 bg-white/40" />
              </div>
            </div>
          </motion.div>

      {/* RIGHT-SIDE VERTICAL PAGINATION TRACK (01, 02, 03, 04, 05) */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-6 font-mono text-xs select-none">
        {[
          { id: 'citadel-hero', num: '01' },
          { id: 'monolith-projects', num: '02' },
          { id: 'monolith-experience', num: '03' },
          { id: 'monolith-tech', num: '04' },
          { id: 'monolith-contact', num: '05' }
        ].map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.num}
              type="button"
              onClick={() => {
                playIndustrialClick();
                onNavigateSection(item.id);
              }}
              onMouseEnter={playButtonHover}
              className={`flex items-center gap-2 group cursor-pointer transition-all ${
                isActive ? 'text-white font-bold' : 'text-white/40 hover:text-white'
              }`}
            >
              <span>{item.num}</span>
              <div
                className={`w-[2px] transition-all duration-300 ${
                  isActive ? 'h-6 bg-white' : 'h-2 bg-white/20 group-hover:h-4 group-hover:bg-white/60'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* FEATURED PROJECT PREVIEW MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0f1218] border border-[#ffaa00]/60 p-6 sm:p-8 font-mono text-white shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            >
              <button
                type="button"
                onClick={() => {
                  playIndustrialClick();
                  setSelectedProject(null);
                }}
                className="absolute top-4 right-4 text-white/60 hover:text-white p-1 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#ffaa00] font-bold">
                  <span className="w-2 h-2 bg-[#ffaa00] rounded-sm" />
                  <span>/// CASE_PREVIEW // {selectedProject.category}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black font-['Space_Grotesk'] text-white">
                  {selectedProject.title}
                </h2>

                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Key Metrics */}
                <div className="space-y-2 pt-2 border-t border-[#383b44]">
                  <div className="text-[11px] font-bold text-[#00f0ff] uppercase tracking-wider">
                    ◆ RESULTADOS & IMPACTO:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2 bg-[#161a22] border border-white/10 text-xs text-white"
                      >
                        ✓ {m}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2">
                    ■ STACK TECNOLÓGICA:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 border border-white/15 text-[11px] text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      playIndustrialClick();
                      setSelectedProject(null);
                      onNavigateSection('monolith-projects');
                    }}
                    className="px-5 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    VER DETALHES COMPLETOS NO DOSSIÊ ↗
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="text-xs text-white/50 hover:text-white uppercase font-bold"
                  >
                    FECHAR
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
