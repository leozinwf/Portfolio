"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Layers, Cpu } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const impacts = [
  {
    title: "Presença Profissional",
    description: "Experiências digitais que fortalecem a perceção de valor e consolidam autoridade imediata.",
    icon: <Shield className="w-5 h-5 stroke-[1.5]" />
  },
  {
    title: "Experiência Premium",
    description: "Interfaces modernas e sofisticadas, focadas em clareza, retenção e impacto visual.",
    icon: <Sparkles className="w-5 h-5 stroke-[1.5]" />
  },
  {
    title: "Estrutura Escalável",
    description: "Sistemas robustos e arquiteturas modernas preparadas para suportar o crescimento do seu negócio.",
    icon: <Layers className="w-5 h-5 stroke-[1.5]" />
  },
  {
    title: "Tecnologia Estratégica",
    description: "Automação, engenharia e branding unidos para otimizar operações numa única experiência.",
    icon: <Cpu className="w-5 h-5 stroke-[1.5]" />
  }
];

export function CorporateImpact() {
  return (
    <section className="py-32 md:py-48 w-full relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        
        {/* Cabeçalho de Impacto */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: cinematicEasing }}
            className="flex items-center gap-3 text-neutral-500 mb-6"
          >
            <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
            <h2 className="text-xs font-mono tracking-widest uppercase">
              Impacto & Crescimento
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: cinematicEasing, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-[1.1]"
          >
            O valor real está no <br />
            <span className="font-light italic text-neutral-500">resultado gerado.</span>
          </motion.h3>
        </div>

        {/* Grelha de Engenharia Premium (Hairline Grid) */}
        <div className="relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            // Este truque de gap-px com fundo border cria a linha super fina
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border shadow-sm"
          >
            {impacts.map((item, index) => (
              <div
                key={index}
                className="bg-background p-10 md:p-14 hover:bg-surface/30 transition-colors duration-500 group flex flex-col gap-6"
              >
                {/* Ícone Minimalista */}
                <div className="w-12 h-12 rounded-xl border border-border bg-surface/50 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-500/30 transition-all duration-300">
                  {item.icon}
                </div>
                
                {/* Conteúdo Textual */}
                <div>
                  <h4 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}