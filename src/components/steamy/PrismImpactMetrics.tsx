import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Cpu, Zap, DollarSign, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../i18n';


interface MetricItem {
  id: string;
  value: string;
  label: string;
  sub: string;
  description: string;
  icon: React.ReactNode;
}

export const PrismImpactMetrics: React.FC = () => {
  const { language } = useLanguage();

  const metrics: MetricItem[] = [
    {
      id: 'crashes',
      value: '-98%',
      label: language === 'pt' ? 'Redução de Crashes' : 'Crash Rate Reduction',
      sub: language === 'pt' ? '120k → 2k crashes/sem' : '120k → 2k weekly',
      description:
        language === 'pt'
          ? 'Auditoria de pontes assíncronas, Error Boundaries resilientes e observabilidade Databricks/Dynatrace.'
          : 'Audit of async native bridges, resilient Error Boundaries, and Databricks/Dynatrace observability.',
      icon: <TrendingDown className="w-5 h-5 text-indigo-600" />,
    },
    {
      id: 'ram',
      value: '-55%',
      label: language === 'pt' ? 'Consumo de RAM' : 'Memory Consumption',
      sub: language === 'pt' ? '900MB → 400MB footprint' : '900MB → 400MB footprint',
      description:
        language === 'pt'
          ? 'Virtualização de listas, desalocação de listeners nativos e otimização de bitmaps Android/iOS.'
          : 'List virtualization, native listener deallocation, and bitmap memory optimization on Android/iOS.',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
    },
    {
      id: 'splash',
      value: '-75%',
      label: language === 'pt' ? 'Splash to Home' : 'Splash to Home Latency',
      sub: language === 'pt' ? '60s → 15s inicialização' : '60s → 15s cold boot',
      description:
        language === 'pt'
          ? 'Code-splitting agressivo, bundle Hermes, lazy loading e inicialização assíncrona de SDKs.'
          : 'Aggressive code-splitting, Hermes bundle pre-warming, lazy loading, and async SDK initialization.',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      id: 'aws',
      value: '+$10k',
      label: language === 'pt' ? 'Economia Nuvem AWS' : 'AWS Cloud Savings',
      sub: language === 'pt' ? 'Redução anual direta' : 'Direct annual reduction',
      description:
        language === 'pt'
          ? 'Agregação inteligente de chamadas client-side e corte de transferência de dados redundantes.'
          : 'Smart client-side call debouncing and elimination of redundant data egress.',
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 'tests',
      value: '0% → 40%',
      label: language === 'pt' ? 'Cobertura de Testes' : 'Test Coverage',
      sub: language === 'pt' ? 'Automação Jest & Vitest' : 'Jest & Vitest automation',
      description:
        language === 'pt'
          ? 'Implementação de esteiras CI/CD com agentes de IA para geração e auditoria de testes unitários.'
          : 'CI/CD pipeline integration with custom AI agents for test generation and PR regression audits.',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <section className="w-full pt-4 pb-16 glass-section-contain">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xs sm:text-[13px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
          {language === 'pt' ? 'Impacto de Engenharia Quantificado' : 'Quantified Engineering Impact'}
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent flex-1" />
      </div>

      {/* 5 Glass Pods Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
        {metrics.map((m) => (
          <motion.div
            key={m.id}
            whileHover={{ y: -5 }}
            className="p-5 sm:p-6 rounded-[28px] apple-liquid-card-light transition-all flex flex-col justify-between cursor-default group transform-gpu"
          >
            <div>
              {/* Icon & Subtitle Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl apple-liquid-chip shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                  {m.icon}
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full apple-liquid-chip text-slate-600 shadow-2xs">
                  {m.sub}
                </span>
              </div>

              {/* Metric Big Value */}
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1 group-hover:text-indigo-600 transition-colors">
                {m.value}
              </div>

              {/* Metric Label */}
              <div className="text-xs font-bold text-slate-800 mb-2">
                {m.label}
              </div>

              {/* Description */}
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                {m.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
