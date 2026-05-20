"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, Menu, X } from "lucide-react"; // Removemos o ChevronDown

const primaryLinks = [
  { name: "Início", href: "/" },
  { name: "Projetos", href: "/projects" },
  { name: "Motion", href: "/motion" },
  { name: "Playground", href: "/playground" },
];

const secondaryLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/about" },
  { name: "Contato", href: "/contact" },
];

const allLinks = [...primaryLinks, ...secondaryLinks];

export function Navbar() {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  const isSecondaryActive = secondaryLinks.some((link) => pathname === link.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/60 border-b border-border/40 backdrop-blur-md transition-colors duration-300">
      <nav className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between max-w-6xl">
        
        <Link 
          href="/" 
          onClick={() => { setIsMobileMenuOpen(false); setIsDesktopDropdownOpen(false); }}
          aria-label="Ir para a página inicial"
          className="flex items-center gap-2.5 group shrink-0"
        >
          <Image 
            src="/logo.png" 
            alt="Logotipo oficial"
            width={28} 
            height={28}
            priority 
            className="w-auto h-6 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-white font-bold text-base tracking-wide hidden sm:block">
            leozin<span className="text-accent-blue">.space</span>
          </span>
        </Link>

        {/* NAVEGAÇÃO DESKTOP HÍBRIDA */}
        <div className="hidden lg:flex items-center gap-1 bg-surface/30 rounded-full p-1 border border-border/30 relative">
          
          {primaryLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
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

          {/* Trigger do Dropdown com os 3 pontinhos (Mais) */}
          <div className="relative flex items-center" ref={dropdownRef}>
            {/* O erro TS foi corrigido simplificando as propriedades ARIA */}
            <button
              type="button"
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              aria-expanded={isDesktopDropdownOpen ? "true" : "false"}
              aria-haspopup="menu"
              aria-label="Menu expandido"
              className={`flex items-center justify-center w-8 h-8 ml-0.5 rounded-full transition-all cursor-pointer relative ${
                isSecondaryActive ? "text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isSecondaryActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <MoreHorizontal className="w-5 h-5" />
            </button>

            <AnimatePresence>
              {isDesktopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-10 w-44 rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl p-2 shadow-xl flex flex-col gap-0.5"
                >
                  {secondaryLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsDesktopDropdownOpen(false)}
                        className={`w-full px-4 py-2.5 rounded-xl text-left text-xs md:text-sm font-medium transition-colors ${
                          isActive 
                            ? "bg-white/10 text-white" 
                            : "text-neutral-400 hover:bg-surface hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* AÇÕES DA DIREITA */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border/40 bg-background/20 text-neutral-400 hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
          </button>

          <button 
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl lg:hidden z-40"
          >
            <div className="flex flex-col gap-1 p-6 max-w-md mx-auto">
              {allLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive ? "bg-surface text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}