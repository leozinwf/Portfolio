"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CorporateImpact } from "@/components/sections/CorporateImpact";
import { Timeline } from "@/components/sections/Timeline";
import { Cta } from "@/components/sections/Cta";
import { Process } from "@/components/sections/Process";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const handleScrollToProjects = () => {
    const element = document.getElementById("featured-projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-40 pb-10 overflow-hidden bg-background">

      {/* --- HERO SECTION PREMIUM --- */}
      <div className="flex flex-col items-center text-center px-4 md:px-8 max-w-5xl relative">

        {/* Luz de fundo mais sutil e elegante (menos neon, mais sofisticação) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none -z-10 blur-3xl"></div>

        {/* Badge de Posicionamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-neutral-300 mb-10 flex items-center gap-3"
        >
          <Sparkles className="w-4 h-4 text-neutral-400" />
          <span className="font-medium tracking-widest uppercase text-xs">Creative Technologist</span>
        </motion.div>

        {/* Headline Forte */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Transformo ideias em <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
            experiências digitais
          </span> <br className="hidden md:block" />
          <span className="font-light italic text-neutral-400">que geram autoridade.</span>
        </motion.h1>

        {/* Subheadline Estratégica */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-14 leading-relaxed font-light"
        >
          Desenvolvimento de sites, sistemas, branding digital, automações, audiovisual e posicionamento estratégico para empresas e criadores.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 z-10 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Solicitar Projeto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>

          <button
            onClick={handleScrollToProjects}
            className="px-8 py-4 rounded-full border border-white/10 bg-transparent hover:bg-white/5 transition-all duration-300 text-white flex items-center justify-center w-full sm:w-auto"
          >
            Ver Projetos
          </button>
        </motion.div>
      </div>

      {/* --- STACK E DEMAIS SEÇÕES --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: cinematicEasing }}
        className="w-full mt-24 md:mt-32"
      >
        <TechStack />
      </motion.div>

      <div id="featured-projects" className="w-full scroll-mt-32">
        <FeaturedProjects />
      </div>

      <CorporateImpact />
      <Process />
      <Cta />
    </div>
  );
}