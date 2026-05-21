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
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";

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

        {/* Glow de fundo ultrassutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none -z-10 blur-3xl"></div>

        {/* Badge / Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-sm text-neutral-400 mb-10 flex items-center gap-3"
        >
          <Sparkles className="w-4 h-4 text-neutral-500" />
          <span className="font-medium tracking-widest uppercase text-xs">Digital Creative Studio</span>
        </motion.div>

        {/* Headline Forte */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1] max-w-4xl"
        >
          Construímos experiências digitais modernas para marcas que <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600 italic font-light">
            exigem excelência.
          </span>
        </motion.h1>

        {/* Subheadline Estratégica */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-14 leading-relaxed font-light"
        >
          Unimos engenharia de software, design cinematográfico e estratégia de negócios para criar sites, sistemas e posicionamento visual que geram autoridade imediata.
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
            className="group relative px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>

          <button
            onClick={handleScrollToProjects}
            className="px-8 py-4 rounded-full border border-white/10 bg-transparent hover:bg-white/5 transition-all duration-300 text-neutral-300 flex items-center justify-center w-full sm:w-auto"
          >
            Explorar Ecossistema
          </button>
        </motion.div>
      </div>

      {/* --- STACK E DEMAIS SEÇÕES --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: cinematicEasing }}
        className="w-full mt-32 md:mt-40"
      >
        <TechStack />
      </motion.div>
      
      <Services />

      <div id="featured-projects" className="w-full scroll-mt-32">
        <FeaturedProjects />
      </div>
      <About />
      <CorporateImpact />
      <Process />
      <Cta />
    </div>
  );
}