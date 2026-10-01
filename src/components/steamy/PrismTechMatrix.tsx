import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Layers, Bot, Award, GraduationCap, Globe, Cloud } from 'lucide-react';
import { useLanguage } from '../../i18n';

export const PrismTechMatrix: React.FC = () => {
  const { language } = useLanguage();

  const categories = [
    {
      title: language === 'pt' ? 'Arquitetura Mobile' : 'Mobile Architecture',
      icon: <Smartphone className="w-4 h-4 text-blue-600" />,
      skills: [
        'React Native',
        'Kotlin (Android)',
        'Swift (iOS)',
        'Expo',
        'Native Modules',
        'Hermes Engine',
        'Fastlane',
        'AppDome (RASP)',
      ],
    },
    {
      title: language === 'pt' ? 'Web Moderna & UI' : 'Modern Web & UI',
      icon: <Layout className="w-4 h-4 text-indigo-600" />,
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Design Systems',
        'Storybook',
        'Tailwind CSS',
        'Three.js / 3D Web',
        'Vite',
      ],
    },
    {
      title: language === 'pt' ? 'DevOps, Nuvem & Qualidade' : 'DevOps, Cloud & Quality',
      icon: <Layers className="w-4 h-4 text-emerald-600" />,
      skills: [
        'AWS Cloud',
        'Azure DevOps',
        'GitHub Actions',
        'Docker',
        'Dynatrace & Databricks',
        'Clean Architecture',
        'SOLID & TDD',
        'CI/CD Pipelines',
      ],
    },
    {
      title: language === 'pt' ? 'IA & Automação de Engenharia' : 'AI & Engineering Automation',
      icon: <Bot className="w-4 h-4 text-purple-600" />,
      skills: [
        'GitHub Copilot (Cert.)',
        'AI Coding Agents',
        'Prompt Engineering',
        'Automated PR Audits',
        'Jest & Vitest Testing',
        'Blueprint Synthesis',
        'Developer Productivity',
        'Scrum & Kanban',
      ],
    },
  ];

  return (
    <section id="stack" className="w-full pt-6 pb-16 glass-section-contain">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs sm:text-[13px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
          {language === 'pt' ? 'Competências & Stack Tecnológica' : 'Tech Stack & Competencies'}
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent flex-1" />
      </div>

      {/* 4 Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            whileHover={{ y: -4 }}
            className="p-5 sm:p-6 rounded-[28px] apple-liquid-card-light transition-all flex flex-col justify-between transform-gpu"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <div className="p-2 rounded-xl apple-liquid-chip shadow-xs">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Chiclets */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-xl apple-liquid-chip hover:bg-white border border-white/80 hover:border-indigo-300 text-slate-700 hover:text-indigo-900 text-xs font-medium shadow-2xs transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications, Degree & Languages Footer Cards (4 Cards Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* AWS Certification */}
        <div className="p-5 rounded-[24px] apple-liquid-card-light flex items-center gap-3.5 transform-gpu">
          <div className="p-2.5 rounded-2xl apple-liquid-chip text-amber-600 shadow-xs shrink-0">
            <Cloud className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">
              {language === 'pt' ? 'Certificação Oficial' : 'Official Certification'}
            </span>
            <span className="text-xs font-bold text-slate-900 block truncate" title="AWS Solutions Architect">
              AWS Solutions Architect
            </span>
            <span className="text-[11px] text-slate-500 block truncate">
              {language === 'pt' ? 'Em andamento (Previsão Q4 2026)' : 'In Progress (Est. Q4 2026)'}
            </span>
          </div>
        </div>

        {/* GitHub Copilot Certification */}
        <div className="p-5 rounded-[24px] apple-liquid-card-light flex items-center gap-3.5 transform-gpu">
          <div className="p-2.5 rounded-2xl apple-liquid-chip text-indigo-600 shadow-xs shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
              {language === 'pt' ? 'Certificação Oficial' : 'Official Certification'}
            </span>
            <span className="text-xs font-bold text-slate-900 block truncate">GitHub Copilot Certified</span>
            <span className="text-[11px] text-slate-500 block">2025 — 2028 · GitHub</span>
          </div>
        </div>

        {/* Education */}
        <div className="p-5 rounded-[24px] apple-liquid-card-light flex items-center gap-3.5 transform-gpu">
          <div className="p-2.5 rounded-2xl apple-liquid-chip text-emerald-600 shadow-xs shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
              {language === 'pt' ? 'Graduação Tecnológica' : 'Higher Education'}
            </span>
            <span className="text-xs font-bold text-slate-900 block truncate">
              {language === 'pt' ? 'Análise e Desenv. Sistemas' : 'Systems Analysis & Dev.'}
            </span>
            <span className="text-[11px] text-slate-500 block">Uninter (2019 — 2021)</span>
          </div>
        </div>

        {/* Languages */}
        <div className="p-5 rounded-[24px] apple-liquid-card-light flex items-center gap-3.5 transform-gpu">
          <div className="p-2.5 rounded-2xl apple-liquid-chip text-blue-600 shadow-xs shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
              {language === 'pt' ? 'Idiomas' : 'Languages'}
            </span>
            <span className="text-xs font-bold text-slate-900 block truncate">
              {language === 'pt' ? 'Português (Nativo)' : 'English (B2 Prof.)'}
            </span>
            <span className="text-[11px] text-slate-500 block truncate">
              {language === 'pt' ? 'Inglês (B2 Intermediário Superior)' : 'Portuguese (Native)'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
