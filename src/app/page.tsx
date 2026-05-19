"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Services } from "@/components/sections/Services";
import { Timeline } from "@/components/sections/Timeline";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  const handleScrollToProjects = () => {
    const element = document.getElementById("featured-projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-24 pb-4">
      
      {/* --- HERO SECTION --- */}
      <div className="flex flex-col items-center text-center px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm text-sm text-neutral-400 mb-8 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
          Disponível para novos projetos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Desenvolvimento, design e motion unidos em <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple filter drop-shadow-lg">
            produtos digitais.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10"
        >
          Transformando ideias complexas em interfaces limpas, rápidas e escaláveis.
        </motion.p>

        {/* CTA BOTÕES ATUALIZADOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 z-10"
        >
          <button 
            onClick={handleScrollToProjects}
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
          >
            Ver Projetos
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link 
            href="/contact"
            className="px-6 py-3 rounded-xl border border-border hover:bg-surface transition-colors w-full sm:w-auto justify-center text-white flex items-center"
          >
            Contato
          </Link>
        </motion.div>
      </div>

      {/* --- STACK INFINITA --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full"
      >
        <TechStack />
      </motion.div>
      
      {/* --- PROJETOS EM DESTAQUE --- */}
      <div id="featured-projects" className="w-full scroll-mt-24">
        <FeaturedProjects />
      </div>

      {/* --- SERVIÇOS --- */}
      <Services />

      {/* --- TIMELINE --- */}
      <Timeline />

      {/* --- CTA FINAL --- */}
      <Cta />
      
    </div>
  );
}