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
    company: 'Invillia (an AI/R company)',
    period: 'SEP 2025 – PRESENT [CURRENT]',
    scope: 'banQi / Casas Bahia Pay (Grupo Casas Bahia)',
    description:
      'Technical leadership in mobile and front-end architecture for banQi, driving critical initiatives in performance, stability, and system architecture.',
    highlights: [
      'Technical leadership: 98% crash reduction and 55% RAM cut',
      '75% faster splash-to-home boot time via React Native and native module reengineering',
      'Transition from 0% to 40% test coverage with 100% CI/CD reliability',
      'Strategic AI innovation: custom tools for PR reviews, tests, KRs, and blueprints'
    ],
    isCurrent: true
  },
  {
    id: 'OP-02',
    role: 'Mid-Level Software Engineer (Front-end & Mobile)',
    company: 'Invillia (an AI/R company)',
    period: 'SEP 2024 – SEP 2025',
    scope: 'banQi - Casas Bahia Pay (Grupo Casas Bahia)',
    description:
      'Continuous development of resilient mobile apps, deep native integrations, and shared Design System evolution.',
    highlights: [
      'System design and reusable Design System across mobile and web',
      'Creation and maintenance of React Native native modules in Kotlin (Android) and Swift (iOS)',
      'High technical standards with Clean Code, SOLID, and comprehensive unit tests'
    ],
    isCurrent: false
  },
  {
    id: 'OP-03',
    role: 'Mid-Level Mobile & Front-end Developer',
    company: 'WiiD – Work in Ideas',
    period: 'JAN 2024 – SEP 2024',
    scope: 'Cross-Platform Digital Products',
    description:
      'Development of cross-platform digital products focused on high UX fidelity, performance, and test coverage.',
    highlights: [
      'Cross-platform applications with React, Next.js, and React Native (Expo) with high UI/UX fidelity',
      'Complete feature ownership from Figma design to production deployment',
      'Unit test suites with Jest and Vitest, plus technical mentorship for junior engineers'
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
      'Early engineering trajectory building scalable web and mobile interfaces in the TypeScript and React ecosystem.',
    highlights: [
      'Development and maintenance of web and mobile products with React, React Native, and TypeScript',
      'Writing unit tests with Jest to ensure continuous stability',
      'Standardization of reusable components and clean code best practices'
    ],
    isCurrent: false
  },
  {
    id: 'OP-05',
    role: 'Web Developer',
    company: 'Freelance – Autônomo',
    period: 'DEC 2020 – DEC 2021',
    scope: 'Web Applications & Landing Pages',
    description:
      'Development and maintenance of web applications, high-conversion landing pages, and custom websites.',
    highlights: [
      'Web application development using PHP, JavaScript, CSS, and HTML',
      'Responsive landing pages and custom websites with WordPress',
      'Direct client management with strong focus on delivery timelines and quality'
    ],
    isCurrent: false
  }
];

const experiencesDataPt: ExperienceItem[] = [
  {
    id: 'OP-01',
    role: 'Senior Software Engineer (Front-end & Mobile)',
    company: 'Invillia (an AI/R company)',
    period: 'SET 2025 – PRESENTE [ATUAL]',
    scope: 'banQi / Casas Bahia Pay (Grupo Casas Bahia)',
    description:
      'Atuação como referência técnica em engenharia mobile e front-end para o cliente banQi, liderando iniciativas críticas de performance, estabilidade e arquitetura.',
    highlights: [
      'Liderança técnica: redução de 98% em crashes e corte de 55% de memória RAM',
      'Aceleração de 75% no carregamento de splash to home via reengenharia em React Native e módulos nativos',
      'Transição de 0% para 40% de testes automatizados com 100% confiabilidade em CI/CD',
      'Inovação estratégica com IA: ferramentas customizadas para PR reviews, testes, KRs e blueprints'
    ],
    isCurrent: true
  },
  {
    id: 'OP-02',
    role: 'Mid-Level Software Engineer (Front-end & Mobile)',
    company: 'Invillia (an AI/R company)',
    period: 'SET 2024 – SET 2025',
    scope: 'banQi - Casas Bahia Pay (Grupo Casas Bahia)',
    description:
      'Desenvolvimento contínuo de aplicações móveis robustas, integração nativa profunda e evolução do Design System compartilhado.',
    highlights: [
      'System design e construção de Design System reutilizável entre mobile e web',
      'Criação e manutenção de módulos nativos para React Native em Kotlin (Android) e Swift (iOS)',
      'Entregas de excelência técnica com Clean Code, SOLID e testes abrangentes unitários'
    ],
    isCurrent: false
  },
  {
    id: 'OP-03',
    role: 'Mid-Level Mobile & Front-end Developer',
    company: 'WiiD – Work in Ideas',
    period: 'JAN 2024 – SET 2024',
    scope: 'Produtos Digitais Multiplataforma',
    description:
      'Desenvolvimento de produtos digitais multiplataforma com foco em alta experiência de usuário, performance e cobertura de testes.',
    highlights: [
      'Aplicações cross-platform com React, Next.js e React Native (Expo) de alta fidelidade UI/UX',
      'Ownership completo de features, desde design no Figma até deploy final em produção',
      'Suítes de testes unitários com Jest e Vitest, além de mentoria técnica para desenvolvedores juniores'
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
      'Início da trajetória profissional na construção de interfaces web e mobile escaláveis no ecossistema TypeScript e React.',
    highlights: [
      'Desenvolvimento e manutenção de produtos web e mobile com React, React Native e TypeScript',
      'Escrita de testes unitários com Jest para assegurar estabilidade contínua',
      'Padronização de componentes reutilizáveis e boas práticas de código limpo'
    ],
    isCurrent: false
  },
  {
    id: 'OP-05',
    role: 'Desenvolvedor Web',
    company: 'Freelance – Autônomo',
    period: 'DEZ 2020 – DEZ 2021',
    scope: 'Aplicações Web & Landing Pages',
    description:
      'Desenvolvimento e manutenção de aplicações web, landing pages de alta conversão e websites customizados.',
    highlights: [
      'Desenvolvimento de aplicações web utilizando PHP, JavaScript, CSS e HTML',
      'Criação de landing pages responsivas e websites customizados em WordPress',
      'Gestão direta de clientes com forte foco em prazos e qualidade de entrega'
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
          <span>{language === 'pt' ? '5 POSIÇÕES OPERACIONAIS' : '5 OPERATIONAL POSITIONS'}</span>
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
