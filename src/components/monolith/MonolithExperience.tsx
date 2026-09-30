import React from 'react';
import { MonolithPanel } from './MonolithPanel';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../../i18n';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  scope: string;
  description: string;
  highlights: string[];
  isCurrent?: boolean;
}

const experiencesDataEn: ExperienceItem[] = [
  {
    id: 'OP-01',
    role: 'Senior Software Engineer (Front-end & Mobile)',
    company: 'Invillia',
    period: 'SEP 2025 – PRESENT [CURRENT]',
    scope: 'banQi (Grupo Casas Bahia)',
    description:
      'Technical leadership in mobile and front-end architecture at critical scale. Native bridges architecture in Kotlin/Swift, crash mitigation, production stabilization, and quality governance with automated test suites.',
    highlights: [
      'Technical leadership in native bridge architecture and Hermes engine migration',
      'Proactive crash mitigation and observability via Dynatrace and Databricks',
      'Technical mentorship and automation adoption with intelligent AI agents'
    ],
    isCurrent: true
  },
  {
    id: 'OP-02',
    role: 'Mid-Level Software Engineer (Front-end & Mobile)',
    company: 'Invillia',
    period: 'SEP 2024 – SEP 2025',
    scope: 'banQi - Casas Bahia Pay',
    description:
      'Refactoring high-volume financial transaction flows, modernizing reusable core React Native components, and integrating native security SDKs with RASP.',
    highlights: [
      'Elimination of render bottlenecks and deep list virtualization',
      'Integration of banking security modules and payload encryption',
      'Implementation of automated test suites with Jest'
    ],
    isCurrent: false
  },
  {
    id: 'OP-03',
    role: 'Mid-Level Mobile & Front-end Developer',
    company: 'WiiD – Work in Ideas',
    period: 'JAN 2024 – SEP 2024',
    scope: 'High-Performance Cross-Platform Applications',
    description:
      'Development of high-performance cross-platform applications, integration with distributed APIs, render cycle optimization, and decoupled architecture.',
    highlights: [
      'Development of universal apps with React Native and Next.js',
      'Configuration of continuous integration and delivery pipelines (CI/CD)',
      'Animation performance optimization with Framer Motion and Reanimated'
    ],
    isCurrent: false
  },
  {
    id: 'OP-04',
    role: 'Junior Front-end Developer',
    company: 'WiiD – Work in Ideas',
    period: 'DEC 2021 – JAN 2024',
    scope: 'Scalable Web & Mobile Interfaces',
    description:
      'Building responsive web and mobile interfaces, unit and integration automated testing, standardizing reusable components, and consuming REST APIs.',
    highlights: [
      'Implementation of design systems based on design tokens',
      'Development of scalable SPAs and enterprise dashboards',
      'Creation of unit test suites and regression test coverage'
    ],
    isCurrent: false
  }
];

const experiencesDataPt: ExperienceItem[] = [
  {
    id: 'OP-01',
    role: 'Senior Software Engineer (Front-end & Mobile)',
    company: 'Invillia',
    period: 'SET 2025 – PRESENTE [ATUAL]',
    scope: 'banQi (Grupo Casas Bahia)',
    description:
      'Liderança técnica de arquitetura mobile e front-end em escala crítica. Arquitetura de pontes nativas Kotlin/Swift, mitigação de crashes, estabilização de produção e governança de qualidade com suítes de testes.',
    highlights: [
      'Liderança técnica na arquitetura de pontes nativas e migração para Hermes',
      'Mitigação e monitoramento proativo de crashes via Dynatrace e Databricks',
      'Mentoria técnica e adoção de automação com agentes inteligentes de IA'
    ],
    isCurrent: true
  },
  {
    id: 'OP-02',
    role: 'Mid-Level Software Engineer (Front-end & Mobile)',
    company: 'Invillia',
    period: 'SET 2024 – SET 2025',
    scope: 'banQi - Casas Bahia Pay',
    description:
      'Refatoração de fluxos financeiros de alto volume, modernização de core components reutilizáveis React Native e integração de SDKs nativos de segurança com RASP.',
    highlights: [
      'Eliminação de gargalos de render e virtualização profunda de listas',
      'Integração de módulos de segurança bancária e criptografia de payloads',
      'Implementação de suítes de testes automatizados com Jest'
    ],
    isCurrent: false
  },
  {
    id: 'OP-03',
    role: 'Mid-Level Mobile & Front-end Developer',
    company: 'WiiD – Work in Ideas',
    period: 'JAN 2024 – SET 2024',
    scope: 'Aplicações Cross-Platform de Alta Performance',
    description:
      'Desenvolvimento de aplicações cross-platform de alta performance, integração com APIs distribuídas, otimização de ciclos de render e arquitetura desacoplada.',
    highlights: [
      'Desenvolvimento de apps universais com React Native e Next.js',
      'Configuração de pipelines de integração contínua (CI/CD)',
      'Otimização de performance de animações com Framer Motion e Reanimated'
    ],
    isCurrent: false
  },
  {
    id: 'OP-04',
    role: 'Junior Front-end Developer',
    company: 'WiiD – Work in Ideas',
    period: 'DEZ 2021 – JAN 2024',
    scope: 'Interfaces Web & Mobile Escaláveis',
    description:
      'Construção de interfaces web e mobile responsivas, testes automatizados unitários/integração, padronização de componentes reutilizáveis e consumo de APIs REST.',
    highlights: [
      'Implementação de design systems baseados em design tokens',
      'Desenvolvimento de SPAs escaláveis e dashboards corporativos',
      'Criação de testes unitários e cobertura de regressão'
    ],
    isCurrent: false
  }
];

