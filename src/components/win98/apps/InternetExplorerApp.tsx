import React, { useState } from 'react';
import { personalInfo } from '../../../data/portfolioData';
import { playClickSound } from '../soundEffects';
import { useLanguage } from '../../../i18n/LanguageContext';

export const InternetExplorerApp: React.FC = () => {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const [url, setUrl] = useState('https://github.com/Guerber');

  return (
    <div className="flex flex-col h-full bg-[#DFDFDF] font-['Tahoma',sans-serif] text-[11px] text-black">
      {/* IE 5 Toolbar */}
      <div className="flex items-center gap-2 p-1 bg-[#C0C0C0] border-b border-[#808080]">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={playClickSound}
            className="px-2 py-0.5 bg-[#C0C0C0] border border-t-white border-l-white border-r-black border-b-black hover:bg-slate-200 cursor-pointer"
          >
            {isPt ? '◀ Voltar' : '◀ Back'}
          </button>
          <button
            type="button"
            onClick={playClickSound}
            className="px-2 py-0.5 bg-[#C0C0C0] border border-t-white border-l-white border-r-black border-b-black hover:bg-slate-200 cursor-pointer"
          >
            {isPt ? '▶ Avançar' : '▶ Forward'}
          </button>
          <button
            type="button"
            onClick={playClickSound}
            className="px-2 py-0.5 bg-[#C0C0C0] border border-t-white border-l-white border-r-black border-b-black hover:bg-slate-200 cursor-pointer"
          >
            {isPt ? '🏠 Início' : '🏠 Home'}
          </button>
        </div>

        {/* Address Input */}
        <div className="flex-1 flex items-center gap-1">
          <span className="font-bold text-[10px] text-slate-700">{isPt ? 'Endereço:' : 'Address:'}</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-white border border-[#808080] px-2 py-0.5 text-[11px] font-mono outline-none"
          />
        </div>
      </div>

      {/* Browser Webpage Content */}
      <div className="flex-1 bg-white p-4 overflow-y-auto space-y-4">
        <div className="p-4 bg-slate-900 text-white rounded border border-slate-700 shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-cyan-400">Guerber Network Services</h2>
            <span className="text-xs font-mono text-emerald-400">● 100% ONLINE</span>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            {isPt
              ? 'Conectividade direta aos repositórios e redes profissionais de João Vinícius Guerber.'
              : 'Direct connectivity to repositories and professional engineering networks of João Vinícius Guerber.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-300 rounded block transition-all group"
          >
            <div className="font-bold text-xs text-slate-900 group-hover:text-blue-700 flex items-center justify-between">
              <span>🐙 GitHub Profile</span>
              <span>↗</span>
            </div>
            <p className="text-[10px] text-slate-600 mt-1 font-mono">
              github.com/Guerber
            </p>
            <span className="text-[9px] text-blue-600 underline mt-2 block">
              {isPt ? 'Acessar repositórios, commits e projetos open-source' : 'Explore repositories, commits, and open-source packages'}
            </span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-300 rounded block transition-all group"
          >
            <div className="font-bold text-xs text-slate-900 group-hover:text-blue-700 flex items-center justify-between">
              <span>🔗 LinkedIn Profile</span>
              <span>↗</span>
            </div>
            <p className="text-[10px] text-slate-600 mt-1 font-mono">
              linkedin.com/in/joaoguebrer
            </p>
            <span className="text-[9px] text-blue-600 underline mt-2 block">
              {isPt ? 'Conectar profissionalmente e acompanhar publicações' : 'Connect professionally and follow engineering publications'}
            </span>
          </a>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900 text-xs">
          <span className="font-bold">{isPt ? 'Dica:' : 'Tip:'}</span>{' '}
          {isPt
            ? 'Para contatar João Vinícius Guerber diretamente para posições e projetos de alto impacto, envie um e-mail para '
            : 'To contact João Vinícius Guerber directly regarding senior engineering positions and high-impact projects, send an email to '}
          <a href={`mailto:${personalInfo.email}`} className="font-bold underline text-blue-800">
            {personalInfo.email}
          </a>.
        </div>
      </div>
    </div>
  );
};
