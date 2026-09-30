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
      id: 'exp-1',
      role: 'Senior Software Engineer',
      company: 'Invillia · Casas Bahia Group & banQi',
      period: '2023 — Present',
      location: 'Brazil · Remote',
      description:
        'Technical leadership in architecture and stabilization of the banQi fintech app (300k+ weekly active users). Native Kotlin/Swift module engineering, technical debt mitigation, and AI-assisted test automation.',
      highlights: [
        '-98% production crashes (120k → 2k/wk)',
        '-55% RAM memory footprint',
        'CI/CD pipeline orchestration via Fastlane & Azure DevOps',
      ],
      techStack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Hermes', 'Fastlane', 'Jest', 'AI Agents'],
    },
    {
      id: 'exp-2',
      role: 'Software Engineer II',
      company: 'Invillia',
      period: '2022 — 2023',
      location: 'Brazil · Remote',
      description:
        'High-impact front-end engineering and mobile/web micro-frontends. Performance profiling using Xcode Instruments & Android Studio, native bridge optimization, and clean architecture standardization.',
      highlights: [
        'Multi-OS unified Design System deployment',
        '75% acceleration in Splash-to-Home startup latency',
        'Refactoring of mission-critical payments and checkout flows',
      ],
      techStack: ['React', 'React Native', 'TypeScript', 'Redux', 'REST/GraphQL', 'Azure', 'Vitest'],
    },
    {
      id: 'exp-3',
      role: 'Front-end & Mobile Developer',
      company: 'WiiD Software & Innovation',
      period: '2021 — 2022',
      location: 'Curitiba, Brazil · Hybrid',
      description:
        'Development of responsive web and mobile applications using React, Next.js, and React Native. High-conversion interfaces, corporate portals, and real-time API integrations.',
      highlights: [
        'Delivered 10+ digital products ahead of schedule',
        'Built scalable, accessible component foundations',
        'Payment gateway and enterprise authentication integrations',
      ],
      techStack: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    },
  ];

  const experiencesPt: ExperienceItem[] = [
    {
      id: 'exp-1',
      role: 'Senior Software Engineer',
      company: 'Invillia · Casas Bahia Group & banQi',
      period: '2023 — Presente',
      location: 'Brasil · Remoto',
      description:
        'Liderança técnica na arquitetura e estabilização do app banQi (300k+ usuários semanais). Criação de módulos nativos Kotlin/Swift, mitigação de débito técnico e automação de testes assistida por IA.',
      highlights: [
        '-98% de crashes em produção (120k → 2k/sem)',
        '-55% no consumo de memória RAM',
        'Orquestração de esteiras CI/CD Fastlane + Azure DevOps',
      ],
      techStack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Hermes', 'Fastlane', 'Jest', 'AI Agents'],
    },
    {
      id: 'exp-2',
      role: 'Software Engineer II',
      company: 'Invillia',
      period: '2022 — 2023',
      location: 'Brasil · Remoto',
      description:
        'Engenharia de front-end de alto impacto e microsserviços web/mobile. Profiling de performance com Xcode Instruments e Android Studio, refinamento de pontes e padronização de arquitetura limpa.',
      highlights: [
        'Implementação de Design System unificado multi-SO',
        'Aceleração de 75% no tempo de boot Splash to Home',
        'Refatoração de fluxos críticos de pagamento e checkout',
      ],
      techStack: ['React', 'React Native', 'TypeScript', 'Redux', 'REST/GraphQL', 'Azure', 'Vitest'],
    },
    {
      id: 'exp-3',
      role: 'Front-end & Mobile Developer',
      company: 'WiiD Software & Innovation',
      period: '2021 — 2022',
      location: 'Curitiba, Brasil · Híbrido',
      description:
        'Desenvolvimento de aplicações responsivas para web e mobile com React, Next.js e React Native. Criação de landing pages de alta conversão, portais corporativos e integrações de API em tempo real.',
      highlights: [
        'Entrega de mais de 10 produtos digitais em prazo recorde',
        'Criação de componentes escaláveis e acessíveis',
        'Integrações com gateways de pagamento e autenticação',
      ],
      techStack: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    },
  ];

  const experiences = language === 'pt' ? experiencesPt : experiencesEn;

  return (
    <section id="experience" className="w-full pt-6 pb-16">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs sm:text-[13px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
          {language === 'pt' ? 'Trajetória Profissional' : 'Professional Experience'}
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent flex-1" />
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-[32px] bg-white/80 hover:bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_16px_36px_rgba(20,30,45,0.04),inset_0_1.5px_2px_rgba(255,255,255,0.95)] hover:shadow-[0_24px_48px_rgba(20,30,45,0.08)] transition-all group transform-gpu"
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-600 text-xs font-medium">
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
                  className="p-3 rounded-2xl bg-slate-50/80 border border-slate-100 text-xs font-medium text-slate-700 flex items-center gap-2"
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
                  className="px-3 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700 text-[11px] font-mono font-medium shadow-2xs"
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
