"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Ferramentas", href: "/#skills" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Qualidade", href: "/#qualidade" },
  { label: "Trajetória", href: "/#trajetoria" },
  { label: "Contato", href: "/#contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setMenuOpen(false)} aria-label="João, voltar para o início">
          <span className="brand-mark">J.</span>
          <span className="brand-descriptor">QA <span aria-hidden="true">/</span> DEV</span>
        </Link>
        <nav className={`header-nav${menuOpen ? " is-open" : ""}`} aria-label="Navegação principal" id="primary-nav">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-controls="primary-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
