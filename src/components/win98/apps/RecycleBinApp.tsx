import React from 'react';

export const RecycleBinApp: React.FC = () => {
  return (
    <div className="p-4 bg-white font-['Tahoma',sans-serif] text-black text-[11px] h-full flex flex-col items-center justify-center text-center space-y-3">
      <div className="text-5xl">🗑️</div>
      <h2 className="text-sm font-bold text-slate-900">A Lixeira está Vazia!</h2>
      <div className="max-w-md p-3 bg-emerald-50 border border-emerald-300 rounded text-emerald-950 text-xs space-y-1">
        <p className="font-bold">Status do Codebase:</p>
        <p>• 0 Débitos Técnicos Críticos Encontrados</p>
        <p>• 0 Memory Leaks não tratados</p>
        <p>• 100% dos fluxos legados modernizados com sucesso!</p>
      </div>
      <p className="text-[10px] text-slate-500">
        "Código limpo, arquitetura sólida e testes automatizados mantêm os sistemas saudáveis."
      </p>
    </div>
  );
};
