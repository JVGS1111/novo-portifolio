import React, { useState } from 'react';
import { personalInfo } from '../../../data/portfolioData';
import { playClickSound } from '../soundEffects';
import { useLanguage } from '../../../i18n/LanguageContext';

export const ProfileApp: React.FC = () => {
  const { t, language } = useLanguage();
  const isPt = language === 'pt';
  const [activeTab, setActiveTab] = useState<'bio' | 'exp' | 'skills' | 'certs'>('bio');

  const tabs: { id: 'bio' | 'exp' | 'skills' | 'certs'; label: string }[] = [
    { id: 'bio', label: isPt ? 'Visão Geral & Bio' : 'Overview & Bio' },
    { id: 'exp', label: isPt ? 'Carreira & XP' : 'Career & Experience' },
    { id: 'skills', label: 'Tech Matrix' },
    { id: 'certs', label: isPt ? 'Certificados & Idiomas' : 'Certs & Languages' }
  ];

  const bioText = isPt
    ? personalInfo.bio
    : 'Senior Software Engineer specializing in modernizing high-impact, hyper-scale mobile and web applications. Strong focus on clean architecture, native Kotlin/Swift modules, extreme runtime stability, eliminating critical technical debt, and driving velocity with intelligent AI tooling.';

  const statusText = isPt
    ? personalInfo.status
    : 'Available for high-impact engineering projects & roles';

  return (
    <div className="p-3 text-[11px] font-['Tahoma',sans-serif] text-black h-full flex flex-col">
      {/* Windows 98 Tab Controls */}
      <div className="flex items-center gap-[2px] flex-wrap gap-y-1 border-b border-[#808080] mb-3">
        {tabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                playClickSound();
                setActiveTab(tab.id);
              }}
              className={`px-3 py-1 text-[11px] font-medium border-t-2 border-l-2 border-r-2 rounded-t-sm cursor-pointer select-none transition-all ${
                isSelected
                  ? 'bg-[#DFDFDF] border-t-white border-l-white border-r-black font-bold -mb-[1px] pb-1.5'
                  : 'bg-[#C0C0C0] border-t-white border-l-white border-r-[#808080] hover:bg-[#D4D0C8]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Box (Sunken Bevel) */}
      <div className="flex-1 overflow-auto bg-white border-t border-l border-[#808080] border-r border-b border-white p-3.5 shadow-inner">
        {/* TAB 1: VISÃO GERAL & BIO */}
        {activeTab === 'bio' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start gap-4 pb-3 border-b border-slate-200">
              {/* Retro Pixel Avatar Box */}
              <div className="w-20 h-20 shrink-0 bg-[#008080] border-2 border-t-white border-l-white border-r-black border-b-black flex flex-col items-center justify-center text-white shadow">
                <span className="text-xl font-bold font-mono tracking-tight">JVGS</span>
                <span className="text-[9px] uppercase tracking-wider font-mono">v6.0</span>
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h1 className="text-base font-bold text-[#000080] leading-none">
                    {personalInfo.fullName}
                  </h1>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-400 rounded-xs">
                    ● {statusText}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-800">
                  {personalInfo.title} — <span className="text-blue-800">{personalInfo.subtitle}</span>
                </div>
                <div className="text-[10px] text-slate-600">
                  {isPt ? 'Experiência:' : 'Experience:'} <span className="font-bold text-black">{isPt ? '6 anos' : '6 Years'}</span> | {isPt ? 'Localização:' : 'Location:'} <span className="font-bold text-black">{isPt ? 'Brasil (Remoto)' : 'Brazil (Remote)'}</span>
                </div>
              </div>
            </div>

            {/* Executive Bio Box */}
            <div className="p-2.5 bg-[#F4F4F4] border border-[#808080] rounded-xs space-y-1">
              <span className="font-bold text-[#000080] uppercase text-[10px] block">
                {isPt ? 'Perfil de Engenharia & Especialidade:' : 'Engineering Profile & Focus Area:'}
              </span>
              <p className="text-slate-800 leading-relaxed">
                {bioText}
              </p>
            </div>

            {/* Communication & Social Contacts (Sunken Table) */}
            <div className="border border-[#808080] rounded-xs overflow-hidden">
              <div className="bg-[#C0C0C0] px-2 py-1 font-bold text-[10px] border-b border-[#808080]">
                {isPt ? 'CANAIS DE CONTATO, CERTIFICAÇÕES & FORMAÇÃO' : 'CONTACT CHANNELS, CERTIFICATIONS & EDUCATION'}
              </div>
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-slate-200 hover:bg-blue-50">
                    <td className="px-2 py-1 font-bold text-slate-700 w-32">📧 E-mail:</td>
                    <td className="px-2 py-1">
                      <a href={`mailto:${personalInfo.email}`} className="text-blue-700 underline font-mono">
                        {personalInfo.email}
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-blue-50">
                    <td className="px-2 py-1 font-bold text-slate-700">🔗 LinkedIn:</td>
                    <td className="px-2 py-1">
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-mono">
                        {personalInfo.linkedin}
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-blue-50">
                    <td className="px-2 py-1 font-bold text-slate-700">🐙 GitHub:</td>
                    <td className="px-2 py-1">
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-mono">
                        {personalInfo.github}
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-blue-50">
                    <td className="px-2 py-1 font-bold text-slate-700">☁️ {isPt ? 'Certificação AWS:' : 'AWS Certification:'}</td>
                    <td className="px-2 py-1 text-amber-900 font-bold">
                      AWS Certified Solutions Architect – Associate ({isPt ? 'Em andamento – Previsão Q4 2026' : 'In progress – Expected Q4 2026'})
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-blue-50">
                    <td className="px-2 py-1 font-bold text-slate-700">🛡️ {isPt ? 'Certificação GitHub:' : 'GitHub Certification:'}</td>
                    <td className="px-2 py-1 text-purple-900 font-bold">
                      GitHub Copilot Certified (Official 2025–2028)
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-2 py-1 font-bold text-slate-700">🎓 {isPt ? 'Formação Acadêmica:' : 'Higher Education:'}</td>
                    <td className="px-2 py-1 text-slate-900 font-semibold">
                      {isPt ? 'Tecnólogo em Análise e Desenvolvimento de Sistemas (Uninter, 2019–2021)' : 'Systems Analysis and Development Degree (Uninter, 2019–2021)'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: CARREIRA & XP */}
        {activeTab === 'exp' && (
          <div className="space-y-3">
            <div className="font-bold text-[#000080] text-xs pb-1 border-b border-slate-300">
              {isPt ? 'HISTÓRICO PROFISSIONAL EM PRODUÇÃO (2020 – PRESENTE)' : 'PRODUCTION CAREER TIMELINE (2020 – PRESENT)'}
            </div>
            {t.experience.items.map((exp) => (
              <div key={exp.id} className="p-2.5 bg-[#FAFAFA] border border-[#808080] rounded-xs space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-bold text-slate-900 text-xs">{exp.role}</span>
                  <span className="text-[10px] font-mono bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded border border-blue-300">
                    {exp.period}
                  </span>
                </div>
                <div className="text-[10.5px] font-semibold text-blue-800">
                  {exp.company} {exp.client && `• ${isPt ? 'Cliente:' : 'Client:'} ${exp.client}`}
                </div>
                <p className="text-slate-700 italic text-[10px]">
                  {exp.summary}
                </p>
                <div className="space-y-0.5 pt-1">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[10px] text-slate-800">
                      <span className="text-blue-600 font-bold shrink-0">►</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 pt-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-1.5 py-0.2 bg-[#E2E8F0] text-slate-800 text-[9px] font-mono rounded-xs border border-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: TECH MATRIX */}
        {activeTab === 'skills' && (
          <div className="space-y-3">
            <div className="font-bold text-[#000080] text-xs pb-1 border-b border-slate-300">
              {isPt ? 'MATRIZ DE COMPETÊNCIAS TÉCNICAS & ARQUITETURA' : 'TECHNICAL SKILLS MATRIX & ARCHITECTURE'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.tech.categories.map((cat) => (
                <div key={cat.id} className="p-2 bg-[#F8FAFC] border border-[#808080] rounded-xs space-y-1.5">
                  <div className="font-bold text-xs text-[#000080] border-b border-slate-200 pb-0.5">
                    {cat.name}
                  </div>
                  <p className="text-[9.5px] text-slate-600">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-1.5 py-0.5 bg-white text-slate-900 text-[9.5px] font-mono rounded-xs border border-slate-300 flex items-center gap-1 shadow-2xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {skill.name}
                        <span className="text-[8px] text-slate-500 font-sans">({skill.tag})</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CERTIFICADOS & IDIOMAS */}
        {activeTab === 'certs' && (
          <div className="space-y-4">
            <div>
              <div className="font-bold text-[#000080] text-xs pb-1 border-b border-slate-300 mb-2">
                {isPt ? 'CERTIFICAÇÕES OFICIAIS & FORMAÇÃO ACADÊMICA' : 'OFFICIAL CERTIFICATIONS & EDUCATION'}
              </div>
              <div className="space-y-2">
                {t.educationSection.educationItems.map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-[#FAFAFA] border border-[#808080] rounded-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-purple-900">{item.title}</span>
                      <span className="text-[10px] font-mono bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded border border-purple-300">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-[10.5px] font-semibold text-slate-700">
                      {item.institution} • <span className="text-amber-700 font-bold">{item.badge}</span>
                    </div>
                    <p className="text-[10px] text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-bold text-[#000080] text-xs pb-1 border-b border-slate-300 mb-2">
                {isPt ? 'PROFICIÊNCIA LINGUÍSTICA' : 'LANGUAGE PROFICIENCY'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {t.educationSection.languagesList.map((lang, idx) => (
                  <div key={idx} className="p-2 bg-[#F8FAFC] border border-[#808080] rounded-xs">
                    <div className="font-bold text-xs text-blue-900">{lang.name}</div>
                    <div className="text-[10px] font-bold text-emerald-700">{lang.level}</div>
                    <p className="text-[9.5px] text-slate-600 mt-0.5">{lang.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
