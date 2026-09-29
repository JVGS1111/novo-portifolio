import React, { useState, useRef, useEffect } from 'react';
import { portfolioRegistry, getCurrentPortfolio, navigateToPortfolio, type PortfolioItem } from '../../data/portfolioRegistry';
import { playClickSound } from './soundEffects';

export const Win98PortfolioSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHash = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [isOpen]);

  const current = getCurrentPortfolio(currentHash);

  const handleSelect = (item: PortfolioItem) => {
    playClickSound();
    setIsOpen(false);
    navigateToPortfolio(item);
  };

  return (
    <div ref={containerRef} className="relative select-none font-['Tahoma',sans-serif] text-black text-[11px]">
      {/* Trigger Button (Classic Windows 98 Beveled Button) */}
      <button
        type="button"
        onClick={() => {
          playClickSound();
          setIsOpen(!isOpen);
        }}
        className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#C0C0C0] text-black font-bold text-[11px] sm:text-xs border-2 shadow-md cursor-pointer transition-none ${
          isOpen
            ? 'border-t-black border-l-black border-r-white border-b-white bg-[#DFDFDF] pt-[2px] pl-[2px]'
            : 'border-t-white border-l-white border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white'
        }`}
        title="Alternar entre temas e conceitos de portfólio"
      >
        <span className="text-sm">{current.icon}</span>
        <span className="truncate max-w-[140px] sm:max-w-none">
          {current.shortName} <span className="font-normal text-slate-700">({portfolioRegistry.filter((p) => p.status === 'active').length} temas)</span>
        </span>
        <span className="text-[9px] ml-0.5">▼</span>
      </button>

      {/* Classic Windows 98 Popup Menu / Combobox */}
      {isOpen && (
        <div className="absolute right-0 mt-1 w-72 sm:w-80 bg-[#C0C0C0] p-1 border-2 border-t-white border-l-white border-r-black border-b-black shadow-[4px_4px_12px_rgba(0,0,0,0.5)] z-[9500]">
          <div className="bg-[#000080] text-white px-2 py-1 font-bold text-[11px] mb-1 flex items-center justify-between">
            <span>🎨 Selecionar Versão / Conceito</span>
            <span className="text-[9px] font-normal text-blue-200">Guerber Hub</span>
          </div>

          <div className="space-y-0.5 bg-white border border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-1 max-h-72 overflow-y-auto">
            {portfolioRegistry.map((item) => {
              const isSelected = current.id === item.id;
              const isComingSoon = item.status === 'coming_soon';

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`px-2 py-1.5 flex items-start gap-2 cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-[#000080] text-white font-bold'
                      : 'hover:bg-[#000080] hover:text-white text-black'
                  }`}
                >
                  <span className="text-base shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="truncate text-[11px]">{item.name}</span>
                      <span
                        className={`text-[9px] px-1 rounded-xs font-mono uppercase shrink-0 ${
                          isSelected
                            ? 'bg-blue-900 text-yellow-300 border border-yellow-300/40'
                            : isComingSoon
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div
                      className={`text-[9.5px] truncate mt-0.5 ${
                        isSelected ? 'text-blue-200' : 'text-slate-500 group-hover:text-slate-200'
                      }`}
                    >
                      {item.description}
                    </div>
                  </div>

                  {isSelected && <span className="text-yellow-300 font-bold shrink-0">✔</span>}
                </div>
              );
            })}
          </div>

          <div className="pt-1 mt-1 border-t border-[#808080] text-[9.5px] text-slate-700 text-right pr-1">
            Novos conceitos podem ser adicionados no hub.
          </div>
        </div>
      )}
    </div>
  );
};
