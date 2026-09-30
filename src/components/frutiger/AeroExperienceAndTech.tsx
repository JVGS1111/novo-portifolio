import React from 'react';
import { motion } from 'framer-motion';
import { playAeroClick } from './soundEffectsAero';
import { useLanguage } from '../../i18n';

export const AeroExperienceAndTech: React.FC = () => {
  const { language } = useLanguage();

  const experiencesEn = [
    {
      role: 'Senior Mobile & Front-end Engineer',
      company: 'Invillia / Casas Bahia (banQi)',
      period: '2022 – Present',
      isCurrent: true,
      description:
        'Technical leadership in mobile modernization, modular architecture, and native bridges (Kotlin/Swift). Record -98% reduction in weekly crashes, developer mentoring, and CI/CD automation.'
    },
    {
      role: 'Mid-Level Mobile Engineer',
      company: 'Invillia / banQi',
      period: '2021 – 2022',
      isCurrent: false,
      description:
        'Critical rendering and re-render optimizations in React Native, global state redesign, and integration with Pix and credit card payment gateways at scale.'
    },
    {
      role: 'Mid-Level Full Stack & Mobile Developer',
      company: 'WiiD Studio',
      period: '2020 – 2021',
      isCurrent: false,
      description:
        'High-performance React Native and React/Next.js application engineering, RESTful and GraphQL API integrations, and shared component libraries.'
    },
    {
      role: 'Junior Frontend Developer',
      company: 'WiiD Studio',
      period: '2019 – 2020',
      isCurrent: false,
      description:
        'Responsive high-fidelity user interface development, interactive web animations, and automated unit testing with Jest.'
    }
  ];

  const experiencesPt = [
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

  const experiences = language === 'pt' ? experiencesPt : experiencesEn;

  const skillGroups = [
    {
      title: language === 'pt' ? '📱 Mobile & Nativos (8)' : '📱 Mobile & Native (8)',
      skills: ['React Native', 'Kotlin', 'Swift', 'Expo', 'Android Studio', 'Xcode', 'Hermes Engine', 'Native Modules']
    },
    {
      title: language === 'pt' ? '🌐 Front-end & Web Moderno (8)' : '🌐 Front-end & Modern Web (8)',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5/CSS3', 'Tailwind CSS', 'Redux', 'Zustand']
    },
    {
      title: '☁️ DevOps & Cloud (8)',
      skills: ['Azure DevOps', 'GitHub Actions', 'Fastlane', 'AWS S3/CloudFront', 'Docker', 'CI/CD Pipelines', 'Databricks', 'Dynatrace']
    },
    {
      title: language === 'pt' ? '🛡️ Qualidade & Arquitetura (8)' : '🛡️ Quality & Architecture (8)',
      skills: ['Clean Architecture', 'TDD', 'Jest', 'Vitest', 'Testing Library', 'Design Systems', 'Clean Code', 'Micro-frontends']
    }
  ];

  return (
    <section className="relative z-10 my-6">
      {/* Section Header Badge */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-1">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-sm text-sky-900 text-xs font-bold tracking-tight">
          <span className="text-sm">⚡</span>
          <span>
            {language === 'pt'
              ? 'TRAJETÓRIA EXECUTIVA & BANCO TECNOLÓGICO'
              : 'EXECUTIVE TRAJECTORY & TECH MATRIX'}
          </span>
          <span className="text-sky-300">•</span>
          <span className="text-sky-600 font-mono text-[11px] font-semibold">
            {language === 'pt' ? 'Invillia • WiiD • Casas Bahia / banQi' : 'Invillia • WiiD • Casas Bahia / banQi'}
          </span>
        </div>
      </div>

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
          <div className="aero-titlebar px-3.5 py-2.5 min-h-[38px] flex items-center justify-between select-none">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-sm shrink-0 drop-shadow-sm">💼</span>
              <span className="aero-titlebar-text text-xs tracking-tight truncate">
                {language === 'pt'
                  ? 'Trajetória Profissional — 4 Posições de Sucesso & Alto Impacto'
                  : 'Professional Trajectory — 4 High-Impact Positions'}
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0 ml-2">
              <div className="aero-ctrl-btn aero-ctrl-min w-2.5 h-2.5" />
              <div className="aero-ctrl-btn aero-ctrl-max w-2.5 h-2.5" />
              <div className="aero-ctrl-btn aero-ctrl-close w-2.5 h-2.5" />
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
          <div className="aero-titlebar px-3.5 py-2.5 min-h-[38px] flex items-center justify-between select-none">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-sm shrink-0 drop-shadow-sm">🫧</span>
              <span className="aero-titlebar-text text-xs tracking-tight truncate">
                {language === 'pt'
                  ? 'Matriz Tecnológica Aquática (32 Competências) & Certificações'
                  : 'Aquatic Tech Matrix (32 Competencies) & Certifications'}
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0 ml-2">
              <div className="aero-ctrl-btn aero-ctrl-min w-2.5 h-2.5" />
              <div className="aero-ctrl-btn aero-ctrl-max w-2.5 h-2.5" />
              <div className="aero-ctrl-btn aero-ctrl-close w-2.5 h-2.5" />
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
                {language === 'pt' ? '🇧🇷 Português Nativo' : '🇺🇸 English (Full Professional)'}
              </span>
              <span className="px-2 py-1 rounded-full bg-white border border-sky-200 text-slate-800 font-medium text-[10.5px]">
                {language === 'pt' ? '🇺🇸 Inglês B2' : '🇧🇷 Portuguese (Native)'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
