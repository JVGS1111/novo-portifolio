import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, AlertTriangle, Wrench, Trophy } from 'lucide-react';
import { playDropletSound } from './steamyAudio';

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  challenge: string;
  solution: string;
  results: string;
  techStack: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-01',
    tag: 'CASE 01 · banQi — Casas Bahia Group',
    title: 'Modernização & Estabilização em Hiperescala',
    challenge:
      '120k crashes semanais em produção, 900MB de consumo de memória RAM e 60s de inicialização (Splash to Home) degradando a experiência do app banQi.',
    solution:
      'Refatoração modular profunda React Native + Kotlin/Swift, desacoplamento de pontes assíncronas, blindagem RASP AppDome e automação Fastlane + Azure DevOps.',
    results:
      '-98% crashes (120k→2k), -55% RAM (900MB→400MB), -75% splash (60s→15s) e +$10k economia de nuvem AWS.',
    techStack: ['React Native', 'Kotlin', 'Swift', 'TypeScript', 'Fastlane', 'AppDome', 'Azure DevOps', 'Jest'],
  },
  {
    id: 'case-02',
    tag: 'CASE 02 · Inovação Estratégica & Produtividade',
    title: 'Automação de Engenharia Orientada a IA',
    challenge:
      'Gargalos em PR reviews manuais repetitivos, documentação técnica lenta (KRs, blueprints) e suítes de testes desatualizadas atrasando deploys.',
    solution:
      'Implementação de agentes customizados e pipelines inteligentes de IA para auditoria contínua de código, detecção de regressões e scaffolding autônomo de testes unitários.',
    results:
      'Redução drástica de overhead operacional, aceleração de homologações críticas e elevação da cobertura de testes para 40%+ em tempo recorde.',
    techStack: ['GitHub Copilot', 'Generative AI', 'Custom Agents', 'CI/CD Automation', 'TypeScript', 'Prompt Eng', 'Jest', 'Vitest'],
  },
  {
    id: 'case-03',
    tag: 'CASE 03 · banQi & WiiD',
    title: 'Design System & Módulos Multiplataforma',
    challenge:
      'Severa inconsistência visual e de comportamento entre Android, iOS e Web, componentes duplicados e lentidão extrema no ciclo de entrega design-to-code.',
    solution:
      'Criação de biblioteca modular desacoplada e 100% tipada em TypeScript, arquitetura de design tokens dinâmicos e pontes nativas unificadas entre os sistemas operacionais.',
    results:
      'Padronização cross-platform de 100% dos componentes, 2x velocidade de prototipação e entrega, além de cobertura extensiva Jest e Vitest.',
    techStack: ['React Native', 'React', 'Next.js', 'Expo', 'TypeScript', 'Design Systems', 'Jest', 'Vitest'],
  },
];

export const SteamyCaseStudies: React.FC = () => {
  return (
    <section className="w-full mb-10">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
        <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-sky-700">
          CASOS DE ESTUDO DE ENGENHARIA & ARQUITETURA EM HIPERESCALA
        </h2>
      </div>

      {/* 3 Case Study Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {caseStudies.map((cs, idx) => (
          <motion.article
            key={cs.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            onMouseEnter={() => playDropletSound(1.1 + idx * 0.1)}
            className="p-6 rounded-[28px] bg-slate-50/90 backdrop-blur-xl border border-white/90 shadow-[0_20px_48px_rgba(30,45,65,0.06),inset_0_2px_4px_rgba(255,255,255,0.95)] flex flex-col justify-between transition-all"
          >
            <div>
              {/* Case Index Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-700 text-xs font-bold mb-3 font-mono">
                <Layers className="w-3.5 h-3.5 text-sky-600" />
                <span>{cs.tag}</span>
              </div>

              {/* Card Title */}
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
                {cs.title}
              </h3>

              {/* Challenge Box (Rose/Red Soft Frosted Tint) */}
              <div className="p-3.5 rounded-2xl bg-rose-50/80 border border-rose-200/60 mb-3 text-xs text-rose-900 leading-relaxed shadow-xs">
                <div className="flex items-center gap-1.5 font-bold mb-1 text-rose-800">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Desafio de Engenharia</span>
                </div>
                <p className="text-rose-900/90 font-normal">{cs.challenge}</p>
              </div>

              {/* Solution Box (Sky Blue Soft Frosted Tint) */}
              <div className="p-3.5 rounded-2xl bg-sky-50/80 border border-sky-200/60 mb-3 text-xs text-sky-950 leading-relaxed shadow-xs">
                <div className="flex items-center gap-1.5 font-bold mb-1 text-sky-800">
                  <Wrench className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Solução & Arquitetura</span>
                </div>
                <p className="text-sky-900/90 font-normal">{cs.solution}</p>
              </div>

              {/* Results Box (Emerald Soft Frosted Tint) */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 mb-4 text-xs text-emerald-950 leading-relaxed shadow-xs">
                <div className="flex items-center gap-1.5 font-bold mb-1 text-emerald-800">
                  <Trophy className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Resultados Verificados</span>
                </div>
                <p className="text-emerald-900 font-semibold">{cs.results}</p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-3 border-t border-slate-200/60">
              <div className="text-[10.5px] uppercase font-bold text-slate-400 mb-2 tracking-wider">
                Stack & Ferramentas
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cs.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 text-[11px] font-medium shadow-2xs hover:border-sky-300 hover:text-sky-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
