import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body" });
const interTight = Inter_Tight({ subsets: ["latin"], display: "swap", variable: "--font-heading" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-code" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";
const description = `${profile.role} em Votorantim, SP. ${profile.positioning}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} | QA & Desenvolvimento`, template: `%s | ${profile.name}` },
  description,
  applicationName: "Portfólio de João",
  alternates: { canonical: `${basePath}/` },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Portfólio de João",
    title: `${profile.name} | QA & Desenvolvimento`,
    description,
    url: `${basePath}/`,
    images: [{ url: `${basePath}/og-image.svg`, width: 1200, height: 630, alt: "João — QA e Desenvolvimento" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: `${basePath}/favicon.svg` },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "dark light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>
        <div className="site-texture" aria-hidden="true" style={{ backgroundImage: `url("${basePath}/fabric-of-squares.png")` }} />
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
