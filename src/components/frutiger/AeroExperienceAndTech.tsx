import React from 'react';
import { motion } from 'framer-motion';
import { playAeroClick } from './soundEffectsAero';
import { useLanguage } from '../../i18n';

export const AeroExperienceAndTech: React.FC = () => {
  const { language } = useLanguage();

  const experiencesEn = [
    {
      role: 'Senior Software Engineer (Front-end & Mobile)',
      company: 'Invillia / Casas Bahia Pay (banQi)',
      period: 'Sep 2025 – Present',
      isCurrent: true,
      description:
        'Technical reference for mobile and front-end engineering for Casas Bahia Pay (formerly banQi). Drove a record -98% reduction in weekly crashes (120k to 2k), -55% RAM footprint, and -75% splash-to-home latency. Implemented AI-driven automation for PR reviews and test generation, AppDome RASP security, and saved $10,000/yr on AWS infrastructure.'
    },
    {
      role: 'Mid-Level Software Engineer (Front-end & Mobile)',
      company: 'Invillia / Casas Bahia Pay (banQi)',
      period: 'Sep 2024 – Sep 2025',
      isCurrent: false,
      description:
        'Continuous engineering of high-scale mobile applications, building and maintaining native modules for React Native in Kotlin (Android) and Swift (iOS), and evolving cross-platform design systems with Clean Code and SOLID principles.'
    },
    {
      role: 'Mid-Level Mobile & Front-end Developer',
      company: 'WiiD – Work in Ideas',
      period: 'Jan 2024 – Sep 2024',
      isCurrent: false,
      description:
        'Cross-platform digital product engineering with React, Next.js, and React Native (Expo). Complete feature ownership from Figma design to production release, automated test suites with Jest/Vitest, and technical mentoring for juniors and interns.'
    },
    {
      role: 'Junior Front-end Developer',
      company: 'WiiD – Work in Ideas',
      period: 'Dec 2021 – Jan 2024',
      isCurrent: false,
      description:
        'Development and maintenance of responsive web and mobile interfaces using React, React Native, and TypeScript. Automated unit test suite implementation with Jest ensuring high code stability.'
    },
    {
      role: 'Web Developer',
      company: 'Freelance – Self-Employed',
      period: 'Dec 2020 – Dec 2021',
      isCurrent: false,
      description:
        'Development and maintenance of high-converting web applications, custom WordPress websites, and responsive landing pages utilizing PHP, JavaScript, CSS, and HTML.'
    }
  ];

  const experiencesPt = [
    {
      role: 'Engenheiro de Software Sênior (Front-end & Mobile)',
      company: 'Invillia / Casas Bahia Pay (banQi)',
      period: 'Set 2025 – Presente',
      isCurrent: true,
      description:
        'Referência técnica em engenharia mobile e front-end para o cliente banQi (Casas Bahia Pay). Redução de 98% em crashes (de 120 mil para 2 mil semanais), corte de 55% de RAM e aceleração de 75% no splash-to-home. Automações com agentes de IA para PRs e testes, segurança móvel RASP AppDome e economia de US$ 10.000/ano em AWS.'
    },
    {
      role: 'Engenheiro de Software Pleno (Front-end & Mobile)',
      company: 'Invillia / Casas Bahia Pay (banQi)',
      period: 'Set 2024 – Set 2025',
      isCurrent: false,
      description:
        'Desenvolvimento contínuo de aplicações móveis robustas, criação e manutenção de módulos nativos para React Native em Kotlin (Android) e Swift (iOS), e evolução do Design System compartilhado com Clean Code e SOLID.'
    },
    {
      role: 'Desenvolvedor Mobile & Front-end Pleno',
      company: 'WiiD – Work in Ideas',
      period: 'Jan 2024 – Set 2024',
      isCurrent: false,
      description:
        'Desenvolvimento de produtos digitais multiplataforma com React, Next.js e React Native (Expo). Ownership completo de features do Figma ao deploy em produção, suítes de testes automatizados com Jest e Vitest, e mentoria técnica para juniores e estagiários.'
    },
    {
      role: 'Desenvolvedor Front-end Júnior',
      company: 'WiiD – Work in Ideas',
      period: 'Dez 2021 – Jan 2024',
      isCurrent: false,
      description:
        'Construção e manutenção de interfaces responsivas web e mobile com React, React Native e TypeScript. Escrita de testes unitários com Jest para assegurar estabilidade contínua e padrões de qualidade.'
    },
    {
      role: 'Desenvolvedor Web',
      company: 'Freelance – Autônomo',
      period: 'Dez 2020 – Dez 2021',
      isCurrent: false,
      description:
        'Desenvolvimento e manutenção de aplicações web, landing pages de alta conversão e websites customizados em WordPress utilizando PHP, JavaScript, CSS e HTML.'
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
            {language === 'pt' ? 'Invillia • WiiD • Casas Bahia / banQi • Freelance' : 'Invillia • WiiD • Casas Bahia / banQi • Freelance'}
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
                  ? 'Trajetória Profissional — 5 Posições & Histórico de Sucesso'
                  : 'Professional Trajectory — 5 High-Impact Positions'}
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
              <span className="px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-bold text-[10.5px] shadow-sm">
                ☁️ AWS Certified Solutions Architect – Associate ({language === 'pt' ? 'Em andamento Q4 2026' : 'In Progress Q4 2026'})
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-[10.5px] shadow-sm">
                🎓 GitHub Copilot Certified (2025–2028)
              </span>
              <span className="px-2.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-900 font-medium text-[10.5px]">
                🏛️ Uninter ADS (2019–2021)
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-sky-200 text-slate-800 font-medium text-[10.5px]">
                {language === 'pt' ? '🇧🇷 Português Nativo' : '🇺🇸 English (B2 Upper-Intermediate)'}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-sky-200 text-slate-800 font-medium text-[10.5px]">
                {language === 'pt' ? '🇺🇸 Inglês B2' : '🇧🇷 Portuguese (Native)'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
