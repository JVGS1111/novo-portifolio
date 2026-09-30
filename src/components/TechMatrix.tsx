import React, { useState } from 'react';
import { Search, CheckCircle, Code2, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { TiltCard } from './motion/TiltCard';

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
        
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-500/10">
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
        </motion.div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
          {/* Category Pills with Sliding Layout Indicator */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`relative px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono font-medium transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'text-slate-950 font-bold'
                  : 'text-slate-300 hover:text-white apple-liquid-pill'
              }`}
            >
              {selectedCategory === 'all' && (
                <motion.div
                  layoutId="activeCategoryPill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute inset-0 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/30"
                />
              )}
              <span className="relative z-10">{t.tech.allAreas}</span>
            </button>

            {t.tech.categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-slate-950 font-bold'
                      : 'text-slate-300 hover:text-white apple-liquid-pill'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/30"
                    />
                  )}
                  <span className="relative z-10">{cat.name.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Focus Ring — Apple Liquid Glass Pill */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.tech.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full apple-liquid-pill text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Categories Grid with Layout Animation & TiltCards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredCategories.map((cat) => cat && (
              <motion.div
                layout
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={6}
                  spotlightColor="rgba(56, 189, 248, 0.15)"
                  className="rounded-3xl h-full"
                >
                  <div className="p-6 sm:p-8 rounded-3xl apple-liquid-glass border border-white/15 backdrop-blur-2xl shadow-2xl hover:border-cyan-400/40 transition-all flex flex-col justify-between h-full relative overflow-hidden">
                    {/* Top specular reflection glint */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                          <Code2 className="w-5 h-5 text-cyan-400" />
                          {cat.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {cat.skills.length} {t.tech.toolsCountSuffix}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Skill Pills with Spring Pop */}
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full apple-liquid-pill border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-200 cursor-default shadow-xs"
                          >
                            <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full bg-white/10 text-slate-400 group-hover:bg-cyan-950 group-hover:text-cyan-400">
                              {skill.tag}
                            </span>
                          </motion.div>
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
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
