import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Eraser, Droplets, Volume2, VolumeX, Eye } from 'lucide-react';
import { playDropletSound, playSteamSound, playWipeSound, isSteamyMuted, setSteamyMuted } from './steamyAudio';

interface SteamWipeCanvasProps {
  onClearAll?: () => void;
  onRestoreSteam?: () => void;
}

export const SteamWipeCanvas: React.FC<SteamWipeCanvasProps> = ({ onClearAll, onRestoreSteam }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWiping, setIsWiping] = useState(false);
  const [clearedPercent, setClearedPercent] = useState(0);
  const [muted, setMuted] = useState(isSteamyMuted);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mode, setMode] = useState<'finger' | 'squeegee'>('finger');
  const lastSoundTime = useRef(0);

  const initFog = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Reset composite operation
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, width, height);

    // Create realistic steam/fog condensation gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(240, 245, 250, 0.94)');
    gradient.addColorStop(0.5, 'rgba(248, 250, 252, 0.90)');
    gradient.addColorStop(1, 'rgba(235, 242, 248, 0.95)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add thousands of condensed micro-droplets texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    for (let i = 0; i < 400; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      const r = Math.random() * 2 + 0.8;
      ctx.beginPath();
      ctx.arc(rx, ry, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Larger condensed droplets
    for (let i = 0; i < 60; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      const r = Math.random() * 4 + 2;
      ctx.beginPath();
      ctx.arc(rx, ry, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(180, 205, 225, 0.4)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    setClearedPercent(0);
    playSteamSound();
  }, []);

  // Set canvas size matching container
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initFog();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initFog]);

  // Wipe function (erasing fog with feathered soft circle)
  const wipeAt = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';

    const radius = mode === 'squeegee' ? 55 : 28;
    const radialGrad = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
    radialGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
    radialGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.9)');
    radialGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = radialGrad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    // Trigger subtle squeak or droplet sound with throttle
    const now = Date.now();
    if (now - lastSoundTime.current > 80) {
      if (mode === 'squeegee') {
        playWipeSound();
      } else {
        playDropletSound(1.2);
      }
      lastSoundTime.current = now;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsWiping(true);
    const rect = e.currentTarget.getBoundingClientRect();
    wipeAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isWiping && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    wipeAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerUp = () => {
    setIsWiping(false);
  };

  const clearAllFog = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setClearedPercent(100);
    playWipeSound();
    playDropletSound(0.9);
    if (onClearAll) onClearAll();
  };

  const restoreFog = () => {
    initFog();
    if (onRestoreSteam) onRestoreSteam();
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    setSteamyMuted(next);
    if (!next) {
      playDropletSound();
    }
  };

  return (
    <div className="w-full mb-8">
      {/* Interactive Steam Panel Container */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[32px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_20px_48px_rgba(30,45,65,0.08),inset_0_2px_4px_rgba(255,255,255,0.9)]"
      >
        {/* Top Control Bar inside the Sandbox */}
        <div className="px-5 py-3 border-b border-slate-200/60 bg-white/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
            </span>
            <span className="font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-sky-500" />
              Vidro com Vapor & Condensação Interativa
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 text-[10px] font-semibold border border-sky-200">
              Passe o cursor ou dedo no vidro
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Tool Mode selector */}
            <button
              type="button"
              onClick={() => {
                setMode('finger');
                playDropletSound();
              }}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                mode === 'finger'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-white/80 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              👆 Dedo
            </button>

            <button
              type="button"
              onClick={() => {
                setMode('squeegee');
                playWipeSound();
              }}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                mode === 'squeegee'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-white/80 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              🧽 Rodo Limpador
            </button>

            {/* Clear All Fog */}
            <button
              type="button"
              onClick={clearAllFog}
              title="Limpar todo o vapor do vidro"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-sky-600 text-[11px] font-medium border border-slate-200/80 shadow-xs transition-all cursor-pointer"
            >
              <Eraser className="w-3.5 h-3.5 text-sky-500" />
              <span className="hidden md:inline">Limpar Tudo</span>
            </button>

            {/* Re-Fog Steam */}
            <button
              type="button"
              onClick={restoreFog}
              title="Condensar novo vapor no vidro"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-sky-600 text-[11px] font-medium border border-slate-200/80 shadow-xs transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-sky-500" />
              <span className="hidden md:inline">Embaçar</span>
            </button>

            {/* Mute toggle */}
            <button
              type="button"
              onClick={toggleMute}
              title={muted ? 'Ativar efeitos sonoros táteis' : 'Silenciar áudio'}
              className="p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-sky-600 border border-slate-200/80 shadow-xs transition-all cursor-pointer"
            >
              {muted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-sky-500" />}
            </button>

            {/* Minimize / Collapse Sandbox */}
            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80 transition-all cursor-pointer"
              title={isCollapsed ? 'Expandir espelho interativo' : 'Minimizar'}
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Content Under the Glass (Revealed When Wiped) */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 160, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-40 select-none overflow-hidden"
            >
              {/* Revealed Underneath Layer (Clean, crisp and vibrant message & specs) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center bg-gradient-to-r from-sky-50 via-teal-50/60 to-emerald-50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">✨</span>
                  <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                    Visão Cristalina: Engenharia Sênior & Performance de Alto Impacto
                  </span>
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  "Remover o ruído técnico e o débito operacional para revelar arquiteturas robustas, estáveis e escaláveis para milhões de usuários diários."
                </p>
                <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                  <span className="px-2 py-0.5 rounded-full bg-white/90 border border-slate-200 text-sky-600 font-semibold">
                    💧 98% menos crashes
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/90 border border-slate-200 text-emerald-600 font-semibold">
                    ⚡ 75% boot mais rápido
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/90 border border-slate-200 text-indigo-600 font-semibold">
                    🛡️ RASP & Clean Architecture
                  </span>
                </div>
              </div>

              {/* The Interactive Steamy Fog Canvas Sitting on Top */}
              <canvas
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10"
                style={{
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.03))',
                }}
              />

              {/* Instructional overlay badge that fades when interacted */}
              {clearedPercent < 5 && (
                <div className="absolute bottom-3 right-4 pointer-events-none z-20 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 shadow-md animate-pulse">
                  <span>👆</span>
                  <span>Arraste para limpar o vapor do espelho</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
