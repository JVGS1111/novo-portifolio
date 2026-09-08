import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Flame, Sparkles } from 'lucide-react';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* 3D Interactive Three.js Background Canvas */}
      <ThreeHeroCanvas />

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Availability & Seniority Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md text-xs font-mono text-cyan-300 mb-6 shadow-lg shadow-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{personalInfo.title} • {personalInfo.subtitle}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 font-sans">5 Anos de Experiência</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
          Engenharia mobile de{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            alta estabilidade
          </span>{' '}
          e performance extrema.
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed font-normal text-balance">
          Especialista em modernizar aplicações <strong className="text-white font-semibold">React Native</strong> em larga escala,
          integrando módulos nativos em <strong className="text-cyan-300 font-medium">Kotlin</strong> e <strong className="text-purple-300 font-medium">Swift</strong>, 
          erradicando débitos técnicos críticos e acelerando ciclos com <strong className="text-indigo-300 font-medium">automação inteligente com IA</strong>.
        </p>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl mb-10 text-left">
          <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-3.5 backdrop-blur-md hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Estabilidade</span>
            </div>
            <div className="text-lg font-extrabold text-white">-98% Crashes</div>
            <div className="text-[11px] text-slate-400">De 120k para 2k/sem</div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-3.5 backdrop-blur-md hover:border-sky-500/40 transition-all">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Memória</span>
            </div>
            <div className="text-lg font-extrabold text-white">-55% RAM</div>
            <div className="text-[11px] text-slate-400">900MB para 400MB</div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-3.5 backdrop-blur-md hover:border-indigo-500/40 transition-all">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Startup</span>
            </div>
            <div className="text-lg font-extrabold text-white">-75% Tempo</div>
            <div className="text-[11px] text-slate-400">60s para 15s cold start</div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-3.5 backdrop-blur-md hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Inovação</span>
            </div>
            <div className="text-lg font-extrabold text-white">AI Dev Tools</div>
            <div className="text-[11px] text-slate-400">Automação de PRs & Testes</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#metricas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            Explorar Métricas Reais
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/80 backdrop-blur-md transition-all duration-200 hover:border-slate-500"
          >
            Casos de Sucesso
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/50 border border-slate-800 transition-all duration-200"
          >
            Ver LinkedIn
          </a>
        </div>

        {/* Tech Stack Horizontal Ticker */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 max-w-3xl text-xs font-mono text-slate-400">
          <span className="text-slate-500 mr-2">Tech Core:</span>
          {['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Next.js', 'Fastlane', 'AppDome (RASP)', 'GitHub Copilot'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
