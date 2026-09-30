import React from 'react';
import { MonolithPanel } from './MonolithPanel';

interface MetricItem {
  value: string;
  label: string;
  highlightColor: 'amber' | 'cyan' | 'green' | 'white';
  barCount: number;
  highlightText: string;
  description: string;
}

const metricsData: MetricItem[] = [
  {
    value: '-98%',
    label: 'CRASHES SEMANAIS',
    highlightColor: 'amber',
    barCount: 5,
    highlightText: 'De 120.000 para 2.000 crashes/sem no app banQi / Casas Bahia.',
    description: 'Auditoria bridge assíncrona React Native, Error Boundaries resilientes, monitoramento Dynatrace & Databricks.'
  },
  {
    value: '-55%',
    label: 'CONSUMO DE RAM',
    highlightColor: 'cyan',
    barCount: 4,
    highlightText: 'De 900MB para 400MB de footprint de memória em produção.',
    description: 'Virtualização de listas, desalocação de listeners nativos e bitmaps Android/iOS, profiling Xcode e Android Studio.'
  },
  {
    value: '-75%',
    label: 'SPLASH TO HOME',
    highlightColor: 'amber',
    barCount: 4,
    highlightText: 'De 60s para 15s de tempo de inicialização (cold boot).',
    description: 'Code-splitting, lazy loading, otimização bundle Hermes, conexões de API paralelas e SDKs em background.'
  },
  {
    value: '+$10k',
    label: 'ECONOMIA NUVEM/ANO',
    highlightColor: 'green',
    barCount: 5,
    highlightText: 'Redução direta de custos de infraestrutura AWS.',
    description: 'Agregação de chamadas de rede client-side, ajuste de esteiras CI/CD, corte drástico de egress de dados.'
  },
  {
    value: '0%→40%',
    label: 'COBERTURA TESTES',
    highlightColor: 'white',
    barCount: 3,
    highlightText: '100% de confiabilidade em fluxos críticos de produção.',
    description: 'Suítes Jest e Vitest para fluxos críticos, quality gates no GitHub Actions e Azure DevOps, TDD e Clean Code.'
  }
];

export const MonolithImpactMetrics: React.FC = () => {
  const getThemeClasses = (color: MetricItem['highlightColor']) => {
    switch (color) {
      case 'amber':
        return {
          text: 'text-[#ff9900]',
          bar: 'bg-[#ff9900]',
          topBar: 'bg-[#ff9900]'
        };
      case 'cyan':
        return {
          text: 'text-[#00f0ff]',
          bar: 'bg-[#00f0ff]',
          topBar: 'bg-[#00f0ff]'
        };
      case 'green':
        return {
          text: 'text-[#22c55e]',
          bar: 'bg-[#22c55e]',
          topBar: 'bg-[#22c55e]'
        };
      case 'white':
        return {
          text: 'text-slate-100',
          bar: 'bg-slate-300',
          topBar: 'bg-slate-300'
        };
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-l-4 border-[#ff9900] bg-[#14161a] p-3 mb-4 font-mono text-[11px] text-slate-300 border border-[#383b44]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-[#ff9900]">/// 01 // TELEMETRIA DE IMPACTO</span>
          <span className="text-[#8e95a5]">::</span>
          <span className="text-slate-200 tracking-wider">
            VERIFICADO EM ESCALA CRÍTICA (BANQI / CASAS BAHIA GROUP & NUVEM)
          </span>
        </div>
        <span className="text-[#8e95a5] font-semibold text-[10px] shrink-0">
          [ 5 MÉTRICAS AUDITADAS ]
        </span>
      </div>

      {/* 5 Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {metricsData.map((m, idx) => {
          const theme = getThemeClasses(m.highlightColor);
          return (
            <MonolithPanel
              key={idx}
              interactive
              withRivets
              className="p-5 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${theme.topBar}`} />

              <div className="space-y-3 pt-1">
                {/* Big Number & Level Bars */}
                <div className="flex items-baseline justify-between">
                  <div className={`text-3xl sm:text-4xl font-black font-['Space_Grotesk',sans-serif] tracking-tight ${theme.text}`}>
                    {m.value}
                  </div>
                  {/* Digital Signal Bars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, barIdx) => (
                      <div
                        key={barIdx}
                        className={`w-2.5 h-1 rounded-[1px] ${
                          barIdx < m.barCount ? theme.bar : 'bg-[#2a2d34]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Metric Label */}
                <div className="text-[11px] font-mono font-bold tracking-wider text-white">
                  {m.label}
                </div>

                <div className="h-[1px] w-full bg-[#383b44]" />

                {/* Highlight Context */}
                <div className="text-[11px] font-mono text-slate-300 leading-snug font-medium">
                  {m.highlightText}
                </div>
              </div>

              {/* Technical Description */}
              <div className="text-[10px] font-sans text-slate-400 leading-relaxed pt-3 border-t border-[#262930] mt-3">
                {m.description}
              </div>
            </MonolithPanel>
          );
        })}
      </div>
    </section>
  );
};
