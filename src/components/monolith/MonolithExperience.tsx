import React from 'react';
import { MonolithPanel } from './MonolithPanel';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  scope: string;
  description: string;
  isCurrent?: boolean;
}

const experiencesData: ExperienceItem[] = [
  {
    role: 'Senior Software Engineer (Front-end & Mobile)',
    company: 'Invvilia',
    period: 'SET 2025 – PRESENTE [ATUAL]',
    scope: 'banQi (Grupo Casas Bahia)',
    description:
      'Liderança técnica de arquitetura mobile e front-end em escala crítica. Arquitetura de pontes nativas Kotlin/Swift, resiliência, mitigação de crashes e estabilização de produção.',
    isCurrent: true
  },
  {
    role: 'Mid-Level Software Engineer (Front-end & Mobile)',
    company: 'Invvilia',
    period: 'SET 2024 – SET 2025',
    scope: 'banQi - Casas Bahia Pay',
    description:
      'Refatoração de fluxos financeiros, mitigação de crashes críticos, integração de SDKs nativos e modernização de core components reutilizáveis React Native.',
    isCurrent: false
  },
  {
    role: 'Mid-Level Mobile & Front-end Developer',
    company: 'WiiD – Work in Ideas',
    period: 'JAN 2024 – SET 2024',
    scope: 'Engenharia de Aplicações Cross-Platform',
    description:
      'Desenvolvimento de aplicações cross-platform de alta performance, integração com SDKs nativos, otimização de ciclos de render e arquitetura desacoplada.',
    isCurrent: false
  },
  {
    role: 'Junior Front-end Developer',
    company: 'WiiD – Work in Ideas',
    period: 'DEZ 2021 – JAN 2024',
    scope: 'Interfaces Web & Mobile Escaláveis',
    description:
      'Construção de interfaces web e mobile responsivas, testes automatizados unitários/integração, padronização de componentes reutilizáveis e consumo de APIs REST.',
    isCurrent: false
  }
];

export const MonolithExperience: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-l-4 border-[#22c55e] bg-[#14161a] p-3 mb-4 font-mono text-[11px] text-slate-300 border border-[#383b44]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-[#22c55e]">/// 03 // REGISTRO DE OPERAÇÕES</span>
          <span className="text-[#8e95a5]">::</span>
          <span className="text-slate-200 tracking-wider">
            INVILLIA & WIID (HISTÓRICO DE ATUAÇÃO EM ENGENHARIA DE SOFTWARE)
          </span>
        </div>
        <span className="text-[#8e95a5] font-semibold text-[10px] shrink-0">
          [ 4 POSIÇÕES AUDITADAS ]
        </span>
      </div>

      {/* 4 Operations 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiencesData.map((exp, idx) => (
          <MonolithPanel
            key={idx}
            interactive
            withRivets
            className="p-5 flex flex-col justify-between"
          >
            <div>
              {/* Header: Title and Period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#383b44] pb-2.5 mb-2.5">
                <div className="text-sm sm:text-base font-bold font-['Space_Grotesk',sans-serif] text-white tracking-tight">
                  <span className="text-[#00f0ff]">{exp.company}</span> — {exp.role}
                </div>
                <div
                  className={`text-[10px] font-mono font-bold shrink-0 ${
                    exp.isCurrent ? 'text-[#22c55e]' : 'text-[#8e95a5]'
                  }`}
                >
                  {exp.period}
                </div>
              </div>

              {/* Scope Tag */}
              <div className="text-[11px] font-mono text-[#ff9900] font-semibold mb-2">
                ESCOPO: {exp.scope}
              </div>

              {/* Description */}
              <p className="text-xs font-sans text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </MonolithPanel>
        ))}
      </div>
    </section>
  );
};
