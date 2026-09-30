import React from 'react';
import { motion } from 'framer-motion';
import { playAeroClick } from './soundEffectsAero';
import { useLanguage } from '../../i18n';

interface CaseStudy {
  id: string;
  icon: string;
  windowTitle: string;
  mainTitle: string;
  roleBadge: string;
  problem: string;
  solution: string;
  results: string;
  tags: string[];
}

export const AeroCaseStudies: React.FC = () => {
  const { language } = useLanguage();

  const cases: CaseStudy[] = [
    {
      id: 'banqi',
      icon: '📱',
      windowTitle:
        language === 'pt'
          ? 'banQi (Casas Bahia) — Modernização Mobile'
          : 'banQi (Casas Bahia) — Mobile Modernization',
      mainTitle:
        language === 'pt'
          ? 'Modernização & Estabilização em Hiperescala'
          : 'Hyperscale Modernization & Stabilization',
      roleBadge: 'Mobile Engineering Lead • banQi / Casas Bahia',
      problem:
        language === 'pt'
          ? '120.000 crashes semanais em produção, alto footprint de memória (900MB RAM) e lentidão severa na inicialização (60s splash-to-home).'
          : '120,000 weekly crashes in production, prohibitive memory footprint (900MB RAM), and severe startup latency (60s splash-to-home).',
      solution:
        language === 'pt'
          ? 'Auditoria na bridge React Native, módulos nativos em Kotlin/Swift, blindagem RASP AppDome, esteiras automatizadas Azure DevOps e Fastlane.'
          : 'React Native bridge audit, native Kotlin/Swift modules, AppDome RASP protection, and automated Azure DevOps and Fastlane pipelines.',
      results:
        language === 'pt'
          ? '-98% crashes (120k→2k), -55% RAM (900MB→400MB), -75% boot (60s→15s) e economia de nuvem de +$10k/ano AWS.'
          : '-98% crashes (120k→2k), -55% RAM (900MB→400MB), -75% boot (60s→15s), and +$10k/yr AWS cloud savings.',
      tags: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome', 'Azure DevOps', 'Jest']
    },
    {
      id: 'ai-agents',
      icon: '🤖',
      windowTitle:
        language === 'pt'
          ? 'IA & Automação — Workflows & Agentes'
          : 'AI & Automation — Workflows & Agents',
      mainTitle:
        language === 'pt'
          ? 'Automação de Engenharia Orientada a IA'
          : 'AI-Driven Engineering Automation',
      roleBadge: 'AI Dev Tools & Workflow Specialist',
      problem:
        language === 'pt'
          ? 'Gargalos em revisões manuais repetitivas de PRs, lentidão na escrita de especificações técnicas (KRs, blueprints) e defasagem de testes.'
          : 'Bottlenecks in repetitive manual PR reviews, high documentation overhead (KRs, blueprints), and lagging test coverage.',
      solution:
        language === 'pt'
          ? 'Agentes customizados e pipelines de IA integrados para triagem inteligente de PRs, detecção de regressões e geração assistida de suítes de teste.'
          : 'Custom AI agents and pipelines for intelligent PR triage, regression detection, and scaffolded Jest/Vitest test suite generation.',
      results:
        language === 'pt'
          ? 'Redução drástica de overhead operacional, aceleração expressiva de homologação e aumento sólido de cobertura Jest/Vitest.'
          : 'Dramatic reduction in operational overhead, significantly faster PR turnaround, and solid test coverage growth.',
      tags: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD', 'TypeScript', 'Prompt Eng', 'Jest', 'Vitest']
    },
    {
      id: 'design-system',
      icon: '🎨',
      windowTitle:
        language === 'pt'
          ? 'Design System — Módulos Multiplataforma'
          : 'Design System — Multiplatform Modules',
      mainTitle:
        language === 'pt'
          ? 'Design System & Módulos Multiplataforma'
          : 'Cross-Platform Design System & Native Modules',
      roleBadge: 'Design System & Architecture Specialist • banQi & WiiD',
      problem:
        language === 'pt'
          ? 'Inconsistência visual e funcional severa entre Android, iOS e Web, componentes duplicados e ciclo longo de handoff design-to-code.'
          : 'Severe visual and functional drift between Android, iOS, and Web, duplicate codebases, and slow design-to-code translation.',
      solution:
        language === 'pt'
          ? 'Biblioteca desacoplada fortemente tipada em TypeScript, arquitetura de design tokens sincronizados e pontes nativas nos sistemas operacionais.'
          : 'Decoupled strongly typed TypeScript library powered by centralized design tokens and native bridges for OS interactions.',
      results:
        language === 'pt'
          ? 'Padronização total de interfaces, 2x velocidade de entrega de features e 100% de confiabilidade em produção com testes automatizados.'
          : 'Full UI standardization, 2x feature delivery acceleration, and 100% production release reliability with automated tests.',
      tags: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Jest', 'Vitest']
    }
  ];

  return (
    <section className="relative z-10 my-6">
      {/* Section Header Badge */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-1">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-sm text-sky-900 text-xs font-bold tracking-tight">
          <span className="text-sm">📂</span>
          <span>
            {language === 'pt'
              ? 'CASOS DE ENGENHARIA DE HIPERESCALA'
              : 'HYPERSCALE ENGINEERING CASE STUDIES'}
          </span>
          <span className="text-sky-300">•</span>
          <span className="text-sky-600 font-mono text-[11px] font-semibold">
            {language === 'pt' ? '3 Dossiês de Produção' : '3 Production Dossiers'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {cases.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="aero-window flex flex-col overflow-hidden text-slate-800 shadow-xl"
          >
            {/* Window Aero Titlebar */}
            <div className="aero-titlebar px-3.5 py-2.5 min-h-[38px] flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-sm shrink-0 drop-shadow-sm">{item.icon}</span>
                <span className="aero-titlebar-text text-xs tracking-tight truncate">
                  {item.windowTitle}
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0 ml-2">
                <div className="aero-ctrl-btn aero-ctrl-min w-2.5 h-2.5" />
                <div className="aero-ctrl-btn aero-ctrl-max w-2.5 h-2.5" />
                <div className="aero-ctrl-btn aero-ctrl-close w-2.5 h-2.5" />
              </div>
            </div>

            {/* Window Content */}
            <div className="p-4 bg-gradient-to-b from-white/95 via-sky-50/70 to-white/90 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight mb-1">
                  {item.mainTitle}
                </h3>
                <div className="inline-block px-2 py-0.5 rounded-md bg-sky-100 border border-sky-300 text-[10.5px] font-bold text-sky-800 mb-3">
                  {item.roleBadge}
                </div>

                {/* Challenge / Problem */}
                <div className="mb-2.5 text-xs">
                  <div className="flex items-center gap-1 font-bold text-rose-700 text-[11px] mb-0.5">
                    <span>🔴</span> {language === 'pt' ? 'DESAFIO / PROBLEMA:' : 'CHALLENGE / PROBLEM:'}
                  </div>
                  <p className="text-slate-700 leading-snug pl-4 border-l-2 border-rose-300">
                    {item.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-2.5 text-xs">
                  <div className="flex items-center gap-1 font-bold text-amber-700 text-[11px] mb-0.5">
                    <span>💡</span> {language === 'pt' ? 'SOLUÇÃO TÉCNICA:' : 'ENGINEERED SOLUTION:'}
                  </div>
                  <p className="text-slate-700 leading-snug pl-4 border-l-2 border-amber-300">
                    {item.solution}
                  </p>
                </div>

                {/* Proven Results */}
                <div className="mb-3.5 text-xs">
                  <div className="flex items-center gap-1 font-bold text-emerald-700 text-[11px] mb-0.5">
                    <span>🏆</span> {language === 'pt' ? 'RESULTADOS COMPROVADOS:' : 'PROVEN RESULTS:'}
                  </div>
                  <p className="text-slate-800 font-semibold leading-snug pl-4 border-l-2 border-emerald-400 bg-emerald-50/60 py-1 rounded-r">
                    {item.results}
                  </p>
                </div>
              </div>

              {/* Technology Jelly Badges */}
              <div className="pt-2 border-t border-sky-200 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    onClick={playAeroClick}
                    className="btn-jelly-glass px-2 py-0.5 rounded-full text-[10px] font-semibold text-sky-900 cursor-pointer hover:border-sky-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
