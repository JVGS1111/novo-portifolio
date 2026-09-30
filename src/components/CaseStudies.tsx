import React, { useState } from 'react';
import { Layers, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export const CaseStudies: React.FC = () => {
  const { t } = useLanguage();
  const [activeStudyId, setActiveStudyId] = useState<string>(t.cases.studies[0].id);

  const activeStudy = t.cases.studies.find((s) => s.id === activeStudyId) || t.cases.studies[0];

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-500/10">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.cases.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.cases.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.cases.subtitle}
          </p>
        </motion.div>

        {/* Case Studies Selector Tabs with Apple Liquid Glass Segmented Pill */}
        <div className="flex justify-center mb-8 sm:mb-12 w-full max-w-full px-1">
          <div className="apple-liquid-pill p-1.5 rounded-full flex flex-wrap items-center justify-center gap-1 sm:gap-2 shadow-xl shadow-black/30 border border-white/15">
            {t.cases.studies.map((study) => {
              const isActive = activeStudy.id === study.id;
              return (
                <button
                  key={study.id}
                  onClick={() => setActiveStudyId(study.id)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center gap-2 sm:gap-2.5 cursor-pointer ${
                    isActive
                      ? 'text-cyan-200 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {/* Gliding Spring Background Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStudyTabPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 apple-liquid-pill border border-cyan-400/50 rounded-full shadow-lg shadow-cyan-500/20"
                    />
                  )}

                  <span className="relative z-10">{study.title}</span>
                  <span className={`relative z-10 text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                    isActive ? 'bg-cyan-500/25 text-cyan-200 border border-cyan-400/40' : 'bg-white/10 text-slate-400'
                  }`}>
                    {study.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Case Study Presentation with AnimatePresence — Apple Liquid Glass */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudy.id}
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="apple-liquid-glass rounded-3xl overflow-hidden shadow-2xl border border-white/15 relative"
          >
            {/* Top specular reflection glint */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none z-20" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Column: Visual Asset Display with Smooth Hover Zoom */}
              <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] lg:min-h-[520px] bg-slate-950 overflow-hidden flex items-center justify-center group">
                <img
                  src={activeStudy.image}
                  alt={activeStudy.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Floating Overlay Badge on the Image */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-2xl apple-liquid-glass backdrop-blur-xl border border-white/20 flex items-center justify-between shadow-2xl"
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-xs font-mono text-cyan-400 font-semibold truncate">{activeStudy.clientOrProject}</div>
                    <div className="text-xs sm:text-sm font-bold text-white truncate">{activeStudy.badge}</div>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center font-mono text-xs font-bold animate-pulse shrink-0">
                    ✓
                  </div>
                </motion.div>
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
                    <div className="p-4 rounded-2xl bg-slate-950/70 border border-red-500/20 hover:border-red-500/40 transition-colors">
                      <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold mb-1.5">
                        <ShieldAlert className="w-4 h-4" />
                        <span>{t.cases.problemLabel}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {activeStudy.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/70 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                      <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{t.cases.solutionLabel}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {activeStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Results Checklist with Staggered Entrance */}
                  <div className="mb-8">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
                      <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                      {t.cases.keyResultsLabel}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeStudy.results.map((res, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.06 }}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-200 hover:border-slate-700 transition-colors"
                        >
                          <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                          <span>{res}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Technologies Applied with Hover Lift */}
                <div className="pt-6 border-t border-slate-800">
                  <div className="text-xs font-mono text-slate-500 mb-2.5">{t.cases.technologiesLabel}</div>
                  <div className="flex flex-wrap gap-2">
                    {activeStudy.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/30 text-cyan-300 border border-cyan-800/40 cursor-default shadow-sm transition-shadow"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
