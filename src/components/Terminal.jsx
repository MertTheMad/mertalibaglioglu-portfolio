import React from 'react';

export default function Terminal() {
  const cptsSkills = [
    { name: 'HTB CPTS', color: 'border-purple-500/40 text-purple-300 bg-purple-500/10' },
    { name: 'Kali Linux', color: 'border-fuchsia-500/40 text-fuchsia-300 bg-fuchsia-500/10' },
    { name: 'Metasploit', color: 'border-violet-500/40 text-violet-300 bg-violet-500/10' },
    { name: 'Burp Suite', color: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10' },
    { name: 'Nmap', color: 'border-purple-500/40 text-purple-300 bg-purple-500/10' },
    { name: 'SQLMap / SQLi', color: 'border-fuchsia-500/40 text-fuchsia-300 bg-fuchsia-500/10' },
    { name: 'Wireshark', color: 'border-violet-500/40 text-violet-300 bg-violet-500/10' },
    { name: 'Digital Forensics', color: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl my-8">
      {/* Terminal Pencere Başlığı */}
      <div className="bg-[#12131c]/90 px-4 py-3 flex items-center justify-between border-b border-slate-800/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs font-mono text-slate-400 font-medium">
          mert@portfolio:~
        </div>
        <div className="w-12" />
      </div>

      {/* Terminal Gövdesi */}
      <div className="p-6 md:p-8 font-mono text-xs md:text-sm bg-[#0a0a12]/95 text-slate-200 space-y-6">
        
        {/* $ cat about_me.json */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <span className="text-emerald-500">$</span>
            <span>cat about_me.json</span>
          </div>

          <div className="bg-[#121320]/80 p-5 md:p-6 rounded-xl border border-purple-900/30 shadow-inner">
            <div className="text-slate-400">{'{'}</div>
            <div className="pl-6 space-y-1 my-1">
              <div><span className="text-purple-400">"name"</span>: <span className="text-slate-300">"Mert Ali BAĞLIOĞLU"</span>,</div>
              <div><span className="text-purple-400">"role"</span>: <span className="text-slate-300">"Digital Forensics Engineering Student & Cybersecurity Researcher"</span>,</div>
              <div><span className="text-purple-400">"location"</span>: <span className="text-slate-300">"Turkey 🇹🇷"</span>,</div>
              <div><span className="text-purple-400">"status"</span>: <span className="text-slate-300">"Studying HTB CPTS & Vulnerability Analysis 🛡️"</span>,</div>
              <div><span className="text-purple-400">"joke_count_today"</span>: <span className="text-slate-300">"Calculation Error"</span>,</div>
              <div><span className="text-purple-400">"current_mood"</span>: <span className="text-slate-300">"hacking 💻"</span></div>
            </div>
            <div className="text-slate-400">{'}'}</div>
          </div>
        </div>

        {/* $ ls skills/ */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <span className="text-emerald-500">$</span>
            <span>ls skills/</span>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-1">
            {cptsSkills.map((skill, index) => (
              <span
                key={index}
                className={`px-3.5 py-1.5 rounded-lg border text-xs md:text-sm font-semibold tracking-wide transition-all ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Yanan Sönen Mor İmleç Satırı */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-emerald-500 font-bold">$</span>
          <span className="w-2.5 h-5 bg-purple-500 inline-block animate-pulse rounded-sm shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
        </div>

      </div>
    </div>
  );
}