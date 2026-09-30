import React from 'react';
import { motion } from 'framer-motion';
import { playAeroClick } from './soundEffectsAero';
import { useLanguage } from '../../i18n';

interface MetricCardData {
  id: string;
  icon: string;
  category: string;
  metric: string;
  label: string;
  badge: string;
  description: string;
  accentColor: string;
}

export const AeroMetricsSection: React.FC = () => {
  const { language } = useLanguage();

  const metrics: MetricCardData[] = [
    {
      id: 'crashes',
      icon: '📉',
      category: language === 'pt' ? 'ESTABILIDADE CRÍTICA' : 'CRITICAL STABILITY',
      metric: '-98%',
      label: language === 'pt' ? 'Crashes Semanais' : 'Weekly Crashes',
      badge: language === 'pt' ? '120.000 → 2.000 crashes/sem' : '120,000 → 2,000 weekly',
      description:
        language === 'pt'
          ? 'Auditoria na bridge React Native, Error Boundaries e telemetria Dynatrace/Databricks.'
          : 'React Native bridge audit, Error Boundaries, and Dynatrace/Databricks telemetry.',
      accentColor: 'text-sky-600'
    },
    {
      id: 'ram',
      icon: '⚡',
      category: language === 'pt' ? 'MEMÓRIA NATIVA' : 'NATIVE MEMORY',
      metric: '-55%',
      label: language === 'pt' ? 'Consumo de RAM' : 'RAM Footprint',
      badge: '900MB → 400MB footprint',
      description:
        language === 'pt'
          ? 'Virtualização de listas, desalocação de listeners nativos e profiling Android/Xcode.'
          : 'List virtualization, native listener cleanup, and Android/Xcode memory profiling.',
      accentColor: 'text-emerald-600'
    },
    {
      id: 'boot',
      icon: '🚀',
      category: 'TIME-TO-INTERACTIVE',
      metric: '-75%',
      label: 'Splash to Home',
      badge: language === 'pt' ? '60s → 15s tempo de boot' : '60s → 15s startup time',
      description:
        language === 'pt'
          ? 'Code-splitting, otimização bundle Hermes, APIs assíncronas e SDKs em background.'
          : 'Code-splitting, Hermes bundle tuning, async APIs, and background SDK initialization.',
      accentColor: 'text-amber-600'
    },
    {
      id: 'cloud',
      icon: '💰',
      category: language === 'pt' ? 'EFICIÊNCIA DE NUVEM' : 'CLOUD EFFICIENCY',
      metric: '+$10k',
      label: language === 'pt' ? 'Economia Anual AWS' : 'AWS Cloud Savings',
      badge: language === 'pt' ? 'Redução direta em infraestrutura' : 'Direct infra reduction',
      description:
        language === 'pt'
          ? 'Agregação de requisições client-side, ajuste de pipelines CI/CD e corte de egress.'
          : 'Client-side request debouncing, CI/CD pipeline tuning, and elimination of redundant egress.',
      accentColor: 'text-cyan-600'
    },
    {
      id: 'tests',
      icon: '🛡️',
      category: language === 'pt' ? 'CONFIABILIDADE' : 'RELIABILITY',
      metric: '0%→40%',
      label: language === 'pt' ? 'Cobertura de Testes' : 'Test Coverage',
      badge: language === 'pt' ? '100% fluxos críticos testados' : '100% critical flows covered',
      description:
        language === 'pt'
          ? 'Suítes automatizadas Jest/Vitest, quality gates no GitHub Actions e Azure DevOps.'
          : 'Automated Jest/Vitest test suites, quality gates in GitHub Actions & Azure DevOps.',
      accentColor: 'text-purple-600'
    }
  ];

  return (
    <section className="relative z-10 my-6">
      {/* Section Header Badge */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-1">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-sm text-sky-900 text-xs font-bold tracking-tight">
          <span className="text-sm">📊</span>
          <span>
            {language === 'pt'
              ? 'MÉTRICAS AUDITADAS DE HIPERESCALA'
              : 'AUDITED HYPERSCALE METRICS'}
          </span>
          <span className="text-sky-300">•</span>
          <span className="text-emerald-700 font-mono text-[11px] font-bold">
            {language === 'pt' ? 'Resultados Comprovados em Produção' : 'Proven Production Results'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {metrics.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ scale: 1.03, y: -4 }}
            onClick={playAeroClick}
            className="aero-metric-card sweep-hover p-4 cursor-pointer select-none"
          >
            {/* Header Category with Icon */}
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-base">{item.icon}</span>
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                {item.category}
              </span>
            </div>

            {/* Big Metric Number */}
            <div className={`text-3xl font-black tracking-tight ${item.accentColor} mb-1 drop-shadow-sm`}>
              {item.metric}
            </div>

            {/* Label */}
            <div className="text-xs font-bold text-slate-800 mb-1">{item.label}</div>

            {/* Highlight Badge */}
            <div className="inline-block px-2 py-0.5 rounded-full bg-sky-100/90 border border-sky-300/80 text-[10px] font-mono font-semibold text-sky-800 mb-2">
              {item.badge}
            </div>

            {/* Description */}
            <p className="text-[11px] text-slate-600 leading-snug">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
