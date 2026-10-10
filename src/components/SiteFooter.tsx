import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link className="footer-brand" href="/">João<span className="footer-dot">.</span></Link>
          <p>Qualidade e desenvolvimento, com atenção aos detalhes.</p>
        </div>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.links.dockerHub} target="_blank" rel="noopener noreferrer">Docker Hub</a>
          <Link href="/#contato">Contato</Link>
        </div>
        <span className="footer-caption">Votorantim, SP · Brasil</span>
      </div>
    </footer>
  );
}
