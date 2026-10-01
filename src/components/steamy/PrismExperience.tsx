import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n';


interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const PrismExperience: React.FC = () => {
  const { language } = useLanguage();

  const experiencesEn: ExperienceItem[] = [
    {
      id: 'invillia-senior',
      role: 'Senior Software Engineer (Front-end & Mobile)',
      company: 'Invillia · Casas Bahia Pay (banQi)',
      period: 'Sep 2025 — Present',
      location: 'Brazil · Remote',
      description:
        'Technical leadership in mobile and front-end engineering for Casas Bahia Pay (banQi), spearheading critical stability initiatives, architectural modernization, and hyperscale performance.',
      highlights: [
        '-98% crashes (120k → 2k/wk) & -55% RAM footprint',
        '0% → 40% test coverage with 100% CI/CD reliability',
        'Strategic AI innovation: automated PR reviews, tests & docs',
      ],
      techStack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'GitHub Actions', 'Azure DevOps', 'Jest', 'AppDome', 'AWS'],
    },
    {
      id: 'invillia-mid',
      role: 'Mid-Level Software Engineer (Front-end & Mobile)',
      company: 'Invillia · Casas Bahia Pay (banQi)',
      period: 'Sep 2024 — Sep 2025',
      location: 'Brazil · Remote',
      description:
        'Continuous engineering of robust mobile applications, high-performance native modules, and evolution of the shared multi-OS Design System.',
      highlights: [
        'Engineered native React Native modules in Kotlin & Swift',
        'System design & shared multi-OS Design System evolution',
        'Clean Code, SOLID & extensive unit/integration test suites',
      ],
      techStack: ['React Native', 'React', 'TypeScript', 'Kotlin', 'Swift', 'Fastlane', 'GitHub Actions', 'Azure DevOps', 'Jest', 'AppDome'],
    },
    {
      id: 'wiid-mid',
      role: 'Mid-Level Mobile & Front-end Developer',
      company: 'WiiD – Work in Ideas',
      period: 'Jan 2024 — Sep 2024',
      location: 'Curitiba, Brazil · Hybrid',
      description:
        'Development of cross-platform digital products focused on elevated UX, high performance, and rigorous automated test coverage.',
      highlights: [
        'Cross-platform applications with React, Next.js & React Native (Expo)',
        'End-to-end ownership: from Figma design to production deployment',
        'Jest & Vitest test suites, plus technical mentoring for developers',
      ],
      techStack: ['React', 'React Native', 'Next.js', 'Expo', 'TypeScript', 'Jest', 'Vitest', 'Kanban'],
    },
    {
      id: 'wiid-junior',
      role: 'Junior Front-end Developer',
      company: 'WiiD – Work in Ideas',
      period: 'Dec 2021 — Jan 2024',
      location: 'Curitiba, Brazil · Hybrid',
      description:
        'Initial professional career focus on building scalable web and mobile interfaces within the TypeScript and React ecosystem.',
      highlights: [
        'Development and maintenance of web & mobile UIs with React & React Native',
        'Authored unit tests with Jest ensuring sustained application stability',
        'Clean code practices and reusable component architecture',
      ],
      techStack: ['React', 'React Native', 'TypeScript', 'Jest', 'JavaScript', 'HTML5/CSS3'],
    },
    {
      id: 'freelance-web',
      role: 'Web Developer',
      company: 'Freelance – Self-Employed',
      period: 'Dec 2020 — Dec 2021',
      location: 'Brazil · Remote',
      description:
        'Development and maintenance of web applications, high-converting landing pages, and custom websites for diverse clients.',
      highlights: [
        'Responsive web applications built with PHP, JavaScript, CSS & HTML',
        'Custom WordPress websites optimized for speed, conversion & SEO',
        'Direct client management with strict focus on deadlines and delivery quality',
      ],
      techStack: ['PHP', 'JavaScript', 'CSS', 'HTML', 'WordPress'],
    },
  ];

  const experiencesPt: ExperienceItem[] = [
    {
      id: 'invillia-senior',
      role: 'Senior Software Engineer (Front-end & Mobile)',
      company: 'Invillia · Casas Bahia Pay (antigo banQi)',
      period: 'Set 2025 — Presente',
      location: 'Brasil · Remoto',
      description:
        'Referência técnica mobile e front-end para o cliente Casas Bahia Pay (antigo banQi), liderando iniciativas críticas de estabilidade, modernização de arquitetura e performance em hiperescala.',
      highlights: [
        '-98% crashes (120k → 2k/sem) e -55% de memória RAM',
        '0% → 40% cobertura de testes com 100% confiabilidade em CI/CD',
        'Inovação estratégica com IA: automação de PR reviews, testes e docs',
      ],
      techStack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'GitHub Actions', 'Azure DevOps', 'Jest', 'AppDome', 'AWS'],
    },
    {
      id: 'invillia-mid',
      role: 'Mid-Level Software Engineer (Front-end & Mobile)',
      company: 'Invillia · Casas Bahia Pay (antigo banQi)',
      period: 'Set 2024 — Set 2025',
      location: 'Brasil · Remoto',
      description:
        'Desenvolvimento contínuo de aplicações móveis robustas, módulos nativos de alto desempenho e evolução do Design System multi-SO compartilhado.',
      highlights: [
        'Construção de módulos nativos React Native em Kotlin e Swift',
        'System design e evolução de Design System compartilhado mobile/web',
        'Clean Code, SOLID e testes abrangentes unitários e de integração',
      ],
      techStack: ['React Native', 'React', 'TypeScript', 'Kotlin', 'Swift', 'Fastlane', 'GitHub Actions', 'Azure DevOps', 'Jest', 'AppDome'],
    },
    {
      id: 'wiid-mid',
      role: 'Mid-Level Mobile & Front-end Developer',
      company: 'WiiD – Work in Ideas',
      period: 'Jan 2024 — Set 2024',
      location: 'Curitiba, Brasil · Híbrido',
      description:
        'Desenvolvimento de produtos digitais multiplataforma com foco em alta experiência de usuário, performance e cobertura rigorosa de testes.',
      highlights: [
        'Aplicações cross-platform com React, Next.js e React Native (Expo)',
        'Ownership de ponta a ponta: do design no Figma ao deploy em produção',
        'Suítes de testes Jest e Vitest, e mentoria técnica de desenvolvedores',
      ],
      techStack: ['React', 'React Native', 'Next.js', 'Expo', 'TypeScript', 'Jest', 'Vitest', 'Kanban'],
    },
    {
      id: 'wiid-junior',
      role: 'Junior Front-end Developer',
      company: 'WiiD – Work in Ideas',
      period: 'Dez 2021 — Jan 2024',
      location: 'Curitiba, Brasil · Híbrido',
      description:
        'Início da trajetória profissional na construção de interfaces web e mobile escaláveis no ecossistema TypeScript e React.',
      highlights: [
        'Desenvolvimento e manutenção de interfaces web e mobile com React e React Native',
        'Criação de testes unitários com Jest para estabilidade contínua',
        'Adoção de padrões de código limpo e componentes reutilizáveis',
      ],
      techStack: ['React', 'React Native', 'TypeScript', 'Jest', 'JavaScript', 'HTML5/CSS3'],
    },
    {
      id: 'freelance-web',
      role: 'Desenvolvedor Web',
      company: 'Freelance – Autônomo',
      period: 'Dez 2020 — Dez 2021',
      location: 'Brasil · Remoto',
      description:
        'Desenvolvimento e manutenção de aplicações web, landing pages de alta conversão e websites customizados para múltiplos clientes.',
      highlights: [
        'Aplicações web responsivas utilizando PHP, JavaScript, CSS e HTML',
        'Websites customizados em WordPress otimizados para velocidade e SEO',
        'Gestão direta de múltiplos clientes com forte foco em prazos e qualidade de entrega',
      ],
      techStack: ['PHP', 'JavaScript', 'CSS', 'HTML', 'WordPress'],
    },
  ];

  const experiences = language === 'pt' ? experiencesPt : experiencesEn;

  return (
    <section id="experience" className="w-full pt-6 pb-16 glass-section-contain">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs sm:text-[13px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
          {language === 'pt' ? 'Trajetória Profissional' : 'Professional Experience'}
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent flex-1" />
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-[32px] apple-liquid-card-light transition-all group transform-gpu"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
              <div>
                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {exp.role}
                </h3>
                {/* Company Name */}
                <div className="text-sm font-semibold text-slate-700 mt-0.5">
                  {exp.company}
                </div>
              </div>

              {/* Badges: Period & Location */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-liquid-chip text-indigo-700 text-xs font-semibold shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-liquid-chip text-slate-600 text-xs font-medium shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 max-w-3xl font-normal">
              {exp.description}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
              {exp.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl apple-liquid-chip text-xs font-medium text-slate-700 flex items-center gap-2 shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full apple-liquid-chip text-slate-700 text-[11px] font-mono font-medium shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
