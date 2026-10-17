import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCarousel } from "@/components/ToolCarousel";
import { profile } from "@/data/profile";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className="arrow-icon" aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function CertificationItem({ certification }: { certification: (typeof profile.certifications)[number] }) {
  return (
    <li className="certification-item">
      <div>
        <h4>{certification.title}</h4>
        <p>{certification.issuer || "Instituição não informada"}</p>
        {certification.credentialId && <span className="certification-code">Credencial: {certification.credentialId}</span>}
      </div>
      <div className="certification-meta">
        {certification.issued && <span>Emissão: {certification.issued}</span>}
        {certification.expires && <span>Validade encerrada: {certification.expires}</span>}
        {certification.credentialUrl && <a className="text-link" href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">Ver credencial <Arrow diagonal /></a>}
      </div>
    </li>
  );
}

export default function Home() {
  const recentCertifications = profile.certifications.filter((certification) => certification.group === "recent");
  const additionalCertifications = profile.certifications.filter((certification) => certification.group === "additional");

  return (
    <main id="conteudo" className="page-enter">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-eyebrow hero-line"><span className="eyebrow-dot" /> PORTFÓLIO / QA + FULL STACK <span className="hero-index">BRASIL</span></div>
          <h1 id="hero-title" className="hero-title hero-line"><span>{profile.firstName}<span className="title-period">.</span></span><small>{profile.lastName}</small></h1>
          <p className="hero-role hero-line">{profile.role} <span className="role-slash">/</span> Desenvolvedor Full Stack</p>
          <p className="hero-position hero-line">{profile.positioning}</p>
          <div className="hero-actions hero-line">
            <Link className="button button-primary" href="/#sobre">Ler perfil <Arrow /></Link>
            <Link className="button button-secondary" href="/#projetos">Ver projetos <Arrow /></Link>
            <a className="button button-secondary" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
            {profile.links.linkedIn ? (
              <a className="button button-secondary" href={profile.links.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>
            ) : (
              <span className="button button-disabled" aria-disabled="true" title="Adicione o link no profile.ts">LinkedIn <span className="button-pending">[www.linkedin.com/in/joão-santos-jesus]</span></span>
            )}
            {/* {profile.resume ? (
              <a className="button button-text" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${profile.resume}`} download>Baixar currículo <Arrow diagonal /></a>
            ) : (
              <span className="button button-text button-disabled" aria-disabled="true" title="Adicione o PDF no profile.ts">Baixar currículo <span className="button-pending">[PREENCHER PDF]</span></span>
            )} */}
          </div>
        </div>
        <div className={`hero-art hero-line${profile.photo ? " has-photo" : ""}`}>
          {profile.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${profile.photo}`} alt={`Retrato de ${profile.firstName}`} className="hero-photo" />
          ) : (
            <div className="portrait-placeholder">
              <div className="portrait-monogram" aria-hidden="true">J<span>.</span></div>
              <div className="portrait-caption"><span>RETRATO / 01</span><Placeholder>[PREENCHER foto]</Placeholder></div>
            </div>
          )}
         
        </div>
        <div className="hero-foot"><span>DESÇA PARA EXPLORAR</span><span aria-hidden="true">↓</span></div>
      </section>

      <section className="section section-about" id="sobre" aria-labelledby="sobre-title">
        <div className="container">
          <Reveal><SectionHeading number="01" eyebrow="QUEM SOU E O QUE FAÇO" title="Perfil profissional." description="Da operação industrial à qualidade de software, com formação e prática em desenvolvimento de aplicações." id="sobre-title" /></Reveal>
          <div className="about-grid">
            <Reveal className="about-aside" delay={80}>
              <span className="mono-label">RESUMO PROFISSIONAL</span>
              <p>{profile.summary}</p>
              <span className="about-aside-line" />
              <div className="about-facts"><span>{profile.location}</span>{profile.languages.map((language) => <span key={language}>{language}</span>)}</div>
            </Reveal>
            <div className="about-text">
              {profile.about.map((item, index) => <Reveal className="about-entry" key={item.title} delay={index * 80}><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-skills" id="skills" aria-labelledby="skills-title">
        <ToolCarousel groups={profile.skillGroups} name={profile.name} />
        <div className="container skills-details-wrap">
          <details className="skills-details">
            <summary>Todas as competências <span aria-hidden="true">+</span></summary>
            <div className="skills-grid">
              {profile.skills.map((skill, index) => (
                <Reveal key={skill.group} className="skill-card" delay={index * 70}>
                  <div className="skill-top"><span className="skill-index">0{index + 1}</span><h3>{skill.group}</h3></div>
                  <div className="skill-list">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
                </Reveal>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section className="section section-projects" id="projetos" aria-labelledby="projetos-title">
        <div className="container">
          <Reveal><SectionHeading number="03" eyebrow="TRABALHO SELECIONADO" title="Projetos em foco." description="Aplicações construídas com olhar para experiência, arquitetura e qualidade." id="projetos-title" /></Reveal>
          <Reveal className="featured-project">
            <div className="featured-content">
              <span className="mono-label">{profile.featured.eyebrow}</span>
              <div><span className="featured-number">01 / 03</span><h3>{profile.featured.title}<span className="title-period">.</span></h3><p>{profile.featured.description}</p></div>
              <div className="featured-bottom"><div className="tag-list">{profile.featured.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="featured-links"><Link className="text-link" href="/projetos/pet-joyful/">Explorar estudo de caso <Arrow /></Link><a className="text-link" href={profile.petJoyful.webDemo} target="_blank" rel="noopener noreferrer">Abrir projeto publicado <Arrow /></a></div></div>
            </div>
            <ProjectVisual />
          </Reveal>
          <p className="visual-disclaimer">Capturas reais do Pet Joyful Web e Mobile. O Study Organizer usa uma ilustração.</p>
          <div className="other-projects">
            {profile.projects.map((project, index) => (
              <Reveal key={project.title} className="project-card" delay={index * 80}>
                <ProjectVisual variant={index === 0 ? "study" : "mobile"} />
                <div className="project-card-content"><div className="project-card-meta"><span>{project.number} / 03</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.href && <Link className="text-link" href={project.href}>Ler no estudo de caso <Arrow /></Link>}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-quality" id="qualidade" aria-labelledby="qualidade-title">
        <div className="container">
          <Reveal><SectionHeading number="04" eyebrow="QUALIDADE & TESTES" title="A qualidade faz parte da construção." description={profile.quality.introduction} id="qualidade-title" /></Reveal>
          <div className="quality-grid">
            <div className="metric-grid">{profile.quality.metrics.map((metric, index) => <Reveal key={metric.label} className="metric" delay={index * 70}><strong>{metric.value}</strong><span>{metric.label}</span></Reveal>)}</div>
            <Reveal className="quality-practices" delay={100}><span className="mono-label">COMO EU TESTO</span><ul>{profile.quality.practices.map((practice) => <li key={practice}>{practice}</li>)}</ul><p className="quality-note">{profile.quality.note}</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section section-timeline" id="trajetoria" aria-labelledby="trajetoria-title">
        <div className="container">
          <Reveal><SectionHeading number="05" eyebrow="CURRÍCULO" title="Experiência e formação." description="Os principais passos da minha trajetória profissional e acadêmica." id="trajetoria-title" /></Reveal>
          <div className="timeline">{profile.timeline.map((entry, index) => <Reveal className="timeline-item" key={entry.title} delay={index * 70}><div className="timeline-marker" aria-hidden="true" /><span className="timeline-period">{entry.period}</span><div className="timeline-content"><span className="mono-label">{entry.type}</span><h3>{entry.title}</h3><p className="timeline-place">{entry.place}</p><p>{entry.description}</p></div></Reveal>)}</div>
          {profile.certifications.length > 0 && (
            <div className="certifications" aria-labelledby="certificacoes-title">
              <div className="certifications-heading">
                <h3 id="certificacoes-title">Licenças e certificações</h3>
                {profile.links.linkedIn && <a className="text-link" href={profile.links.linkedIn} target="_blank" rel="noopener noreferrer">Ver perfil no LinkedIn <Arrow diagonal /></a>}
              </div>
              <p className="certifications-intro">Cursos e certificações relacionados à minha atuação em qualidade, desenvolvimento e segurança da informação.</p>
              <ul className="certifications-list">{recentCertifications.map((certification) => <CertificationItem key={certification.title} certification={certification} />)}</ul>
              {additionalCertifications.length > 0 && (
                <details className="certifications-archive">
                  <summary>Outras certificações e cursos <span>{additionalCertifications.length} itens <span aria-hidden="true">+</span></span></summary>
                  <ul className="certifications-list">{additionalCertifications.map((certification) => <CertificationItem key={certification.title} certification={certification} />)}</ul>
                </details>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section section-contact" id="contato" aria-labelledby="contato-title">
        <div className="container">
          <Reveal className="contact-panel"><div><div className="section-meta"><span>06</span><span className="meta-rule" /><span>CONTATO</span></div><h2 id="contato-title">{profile.contact.title}</h2><p>{profile.contact.description}</p></div><div className="contact-actions">{profile.links.email ? <a className="button button-primary" href={`mailto:${profile.links.email}`}>Enviar e-mail <Arrow diagonal /></a> : <span className="button button-primary button-disabled" aria-disabled="true">Enviar e-mail <span className="button-pending">[jv.jvsantos45@gmail.com]</span></span>}<a className="text-link" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a><a className="text-link" href={profile.links.dockerHub} target="_blank" rel="noopener noreferrer">Docker Hub <Arrow diagonal /></a>{profile.links.linkedIn ? <a className="text-link" href={profile.links.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a> : <Placeholder>www.linkedin.com/in/joão-santos-jesus</Placeholder>}</div></Reveal>
        </div>
      </section>
    </main>
  );
}
