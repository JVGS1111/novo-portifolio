import React, { useState } from 'react';
import { Layers, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const CaseStudies: React.FC = () => {
  const { t } = useLanguage();
  const [activeStudyId, setActiveStudyId] = useState<string>(t.cases.studies[0].id);

  const activeStudy = t.cases.studies.find((s) => s.id === activeStudyId) || t.cases.studies[0];

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.cases.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.cases.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.cases.subtitle}
          </p>
        </div>

        {/* Case Studies Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {t.cases.studies.map((study) => {
            const isActive = activeStudy.id === study.id;
            return (
              <button
                key={study.id}
                onClick={() => setActiveStudyId(study.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-3 ${
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
                loading="lazy"
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
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-red-500/20">
                    <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold mb-1.5">
                      <ShieldAlert className="w-4 h-4" />
                      <span>{t.cases.problemLabel}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeStudy.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-cyan-500/20">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{t.cases.solutionLabel}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Key Results Checklist */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                    {t.cases.keyResultsLabel}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStudy.results.map((res, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-200"
                      >
                        <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Technologies Applied */}
              <div className="pt-6 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-500 mb-2.5">{t.cases.technologiesLabel}</div>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/30 text-cyan-300 border border-cyan-800/40"
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
