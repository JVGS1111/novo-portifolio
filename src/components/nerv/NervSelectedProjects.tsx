import React from 'react';
import type { NervContent, NervProjectItem } from './nervTranslations';

interface NervSelectedProjectsProps {
  content: NervContent;
  onSelectProject: (project: NervProjectItem) => void;
}

export const NervSelectedProjects: React.FC<NervSelectedProjectsProps> = ({
  content,
  onSelectProject
}) => {
  const { selectedProjects } = content;

  return (
    <div className="w-full bg-[#080A0E]/95 border-t border-[#2C323E] font-mono select-none z-20">
      {/* Header bar */}
      <div className="px-4 py-1.5 bg-[#0D1017] border-b border-[#1E232F] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FF1801] inline-block" />
          <span className="font-bold tracking-widest text-zinc-200">
            {selectedProjects.sectionTitle}
          </span>
          <span className="text-[10px] text-zinc-500 font-serif">
            {selectedProjects.sectionKanji}
          </span>
        </div>
        <span className="text-[10px] text-red-500/80 uppercase tracking-widest hidden sm:inline">
          DISPATCH PROTOCOL // CLICK TO INSPECT
        </span>
      </div>

      {/* 3 Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1E232F]">
        {selectedProjects.items.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="p-3 sm:p-4 hover:bg-black/60 transition-all cursor-pointer group relative flex flex-col justify-between"
          >
            {/* Top red accent marker on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#FF1801] transition-colors" />

            <div>
              {/* Header: Number, Title, Subtitle, and Arrow */}
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-start gap-2.5">
                  <span className="text-xl sm:text-2xl font-black text-[#FF1801] leading-none shrink-0 font-mono">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-white transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="text-[10px] text-zinc-400 font-medium">
                      {project.organization}
                    </div>
                  </div>
                </div>

                <span className="text-zinc-500 group-hover:text-[#FF1801] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm shrink-0">
                  ↗
                </span>
              </div>

              {/* Tagline / Brief Description */}
              <p className="text-[11px] text-zinc-300 leading-relaxed mb-3 line-clamp-2">
                {project.tagline}
              </p>
            </div>

            {/* Badges and quick metric */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-800/80">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9.5px] px-1.5 py-0.5 bg-black/60 border border-zinc-700/80 text-zinc-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.metrics && project.metrics[0] && (
                <span className="text-[9.5px] font-bold text-emerald-400 shrink-0">
                  {project.metrics[0].value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
