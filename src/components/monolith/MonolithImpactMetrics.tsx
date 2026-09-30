import React from 'react';
import { MonolithPanel } from './MonolithPanel';
import { ShieldCheck } from 'lucide-react';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  bars: number;
  highlightText: string;
  description: string;
}

const metricsData: MetricItem[] = [
  {
    id: 'MTR-01',
    value: '-98%',
    label: 'CRASHES SEMANAIS',
    bars: 5,
    highlightText: 'De 120.000 para 2.000 crashes/sem no app banQi.',
    description: 'Auditoria bridge assíncrona React Native, Error Boundaries resilientes e telemetria Dynatrace/Databricks.'
  },
  {
    id: 'MTR-02',
    value: '-55%',
    label: 'CONSUMO DE RAM',
    bars: 4,
    highlightText: 'De 900MB para 400MB de footprint de memória.',
    description: 'Virtualização profunda de listas, desalocação de listeners nativos e bitmaps Android/iOS via Xcode e Profiler.'
  },
  {
    id: 'MTR-03',
    value: '-75%',
    label: 'SPLASH TO HOME',
    bars: 4,
    highlightText: 'De 60s para 15s de tempo de boot em produção.',
    description: 'Code-splitting granular, lazy loading, otimização bundle Hermes e paralelização de requisições de inicialização.'
  },
  {
    id: 'MTR-04',
    value: '+$10k',
    label: 'ECONOMIA ANUAL',
    bars: 5,
    highlightText: 'Redução direta de custos de infraestrutura AWS.',
    description: 'Agregação inteligente de chamadas client-side, otimização de esteiras CI/CD e corte drástico de egress de dados.'
  },
  {
    id: 'MTR-05',
    value: '0%→40%',
    label: 'TESTES CRÍTICOS',
    bars: 3,
    highlightText: 'Cobertura em fluxos financeiros e autenticação.',
    description: 'Suítes automatizadas Jest e Vitest, quality gates no GitHub Actions e Azure DevOps, TDD e Clean Architecture.'
  }
];

export const MonolithImpactMetrics: React.FC = () => {
  return (
    <section id="monolith-metrics" className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-10 scroll-mt-24">
      {/* Cinematic Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest uppercase text-white/50">
            <span className="text-[#ffaa00]">// 02</span>
            <span>TELEMETRY & IMPACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-['Space_Grotesk'] text-white tracking-tight uppercase">
            MÉTRICAS AUDITADAS EM PRODUÇÃO
          </h2>
          <p className="font-mono text-xs text-white/60 tracking-wider uppercase max-w-2xl leading-relaxed">
            RESULTADOS QUANTIFICADOS EM AMBIENTES DE HIPERESCALA NO GRUPO CASAS BAHIA E SISTEMAS EM NUVEM.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 font-mono text-[10px] text-white/70 tracking-widest uppercase">
          <ShieldCheck size={14} className="text-[#ffaa00]" />
          <span>5 METRICS VERIFIED</span>
        </div>
      </div>

      {/* 5 Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metricsData.map((m) => (
          <MonolithPanel
            key={m.id}
            interactive
            withCorners
            className="p-5 flex flex-col justify-between group hover:border-[#ffaa00]/60 transition-all"
          >
            <div className="space-y-3">
              {/* Card Header: Tag & Signal Bars */}
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-white/40 font-semibold group-hover:text-[#ffaa00] transition-colors">
                  {m.id}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, barIdx) => (
                    <div
                      key={barIdx}
                      className={`w-2 h-1 rounded-none transition-colors ${
                        barIdx < m.bars
                          ? 'bg-[#ffaa00] group-hover:bg-[#ffbb22]'
                          : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Big Monumental Number */}
              <div className="text-3xl sm:text-4xl font-black font-['Space_Grotesk'] tracking-tight text-white group-hover:text-[#ffaa00] transition-colors">
                {m.value}
              </div>

              {/* Metric Label */}
              <div className="text-[11px] font-mono font-bold tracking-widest uppercase text-white/90">
                {m.label}
              </div>

              {/* Hairline Divider */}
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-[#ffaa00]/30 transition-colors" />

              {/* Highlight Context */}
              <div className="text-[11px] font-mono text-white/75 leading-relaxed">
                {m.highlightText}
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="text-[10px] font-sans text-white/50 leading-relaxed pt-3 border-t border-white/5 mt-4">
              {m.description}
            </div>
          </MonolithPanel>
        ))}
      </div>
    </section>
  );
};

export default MonolithImpactMetrics;
