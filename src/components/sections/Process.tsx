"use client";

import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    id: "01",
    title: "Diagnóstico",
    description: "Entendimento do projeto, objetivo e necessidades.",
  },
  {
    id: "02",
    title: "Estratégia",
    description: "Definição da direção visual, tecnológica e estrutural.",
  },
  {
    id: "03",
    title: "Desenvolvimento",
    description: "Construção da experiência digital.",
  },
  {
    id: "04",
    title: "Refinamento",
    description: "Ajustes, otimizações e melhorias.",
  },
  {
    id: "05",
    title: "Entrega",
    description: "Deploy, suporte e evolução contínua.",
  },
];

export function Process() {
  return (
    <section className="py-32 md:py-48 w-full relative bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        
        {/* Cabeçalho Estrutural */}
        <div className="mb-24 md:mb-36 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: cinematicEasing }}
            className="flex items-center gap-3 text-neutral-500"
          >
            <Workflow className="w-4 h-4" />
            <h2 className="text-xs font-mono tracking-widest uppercase">
              Estrutura Operacional
            </h2>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: cinematicEasing, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
          >
            Metodologia baseada em <br />
            <span className="font-light italic text-neutral-500">previsibilidade e excelência.</span>
          </motion.h3>
        </div>

        {/* Grelha de Engenharia (Inspirada no design de documentação/recursos da Linear e Vercel) */}
        <div className="grid grid-cols-1 md:grid-cols-5 border-t border-border divide-y md:divide-y-0 md:divide-x divide-border">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: cinematicEasing }}
              className="pt-10 pb-12 md:pb-0 md:px-6 first:pl-0 last:pr-0 flex flex-col gap-8 group"
            >
              {/* Indicador Minimalista Estilo Code-Comment */}
              <span className="font-mono text-xs tracking-wider text-neutral-500 group-hover:text-white transition-colors duration-300">
                // {step.id}
              </span>

              {/* Bloco de Informação Puro */}
              <div className="space-y-3">
                <h4 className="text-lg font-medium tracking-tight text-white">
                  {step.title}
                </h4>
                <p className="text-neutral-400 font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}