import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Paperclip, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { useLanguage } from '../LanguageContext';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize welcome message based on language
  useEffect(() => {
    if (messages.length === 0 || (messages.length === 1 && messages[0].id === 'welcome')) {
      setMessages([
        {
          id: 'welcome',
          role: 'model',
          text: t.chat.welcome
        }
      ]);
    }
  }, [language, t.chat.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Handle Speech Recognition (STT)
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === 'zh' ? 'zh-CN' : language === 'fr' ? 'fr-FR' : 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [language]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setIsListening(true);
      recognitionRef.current?.start();
    }
  };

  const speak = (text: string) => {
    if (!isVoiceEnabled) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'zh' ? 'zh-CN' : language === 'fr' ? 'fr-FR' : 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const aiMsgId = (Date.now() + 1).toString();
    const aiMsgPlaceholder: ChatMessage = {
      id: aiMsgId,
      role: 'model',
      text: '',
      isStreaming: true
    };

    setMessages(prev => [...prev, aiMsgPlaceholder]);

    try {
      const stream = geminiService.streamChat(messages, userMsg.text, language);
      let fullText = '';

      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(msg =>
          msg.id === aiMsgId
            ? { ...msg, text: fullText }
            : msg
        ));
      }

      setMessages(prev => prev.map(msg =>
        msg.id === aiMsgId
          ? { ...msg, isStreaming: false }
          : msg
      ));

      if (isVoiceEnabled) {
        speak(fullText);
      }

    } catch (error) {
      console.error(error);
      const errorText = t.chat.error;
      setMessages(prev => prev.map(msg =>
        msg.id === aiMsgId
          ? { ...msg, text: errorText, isStreaming: false }
          : msg
      ));
      speak(errorText);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickPrompt = (text: string) => {
    setInput(text);
  };

  return (
    <>
      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-150%) skewX(-25deg); }
          100% { transform: translateX(150%) skewX(-25deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        .ai-glint {
          animation: sweep 3s infinite linear;
        }
        .ai-ring {
          animation: pulse-ring 2s infinite ease-out;
        }
      `}</style>

      <div className={`fixed bottom-8 right-8 z-[100] ${isOpen ? 'hidden' : 'block'}`}>
        <div className="relative">
          {/* Outer Pulse Rings */}
          <div className="absolute inset-0 bg-primary rounded-full ai-ring opacity-50"></div>
          <div className="absolute inset-0 bg-primary rounded-full ai-ring opacity-30 [animation-delay:0.7s]"></div>

          <button
            onClick={() => setIsOpen(true)}
            className="relative group flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary via-primary-dark to-black text-white rounded-[2rem] shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95 overflow-hidden border border-white/20"
          >
            {/* Glossy Glint */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full ai-glint pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <Sparkles size={28} className="animate-pulse text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-[10px] font-black uppercase tracking-tighter mt-1 opacity-80">Binh AI</span>
            </div>

            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
            </div>

            <span className="absolute right-24 bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold py-3 px-5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-slate-200 shadow-2xl">
              <span className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                {t.chat.tooltip}
              </span>
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[90] backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-white border-l border-slate-200 z-[100] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">

            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/80 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="bg-primary/20 p-2 rounded-xl text-primary font-bold">
                    <Sparkles size={24} />
                  </div>
                  <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-surface"></div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-slate-900 text-lg font-bold leading-none">{t.chat.aiName}</h3>
                  <p className="text-slate-500 text-xs font-normal mt-1">{t.chat.aiRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                  className={`p-2 rounded-full transition-colors ${isVoiceEnabled ? 'text-primary bg-primary/10' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'}`}
                  title={isVoiceEnabled ? "Mute AI" : "Unmute AI"}
                >
                  {isVoiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 transition-colors hover:bg-slate-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-thin">
              <div className="flex justify-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  {t.chat.poweredBy}
                </span>
              </div>

              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.role === 'model' ? (
                    <div className="bg-primary/10 flex items-center justify-center rounded-full size-8 shrink-0 text-primary mt-1 border border-primary/20">
                      <Sparkles size={16} />
                    </div>
                  ) : (
                    <div className="bg-slate-200 flex items-center justify-center rounded-full size-8 shrink-0 text-slate-700 mt-1 border border-slate-300">
                      <span className="text-xs font-bold uppercase">{t.chat.you}</span>
                    </div>
                  )}

                  <div className={`flex flex-col gap-1 max-w-[85%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <p className="text-slate-400 text-[11px] font-medium leading-none mb-1">
                      {msg.role === 'model' ? t.chat.aiAssistant : t.chat.visitor}
                    </p>
                    <div className={`text-sm font-normal leading-relaxed px-4 py-3 rounded-2xl whitespace-pre-wrap shadow-sm transition-all ${msg.role === 'user'
                      ? 'bg-primary text-white rounded-tr-sm'
                      : 'bg-white text-slate-800 rounded-tl-sm border border-slate-100'
                      }`}>
                      {msg.text}
                      {msg.isStreaming && (
                        <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-primary animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="flex gap-2 flex-wrap ml-11">
                  {[
                    { icon: '🌍', text: t.chat.chips.strategy, prompt: `I'm interested in ${t.chat.chips.strategy}. Can you tell me more?` },
                    { icon: '⚖️', text: t.chat.chips.tax, prompt: `How does ${t.chat.chips.tax} work for cross-border expansion?` },
                    { icon: '🚛', text: t.chat.chips.logistics, prompt: `Tell me about your ${t.chat.chips.logistics} optimization.` }
                  ].map((chip) => (
                    <button
                      key={chip.text}
                      onClick={() => handleQuickPrompt(chip.prompt)}
                      className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-50 border border-slate-200 px-3 hover:bg-slate-100 hover:border-primary/40 transition-all group"
                    >
                      <span className="text-sm group-hover:scale-110 transition-transform">{chip.icon}</span>
                      <p className="text-slate-600 text-xs font-semibold">{chip.text}</p>
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex flex-col gap-3">
                <div className="relative flex items-center">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    disabled={isTyping}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none min-h-[50px] max-h-[120px] disabled:opacity-50"
                    placeholder={t.chat.placeholder}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform disabled:opacity-30 disabled:hover:scale-100"
                  >
                    <Send size={20} />
                  </button>
                </div>
                <div className="flex justify-between items-center px-1">
                  <div className="flex gap-4">
                    <button className="text-slate-400 hover:text-slate-900 transition-colors">
                      <Paperclip size={18} />
                    </button>
                    <button
                      onClick={toggleListening}
                      className={`transition-colors shadow-sm ${isListening ? 'text-primary scale-110' : 'text-slate-400 hover:text-slate-900'}`}
                    >
                      {isListening ? <Mic size={18} /> : <MicOff size={18} />}
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-600 font-medium">{t.chat.shiftEnter}</p>
                </div>
              </div>
            </div>

          </div>
        </>
      )}
    </>
  );
};