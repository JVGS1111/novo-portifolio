import React from 'react';
import { MonolithPanel } from './MonolithPanel';

interface CaseItem {
  idTag: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string;
}

const casesData: CaseItem[] = [
  {
    idTag: '[CASE 01 // HIPERESCALA MOBILE]',
    title: 'Modernização & Estabilização banQi',
    subtitle: 'banQi — Casas Bahia Group | Mobile Engineering Lead',
    challenge: '120k crashes/semana, 900MB RAM, 60s boot no app principal banQi.',
    solution: 'Refatoração modular React Native + Kotlin/Swift, RASP AppDome, Fastlane, Azure DevOps.',
    impact: '-98% crashes, -55% RAM, -75% splash, $10k economia anual AWS.',
    stack: 'React Native · Kotlin · Swift · TypeScript · Fastlane · AppDome · Jest'
  },
  {
    idTag: '[CASE 02 // DEVTOOLS & AUTOMAÇÃO IA]',
    title: 'Engenharia Orientada a IA & Pipelines',
    subtitle: 'Inovação Estratégica & Produtividade | AI Dev Tools & Workflow',
    challenge: 'Gargalos em PR reviews manuais repetitivos, documentação técnica lenta (KRs, blueprints) e testes.',
    solution: 'Agentes customizados e pipelines de IA para análise de código, regressões e geração de testes.',
    impact: 'Redução drástica de overhead, aceleração de homologação, aumento de cobertura Jest/Vitest.',
    stack: 'GitHub Copilot · Custom Agents · CI/CD · TypeScript · Prompt Engineering'
  },
  {
    idTag: '[CASE 03 // MULTIPLATAFORMA & ARQUITETURA]',
    title: 'Design System & Módulos Multi-SO',
    subtitle: 'banQi & WiiD | Design System & Architecture',
    challenge: 'Inconsistência entre Android, iOS e Web, componentes duplicados, lentidão design-to-code.',
    solution: 'Biblioteca desacoplada tipada em TypeScript com tokens e pontes nativas dos SOs.',
    impact: 'Padronização total, 2x velocidade de entrega de features, testabilidade Jest/Vitest.',
    stack: 'React Native · React · Next.js · Expo · TypeScript · Design Systems · Vitest'
  }
];

export const MonolithCaseStudies: React.FC = () => {
  return (
    <section id="monolith-projects" className="w-full max-w-7xl mx-auto px-4 py-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-l-4 border-[#00f0ff] bg-[#14161a] p-3 mb-4 font-mono text-[11px] text-slate-300 border border-[#383b44]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-[#00f0ff]">/// 02 // CASOS DE ENGENHARIA</span>
          <span className="text-[#8e95a5]">::</span>
          <span className="text-slate-200 tracking-wider">
            ARQUITETURA, ESTABILIZAÇÃO, IA & DESIGN SYSTEMS
          </span>
        </div>
        <span className="text-[#8e95a5] font-semibold text-[10px] shrink-0">
          [ 3 PROJETOS AUDITADOS ]
        </span>
      </div>

      {/* 3 Cases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {casesData.map((c, idx) => (
          <MonolithPanel
            key={idx}
            interactive
            withRivets
            className="p-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Case Tag */}
              <div className="text-[11px] font-mono font-bold text-[#ff9900] tracking-wider">
                {c.idTag}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-['Space_Grotesk',sans-serif] text-white tracking-tight">
                  {c.title}
                </h3>
                <div className="text-[11px] font-mono text-[#8e95a5] mt-1 font-medium">
                  {c.subtitle}
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#383b44] my-2" />

              {/* Challenge */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-[#f59e0b] tracking-wider">
                  ▲ DESAFIO:
                </div>
                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {c.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-1 pt-1">
                <div className="text-[10px] font-mono font-bold text-[#00f0ff] tracking-wider">
                  ■ SOLUÇÃO:
                </div>
                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {c.solution}
                </p>
              </div>

              {/* Impact / Results */}
              <div className="space-y-1 pt-1">
                <div className="text-[10px] font-mono font-bold text-[#22c55e] tracking-wider">
                  ◆ IMPACTO / RESULTADOS:
                </div>
                <p className="text-xs font-sans text-white font-medium leading-relaxed bg-[#1b221d]/80 p-2 border border-[#22c55e]/30">
                  {c.impact}
                </p>
              </div>
            </div>

            {/* Tech Stack Box */}
            <div className="mt-4 pt-3 border-t border-[#383b44] bg-[#111317] p-2.5 text-[10px] font-mono text-slate-300 leading-normal border border-[#282b32]">
              <span className="text-[#8e95a5] font-bold">STACK: </span>
              {c.stack}
            </div>
          </MonolithPanel>
        ))}
      </div>
    </section>
  );
};
