"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, Menu, X, ShieldCheck } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const primaryLinks = [
  { name: "Início", href: "/" },
  { name: "Projetos", href: "/projects" },
  { name: "Motion", href: "/motion" },
  { name: "Sobre", href: "/about" },
  { name: "Contato", href: "/contact" },
];

const secondaryLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Playground", href: "/playground" },
];

const allLinks = [...primaryLinks, ...secondaryLinks];

export function Navbar() {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Mantém a verificação de tema original
    setIsDark(document.documentElement.classList.contains("dark"));

    // Inicializa o cliente do Supabase para verificar autenticação
    const supabase = createClient();

    // Verificação inicial do estado do utilizador
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) setIsLogged(true);
    });

    // Escuta alterações de login/logout em tempo real
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLogged(!!session?.user);
    });

    // Mantém o fechamento do dropdown ao clicar fora
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-md border-b border-border/40 transition-colors duration-500">
      <nav className="container mx-auto px-6 md:px-8 h-16 flex items-center justify-between max-w-5xl">
        
        {/* LOGO */}
        <Link href="/" className="font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
          LeozinWF
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-1">
          {primaryLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-surface -z-10 rounded-xl border border-border/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}

          {/* DROPDOWN PARA LINKS SECUNDÁRIOS */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              className={`p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-surface/50 border border-transparent transition-all ${
                isDesktopDropdownOpen ? "bg-surface/50 border-border/30 text-white" : ""
              }`}
              aria-label="Mais links"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {isDesktopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl p-2 shadow-xl z-50 flex flex-col gap-0.5"
                >
                  {secondaryLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsDesktopDropdownOpen(false)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          isActive ? "bg-surface text-white" : "text-neutral-400 hover:text-white hover:bg-surface/30"
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

          {/* BOTÃO ADMIN DINÂMICO DESKTOP */}
          {isLogged && (
            <Link
              href="/admin"
              className={`ml-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono tracking-wider uppercase transition-all ${
                pathname.startsWith("/admin")
                  ? "border-amber-500/30 bg-amber-500/10 text-amber-500"
                  : "border-border bg-surface/50 text-neutral-400 hover:text-white hover:border-neutral-500/30"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Admin
            </Link>
          )}
        </div>

        {/* MOBILE MENU TRIGGER */}
        <div className="flex lg:hidden items-center gap-4">
          {isLogged && (
            <Link
              href="/admin"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-mono uppercase tracking-wide transition-all ${
                pathname.startsWith("/admin")
                  ? "border-amber-500/30 bg-amber-500/10 text-amber-500"
                  : "border-border bg-surface/50 text-neutral-400"
              }`}
            >
              <ShieldCheck className="w-3 h-3" /> Admin
            </Link>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-surface/40 border border-border/30 text-white transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
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