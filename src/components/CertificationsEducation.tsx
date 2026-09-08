import React from 'react';
import { education, languages } from '../data/portfolioData';
import { Award, GraduationCap, Globe, Shield, HeartHandshake } from 'lucide-react';

export const CertificationsEducation: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0d14]/70 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-xs font-mono text-purple-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICAÇÕES & FORMAÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Fundamentos Sólidos & Credenciais
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Certificações de fronteira tecnológica, formação acadêmica em tecnologia da informação e comunicação bilíngue.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: Certifications & Education */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Formação & Certificados Oficiais
            </h3>

            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-cyan-400">{item.institution}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400">{item.period}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {item.badge && (
                  <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}

            {/* Engineering Culture Note */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-slate-900/60 to-indigo-950/20 border border-slate-800 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Liderança Técnica & Mentoria
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Experiência ativa em code reviews minuciosos, difusão de Clean Code, facilitação de alinhamento com Product Managers e aceleração técnica de desenvolvedores juniores e estagiários.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Languages */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              Idiomas & Atuação
            </h3>

            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">{lang.name}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      {lang.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Security & RASP Badge */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-left">
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">Segurança Móvel</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experiência prática em proteção RASP (Runtime Application Self-Protection) via AppDome em apps bancários regulados.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
