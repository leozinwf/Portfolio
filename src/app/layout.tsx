import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "Leonardo Sabatini | Engenharia de Produto & Experiência",
    template: "%s | Leonardo Sabatini"
  },
  description: "Da infraestrutura de dados à microinteração da interface. Traduzo problemas complexos em soluções digitais rápidas, escaláveis e memoráveis.",
  keywords: [
    "Software Engineer Brazil",
    "Remote Full-Stack Developer",
    "Especialista em RPA",
    "Next.js",
    "React",
    "Supabase",
    "Engenharia de Software São Bernardo do Campo"
  ],
  authors: [{ name: "Leonardo Sabatini", url: "https://leozinwf.space" }],
  creator: "Leonardo Sabatini",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://leozinwf.space",
    title: "Leonardo Sabatini | Engenharia de Produto & Experiência",
    description: "Da infraestrutura de dados à microinteração da interface. Traduzo problemas complexos em soluções digitais rápidas, escaláveis e memoráveis.",
    siteName: "Leonardo Sabatini",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Sabatini | Engenharia de Produto & Experiência",
    description: "Da infraestrutura de dados à microinteração da interface. Traduzo problemas complexos em soluções digitais rápidas, escaláveis e memoráveis.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1221" }
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  // Identifica se é uma rota administrativa ou de login
  const isAdminOrLogin = pathname.startsWith("/admin") || pathname.startsWith("/login");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Leonardo Sabatini",
    "url": "https://leozinwf.space",
    "jobTitle": "Software Engineer & RPA Specialist",
    "knowsAbout": ["Next.js", "React", "TypeScript", "Supabase", "Node.js", "Robotic Process Automation"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Bernardo do Campo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    }
  };

  return (
    <html lang="pt-BR" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans relative min-h-screen bg-background overflow-x-hidden selection:bg-accent-blue/20 flex flex-col`}>
        <div className="bg-noise"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-glow-gradient pointer-events-none -z-10"></div>
        
        {/* A Navbar agora renderiza em todas as páginas */}
        <Navbar />

        {/* Se for admin, renderiza o conteúdo puro (sem padding gigante do layout público) */}
        {isAdminOrLogin ? (
          <div className="flex-grow w-full">
            {children}
          </div>
        ) : (
          <main className="container mx-auto px-4 md:px-8 py-24 flex-grow">
            {children}
          </main>
        )}
        
        {/* O Footer permanece oculto no ecossistema admin */}
        {!isAdminOrLogin && <Footer />}
      </body>
    </html>
  );
}