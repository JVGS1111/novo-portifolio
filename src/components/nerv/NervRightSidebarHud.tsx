import React, { useState } from 'react';
import type { NervContent } from './nervTranslations';
import eva01Wireframe from '../../assets/eva01_wireframe.jpg';
import tokyo3Topography from '../../assets/tokyo3_topography.jpg';

interface NervRightSidebarHudProps {
  content: NervContent;
  onOpenUnitDossier?: () => void;
}

export const NervRightSidebarHud: React.FC<NervRightSidebarHudProps> = ({
  content,
  onOpenUnitDossier: _onOpenUnitDossier
}) => {
  const { rightHud } = content;
  const [isCombatActive, setIsCombatActive] = useState(false);

  return (
    <aside className="w-56 md:w-64 xl:w-72 shrink-0 border-l border-[#2C323E] bg-[#0A0C10]/90 backdrop-blur-md p-3.5 flex flex-col justify-between font-mono select-none z-20 overflow-y-auto">
      {/* Top EVA Unit Status */}
      <div className="space-y-2 border-b border-[#2C323E] pb-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] text-zinc-400 font-bold tracking-widest">
              NERV CAGE // 拘束具
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white tracking-tighter">
                {rightHud.evaUnit}
              </span>
              <span className="text-sm font-bold text-zinc-400 font-serif">
                {rightHud.evaKanji}
              </span>
            </div>
          </div>

          {/* Interactive Standby / Active Toggle Badge */}
          <button
            type="button"
            onClick={() => setIsCombatActive(!isCombatActive)}
            className={`px-2 py-0.5 text-[10px] font-black border transition-all cursor-pointer ${
              isCombatActive
                ? 'bg-red-600 text-white border-red-500 shadow-[0_0_12px_rgba(255,24,1,0.7)] animate-pulse'
                : 'bg-black/60 text-red-500 border-red-600/70 hover:bg-red-950/30'
            }`}
            title="Click to toggle Combat Telemetry"
          >
            {isCombatActive ? rightHud.activeStatus : `[ ${rightHud.standbyStatus} ]`}
          </button>
        </div>

        {/* Telemetry Block */}
        <div className="p-2 bg-black/60 border border-zinc-800 text-[10px] space-y-1">
          <div className="flex justify-between text-zinc-400">
            <span>{rightHud.testType}</span>
          </div>
          <div className="flex justify-between text-zinc-300">
            <span>PILOT:</span>
            <span className="text-white font-bold">{isCombatActive ? '03 (J.V.G.)' : '--'}</span>
          </div>
          <div className="flex justify-between text-zinc-300">
            <span>SYNC:</span>
            <span className={isCombatActive ? 'text-emerald-400 font-bold' : 'text-zinc-500'}>
              {isCombatActive ? rightHud.syncValue : '--'}
            </span>
          </div>
          <div className="flex justify-between text-zinc-300">
            <span>STATUS:</span>
            <span className={isCombatActive ? 'text-red-400 font-bold' : 'text-amber-400'}>
              {isCombatActive ? 'COMBAT ENGAGED' : 'STANDBY'}
            </span>
          </div>

          {/* Sync Waveform Simulation */}
          <div className="pt-1.5 flex items-end gap-[2px] h-4">
            {[40, 65, 80, 50, 95, 70, 85, 60, 90, 75, 55, 99].map((height, i) => (
              <div
                key={i}
                className={`flex-1 transition-all duration-300 ${
                  isCombatActive ? 'bg-red-500' : 'bg-zinc-700'
                }`}
                style={{
                  height: isCombatActive ? `${height}%` : '20%'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center: EVA-01 Wireframe Schematic */}
      <div className="my-2 p-1.5 bg-black/80 border border-red-600/40 relative group overflow-hidden">
        <div className="absolute top-1 left-1.5 text-[8px] text-red-500/80 font-bold tracking-widest z-10">
          PROFILE SCHEMATIC // 設計図
        </div>
        <div className="relative aspect-square w-full flex items-center justify-center overflow-hidden">
          <img
            src={eva01Wireframe}
            alt="EVA-01 Wireframe Schematic"
            className="w-full h-full object-cover mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle scanning laser line */}
          <div className="absolute inset-x-0 h-[1px] bg-red-500 shadow-[0_0_8px_#FF1801] animate-pulse top-1/2" />
        </div>
        <div className="text-[7.5px] text-zinc-500 flex justify-between px-1 pt-1">
          <span>POLYGON: MESH-01</span>
          <span>A10 SYNAPSE: OK</span>
        </div>
      </div>

      {/* Bottom: MAGI Monitoring System & Tokyo-3 Radar */}
      <div className="space-y-2 border-t border-[#2C323E] pt-2.5">
        <div>
          <div className="text-[9.5px] font-bold text-zinc-300 tracking-wider mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
            {rightHud.monitoringSystem}
          </div>
          <div className="space-y-0.5 text-[9px] text-zinc-400 bg-black/50 p-1.5 border border-zinc-800">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="text-[10px]">■</span>
              <span>{rightHud.magiMelchior}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="text-[10px]">■</span>
              <span>{rightHud.magiBalthasar}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="text-[10px]">■</span>
              <span>{rightHud.magiCasper}</span>
            </div>
          </div>
        </div>

        {/* Tokyo-3 Coordinates & Topography */}
        <div className="p-1.5 bg-black/70 border border-red-900/50 flex items-center gap-2">
          <div className="w-14 h-14 shrink-0 overflow-hidden border border-red-600/30">
            <img
              src={tokyo3Topography}
              alt="Tokyo-3 Caldera Radar"
              className="w-full h-full object-cover mix-blend-screen"
            />
          </div>
          <div className="text-[8.5px] text-zinc-400 leading-tight">
            <div className="text-[9.5px] font-bold text-red-400 uppercase tracking-widest">
              {rightHud.locationName}
            </div>
            <div>{rightHud.coordinatesLat}</div>
            <div>{rightHud.coordinatesLong}</div>
            <div className="text-[7.5px] text-emerald-400 mt-0.5">GEOFRONT // LEVEL 7</div>
          </div>
        </div>
      </div>
    </aside>
  );
};
