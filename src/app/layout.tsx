import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Configuração avançada de SEO e Open Graph
export const metadata: Metadata = {
  title: {
    default: "Leonardo Sabatini | Engenharia de Produto & Experiência",
    template: "%s | Leonardo Sabatini"
  },
  description: "Da infraestrutura de dados à microinteração da interface. Traduzo problemas complexos em soluções digitais rápidas, escaláveis e memoráveis.",
  keywords: [
    "Software Engineer Brazil", // Foco global/remoto
    "Remote Full-Stack Developer", // Foco global/remoto
    "Especialista em RPA",
    "Next.js",
    "React",
    "Supabase",
    "Engenharia de Software São Bernardo do Campo" // Mantém a autoridade local
  ],
  authors: [{ name: "Leonardo Sabatini", url: "https://leozinwf.space" }],
  creator: "Leonardo Sabatini",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://leozinwf.space",
    title: "Leonardo Sabatini | Engenharia de Produto",
    description: "Desenvolvimento de produtos digitais onde a performance encontra o design cinematográfico.",
    siteName: "Leonardo Sabatini",
    // O Next.js vai procurar automaticamente um arquivo opengraph-image.png na pasta app
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Sabatini | Engenharia de Produto",
    description: "Desenvolvimento de produtos digitais onde a performance encontra o design cinematográfico.",
    creator: "@leozinwf",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Leonardo Sabatini",
    "url": "https://leozinwf.space",
    "jobTitle": "Engenheiro de Software Full-Stack",
    "knowsAbout": ["Desenvolvimento Web", "React", "Next.js", "RPA", "Supabase", "Motion Design"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Bernardo do Campo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    }
  };

  return (
    <html lang="pt-BR" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Script de execução imediata: Lê o localStorage antes da renderização do React */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans relative min-h-screen bg-background overflow-x-hidden selection:bg-accent-blue/20`}>
        <div className="bg-noise"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-glow-gradient pointer-events-none -z-10"></div>
        
        <Navbar />

        <main className="container mx-auto px-4 md:px-8 pt-12">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}