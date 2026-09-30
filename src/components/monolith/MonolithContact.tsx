import React, { useState } from 'react';
import { Send, Check, Copy } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';
import { MonolithPanel } from './MonolithPanel';
import { playIndustrialClick, playLaserHum } from './monolithAudio';

export const MonolithContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderMsg, setSenderMsg] = useState('');

  const email = 'joaoviniciusgs@gmail.com';

  const handleCopyEmail = () => {
    playIndustrialClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    playLaserHum();
    const subject = encodeURIComponent(`[CONTATO PORTFÓLIO MONOLITH] Mensagem de ${senderName || 'Parceiro'}`);
    const body = encodeURIComponent(`${senderMsg}\n\n-- Enviado via Monolith Terminal`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="monolith-contact" className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-l-4 border-[#ff9900] bg-[#14161a] p-3 mb-6 font-mono text-[11px] text-slate-300 border border-[#383b44]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-[#ff9900]">/// 05 // TERMINAL DE TRANSMISSÃO & CONTATO</span>
          <span className="text-[#8e95a5]">::</span>
          <span className="text-slate-200 tracking-wider">
            CANAL CRIPTOGRAFADO DIRETO COM JOÃO VINÍCIUS
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#22c55e] font-semibold text-[10px]">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
          <span>SINAL ATIVO // RESPOSTA EM 24H</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Direct Links & Dossier (lg:col-span-5) */}
        <MonolithPanel withRivets className="lg:col-span-5 p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-[10px] font-mono font-bold text-[#ffaa00] tracking-widest uppercase">
              // TRANSMISSION_CHANNELS
            </div>

            <h3 className="text-2xl font-black font-['Space_Grotesk'] text-white">
              VAMOS CONSTRUIR ALGO MONUMENTAL JUNTOS.
            </h3>

            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Disponível para posições sênior de engenharia de software (Mobile & Front-end), consultorias estratégicas de arquitetura, otimização de performance e modernização com IA.
            </p>

            {/* Direct Email Copy Box */}
            <div className="p-3.5 bg-[#101318] border border-[#383b44] flex items-center justify-between gap-3">
              <div className="overflow-hidden">
                <div className="text-[9px] font-mono text-[#8e95a5] uppercase">EMAIL OFICIAL:</div>
                <div className="text-xs font-mono text-white font-bold truncate">{email}</div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 bg-[#1b1e24] hover:bg-[#282d36] text-[#00f0ff] border border-[#00f0ff]/40 font-mono text-[10px] font-bold uppercase flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                {copied ? <Check size={12} className="text-[#22c55e]" /> : <Copy size={12} />}
                <span>{copied ? 'COPIADO' : 'COPIAR'}</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/joaoguebrer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playIndustrialClick}
                className="p-3 bg-[#121418] hover:bg-[#1a1d22] border border-[#383b44] hover:border-[#00f0ff] group transition-all flex items-center gap-2.5"
              >
                <LinkedinIcon className="w-4 h-4 text-[#00f0ff]" />
                <div>
                  <div className="text-[9px] font-mono text-[#8e95a5]">LINKEDIN</div>
                  <div className="text-[11px] font-mono font-bold text-white group-hover:text-[#00f0ff]">
                    /in/joaoguebrer
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Guerber"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playIndustrialClick}
                className="p-3 bg-[#121418] hover:bg-[#1a1d22] border border-[#383b44] hover:border-[#22c55e] group transition-all flex items-center gap-2.5"
              >
                <GithubIcon className="w-4 h-4 text-[#22c55e]" />
                <div>
                  <div className="text-[9px] font-mono text-[#8e95a5]">GITHUB</div>
                  <div className="text-[11px] font-mono font-bold text-white group-hover:text-[#22c55e]">
                    /Guerber
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 border-t border-[#262930] pt-3">
            LOCALIZAÇÃO: BRASIL (DISPONÍVEL REMOTO GLOBAL OU HÍBRIDO)
          </div>
        </MonolithPanel>

        {/* Right Column: Interactive Quick Transmission Terminal (lg:col-span-7) */}
        <MonolithPanel withRivets className="lg:col-span-7 p-6">
          <form onSubmit={handleSendMail} className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#383b44] pb-2 text-[10px] font-mono text-slate-400">
              <span className="text-[#00f0ff] font-bold">TERMINAL // DISPATCH_MESSAGE_v4</span>
              <span>PROTOCOL: ENCRYPTED_DIRECT</span>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#8e95a5] font-bold mb-1">
                SEU NOME / EMPRESA:
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="ex.: João da Tech Corp"
                className="w-full bg-[#101318] border border-[#383b44] focus:border-[#ff9900] px-3.5 py-2.5 text-xs font-mono text-white placeholder-slate-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-[#8e95a5] font-bold mb-1">
                MENSAGEM / ESCOPO DO PROJETO:
              </label>
              <textarea
                required
                rows={4}
                value={senderMsg}
                onChange={(e) => setSenderMsg(e.target.value)}
                placeholder="Descreva o desafio técnico, oportunidade ou proposta de colaboração..."
                className="w-full bg-[#101318] border border-[#383b44] focus:border-[#ff9900] px-3.5 py-2.5 text-xs font-mono text-white placeholder-slate-600 outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-mono text-slate-500">
                Pressione o botão para enviar via seu cliente de email padrão.
              </span>

              <button
                type="submit"
                className="px-6 py-3 bg-[#ff9900] hover:bg-[#ffaa22] text-black font-mono font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-[0_4px_16px_rgba(255,153,0,0.3)] hover:shadow-[0_6px_22px_rgba(255,153,0,0.5)] cursor-pointer"
              >
                <span>TRANSMITIR MENSAGEM</span>
                <Send size={13} />
              </button>
            </div>
          </form>
        </MonolithPanel>
      </div>
    </section>
  );
};
