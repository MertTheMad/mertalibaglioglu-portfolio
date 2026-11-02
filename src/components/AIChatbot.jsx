import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';

export default function AIChatbot() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Dil değiştiğinde başlangıç karşılama mesajını otomatik güncelle
  useEffect(() => {
    setMessages([
      {
        sender: 'ai',
        text: t.aiWelcome
      }
    ]);
  }, [t.aiWelcome]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');

    // Basit anahtar kelime eşleştirme ile çok dilli akıllı yanıt
    const lower = userText.toLowerCase();
    let reply = t.aiFallback;

    if (
      lower.includes('yetenek') || 
      lower.includes('skill') || 
      lower.includes('fähigkeit') || 
      lower.includes('araç') || 
      lower.includes('tool') ||
      lower.includes('cpts')
    ) {
      reply = t.aiSkillResponse;
    } else if (
      lower.includes('kim') || 
      lower.includes('who') || 
      lower.includes('wer') || 
      lower.includes('eğitim') || 
      lower.includes('hakkında') || 
      lower.includes('about')
    ) {
      reply = t.aiAboutResponse;
    } else if (
      lower.includes('iletişim') || 
      lower.includes('contact') || 
      lower.includes('kontakt') || 
      lower.includes('mail') || 
      lower.includes('linkedin')
    ) {
      reply = t.aiContactResponse;
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 450);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Yuvarlak Açma / Kapatma Butonu */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all flex items-center justify-center hover:scale-105"
          aria-label="Open AI Chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat Penceresi */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] bg-[#0c101c]/95 backdrop-blur-xl border border-purple-900/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="px-4 py-3 bg-[#111827]/80 border-b border-purple-900/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-xs font-mono">
                AI
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white leading-tight">{t.aiTitle}</h3>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.aiStatus}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mesaj Listesi */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed font-sans">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-br-none'
                      : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-bl-none shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Mesaj Gönderme Formu */}
          <form onSubmit={handleSend} className="p-3 border-t border-purple-900/30 bg-[#0d1322]">
            <div className="flex items-center gap-2 bg-slate-900/90 rounded-xl px-3 py-1.5 border border-purple-900/40 focus-within:border-purple-500 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.aiPlaceholder}
                className="flex-1 bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="p-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
                disabled={!input.trim()}
              >
                <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </form>

        </div>
      )}
    </div>
  );
}