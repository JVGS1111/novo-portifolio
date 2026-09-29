import React, { useState, useEffect, useRef } from 'react';
import { impactMetrics } from '../../../data/portfolioData';
import { playAlertSound, playClickSound } from '../soundEffects';

export const PerformanceMonitorApp: React.FC = () => {
  const [stressTestActive, setStressTestActive] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string>(impactMetrics[0].id);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Real-time canvas telemetry waveform animation (CRT green oscilloscope)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Dark CRT screen clear
      ctx.fillStyle = '#051208';
      ctx.fillRect(0, 0, w, h);

      // Grid lines (retro green CRT oscilloscope)
      ctx.strokeStyle = '#0e3a16';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw primary stability wave (Smooth sine + noise)
      ctx.beginPath();
      ctx.strokeStyle = stressTestActive ? '#ff3333' : '#00ff41';
      ctx.lineWidth = 2;
      ctx.shadowColor = stressTestActive ? '#ff0000' : '#00ff41';
      ctx.shadowBlur = 6;

      for (let x = 0; x < w; x++) {
        const amplitude = stressTestActive ? 22 : 8;
        const freq = stressTestActive ? 0.08 : 0.03;
        const noise = (Math.random() - 0.5) * (stressTestActive ? 12 : 2);
        const y = h / 2 + Math.sin((x + offset) * freq) * amplitude + noise;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      offset += stressTestActive ? 5 : 1.5;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [stressTestActive]);

  const toggleStressTest = () => {
    playAlertSound();
    setStressTestActive(!stressTestActive);
  };

  const currentMetric = impactMetrics.find((m) => m.id === selectedMetric) || impactMetrics[0];

  return (
    <div className="p-3 text-[11px] font-['Tahoma',sans-serif] bg-black text-[#00FF00] h-full flex flex-col font-mono">
      {/* Top Header / Oscillo Monitor Banner */}
      <div className="flex items-center justify-between pb-2 border-b border-[#0e3a16] mb-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF00] animate-ping" />
          <span className="font-bold text-white font-mono tracking-wider">
            SYS_PERF_MONITOR v4.10 [LIVE PRODUCTION METRICS]
          </span>
        </div>
        <button
          type="button"
          onClick={toggleStressTest}
          className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded border transition-colors cursor-pointer ${
            stressTestActive
              ? 'bg-red-600 text-white border-white animate-pulse'
              : 'bg-[#0e3a16] text-[#00FF00] border-[#00FF00] hover:bg-[#155421]'
          }`}
        >
          {stressTestActive ? '🚨 ALERTA: TESTE DE ESTRESSE ATIVO' : '⚡ SIMULAR PICO DE TRÁFEGO'}
        </button>
      </div>

      {/* Live Canvas Waveform Display */}
      <div className="relative border border-[#00FF00]/40 rounded overflow-hidden mb-3">
        <canvas ref={canvasRef} width={680} height={70} className="w-full h-[70px] block" />
        <div className="absolute top-1.5 left-2 text-[9px] text-[#00FF00]/70 font-mono">
          CANAL A: BANQI_CLUSTER // LATÊNCIA: {stressTestActive ? '42ms (Absorvida)' : '8ms'} // STATUS: 100% OPERACIONAL
        </div>
      </div>

      {/* Main Grid: Metric Gauges & Detailed Telemetry */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 overflow-auto">
        {/* Metric Selector List */}
        <div className="space-y-1.5 overflow-y-auto pr-1">
          <div className="text-[10px] font-bold uppercase text-white/70 mb-1">
            SELECIONE A MÉTRICA AUDITADA:
          </div>
          {impactMetrics.map((item) => {
            const isSel = item.id === selectedMetric;
            return (
              <div
                key={item.id}
                onClick={() => {
                  playClickSound();
                  setSelectedMetric(item.id);
                }}
                className={`p-2 border rounded cursor-pointer transition-all ${
                  isSel
                    ? 'bg-[#003311] border-[#00FF00] text-white shadow-[0_0_8px_rgba(0,255,0,0.3)]'
                    : 'bg-[#051208] border-[#0e3a16] text-[#00FF00]/80 hover:bg-[#08200e]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base font-mono text-[#00FF00]">{item.metric}</span>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-black/50 border border-[#0e3a16] text-slate-300">
                    {item.impactCategory}
                  </span>
                </div>
                <div className="text-[10.5px] font-bold text-white mt-0.5">{item.label}</div>
                <div className="text-[9.5px] text-[#00FF00]/70 truncate">{item.sublabel}</div>
              </div>
            );
          })}
        </div>

        {/* Detailed Inspector Pane */}
        <div className="p-3 bg-[#051208] border border-[#00FF00]/40 rounded flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-[10px] uppercase font-bold text-slate-400">
              RELATÓRIO TÉCNICO DE ENGENHARIA:
            </div>
            <div className="text-xl font-bold text-white flex items-baseline gap-2">
              <span className="text-2xl text-[#00FF00]">{currentMetric.metric}</span>
              <span className="text-xs text-slate-300">{currentMetric.label}</span>
            </div>
            <div className="text-[10px] text-amber-300 font-semibold">
              Delta Registrado: {currentMetric.sublabel}
            </div>
            <p className="text-[10.5px] text-slate-200 leading-relaxed pt-1">
              {currentMetric.description}
            </p>

            <div className="pt-2 border-t border-[#0e3a16]">
              <span className="text-[10px] font-bold text-[#00FF00] uppercase block mb-1">
                Implementação & Como Foi Feito:
              </span>
              <div className="space-y-1">
                {currentMetric.technicalHow.map((how, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[9.5px] text-slate-300">
                    <span className="text-[#00FF00] font-bold">►</span>
                    <span>{how}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#0e3a16] flex items-center justify-between text-[9px] text-[#00FF00]/70">
            <span>MEMÓRIA ATUAL: 400MB</span>
            <span>CRASH RATE: 0.01%</span>
            <span>BUILD STABILITY: 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
