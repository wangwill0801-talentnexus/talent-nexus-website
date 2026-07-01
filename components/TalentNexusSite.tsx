"use client";

import Image from "next/image";
import { ArrowRight, ChartNoAxesCombined, ChevronRight, Cpu, Factory, FlaskConical, Globe, HeartPulse, Mail, MapPin, Menu, Moon, Phone, Search, ShieldCheck, ShoppingBag, Sun, Target, UsersRound, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type Lang = "en" | "tw";
type Theme = "light" | "dark";

const seo = {
  en: {
    title: "Talent Nexus Taiwan | Executive Search and Recruitment Services",
    description: "Talent Nexus Taiwan provides executive search and professional recruitment services across technology, semiconductors, software, electronics and specialist functions, helping companies find suitable talent and professionals explore career opportunities."
  },
  tw: {
    title: "Talent Nexus Taiwan｜英鏈人才顧問有限公司｜專業獵頭與人才招募服務",
    description: "Talent Nexus Taiwan 英鏈人才顧問有限公司提供科技、半導體、軟體、電子及專業人才獵頭與招募服務，協助企業找到合適人才，也協助候選人探索職涯機會。"
  }
} as const;

const copy = {
  en: {
    brandName: "Talent Nexus",
    nav: ["About", "Services", "Contact", "AI Tools"],
    kicker: "EXECUTIVE SEARCH · TALENT INTELLIGENCE",
    headline: "We Don't Fill Vacancies. We Engineer Market Leaders.",
    sub: "Driven by intelligence and precision. We deliver pragmatic talent solutions for tech, semiconductors, and diverse industries.",
    ctas: ["Partner With Us", "Talent Submission"],
    aboutLabel: "ABOUT US",
    aboutTitle: "Precision over noise.",
    about: "Talent Nexus is an agile executive search firm. While rooted in the tech and semiconductor sectors, our expertise spans across diverse industries. We cut through the noise, focusing purely on precise talent matching and pragmatic solutions.",
    aboutLead: "We work as an extension of your hiring team—asking the difficult questions early, mapping the market clearly, and keeping every search moving with honest communication.",
    principles: [["Evidence-led", "Market insight and candidate evidence guide every recommendation."], ["Direct communication", "Clear progress, realistic expectations, and no unnecessary layers."], ["Long-term fit", "We look beyond the résumé to align capability, motivation, and business context."]],
    sectorsLabel: "SECTOR FOCUS",
    sectorsTitle: "Specialist markets. One connected talent network.",
    sectorsHint: "Hover or select a sector to explore our coverage.",
    sectorInsightLabel: "MARKET INTELLIGENCE",
    sectorGroups: [
      ["High-Tech & Electronics", "We connect companies with specialists shaping the next generation of computing and connected systems—from semiconductor innovation and AI infrastructure to power electronics and software. Our searches focus on technical depth, commercial awareness, and the ability to turn complex technology into scalable business impact.", ["Semiconductors", "AI Server & Hardware", "Power Electronics", "Software"]],
      ["Advanced Manufacturing", "We recruit leaders and specialists who modernize production, strengthen global operations, and improve industrial performance. Our network spans smart factory transformation, resilient supply chains, and automation—connecting practical engineering expertise with the strategic judgment required to deliver measurable change at scale.", ["Smart Factories", "Global Supply Chain", "Industrial Automation"]],
      ["Chemicals & Materials", "We identify technical and commercial talent across high-value chemicals and materials markets. From specialty formulations and sustainable alternatives to polymers and plastics, we seek professionals who combine scientific fluency, regulatory awareness, customer insight, and disciplined execution across complex global value chains.", ["Specialty Chemicals", "Sustainable Materials", "Polymers & Plastics"]],
      ["Healthcare & Life Sciences", "We support organizations developing technologies and therapies that improve patient outcomes. Our coverage spans medical devices, biotechnology, pharmaceuticals, and digital health, with a focus on candidates who can navigate scientific complexity, regulated environments, cross-functional development, and responsible commercial growth.", ["Medical Devices & Technology", "Biotechnology", "Pharmaceuticals", "Digital Health"]],
      ["Consumer & Retail", "We connect consumer businesses with talent that understands product, brand, operations, and changing customer behavior. Across footwear, apparel, FMCG, and lifestyle brands, we prioritize professionals who balance creative market instinct with commercial discipline, supply-chain awareness, and the ability to grow enduring brands.", ["Footwear", "Apparel", "FMCG", "Lifestyle Brands"]]
    ],
    servicesLabel: "OUR SERVICES",
    servicesTitle: "Built for critical hires.",
    services: [
      ["Contingency Search", "Focused on sourcing critical technical professionals and mid-to-senior management across specialized vertical sectors. Leveraging our extensive talent database and deep industry networks, we rapidly connect you with high-impact R&D, engineering, and operations experts to effectively bridge your talent gaps."],
      ["Retained Search", "Tailored for C-suite executives, highly confidential roles, and scarce industry talent, our Retained Search offers an exclusive, high-commitment partnership. We deploy a dedicated project team to conduct comprehensive market scanning and in-depth Talent Mapping, ensuring we secure top-tier leaders who bring strategic value and vision to your organization."],
      ["RPO & Volume Hiring", "When your organization faces rapid scaling, new facility establishments, or cross-departmental expansions, we provide customized Recruitment Process Outsourcing solutions. Our specialized team seamlessly integrates with—or acts as an extension of—your internal HR function. From initial resume screening to final interview scheduling, we manage the entire lifecycle to help you efficiently achieve large-scale hiring targets within a tight timeframe."],
      ["Market Intelligence & Advisory", "Going beyond precise candidate matchmaking, we serve as your strategic human capital advisor. We provide customized Salary Benchmarking, organizational structure recommendations, and the latest talent market trends. Our data-driven insights empower your business to formulate winning recruitment strategies in a highly competitive talent landscape."]
    ],
    serviceNote: "Every engagement is calibrated to the role, market, and urgency. We combine focused research with consistent human judgment—not a one-size-fits-all database search.",
    processLabel: "HOW WE WORK",
    processTitle: "A clear search process. No black box.",
    process: [["Align", "Define the business need, success profile, and market reality."], ["Map", "Build a focused talent map and approach relevant candidates directly."], ["Assess", "Evaluate capability, motivation, fit, and career context."], ["Deliver", "Present evidence-based shortlists and manage the process through closure."]],
    commitmentLabel: "OUR COMMITMENT",
    commitmentTitle: "Better outcomes begin with better conversations.",
    commitments: [["For companies", "A search partner who challenges assumptions, reports the market honestly, and stays accountable from brief to onboarding."], ["For talent", "Confidential, contextual conversations that respect your time, clarify the opportunity, and support an informed career decision."]],
    contactLabel: "CONTACT",
    contact: "Let's build your next leading team. Reach out to us today.",
    fields: ["Name", "Email", "Company", "Tell us what you need"],
    submit: "Send Inquiry",
    sent: "Thank you. We'll be in touch shortly.",
    footer: "Precision in Professional Placement"
  },
  tw: {
    brandName: "Talent Nexus 英鏈人才",
    nav: ["關於我們", "專業服務", "聯絡我們", "AI 工具"],
    kicker: "高階獵才 · 人才情報",
    headline: "We Don't Fill Vacancies. We Engineer Market Leaders.",
    sub: "以數據與 AI 驅動，為科技、半導體及多元產業提供最務實的人才解方。",
    ctas: ["合作洽談", "人才推薦"],
    aboutLabel: "關於我們",
    aboutTitle: "精準，勝過聲量。",
    about: "Talent Nexus 是一間講求敏捷與實效的新創招募顧問公司。我們以科技與半導體領域為基石，同時將招募專業延伸至多元產業。我們拒絕空泛的行銷辭藻，專注於精準的供需匹配，用執行力證明價值。",
    aboutLead: "我們把自己視為企業招募團隊的延伸：在專案開始時釐清真正需求、具體盤點人才市場，並以透明溝通持續推進每一項搜尋。",
    principles: [["以證據為基礎", "以市場情報與候選人實績作為每一項推薦的依據。"], ["直接透明溝通", "清楚回報進度、務實管理期待，避免不必要的溝通層級。"], ["重視長期適配", "不只核對履歷，更評估能力、動機與企業情境是否一致。"]],
    sectorsLabel: "專注領域",
    sectorsTitle: "深耕專業市場，串聯跨產業人才網絡。",
    sectorsHint: "滑過或點選產業，查看我們的專業領域。",
    sectorInsightLabel: "市場洞察",
    sectorGroups: [
      ["高科技與電子", "我們協助企業連結推動次世代運算與聯網系統的專業人才，涵蓋半導體創新、AI 基礎設施、電力電子與軟體。招募評估兼顧技術深度、商業敏銳度，以及將複雜技術轉化為可規模化成果的能力。", ["半導體", "AI 伺服器與硬體", "電力電子", "軟體"]],
      ["先進製造", "我們招募能夠推動生產現代化、強化全球營運並提升工業績效的領導者與專業人才。人才網絡涵蓋智慧工廠轉型、韌性供應鏈與工業自動化，重視工程實務與策略判斷的結合。", ["智慧工廠", "全球供應鏈", "工業自動化"]],
      ["化學與材料", "我們深耕高附加價值化學與材料市場，辨識兼具技術及商業能力的人才。從特用配方、永續替代材料到高分子與塑膠，重視科學素養、法規意識、客戶洞察及全球價值鏈的執行能力。", ["特用化學", "永續材料", "高分子與塑膠"]],
      ["醫療與生命科學", "我們協助開發改善病患成果之技術與療法的組織，專業領域涵蓋醫療器材、生物科技、製藥與數位健康，聚焦能夠掌握科學複雜度、法規環境、跨部門研發及責任成長的人才。", ["醫療器材與科技", "生物科技", "製藥", "數位健康"]],
      ["消費與零售", "我們為消費品牌連結理解產品、品牌、營運與顧客變化的人才。涵蓋鞋類、成衣、快速消費品與生活風格品牌，優先尋找兼具市場創意、商業紀律、供應鏈意識與長期品牌成長能力的專業人士。", ["鞋類", "成衣", "快速消費品", "生活風格品牌"]]
    ],
    servicesLabel: "專業服務",
    servicesTitle: "為關鍵招募而生。",
    services: [
      ["專案成功制招募", "聚焦各專業垂直領域的關鍵技術人才與中高階管理職。透過廣泛的人才資料庫與深厚產業網絡，我們快速連結具高度影響力的研發、工程及營運專家，有效補足企業的關鍵人才缺口。"],
      ["委任制高階獵才", "專為 C-suite 高階主管、高度機密職位及市場稀缺人才設計，提供專屬且高度承諾的合作模式。我們配置專責專案團隊，進行全面市場掃描與深度人才地圖分析，鎖定能為組織帶來策略價值與領導視野的頂尖人才。"],
      ["RPO 與大量招募", "當企業面臨快速擴張、新據點設立或跨部門增員時，我們提供客製化招募流程委外方案。專業團隊可無縫整合或延伸企業內部 HR 職能，從履歷初篩到最終面試安排，全程管理招募生命週期，協助企業在緊迫時程內有效達成大規模招募目標。"],
      ["人才市場情報與顧問服務", "我們不只進行精準人才媒合，更擔任企業的策略人力資本顧問。透過客製化薪資基準分析、組織架構建議及最新人才市場趨勢，提供數據驅動的洞察，協助企業在高度競爭的人才市場中制定具優勢的招募策略。"]
    ],
    serviceNote: "每一項委託都依職務、市場與時程重新校準。我們結合聚焦研究與顧問判斷，而非用同一套資料庫搜尋處理所有需求。",
    processLabel: "合作流程",
    processTitle: "清楚透明的招募流程。",
    process: [["需求對焦", "釐清企業需求、成功條件與人才市場現況。"], ["市場盤點", "建立聚焦的人才地圖，直接接觸合適候選人。"], ["深度評估", "評估專業能力、轉職動機、適配度與職涯脈絡。"], ["精準交付", "提出具實證的候選名單，並持續協調至招募完成。"]],
    commitmentLabel: "我們的承諾",
    commitmentTitle: "更好的招募結果，始於更好的對話。",
    commitments: [["致企業夥伴", "我們不只接收職缺，也會挑戰假設、如實回報市場，並從需求確認到人才到任持續負責。"], ["致專業人才", "以保密且具脈絡的交流，尊重你的時間、說清楚機會，也協助你做出充分知情的職涯決定。"]],
    contactLabel: "聯絡我們",
    contact: "準備好建立市場領先團隊了嗎？立即與我們聯繫。",
    fields: ["姓名", "Email", "公司名稱", "需求描述"],
    submit: "送出需求",
    sent: "謝謝，我們會盡快與您聯繫。",
    footer: "Precision in Professional Placement"
  }
} as const;

const icons = [Target, ShieldCheck, UsersRound, ChartNoAxesCombined];
const sectorIcons = [Cpu, Factory, FlaskConical, HeartPulse, ShoppingBag];

export function TalentNexusSite() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSector, setActiveSector] = useState(0);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
    document.title = seo[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo[lang].description);
  }, [lang]);

  useEffect(() => {
    const saved = window.localStorage.getItem("talent-nexus-theme") as Theme | null;
    const initial = saved === "dark" || saved === "light" ? saved : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("talent-nexus-theme", next);
  }

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  function trackPointer(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY}px`);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new URLSearchParams();
    new FormData(form).forEach((value, key) => data.append(key, String(value)));
    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data.toString() });
      setSent(true);
      form.reset();
    } catch {
      setSent(false);
    }
  }

  return <main className="site-stage overflow-hidden" onPointerMove={trackPointer}>
    <div className="scroll-progress fixed left-0 top-0 z-[70] h-[3px] bg-cyan" aria-hidden="true" />
    <div className="pointer-glow pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label={`${t.brandName} home`} className="logo-float flex min-w-0 shrink items-center gap-2"><Image src="/logo.png" alt={t.brandName} width={310} height={208} priority className="block h-16 w-auto object-contain sm:h-24 dark:hidden" /><Image src="/logo-dark.png" alt={t.brandName} width={310} height={208} priority className="hidden h-16 w-auto object-contain sm:h-24 dark:block" /><span className="max-w-28 text-xs font-bold leading-tight text-navy sm:max-w-none dark:text-white">{lang === "tw" ? "英鏈人才" : ""}</span></a>
        <nav className="hidden items-center gap-9 md:flex">
          {["about", "services", "contact"].map((id, i) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-navy/70 transition hover:text-teal-600 dark:text-white/80 dark:hover:text-cyan">{t.nav[i]}</a>)}
          <a href="https://tnt.talentnexus.com.tw" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-navy/70 transition hover:text-teal-600 dark:text-white/80 dark:hover:text-cyan">{t.nav[3]}</a>
          <button onClick={toggleTheme} className="theme-toggle flex h-10 w-10 items-center dark:text-white justify-center rounded-full border border-navy/15 text-navy transition hover:border-cyan hover:bg-cyan/10" aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}</button>
          <button onClick={() => setLang(lang === "en" ? "tw" : "en")} className="rounded-full border border-navy/15 px-4 py-2 text-sm font-bold transition hover:border-cyan hover:bg-cyan/10" aria-label="Switch language">EN <span className="mx-1 text-navy/30">/</span> 繁中</button>
        </nav>
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy dark:text-white" aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>{theme === "light" ? <Moon size={18} /> : <Sun size={18} />}</button>
          <button onClick={() => setLang(lang === "en" ? "tw" : "en")} className="inline-flex h-10 items-center rounded-full border border-navy/15 px-2.5 text-xs font-bold text-navy dark:text-white" aria-label="Switch language">EN <span className="mx-1 text-navy/30 dark:text-white/40">/</span> 繁中</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="inline-flex h-10 w-10 items-center justify-center text-navy dark:text-white" aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {menuOpen && <div className="border-t border-navy/10 bg-white px-5 py-5 md:hidden"><p className="mb-2 break-words text-sm font-bold text-teal-700">{t.brandName}</p>{["about", "services", "contact"].map((id, i) => <a key={id} onClick={() => setMenuOpen(false)} href={`#${id}`} className="block py-3 font-semibold">{t.nav[i]}</a>)}<a href="https://tnt.talentnexus.com.tw" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="block py-3 font-semibold">{t.nav[3]}</a></div>}
    </header>

    <section id="top" className="grid-lines relative min-h-screen pt-28">
      <div className="ambient-glow absolute right-[-10rem] top-28 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center px-5 py-20 lg:grid-cols-[1fr_.65fr] lg:px-8">
        <div className="relative z-10 max-w-4xl">
          <p className="fade-up mb-3 text-sm font-bold text-teal-700">{t.brandName}</p>
          <p className="fade-up mb-7 text-xs font-bold tracking-[.24em] text-teal-600">{t.kicker}</p>
          <h1 className="headline-shimmer fade-up delay-1 text-5xl font-bold leading-[1.03] tracking-[-.055em] text-navy sm:text-6xl lg:text-8xl">{t.headline}</h1>
          <p className="fade-up delay-2 mt-8 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">{t.sub}</p>
          <div className="fade-up delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="shine-button inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-4 font-bold text-navy transition hover:-translate-y-1 hover:shadow-lg">{t.ctas[0]} <ArrowRight size={18} /></a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-navy/20 bg-white px-7 py-4 font-bold transition hover:border-cyan hover:bg-cyan/10">{t.ctas[1]}</a>
          </div>
        </div>
        <div className="relative hidden h-[34rem] lg:block">
          <div className="orbit-slow absolute inset-16 rounded-full border border-navy/15" /><div className="orbit-reverse absolute inset-28 rounded-full border border-cyan/50" />
          <div className="pulse-node absolute left-4 top-16 h-3 w-3 rounded-full bg-cyan shadow-[0_0_0_12px_rgba(22,220,197,.12)]" /><div className="float-node absolute bottom-24 right-10 h-5 w-5 rounded-full bg-navy" />
          <div className="nexus-card absolute left-1/2 top-1/2 flex h-60 w-60 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-navy/95 p-8 text-center text-white shadow-soft"><span className="metal-gold text-xs font-bold tracking-[.22em]">THE NEXUS</span><p className="metal-silver mt-4 text-2xl font-bold leading-tight">Talent meets opportunity.</p></div>
        </div>
      </div>
    </section>

    <div className="marquee-shell relative z-10 overflow-hidden border-y border-navy/10 bg-navy py-4 text-white"><div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap text-xs font-bold tracking-[.22em] text-cyan"><span>SEMICONDUCTORS</span><span>◆</span><span>AI & SOFTWARE</span><span>◆</span><span>HARDWARE</span><span>◆</span><span>EXECUTIVE SEARCH</span><span>◆</span><span>TALENT INTELLIGENCE</span><span>◆</span><span>SEMICONDUCTORS</span><span>◆</span><span>AI & SOFTWARE</span><span>◆</span><span>HARDWARE</span><span>◆</span><span>EXECUTIVE SEARCH</span><span>◆</span><span>TALENT INTELLIGENCE</span></div></div>

    <section id="about" className="reveal-on-scroll bg-mist py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold tracking-[.24em] text-teal-600">{t.aboutLabel}</p><h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{t.aboutTitle}</h2></div><div><p className="max-w-3xl text-xl leading-9 text-ink/75 sm:text-2xl sm:leading-10">{t.about}</p><p className="mt-7 max-w-3xl text-base leading-8 text-ink/60">{t.aboutLead}</p></div></div><div className="mt-16 grid gap-5 md:grid-cols-3">{t.principles.map((item, i) => <div key={item[0]} className="border-t border-navy/15 pt-6"><span className="text-xs font-bold text-teal-600">0{i + 1}</span><h3 className="mt-3 text-lg font-bold">{item[0]}</h3><p className="mt-2 leading-7 text-ink/60">{item[1]}</p></div>)}</div><div className="sector-explorer mt-16 overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-7 shadow-soft sm:p-10"><div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end"><div><p className="text-xs font-bold tracking-[.22em] text-teal-600">{t.sectorsLabel}</p><h3 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">{t.sectorsTitle}</h3></div><p className="max-w-xs text-sm leading-6 text-ink/60 sm:text-right">{t.sectorsHint}</p></div><div className="mt-9 grid gap-5 lg:grid-cols-[.92fr_1.08fr]"><div className="grid gap-2">{t.sectorGroups.map((group, i) => { const SectorIcon = sectorIcons[i]; const active = activeSector === i; return <button key={group[0]} type="button" onMouseEnter={() => setActiveSector(i)} onFocus={() => setActiveSector(i)} onClick={() => setActiveSector(i)} aria-expanded={active} aria-controls="sector-detail" className={`sector-trigger group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition ${active ? "is-active border-cyan bg-navy text-white" : "border-navy/10 bg-mist hover:border-cyan"}`}><span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${active ? "bg-cyan text-navy" : "bg-white text-teal-700 group-hover:bg-cyan group-hover:text-navy"}`}><SectorIcon size={21} /></span><span className="min-w-0 flex-1 font-bold">{group[0]}</span><ChevronRight size={18} className={`shrink-0 transition ${active ? "translate-x-1 text-cyan" : "text-navy/35"}`} /></button>; })}</div><div id="sector-detail" key={`${lang}-${activeSector}`} className="sector-detail relative min-h-72 overflow-hidden rounded-3xl bg-navy p-7 text-white sm:p-9"><div className="sector-orbit" aria-hidden="true" /><span className="relative text-xs font-bold tracking-[.22em] text-cyan">0{activeSector + 1} / 05</span><h4 className="relative mt-5 max-w-md text-3xl font-bold leading-tight">{t.sectorGroups[activeSector][0]}</h4><div className="sector-description relative mt-5 overflow-hidden rounded-2xl border border-cyan/20 bg-white/5 p-5"><span className="text-[10px] font-bold tracking-[.2em] text-cyan">{t.sectorInsightLabel}</span><p className="mt-3 text-sm leading-6 text-white/70">{t.sectorGroups[activeSector][1]}</p></div><div className="relative mt-6 grid gap-3 sm:grid-cols-2">{t.sectorGroups[activeSector][2].map((specialty, i) => <div key={specialty} className="sector-specialty flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5" style={{ animationDelay: `${i * 70}ms` }}><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_12px_rgba(22,220,197,.9)]" /><span className="text-sm font-semibold text-white/85">{specialty}</span></div>)}</div></div></div></div></div></section>

    <section id="services" className="reveal-on-scroll py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-xs font-bold tracking-[.24em] text-teal-600">{t.servicesLabel}</p><div className="mt-5 grid items-end gap-6 lg:grid-cols-2"><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.servicesTitle}</h2><p className="max-w-xl leading-7 text-ink/60 lg:justify-self-end">{t.serviceNote}</p></div><div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{t.services.map((service, i) => { const Icon = icons[i]; return <article key={service[0]} className="service-reveal group rounded-3xl border border-navy/10 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan hover:shadow-soft"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/15 text-teal-700 transition group-hover:bg-cyan"><Icon size={23} /></div><span className="mt-9 block text-sm font-bold text-navy/35">0{i + 1}</span><h3 className="mt-3 text-xl font-bold leading-tight">{service[0]}</h3><p className="mt-4 text-sm leading-7 text-ink/65">{service[1]}</p></article>; })}</div></div></section>

    <section className="reveal-on-scroll border-y border-navy/10 bg-mist py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-xs font-bold tracking-[.24em] text-teal-600">{t.processLabel}</p><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">{t.processTitle}</h2><div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{t.process.map((step, i) => <article key={step[0]} className="relative border-l border-navy/15 pl-6"><span className="text-sm font-bold text-teal-600">0{i + 1}</span><h3 className="mt-4 text-xl font-bold">{step[0]}</h3><p className="mt-3 leading-7 text-ink/60">{step[1]}</p></article>)}</div></div></section>

    <section className="reveal-on-scroll bg-white py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-xs font-bold tracking-[.24em] text-teal-600">{t.commitmentLabel}</p><h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{t.commitmentTitle}</h2><div className="mt-14 grid gap-5 md:grid-cols-2">{t.commitments.map((item, i) => <article key={item[0]} className="commitment-card rounded-3xl border border-navy/10 bg-mist p-8 sm:p-10"><span className="text-sm font-bold text-teal-600">0{i + 1}</span><h3 className="mt-5 text-2xl font-bold">{item[0]}</h3><p className="mt-4 text-lg leading-8 text-ink/65">{item[1]}</p></article>)}</div></div></section>

    <section id="contact" className="reveal-on-scroll bg-navy py-24 text-white sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-bold tracking-[.24em] text-cyan">{t.contactLabel}</p><h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">{t.contact}</h2><div className="mt-10 grid gap-4 text-sm text-white/70"><a href="tel:+886277354467" className="flex items-center gap-3 transition hover:text-cyan"><Phone size={18} className="text-cyan" />+886-2-7735-4467</a><a href="mailto:HR@talentnexus.com.tw" className="flex items-center gap-3 transition hover:text-cyan"><Mail size={18} className="text-cyan" />HR@talentnexus.com.tw</a><a href="https://talentnexus.com.tw" className="flex items-center gap-3 transition hover:text-cyan"><Globe size={18} className="text-cyan" />talentnexus.com.tw</a><address className="flex max-w-md items-start gap-3 not-italic leading-6"><MapPin size={18} className="mt-0.5 shrink-0 text-cyan" />11F., No. 335, Ruiguang Rd., Neihu Dist., Taipei City</address></div></div><form name="contact" method="POST" data-netlify="true" onSubmit={submit} className="grid gap-5"><input type="hidden" name="form-name" value="contact" />{t.fields.slice(0,3).map((field, i) => <label key={field} className="text-sm text-white/60">{field}<input required name={["name","email","company"][i]} type={i === 1 ? "email" : "text"} className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan" /></label>)}<label className="text-sm text-white/60">{t.fields[3]}<textarea required name="message" rows={4} className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan" /></label><button className="shine-button mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-4 font-bold text-navy transition hover:bg-white">{t.submit}<ArrowRight size={18} /></button>{sent && <p className="text-center text-sm text-cyan" role="status">{t.sent}</p>}</form></div></section>

    <footer className="bg-[#07162a] py-8 text-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 text-center text-sm text-white/50 sm:flex-row sm:text-left lg:px-8"><div className="flex min-w-0 flex-col items-center gap-2 sm:flex-row sm:gap-4"><Image src="/logo.png" alt={t.brandName} width={160} height={107} className="block h-16 w-auto object-contain dark:hidden" /><Image src="/logo-dark.png" alt={t.brandName} width={160} height={107} className="hidden h-16 w-auto object-contain dark:block" /><div><p className="break-words font-semibold text-white/85">{t.brandName}</p><span>{t.footer}</span></div></div><div className="flex min-w-0 max-w-full flex-col gap-1 break-words sm:items-end"><span className="font-semibold text-white/85">Talent Nexus Taiwan｜英鏈人才顧問有限公司</span><a href="mailto:HR@talentnexus.com.tw" className="transition hover:text-cyan">HR@talentnexus.com.tw</a><span>© {new Date().getFullYear()} Talent Nexus Taiwan｜英鏈人才顧問有限公司. All rights reserved.</span></div></div></footer>
  </main>;
}
