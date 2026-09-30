import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playMsnNudgeSound, playMsnReceiveMessage, playAeroClick } from './soundEffectsAero';
import { useLanguage } from '../../i18n';

interface Message {
  id: string;
  sender: 'recruiter' | 'joao' | 'system';
  senderName: string;
  time: string;
  text: string;
}

const initialMessagesEn: Message[] = [
  {
    id: 'm1',
    sender: 'recruiter',
    senderName: 'Recruiter / Tech Lead',
    time: '10:14',
    text: 'Hello João! We saw your banQi case study with 120k weekly crashes. How did you achieve a -98% reduction?'
  },
  {
    id: 'm2',
    sender: 'joao',
    senderName: 'João Vinícius',
    time: '10:15',
    text: 'We refactored React Native’s async bridge, engineered native Kotlin/Swift modules, integrated Error Boundaries and AppDome RASP. Crashes plunged from 120k to 2k weekly, and cold boot dropped from 60s to 15s!'
  },
  {
    id: 'm3',
    sender: 'system',
    senderName: 'System',
    time: '10:15',
    text: '⚡ You just sent a Nudge! (*Wizz!*)'
  },
  {
    id: 'm4',
    sender: 'recruiter',
    senderName: 'Recruiter / Tech Lead',
    time: '10:16',
    text: 'Impressive! And how have you accelerated engineering velocity with AI automation?'
  },
  {
    id: 'm5',
    sender: 'joao',
    senderName: 'João Vinícius',
    time: '10:17',
    text: 'I engineered custom AI agents for PR triage and regression checks, plus automated Jest/Vitest test suite generation integrated directly into Azure DevOps and GitHub Actions!'
  }
];

const initialMessagesPt: Message[] = [
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
];

interface MsnMessengerWindowProps {
  className?: string;
  onFocusMessenger?: () => void;
}

