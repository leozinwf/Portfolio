"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, Menu, X, ShieldCheck, Sun, Moon, Search } from "lucide-react";
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
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  // Estados da pesquisa
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Lógica robusta para inicializar o Dark Mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    // Inicializa o cliente do Supabase para verificar autenticação
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) setIsLogged(true);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLogged(!!session?.user);
    });

    // Fecha dropdown ao clicar fora
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

  // Função para alternar o Dark Mode
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Função para disparar a pesquisa
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-md border-b border-border/40 transition-colors duration-500">
      <nav className="container mx-auto px-6 md:px-8 h-16 flex items-center justify-between max-w-5xl">
        
        {/* LOGO */}
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="LeozinWF Logo" 
            width={36} 
            height={36} 
            className="rounded-lg object-contain dark:invert" 
            priority
          />
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
                  isActive ? "text-foreground" : "text-neutral-400 hover:text-foreground"
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
              className={`p-2 rounded-xl text-neutral-400 hover:text-foreground hover:bg-surface/50 border border-transparent transition-all ${
                isDesktopDropdownOpen ? "bg-surface/50 border-border/30 text-foreground" : ""
              }`}
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
                          isActive ? "bg-surface text-foreground" : "text-neutral-400 hover:text-foreground hover:bg-surface/30"
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

          <div className="w-px h-6 bg-border/50 mx-2" /> {/* Separador visual */}

          {/* BARRA DE PESQUISA ANIMADA */}
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "200px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSearch}
                  className="absolute right-10 overflow-hidden"
                >
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full bg-surface border border-border rounded-full px-4 py-1.5 text-sm text-foreground outline-none focus:border-neutral-500 shadow-inner"
                  />
                </motion.form>
              )}
            </AnimatePresence>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-xl text-neutral-400 hover:text-foreground hover:bg-surface/50 transition-colors relative z-10"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* BOTÃO TOGGLE DARK/LIGHT MODE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-neutral-400 hover:text-foreground hover:bg-surface/50 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-orange-400" /> : <Moon className="w-4 h-4 text-accent-purple" />}
          </button>

          {/* BOTÃO ADMIN DINÂMICO DESKTOP */}
          {isLogged && (
            <Link
              href="/admin"
              className={`ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono tracking-wider uppercase transition-all ${
                pathname.startsWith("/admin")
                  ? "border-amber-500/30 bg-amber-500/10 text-amber-500"
                  : "border-border bg-surface/50 text-neutral-400 hover:text-foreground hover:border-neutral-500/30"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Admin
            </Link>
          )}
        </div>

        {/* MOBILE MENU TRIGGER */}
        <div className="flex lg:hidden items-center gap-2">
          
          <button onClick={toggleTheme} className="p-2 text-neutral-400">
            {isDark ? <Sun className="w-5 h-5 text-orange-400" /> : <Moon className="w-5 h-5 text-accent-purple" />}
          </button>

          {isLogged && (
            <Link href="/admin" className="p-2 text-amber-500 bg-amber-500/10 border border-amber-500/30 rounded-xl">
              <ShieldCheck className="w-4 h-4" />
            </Link>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-surface/40 border border-border/30 text-foreground transition-colors cursor-pointer"
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
              
              {/* Pesquisa Mobile */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground outline-none"
                  />
                </div>
              </form>

              {allLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive ? "bg-surface text-foreground" : "text-neutral-400 hover:text-foreground"
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