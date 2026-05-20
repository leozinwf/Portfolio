"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

// 1. Criamos os ícones do GitHub e LinkedIn puramente em SVG (à prova de falhas)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// 2. Usamos os ícones customizados no array
const socialLinks = [
  { href: "https://github.com/leozinwf", icon: <GithubIcon className="w-4 h-4" /> },
  { href: "https://linkedin.com/in/leonardosabatini", icon: <LinkedinIcon className="w-4 h-4" /> },
  { href: "mailto:leozinworkflow@gmail.com", icon: <Mail className="w-4 h-4" /> },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/30 bg-background/40 backdrop-blur-sm pt-16 pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          <div className="md:col-span-6 flex flex-col gap-4">
            <span className="font-bold text-lg text-white">
              leozin<span className="text-accent-blue">.space</span>
            </span>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Product Creative Developer. Projetando e codificando produtos digitais de alta fidelidade onde a performance encontra o design cinematográfico.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3 text-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Navegação</span>
            <Link href="/projects" className="text-neutral-400 hover:text-white transition-colors w-fit">Projetos</Link>
            <Link href="/motion" className="text-neutral-400 hover:text-white transition-colors w-fit">Motion Portfolio</Link>
            <Link href="/playground" className="text-neutral-400 hover:text-white transition-colors w-fit">Playground Lab</Link>
            <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors w-fit">Artigos</Link>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3 text-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Conexões</span>
            <a href="https://linkedin.com/in/leonardosabatini" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 w-fit">
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a href="https://github.com/leozinwf" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 w-fit">
              GitHub <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors w-fit">Iniciar Conversa</Link>
          </div>

        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 font-mono text-[11px] text-neutral-400">
            <span>&copy; {currentYear} Leonardo Sabatini. Todos os direitos reservados.</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Disponível para novos projetos de impacto</span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-blue hover:bg-surface/50 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </footer>
  );
}