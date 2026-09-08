import React, { useState } from 'react';
import { caseStudies } from '../data/portfolioData';
import { Layers, CheckCircle, Cpu, Sparkles, AlertCircle } from 'lucide-react';
import type { CaseStudyItem } from '../types';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(caseStudies[0].id);

  const activeStudy: CaseStudyItem = caseStudies.find(c => c.id === activeTab) || caseStudies[0];

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>CASOS DE ENGENHARIA & ARQUITETURA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Projetos de Alto Impacto.
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
            Mergulhe em como desafios complexos de estabilidade, escala corporativa e inteligência artificial foram solucionados na prática.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-800/80 pb-4">
          {caseStudies.map((study) => {
            const isActive = study.id === activeTab;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTab(study.id)}
                className={`px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/40 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-850'
                }`}
              >
                <span>{study.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-cyan-500/20 text-cyan-200' : 'bg-slate-800 text-slate-500'
                }`}>
                  {study.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Presentation */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Visual Asset Display */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[520px] bg-slate-950 overflow-hidden flex items-center justify-center group">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              {/* Floating Overlay Badge on the Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold">{activeStudy.clientOrProject}</div>
                  <div className="text-sm font-bold text-white">{activeStudy.badge}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-mono text-xs font-bold">
                  ✓
                </div>
              </div>
            </div>

            {/* Right Column: Case Details & Technical Architecture */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                
                {/* Header */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                  <span className="text-cyan-400 font-bold">{activeStudy.clientOrProject}</span>
                  <span>•</span>
                  <span>{activeStudy.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                  {activeStudy.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  {activeStudy.summary}
                </p>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  
                  {/* Problem */}
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-400 mb-2">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>O DESAFIO</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeStudy.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/30">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 mb-2">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>SOLUÇÃO APLICADA</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeStudy.solution}
                    </p>
                  </div>

                </div>

                {/* Key Results / Checklist */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Resultados Mensuráveis:</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStudy.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-200 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Technologies Applied */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-500 mb-2 uppercase tracking-wider">
                  Tecnologias & Ferramentas Utilizadas:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

