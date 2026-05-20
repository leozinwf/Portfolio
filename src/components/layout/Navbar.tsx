"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Projetos", href: "/projects" },
  { name: "Sobre", href: "/about" },
  { name: "Contato", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 mt-6 pointer-events-none"
    >
      {/* A "pílula" flutuante */}
      <nav className="pointer-events-auto relative flex items-center justify-between w-full max-w-3xl px-4 py-3 rounded-full bg-surface/40 border border-border/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-50">
        
        {/* Logo Otimizado */}
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Ir para a página inicial"
          className="flex items-center gap-3 group px-2"
        >
          <Image 
            src="/logo.png" 
            alt="Logotipo oficial de Leonardo Sabatini"
            width={32} 
            height={32}
            priority 
            className="w-auto h-7 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-white font-bold text-lg tracking-wide hidden sm:block">
            leozin<span className="text-accent-blue">.space</span>
          </span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-1 bg-background/50 rounded-full p-1 border border-border/30">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Botão do Menu Mobile com Acessibilidade */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu Dropdown Mobile (Animado) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 w-full max-w-sm px-4 z-40 md:hidden"
          >
            <div className="flex flex-col gap-2 p-4 rounded-3xl bg-surface/90 border border-border/60 backdrop-blur-xl shadow-2xl">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="h-[1px] w-full bg-border/50 my-2"></div>
              
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex justify-center items-center px-4 py-3 mt-1 rounded-2xl text-base font-medium bg-white text-black hover:bg-neutral-200 transition-colors"
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}