import React from 'react';
import { MonolithPanel } from './MonolithPanel';
import { ArrowUpRight, Layers } from 'lucide-react';
import { useLanguage } from '../../i18n';
import thumbBanqi from '../../assets/monolith_thumb_banqi.jpg';
import thumbAi from '../../assets/monolith_thumb_ai.jpg';
import thumbDesign from '../../assets/monolith_thumb_design.jpg';

interface CaseItem {
  id: string;
  num: string;
  tag: string;
  title: string;
  company: string;
  bgImg: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
}

const casesDataEn: CaseItem[] = [
  {
    id: 'banqi-scale',
    num: '01',
    tag: 'HYPERSCALE MOBILE ARCHITECTURE',
    title: 'banQi Modernization & Stabilization',
    company: 'BANQI — GRUPO CASAS BAHIA',
    bgImg: thumbBanqi,
    challenge: '120,000 crashes/week, 900MB RAM footprint, and 60s cold start under millions of active financial transactions.',
    solution: 'Decoupled React Native modular refactoring, Kotlin/Swift native bridges, AppDome RASP, Hermes compilation, and Fastlane/Azure DevOps pipelines.',
    impact: '-98% production crashes, -55% RAM consumption, -75% splash boot time, and $10k/year in AWS infrastructure savings.',
    stack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Hermes', 'Fastlane', 'AppDome']
  },
  {
    id: 'ai-devtools',
    num: '02',
    tag: 'AI DEV WORKFLOW & AGENTS',
    title: 'AI-Driven Engineering & Automation',
    company: 'GUEPSI & DEV PRODUCTIVITY LABS',
    bgImg: thumbAi,
    challenge: 'Bottlenecks in repetitive manual code reviews, high latency in architectural documentation, and low unit test coverage.',
    solution: 'Orchestration of autonomous AI agents and continuous static analysis pipelines for test suite generation, regression auditing, and living docs.',
    impact: 'Drastic reduction in PR lead time, accelerated review turnaround with high precision, and 100% CI/CD pipeline reliability.',
    stack: ['GitHub Copilot Certified', 'Custom AI Agents', 'TypeScript', 'Node.js', 'Vitest', 'CI/CD']
  },
  {
    id: 'design-system',
    num: '03',
    tag: 'MULTI-OS DESIGN SYSTEM',
    title: 'Design System & Cross-Platform Modules',
    company: 'BANQI & WIID ARCHITECTURE',
    bgImg: thumbDesign,
    challenge: 'Visual and functional discrepancies between Android, iOS, and Web, duplicate components, and high friction in design-to-engineering handoff.',
    solution: 'Decoupled ecosystem of platform-agnostic design tokens, strictly typed components, and universal native bridges.',
    impact: 'Absolute visual and functional parity, 2x faster delivery velocity for new product features, and automated test suites.',
    stack: ['Design Tokens', 'React', 'React Native', 'Next.js', 'TypeScript', 'Jest', 'Storybook']
  }
];

const casesDataPt: CaseItem[] = [
  {
    id: 'banqi-scale',
    num: '01',
    tag: 'HYPERSCALE MOBILE ARCHITECTURE',
    title: 'Modernização & Estabilização banQi',
    company: 'BANQI — GRUPO CASAS BAHIA',
    bgImg: thumbBanqi,
    challenge: '120.000 crashes/semana, footprint de 900MB de RAM e 60s de inicialização fria sob milhões de transações ativas.',
    solution: 'Refatoração modular React Native desacoplada, pontes nativas Kotlin/Swift, RASP AppDome, compilação Hermes e pipelines Fastlane/Azure DevOps.',
    impact: '-98% crashes em produção, -55% consumo de RAM, -75% splash boot time e $10k/ano de economia em infraestrutura AWS.',
    stack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Hermes', 'Fastlane', 'AppDome']
  },
  {
    id: 'ai-devtools',
    num: '02',
    tag: 'AI DEV WORKFLOW & AGENTS',
    title: 'Engenharia Orientada a IA & Automação',
    company: 'GUEPSI & DEV PRODUCTIVITY LABS',
    bgImg: thumbAi,
    challenge: 'Gargalos em revisões manuais repetitivas, tempo elevado de documentação técnica de arquitetura e cobertura incipiente de testes unitários.',
    solution: 'Orquestração de agentes autônomos de IA e pipelines contínuos de análise estática para geração de suítes de testes, auditoria de regressão e documentação viva.',
    impact: 'Redução drástica do lead time de PRs, homologação acelerada com alta precisão e 100% de confiabilidade em esteiras CI/CD.',
    stack: ['GitHub Copilot Certified', 'Custom AI Agents', 'TypeScript', 'Node.js', 'Vitest', 'CI/CD']
  },
  {
    id: 'design-system',
    num: '03',
    tag: 'MULTI-OS DESIGN SYSTEM',
    title: 'Design System & Módulos Multiplataforma',
    company: 'BANQI & WIID ARCHITECTURE',
    bgImg: thumbDesign,
    challenge: 'Inconsistência visual e funcional entre Android, iOS e Web, componentes duplicados e alto atrito no handoff entre design e engenharia.',
    solution: 'Criação de ecossistema desacoplado de design tokens agnósticos, componentes com tipagem estrita e pontes nativas universais.',
    impact: 'Padronização visual e funcional absoluta, ganho de 2x na velocidade de entrega de novas features e suítes completas de testes automatizados.',
    stack: ['Design Tokens', 'React', 'React Native', 'Next.js', 'TypeScript', 'Jest', 'Storybook']
  }
];

