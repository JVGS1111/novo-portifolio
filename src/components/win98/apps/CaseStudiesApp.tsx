import React, { useState } from 'react';
import { playClickSound } from '../soundEffects';
import { useLanguage } from '../../../i18n/LanguageContext';

export const CaseStudiesApp: React.FC = () => {
  const { t, language } = useLanguage();
  const isPt = language === 'pt';
  const studies = t.cases.studies;
  const [selectedCaseId, setSelectedCaseId] = useState<string>(studies[0].id);

  const activeCase = studies.find((c) => c.id === selectedCaseId) || studies[0];

  return (
    <div className="flex flex-col md:flex-row h-full font-['Tahoma',sans-serif] text-black text-[11px] bg-white">
      {/* Left Explorer Tree Pane (Width ~220px) */}
      <div className="w-full md:w-56 shrink-0 bg-[#F4F4F4] border-b md:border-b-0 md:border-r border-[#808080] p-2 overflow-y-auto">
        <div className="font-bold text-[10px] text-slate-600 mb-2 uppercase flex items-center gap-1">
          <span>📁</span>
          <span>{isPt ? 'Projetos & Cases' : 'Projects & Cases'}</span>
        </div>
        <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-1 md:pb-0">
          {studies.map((cs) => {
            const isSel = cs.id === selectedCaseId;
            return (
              <button
                key={cs.id}
                type="button"
                onClick={() => {
                  playClickSound();
                  setSelectedCaseId(cs.id);
                }}
                className={`w-auto md:w-full min-w-[180px] md:min-w-0 text-left p-1.5 rounded-xs flex items-start gap-1.5 cursor-pointer border shrink-0 ${
                  isSel
                    ? 'bg-[#000080] text-white border-[#000080] font-bold'
                    : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100'
                }`}
              >
                <span className="text-sm shrink-0">🚀</span>
                <div className="truncate">
                  <div className="truncate text-[10.5px] leading-tight">{cs.title}</div>
                  <div className={`text-[9px] ${isSel ? 'text-blue-200' : 'text-slate-500'} truncate`}>
                    {cs.clientOrProject}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Content View Pane */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-white">
        {/* Case Header */}
        <div className="border-b border-slate-200 pb-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm font-bold text-[#000080]">{activeCase.title}</h2>
            <span className="px-2 py-0.5 text-[9.5px] font-bold bg-blue-100 text-blue-900 border border-blue-300 rounded-xs">
              {activeCase.badge}
            </span>
          </div>
          <div className="text-[10px] font-semibold text-slate-600">
            {activeCase.clientOrProject}
          </div>
        </div>

        {/* Case Summary */}
        <div className="p-2.5 bg-[#F9FAFB] border border-[#808080] rounded-xs">
          <span className="font-bold text-slate-800 text-[10px] block mb-0.5">
            {isPt ? 'RESUMO EXECUTIVO:' : 'EXECUTIVE SUMMARY:'}
          </span>
          <p className="text-slate-700 leading-relaxed">{activeCase.summary}</p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="p-2 bg-red-50 border border-red-200 rounded-xs">
            <span className="font-bold text-red-900 text-[10px] block mb-1">
              {isPt ? '🔴 O DESAFIO / PROBLEMA:' : '🔴 THE CHALLENGE / PROBLEM:'}
            </span>
            <p className="text-red-950 text-[10px] leading-relaxed">{activeCase.problem}</p>
          </div>
          <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-xs">
            <span className="font-bold text-emerald-900 text-[10px] block mb-1">
              {isPt ? '🟢 A SOLUÇÃO TÉCNICA:' : '🟢 TECHNICAL SOLUTION:'}
            </span>
            <p className="text-emerald-950 text-[10px] leading-relaxed">{activeCase.solution}</p>
          </div>
        </div>

        {/* Results List */}
        <div className="p-2.5 bg-blue-50/50 border border-blue-200 rounded-xs">
          <span className="font-bold text-[#000080] text-[10px] block mb-1.5">
            {isPt ? 'RESULTADOS COMPROVADOS EM PRODUÇÃO:' : 'PRODUCTION PROVEN RESULTS:'}
          </span>
          <div className="space-y-1">
            {activeCase.results.map((res, i) => (
              <div key={i} className="flex items-start gap-1.5 text-[10px] text-slate-900">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <span className="font-bold text-slate-700 text-[10px] block mb-1">
            {isPt ? 'TECNOLOGIAS EMPREGADAS:' : 'TECHNOLOGIES EMPLOYED:'}
          </span>
          <div className="flex flex-wrap gap-1">
            {activeCase.technologies.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-[#E2E8F0] text-slate-900 text-[9.5px] font-mono border border-slate-300 rounded-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
