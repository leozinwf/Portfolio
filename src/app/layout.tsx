import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Leonardo | Full-Stack Developer",
  description: "Criando experiências digitais modernas, funcionais e visuais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans relative min-h-screen bg-background overflow-x-hidden`}>
        
        {/* Elementos de fundo premium */}
        <div className="bg-noise"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-glow-gradient pointer-events-none -z-10"></div>
        
        {/* NOSSO NOVO NAVBAR FLUTUANTE */}
        <Navbar />

        <main className="container mx-auto px-4 md:px-8 pt-12">
          {children}
        </main>
        
      </body>
    </html>
  );
}