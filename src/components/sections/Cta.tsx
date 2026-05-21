"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export function Cta() {
  return (
    <section className="py-32 md:py-48 w-full relative bg-background overflow-hidden border-t border-white/5">
      
      {/* Efeito de Spotlight Centralizado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none -z-10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Pronto para elevar o seu <br className="hidden md:block" />
          <span className="font-light italic text-neutral-500">posicionamento?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
          className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto mb-14"
        >
          Se o seu negócio exige engenharia de ponta, conversão e design inquestionável, vamos conversar. O seu próximo ecossistema digital começa aqui.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: cinematicEasing }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Botão Principal */}
          <Link
            href="/contact"
            className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>

          {/* Redes Sociais com a nova arquitetura */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/SEU_GITHUB" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/SEU_LINKEDIN" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/SEU_INSTA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}