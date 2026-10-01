import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, GraduationCap, Award, Smartphone, Monitor, Cloud, Sparkles } from 'lucide-react';
import { playDropletSound } from './steamyAudio';

interface SkillCategory {
  title: string;
  count: number;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'MOBILE & NATIVOS',
    count: 8,
    icon: <Smartphone className="w-4 h-4 text-sky-600" />,
    skills: [
      'React Native',
      'Kotlin',
      'Swift',
      'Expo',
      'Android SDK',
      'iOS SDK',
      'Hermes Engine',
      'Objective-C',
    ],
  },
  {
    title: 'FRONT-END & WEB MODERNO',
    count: 8,
    icon: <Monitor className="w-4 h-4 text-sky-600" />,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5 / CSS3',
      'Tailwind CSS',
      'Redux / Zustand',
      'Webpack / Vite',
    ],
  },
  {
    title: 'DEVOPS & CLOUD INFRA',
    count: 8,
    icon: <Cloud className="w-4 h-4 text-sky-600" />,
    skills: [
      'AWS (S3, CloudWatch)',
      'Fastlane',
      'Azure DevOps',
      'GitHub Actions',
      'Docker',
      'CI/CD Pipelines',
      'AppDome RASP',
      'Dynatrace & Databricks',
    ],
  },
  {
    title: 'QUALIDADE, ARQUITETURA & IA',
    count: 8,
    icon: <Sparkles className="w-4 h-4 text-sky-600" />,
    skills: [
      'Clean Architecture',
      'Jest / Vitest',
      'RN Testing Library',
      'TDD',
      'Micro Front-ends',
      'Design Systems',
      'REST / GraphQL',
      'AI Code Workflows',
    ],
  },
];

export const SteamyTechMatrix: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Droplets className="w-4 h-4 text-sky-600 shrink-0" />
        <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-sky-700">
          MATRIZ DE COMPETÊNCIAS TÉCNICAS (32 SKILLS) & CERTIFICAÇÕES
        </h2>
      </div>

      {/* Main Skills Matrix Card */}
      <div className="p-6 rounded-[24px] bg-slate-50/90 backdrop-blur-xl border border-white/90 shadow-[0_20px_48px_rgba(30,45,65,0.06),inset_0_2px_4px_rgba(255,255,255,0.95)] mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 tracking-wide uppercase">
                {cat.icon}
                <span>
                  {cat.title} ({cat.count} SKILLS)
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => {
                  const isSelected = activeSkill === skill;
                  return (
                    <motion.button
                      key={skill}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        playDropletSound(1.3);
                        setActiveSkill(isSelected ? null : skill);
                      }}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-sky-500 text-white shadow-xs'
                          : 'bg-white/90 hover:bg-white text-slate-700 hover:text-sky-700 border border-slate-200/80 shadow-2xs'
                      }`}
                    >
                      {skill}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Languages Card */}
      <div className="p-5 rounded-[22px] bg-slate-50/90 backdrop-blur-xl border border-white/90 shadow-[0_16px_36px_rgba(30,45,65,0.05),inset_0_2px_4px_rgba(255,255,255,0.95)]">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap className="w-4 h-4 text-sky-600" />
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
            CERTIFICAÇÕES, FORMAÇÃO & IDIOMAS
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* AWS Certified Solutions Architect */}
          <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-2.5">
            <span className="text-lg">☁️</span>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                AWS Solutions Architect – Associate
              </div>
              <div className="text-[11px] font-mono text-amber-700">Em andamento (Previsão Q4 2026)</div>
            </div>
          </div>

          {/* GitHub Copilot Certified */}
          <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200/60 flex items-center gap-2.5">
            <Award className="w-5 h-5 text-sky-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                GitHub Copilot Certified
              </div>
              <div className="text-[11px] font-mono text-sky-700">Validade: 2025–2028</div>
            </div>
          </div>

          {/* Higher Degree */}
          <div className="p-3 rounded-2xl bg-slate-100/70 border border-slate-200/60 flex items-center gap-2.5">
            <span className="text-lg">🏛️</span>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                Graduação Superior em ADS
              </div>
              <div className="text-[11px] text-slate-500">Uninter — Análise e Des. de Sistemas</div>
            </div>
          </div>

          {/* Portuguese */}
          <div className="p-3 rounded-2xl bg-slate-100/70 border border-slate-200/60 flex items-center gap-2.5">
            <span className="text-lg">🇧🇷</span>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                Português
              </div>
              <div className="text-[11px] text-slate-500">Nativo / Primeira Língua</div>
            </div>
          </div>

          {/* English */}
          <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex items-center gap-2.5">
            <span className="text-lg">🇺🇸</span>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                Inglês (B2)
              </div>
              <div className="text-[11px] text-emerald-700 font-medium">Fluente Técnico & Profissional</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
