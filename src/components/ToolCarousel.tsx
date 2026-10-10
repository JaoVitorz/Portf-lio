"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type Tool = {
  name: string;
  group: string;
  description: string;
  icon: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ToolCarousel({ items }: { items: readonly Tool[] }) {
  const rootRef = useRef<HTMLElement>(null);
  const cursorRef = useRef(0);
  const movingRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [mobile, setMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [cursor, setCursor] = useState(0);
  const [shown, setShown] = useState(() => items.slice(0, 3).map((_, index) => index));
  const count = Math.min(mobile ? 1 : 3, items.length);

  useEffect(() => {
    const width = window.matchMedia("(max-width: 720px)");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateWidth = () => setMobile(width.matches);
    const updateMotion = () => setReducedMotion(motionPreference.matches);
    updateWidth();
    updateMotion();
    width.addEventListener("change", updateWidth);
    motionPreference.addEventListener("change", updateMotion);
    return () => {
      width.removeEventListener("change", updateWidth);
      motionPreference.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    movingRef.current = false;
    const aligned = Math.floor(cursorRef.current / Math.max(1, count)) * Math.max(1, count);
    cursorRef.current = aligned;
    setCursor(aligned);
    setShown(Array.from({ length: count }, (_, index) => (aligned + index) % items.length));
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [count, items.length]);

  const move = useCallback((direction: number) => {
    if (movingRef.current || items.length <= count || count === 0) return;
    movingRef.current = true;
    const next = (cursorRef.current + direction * count + items.length) % items.length;
    cursorRef.current = next;
    setCursor(next);

    if (reducedMotion) {
      setShown(Array.from({ length: count }, (_, index) => (next + index) % items.length));
      movingRef.current = false;
      return;
    }

    Array.from({ length: count }, (_, slot) => {
      const timer = setTimeout(() => {
        setShown((current) => current.map((value, index) => index === slot ? (next + slot) % items.length : value));
      }, slot * 180);
      timersRef.current.push(timer);
    });
    timersRef.current.push(setTimeout(() => { movingRef.current = false; }, (count - 1) * 180 + 650));
  }, [count, items.length, reducedMotion]);

  useEffect(() => {
    if (!visible || paused || hovered || focused || reducedMotion || items.length <= count) return;
    const timer = setInterval(() => move(1), 4800);
    return () => clearInterval(timer);
  }, [visible, paused, hovered, focused, reducedMotion, items.length, count, move]);

  if (!items.length) return null;

  const page = Math.floor(cursor / count) + 1;
  const pages = Math.ceil(items.length / count);
  const begin = String(cursor + 1).padStart(2, "0");
  const end = String(Math.min(cursor + count, items.length)).padStart(2, "0");

  return (
    <section
      ref={rootRef}
      className="tool-carousel"
      aria-label="Ferramentas em destaque"
      aria-roledescription="carrossel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          setPaused(true);
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div className="tool-carousel-heading">
        <div>
          <span className="mono-label">FERRAMENTAS EM DESTAQUE / 01—{String(items.length).padStart(2, "0")}</span>
          <h3>O que uso para <span>construir e testar.</span></h3>
        </div>
        <p>Uma seleção das ferramentas que acompanham meu trabalho, da interface à qualidade do software.</p>
      </div>

      <div className="tool-carousel-slots" aria-live={paused ? "polite" : "off"}>
        {Array.from({ length: count }, (_, slot) => {
          const item = items[shown[slot] ?? slot];
          return (
            <div className="tool-carousel-slot" key={slot}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={item.name}
                  className="tool-carousel-card"
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, filter: "blur(5px)" }}
                  animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: reducedMotion ? 0.14 : 0.35, ease: EASE }}
                  whileHover={reducedMotion ? undefined : { y: -2 }}
                >
                  <div className="tool-carousel-card-top">
                    <span>{String((shown[slot] ?? slot) + 1).padStart(2, "0")} / {item.group}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <div className="tool-carousel-icon">
                    {/* Brand SVGs keep their original colors. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.icon}`} alt="" width="42" height="42" className={item.name === "Next.js" ? "tool-carousel-logo-next" : undefined} />
                  </div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </motion.article>
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="tool-carousel-controls">
        <span className="tool-carousel-counter">{begin}{count > 1 ? `–${end}` : ""} / {String(items.length).padStart(2, "0")}</span>
        <div className="tool-carousel-progress" aria-hidden="true"><span style={{ width: `${(page / pages) * 100}%` }} /></div>
        <div className="tool-carousel-buttons">
          <button type="button" aria-label="Ferramentas anteriores" onClick={() => { setPaused(true); move(-1); }}>←</button>
          <button type="button" className="is-primary" aria-label="Próximas ferramentas" onClick={() => { setPaused(true); move(1); }}>→</button>
        </div>
        {!reducedMotion && <button type="button" className="tool-carousel-play" aria-label={paused ? "Retomar rotação automática" : "Pausar rotação automática"} onClick={() => setPaused((value) => !value)}>{paused ? "Reproduzir" : "Pausar"}</button>}
      </div>
    </section>
  );
}
