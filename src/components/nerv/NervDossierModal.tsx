import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, ShieldCheck } from 'lucide-react';
import type { NervContent, NervProjectItem } from './nervTranslations';

interface NervDossierModalProps {
  content: NervContent;
  selectedProject: NervProjectItem | null;
  onCloseProject: () => void;
  activeSection: string;
  onCloseSection: () => void;
}

export const NervDossierModal: React.FC<NervDossierModalProps> = ({
  content,
  selectedProject,
  onCloseProject,
  activeSection,
  onCloseSection
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.contact.emailValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const isModalOpen = selectedProject !== null || (activeSection !== 'home' && activeSection !== '');

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md font-mono select-none">
        {/* Modal Window Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-3xl max-h-[90vh] bg-[#0A0C10] border-2 border-[#FF1801] shadow-[0_0_50px_rgba(255,24,1,0.35)] flex flex-col overflow-hidden text-left relative"
        >
          {/* Top Warning Stripes */}
          <div
            className="h-2 w-full shrink-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #FF1801, #FF1801 10px, #000 10px, #000 20px)'
            }}
          />

          {/* Header Bar */}
          <div className="bg-[#140808] px-4 py-2.5 border-b border-red-600/60 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1801] animate-ping" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF1801] uppercase">
                NERV // TACTICAL DOSSIER // 極秘
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                if (selectedProject) onCloseProject();
                else onCloseSection();
              }}
              className="p-1 hover:bg-red-600/30 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-zinc-800"
              title="Close Dossier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content Body - Scrollable */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-zinc-200 flex-1">
            {/* 1. PROJECT DOSSIER VIEW */}
            {selectedProject && (
              <div className="space-y-5">
                <div className="border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2 text-[10px] text-red-400 font-bold mb-1 uppercase tracking-wider">
                    <span>SECTOR: {selectedProject.number}</span>
                    <span>•</span>
                    <span>{selectedProject.threatLevel || 'TACTICAL DEPLOYMENT'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                    {selectedProject.title}
                  </h2>
                  <div className="text-xs sm:text-sm text-zinc-400 font-medium">
                    {selectedProject.organization} — {selectedProject.tagline}
                  </div>
                </div>

                {/* Metrics Highlight Pods */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-3 bg-black/60 border border-red-600/40"
                      >
                        <div className="text-[10px] text-zinc-400 uppercase tracking-wider">
                          {metric.label}
                        </div>
                        <div className="text-lg sm:text-xl font-black text-emerald-400 font-mono">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Challenge & Solution */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 bg-black/40 border-l-2 border-red-500">
                    <h4 className="text-[11px] font-bold text-red-400 uppercase tracking-wider mb-1">
                      TACTICAL CHALLENGE // 課題
                    </h4>
                    <p className="text-zinc-300 leading-relaxed">
                      {selectedProject.fullDetails.challenge}
                    </p>
                  </div>

                  <div className="p-3.5 bg-black/40 border-l-2 border-amber-500">
                    <h4 className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                      ENGINEERING SOLUTION // 対策
                    </h4>
                    <p className="text-zinc-300 leading-relaxed">
                      {selectedProject.fullDetails.solution}
                    </p>
                  </div>

                  <div className="p-3.5 bg-black/40 border-l-2 border-emerald-500">
                    <h4 className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                      OPERATIONAL IMPACT // 成果
                    </h4>
                    <p className="text-zinc-300 leading-relaxed">
                      {selectedProject.fullDetails.impact}
                    </p>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                    DEPLOYED ARCHITECTURE NODES // システム構成
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProject.fullDetails.architecture.map((node, i) => (
                      <div
                        key={i}
                        className="p-2 bg-black/50 border border-zinc-800 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#FF1801] shrink-0" />
                        <span className="text-zinc-300">{node}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-red-950/40 border border-red-700/60 text-red-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 2. EXPERIENCE SECTION */}
            {!selectedProject && activeSection === 'experience' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide mb-1">
                    {content.experience.sectionTitle}
                  </h2>
                  <p className="text-xs text-zinc-400">
                    {content.experience.sectionKanji} — CLASSIFIED SERVICE TIMELINE
                  </p>
                </div>

                <div className="space-y-4">
                  {content.experience.records.map((record, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-black/60 border border-zinc-800 hover:border-red-600/50 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-[#FF1801]">{record.period}</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-red-950/60 text-red-300 border border-red-800 font-mono">
                          {record.clearance}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-0.5">{record.role}</h3>
                      <div className="text-xs text-zinc-400 mb-3">
                        {record.company} • {record.location}
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                        {record.description}
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-400 border-t border-zinc-800 pt-2.5">
                        {record.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-500 shrink-0">►</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. SKILLS SECTION */}
            {!selectedProject && activeSection === 'skills' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide mb-1">
                    {content.skills.sectionTitle}
                  </h2>
                  <p className="text-xs text-zinc-400">
                    {content.skills.sectionKanji} — SYNAPTIC PROFICIENCY AUDIT
                  </p>
                </div>

                <div className="space-y-5">
                  {content.skills.categories.map((cat, idx) => (
                    <div key={idx} className="p-4 bg-black/60 border border-zinc-800">
                      <div className="flex items-center justify-between mb-3 border-b border-zinc-800 pb-2">
                        <span className="text-xs font-bold text-[#FF1801] tracking-wider">
                          {cat.category}
                        </span>
                        <span className="text-xs text-zinc-500">{cat.kanji}</span>
                      </div>

                      <div className="space-y-2.5">
                        {cat.skills.map((skill) => (
                          <div key={skill.name} className="text-xs">
                            <div className="flex justify-between text-zinc-300 mb-1">
                              <span className="font-semibold">{skill.name}</span>
                              <span className="text-zinc-500 font-mono">{skill.tag}</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-900 overflow-hidden border border-zinc-800">
                              <div
                                className="h-full bg-red-600 shadow-[0_0_8px_#FF1801]"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. ABOUT SECTION */}
            {!selectedProject && activeSection === 'about' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide mb-1">
                    {content.about.sectionTitle}
                  </h2>
                  <p className="text-xs text-zinc-400">
                    {content.about.sectionKanji} — PERSONNEL PROFILE RECORD
                  </p>
                </div>

                <div className="p-4 bg-black/60 border border-zinc-800 space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-xs text-red-400 font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-red-500" />
                    <span>{content.about.pilotClassification}</span>
                  </div>

                  {content.about.dossierText.map((p, i) => (
                    <p key={i} className="text-zinc-300 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  <div className="border-t border-zinc-800 pt-3">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      CORE SPECIALIZATION AREAS // 専門分野
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {content.about.specializations.map((spec, i) => (
                        <li
                          key={i}
                          className="p-2 bg-black/40 border border-zinc-800 flex items-center gap-2"
                        >
                          <span className="text-[#FF1801] font-bold">#</span>
                          <span className="text-zinc-300">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 5. CONTACT SECTION */}
            {!selectedProject && activeSection === 'contact' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide mb-1">
                    {content.contact.sectionTitle}
                  </h2>
                  <p className="text-xs text-zinc-400">
                    {content.contact.sectionKanji} — DIRECT COMM RELAY
                  </p>
                </div>

                <div className="p-4 bg-black/60 border border-red-600/50 space-y-4">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {content.contact.channelStatus}
                    </span>
                    <span className="text-zinc-500">{content.contact.locationValue}</span>
                  </div>

                  {/* Email Box with 1-click copy */}
                  <div className="p-3 bg-black border border-zinc-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase">
                        {content.contact.emailLabel}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white font-mono select-all">
                        {content.contact.emailValue}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 bg-[#FF1801] hover:bg-[#d81501] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-white" />
                          <span>{content.contact.btnCopyEmail}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* External links */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href="https://linkedin.com/in/joaovguerber"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <span>{content.contact.btnLinkedin}</span>
                    </a>
                    <a
                      href="https://github.com/JVGS1111"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <span>{content.contact.btnGithub}</span>
                    </a>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed border-t border-zinc-800 pt-3">
                    {content.contact.directiveNote}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer bar */}
          <div className="px-4 py-2 bg-[#0E1015] border-t border-[#2C323E] flex items-center justify-between text-[10px] text-zinc-500 shrink-0">
            <span>NERV TOKYO-3 ARCHIVE // GEOFRONT</span>
            <button
              type="button"
              onClick={() => {
                if (selectedProject) onCloseProject();
                else onCloseSection();
              }}
              className="text-red-400 hover:text-white uppercase font-bold cursor-pointer"
            >
              [ ESC / CLOSE DOSSIER ]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
