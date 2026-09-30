import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Layers, Bot, Award, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '../../i18n';


export const PrismTechMatrix: React.FC = () => {
  const { language } = useLanguage();

  const categories = [
    {
      title: language === 'pt' ? 'Arquitetura Mobile' : 'Mobile Architecture',
      icon: <Smartphone className="w-4 h-4 text-blue-600" />,
      skills: [
        'React Native',
        'TypeScript',
        'Kotlin (Android)',
        'Swift (iOS)',
        'TurboModules',
        'Hermes Engine',
        'Fastlane',
        'AppDome RASP',
      ],
    },
    {
      title: language === 'pt' ? 'Web Moderna & UI' : 'Modern Web & UI',
      icon: <Layout className="w-4 h-4 text-indigo-600" />,
      skills: [
        'React 19',
        'Next.js 15',
        'Vite',
        'Tailwind CSS v4',
        'Three.js / WebGL',
        'Framer Motion',
        'Design Systems',
        'Redux / Zustand',
      ],
    },
    {
      title: language === 'pt' ? 'Arquitetura & Qualidade' : 'Architecture & Quality',
      icon: <Layers className="w-4 h-4 text-emerald-600" />,
      skills: [
        'Clean Architecture',
        'SOLID & TDD',
        'Jest & Vitest',
        'Dynatrace & Databricks',
        'Azure DevOps CI/CD',
        'Git & Monorepos',
        'REST & GraphQL',
        'Performance Profiling',
      ],
    },
    {
      title: language === 'pt' ? 'IA & Automação Dev' : 'AI & Developer Automation',
      icon: <Bot className="w-4 h-4 text-purple-600" />,
      skills: [
        'GitHub Copilot (Cert.)',
        'AI Coding Agents',
        'Prompt Engineering',
        'Automated PR Audits',
        'Scaffolding Tools',
        'Docker',
        'Shell Scripting',
        'Developer Productivity',
      ],
    },
  ];

  return (
    <section id="stack" className="w-full pt-6 pb-16">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs sm:text-[13px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
          {language === 'pt' ? 'Competências & Stack Tecnológica' : 'Tech Stack & Competencies'}
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent flex-1" />
      </div>

      {/* 4 Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="p-5 sm:p-6 rounded-[28px] bg-white/80 hover:bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_16px_36px_rgba(20,30,45,0.04),inset_0_1.5px_2px_rgba(255,255,255,0.95)] hover:shadow-[0_24px_48px_rgba(20,30,45,0.08)] transition-all flex flex-col justify-between transform-gpu"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60 shadow-xs">
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
                    className="px-2.5 py-1 rounded-xl bg-white hover:bg-indigo-50/80 border border-slate-200/70 hover:border-indigo-300 text-slate-700 hover:text-indigo-900 text-xs font-medium shadow-2xs transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certification, Degree & Languages Footer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Certification */}
        <div className="p-5 rounded-[24px] bg-white/80 backdrop-blur-md border border-white/90 shadow-sm flex items-center gap-3.5 transform-gpu">
          <div className="p-2.5 rounded-2xl bg-indigo-50 border border-indigo-200/60 text-indigo-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
              {language === 'pt' ? 'Certificação Oficial' : 'Official Certification'}
            </span>
            <span className="text-xs font-bold text-slate-900 block">GitHub Copilot Specialist</span>
            <span className="text-[11px] text-slate-500">Microsoft / GitHub</span>
          </div>
        </div>

        {/* Education */}
        <div className="p-5 rounded-[24px] bg-white/80 backdrop-blur-md border border-white/90 shadow-sm flex items-center gap-3.5 transform-gpu">
          <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-emerald-600">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
              {language === 'pt' ? 'Formação Superior' : 'Higher Education'}
            </span>
            <span className="text-xs font-bold text-slate-900 block">
              {language === 'pt' ? 'Análise e Desenv. de Sistemas' : 'B.S. Systems Analysis & Development'}
            </span>
            <span className="text-[11px] text-slate-500">UNINTER (2021 — 2023)</span>
          </div>
        </div>

        {/* Languages */}
        <div className="p-5 rounded-[24px] bg-white/80 backdrop-blur-md border border-white/90 shadow-sm flex items-center gap-3.5 transform-gpu">
          <div className="p-2.5 rounded-2xl bg-blue-50 border border-blue-200/60 text-blue-600">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
              {language === 'pt' ? 'Idiomas & Comunicação' : 'Languages & Communication'}
            </span>
            <span className="text-xs font-bold text-slate-900 block">
              {language === 'pt' ? 'Português (Nativo)' : 'English (Full Professional)'}
            </span>
            <span className="text-[11px] text-slate-500">
              {language === 'pt' ? 'Inglês (Avançado Profissional)' : 'Portuguese (Native)'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
