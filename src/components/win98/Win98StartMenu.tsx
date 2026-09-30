import React from 'react';
import { motion } from 'framer-motion';
import type { WindowId } from './win98Types';
import { playClickSound } from './soundEffects';
import { useLanguage } from '../../i18n/LanguageContext';

interface Win98StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWindow: (id: WindowId) => void;
  onShutdown: () => void;
  onNavigateModern: () => void;
}

export const Win98StartMenu: React.FC<Win98StartMenuProps> = ({
  isOpen,
  onClose,
  onOpenWindow,
  onShutdown,
  onNavigateModern
}) => {
  const { language, setLanguage } = useLanguage();
  if (!isOpen) return null;

  const isPt = language === 'pt';

  const menuItems: { id?: WindowId; label: string; icon: string; action?: () => void }[] = [
    {
      id: 'profile',
      label: isPt ? 'Guerber_Profile.exe (Bio & Carreira)' : 'Guerber_Profile.exe (Bio & Career)',
      icon: '💻'
    },
    {
      id: 'perf',
      label: isPt ? 'Performance_Monitor.exe (-98% Crashes)' : 'Performance_Monitor.exe (-98% Crashes)',
      icon: '📊'
    },
    {
      id: 'cases',
      label: isPt ? 'Meus Projetos & Case Studies' : 'My Projects & Case Studies',
      icon: '🚀'
    },
    {
      id: 'cmd',
      label: isPt ? 'Terminal MS-DOS Prompt' : 'MS-DOS Prompt Terminal',
      icon: '📟'
    },
    {
      id: 'ie',
      label: isPt ? 'Internet Explorer (Redes & Contato)' : 'Internet Explorer (Links & Contact)',
      icon: '🌐'
    },
    {
      id: 'recycle',
      label: isPt ? 'Lixeira (0 Débito Técnico)' : 'Recycle Bin (0 Tech Debt)',
      icon: '🗑️'
    }
  ];

  return (
    <>
      {/* Backdrop to close on click outside */}
      <div className="fixed inset-0 z-[8998]" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.98 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="fixed bottom-[36px] left-0 z-[8999] flex select-none font-['Tahoma',sans-serif] bg-[#C0C0C0] p-[3px] shadow-[4px_4px_12px_rgba(0,0,0,0.5)] border-t-[2px] border-l-[2px] border-r-[2px] border-b-[2px] border-t-white border-l-white border-r-black border-b-black w-72"
      >
        {/* Left Vertical Blue Ribbon: "Windows 98" */}
        <div className="w-8 bg-gradient-to-t from-[#000080] via-[#053d82] to-[#1084d0] flex flex-col justify-end p-1 select-none">
          <span className="text-white font-bold text-xs tracking-widest font-sans transform -rotate-90 origin-bottom-left whitespace-nowrap mb-8 ml-2">
            Windows<span className="font-normal text-amber-300 ml-1">98</span>
          </span>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-1 px-1 bg-[#C0C0C0] space-y-0.5 text-[11px] text-black">
          {menuItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                playClickSound();
                if (item.id) onOpenWindow(item.id);
                onClose();
              }}
              className="w-full text-left px-2 py-1.5 flex items-center gap-2 hover:bg-[#000080] hover:text-white cursor-pointer rounded-xs transition-colors group"
            >
              <span className="text-base">{item.icon}</span>
              <span className="truncate">{item.label}</span>
            </button>
          ))}

          <div className="my-1 border-t border-slate-400 border-b border-white" />

          {/* Language Switch Option */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setLanguage(isPt ? 'en' : 'pt');
              onClose();
            }}
            className="w-full text-left px-2 py-1.5 flex items-center gap-2 hover:bg-[#000080] hover:text-white cursor-pointer rounded-xs transition-colors group"
          >
            <span className="text-base">{isPt ? '🇺🇸' : '🇧🇷'}</span>
            <div className="truncate">
              <div className="font-bold">{isPt ? 'Switch to English (EN)' : 'Mudar para Português (PT)'}</div>
              <div className="text-[9px] text-slate-600 group-hover:text-blue-200">
                {isPt ? 'Set primary language to English' : 'Definir idioma principal como PT'}
              </div>
            </div>
          </button>

          <div className="my-1 border-t border-slate-400 border-b border-white" />

          {/* Switch to Modern Portfolio Button */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              onClose();
              onNavigateModern();
            }}
            className="w-full text-left px-2 py-2 flex items-center gap-2 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 hover:bg-[#000080] hover:text-white cursor-pointer rounded-xs font-bold text-blue-900 group"
          >
            <span className="text-base group-hover:scale-110 transition-transform">✨</span>
            <div className="truncate">
              <div>{isPt ? 'Portfólio Moderno' : 'Modern Portfolio'}</div>
              <div className="text-[9px] font-normal text-slate-600 group-hover:text-blue-200">
                {isPt ? 'Alternar para versão 3D / Web moderna' : 'Switch to 3D / Next-Gen modern web'}
              </div>
            </div>
          </button>

          <div className="my-1 border-t border-slate-400 border-b border-white" />

          {/* Shutdown Option */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              onClose();
              onShutdown();
            }}
            className="w-full text-left px-2 py-1.5 flex items-center gap-2 hover:bg-[#000080] hover:text-white cursor-pointer rounded-xs text-red-900 font-medium"
          >
            <span className="text-base">🛑</span>
            <span>{isPt ? 'Desligar o Computador...' : 'Shut Down Computer...'}</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};
