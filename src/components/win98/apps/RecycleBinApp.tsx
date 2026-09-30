import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';

export const RecycleBinApp: React.FC = () => {
  const { language } = useLanguage();
  const isPt = language === 'pt';

  return (
    <div className="p-4 bg-white font-['Tahoma',sans-serif] text-black text-[11px] h-full flex flex-col items-center justify-center text-center space-y-3">
      <div className="text-5xl">🗑️</div>
      <h2 className="text-sm font-bold text-slate-900">
        {isPt ? 'A Lixeira está Vazia!' : 'The Recycle Bin is Empty!'}
      </h2>
      <div className="max-w-md p-3 bg-emerald-50 border border-emerald-300 rounded text-emerald-950 text-xs space-y-1">
        <p className="font-bold">{isPt ? 'Status do Codebase:' : 'Codebase Health Status:'}</p>
        <p>{isPt ? '• 0 Débitos Técnicos Críticos Encontrados' : '• 0 Critical Technical Debts Found'}</p>
        <p>{isPt ? '• 0 Memory Leaks não tratados' : '• 0 Unhandled Memory Leaks'}</p>
        <p>{isPt ? '• 100% dos fluxos legados modernizados com sucesso!' : '• 100% Legacy Flows Successfully Modernized!'}</p>
      </div>
      <p className="text-[10px] text-slate-500">
        {isPt
          ? '"Código limpo, arquitetura sólida e testes automatizados mantêm os sistemas saudáveis."'
          : '"Clean code, solid architecture, and automated testing keep mission-critical systems healthy."'}
      </p>
    </div>
  );
};
