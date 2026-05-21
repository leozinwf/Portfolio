"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Braces, Sparkles, Rocket } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    id: "01",
    title: "Diagnóstico & Discovery",
    description: "Imersão profunda no seu modelo de negócio. Mapeamento de objetivos comerciais, estudo do público-alvo e análise competitiva para alinhar a tecnologia à estratégia.",
    icon: <Search className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Estratégia & UX/UI",
    description: "Definição da arquitetura da solução e diretrizes visuais. Prototipagem de interfaces exclusivas e planeamento de microinterações para reter a atenção do utilizador.",
    icon: <PenTool className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Engenharia de Produto",
    description: "Tradução da visão em infraestrutura robusta. Desenvolvimento full-stack limpo, escalável e de alta performance utilizando as tecnologias mais modernas do mercado.",
    icon: <Braces className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "Refinamento & Motion",
    description: "Bateria rigorosa de testes, polimento de animações cinematográficas e otimização minuciosa de performance para garantir uma experiência premium e sem falhas.",
    icon: <Sparkles className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "05",
    title: "Entrega & Evolução",
    description: "Lançamento estratégico do produto, deploy estruturado na cloud e disponibilização de dashboards intuitivos para acompanhamento contínuo e evolução da plataforma.",
    icon: <Rocket className="w-5 h-5" strokeWidth={1.5} />,
  },
];

export function Process() {
  return (
    <section className="py-32 md:py-40 w-full relative bg-background border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="mb-24 md:mb-32 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500">
              O Método
            </h2>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Uma metodologia linear e <br className="hidden md:block" />
            <span className="font-light italic text-neutral-500">milimetricamente executada.</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEasing }}
            className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light"
          >
            Projetos de alto impacto não acontecem por acaso. Seguimos um processo corporativo transparente que elimina a adivinhação e garante previsibilidade do início ao fim.
          </motion.p>
        </div>

        {/* Linhas de Processo Minimalistas */}
        <div className="flex flex-col border-t border-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: cinematicEasing }}
              className="group py-10 md:py-14 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start hover:bg-white/[0.02] transition-colors duration-500 px-4 rounded-xl"
            >
              {/* Fase, Número e Ícone */}
              <div className="md:col-span-3 flex items-center gap-4 md:flex-col md:items-start md:gap-4">
                <span className="font-mono text-xs text-neutral-500 tracking-widest">
                  FASE {step.id}
                </span>
                <div className="text-neutral-500 group-hover:text-white transition-colors duration-500 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                  {step.icon}
                </div>
              </div>

              {/* Título da Etapa */}
              <div className="md:col-span-4 flex items-center h-full">
                <h4 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h4>
              </div>

              {/* Descrição Detalhada */}
              <div className="md:col-span-5 flex items-center h-full">
                <p className="text-neutral-400 leading-relaxed font-light text-base md:text-lg">
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