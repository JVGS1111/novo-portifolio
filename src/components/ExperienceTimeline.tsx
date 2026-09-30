import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export const ExperienceTimeline: React.FC = () => {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string>(t.experience.items[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden bg-[#0a0d14]/60 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-500/10">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.experience.title}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Timeline Container with Travelling Energy Beam */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 md:ml-36 space-y-12">
          {/* Animated Glowing Light Beam travelling down the line */}
          <div className="timeline-beam" />

          {t.experience.items.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group pl-6 sm:pl-8 md:pl-10"
              >
                {/* Timeline Node Icon / Dot with Pulse Ring */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  exp.current
                    ? 'bg-slate-950 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/30 ring-4 ring-cyan-500/10'
                    : 'bg-slate-950 border-slate-700 text-slate-500 group-hover:border-cyan-400/60'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${exp.current ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500 group-hover:bg-cyan-400'}`} />
                </div>

                {/* Period on the left for desktop (md: and up) */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-28 text-xs font-mono text-slate-400 font-medium group-hover:text-cyan-300 transition-colors">
                  {exp.period}
                </div>

                {/* Main Card with Smooth Hover Elevation & Apple Liquid Glass */}
                <div className={`rounded-3xl transition-all duration-300 p-5 sm:p-6 relative overflow-hidden ${
                  exp.current
                    ? 'apple-liquid-card border-cyan-400/50 shadow-2xl shadow-cyan-950/40'
                    : 'apple-liquid-glass hover:border-white/25'
                }`}>
                  {/* Top specular reflection glint */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {t.experience.currentPositionBadge}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium mt-1">
                        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                          <Building className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        {exp.client && (
                          <>
                            <span>•</span>
                            <span className="text-slate-300">{t.experience.clientPrefix} {exp.client}</span>
                          </>
                        )}
                        <span className="md:hidden flex items-center gap-1 text-slate-500">
                          • <Calendar className="w-3 h-3" /> {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Expand/Collapse Toggle Button with Rotating Chevron */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      aria-label={t.experience.expandDetailsAria}
                    >
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Expandable Content with Framer Motion AnimatePresence */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-slate-800 space-y-3">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                            {t.experience.responsibilitiesTitle}
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <motion.li
                                key={rIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: rIdx * 0.04 }}
                                className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                                <span>{resp}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Technologies Tags with Micro-hover */}
                  <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950/80 text-slate-400 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
