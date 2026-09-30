import React from 'react';
import { Sparkles } from 'lucide-react';

export const PrismBottomBar: React.FC = () => {
  return (
    <footer className="w-full pt-4 pb-12">
      <div className="w-full max-w-6xl mx-auto px-6 py-4 rounded-3xl apple-liquid-card-light flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 transform-gpu">
        {/* Left: Design Tokens Spec */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
          <span className="flex items-center gap-1.5 text-slate-700 font-semibold font-sans">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Apple Liquid Glass Spec:</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-md apple-liquid-chip text-slate-600 shadow-2xs">
            Transmission: 0.94
          </span>
          <span className="px-2.5 py-0.5 rounded-md apple-liquid-chip text-slate-600 shadow-2xs">
            IOR: 1.54 (Crown Glass)
          </span>
          <span className="hidden md:inline px-2.5 py-0.5 rounded-md apple-liquid-chip text-slate-600 shadow-2xs">
            Abbe: 58.6
          </span>
        </div>

        {/* Right: Copyright */}
        <div className="flex items-center gap-2 text-slate-600 font-medium">
          <span>© {new Date().getFullYear()} João Vinícius Guerber</span>
          <span>·</span>
          <span>Senior Software Engineer</span>
        </div>
      </div>
    </footer>
  );
};