export const MonolithCaseStudies: React.FC = () => {
  const { language } = useLanguage();
  const casesData = language === 'pt' ? casesDataPt : casesDataEn;

  return (
    <section id="monolith-projects" className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-12 scroll-mt-24">
      {/* Cinematic Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest uppercase text-white/50">
            <span className="text-[#ffaa00]">// 03</span>
            <span>{language === 'pt' ? 'CASOS DE ESTUDO & ARQUITETURA' : 'CASE STUDIES & ARCHITECTURE'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-['Space_Grotesk'] text-white tracking-tight uppercase">
            {language === 'pt' ? 'CASOS DE ENGENHARIA CRÍTICA' : 'CRITICAL ENGINEERING CASE STUDIES'}
          </h2>
          <p className="font-mono text-xs text-white/60 tracking-wider uppercase max-w-2xl leading-relaxed">
            {language === 'pt'
              ? 'ARQUITETURA DE ALTO DESEMPENHO, RESOLUÇÃO DE PROBLEMAS COMPLEXOS E IMPACTO TÉCNICO COMPROVADO.'
              : 'HIGH-PERFORMANCE ARCHITECTURE, COMPLEX PROBLEM SOLVING, AND PROVEN TECHNICAL IMPACT.'}
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 font-mono text-[10px] text-white/70 tracking-widest uppercase">
          <Layers size={14} className="text-[#ffaa00]" />
          <span>{language === 'pt' ? '3 CASOS ARQUITETURAIS' : '3 ARCHITECTURAL CASES'}</span>
        </div>
      </div>

      {/* 3 Cases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {casesData.map((c) => (
          <MonolithPanel
            key={c.id}
            interactive
            withCorners
            bgImage={c.bgImg}
            className="p-6 flex flex-col justify-between group hover:border-[#ffaa00]/70 transition-all"
          >
            <div className="space-y-4">
              {/* Case Tag & Number */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest">
                <span className="text-[#ffaa00] font-bold uppercase">
                  // {c.tag}
                </span>
                <span className="text-white/30 font-bold group-hover:text-white transition-colors">
                  {c.num}
                </span>
              </div>

              {/* Title & Company */}
              <div>
                <div className="text-[10px] font-mono text-white/50 tracking-wider uppercase mb-1">
                  {c.company}
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-['Space_Grotesk'] text-white group-hover:text-[#ffaa00] transition-colors leading-tight flex items-center justify-between">
                  <span>{c.title}</span>
                  <ArrowUpRight size={18} className="text-white/30 group-hover:text-[#ffaa00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </h3>
              </div>

              <div className="w-full h-[1px] bg-white/10 group-hover:bg-[#ffaa00]/30 transition-colors" />

              {/* Challenge */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-white/50 tracking-widest uppercase">
                  {language === 'pt' ? '▲ DESAFIO TÉCNICO:' : '▲ TECHNICAL CHALLENGE:'}
                </div>
                <p className="text-xs font-sans text-white/70 leading-relaxed">
                  {c.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-[#ffaa00] tracking-widest uppercase">
                  {language === 'pt' ? '■ SOLUÇÃO ARQUITETURAL:' : '■ ARCHITECTURAL SOLUTION:'}
                </div>
                <p className="text-xs font-sans text-white/80 leading-relaxed">
                  {c.solution}
                </p>
              </div>

              {/* Impact / Results */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] font-mono font-bold text-[#22c55e] tracking-widest uppercase">
                  {language === 'pt' ? '◆ RESULTADOS QUANTIFICADOS:' : '◆ QUANTIFIED RESULTS:'}
                </div>
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-[#22c55e]/40 text-xs font-mono text-white font-medium leading-relaxed transition-colors">
                  {c.impact}
                </div>
              </div>
            </div>

            {/* Stack Badges */}
            <div className="pt-6 mt-4 border-t border-white/10">
              <div className="text-[9px] font-mono font-semibold text-white/40 tracking-widest uppercase mb-2">
                {language === 'pt' ? 'STACK TECNOLÓGICA:' : 'TECH STACK:'}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.stack.map((item, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 bg-black/40 border border-white/10 text-[10px] font-mono text-white/70 group-hover:border-white/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </MonolithPanel>
        ))}
      </div>
    </section>
  );
};

export default MonolithCaseStudies;
