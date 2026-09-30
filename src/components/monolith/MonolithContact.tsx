import React, { useState } from 'react';
import { Send, Check, Copy, Radio } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../SocialIcons';
import { MonolithPanel } from './MonolithPanel';
import { playIndustrialClick, playLaserHum } from './monolithAudio';
import { useLanguage } from '../../i18n';

export const MonolithContact: React.FC = () => {
  const { language } = useLanguage();
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
    const defaultSender = language === 'pt' ? 'Parceiro' : 'Partner';
    const tag = language === 'pt' ? 'CONTATO MONOLITH' : 'MONOLITH CONTACT';
    const subject = encodeURIComponent(`[${tag}] ${language === 'pt' ? 'Mensagem de' : 'Message from'} ${senderName || defaultSender}`);
    const body = encodeURIComponent(`${senderMsg}\n\n-- Transmitted via Monolith Citadel Interface`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="monolith-contact" className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-12 scroll-mt-24">
      {/* Cinematic Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest uppercase text-white/50">
            <span className="text-[#ffaa00]">// 06</span>
            <span>{language === 'pt' ? 'TERMINAL DE TRANSMISSÃO DIRETA' : 'DIRECT TRANSMISSION TERMINAL'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-['Space_Grotesk'] text-white tracking-tight uppercase">
            {language === 'pt' ? 'TERMINAL DE CONTATO DIRETO' : 'DIRECT CONTACT TERMINAL'}
          </h2>
          <p className="font-mono text-xs text-white/60 tracking-wider uppercase max-w-2xl leading-relaxed">
            {language === 'pt'
              ? 'CANAL CRIPTOGRAFADO DIRETO COM JOÃO VINÍCIUS · RESPOSTA ÁGIL EM MENOS DE 24 HORAS.'
              : 'ENCRYPTED DIRECT CHANNEL WITH JOÃO VINÍCIUS · FAST RESPONSE IN LESS THAN 24 HOURS.'}
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 font-mono text-[10px] text-[#ffaa00] tracking-widest uppercase">
          <Radio size={14} className="animate-pulse" />
          <span>{language === 'pt' ? 'SINAL ATIVO · PRONTO' : 'SIGNAL ACTIVE · READY'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Direct Links & Dossier (lg:col-span-5) */}
        <MonolithPanel withCorners className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="text-[10px] font-mono font-bold text-[#ffaa00] tracking-widest uppercase">
              {language === 'pt' ? '// CANAIS_DIRETOS' : '// DIRECT_CHANNELS'}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-['Space_Grotesk'] text-white uppercase leading-tight">
              {language === 'pt' ? 'VAMOS CONSTRUIR ALGO MONUMENTAL JUNTOS.' : "LET'S BUILD SOMETHING MONUMENTAL TOGETHER."}
            </h3>

            <p className="font-sans text-xs text-white/70 leading-relaxed">
              {language === 'pt'
                ? 'Disponível para posições sênior de engenharia de software (Mobile & Front-end), consultorias de arquitetura, otimização crítica de performance e modernização com IA.'
                : 'Available for senior software engineering roles (Mobile & Front-end), architectural consulting, critical performance optimization, and AI modernization.'}
            </p>

            {/* Direct Email Copy Box */}
            <div className="p-4 bg-black/40 border border-white/10 flex items-center justify-between gap-3">
              <div className="overflow-hidden">
                <div className="text-[9px] font-mono text-white/40 tracking-widest uppercase">
                  {language === 'pt' ? 'EMAIL PRINCIPAL:' : 'PRIMARY EMAIL:'}
                </div>
                <div className="text-xs font-mono text-white font-bold truncate mt-0.5">
                  {email}
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 bg-white/5 hover:bg-white/15 text-white border border-white/20 hover:border-[#ffaa00] font-mono text-[10px] font-bold uppercase flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                {copied ? <Check size={12} className="text-[#ffaa00]" /> : <Copy size={12} />}
                <span>
                  {copied
                    ? (language === 'pt' ? 'COPIADO' : 'COPIED')
                    : (language === 'pt' ? 'COPIAR' : 'COPY')}
                </span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/joaoguebrer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playIndustrialClick}
                className="p-3 bg-black/40 hover:bg-white/[0.06] border border-white/10 hover:border-[#ffaa00] group transition-all flex items-center gap-2.5"
              >
                <LinkedinIcon className="w-4 h-4 text-white/60 group-hover:text-[#ffaa00] transition-colors" />
                <div>
                  <div className="text-[9px] font-mono text-white/40 tracking-wider">LINKEDIN</div>
                  <div className="text-[11px] font-mono font-bold text-white group-hover:text-[#ffaa00] transition-colors">
                    /in/joaoguebrer
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Guerber"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playIndustrialClick}
                className="p-3 bg-black/40 hover:bg-white/[0.06] border border-white/10 hover:border-[#ffaa00] group transition-all flex items-center gap-2.5"
              >
                <GithubIcon className="w-4 h-4 text-white/60 group-hover:text-[#ffaa00] transition-colors" />
                <div>
                  <div className="text-[9px] font-mono text-white/40 tracking-wider">GITHUB</div>
                  <div className="text-[11px] font-mono font-bold text-white group-hover:text-[#ffaa00] transition-colors">
                    /Guerber
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="text-[10px] font-mono text-white/40 border-t border-white/10 pt-4 tracking-widest uppercase">
            {language === 'pt'
              ? 'LOCALIZAÇÃO: BRASIL (DISPONÍVEL REMOTO GLOBAL OU HÍBRIDO)'
              : 'LOCATION: BRAZIL (AVAILABLE FOR GLOBAL REMOTE OR HYBRID)'}
          </div>
        </MonolithPanel>

        {/* Right Column: Interactive Transmission Terminal (lg:col-span-7) */}
        <MonolithPanel withCorners className="lg:col-span-7 p-6 sm:p-8">
          <form onSubmit={handleSendMail} className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[10px] font-mono text-white/50 tracking-widest uppercase">
              <span className="text-[#ffaa00] font-bold">TERMINAL // DISPATCH_v5</span>
              <span>PROTOCOL: ENCRYPTED_DIRECT</span>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase text-white/60 font-bold tracking-wider">
                {language === 'pt' ? 'SEU NOME / EMPRESA:' : 'YOUR NAME / COMPANY:'}
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder={language === 'pt' ? 'ex.: João da Tech Corp' : 'e.g. Alex from Tech Corp'}
                className="w-full bg-black/40 border border-white/15 focus:border-[#ffaa00] px-4 py-3 text-xs font-mono text-white placeholder-white/20 outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase text-white/60 font-bold tracking-wider">
                {language === 'pt' ? 'MENSAGEM / ESCOPO DO PROJETO:' : 'MESSAGE / PROJECT SCOPE:'}
              </label>
              <textarea
                required
                rows={5}
                value={senderMsg}
                onChange={(e) => setSenderMsg(e.target.value)}
                placeholder={
                  language === 'pt'
                    ? 'Descreva a oportunidade técnica, escopo de arquitetura ou proposta de colaboração...'
                    : 'Describe the engineering opportunity, architectural scope, or collaboration proposal...'
                }
                className="w-full bg-black/40 border border-white/15 focus:border-[#ffaa00] px-4 py-3 text-xs font-mono text-white placeholder-white/20 outline-none transition-colors resize-none leading-relaxed"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <span className="text-[10px] font-mono text-white/40 tracking-wider">
                {language === 'pt'
                  ? 'Abrirá seu cliente de e-mail com a mensagem pré-formatada.'
                  : 'Opens your default email client with the pre-formatted message.'}
              </span>

              <button
                type="submit"
                className="px-6 py-3.5 bg-white hover:bg-slate-200 text-black font-mono font-black text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.35)] cursor-pointer"
              >
                <span>{language === 'pt' ? '[ TRANSMITIR ]' : '[ TRANSMIT ]'}</span>
                <Send size={13} strokeWidth={2.5} />
              </button>
            </div>
          </form>
        </MonolithPanel>
      </div>
    </section>
  );
};

export default MonolithContact;