export const MonolithExperience: React.FC = () => {
  const { language } = useLanguage();
  const experiencesData = language === 'pt' ? experiencesDataPt : experiencesDataEn;

  return (
    <section id="monolith-experience" className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-12 scroll-mt-24">
      {/* Cinematic Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest uppercase text-white/50">
            <span className="text-[#ffaa00]">// 04</span>
            <span>{language === 'pt' ? 'OPERAÇÕES DE CAMPO & CARREIRA' : 'FIELD OPERATIONS & CAREER'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-['Space_Grotesk'] text-white tracking-tight uppercase">
            {language === 'pt' ? 'REGISTRO DE OPERAÇÕES & CARREIRA' : 'FIELD OPERATIONS & CAREER LOG'}
          </h2>
          <p className="font-mono text-xs text-white/60 tracking-wider uppercase max-w-2xl leading-relaxed">
            {language === 'pt'
              ? 'ATUAÇÃO CONTÍNUA EM AMBIENTES DE MISSÃO CRÍTICA, PRODUTOS BANCÁRIOS E ENGENHARIA DE PRODUTO.'
              : 'CONTINUOUS EXECUTION IN MISSION-CRITICAL ENVIRONMENTS, BANKING PRODUCTS, AND PRODUCT ENGINEERING.'}
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 font-mono text-[10px] text-white/70 tracking-widest uppercase">
          <Briefcase size={14} className="text-[#ffaa00]" />
          <span>{language === 'pt' ? '4 POSIÇÕES OPERACIONAIS' : '4 OPERATIONAL POSITIONS'}</span>
        </div>
      </div>

      {/* 4 Operations 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiencesData.map((exp) => (
          <MonolithPanel
            key={exp.id}
            interactive
            withCorners
            className="p-6 flex flex-col justify-between group hover:border-[#ffaa00]/70 transition-all"
          >
            <div className="space-y-4">
              {/* Header: Company & Period */}
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#ffaa00]">
                    [{exp.id}]
                  </span>
                  <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                    {exp.company}
                  </span>
                </div>

                <div
                  className={`text-[10px] font-mono font-semibold tracking-widest uppercase ${
                    exp.isCurrent ? 'text-[#ffaa00]' : 'text-white/40'
                  }`}
                >
                  {exp.period}
                </div>
              </div>

              {/* Role Title */}
              <div>
                <h3 className="text-lg sm:text-xl font-black font-['Space_Grotesk'] text-white group-hover:text-[#ffaa00] transition-colors leading-snug">
                  {exp.role}
                </h3>
                <div className="text-[10px] font-mono text-white/50 tracking-wider uppercase mt-1">
                  {language === 'pt' ? 'ESCOPO:' : 'SCOPE:'} {exp.scope}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs font-sans text-white/70 leading-relaxed">
                {exp.description}
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-1.5 pt-2 border-t border-white/5">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-white/60">
                    <span className="text-[#ffaa00] mt-0.5">›</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </MonolithPanel>
        ))}
      </div>
    </section>
  );
};

export default MonolithExperience;
