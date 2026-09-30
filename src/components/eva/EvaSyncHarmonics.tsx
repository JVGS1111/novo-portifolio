import React, { useState, useEffect } from 'react';
import { BatteryCharging, BatteryWarning, Zap } from 'lucide-react';

interface EvaSyncHarmonicsProps {
  lang: 'en' | 'pt';
  onRecharge?: () => void;
}

export const EvaSyncHarmonics: React.FC<EvaSyncHarmonicsProps> = ({ lang }) => {
  // 5 minute internal battery countdown: 300 seconds
  const [remainingMs, setRemainingMs] = useState(299850);
  const [isUmbilicalConnected, setIsUmbilicalConnected] = useState(false);

  useEffect(() => {
    if (isUmbilicalConnected) return;

    const interval = setInterval(() => {
      setRemainingMs((prev) => {
        if (prev <= 100) return 300000; // Loop or clamp
        return prev - 85;
      });
    }, 85);

    return () => clearInterval(interval);
  }, [isUmbilicalConnected]);

  const minutes = Math.floor(remainingMs / 60000);
  const seconds = Math.floor((remainingMs % 60000) / 1000);
  const centiseconds = Math.floor((remainingMs % 1000) / 10);

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(centiseconds).padStart(2, '0')}`;

  const batteryPercent = Math.max(0, Math.min(100, Math.round((remainingMs / 300000) * 100)));
  const totalBlocks = 12;
  const filledBlocks = Math.round((batteryPercent / 100) * totalBlocks);

  const toggleUmbilical = () => {
    if (isUmbilicalConnected) {
      setIsUmbilicalConnected(false);
    } else {
      setIsUmbilicalConnected(true);
      setRemainingMs(300000);
    }
  };

  return (
    <div className="border border-[#ff5500]/40 bg-black/90 p-4 md:p-6 select-none relative overflow-hidden">
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff5500]" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff5500]" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff5500]" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff5500]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left: Internal Battery Tactical Meter */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-[#ff5500]/30 pb-2">
            <div className="flex items-center gap-2">
              {isUmbilicalConnected ? (
                <BatteryCharging size={16} className="text-[#00ff66]" />
              ) : (
                <BatteryWarning size={16} className="text-[#ff5500] animate-pulse" />
              )}
              <span className="font-eva-mono font-bold text-xs text-white tracking-widest uppercase">
                {lang === 'pt' ? 'BATERIA INTERNA' : 'INTERNAL BATTERY'} // 内部電源
              </span>
            </div>
            <button
              onClick={toggleUmbilical}
              className={`text-[10px] font-eva-mono px-2 py-0.5 border transition-all ${
                isUmbilicalConnected
                  ? 'border-[#00ff66] bg-[#00ff66]/15 text-[#00ff66]'
                  : 'border-[#ff5500] bg-[#ff5500]/15 text-[#ff5500] hover:bg-[#ff5500]/30'
              }`}
            >
              {isUmbilicalConnected
                ? (lang === 'pt' ? 'CABO CONECTADO [REDE ATIVA]' : 'UMBILICAL CONNECTED')
                : (lang === 'pt' ? 'RECONECTAR CABO' : 'RESTORE UMBILICAL')}
            </button>
          </div>

          {/* Massive Digital Countdown Timer */}
          <div className="flex items-baseline gap-3">
            <div className={`font-eva-mono text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isUmbilicalConnected
                ? 'text-[#00ff66]'
                : batteryPercent < 20
                ? 'text-red-500 animate-pulse'
                : 'text-[#ff5500]'
            }`}>
              {formattedTime}
            </div>
            <span className="font-eva-mono text-xs text-zinc-500 uppercase">
              {isUmbilicalConnected ? 'EXTERNAL AC 100%' : 'DISCHARGING'}
            </span>
          </div>

          {/* Segmented Power Bar */}
          <div>
            <div className="flex gap-1.5 h-3 w-full bg-zinc-950 p-0.5 border border-zinc-800">
              {Array.from({ length: totalBlocks }).map((_, i) => {
                const isActive = i < filledBlocks;
                const isCritical = batteryPercent < 25;
                return (
                  <div
                    key={i}
                    className={`flex-1 h-full transition-all duration-150 ${
                      isActive
                        ? isUmbilicalConnected
                          ? 'bg-[#00ff66]'
                          : isCritical
                          ? 'bg-red-600'
                          : 'bg-[#ff5500]'
                        : 'bg-zinc-900'
                    }`}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-[10px] font-eva-mono text-zinc-500 mt-1">
              <span>0% DEPLETED</span>
              <span className="text-[#ff9900] font-bold">{batteryPercent}% CAPACITY</span>
              <span>100% MAXIMUM</span>
            </div>
          </div>
        </div>

        {/* Right: A10 Synaptic Resonance Waveform */}
        <div className="space-y-3 md:border-l md:border-zinc-800 md:pl-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-[#ff9900]" />
              <span className="font-eva-mono font-bold text-xs text-white tracking-widest uppercase">
                {lang === 'pt' ? 'RESSONÂNCIA DO NERVO A10' : 'A10 SYNAPSE HARMONICS'} // 神経同期
              </span>
            </div>
            <span className="text-[10px] font-eva-mono text-[#00ff66] font-bold border border-[#00ff66]/30 px-1.5 py-0.5">
              SYNC: 99.42%
            </span>
          </div>

          {/* SVG Animated Oscilloscope Sine Wave */}
          <div className="relative h-16 w-full bg-zinc-950 border border-zinc-900 overflow-hidden flex items-center justify-center">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px]" />

            {/* Live Pulsing Sine Wave */}
            <svg className="w-full h-full relative z-10" viewBox="0 0 400 64" preserveAspectRatio="none">
              <path
                d="M0,32 Q25,8 50,32 T100,32 T150,32 T200,32 T250,32 T300,32 T350,32 T400,32"
                fill="none"
                stroke="#ff5500"
                strokeWidth="2"
                className="opacity-80"
              />
              <path
                d="M0,32 Q25,18 50,32 T100,32 T150,32 T200,32 T250,32 T300,32 T350,32 T400,32"
                fill="none"
                stroke="#00ff66"
                strokeWidth="1.5"
                strokeDasharray="4 2"
                className="opacity-60"
              />
            </svg>

            {/* Center Axis */}
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-zinc-700/40" />
          </div>

          <div className="flex items-center justify-between text-[10px] font-eva-mono text-zinc-500">
            <span>PULSE DEPTH: 89.4%</span>
            <span className="text-zinc-400">FEEDBACK CLAMP: NOMINAL</span>
            <span className="text-[#ff5500]">BIO-DATA LOCKED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
