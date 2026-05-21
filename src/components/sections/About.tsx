"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export function About() {
  return (
    <section className="py-32 md:py-48 w-full relative bg-background border-t border-border overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        
        {/* Composição Editorial Assimétrica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Coluna Esquerda: Label Fixo */}
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: cinematicEasing }}
              className="flex items-center gap-3 text-neutral-500"
            >
              <Sparkles className="w-4 h-4" />
              <h2 className="text-xs font-mono tracking-widest uppercase">
                O Manifesto
              </h2>
            </motion.div>
          </div>

          {/* Coluna Direita: O Texto Principal (A Filosofia) */}
          <div className="lg:col-span-8 flex flex-col">
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: cinematicEasing, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-12 md:mb-16"
            >
              Não vejo tecnologia apenas como funcionalidade. <br />
              <span className="font-light italic text-neutral-500">
                Vejo como experiência, percepção e comunicação.
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: cinematicEasing, delay: 0.2 }}
              className="space-y-8 text-neutral-400 font-light text-lg md:text-xl leading-relaxed border-l border-border pl-6 md:pl-10 max-w-3xl"
            >
              <p>
                O meu foco não é apenas criar algo bonito ou funcional, mas desenvolver <span className="text-white font-medium">experiências digitais que transmitam identidade, presença e profissionalismo.</span>
              </p>
              <p>
                Misturo desenvolvimento, audiovisual, branding e design para construir projetos modernos, estratégicos e visualmente impactantes.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}