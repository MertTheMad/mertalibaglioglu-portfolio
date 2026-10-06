import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Terminal from './components/Terminal';
import AIChatbot from './components/AIChatbot';
import { useLanguage } from './components/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function App() {
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative text-slate-100 bg-[#0a0a0f] overflow-x-hidden">
      
      {/* Arka Plan Mor Siber Işık Efektleri */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[130px]" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b076412_1px,transparent_1px),linear-gradient(to_bottom,#3b076412_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Navigasyon Barı (Header) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-semibold text-slate-100 tracking-wide text-sm md:text-base">
              Mert Ali BAĞLIOĞLU
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-purple-400 transition-colors">{t.navAbout}</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">{t.navSkills}</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">{t.navProjects}</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">{t.navContact}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Dil Seçici (TR | EN | DE) */}
            <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-purple-900/40 text-xs font-mono">
              {['tr', 'en', 'de'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded-lg transition-all uppercase ${
                    lang === l
                      ? 'bg-purple-600 text-white font-bold shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                      : 'text-slate-400 hover:text-purple-300'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a 
              href="https://github.com/MertTheMad" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main İçerik */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-20 space-y-24">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col items-start gap-6 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            {t.heroRole}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            {t.heroTitle1} <br />
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            {t.heroDesc}
          </p>

          {/* Buton Alanı */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-2"
            >
              {t.btnContact}
            </a>
            <a 
              href="https://github.com/MertTheMad" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-xl glass-panel hover:bg-white/10 text-slate-200 font-medium transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              {t.btnGithub}
            </a>
            <a 
              href="mailto:mertalibaglioglu@gmail.com" 
              className="px-6 py-3 rounded-xl glass-panel hover:bg-white/10 text-slate-200 font-medium transition-all flex items-center gap-2 border border-purple-500/30 hover:border-purple-400"
            >
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.btnEmail}
            </a>
          </div>

          {/* Rozet Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full">
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-200">{t.card1Title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{t.card1Desc}</p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-200">{t.card2Title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{t.card2Desc}</p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400 border border-fuchsia-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-200">{t.card3Title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{t.card3Desc}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TERMINAL SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Terminal />
        </motion.section>

        {/* HAKKIMDA SECTION */}
        <motion.section 
          id="about" 
          className="scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-purple-400 font-mono text-sm">// 01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{t.aboutTitle}</h2>
            <div className="h-[1px] flex-1 bg-slate-800 ml-4" />
          </div>

          <div className="glass-panel rounded-3xl p-8 border border-slate-800">
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-6">
              {t.aboutP1}
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              {t.aboutP2}
            </p>
          </div>
        </motion.section>

        {/* YETENEKLER SECTION */}
        <motion.section 
          id="skills" 
          className="scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-purple-400 font-mono text-sm">// 02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{t.skillsTitle}</h2>
            <div className="h-[1px] flex-1 bg-slate-800 ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span>🛡️</span> {t.skillsCat1}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HTB CPTS', 'Metasploit', 'Burp Suite', 'Nmap', 'SQL Injection', 'Vulnerability Scanners'].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-fuchsia-400 mb-4 flex items-center gap-2">
                <span>🔍</span> {t.skillsCat2}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Malware Analysis', 'Digital Forensics', 'Network Security', 'Incident Response'].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.section>

        {/* PROJELER SECTION - YENİ KART TASARIMI */}
        <motion.section 
          id="projects" 
          className="scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-purple-400 font-mono text-sm">// 03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{t.projectsTitle}</h2>
            <div className="h-[1px] flex-1 bg-slate-800 ml-4" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            
            {/* Proje Kartı: Portfolio Website */}
            <div className="glass-card p-8 rounded-3xl border border-purple-900/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-purple-500/50 transition-all">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-mono border border-purple-500/20">
                    Web & Security
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                    Live
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{t.project1Title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.project1Desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'].map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href="https://github.com/MertTheMad" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-semibold transition-all whitespace-nowrap shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                {t.project1Btn}
              </a>
            </div>

          </div>
        </motion.section>

        {/* İLETİŞİM SECTION */}
        <motion.section 
          id="contact" 
          className="scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-purple-400 font-mono text-sm">// 04.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{t.contactTitle}</h2>
            <div className="h-[1px] flex-1 bg-slate-800 ml-4" />
          </div>

          <div className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{t.contactHeading}</h3>
              <p className="text-slate-400 text-sm max-w-md">
                {t.contactDesc}
              </p>
            </div>
            <a 
              href="https://www.linkedin.com/in/mert-ali-bağlıoğlu-7b44a438b" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all whitespace-nowrap shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              {t.contactBtn}
            </a>
          </div>
        </motion.section>

      </main>

      {/* AI Chatbot Bileşeni */}
      <AIChatbot />

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs font-mono text-slate-500 relative z-10">
        <p>© {new Date().getFullYear()} Mert Ali BAĞLIOĞLU. All rights reserved.</p>
        <p className="mt-1 text-slate-600">Built with React, Tailwind CSS & Glassmorphism design.</p>
      </footer>

    </div>
  );
}