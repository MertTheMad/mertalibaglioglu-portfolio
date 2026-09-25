import React, { createContext, useContext, useState } from 'react';

const translations = {
  tr: {
    navAbout: "Hakkımda",
    navSkills: "Yetenekler",
    navProjects: "Projeler",
    navContact: "İletişim",
    heroRole: "Adli Bilişim Mühendisliği Öğrencisi & Siber Güvenlik Araştırmacısı",
    heroTitle1: "Siber Güvenlik &",
    heroTitle2: "Adli Bilişim Uzmanlığı",
    heroDesc: "Fırat Üniversitesi Adli Bilişim Mühendisliği öğrencisi olarak ağ güvenliği, sızma testleri, zafiyet analizi ve zararlı yazılım analizi alanlarında pratik ve teorik çalışmalar yürütüyorum.",
    btnContact: "İletişime Geç",
    btnGithub: "GitHub Profilim",
    btnEmail: "E-posta Gönder",
    card1Title: "HTB CPTS Müfredatı",
    card1Desc: "Uygulamalı Sızma Testi Çalışmaları",
    card2Title: "Zafiyet Analizi",
    card2Desc: "SQLi, Web Güvenliği & Ağ İnceleme",
    card3Title: "Dijital Delil İnceleme",
    card3Desc: "Zararlı Yazılım & Olay Müdahale",
    aboutTitle: "Hakkımda & Eğitim",
    aboutP1: "Merhaba, Fırat Üniversitesi Adli Bilişim Mühendisliği öğrencisi olarak, eğitim hayatım boyunca siber güvenlik, ağ güvenliği ve dijital delil inceleme alanlarında pratik ve teorik yetkinlikler kazandım.",
    aboutP2: "Teorik eğitimimin yanı sıra Hack The Box CPTS (Certified Penetration Testing Specialist) müfredatı kapsamında uygulamalı sızma testi, zafiyet analizi ve güvenlik süreçleri üzerinde aktif olarak çalışmaktayım.",
    skillsTitle: "Uzmanlık & Yetenekler",
    skillsCat1: "Sızma Testi & Güvenlik",
    skillsCat2: "Adli Bilişim & Analiz",
    projectsTitle: "Öne Çıkan Projeler",
    project1Title: "Kişisel Siber Güvenlik Portfolyo Web Sitesi",
    project1Desc: "React, Tailwind CSS, Framer Motion ve Glassmorphism tasarım dili kullanılarak geliştirilmiş; interaktif CLI terminali ve çok dilli (TR/EN/DE) altyapıya sahip modern siber güvenlik ve adli bilişim portfolyo platformu.",
    project1Btn: "GitHub Repo →",
    contactTitle: "İletişim",
    contactHeading: "Birlikte Çalışalım",
    contactDesc: "Siber güvenlik, sızma testi projeleri veya adli bilişim alanlarındaki sorularınız için benimle LinkedIn üzerinden iletişime geçebilirsiniz.",
    contactBtn: "LinkedIn'den Mesaj Gönder"
  },
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    heroRole: "Digital Forensics Engineering Student & Cybersecurity Researcher",
    heroTitle1: "Cybersecurity &",
    heroTitle2: "Digital Forensics Expertise",
    heroDesc: "As a Digital Forensics Engineering student at Firat University, I perform practical and theoretical work in network security, penetration testing, vulnerability analysis, and malware investigation.",
    btnContact: "Get in Touch",
    btnGithub: "GitHub Profile",
    btnEmail: "Send Email",
    card1Title: "HTB CPTS Track",
    card1Desc: "Practical Penetration Testing Labs",
    card2Title: "Vulnerability Analysis",
    card2Desc: "SQLi, Web Security & Network Inspection",
    card3Title: "Digital Forensics",
    card3Desc: "Malware & Incident Response",
    aboutTitle: "About & Education",
    aboutP1: "Hello, as a Digital Forensics Engineering student at Firat University, I have gained practical and theoretical expertise in cybersecurity, network security, and digital evidence analysis.",
    aboutP2: "Alongside academic study, I actively focus on hands-on penetration testing, vulnerability assessment, and security operations under the Hack The Box CPTS curriculum.",
    skillsTitle: "Expertise & Skills",
    skillsCat1: "Penetration Testing & Security",
    skillsCat2: "Digital Forensics & Analysis",
    projectsTitle: "Featured Projects",
    project1Title: "Personal Cybersecurity Portfolio Website",
    project1Desc: "Modern cybersecurity & digital forensics portfolio platform built with React, Tailwind CSS, Framer Motion, and Glassmorphism design, featuring an interactive terminal component and multi-language (TR/EN/DE) support.",
    project1Btn: "GitHub Repo →",
    contactTitle: "Contact",
    contactHeading: "Let's Work Together",
    contactDesc: "Feel free to reach out via LinkedIn for inquiries related to cybersecurity, penetration testing projects, or digital forensics.",
    contactBtn: "Send Message via LinkedIn"
  },
  de: {
    navAbout: "Über mich",
    navSkills: "Fähigkeiten",
    navProjects: "Projekte",
    navContact: "Kontakt",
    heroRole: "Student der digitalen Forensik & IT-Sicherheitsforscher",
    heroTitle1: "Cybersicherheit &",
    heroTitle2: "Digitale Forensik",
    heroDesc: "Als Student der digitalen Forensik an der Fırat-Universität führe ich praktische und theoretische Arbeiten in den Bereichen Netzwerksicherheit, Penetrationstests und Schwachstellenanalyse durch.",
    btnContact: "Kontaktieren",
    btnGithub: "GitHub Profil",
    btnEmail: "E-Mail Senden",
    card1Title: "HTB CPTS Lehrplan",
    card1Desc: "Praktische Penetrationstest-Labore",
    card2Title: "Schwachstellenanalyse",
    card2Desc: "SQLi, Websicherheit & Netzwerkprüfung",
    card3Title: "Digitale Forensik",
    card3Desc: "Malware-Analyse & Vorfallreaktion",
    aboutTitle: "Über mich & Ausbildung",
    aboutP1: "Hallo, als Student der digitalen Forensik an der Fırat-Universität habe ich praktische und theoretische Kenntnisse in Cybersicherheit, Netzwerksicherheit und digitaler Beweisanalyse erworben.",
    aboutP2: "Neben dem akademischen Studium konzentriere ich mich aktiv auf praktische Penetrationstests und Schwachstellenanalysen im Rahmen des Hack The Box CPTS-Lehrplans.",
    skillsTitle: "Expertise & Fähigkeiten",
    skillsCat1: "Penetrationstests & Sicherheit",
    skillsCat2: "Digitale Forensik & Analyse",
    projectsTitle: "Ausgewählte Projekte",
    project1Title: "Persönliche Cybersicherheits-Portfolio-Website",
    project1Desc: "Moderne Cybersicherheits-Portfolio-Plattform, entwickelt mit React, Tailwind CSS, Framer Motion und Glassmorphism, mit interaktiver Terminal-Komponente und Mehrsprachenunterstützung (TR/EN/DE).",
    project1Btn: "GitHub Repo →",
    contactTitle: "Kontakt",
    contactHeading: "Lass uns zusammenarbeiten",
    contactDesc: "Kontaktieren Sie mich gerne über LinkedIn für Fragen zu Cybersicherheit, Penetrationstests oder digitaler Forensik.",
    contactBtn: "Nachricht auf LinkedIn senden"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('tr');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);