const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

export function ScreenshotSlot({ label, src, index, format = "web" }: { label: string; src: string | null; index: number; format?: "web" | "mobile" }) {
  return (
    <figure className={`screenshot-frame${format === "mobile" ? " screenshot-frame-mobile" : ""}`}>
      <div className="screenshot-content">
        {src ? (
          // Caminhos locais são fornecidos pelo usuário em profile.ts.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`${basePath}${src}`} alt={`Captura de tela: ${label}`} loading="lazy" />
        ) : (
          <div className="screenshot-empty" role="img" aria-label={`Captura de tela pendente: ${label}`}>
            <span className="screenshot-cross" aria-hidden="true">+</span>
            <span>[PREENCHER screenshot]</span>
          </div>
        )}
      </div>
      <figcaption><span>0{index + 1} / {label}</span><span>Pet Joyful</span></figcaption>
    </figure>
  );
}
