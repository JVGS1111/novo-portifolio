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
    title: 'banQi Modernization & Hyperscale Stabilization',
    company: 'BANQI — CASAS BAHIA GROUP',
    bgImg: thumbBanqi,
    challenge: '120,000 crashes/week, 900MB RAM footprint, and 60s cold start under millions of active financial transactions.',
    solution: 'Technical lead in modular React Native refactoring, native modules in Kotlin & Swift, AppDome RASP security, Hermes optimization, and Fastlane / Azure DevOps CI/CD pipelines.',
    impact: '-98% weekly crashes (120k → 2k), -55% RAM footprint (400MB), -75% splash-to-home boot time (60s → 15s), and +$10k/yr AWS infrastructure savings.',
    stack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest']
  },
  {
    id: 'ai-devtools',
    num: '02',
    tag: 'AI DEV WORKFLOW & AGENTS',
    title: 'AI-Driven Engineering & Automation',
    company: 'STRATEGIC INNOVATION & PRODUCTIVITY',
    bgImg: thumbAi,
    challenge: 'High latency in repetitive manual PR reviews, slow drafting of technical/business specs (KRs, User Stories, Blueprints), and unit test coverage gaps.',
    solution: 'Orchestration of custom AI dev tooling, prompt engineering, and automated pipelines for code review analysis, regression detection, and drafting Jest/Vitest test suites.',
    impact: 'Substantial reduction in documentation overhead, accelerated PR review turnaround across multidisciplinary teams, and increased test generation coverage.',
    stack: ['GitHub Copilot Certified', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Jest / Vitest']
  },
  {
    id: 'design-system',
    num: '03',
    tag: 'MULTI-OS DESIGN SYSTEM',
    title: 'Design System & Cross-Platform Modules',
    company: 'BANQI & WIID',
    bgImg: thumbDesign,
    challenge: 'Visual and functional discrepancies across Android, iOS, and Web, duplicate components, visual bugs across screen densities, and slow design-to-code velocity.',
    solution: 'Highly decoupled component library strictly typed in TypeScript, platform-agnostic design tokens, and universal native bridges for OS proprietary capabilities.',
    impact: 'Standardization of hundreds of reusable components across platforms, 2x faster velocity for new product features, and testability guaranteed with Jest and Vitest.',
    stack: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Jest', 'Vitest']
  }
];

const casesDataPt: CaseItem[] = [
  {
    id: 'banqi-scale',
    num: '01',
    tag: 'HYPERSCALE MOBILE ARCHITECTURE',
    title: 'Modernização & Estabilização em Hiperescala',
    company: 'BANQI — GRUPO CASAS BAHIA',
    bgImg: thumbBanqi,
    challenge: '120.000 crashes/semana, footprint de 900MB de RAM e 60s de carregamento sob milhões de transações ativas.',
    solution: 'Liderança técnica na refatoração de fluxos legados, reengenharia de módulos nativos (Kotlin/Swift), segurança móvel com AppDome (RASP) e esteiras automatizadas de CI/CD com Fastlane.',
    impact: 'Redução de 98% nos crashes semanais (120k → 2k), queda de 55% no consumo de RAM (400MB), splash-to-home de 60s para 15s (-75%) e +$10k/ano de economia em infraestrutura AWS.',
    stack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome (RASP)', 'Azure DevOps', 'Jest']
  },
  {
    id: 'ai-devtools',
    num: '02',
    tag: 'AI DEV WORKFLOW & AGENTS',
    title: 'Automação de Engenharia Orientada a IA',
    company: 'INOVAÇÃO ESTRATÉGICA & PRODUTIVIDADE',
    bgImg: thumbAi,
    challenge: 'Altos gargalos em revisões manuais repetitivas de PRs, elaboração demorada de documentação de negócio (KRs, User Stories e Blueprints) e lacunas em testes unitários.',
    solution: 'Criação de prompts técnicos e pipelines automatizados com IA para análise preliminar de código, identificação de potenciais regressões e geração de rascunhos de testes e especificações técnicas.',
    impact: 'Redução substancial do overhead de documentação técnica e de negócio, aceleração na homologação de pull requests entre times e aumento na taxa de geração de cenários de teste Jest e Vitest.',
    stack: ['GitHub Copilot Certified', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Jest / Vitest']
  },
  {
    id: 'design-system',
    num: '03',
    tag: 'MULTI-OS DESIGN SYSTEM',
    title: 'Design System & Módulos Multiplataforma',
    company: 'BANQI & WIID',
    bgImg: thumbDesign,
    challenge: 'Inconsistência entre interfaces Android, iOS e Web, com duplicação de componentes, bugs visuais em diferentes densidades de tela e lentidão no design-to-code.',
    solution: 'Desenvolvimento de biblioteca de componentes altamente desacoplada, tipada com TypeScript, com suporte a tokens de design e pontes nativas para funcionalidades dos sistemas operacionais.',
    impact: 'Padronização de centenas de componentes reutilizáveis entre plataformas, velocidade 2x maior na prototipação e entrega de features e testabilidade garantida com Jest e Vitest.',
    stack: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Jest', 'Vitest']
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
