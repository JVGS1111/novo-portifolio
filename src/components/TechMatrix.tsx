import React, { useState } from 'react';
import { Search, CheckCircle, Code2, Terminal } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const TechMatrix: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = t.tech.categories.map((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }
    const filteredSkills = cat.skills.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSkills.length === 0 && searchQuery) return null;
    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>{t.tech.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t.tech.title}
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            {t.tech.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {t.tech.allAreas}
            </button>
            {t.tech.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat.name.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.tech.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => cat && (
            <div
              key={cat.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    {cat.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">
                    {cat.skills.length} {t.tech.toolsCountSuffix}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-200 cursor-default"
                    >
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:bg-cyan-950 group-hover:text-cyan-400">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{t.tech.enterpriseBadge}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> {t.tech.activeStatus}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
