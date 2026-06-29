"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, BrainCircuit, Check, Menu, Search, Target, X } from "lucide-react";

type Language = "en" | "tw";

const copy = {
  en: {
    nav: ["About", "Services", "Contact"],
    eyebrow: "Precision in professional placement",
    headline: "We Don't Fill Vacancies. We Engineer Market Leaders.",
    sub: "Driven by intelligence and precision. We deliver pragmatic talent solutions for tech, semiconductors, and diverse industries.",
    primary: "Partner With Us",
    secondary: "Talent Submission",
    aboutLabel: "About Us",
    aboutTitle: "Focused search.\nPractical outcomes.",
    about: "Talent Nexus is an agile executive search firm. While rooted in the tech and semiconductor sectors, our expertise spans across diverse industries. We cut through the noise, focusing purely on precise talent matching and pragmatic solutions.",
    servicesLabel: "Our Services",
    servicesTitle: "Built for critical hiring.",
    servicesIntro: "Focused expertise where precision, context, and speed matter most.",
    services: [
      ["Executive Search", "Targeted sourcing for C-level and management roles across various sectors."],
      ["Strategic Talent Sourcing", "Deep-dive recruitment for critical hardware, software, and cross-disciplinary professionals."],
      ["AI Intelligence Recruiting", "Leveraging proprietary internal systems to maximize efficiency, leaving more time for genuine human connections."],
    ],
    contactLabel: "Contact",
    contactTitle: "Let's build your next leading team. Reach out to us today.",
    form: ["Name", "Email", "Company", "Tell us what you need"],
    submit: "Send inquiry",
    sending: "Sending...",
    success: "Thank you. We'll be in touch shortly.",
    error: "Something went wrong. Please try again.",
    footer: "Pragmatic talent solutions, built with precision.",
  },
  tw: {
    nav: ["關於我們", "專業服務", "聯絡我們"],
    eyebrow: "Precision in professional placement",
    headline: "We Don't Fill Vacancies. We Engineer Market Leaders.",
    sub: "以數據與 AI 驅動，為科技、半導體及多元產業提供最務實的人才解方。",
    primary: "合作洽談",
    secondary: "人才推薦",
    aboutLabel: "關於我們",
    aboutTitle: "精準搜尋。\n務實成果。",
    about: "Talent Nexus 是一間講求敏捷與實效的新創招募顧問公司。我們以科技與半導體領域為基石，同時將招募專業延伸至多元產業。我們拒絕空泛的行銷辭藻，專注於精準的供需匹配，用執行力證明價值。",
    servicesLabel: "專業服務",
    servicesTitle: "為關鍵招募而生。",
    servicesIntro: "在精準度、產業脈絡與速度最重要的地方，提供聚焦的招募專業。",
    services: [
      ["高階獵頭服務", "針對各產業 C-Level 與高階管理人才的精準獵才。"],
      ["關鍵人才招募", "針對硬體、軟體與跨領域核心專業人才的深度挖掘。"],
      ["AI 情報招募", "運用專屬系統提高作業效率，將時間留給真正的人才交流。"],
    ],
    contactLabel: "聯絡我們",
    contactTitle: "準備好建立市場領先團隊了嗎？立即與我們聯繫。",
    form: ["姓名", "Email", "公司名稱", "需求描述"],
    submit: "送出需求",
    sending: "送出中...",
    success: "感謝您的聯繫，我們將儘快與您聯絡。",
    error: "送出時發生問題，請稍後再試。",
    footer: "以精準方法，提供務實的人才解方。",
  },
};

const serviceIcons = [Target, Search, BrainCircuit];

