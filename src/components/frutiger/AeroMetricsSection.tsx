import React from 'react';
import { motion } from 'framer-motion';
import { playAeroClick } from './soundEffectsAero';

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
  const metrics: MetricCardData[] = [
    {
      id: 'crashes',
      icon: '📉',
      category: 'ESTABILIDADE CRÍTICA',
      metric: '-98%',
      label: 'Crashes Semanais',
      badge: '120.000 → 2.000 crashes/sem',
      description: 'Auditoria na bridge React Native, Error Boundaries e telemetria Dynatrace/Databricks.',
      accentColor: 'text-sky-600'
    },
    {
      id: 'ram',
      icon: '⚡',
      category: 'MEMÓRIA NATIVA',
      metric: '-55%',
      label: 'Consumo de RAM',
      badge: '900MB → 400MB footprint',
      description: 'Virtualização de listas, desalocação de listeners nativos e profiling Android/Xcode.',
      accentColor: 'text-emerald-600'
    },
    {
      id: 'boot',
      icon: '🚀',
      category: 'TIME-TO-INTERACTIVE',
      metric: '-75%',
      label: 'Splash to Home',
      badge: '60s → 15s tempo de boot',
      description: 'Code-splitting, otimização bundle Hermes, APIs assíncronas e SDKs em background.',
      accentColor: 'text-amber-600'
    },
    {
      id: 'cloud',
      icon: '💰',
      category: 'EFICIÊNCIA DE NUVEM',
      metric: '+$10k',
      label: 'Economia Anual AWS',
      badge: 'Redução direta em infraestrutura',
      description: 'Agregação de requisições client-side, ajuste de pipelines CI/CD e corte de egress.',
      accentColor: 'text-cyan-600'
    },
    {
      id: 'tests',
      icon: '🛡️',
      category: 'CONFIABILIDADE',
      metric: '0%→40%',
      label: 'Cobertura de Testes',
      badge: '100% fluxos críticos testados',
      description: 'Suítes automatizadas Jest/Vitest, quality gates no GitHub Actions e Azure DevOps.',
      accentColor: 'text-purple-600'
    }
  ];

  return (
    <section className="relative z-10 my-6">
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
