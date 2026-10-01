import React, { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../../../data/portfolioData';
import { playClickSound } from '../soundEffects';
import { useLanguage } from '../../../i18n/LanguageContext';

interface CommandOutput {
  id: number;
  command: string;
  output: React.ReactNode;
}

export const DosPromptApp: React.FC<{ onNavigateModern?: () => void }> = ({ onNavigateModern }) => {
  const { t, language } = useLanguage();
  const isPt = language === 'pt';

  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 0,
      command: 'ver',
      output: 'Microsoft Windows 98 [Version 4.10.2222 A] — Guerber Edition'
    },
    {
      id: 1,
      command: 'help',
      output: (
        <div className="space-y-1">
          <div>{isPt ? 'Comandos disponíveis no Guerber MS-DOS:' : 'Available commands in Guerber MS-DOS:'}</div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">help</span> : {isPt ? 'Lista todos os comandos' : 'List all commands'}
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">bio</span> : {isPt ? 'Perfil e resumo do engenheiro' : 'Engineer profile and summary'}
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">metrics</span> : {isPt ? 'Métricas reais de impacto de produção' : 'Audited production impact metrics'}
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">cases</span> : {isPt ? 'Cases de engenharia de hiperescala' : 'Hyper-scale engineering cases'}
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">skills</span> : {isPt ? 'Matriz completa de tecnologias' : 'Comprehensive skills matrix'}
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">contact</span> : {isPt ? 'E-mail, LinkedIn e GitHub' : 'Direct Email, LinkedIn and GitHub'}
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">modern</span> : {isPt ? 'Alternar para o Portfólio Moderno' : 'Switch to Modern 3D Portfolio'}
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">cls</span> : {isPt ? 'Limpar a tela' : 'Clear screen'}
          </div>
        </div>
      )
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    playClickSound();

    let resultNode: React.ReactNode = null;

    switch (trimmed) {
      case 'cls':
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'help':
        resultNode = (
          <div className="space-y-1 text-slate-300">
            <div>Commands: bio, metrics, skills, cases, contact, modern, cls, easteregg, ver</div>
          </div>
        );
        break;

      case 'ver':
        resultNode = 'Microsoft(R) Windows 98 [Version 4.10.2222 A] (C) Guerber 2026';
        break;

      case 'bio':
        resultNode = (
          <div className="text-slate-200 space-y-1">
            <div className="font-bold text-emerald-400">{personalInfo.fullName} (JVGS)</div>
            <div>{personalInfo.title} — {personalInfo.subtitle}</div>
            <div className="text-slate-400 text-xs">
              {isPt ? 'Experiência:' : 'Experience:'} <span className="text-white font-bold">{isPt ? '6 anos' : '6 Years'}</span> | {isPt ? 'Localização: Brasil (Remoto)' : 'Location: Brazil (Remote)'}
            </div>
            <div className="text-slate-400 text-[10.5px]">
              {isPt
                ? personalInfo.bio
                : 'Senior Software Engineer specializing in modernizing hyper-scale mobile/web applications, clean architecture, native Kotlin/Swift modules, extreme runtime stability, and automated AI dev workflows.'}
            </div>
            <div className="text-emerald-300 text-xs space-y-0.5 pt-1">
              <div>☁️ AWS Certified Solutions Architect – Associate ({isPt ? 'Em andamento – Previsão Q4 2026' : 'In progress – Expected Q4 2026'})</div>
              <div>🛡️ GitHub Copilot Certified (2025–2028)</div>
              <div>🎓 {isPt ? 'Tecnólogo em Análise e Desenvolvimento de Sistemas (Uninter, 2019–2021)' : 'Systems Analysis and Development Degree (Uninter, 2019–2021)'}</div>
            </div>
            <div className="text-amber-300 font-bold pt-1">
              Status: {isPt ? personalInfo.status : 'Available for high-impact opportunities'}
            </div>
          </div>
        );
        break;

      case 'metrics':
        resultNode = (
          <div className="space-y-1.5 text-slate-200">
            <div className="text-amber-300 font-bold">
              {isPt ? 'MÉTRICAS AUDITADAS EM PRODUÇÃO (banQi / Casas Bahia):' : 'AUDITED PRODUCTION METRICS (banQi / Casas Bahia Group):'}
            </div>
            {t.impact.metrics.map((m) => (
              <div key={m.id} className="text-xs">
                <span className="font-bold text-emerald-400">{m.metric}</span> {m.label} ({m.sublabel})
              </div>
            ))}
          </div>
        );
        break;

      case 'cases':
        resultNode = (
          <div className="space-y-2 text-slate-200">
            <div className="text-amber-300 font-bold">
              {isPt ? 'CASES DE ENGENHARIA DE HIPERESCALA:' : 'HYPER-SCALE ENGINEERING CASE STUDIES:'}
            </div>
            {t.cases.studies.map((c) => (
              <div key={c.id} className="text-xs space-y-0.5 border-b border-[#0e3a16] pb-1.5">
                <div className="font-bold text-emerald-400">
                  ► {c.title} <span className="text-slate-400 font-normal">[{c.clientOrProject}]</span>
                </div>
                <div className="text-slate-300 text-[10px]">{c.summary}</div>
                <div className="text-emerald-300 text-[9.5px]">
                  {c.results.slice(0, 2).map((r, i) => (
                    <div key={i}>✔ {r}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-2 text-slate-200">
            {t.tech.categories.map((c) => (
              <div key={c.id}>
                <div className="font-bold text-emerald-400">[{c.name.toUpperCase()}]:</div>
                <div className="text-slate-300 text-xs">
                  {c.skills.map((s) => `${s.name} (${s.tag})`).join(', ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-1 text-slate-200">
            <div>📧 Email: {personalInfo.email}</div>
            <div>🔗 LinkedIn: {personalInfo.linkedin}</div>
            <div>🐙 GitHub: {personalInfo.github}</div>
          </div>
        );
        break;

      case 'modern':
        resultNode = isPt
          ? 'Carregando interface moderna... Redirecionando!'
          : 'Loading Modern 3D interface... Redirecting!';
        if (onNavigateModern) {
          setTimeout(onNavigateModern, 300);
        }
        break;

      case 'easteregg':
        resultNode = (
          <pre className="text-emerald-400 text-[9px] font-mono leading-tight">
{`
   _____ _    _ ______ _____  ____  ______ _____  
  / ____| |  | |  ____|  __ \\|  _ \\|  ____|  __ \\ 
 | |  __| |  | | |__  | |__) | |_) | |__  | |__) |
 | | |_ | |  | |  __| |  _  /|  _ <|  __| |  _  / 
 | |__| | |__| | |____| | \\ \\| |_) | |____| | \\ \\ 
  \\_____|\\____/|______|_|  \\_\\____/|______|_|  \\_\\
  Senior Front-end & Mobile Specialist | 6 Years
`}
          </pre>
        );
        break;

      default:
        resultNode = isPt
          ? `Comando '${trimmed}' não reconhecido. Digite 'help' para a lista de comandos.`
          : `Command '${trimmed}' not recognized. Type 'help' for the list of commands.`;
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        command: cmd,
        output: resultNode
      }
    ]);
    setInputVal('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="bg-black text-[#00FF00] font-mono text-[11px] p-3 h-full flex flex-col overflow-hidden">
      {/* Terminal Output Scroll Area */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {history.map((h) => (
          <div key={h.id} className="space-y-1">
            <div className="flex items-center gap-1.5 text-white">
              <span className="text-emerald-400">C:\GUERBER&gt;</span>
              <span>{h.command}</span>
            </div>
            <div className="text-slate-300 pl-2 leading-relaxed">{h.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Suggested Quick Command Badges */}
      <div className="flex flex-wrap items-center gap-1 py-1.5 border-t border-[#0e3a16] text-[10px]">
        <span className="text-slate-500">{isPt ? 'Atalhos rápidos:' : 'Quick shortcuts:'}</span>
        {['bio', 'metrics', 'cases', 'skills', 'contact', 'modern', 'cls'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="px-1.5 py-0.5 bg-[#0e3a16] hover:bg-[#1b6b29] text-emerald-300 rounded border border-emerald-600/40 cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Line */}
      <form onSubmit={onSubmit} className="flex items-center gap-2 pt-1 border-t border-[#0e3a16]">
        <span className="text-emerald-400 font-bold shrink-0">C:\GUERBER&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          autoFocus
          className="flex-1 bg-transparent border-none outline-none text-white font-mono text-[11px]"
          placeholder={isPt ? 'Digite um comando...' : 'Type a command (try help)...'}
        />
      </form>
    </div>
  );
};
