import React, { useState, useRef, useEffect } from 'react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Merhaba! Ben Mert Ali Bağlıoğlu\'nun AI Asistanıyım. Mert\'in eğitimi, uzmanlık alanları veya projeleri hakkında merak ettiğiniz her şeyi bana sorabilirsiniz.'
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // Sitenin akıllı kural/bilgi motoru (Kişisel Bilgilerinle eğitildi)
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    const userLower = userMessage.toLowerCase();

    const newMessages = [...messages, { sender: 'user', text: userMessage }];
    setMessages(newMessages);
    setInput('');

    // AI Yanıt Mantığı
    setTimeout(() => {
      let botReply = "Mert Ali Bağlıoğlu, Fırat Üniversitesi Adli Bilişim Mühendisliği öğrencisidir. Siber güvenlik, ağ analizi ve sızma testleri üzerine çalışmaktadır. Detaylı bilgi için 'yetenekler' veya 'iletişim' yazabilirsiniz.";

      if (userLower.includes('kim') || userLower.includes('hakkında') || userLower.includes('mert kim')) {
        botReply = "Mert Ali Bağlıoğlu, Fırat Üniversitesi Adli Bilişim Mühendisliği öğrencisidir. Eğitim hayatı boyunca siber güvenlik, ağ güvenliği ve dijital delil inceleme alanlarında pratik yetkinlikler kazanmıştır.";
      } else if (userLower.includes('yetenek') || userLower.includes('araç') || userLower.includes('teknoloji') || userLower.includes('htb') || userLower.includes('cpts')) {
        botReply = "Mert; Hack The Box CPTS müfredatı kapsamında uygulamalı sızma testi, Metasploit, Burp Suite, SQL Injection, Wireshark ile ağ analizi ve zararlı yazılım incelemeleri konusunda uzmandır.";
      } else if (userLower.includes('iletişim') || userLower.includes('mail') || userLower.includes('ulaş') || userLower.includes('linkedin')) {
        botReply = "Mert ile LinkedIn adresi üzerinden (mert-ali-bağlıoğlu) veya GitHub profili (MertTheMad) üzerinden doğrudan iletişime geçebilirsiniz.";
      } else if (userLower.includes('okul') || userLower.includes('üniversite') || userLower.includes('eğitim')) {
        botReply = "Mert, Fırat Üniversitesi Teknoloji Fakültesi Adli Bilişim Mühendisliği bölümünde lisans eğitimine devam etmektedir.";
      } else if (userLower.includes('proje')) {
        botReply = "Mert şu anda HTB CPTS sızma testi laboratuvarları ve zararlı yazılım analizi çalışmaları üzerine yoğunlaşmıştır. Projeleri çok yakında GitHub hesabında sergilenecektir.";
      } else if (userLower.includes('merhaba') || userLower.includes('selam')) {
        botReply = "Selam! Mert'in portfolyosuna hoş geldiniz. Kendisi hakkında size nasıl yardımcı olabilirim?";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Açma Butonu */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-cyan-500 text-slate-950 font-bold shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-105 hover:bg-cyan-400 transition-all flex items-center gap-2 group"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-mono">
            AI Asistana Sor
          </span>
        </button>
      )}

      {/* Chat Penceresi */}
      {isOpen && (
        <div className="w-80 md:w-96 glass-panel rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col h-[480px]">
          {/* Header */}
          <div className="bg-slate-900/90 px-5 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  AI
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Mert'in AI Asistanı</h4>
                <p className="text-[10px] text-cyan-400/80 font-mono">Çevrimiçi | Soruları Yanıtlıyor</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mesaj Listesi */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0a0c10]/95 text-xs leading-relaxed">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500 text-slate-950 font-medium rounded-br-none shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Alanı */}
          <form onSubmit={handleSend} className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Bir şeyler sorun... (örn: Yetenekleri ne?)"
              className="flex-1 bg-slate-800/60 border border-slate-700/50 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
            <button
              type="submit"
              className="p-2 bg-cyan-500 text-slate-950 rounded-xl hover:bg-cyan-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}