export const MsnMessengerWindow: React.FC<MsnMessengerWindowProps> = ({
  className = '',
  onFocusMessenger
}) => {
  const { language } = useLanguage();
  const [isShaking, setIsShaking] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [customMessages, setCustomMessages] = useState<Message[]>([]);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const baseMessages = language === 'pt' ? initialMessagesPt : initialMessagesEn;
  const messages = React.useMemo(() => [...baseMessages, ...customMessages], [baseMessages, customMessages]);

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
      setCustomMessages((prev) => [
        ...prev,
        {
          id: `wizz-${Date.now()}`,
          sender: 'system',
          senderName: language === 'pt' ? 'Sistema' : 'System',
          time: timeStr,
          text:
            language === 'pt'
              ? '⚡ Você acabou de enviar um Chamar Atenção! (*Wizz!*)'
              : '⚡ You just sent a Nudge! (*Wizz!*)'
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
      senderName: language === 'pt' ? 'Você' : 'You',
      time: timeStr,
      text: trimmed
    };

    setCustomMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulated Smart MSN reply
    setTimeout(() => {
      setIsTyping(false);
      playMsnReceiveMessage();

      let reply =
        language === 'pt'
          ? 'Excelente pergunta! Foco total em entregar arquiteturas ultra estáveis, código limpo e valor tangível para o produto. Vamos bater um papo no LinkedIn ou por e-mail?'
          : 'Great question! My core focus is delivering ultra-stable architectures, clean code, and tangible product impact. Shall we connect on LinkedIn or via email?';

      const lower = trimmed.toLowerCase();

      if (
        lower.includes('contato') ||
        lower.includes('email') ||
        lower.includes('conversar') ||
        lower.includes('vaga') ||
        lower.includes('trabalho') ||
        lower.includes('contact') ||
        lower.includes('hire') ||
        lower.includes('job')
      ) {
        reply =
          language === 'pt'
            ? 'Estou disponível para novas oportunidades e desafios de alto impacto! Me envie um e-mail em joaoviniciusgs@gmail.com ou me adicione no LinkedIn: linkedin.com/in/joaoguebrer 😊'
            : 'I am available for new high-impact challenges! Send me an email at joaoviniciusgs@gmail.com or connect with me on LinkedIn: linkedin.com/in/joaoguebrer 😊';
      } else if (
        lower.includes('react') ||
        lower.includes('mobile') ||
        lower.includes('swift') ||
        lower.includes('kotlin')
      ) {
        reply =
          language === 'pt'
            ? 'Trabalho com React Native a fundo (New Architecture, Hermes, C++ JSI) e módulos nativos em Kotlin/Swift para extrair 100% de performance do hardware!'
            : 'I specialize in deep React Native engineering (New Architecture, Hermes, C++ JSI) and native Kotlin/Swift modules to extract maximum performance from the hardware!';
      } else if (
        lower.includes('wizz') ||
        lower.includes('atenção') ||
        lower.includes('shake') ||
        lower.includes('nudge')
      ) {
        handleWizz();
        reply =
          language === 'pt'
            ? 'Haha, você apertou o Wizz! Essa vibração clássica do MSN Messenger 8.5 nunca perde a graça! ⚡'
            : 'Haha, you triggered the Wizz! That classic MSN Messenger 8.5 shake never gets old! ⚡';
      }

      setCustomMessages((prev) => [
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
      <div className="msn-titlebar px-3.5 py-2.5 min-h-[38px] flex items-center justify-between select-none">
        <div className="flex items-center gap-2 min-w-0">
          {/* Authentic MSN Green/Blue Duo Buddies Logo */}
          <div className="flex -space-x-1 shrink-0">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-white/80 shadow-sm" />
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 border border-white/80 shadow-sm" />
          </div>
          <span className="aero-titlebar-text text-xs tracking-tight truncate">
            💬 Windows Live Messenger — João Vinícius ({language === 'pt' ? 'Online' : 'Online'})
          </span>
        </div>

        {/* Aero Window Buttons */}
        <div className="flex items-center gap-1.5 shrink-0 ml-3">
          <button
            type="button"
            onClick={playAeroClick}
            className="aero-ctrl-btn aero-ctrl-min w-3.5 h-3.5"
            title={language === 'pt' ? 'Minimizar' : 'Minimize'}
          />
          <button
            type="button"
            onClick={playAeroClick}
            className="aero-ctrl-btn aero-ctrl-max w-3.5 h-3.5"
            title={language === 'pt' ? 'Maximizar' : 'Maximize'}
          />
          <button
            type="button"
            onClick={playAeroClick}
            className="aero-ctrl-btn aero-ctrl-close w-3.5 h-3.5"
            title={language === 'pt' ? 'Fechar' : 'Close'}
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
              [{language === 'pt' ? 'Disponível' : 'Available'}]
            </span>
          </div>
          <p className="text-[11px] text-emerald-700 italic truncate font-medium">
            {language === 'pt'
              ? 'Modernizando arquiteturas mobile 🎵 banQi -98% crashes'
              : 'Modernizing mobile architectures 🎵 banQi -98% crashes'}
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
          title={language === 'pt' ? 'Fazer a janela tremer!' : 'Make the window shake!'}
        >
          <span>🔔</span>
          <span className="font-extrabold">
            {language === 'pt' ? 'Chamar atenção! (Wizz)' : 'Nudge! (Wizz)'}
          </span>
        </button>

        <button
          type="button"
          onClick={playAeroClick}
          className="btn-jelly-glass px-2 py-1 rounded-md text-[11px] font-medium flex items-center gap-1 text-slate-700 cursor-pointer"
        >
          <span>🎙️</span>
          <span className="hidden sm:inline">{language === 'pt' ? 'Áudio' : 'Audio'}</span>
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
                  {msg.senderName} {language === 'pt' ? 'diz' : 'says'} ({msg.time}):
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
              <span>
                {language === 'pt'
                  ? 'João Vinícius está digitando uma mensagem...'
                  : 'João Vinícius is typing a message...'}
              </span>
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
          placeholder={
            language === 'pt'
              ? 'Digite uma mensagem para João Vinícius...'
              : 'Type a message to João Vinícius...'
          }
          className="flex-1 px-3 py-1.5 rounded-full bg-white border border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-xs text-slate-800 placeholder-slate-400 shadow-inner"
        />
        <button
          type="submit"
          className="btn-jelly-green px-4 py-1.5 rounded-full text-xs font-bold shrink-0 cursor-pointer shadow-md"
        >
          {language === 'pt' ? 'Enviar (↵)' : 'Send (↵)'}
        </button>
      </form>
    </div>
  );
};
