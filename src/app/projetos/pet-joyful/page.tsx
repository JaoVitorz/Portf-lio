import type { Metadata } from "next";
import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { ScreenshotSlot } from "@/components/ScreenshotSlot";
import { profile } from "@/data/profile";

const data = profile.petJoyful;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

export const metadata: Metadata = {
  title: "Pet Joyful — Estudo de caso",
  description: data.lead,
  alternates: { canonical: `${basePath}/projetos/pet-joyful/` },
  openGraph: {
    title: `Pet Joyful — Estudo de caso | ${profile.name}`,
    description: data.lead,
    url: `${basePath}/projetos/pet-joyful/`,
    images: [{ url: `${basePath}/og-image.svg`, width: 1200, height: 630, alt: "Pet Joyful — estudo de caso" }],
  },
};

function CaseSection({ number, label, title, children, id }: { number: string; label: string; title: string; children: React.ReactNode; id?: string }) {
  return (
    <section className="case-section" id={id} aria-labelledby={`case-title-${number}`}>
      <div className="container case-section-grid">
        <Reveal className="case-section-label"><span>{number} / {label}</span></Reveal>
        <Reveal className="case-section-body"><h2 id={`case-title-${number}`}>{title}</h2>{children}</Reveal>
      </div>
    </section>
  );
}

export default function PetJoyfulPage() {
  return (
    <main id="conteudo" className="page-enter case-page">
      <section className="case-hero container" aria-labelledby="case-title">
        <Link className="case-back" href="/#projetos"><span aria-hidden="true">←</span> Voltar aos projetos</Link>
        <div className="case-hero-main"><span className="mono-label">{data.kicker}</span><h1 id="case-title">Pet<br /><em>Joyful</em><span className="title-period">.</span></h1><p>{data.lead}</p></div>
        <div className="case-overview">{data.overview.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>
      </section>

      <div className="case-cover" aria-hidden="true"><div className="container case-cover-inner"><span>CONEXÕES QUE<br />TRANSFORMAM</span><span className="case-cover-mark">PJ<span>.</span></span><span>WEB / API / MOBILE<br />05 SEMESTRES</span></div></div>

      <CaseSection number="01" label="ORIGEM" title="Contexto"><p>{data.context}</p></CaseSection>
      <CaseSection number="02" label="DESAFIO" title="Problema"><p>{data.problem}</p></CaseSection>
      <CaseSection number="03" label="PRODUTO" title="Solução"><p>{data.solution}</p><div className="case-feature-list"><span>03 perfis de acesso</span><span>PetBot com RAG</span><span>Google Places API</span><span>Posts, mensagens e denúncias</span></div></CaseSection>
      <CaseSection number="04" label="ESTRUTURA" title="Arquitetura"><p>Uma plataforma distribuída entre interfaces web e mobile, API e banco de dados.</p><div className="architecture-grid">{data.architecture.map((item, index) => <div key={item.name}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.detail}</p></div>)}</div></CaseSection>
      <CaseSection number="05" label="CONTRIBUIÇÃO" title="Meu papel"><p>{data.role}</p></CaseSection>

      <section className="case-section case-section-wide" aria-labelledby="case-highlights-title"><div className="container"><Reveal><div className="case-wide-heading"><span className="mono-label">06 / ENGENHARIA</span><h2 id="case-highlights-title">Destaques técnicos<span className="title-period">.</span></h2></div></Reveal><div className="highlight-grid">{data.technicalHighlights.map((item, index) => <Reveal className="highlight-card" key={item.title} delay={index * 70}><span className="highlight-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div></div></section>

      <section className="case-section case-section-wide" aria-labelledby="case-security-title"><div className="container"><Reveal><div className="case-wide-heading"><span className="mono-label">07 / SEGURANÇA</span><h2 id="case-security-title">Auditoria e roadmap<span className="title-period">.</span></h2><p>{data.security.intro}</p></div></Reveal><div className="security-grid"><Reveal className="security-panel"><span className="security-status">● IMPLEMENTADO</span><h3>Controles presentes</h3><ul>{data.security.implemented.map((item) => <li key={item}>{item}</li>)}</ul></Reveal><Reveal className="security-panel" delay={80}><span className="security-status">○ PLANEJADO</span><h3>Próximas fases</h3><ul>{data.security.roadmap.map((item) => <li key={item}>{item}</li>)}</ul><p className="security-note">Itens do roadmap ainda não entregues.</p></Reveal></div></div></section>

      <section className="case-section case-section-wide" aria-labelledby="case-debug-title"><div className="container"><Reveal><div className="case-wide-heading"><span className="mono-label">08 / DEBUGGING</span><h2 id="case-debug-title">Problemas reais, causas encontradas<span className="title-period">.</span></h2></div></Reveal><div className="debug-grid">{data.debugging.map((item, index) => <Reveal className="debug-card" key={item.title} delay={index * 70}><span className="debug-code">{item.code}</span><h3>{item.title}</h3><div><span>CAUSA</span><p>{item.cause}</p></div><div><span>RESOLUÇÃO</span><p>{item.resolution}</p></div></Reveal>)}</div></div></section>

      <CaseSection number="09" label="EVOLUÇÃO" title="Aprendizados"><p>{data.learnings}</p></CaseSection>
      <CaseSection number="10" label="FUTURO" title="Próximos passos"><p>{data.nextSteps}</p></CaseSection>

      <section className="case-section case-section-wide screenshot-section" aria-labelledby="screenshots-title"><div className="container"><Reveal><div className="case-wide-heading"><span className="mono-label">11 / GALERIA</span><h2 id="screenshots-title">Telas do projeto<span className="title-period">.</span></h2><p>Capturas da versão web publicada. A imagem do aplicativo mobile ainda será adicionada.</p></div></Reveal><div className="screenshot-grid">{data.screenshots.map((shot, index) => <Reveal key={shot.label} delay={index * 70}><ScreenshotSlot label={shot.label} src={shot.src} index={index} /></Reveal>)}</div></div></section>

      <section className="case-links-section"><div className="container"><Reveal><div className="case-wide-heading"><span className="mono-label">12 / LINKS</span><h2>Explore o código<span className="title-period">.</span></h2></div></Reveal><div className="case-links">{data.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"><span>{link.label}</span><span aria-hidden="true">↗</span></a>)}{data.webDemo ? <a href={data.webDemo} target="_blank" rel="noopener noreferrer"><span>Demo web</span><span aria-hidden="true">↗</span></a> : <div className="case-link-pending"><span>Demo web</span><Placeholder>[PREENCHER link]</Placeholder></div>}</div><Link href="/#projetos" className="case-end-link"><span aria-hidden="true">←</span> Voltar aos projetos</Link></div></section>
    </main>
  );
}
