import React from 'react';
import { motion } from 'framer-motion';
import { playAeroClick } from './soundEffectsAero';

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
  const cases: CaseStudy[] = [
    {
      id: 'banqi',
      icon: '📱',
      windowTitle: 'banQi (Casas Bahia) — Modernização Mobile',
      mainTitle: 'Modernização & Estabilização em Hiperescala',
      roleBadge: 'Mobile Engineering Lead • banQi / Casas Bahia',
      problem:
        '120.000 crashes semanais em produção, alto footprint de memória (900MB RAM) e lentidão severa na inicialização (60s splash-to-home).',
      solution:
        'Auditoria na bridge React Native, módulos nativos em Kotlin/Swift, blindagem RASP AppDome, esteiras automatizadas Azure DevOps e Fastlane.',
      results:
        '-98% crashes (120k→2k), -55% RAM (900MB→400MB), -75% boot (60s→15s) e economia de nuvem de +$10k/ano AWS.',
      tags: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome', 'Azure DevOps', 'Jest']
    },
    {
      id: 'ai-agents',
      icon: '🤖',
      windowTitle: 'IA & Automação — Workflows & Agentes',
      mainTitle: 'Automação de Engenharia Orientada a IA',
      roleBadge: 'AI Dev Tools & Workflow Specialist',
      problem:
        'Gargalos em revisões manuais repetitivas de PRs, lentidão na escrita de especificações técnicas (KRs, blueprints) e defasagem de testes.',
      solution:
        'Agentes customizados e pipelines de IA integrados para triagem inteligente de PRs, detecção de regressões e geração assistida de suítes de teste.',
      results:
        'Redução drástica de overhead operacional, aceleração expressiva de homologação e aumento sólido de cobertura Jest/Vitest.',
      tags: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD', 'TypeScript', 'Prompt Eng', 'Jest', 'Vitest']
    },
    {
      id: 'design-system',
      icon: '🎨',
      windowTitle: 'Design System — Módulos Multiplataforma',
      mainTitle: 'Design System & Módulos Multiplataforma',
      roleBadge: 'Design System & Architecture Specialist • banQi & WiiD',
      problem:
        'Inconsistência visual e funcional severa entre Android, iOS e Web, componentes duplicados e ciclo longo de handoff design-to-code.',
      solution:
        'Biblioteca desacoplada fortemente tipada em TypeScript, arquitetura de design tokens sincronizados e pontes nativas nos sistemas operacionais.',
      results:
        'Padronização total de interfaces, 2x velocidade de entrega de features e 100% de confiabilidade em produção com testes automatizados.',
      tags: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Jest', 'Vitest']
    }
  ];

  return (
    <section className="relative z-10 my-6">
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
            <div className="aero-titlebar px-3 py-2 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-sm shrink-0">{item.icon}</span>
                <span className="text-xs font-bold text-white tracking-tight truncate drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  {item.windowTitle}
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0 ml-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-white/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-white/80" />
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
                    <span>🔴</span> DESAFIO / PROBLEMA:
                  </div>
                  <p className="text-slate-700 leading-snug pl-4 border-l-2 border-rose-300">
                    {item.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-2.5 text-xs">
                  <div className="flex items-center gap-1 font-bold text-amber-700 text-[11px] mb-0.5">
                    <span>💡</span> SOLUÇÃO TÉCNICA:
                  </div>
                  <p className="text-slate-700 leading-snug pl-4 border-l-2 border-amber-300">
                    {item.solution}
                  </p>
                </div>

                {/* Proven Results */}
                <div className="mb-3.5 text-xs">
                  <div className="flex items-center gap-1 font-bold text-emerald-700 text-[11px] mb-0.5">
                    <span>🏆</span> RESULTADOS COMPROVADOS:
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
