import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, TrendingDown, Cpu, Zap, DollarSign, ShieldCheck } from 'lucide-react';
import { playDropletSound } from './steamyAudio';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  sub: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgLight: string;
}

const metrics: MetricItem[] = [
  {
    id: 'crashes',
    value: '-98%',
    label: 'Redução de Crashes',
    sub: '120k → 2k crashes/sem',
    description: 'Auditoria bridge React Native, Error Boundaries resilientes, monitoramento Dynatrace & Databricks.',
    icon: <TrendingDown className="w-5 h-5 text-sky-600" />,
    color: 'text-sky-600',
    bgLight: 'bg-sky-500/10 border-sky-500/20',
  },
  {
    id: 'ram',
    value: '-55%',
    label: 'Consumo de RAM',
    sub: '900MB → 400MB footprint',
    description: 'Virtualização de listas, desalocação de listeners nativos e bitmaps Android/iOS, profiling Xcode.',
    icon: <Cpu className="w-5 h-5 text-sky-600" />,
    color: 'text-sky-600',
    bgLight: 'bg-sky-500/10 border-sky-500/20',
  },
  {
    id: 'splash',
    value: '-75%',
    label: 'Splash to Home',
    sub: '60s → 15s inicialização',
    description: 'Code-splitting, lazy loading, otimização bundle Hermes, conexões de API e SDKs em background.',
    icon: <Zap className="w-5 h-5 text-sky-600" />,
    color: 'text-sky-600',
    bgLight: 'bg-sky-500/10 border-sky-500/20',
  },
  {
    id: 'aws',
    value: '+$10k',
    label: 'Economia Nuvem AWS',
    sub: 'Redução direta AWS / ano',
    description: 'Agregação de chamadas de rede client-side, ajuste esteiras CI/CD, corte drástico de egress de dados.',
    icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
    color: 'text-emerald-600',
    bgLight: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    id: 'tests',
    value: '0% → 40%',
    label: 'Testes Automatizados',
    sub: '100% confiabilidade em prod',
    description: 'Suítes Jest e Vitest para fluxos críticos, quality gates no GitHub Actions e Azure DevOps, TDD.',
    icon: <ShieldCheck className="w-5 h-5 text-sky-600" />,
    color: 'text-sky-600',
    bgLight: 'bg-sky-500/10 border-sky-500/20',
  },
];

export const SteamyImpactMetrics: React.FC = () => {
  return (
    <section className="w-full mb-10">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <Droplets className="w-4 h-4 text-sky-600 shrink-0" />
        <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-sky-700">
          IMPACTO QUANTIFICADO & PERFORMANCE EM HIPERESCALA (CASAS BAHIA GROUP / banQi)
        </h2>
      </div>

      {/* 5 Dew Pods Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((pod, idx) => (
          <motion.div
            key={pod.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, scale: 1.02 }}
            onMouseEnter={() => playDropletSound(1 + idx * 0.15)}
            className="group relative p-5 rounded-[24px] bg-slate-50/90 backdrop-blur-xl border border-white/90 shadow-[0_16px_36px_rgba(30,45,65,0.06),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.02)] transition-all flex flex-col justify-between"
          >
            {/* Ambient droplet shine */}
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/80 border border-slate-200/60 shadow-xs flex items-center justify-center">
              {pod.icon}
            </div>

            <div>
              {/* Metric Number */}
              <div className={`text-3xl font-extrabold tracking-tight ${pod.color} mb-1`}>
                {pod.value}
              </div>

              {/* Metric Label */}
              <div className="text-sm font-bold text-slate-900 mb-0.5 leading-snug">
                {pod.label}
              </div>

              {/* Before/After Tag */}
              <div className="inline-block text-[11px] font-semibold text-sky-700 mb-2.5 font-mono">
                {pod.sub}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-500 leading-relaxed font-normal pt-2 border-t border-slate-200/50">
              {pod.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
