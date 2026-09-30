import React, { useState } from 'react';
import { Mail, Check, Download, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../i18n';

export const PrismContact: React.FC = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('joaoviniciusgs@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleDownloadCV = () => {
    const msg =
      language === 'pt'
        ? 'Currículo Executivo de João Vinícius Guerber de Souza pronto para envio! Você também pode entrar em contato direto por e-mail ou LinkedIn.'
        : 'Executive Resume of João Vinícius Guerber de Souza ready for delivery! You can also connect directly via email or LinkedIn.';
    alert(msg);
  };

  return (
    <section id="contact" className="w-full pt-6 pb-16 glass-section-contain">
      {/* Contact Glass Card */}
      <div className="apple-liquid-card-light w-full p-8 sm:p-12 rounded-[40px] transform-gpu">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Text */}
          <div className="max-w-2xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-liquid-chip text-emerald-700 text-xs font-semibold mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {language === 'pt'
                  ? 'Disponível para Projetos Críticos & Posições Sênior'
                  : 'Available for Critical Projects & Senior Roles'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              {language === 'pt' ? 'Vamos conversar sobre o seu próximo projeto.' : "Let's talk about your next project."}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {language === 'pt'
                ? 'Pronto para elevar a arquitetura, estabilidade e experiência do seu produto digital. Entre em contato direto para batermos um papo.'
                : 'Ready to elevate the architecture, stability, and user experience of your digital products. Feel free to reach out directly.'}
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            {/* 1-Click Copy Email */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-full bg-[#181a20] hover:bg-black text-white font-semibold text-xs sm:text-sm shadow-md flex items-center justify-between sm:justify-start gap-3 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>joaoviniciusgs@gmail.com</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white font-mono">
                {copied ? (
                  <Check className="w-3 h-3 text-emerald-400 inline" />
                ) : language === 'pt' ? (
                  'Copiar'
                ) : (
                  'Copy'
                )}
              </span>
            </button>

            {/* LinkedIn & GitHub Row */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/joaoguebrer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 rounded-full apple-liquid-chip hover:bg-white text-slate-800 hover:text-indigo-600 text-xs font-semibold shadow-xs flex items-center justify-center gap-2 transition-all group"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
              </a>

              <a
                href="https://github.com/Guerber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 rounded-full apple-liquid-chip hover:bg-white text-slate-800 text-xs font-semibold shadow-xs flex items-center justify-center gap-2 transition-all group"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900" />
              </a>
            </div>

            {/* Download Resume Button */}
            <button
              type="button"
              onClick={handleDownloadCV}
              className="px-5 py-3 rounded-full apple-liquid-chip hover:bg-white text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>
                {language === 'pt' ? 'Baixar Resumo Executivo (PDF)' : 'Download Executive Resume (PDF)'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
