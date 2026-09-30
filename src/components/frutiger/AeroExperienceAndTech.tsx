import React from 'react';
import { motion } from 'framer-motion';
import { playAeroClick } from './soundEffectsAero';

export const AeroExperienceAndTech: React.FC = () => {
  const experiences = [
    {
      role: 'Senior Mobile & Front-end Engineer',
      company: 'Invillia / Casas Bahia (banQi)',
      period: '2022 – Presente',
      isCurrent: true,
      description:
        'Liderança técnica em modernização mobile, arquitetura modular e pontes nativas (Kotlin/Swift). Redução recorde de -98% dos crashes semanais, mentoria de desenvolvedores e automação de pipelines CI/CD.'
    },
    {
      role: 'Mid-Level Mobile Engineer',
      company: 'Invillia / banQi',
      period: '2021 – 2022',
      isCurrent: false,
      description:
        'Otimização de renderização e re-renders críticos no React Native, reestruturação de estado global, integração com gateways de pagamento Pix e cartões de crédito em alta escala.'
    },
    {
      role: 'Mid-Level Full Stack & Mobile Developer',
      company: 'WiiD Studio',
      period: '2020 – 2021',
      isCurrent: false,
      description:
        'Desenvolvimento de aplicações React Native e React/Next.js de alta performance, integração com APIs RESTful e GraphQL, e bibliotecas compartilhadas de componentes reutilizáveis.'
    },
    {
      role: 'Junior Frontend Developer',
      company: 'WiiD Studio',
      period: '2019 – 2020',
      isCurrent: false,
      description:
        'Construção de interfaces responsivas de alta fidelidade visual, animações web interativas e testes unitários automatizados com Jest.'
    }
  ];

  const skillGroups = [
    {
      title: '📱 Mobile & Nativos (8)',
      skills: ['React Native', 'Kotlin', 'Swift', 'Expo', 'Android Studio', 'Xcode', 'Hermes Engine', 'Native Modules']
    },
    {
      title: '🌐 Front-end & Web Moderno (8)',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5/CSS3', 'Tailwind CSS', 'Redux', 'Zustand']
    },
    {
      title: '☁️ DevOps & Cloud (8)',
      skills: ['Azure DevOps', 'GitHub Actions', 'Fastlane', 'AWS S3/CloudFront', 'Docker', 'CI/CD Pipelines', 'Databricks', 'Dynatrace']
    },
    {
      title: '🛡️ Qualidade & Arquitetura (8)',
      skills: ['Clean Architecture', 'TDD', 'Jest', 'Vitest', 'Testing Library', 'Design Systems', 'Clean Code', 'Micro-frontends']
    }
  ];

  return (
    <section className="relative z-10 my-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Window: Professional Trajectory */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="aero-window flex flex-col overflow-hidden text-slate-800 shadow-xl"
        >
          {/* Aero Titlebar */}
          <div className="aero-titlebar px-3 py-2 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="text-sm">💼</span>
              <span className="text-xs font-bold text-white tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                Trajetória Profissional — 4 Posições de Sucesso & Alto Impacto
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-white/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-white/80" />
            </div>
          </div>

          {/* Timeline List */}
          <div className="p-4 bg-gradient-to-b from-white/95 via-sky-50/70 to-white/90 space-y-4">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/90 border border-sky-200/90 shadow-sm relative group hover:border-sky-400 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                    {exp.role} • <span className="text-sky-700 font-semibold">{exp.company}</span>
                  </h4>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold self-start sm:self-auto ${
                      exp.isCurrent
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-sky-100 text-sky-800 border border-sky-200'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className="text-[11.5px] text-slate-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Window: Aquatic Tech Matrix & Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="aero-window flex flex-col overflow-hidden text-slate-800 shadow-xl"
        >
          {/* Aero Titlebar */}
          <div className="aero-titlebar px-3 py-2 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="text-sm">🫧</span>
              <span className="text-xs font-bold text-white tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                Matriz Tecnológica Aquática (32 Competências) & Certificações
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-white/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-white/80" />
            </div>
          </div>

          {/* Matrix Content */}
          <div className="p-4 bg-gradient-to-b from-white/95 via-sky-50/70 to-white/90 space-y-3.5">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h5 className="text-[11px] font-extrabold text-sky-900 mb-1.5 uppercase tracking-wide">
                  {group.title}
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      onClick={playAeroClick}
                      className="btn-jelly-glass px-2 py-0.5 rounded-lg text-[10px] font-semibold text-slate-800 cursor-pointer hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Certifications and Languages Footer Bar */}
            <div className="pt-3 border-t border-sky-200/80 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-[10.5px] shadow-sm">
                🎓 GitHub Copilot Certified (2025–2028)
              </span>
              <span className="px-2 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-900 font-medium text-[10.5px]">
                🏛️ Uninter ADS
              </span>
              <span className="px-2 py-1 rounded-full bg-white border border-sky-200 text-slate-800 font-medium text-[10.5px]">
                🇧🇷 Português Nativo
              </span>
              <span className="px-2 py-1 rounded-full bg-white border border-sky-200 text-slate-800 font-medium text-[10.5px]">
                🇺🇸 Inglês B2
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
