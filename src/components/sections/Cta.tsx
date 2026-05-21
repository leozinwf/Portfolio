"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export function Cta() {
  return (
    <section className="py-32 md:py-48 w-full relative bg-background overflow-hidden border-t border-white/5">
      
      {/* Efeito de Spotlight Centralizado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none -z-10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10 flex flex-col items-center">
        
        {/* Badge de Disponibilidade (Gatilho de Escassez) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-400"></span>
          </span>
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
            Disponibilidade Limitada
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="text-5xl md:text-7xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Vamos construir o seu <br className="hidden md:block" />
          <span className="font-light italic text-neutral-500">próximo nível.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
          className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto mb-14"
        >
          Projetos de alta performance exigem uma execução impecável. Reserve uma sessão de diagnóstico e descubra como podemos escalar a presença digital da sua marca.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: cinematicEasing }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          {/* Botão Principal - Foco Total na Conversão */}
          <Link
            href="/contact"
            className="group relative px-10 py-5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 text-base">
              Agendar Sessão Estratégica
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          
          <Link
             href="mailto:o-seu-email@dominio.com"
             className="text-sm font-medium text-neutral-400 hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            ou enviar um e-mail direto
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}