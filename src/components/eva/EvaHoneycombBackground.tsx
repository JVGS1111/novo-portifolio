import React, { useRef, useEffect } from 'react';

interface EvaHoneycombBackgroundProps {
  mode?: 'honeycomb' | 'pentagon';
  className?: string;
}

interface ActiveCell {
  col: number;
  row: number;
  intensity: number;
  decay: number;
}

export const EvaHoneycombBackground: React.FC<EvaHoneycombBackgroundProps> = ({
  mode = 'honeycomb',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Active pulsing cells
    const activeCells: ActiveCell[] = [];
    let lastCellSpawnTime = 0;

    // Geometric parameters
    const hexRadius = 34; // Distance from center to vertex
    const hexHeight = Math.sqrt(3) * hexRadius;
    const horizDist = 1.5 * hexRadius;
    const vertDist = hexHeight;

    let time = 0;

    const drawPolygon = (
      centerX: number,
      centerY: number,
      radius: number,
      sides: number,
      angleOffset = 0
    ) => {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const a = angleOffset + (i * 2 * Math.PI) / sides;
        const px = centerX + Math.cos(a) * radius;
        const py = centerY + Math.sin(a) * radius;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
    };

    const render = () => {
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      // Spawn random synaptic cells
      if (time - lastCellSpawnTime > 0.45 && activeCells.length < 12) {
        lastCellSpawnTime = time;
        const numCols = Math.ceil(width / horizDist) + 2;
        const numRows = Math.ceil(height / vertDist) + 2;
        activeCells.push({
          col: Math.floor(Math.random() * numCols),
          row: Math.floor(Math.random() * numRows),
          intensity: 1.0,
          decay: 0.01 + Math.random() * 0.015
        });
      }

      // Update active cells
      for (let i = activeCells.length - 1; i >= 0; i--) {
        activeCells[i].intensity -= activeCells[i].decay;
        if (activeCells[i].intensity <= 0) {
          activeCells.splice(i, 1);
        }
      }

      const numCols = Math.ceil(width / horizDist) + 2;
      const numRows = Math.ceil(height / vertDist) + 2;
      const mouse = mousePosRef.current;

      const isHex = mode === 'honeycomb';
      const sides = isHex ? 6 : 5;
      const angleOffset = isHex ? 0 : -Math.PI / 2;

      for (let col = -1; col < numCols; col++) {
        for (let row = -1; row < numRows; row++) {
          let cx = col * horizDist;
          let cy = row * vertDist + (col % 2 !== 0 ? vertDist / 2 : 0);

          if (!isHex) {
            // Pentagonal staggered constellation
            cx = col * (hexRadius * 2.2);
            cy = row * (hexRadius * 2.2) + (col % 2 !== 0 ? hexRadius * 1.1 : 0);
          }

          // Distance to mouse cursor
          const dx = mouse.x - cx;
          const dy = mouse.y - cy;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);
          const mouseGlow = Math.max(0, 1 - distToMouse / 260);

          // Sweeping diagonal radar wave
          const waveVal = Math.sin((cx + cy) * 0.0035 - time * 1.8);
          const waveGlow = Math.max(0, (waveVal - 0.7) * 3.33); // Peaks 0 to 1

          // Check if cell is in active synaptic list
          let cellActiveBonus = 0;
          for (let ac of activeCells) {
            if (ac.col === col && ac.row === row) {
              cellActiveBonus = ac.intensity;
              break;
            }
          }

          const combinedGlow = Math.min(1, waveGlow * 0.45 + mouseGlow * 0.9 + cellActiveBonus * 0.85);

          // Base wireframe stroke
          const baseStrokeAlpha = 0.035 + combinedGlow * 0.4;
          const strokeColor = cellActiveBonus > 0.5
            ? `rgba(255, 170, 0, ${0.4 + cellActiveBonus * 0.5})`
            : combinedGlow > 0.4
            ? `rgba(255, 95, 0, ${baseStrokeAlpha * 1.4})`
            : `rgba(255, 75, 0, ${baseStrokeAlpha})`;

          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = combinedGlow > 0.4 ? 1.5 : 0.8;

          drawPolygon(cx, cy, hexRadius * 0.92, sides, angleOffset);
          ctx.stroke();

          // Cell interior fill if glowing
          if (combinedGlow > 0.12) {
            const fillAlpha = combinedGlow * 0.14;
            ctx.fillStyle = cellActiveBonus > 0.5
              ? `rgba(255, 170, 0, ${fillAlpha * 1.6})`
              : `rgba(255, 70, 0, ${fillAlpha})`;
            ctx.fill();
          }

          // Small vertex / center markings for active cells
          if (combinedGlow > 0.5) {
            ctx.fillStyle = cellActiveBonus > 0.5 ? '#ffaa00' : '#ff5500';
            ctx.beginPath();
            ctx.arc(cx, cy, 2, 0, Math.PI * 2);
            ctx.fill();

            // Concentric target ring on high mouse proximity
            if (mouseGlow > 0.6) {
              ctx.strokeStyle = 'rgba(255, 100, 0, 0.4)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(cx, cy, hexRadius * 0.45, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
        }
      }

      // Edge Vignette to keep text readable
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.25,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      grad.addColorStop(0, 'rgba(2, 2, 4, 0.25)');
      grad.addColorStop(0.7, 'rgba(2, 2, 4, 0.75)');
      grad.addColorStop(1, 'rgba(2, 2, 4, 0.96)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mode]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-70 transition-opacity duration-1000"
      />

      {/* Subtle Scanlines effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] opacity-40 pointer-events-none" />
    </div>
  );
};
