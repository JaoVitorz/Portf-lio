export function ProjectVisual({ variant = "pet" }: { variant?: "pet" | "study" | "mobile" }) {
  if (variant === "study") {
    return (
      <div className="project-visual project-visual-study" aria-hidden="true">
        <div className="visual-topline"><span>STUDY ORGANIZER</span><span>PY / 02</span></div>
        <div className="study-window">
          <div className="window-bar"><i /><i /><i /><span>organizer / estudo</span></div>
          <div className="study-interface"><span className="study-sidebar" /><div className="study-lines"><b /><b /><b /><b /></div></div>
        </div>
        <div className="visual-bottomline">CLI → WEB → DESKTOP</div>
      </div>
    );
  }
  if (variant === "mobile") {
    return (
      <div className="project-visual project-visual-mobile" aria-hidden="true">
        <div className="visual-topline"><span>PET JOYFUL / MOBILE</span><span>03</span></div>
        <div className="phone"><div className="phone-notch" /><div className="phone-logo">PJ.</div><span className="phone-line" /><span className="phone-line short" /><div className="phone-button" /></div>
        <div className="visual-bottomline">REACT NATIVE · EXPO</div>
      </div>
    );
  }
  return (
    <div className="project-visual project-visual-pet" aria-hidden="true">
      <div className="visual-topline"><span>PROJETO INTEGRADOR</span><span>01 / 03</span></div>
      <div className="pet-visual-main"><span className="pet-visual-small">UMA REDE PARA<br />CONEXÕES REAIS</span><span className="pet-visual-word">pet<br /><em>joyful</em><span className="visual-period">.</span></span></div>
      <div className="visual-bottomline">WEB — API — MOBILE</div>
    </div>
  );
}
