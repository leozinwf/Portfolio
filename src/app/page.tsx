"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CorporateImpact } from "@/components/sections/CorporateImpact";
import { Cta } from "@/components/sections/Cta";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Search } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const handleScrollToProjects = () => {
    const element = document.getElementById("featured-projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-5 pb-5  transition-colors duration-500">

      {/* --- HERO SECTION REFINADA (PREMIUM / ESTRATÉGICA) --- */}
      <section className="flex flex-col items-center text-center px-6 md:px-8 max-w-4xl relative mb-20">

        {/* Badge / Label Estratégico */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: cinematicEasing }}
          className="mb-8 px-4 py-1.5 rounded-full border border-border bg-surface/50 text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium"
        >
          Creative Technologist • Digital Experience Studio
        </motion.div>

        {/* Headline Comercial e Estratégica */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: cinematicEasing, delay: 0.1 }}
          className="text-5xl md:text-7xl font-semibold tracking-[-0.02em] text-white mb-8 leading-[1.05]"
        >
          Construindo experiências digitais que unem tecnologia, design e estratégia.
        </motion.h1>

        {/* Subheadline (Proposta de Valor clara) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed font-light"
        >
          Desenvolvimento de sites, sistemas, branding digital, audiovisual e automações para marcas que querem crescer com presença profissional e identidade forte.
        </motion.p>

        {/* CTAs Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: cinematicEasing, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-white text-black font-medium hover:bg-neutral-200 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Iniciar Projeto
          </Link>

          <button
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md border border-border bg-transparent hover:bg-surface transition-colors duration-300 text-neutral-300 flex items-center justify-center gap-2"
          >
            Ver Projetos <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* --- STACK E DEMAIS SEÇÕES --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: cinematicEasing }}
        className="w-full mt-10 md:mt-10"
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