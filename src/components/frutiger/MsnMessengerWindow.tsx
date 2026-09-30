import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playMsnNudgeSound, playMsnReceiveMessage, playAeroClick } from './soundEffectsAero';

interface Message {
  id: string;
  sender: 'recruiter' | 'joao' | 'system';
  senderName: string;
  time: string;
  text: string;
}

interface MsnMessengerWindowProps {
  className?: string;
  onFocusMessenger?: () => void;
}

export const MsnMessengerWindow: React.FC<MsnMessengerWindowProps> = ({
  className = '',
  onFocusMessenger
}) => {
  const [isShaking, setIsShaking] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'recruiter',
      senderName: 'Recruiter / Tech Lead',
      time: '10:14',
      text: 'Olá João! Vimos o caso do banQi com 120k crashes/semana. Como você atingiu -98% de redução?'
    },
    {
      id: 'm2',
      sender: 'joao',
      senderName: 'João Vinícius',
      time: '10:15',
      text: 'Refatoramos a bridge assíncrona do React Native, criamos módulos nativos Kotlin/Swift, adicionamos Error Boundaries e RASP AppDome. Fomos de 120k para 2k crashes semanais e boot de 60s para 15s!'
    },
    {
      id: 'm3',
      sender: 'system',
      senderName: 'Sistema',
      time: '10:15',
      text: '⚡ Você acabou de enviar um Chamar Atenção! (*Wizz!*)'
    },
    {
      id: 'm4',
      sender: 'recruiter',
      senderName: 'Recruiter / Tech Lead',
      time: '10:16',
      text: 'Impressionante! E como você tem acelerado engenharia com automação de IA?'
    },
    {
      id: 'm5',
      sender: 'joao',
      senderName: 'João Vinícius',
      time: '10:17',
      text: 'Desenvolvi agentes de IA customizados para triagem de PRs e regressões, além de geração automatizada de testes Jest/Vitest integrados ao Azure DevOps e GitHub Actions!'
    }
  ]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Trigger Wizz (Chamar atenção!)
  const handleWizz = () => {
    setIsShaking(true);
    playMsnNudgeSound();
    if (onFocusMessenger) onFocusMessenger();

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    setTimeout(() => {
      setIsShaking(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `wizz-${Date.now()}`,
          sender: 'system',
          senderName: 'Sistema',
          time: timeStr,
          text: '⚡ Você acabou de enviar um Chamar Atenção! (*Wizz!*)'
        }
      ]);
    }, 380);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed) return;

    playAeroClick();
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'recruiter',
      senderName: 'Você',
      time: timeStr,
      text: trimmed
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulated Smart MSN reply
    setTimeout(() => {
      setIsTyping(false);
      playMsnReceiveMessage();

      let reply = 'Excelente pergunta! Foco total em entregar arquiteturas ultra estáveis, código limpo e valor tangível para o produto. Vamos bater um papo no LinkedIn ou por e-mail?';
      const lower = trimmed.toLowerCase();

      if (lower.includes('contato') || lower.includes('email') || lower.includes('conversar') || lower.includes('vaga') || lower.includes('trabalho')) {
        reply = 'Estou disponível para novas oportunidades e desafios de alto impacto! Me envie um e-mail em joaoviniciusgs@gmail.com ou me adicione no LinkedIn: linkedin.com/in/joaoguebrer 😊';
      } else if (lower.includes('react') || lower.includes('mobile') || lower.includes('swift') || lower.includes('kotlin')) {
        reply = 'Trabalho com React Native a fundo (New Architecture, Hermes, C++ JSI) e módulos nativos em Kotlin/Swift para extrair 100% de performance do hardware!';
      } else if (lower.includes('wizz') || lower.includes('atenção') || lower.includes('shake')) {
        handleWizz();
        reply = 'Haha, você apertou o Wizz! Essa vibração clássica do MSN Messenger 8.5 nunca perde a graça! ⚡';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `joao-${Date.now()}`,
          sender: 'joao',
          senderName: 'João Vinícius',
          time: timeStr,
          text: reply
        }
      ]);
    }, 1200);
  };

  return (
    <div
      className={`aero-window flex flex-col overflow-hidden text-slate-800 ${
        isShaking ? 'animate-wizz' : ''
      } ${className}`}
      style={{
        boxShadow: isShaking
          ? '0 0 35px rgba(255, 170, 0, 0.8), 0 20px 50px rgba(0, 50, 120, 0.3)'
          : undefined
      }}
    >
      {/* 1. MSN Vista Aero Window Header */}
      <div className="msn-titlebar px-3 py-2 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          {/* Authentic MSN Green/Blue Duo Buddies Logo */}
          <div className="flex -space-x-1">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-white/80 shadow-sm" />
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 border border-white/80 shadow-sm" />
          </div>
          <span className="text-xs font-bold text-white tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            💬 Windows Live Messenger — João Vinícius (Online)
          </span>
        </div>

        {/* Aero Window Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={playAeroClick}
            className="w-3.5 h-3.5 rounded-full bg-emerald-400/90 border border-white/80 shadow-sm hover:brightness-110 cursor-pointer"
            title="Minimizar"
          />
          <button
            type="button"
            onClick={playAeroClick}
            className="w-3.5 h-3.5 rounded-full bg-amber-400/90 border border-white/80 shadow-sm hover:brightness-110 cursor-pointer"
            title="Maximizar"
          />
          <button
            type="button"
            onClick={playAeroClick}
            className="w-3.5 h-3.5 rounded-full bg-rose-500/90 border border-white/80 shadow-sm hover:brightness-110 cursor-pointer"
            title="Fechar"
          />
        </div>
      </div>

      {/* 2. User Profile Banner */}
      <div className="p-3 bg-gradient-to-b from-sky-50 via-white to-sky-50/60 border-b border-sky-200/80 flex items-center gap-3">
        {/* Avatar Disc */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 p-0.5 shadow-md shadow-sky-500/20">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-extrabold text-sky-600 text-sm tracking-wider shadow-inner">
              JV
            </div>
          </div>
          {/* Online green jelly status badge */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-slate-800 tracking-tight">João Vinícius</h4>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 border border-emerald-300 px-1.5 py-0.2 rounded-full">
              [Online]
            </span>
          </div>
          <p className="text-[11px] text-emerald-700 italic truncate font-medium">
            Modernizando arquiteturas mobile 🎵 banQi -98% crashes
          </p>
        </div>

        {/* MSN Buddies Icon Watermark */}
        <div className="hidden sm:flex flex-col items-center opacity-85">
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-600 border border-white shadow-sm" />
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-600 border border-white shadow-sm" />
          </div>
          <span className="text-[8.5px] font-bold text-sky-600 tracking-tighter">Live 8.5</span>
        </div>
      </div>

      {/* 3. MSN Action Toolbar */}
      <div className="px-3 py-1.5 bg-gradient-to-b from-sky-100/90 to-sky-200/70 border-b border-sky-300/80 flex items-center gap-1.5 text-xs">
        <button
          type="button"
          onClick={handleWizz}
          className="btn-jelly-glass px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 text-amber-700 hover:text-amber-800 cursor-pointer"
          title="Fazer a janela tremer!"
        >
          <span>🔔</span>
          <span className="font-extrabold">Chamar atenção! (Wizz)</span>
        </button>

        <button
          type="button"
          onClick={playAeroClick}
          className="btn-jelly-glass px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 text-slate-700 cursor-pointer"
        >
          <span>🎙️</span>
          <span className="hidden sm:inline">Áudio</span>
        </button>

        <button
          type="button"
          onClick={playAeroClick}
          className="btn-jelly-glass px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 text-slate-700 cursor-pointer"
        >
          <span>😊</span>
          <span className="hidden sm:inline">Emoticons</span>
        </button>

        <button
          type="button"
          onClick={playAeroClick}
          className="btn-jelly-glass px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 text-slate-700 cursor-pointer"
        >
          <span>🎨</span>
          <span className="hidden sm:inline">Handwriting</span>
        </button>
      </div>

      {/* 4. Chat History Container */}
      <div
        ref={chatScrollRef}
        className="flex-1 p-3.5 bg-gradient-to-b from-white/95 to-sky-50/70 overflow-y-auto space-y-2.5 text-xs leading-relaxed max-h-80 md:max-h-96"
      >
        {messages.map((msg) => {
          if (msg.sender === 'system') {
            return (
              <div
                key={msg.id}
                className="py-1 px-3 rounded-lg bg-amber-100/90 border border-amber-300 text-amber-800 font-medium text-center text-[11px] shadow-sm animate-pulse"
              >
                {msg.text}
              </div>
            );
          }

          const isJoao = msg.sender === 'joao';

          return (
            <div key={msg.id} className="space-y-0.5">
              <div className="flex items-center gap-1 text-[10.5px]">
                <span className={`font-bold ${isJoao ? 'text-blue-700' : 'text-slate-600'}`}>
                  {msg.senderName} diz ({msg.time}):
                </span>
              </div>
              <p
                className={`p-2.5 rounded-xl border text-[11.5px] ${
                  isJoao
                    ? 'bg-blue-50/90 border-blue-200/90 text-slate-800 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                }`}
              >
                {msg.text}
              </p>
            </div>
          );
        })}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="text-[10.5px] italic text-sky-700 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
              <span>João Vinícius está digitando uma mensagem...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. Message Input Form */}
      <form
        onSubmit={handleSendMessage}
        className="p-2.5 bg-gradient-to-b from-sky-100/90 via-sky-50 to-white border-t border-sky-300/80 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite uma mensagem para João Vinícius..."
          className="flex-1 px-3 py-1.5 rounded-full bg-white border border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-xs text-slate-800 placeholder-slate-400 shadow-inner"
        />
        <button
          type="submit"
          className="btn-jelly-green px-4 py-1.5 rounded-full text-xs font-bold shrink-0 cursor-pointer shadow-md"
        >
          Enviar (↵)
        </button>
      </form>
    </div>
  );
};
