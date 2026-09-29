import React, { useState, useRef, useEffect } from 'react';
import { personalInfo, impactMetrics, skillCategories } from '../../../data/portfolioData';
import { playClickSound } from '../soundEffects';

interface CommandOutput {
  id: number;
  command: string;
  output: React.ReactNode;
}

export const DosPromptApp: React.FC<{ onNavigateModern?: () => void }> = ({ onNavigateModern }) => {
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
          <div>Comandos disponíveis no Guerber MS-DOS:</div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">help</span> : Lista todos os comandos
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">bio</span> : Perfil e resumo do engenheiro
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">metrics</span> : Métricas reais de impacto de produção
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">skills</span> : Matriz completa de tecnologias
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">contact</span> : E-mail, LinkedIn e GitHub
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">modern</span> : Alternar para o Portfólio Moderno
          </div>
          <div className="text-emerald-400">
            • <span className="font-bold text-white">cls</span> : Limpar a tela
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
            <div>Comandos: bio, metrics, skills, cases, contact, modern, cls, easteregg, ver</div>
          </div>
        );
        break;

      case 'ver':
        resultNode = 'Microsoft(R) Windows 98 [Version 4.10.2222 A] (C) Guerber 2026';
        break;

      case 'bio':
        resultNode = (
          <div className="text-slate-200 space-y-1">
            <div className="font-bold text-emerald-400">{personalInfo.fullName}</div>
            <div>{personalInfo.title} — {personalInfo.subtitle}</div>
            <div className="text-slate-400">{personalInfo.bio}</div>
            <div className="text-amber-300 font-bold">Status: {personalInfo.status}</div>
          </div>
        );
        break;

      case 'metrics':
        resultNode = (
          <div className="space-y-1.5 text-slate-200">
            <div className="text-amber-300 font-bold">MÉTRICAS AUDITADAS EM PRODUÇÃO (banQi / Casas Bahia):</div>
            {impactMetrics.map((m) => (
              <div key={m.id} className="text-xs">
                <span className="font-bold text-emerald-400">{m.metric}</span> {m.label} ({m.sublabel})
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-2 text-slate-200">
            {skillCategories.map((c) => (
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
        resultNode = 'Carregando interface moderna... Redirecionando!';
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
  Senior Front-end & Mobile Specialist | 5 Years
`}
          </pre>
        );
        break;

      default:
        resultNode = `Comando '${trimmed}' não reconhecido. Digite 'help' para a lista de comandos.`;
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
        <span className="text-slate-500">Atalhos rápidos:</span>
        {['bio', 'metrics', 'skills', 'contact', 'modern', 'cls'].map((cmd) => (
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
          placeholder="Digite um comando..."
        />
      </form>
    </div>
  );
};
