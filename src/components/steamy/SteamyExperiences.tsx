import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { playDropletSound } from './steamyAudio';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'exp-0',
    company: 'Invillia',
    role: 'Senior Software Engineer',
    period: 'Set 2025 – Presente [ATUAL]',
    isCurrent: true,
    description:
      'Liderança técnica mobile e front-end no banQi / Casas Bahia Group. Modernização de arquitetura, eliminação de gargalos de runtime, otimização de bundle e mentoring de equipe sênior.',
  },
  {
    id: 'exp-1',
    company: 'Invillia',
    role: 'Mid-Level Software Engineer',
    period: 'Set 2024 – Set 2025',
    description:
      'Refatoração de componentes legados, esteiras CI/CD com Fastlane, otimização de bundle Hermes e redução drástica de crashes em produção.',
  },
  {
    id: 'exp-2',
    company: 'WiiD',
    role: 'Mid-Level Software Engineer',
    period: 'Jan 2024 – Set 2024',
    description:
      'Desenvolvimento e arquitetura de aplicações cross-platform (React Native/Next.js), integração de microsserviços e bibliotecas compartilhadas.',
  },
  {
    id: 'exp-3',
    company: 'WiiD',
    role: 'Junior Software Engineer',
    period: 'Dez 2021 – Jan 2024',
    description:
      'Construção de telas, manutenção de interfaces web e mobile, testes unitários com Jest e consumo de APIs GraphQL/REST.',
  },
];

export const SteamyExperiences: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-4 h-4 text-sky-600 shrink-0" />
        <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-sky-700">
          HISTÓRICO DE ENGENHARIA & LIDERANÇA TÉCNICA
        </h2>
      </div>

      {/* Experience Cards Stack */}
      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            onMouseEnter={() => playDropletSound(1.2 + idx * 0.1)}
            className="p-5 rounded-[22px] bg-slate-50/90 backdrop-blur-xl border border-white/90 shadow-[0_16px_36px_rgba(30,45,65,0.05),inset_0_2px_4px_rgba(255,255,255,0.95)] transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                  {exp.company} — <span className="font-semibold text-sky-700">{exp.role}</span>
                </h3>
              </div>

              <span
                className={`px-3 py-0.5 rounded-full text-xs font-bold font-mono ${
                  exp.isCurrent
                    ? 'bg-emerald-500/15 text-emerald-800 border border-emerald-500/30'
                    : 'bg-slate-200/70 text-slate-700 border border-slate-300/60'
                }`}
              >
                {exp.period}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-4 border-l-2 border-sky-400/40 mt-3">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
