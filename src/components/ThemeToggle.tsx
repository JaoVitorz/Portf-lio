"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    setTheme(saved === "light" || saved === "dark" ? saved : preferred);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
    setTheme(next);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={`Ativar tema ${theme === "dark" ? "claro" : "escuro"}`}
      title={`Ativar tema ${theme === "dark" ? "claro" : "escuro"}`}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <path d="M20.8 14.4A9 9 0 0 1 9.6 3.2 9 9 0 1 0 20.8 14.4Z" />
        </svg>
      )}
    </button>
  );
}
