"use client";

import Link from "next/link";
import { Mail, ArrowUp, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, BehanceIcon, YoutubeIcon } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "YouTube", href: "https://youtube.com/@LeozinWF", icon: <YoutubeIcon className="w-4 h-4" /> },
    { name: "GitHub", href: "https://github.com/leozinwf", icon: <GithubIcon className="w-4 h-4" /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/leonardosabatini", icon: <LinkedinIcon className="w-4 h-4" /> },
    { name: "Instagram", href: "https://instagram.com/leozinwf", icon: <InstagramIcon className="w-4 h-4" /> },
    { name: "Behance", href: "https://behance.net/leonardosabatini", icon: <BehanceIcon className="w-4 h-4" /> },
  ];

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Projetos", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Sobre Mim", href: "/about" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background border-t border-border/30 transition-colors duration-500 overflow-hidden relative">
      {/* Efeito Glow de Fundo Sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-8 max-w-5xl pt-24 pb-8 space-y-24">

        {/* --- 1. MEGA CTA (Call to Action) --- */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Tem um projeto <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">em mente?</span>
          </h2>
          <p className="text-neutral-400 max-w-lg text-sm md:text-base font-light">
            Vamos construir algo grandioso juntos. Sinta-se à vontade para me enviar um e-mail para discutirmos a sua ideia ou próxima automação.
          </p>

          <a
            href="mailto:Leozinworkflow@gmail.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-sm font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
          >
            <Mail className="w-4 h-4" />
            Leozinworkflow@gmail.com
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Divisor Elegante */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

        {/* --- 2. GRID DE INFORMAÇÕES --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">

          {/* Coluna 1: Bio Rápida */}
          <div className="md:col-span-6 space-y-4 pr-0 md:pr-10">
            <span className="text-lg font-bold text-white tracking-wide">LEONARDO SABATINI</span>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Focado em criar experiências digitais escaláveis, interfaces de alta performance e soluções avançadas de automação.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Conectar</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border/50 bg-surface/20 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-surface/50 hover:border-border hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- 3. CAMADA INFERIOR (Status e Copyright) --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-8 pt-8 border-t border-border/20 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
          <span>Todos os direitos reservados &copy; {currentYear} Leonardo Sabatini.</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            Voltar ao topo
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}