import { BrowserMockup } from "./BrowserMockup";

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
      <div className="project-visual project-visual-mobile">
        <div className="visual-topline"><span>PET JOYFUL / MOBILE</span><span>03</span></div>
        <div className="mobile-screens">
          <div className="mobile-screen">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/projects/pet-joyful-mobile-home.png`} alt="Tela inicial do aplicativo Pet Joyful Mobile, com recursos da comunidade e feed" loading="lazy" width="403" height="880" />
          </div>
          <div className="mobile-screen mobile-screen-profile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/projects/pet-joyful-mobile-perfil.png`} alt="Tela de perfil do aplicativo Pet Joyful Mobile" loading="lazy" width="403" height="880" />
          </div>
        </div>
        <div className="visual-bottomline">CAPTURAS REAIS · REACT NATIVE / EXPO</div>
      </div>
    );
  }
  return (
    <div className="project-visual project-visual-pet">
      <div className="visual-topline"><span>PROJETO INTEGRADOR</span><span>WEB / PUBLICADO</span></div>
      <div className="pet-browser-layout">
        <BrowserMockup
          className="pet-browser-home"
          label="01 / PÁGINA INICIAL"
          src="/projects/pet-joyful-home.png"
          alt="Página inicial do Pet Joyful, com busca, apresentação da rede de adoção e recursos como chat IA e compatibilidade"
          url="pet-joyful-projeto-integrador-nextjs.onrender.com/Home"
        />
        <BrowserMockup
          className="pet-browser-profile"
          label="02 / PERFIL WEB"
          src="/projects/pet-joyful-web-perfil.png"
          alt="Perfil web do Pet Joyful com informações de Elton e publicações da comunidade"
          url="pet-joyful / perfil"
        />
      </div>
      <div className="visual-bottomline">CAPTURAS REAIS DA VERSÃO WEB</div>
    </div>
  );
}
