type BrowserMockupProps = {
  className?: string;
  label: string;
  src: string;
  alt: string;
  url: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

export function BrowserMockup({ className = "", label, src, alt, url }: BrowserMockupProps) {
  return (
    <figure className={`browser-mockup ${className}`}>
      <div className="browser-mockup-bar" aria-hidden="true">
        <span className="browser-mockup-controls"><i /><i /><i /></span>
        <span className="browser-mockup-address">{url}</span>
        <span className="browser-mockup-menu">•••</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${basePath}${src}`} alt={alt} loading="lazy" width="1440" height="1000" />
      <figcaption>{label}</figcaption>
    </figure>
  );
}
