"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, InstagramIcon, BehanceIcon, YoutubeIcon } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "YouTube", href: "https://youtube.com/@LeozinWF", icon: <YoutubeIcon className="w-5 h-5" /> },
    { name: "GitHub", href: "https://github.com/leozinwf", icon: <GithubIcon className="w-5 h-5" /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/leonardosabatini", icon: <LinkedinIcon className="w-5 h-5" /> },
    { name: "Instagram", href: "https://instagram.com/leozinwf", icon: <InstagramIcon className="w-5 h-5" /> },
    { name: "Behance", href: "https://behance.net/leonardosabatini", icon: <BehanceIcon className="w-5 h-5" /> },
  ];

  return (
    <footer className="w-full bg-background border-t border-border/40 pt-24 pb-12 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          <div className="md:col-span-6 space-y-6">
            <span className="font-mono text-xs tracking-widest uppercase opacity-50">
              Próximo Passo
            </span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight max-w-md leading-tight">
              Vamos arquitetar algo extraordinário juntos.
            </h3>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-center gap-6">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-surface border border-border/50 font-medium hover:opacity-80 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 opacity-70" />
              <span>Iniciar Conversa</span>
            </Link>
          </div>
        </div>

        {/* Base do Footer */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 font-mono text-[11px] opacity-60 text-center md:text-left">
            <span>&copy; {currentYear} Leonardo Sabatini. Todos os direitos reservados.</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
              <span>Disponível para novos projetos de impacto</span>
            </div>
          </div>

          {/* Renderização dinâmica incluindo o canal do YouTube */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border/50 bg-surface/30 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-border transition-all duration-300"
                aria-label={link.name}
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