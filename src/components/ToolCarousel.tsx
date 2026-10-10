"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type CSSProperties } from "react";

type Tool = { name: string; icon: string; darkLogo?: boolean };
type SkillGroup = {
  title: string;
  description: string;
  accent: string;
  tools: readonly Tool[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ToolCarousel({ groups, name }: { groups: readonly SkillGroup[]; name: string }) {
  const [active, setActive] = useState(Math.min(1, groups.length - 1));
  const [paused, setPaused] = useState(false);
  const [manual, setManual] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || groups.length < 2) return;
    const timer = setInterval(() => {
      setManual(false);
      setActive((index) => (index + 1) % groups.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [groups.length, paused]);

  if (!groups.length) return null;

  const group = groups[active];
  const select = (index: number) => {
    setManual(true);
    setActive((index + groups.length) % groups.length);
  };

  return (
    <div
      className="tool-carousel"
      role="region"
      aria-label="Áreas de atuação"
      aria-roledescription="carrossel"
      tabIndex={0}
      style={{ "--group-accent": group.accent } as CSSProperties}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          select(active + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <div className="tool-carousel-top">
        <span>{name.split(" ").slice(0, 2).join(" ").toUpperCase()} <i>/</i> PORTFÓLIO</span>
        <span>FERRAMENTAS &amp; PRÁTICAS</span>
      </div>

      <div className="tool-carousel-scene" aria-live={manual ? "polite" : "off"} aria-atomic="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={group.title}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: reducedMotion ? 0.14 : 0.42, ease: EASE }}
          >
            <div className="tool-carousel-intro">
              <span className="mono-label">ÁREAS DE ATUAÇÃO</span>
              <div className="tool-carousel-title-row">
                <div>
                  <h2 id="skills-title">{group.title}</h2>
                  <p>{group.description}</p>
                </div>
                <span className="tool-carousel-counter">{String(active + 1).padStart(2, "0")} / {String(groups.length).padStart(2, "0")}</span>
              </div>
            </div>

            <div className="tool-carousel-cards">
              {group.tools.map((tool, index) => (
                <motion.article
                  key={tool.name}
                  className="tool-carousel-card"
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reducedMotion ? 0.14 : 0.42, delay: reducedMotion ? 0 : index * 0.07, ease: EASE }}
                  whileHover={reducedMotion ? undefined : { y: -2 }}
                >
                  <div className={`tool-carousel-icon${tool.darkLogo ? " is-dark-logo" : ""}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${tool.icon}`} alt="" width="39" height="39" loading="lazy" />
                  </div>
                  <h3>{tool.name}</h3>
                  <span className="tool-carousel-card-label">TECNOLOGIA</span>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="tool-carousel-bottom">
        <div className="tool-carousel-bottom-label">
          <span>CINCO GRUPOS <i>/</i> UM FLUXO</span>
          <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Retomar transição automática" : "Pausar transição automática"}>{paused ? "REPRODUZIR" : "PAUSAR"}</button>
        </div>
        <div className="tool-carousel-pagination" aria-label="Selecionar área de atuação">
          {groups.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={index === active ? "is-active" : ""}
              aria-label={`${item.title}, grupo ${index + 1} de ${groups.length}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => select(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
