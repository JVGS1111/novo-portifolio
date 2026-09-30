import React, { useRef, useEffect, useState } from 'react';

interface EvaAtFieldCanvasProps {
  className?: string;
  lang: 'en' | 'pt';
}

export const EvaAtFieldCanvas: React.FC<EvaAtFieldCanvasProps> = ({ className = '', lang }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [phaseAngle, setPhaseAngle] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let localPhase = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      localPhase += 0.02;
      setPhaseAngle(Math.floor((localPhase * 50) % 360));

      ctx.clearRect(0, 0, width, height);

      const centerX = width * (0.5 + (mousePos.x - 0.5) * 0.15);
      const centerY = height * (0.5 + (mousePos.y - 0.5) * 0.15);

      const ringCount = 8;
      const maxRadius = Math.min(width, height) * 0.44;

      // Draw concentric octagons (A.T. Field)
      for (let i = ringCount; i >= 1; i--) {
        const progress = i / ringCount;
        const radius = maxRadius * progress;
        const wave = Math.sin(localPhase * 2 - i * 0.5) * 4;
        const currentRadius = radius + wave;

        ctx.save();
        ctx.beginPath();

        const sides = 8;
        const angleOffset = Math.PI / 8; // Align octagonal flats

        for (let j = 0; j < sides; j++) {
          const a = angleOffset + (j * 2 * Math.PI) / sides;
          const px = centerX + Math.cos(a) * currentRadius;
          const py = centerY + Math.sin(a) * currentRadius;
          if (j === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.closePath();

        // Shimmering orange/amber gradient fills and strokes
        const alpha = 0.08 + (1 - progress) * 0.12 + (isInteracting ? 0.08 : 0);
        ctx.fillStyle = `rgba(255, 102, 0, ${alpha * 0.4})`;
        ctx.fill();

        ctx.lineWidth = i === ringCount ? 2 : 1.2;
        ctx.strokeStyle = i === ringCount
          ? `rgba(255, 120, 20, 0.9)`
          : `rgba(255, 80, 0, ${0.3 + (1 - progress) * 0.5})`;
        ctx.stroke();

        ctx.restore();
      }

      // Draw octagonal cross-hairs and radial distortion lines
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 130, 0, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - maxRadius * 1.15, centerY);
      ctx.lineTo(centerX + maxRadius * 1.15, centerY);
      ctx.moveTo(centerX, centerY - maxRadius * 1.15);
      ctx.lineTo(centerX, centerY + maxRadius * 1.15);
      ctx.stroke();

      // Diagonal 45 deg guide lines
      const diagDist = maxRadius * 1.1;
      ctx.beginPath();
      ctx.moveTo(centerX - diagDist * 0.707, centerY - diagDist * 0.707);
      ctx.lineTo(centerX + diagDist * 0.707, centerY + diagDist * 0.707);
      ctx.moveTo(centerX + diagDist * 0.707, centerY - diagDist * 0.707);
      ctx.lineTo(centerX - diagDist * 0.707, centerY + diagDist * 0.707);
      ctx.stroke();

      ctx.restore();

      // Center core point
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ff4400';
      ctx.fill();

      // Subtle pulse circle
      const pulseRadius = 14 + Math.sin(localPhase * 3) * 6;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 85, 0, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, isInteracting]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => {
        setIsInteracting(false);
        setMousePos({ x: 0.5, y: 0.5 });
      }}
      className={`relative overflow-hidden border border-[#ff5500]/40 bg-black/90 p-4 select-none ${className}`}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff5500]" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff5500]" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff5500]" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff5500]" />

      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between text-[11px] font-eva-mono border-b border-[#ff5500]/30 pb-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-ping" />
          <span className="text-[#ff5500] font-bold tracking-wider">A.T. FIELD HARMONICS</span>
          <span className="text-zinc-500">|</span>
          <span className="text-zinc-300">絶対恐怖領域</span>
        </div>
        <div className="text-zinc-400">
          CUT: <span className="text-[#ff9900]">Z+42.{phaseAngle % 90}</span>
        </div>
      </div>

      {/* Interactive Canvas */}
      <div className="relative w-full aspect-square max-h-[340px] flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          className="w-full h-full object-contain cursor-crosshair"
        />

        {/* Tactical HUD Overlay Data */}
        <div className="absolute top-3 left-3 text-[10px] font-eva-mono text-[#ff9900]/90 pointer-events-none">
          <div>OCTAGONAL PHASE: {phaseAngle}°</div>
          <div>BARRIER INTEGRITY: 100.0%</div>
          <div>INVASION INDEX: 0.00%</div>
        </div>

        <div className="absolute bottom-3 right-3 text-right text-[10px] font-eva-mono text-[#00ff66]/90 pointer-events-none">
          <div className="text-emerald-400 font-bold">PATTERN: BLUE (パターン青)</div>
          <div>BLOOD TYPE: ORTHODOX</div>
          <div>TARGET: HYPERSCALE STABILITY</div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="mt-2 pt-2 border-t border-[#ff5500]/30 flex items-center justify-between text-[10px] font-eva-mono text-zinc-400">
        <span className="text-zinc-500">
          {lang === 'pt' ? 'INTERAÇÃO: MOVA O CURSOR SOBRE O CAMPO' : 'INTERACTION: HOVER CURSOR TO SHIFT FIELD'}
        </span>
        <span className="text-[#ff5500] font-bold">RESONANCE: MAXIMUM</span>
      </div>
    </div>
  );
};
