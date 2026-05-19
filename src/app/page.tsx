"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CorporateImpact } from "@/components/sections/CorporateImpact";
import { Timeline } from "@/components/sections/Timeline";
import { Cta } from "@/components/sections/Cta";
import { Process } from "@/components/sections/Process";

// A "Fórmula Mágica" do Motion Cinematográfico
const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const handleScrollToProjects = () => {
    const element = document.getElementById("featured-projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-32 pb-4 overflow-hidden">
      
      {/* --- HERO SECTION REFINADA --- */}
      <div className="flex flex-col items-center text-center px-4 md:px-8 max-w-5xl relative">
        
        {/* VFX Spotlight: Luz de fundo orgânica e sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none -z-10 blur-3xl"></div>

        {/* Badge de Autoridade */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="px-5 py-2.5 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-sm text-neutral-300 mb-8 flex items-center gap-3 shadow-lg shadow-black/20"
        >
          <Activity className="w-4 h-4 text-accent-blue animate-pulse" />
          <span className="font-medium tracking-wide">Engenharia de Produto & Experiência</span>
        </motion.div>

        {/* Headline Premium */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Performance <span className="text-neutral-600 font-light italic">encontra</span> <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-white filter drop-shadow-lg">
            design cinematográfico.
          </span>
        </motion.h1>

        {/* Subheadline Orientada a Benefício */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-12 leading-relaxed"
        >
          Da infraestrutura de dados à microinteração da interface. Traduzo problemas complexos em soluções digitais rápidas, escaláveis e memoráveis.
        </motion.p>

        {/* Botões CTA com Microinterações */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 z-10 w-full sm:w-auto"
        >
          <button 
            onClick={handleScrollToProjects}
            className="group relative px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explorar Cases
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <Link 
            href="/contact"
            className="px-8 py-4 rounded-2xl border border-border/80 bg-surface/30 hover:bg-surface hover:border-accent-blue/50 transition-all duration-300 text-white flex items-center justify-center w-full sm:w-auto backdrop-blur-sm"
          >
            Iniciar conversa
          </Link>
        </motion.div>
      </div>

      {/* --- STACK INFINITA COM REVEAL --- */}
      <motion.div 
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, delay: 0.6, ease: cinematicEasing }}
        className="w-full mt-16 md:mt-24"
      >
        <TechStack />
      </motion.div>
      
      {/* ... Projetos em destaque ... */}
      <div id="featured-projects" className="w-full scroll-mt-32">
        <FeaturedProjects />
      </div>

      {/* --- IMPACTO CORPORATIVO --- */}
      <CorporateImpact />

      {/* --- O PROCESSO --- */}
      <Process />

      {/* --- TIMELINE (História) --- */}
      <Timeline />

      {/* --- CTA FINAL --- */}
      <Cta />
      
    </div>
  );
}