export default function TalentNexusSite() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh-Hant";
  }, [language]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_API || "/api/contact";
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const go = (id: string) => { document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <main className="overflow-hidden bg-white text-navy">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-xl">
        <div className="shell flex h-20 items-center justify-between">
          <button onClick={() => go("#top")} aria-label="Home" className="relative h-11 w-[118px] overflow-hidden rounded-sm bg-black">
            <Image src="/talent-nexus-logo.png" alt="Talent Nexus" fill priority className="object-contain" />
          </button>
          <nav className="hidden items-center gap-9 md:flex">
            {t.nav.map((item, index) => <button key={item} onClick={() => go(["#about", "#services", "#contact"][index])} className="nav-link">{item}</button>)}
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </nav>
          <button aria-label="Open menu" onClick={() => setMenuOpen(true)} className="rounded-full border border-navy/15 p-2.5 md:hidden"><Menu size={20} /></button>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-[60] bg-navy p-6 text-white md:hidden">
        <div className="flex items-center justify-between"><span className="text-sm font-bold">Talent Nexus</span><button aria-label="Close menu" onClick={() => setMenuOpen(false)}><X /></button></div>
        <nav className="mt-24 flex flex-col gap-8 text-4xl font-semibold">
          {t.nav.map((item, index) => <button key={item} onClick={() => go(["#about", "#services", "#contact"][index])} className="text-left">{item}</button>)}
        </nav>
        <div className="mt-14"><LanguageToggle language={language} setLanguage={setLanguage} dark /></div>
      </div>}

      <section id="top" className="relative flex min-h-screen items-center pt-20">
        <div className="hero-grid absolute inset-0" />
        <div className="glow absolute -right-32 top-24 h-[480px] w-[480px] rounded-full" />
        <div className="shell relative py-24 lg:py-32">
          <div className="max-w-5xl fade-up">
            <p className="eyebrow"><span />{t.eyebrow}</p>
            <h1 className="mt-7 max-w-5xl text-[clamp(3rem,7.2vw,7rem)] font-semibold leading-[0.98] tracking-[-0.065em]">{t.headline}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate md:text-xl">{t.sub}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => go("#contact")} className="cta-primary">{t.primary}<ArrowRight size={18} /></button>
              <button onClick={() => go("#contact")} className="cta-secondary">{t.secondary}</button>
            </div>
          </div>
          <div className="mt-20 flex items-center gap-5 text-xs font-bold uppercase tracking-[.18em] text-slate"><span className="h-px w-16 bg-cyan" /> Tech · Semiconductor · Diverse industries</div>
        </div>
      </section>

      <section id="about" className="section bg-mist">
        <div className="shell grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div className="reveal"><p className="section-label">01 / {t.aboutLabel}</p><h2 className="section-title whitespace-pre-line">{t.aboutTitle}</h2></div>
          <div className="reveal lg:pt-12"><p className="text-xl leading-[1.75] text-slate md:text-2xl">{t.about}</p><div className="mt-12 grid grid-cols-3 border-t border-navy/15 pt-7 text-sm font-semibold"><span>Agile</span><span>Precise</span><span>Pragmatic</span></div></div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="shell">
          <div className="reveal grid gap-6 lg:grid-cols-2"><div><p className="section-label">02 / {t.servicesLabel}</p><h2 className="section-title">{t.servicesTitle}</h2></div><p className="max-w-lg self-end text-lg leading-8 text-slate lg:justify-self-end">{t.servicesIntro}</p></div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 lg:grid-cols-3">
            {t.services.map(([title, body], index) => { const Icon = serviceIcons[index]; return <article key={title} className="service-card reveal bg-white p-8 md:p-10"><div className="mb-20 flex items-start justify-between"><span className="icon-box"><Icon size={22} /></span><span className="text-xs font-bold text-slate">0{index + 1}</span></div><h3 className="text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-4 leading-7 text-slate">{body}</p><div className="mt-8 h-1 w-10 bg-cyan transition-all duration-300 group-hover:w-20" /></article> })}
          </div>
        </div>
      </section>

      <section id="contact" className="section relative bg-navy text-white">
        <div className="contact-grid absolute inset-0" />
        <div className="shell relative grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div className="reveal"><p className="section-label text-cyan">03 / {t.contactLabel}</p><h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-.04em] md:text-6xl">{t.contactTitle}</h2></div>
          <form onSubmit={handleSubmit} className="reveal rounded-2xl bg-white p-6 text-navy shadow-2xl md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field name="name" label={t.form[0]} /> <Field name="email" label={t.form[1]} type="email" /> <Field name="company" label={t.form[2]} />
              <label className="sm:col-span-2"><span className="field-label">{t.form[3]}</span><textarea name="message" required rows={4} className="field resize-none" /></label>
            </div>
            <button disabled={status === "sending"} className="cta-primary mt-7 w-full justify-center">{status === "sending" ? t.sending : t.submit}<ArrowRight size={18} /></button>
            {status === "success" && <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-700"><Check size={17} />{t.success}</p>}
            {status === "error" && <p className="mt-4 text-sm font-semibold text-red-600">{t.error}</p>}
          </form>
        </div>
      </section>

      <footer className="bg-[#07192f] py-10 text-white/60"><div className="shell flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between"><span className="font-bold text-white">Talent Nexus</span><span>{t.footer}</span><span>© {new Date().getFullYear()} Talent Nexus</span></div></footer>
    </main>
  );
}

function LanguageToggle({ language, setLanguage, dark = false }: { language: Language; setLanguage: (language: Language) => void; dark?: boolean }) {
  return <div className={`inline-flex rounded-full border p-1 text-xs font-bold ${dark ? "border-white/20" : "border-navy/15"}`}><button onClick={() => setLanguage("en")} className={`rounded-full px-3 py-2 transition ${language === "en" ? "bg-cyan text-navy" : "opacity-55"}`}>EN</button><button onClick={() => setLanguage("tw")} className={`rounded-full px-3 py-2 transition ${language === "tw" ? "bg-cyan text-navy" : "opacity-55"}`}>繁中</button></div>;
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return <label className={name === "company" ? "sm:col-span-2" : ""}><span className="field-label">{label}</span><input name={name} type={type} required className="field" /></label>;
}
