import { BrowserMockup } from "./BrowserMockup";

export function ProjectVisual({ variant = "pet" }: { variant?: "pet" | "mobile" }) {
  if (variant === "mobile") {
    return (
      <div className="project-visual project-visual-mobile">
        <div className="visual-topline"><span>PET JOYFUL / MOBILE</span><span>02</span></div>
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
