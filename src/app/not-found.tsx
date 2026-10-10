import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo" className="container not-found page-enter">
      <span className="mono-label">ERRO / 404</span>
      <h1>Página não encontrada<span className="title-period">.</span></h1>
      <p>O endereço pode ter mudado. Volte ao início para continuar explorando.</p>
      <Link className="button button-primary" href="/">Voltar ao início <span aria-hidden="true">→</span></Link>
    </main>
  );
}
