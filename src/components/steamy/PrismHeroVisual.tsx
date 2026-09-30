import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';

interface PrismHeroVisualProps {

  onScrollToProjects?: () => void;
}

export const PrismHeroVisual: React.FC<PrismHeroVisualProps> = ({ onScrollToProjects }) => {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Interactive Code Values
  const [codeValues, setCodeValues] = useState({
    experience: 'great',
    performance: 'fast',
    architecture: 'scalable',
    impact: 'real',
  });

  // Framer Motion 3D Physics Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 140, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D Rotations
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);

  // Subtle floating translation for multi-axis 3D feel
  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);

  // Dynamic Specular Glare following mouse
  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], [15, 85]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], [15, 85]);

  // Prismatic Rainbow Flare Shift
  const flareRotate = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const codeSnippet = `export function buildProduct() {
  return {
    experience: "${codeValues.experience}",
    performance: "${codeValues.performance}",
    architecture: "${codeValues.architecture}",
    impact: "${codeValues.impact}"
  }
}`;

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const cycleValue = (key: keyof typeof codeValues, options: string[], e: React.MouseEvent) => {
    e.stopPropagation();
    setCodeValues((prev) => {
      const curIdx = options.indexOf(prev[key]);
      const nextIdx = (curIdx + 1) % options.length;
      return { ...prev, [key]: options[nextIdx] };
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] mx-auto py-6 sm:py-10 select-none"
      style={{ perspective: 1200 }}
    >
      {/* Halo Prismatic Glow no Fundo (Refração e Dispersão Cromática) */}
      <motion.div
        style={{
          x: translateX,
          y: translateY,
          rotate: flareRotate,
        }}
        className="absolute -inset-4 sm:-inset-8 rounded-[48px] bg-gradient-to-tr from-sky-400/20 via-indigo-400/20 to-purple-400/25 blur-3xl pointer-events-none opacity-80"
      />

      {/* Sombra de Contato Suave em Camadas */}
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="absolute inset-8 rounded-[36px] bg-slate-900/10 blur-2xl transform translate-y-10 scale-95 pointer-events-none"
      />

      {/* CARD DE CÓDIGO MONUMENTAL EM VIDRO PRISMÁTICO COM FÍSICA 3D */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full rounded-[36px] sm:rounded-[40px] bg-white/85 sm:bg-white/90 backdrop-blur-md border border-white/95 shadow-[0_30px_70px_rgba(20,30,55,0.08),0_10px_25px_rgba(20,30,55,0.04),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.02)] p-6 sm:p-8 cursor-default overflow-hidden group transform-gpu"
      >

        {/* Dynamic Specular Glass Glare Layer (Segue a Luz do Cursor) */}
        <motion.div
          className="absolute inset-0 rounded-[36px] sm:rounded-[40px] pointer-events-none"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle 380px at ${gx}% ${gy}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 40%, transparent 75%)`
            ),
          }}
        />

        {/* Arco de Borda Prismática com Brilho Iridescente no Topo */}
        <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent pointer-events-none" />

        {/* 1. Card Header: Semáforo macOS + Tag Interativa + Botão Copiar */}
        <div
          className="flex items-center justify-between pb-4 border-b border-slate-200/60 mb-4 relative z-10"
          style={{ transform: 'translateZ(26px)' }}
        >
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-xs hover:opacity-80 transition-opacity" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-xs hover:opacity-80 transition-opacity" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-xs hover:opacity-80 transition-opacity" />
            <span className="ml-2 hidden xs:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100/80 text-[10px] font-mono font-medium text-slate-500">
              <Sparkles className="w-2.5 h-2.5 text-indigo-500" />
              buildProduct.ts
            </span>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopyCode}
            title="Copiar código para a área de transferência"
            className="px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:shadow-md transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono font-medium active:scale-95 group/btn"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 animate-in zoom-in-50" />
                <span className="text-emerald-700 font-sans text-[11px] font-semibold">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500 group-hover/btn:text-slate-800 transition-colors" />
                <span className="text-[11px] font-sans text-slate-600 group-hover/btn:text-slate-900 font-medium hidden xs:inline">
                  Copiar
                </span>
              </>
            )}
          </button>
        </div>

        {/* 2. Code Snippet Lines (JetBrains Mono & Sintaxe Vibrante) */}
        <div
          className="font-mono text-[13px] sm:text-[14px] leading-relaxed text-slate-700 py-1 relative z-10"
          style={{ transform: 'translateZ(34px)' }}
        >
          {/* Linha 1 */}
          <div className="flex items-start py-0.5">
            <span className="w-6 text-slate-400/80 select-none text-right pr-3 text-[11px]">1</span>
            <div>
              <span className="text-purple-600 font-bold">export function </span>
              <span className="text-blue-600 font-bold">buildProduct</span>
              <span className="text-slate-800">() {'{'}</span>
            </div>
          </div>

          {/* Linha 2 */}
          <div className="flex items-start py-0.5">
            <span className="w-6 text-slate-400/80 select-none text-right pr-3 text-[11px]">2</span>
            <div className="pl-4">
              <span className="text-fuchsia-600 font-bold">return </span>
              <span className="text-slate-800">{'{'}</span>
            </div>
          </div>

          {/* Linha 3: experience */}
          <div className="flex items-start py-0.5">
            <span className="w-6 text-slate-400/80 select-none text-right pr-3 text-[11px]">3</span>
            <div className="pl-8">
              <span className="text-sky-600 font-medium">experience</span>
              <span className="text-slate-700">: </span>
              <button
                type="button"
                onClick={(e) => cycleValue('experience', ['great', 'exceptional', 'delightful', 'fluid'], e)}
                className="text-emerald-600 hover:text-emerald-700 font-bold px-1.5 py-0.5 rounded-md hover:bg-emerald-50/80 border border-transparent hover:border-emerald-200 transition-all cursor-pointer group/val inline-flex items-center gap-1"
                title="Clique para alternar o valor"
              >
                <span>"{codeValues.experience}"</span>
                <span className="text-[10px] text-emerald-500 opacity-0 group-hover/val:opacity-100 transition-opacity">↻</span>
              </button>
              <span className="text-slate-700">,</span>
            </div>
          </div>

          {/* Linha 4: performance */}
          <div className="flex items-start py-0.5">
            <span className="w-6 text-slate-400/80 select-none text-right pr-3 text-[11px]">4</span>
            <div className="pl-8">
              <span className="text-sky-600 font-medium">performance</span>
              <span className="text-slate-700">: </span>
              <button
                type="button"
                onClick={(e) => cycleValue('performance', ['fast', 'blazing', 'instant', 'optimized'], e)}
                className="text-emerald-600 hover:text-emerald-700 font-bold px-1.5 py-0.5 rounded-md hover:bg-emerald-50/80 border border-transparent hover:border-emerald-200 transition-all cursor-pointer group/val inline-flex items-center gap-1"
                title="Clique para alternar o valor"
              >
                <span>"{codeValues.performance}"</span>
                <span className="text-[10px] text-emerald-500 opacity-0 group-hover/val:opacity-100 transition-opacity">↻</span>
              </button>
              <span className="text-slate-700">,</span>
            </div>
          </div>

          {/* Linha 5: architecture */}
          <div className="flex items-start py-0.5">
            <span className="w-6 text-slate-400/80 select-none text-right pr-3 text-[11px]">5</span>
            <div className="pl-8">
              <span className="text-sky-600 font-medium">architecture</span>
              <span className="text-slate-700">: </span>
              <button
                type="button"
                onClick={(e) => cycleValue('architecture', ['scalable', 'clean', 'bulletproof', 'modular'], e)}
                className="text-emerald-600 hover:text-emerald-700 font-bold px-1.5 py-0.5 rounded-md hover:bg-emerald-50/80 border border-transparent hover:border-emerald-200 transition-all cursor-pointer group/val inline-flex items-center gap-1"
                title="Clique para alternar o valor"
              >
                <span>"{codeValues.architecture}"</span>
                <span className="text-[10px] text-emerald-500 opacity-0 group-hover/val:opacity-100 transition-opacity">↻</span>
              </button>
              <span className="text-slate-700">,</span>
            </div>
          </div>

          {/* Linha 6: impact */}
          <div className="flex items-start py-0.5">
            <span className="w-6 text-slate-400/80 select-none text-right pr-3 text-[11px]">6</span>
            <div className="pl-8">
              <span className="text-sky-600 font-medium">impact</span>
              <span className="text-slate-700">: </span>
              <button
                type="button"
                onClick={(e) => cycleValue('impact', ['real', 'proven', 'quantified', 'game-changing'], e)}
                className="text-emerald-600 hover:text-emerald-700 font-bold px-1.5 py-0.5 rounded-md hover:bg-emerald-50/80 border border-transparent hover:border-emerald-200 transition-all cursor-pointer group/val inline-flex items-center gap-1"
                title="Clique para alternar o valor"
              >
                <span>"{codeValues.impact}"</span>
                <span className="text-[10px] text-emerald-500 opacity-0 group-hover/val:opacity-100 transition-opacity">↻</span>
              </button>
            </div>
          </div>

          {/* Linha 7 */}
          <div className="flex items-start py-0.5">
            <span className="w-6 text-slate-400/80 select-none text-right pr-3 text-[11px]">7</span>
            <div className="pl-4 text-slate-800">{'}'}</div>
          </div>

          {/* Linha 8 */}
          <div className="flex items-start py-0.5">
            <span className="w-6 text-slate-400/80 select-none text-right pr-3 text-[11px]">8</span>
            <div className="text-slate-800">{'}'}</div>
          </div>
        </div>

        {/* 3. Rodapé do Card: Status Bar */}
        <div
          className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono relative z-10"
          style={{ transform: 'translateZ(24px)' }}
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-slate-700 font-semibold font-sans">Ready to build</span>
          </div>
          <span className="text-slate-400 text-[11px] font-sans">Last commit 2h ago</span>
        </div>
      </motion.div>

      {/* BOTÃO CIRCULAR DE VIDRO COM SETA (Lateral direita) */}
      <div className="hidden sm:flex absolute -right-6 bottom-4 z-30">
        <button
          type="button"
          onClick={() => {
            if (onScrollToProjects) onScrollToProjects();
          }}
          className="w-13 h-13 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-white/95 shadow-[0_10px_26px_rgba(20,30,55,0.08),inset_0_2px_4px_rgba(255,255,255,0.95)] flex items-center justify-center text-slate-800 hover:text-indigo-600 transition-all hover:scale-110 active:scale-95 cursor-pointer group transform-gpu"
          title="Ver projetos em destaque"
        >
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
