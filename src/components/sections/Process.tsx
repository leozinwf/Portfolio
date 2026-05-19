"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Cpu, Film } from "lucide-react";

const cinematicEasing: any = [0.16, 1, 0.3, 1];

const processSteps = [
  {
    id: "01",
    title: "Mergulho & Discovery",
    description: "Antes de qualquer linha de código, o foco é o negócio. Entendimento profundo do problema, mapeamento de regras operacionais e definição da métrica de sucesso do produto.",
    icon: <Compass className="w-6 h-6 text-accent-blue" />,
    color: "from-blue-500/10 to-transparent",
  },
  {
    id: "02",
    title: "Arquitetura & Design",
    description: "Estruturação lógica e visual. Desenho da arquitetura do banco de dados, fluxos de automação e wireframes focados em usabilidade, retenção e conversão.",
    icon: <Layers className="w-6 h-6 text-accent-purple" />,
    color: "from-purple-500/10 to-transparent",
  },
  {
    id: "03",
    title: "Engenharia & Build",
    description: "Desenvolvimento robusto e escalável. Escrita de código limpo, componentização inteligente e integração de APIs, garantindo segurança e performance no back-end e front-end.",
    icon: <Cpu className="w-6 h-6 text-emerald-500" />,
    color: "from-emerald-500/10 to-transparent",
  },
  {
    id: "04",
    title: "Refinamento Cinematográfico",
    description: "A última milha que separa o comum do premium. Injeção de motion design suave, microinterações, otimização de Easing e polimento visual herdados do meu background em VFX.",
    icon: <Film className="w-6 h-6 text-orange-500" />,
    color: "from-orange-500/10 to-transparent",
  }
];

export function Process() {
  return (
    <section className="py-32 w-full relative border-t border-border/30 bg-surface/10">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* Cabeçalho */}
        <div className="mb-20 md:text-center flex flex-col md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border/50 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse"></span>
            Metodologia
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Como eu construo <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">produtos.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEasing }}
            className="text-neutral-400 text-lg max-w-2xl leading-relaxed"
          >
            Um processo iterativo, focado em entregar valor de negócio rápido, sem abrir mão da excelência visual.
          </motion.p>
        </div>

        {/* Lista de Passos Editorial */}
        <div className="flex flex-col gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: cinematicEasing }}
              className="group relative overflow-hidden rounded-[32px] bg-surface/20 border border-border/50 p-8 md:p-10 hover:bg-surface/40 transition-colors duration-500"
            >
              {/* Efeito de gradiente no hover (baseado na cor do ícone) */}
              <div className={`absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -translate-y-1/2 translate-x-1/4`}></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
                
                {/* Número Grande "Marca d'água" */}
                <div className="hidden md:block text-7xl lg:text-8xl font-bold font-mono text-transparent stroke-text opacity-10 select-none group-hover:opacity-20 transition-opacity duration-500" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}>
                  {step.id}
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-background/50 border border-border/50 shadow-inner">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                      <span className="md:hidden text-neutral-500 font-mono text-xl">{step.id}.</span>
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-400 leading-relaxed max-w-3xl text-base md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}