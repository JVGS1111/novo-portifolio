import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, ChevronDown, ChevronUp, Building } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(experiences[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden bg-[#0a0d14]/60 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRAJETÓRIA PROFISSIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experiência & Evolução Técnica
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            5 anos de consistência, evolução contínua de liderança técnica e entrega em ambientes corporativos de alto ritmo.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative group pl-6 sm:pl-10">
                
                {/* Timeline Node Icon / Dot */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  exp.current
                    ? 'bg-slate-950 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/30 ring-4 ring-cyan-500/10'
                    : 'bg-slate-950 border-slate-700 text-slate-500 group-hover:border-slate-500'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${exp.current ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'}`} />
                </div>

                {/* Period on the left for desktop */}
                <div className="hidden sm:block absolute -left-36 top-2 text-right w-28 text-xs font-mono text-slate-400 font-medium">
                  {exp.period}
                </div>

                {/* Main Card */}
                <div className={`rounded-2xl border transition-all duration-300 p-6 ${
                  exp.current
                    ? 'bg-slate-900/90 border-cyan-500/30 shadow-xl shadow-cyan-950/40'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                }`}>
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            POSIÇÃO ATUAL
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
                            <span className="text-slate-300">Cliente: {exp.client}</span>
                          </>
                        )}
                        <span className="sm:hidden flex items-center gap-1 text-slate-500">
                          • <Calendar className="w-3 h-3" /> {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Expand/Collapse Toggle Button */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors"
                      aria-label="Expandir detalhes"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800 space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                        Principais Atividades & Entregas:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Tags */}
                  <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-950/80 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
