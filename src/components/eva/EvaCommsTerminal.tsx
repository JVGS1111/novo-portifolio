import React, { useState } from 'react';
import type { EvaEpisodeContent } from './evaTranslations';
import { Mail, Check, Copy, ExternalLink, Download, Radio } from 'lucide-react';

interface EvaCommsTerminalProps {
  content: EvaEpisodeContent['comms'];
  lang?: 'en' | 'pt';
}

export const EvaCommsTerminal: React.FC<EvaCommsTerminalProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);
  const email = 'joaovguerber@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2800);
  };

  return (
    <div className="relative border-2 border-red-600/80 bg-black/95 p-6 md:p-10 select-none overflow-hidden">
      {/* Top Hazard Warning Shutter */}
      <div className="absolute top-0 left-0 right-0 h-1.5 eva-hazard-stripes-red" />
      <div className="absolute bottom-0 left-0 right-0 h-1.5 eva-hazard-stripes-red" />

      {/* Background Japanese Watermark */}
      <div className="absolute -bottom-6 -right-6 text-8xl md:text-9xl font-eva-title font-extrabold text-red-950/20 pointer-events-none select-none">
        通信
      </div>

      {/* Header */}
      <div className="border-b border-red-900/60 pb-4 mb-6">
        <div className="flex items-center gap-2 text-xs font-eva-mono text-red-500 tracking-widest uppercase">
          <Radio size={14} className="animate-pulse text-red-500" />
          <span>{content.sectionTag}</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400 font-bold">{content.channelStatus}</span>
        </div>
        <h3 className="font-eva-title text-2xl md:text-4xl text-white font-bold tracking-tight mt-1">
          {content.sectionTitle}
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm font-eva-mono mt-1">
          {content.sectionSubtitle}
        </p>
      </div>

      {/* 1-Click Email Comlink Box */}
      <div className="mb-8">
        <label className="block text-[11px] font-eva-mono text-zinc-400 uppercase tracking-widest mb-2">
          {content.directMailLabel}
        </label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-xl">
          <div className="flex-1 bg-zinc-950 border border-zinc-800 px-4 py-3 font-eva-mono text-sm text-[#ff9900] tracking-wider flex items-center gap-3">
            <Mail size={16} className="text-[#ff5500]" />
            <span className="font-bold select-all">{email}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className={`px-5 py-3 font-eva-mono text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 border ${
              copied
                ? 'bg-[#00ff66]/20 border-[#00ff66] text-[#00ff66]'
                : 'bg-[#ff5500] hover:bg-[#ff6600] border-[#ff5500] text-black font-extrabold'
            }`}
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>COPIED // 複製完了</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>{content.clickToCopy}</span>
              </>
            )}
          </button>
        </div>

        {copied && (
          <div className="mt-2 text-[11px] font-eva-mono text-[#00ff66] flex items-center gap-2">
            <span>●</span>
            <span>{content.copySuccessToast}</span>
          </div>
        )}
      </div>

      {/* Action Links Arsenal */}
      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="https://linkedin.com/in/joaovguerber"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 border border-zinc-700 bg-zinc-950 text-xs font-eva-mono text-white hover:border-[#ff5500] hover:text-[#ff5500] transition-colors flex items-center gap-2"
        >
          <span>{content.btnLinkedin}</span>
          <ExternalLink size={13} />
        </a>

        <a
          href="https://github.com/JVGS1111"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 border border-zinc-700 bg-zinc-950 text-xs font-eva-mono text-white hover:border-[#ff5500] hover:text-[#ff5500] transition-colors flex items-center gap-2"
        >
          <span>{content.btnGithub}</span>
          <ExternalLink size={13} />
        </a>

        <a
          href={`${import.meta.env.BASE_URL}curriculo-joao-vinicius.pdf`}
          download
          className="px-4 py-2.5 border border-[#ff9900]/60 bg-[#ff9900]/10 text-xs font-eva-mono text-[#ff9900] hover:bg-[#ff9900]/25 transition-colors flex items-center gap-2 font-bold"
        >
          <Download size={13} />
          <span>{content.btnDownloadCv}</span>
        </a>
      </div>

      {/* Operational Directive Disclaimer */}
      <div className="border-t border-zinc-800 pt-4 text-xs font-eva-mono text-zinc-500 leading-relaxed">
        <p className="text-zinc-400 font-semibold mb-1">
          {content.operationalDirective}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-[10px] text-zinc-600 mt-2">
          <span>NERV HQ: TOKYO-3 / BRAZIL REMOTE</span>
          <span>·</span>
          <span>ENCRYPTED PROTOCOL SHA-256</span>
          <span>·</span>
          <span>COMMANDER CLEARANCE: S-CLASS</span>
        </div>
      </div>
    </div>
  );
};
