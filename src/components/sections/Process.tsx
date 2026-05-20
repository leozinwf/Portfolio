"use client";

import { motion } from "framer-motion";
import { Code2, Film, LayoutTemplate, Beaker, GitMerge } from "lucide-react";

const cinematicEasing: any = [0.16, 1, 0.3, 1];

const creativePillars = [
  {
    id: "01",
    tagline: "O Construtor",
    title: "Product & Development",
    description: "Engenharia de ponta a ponta. Transformar ideias abstratas em ecossistemas reais e escaláveis, construindo fundações sólidas para produtos digitais.",
    keywords: ["Next.js", "SaaS", "Dashboards", "Sistemas", "Automação", "Apps"],
    icon: <Code2 className="w-6 h-6 text-accent-blue" />,
    color: "from-blue-500/10 to-transparent",
  },
  {
    id: "02",
    tagline: "O Diretor Criativo",
    title: "Motion & Visual",
    description: "Onde a lógica encontra a arte. Criação de narrativas visuais imersivas através de motion design fluido, efeitos visuais e uma direção de arte cinematográfica.",
    keywords: ["Edição", "VFX", "Motion", "Transições", "Cinematografia", "Direção Visual"],
    icon: <Film className="w-6 h-6 text-accent-purple" />,
    color: "from-purple-500/10 to-transparent",
  },
  {
    id: "03",
    tagline: "O Arquiteto da Experiência",
    title: "UX & Experience",
    description: "O design invisível que guia o usuário. Foco absoluto na percepção visual, no fluxo contínuo e na orquestração de interfaces que contam uma história sem esforço.",
    keywords: ["Interfaces", "Experiência", "Narrativa Visual", "Percepção", "Fluxo"],
    icon: <LayoutTemplate className="w-6 h-6 text-emerald-500" />,
    color: "from-emerald-500/10 to-transparent",
  },
  {
    id: "04",
    tagline: "O Laboratório",
    title: "Experimental Lab",
    description: "O espaço para o não convencional. Prototipação rápida, integração de Inteligência Artificial e exploração contínua de novas fronteiras digitais.",
    keywords: ["IA", "UI Concepts", "Experimentos", "Ideias", "Testes", "Playground"],
    icon: <Beaker className="w-6 h-6 text-orange-500" />,
    color: "from-orange-500/10 to-transparent",
  },
  {
    id: "05",
    tagline: "O Estrategista",
    title: "Systems & Thinking",
    description: "Visão macro e de longo prazo. A habilidade de conectar pontos isolados, estruturar soluções para problemas complexos e pensar o produto como um organismo vivo.",
    keywords: ["Resolver Problemas", "Estruturar Soluções", "Otimização", "Pensamento de Produto"],
    icon: <GitMerge className="w-6 h-6 text-rose-500" />,
    color: "from-rose-500/10 to-transparent",
  }
];

export function Process() {
  return (
    <section className="py-32 w-full relative border-t border-border/40">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            A anatomia de um <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Creative Technologist</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl leading-relaxed"
          >
            Não sou apenas dev, editor ou designer. Sou a intersecção exata onde o design cinematográfico encontra a engenharia de software de alta performance.
          </motion.p>
        </div>

        {/* Lista de Pilares */}
        <div className="flex flex-col gap-6">
          {creativePillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: cinematicEasing }}
              className="group relative p-8 md:p-10 rounded-[32px] border border-border/50 bg-surface/20 backdrop-blur-sm overflow-hidden hover:border-accent-blue/30 transition-all duration-300"
            >
              {/* Efeito Glow Interno */}
              <div className={`absolute top-0 left-0 w-96 h-full bg-gradient-to-r ${pillar.color} pointer-events-none -translate-y-1/2 translate-x-1/4 opacity-50`}></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
                
                {/* Marca d'água elegante - Adaptável ao Light/Dark mode */}
                <div 
                  className="hidden md:block text-7xl lg:text-8xl font-bold font-mono text-transparent opacity-10 select-none group-hover:opacity-20 transition-opacity duration-500" 
                  style={{ WebkitTextStroke: "1.5px var(--text-muted-dynamic)" }}
                >
                  {pillar.id}
                </div>

                {/* Conteúdo Central */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface border border-border/50 shadow-inner shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <span className="text-sm font-mono tracking-widest uppercase text-accent-blue font-semibold">
                        {pillar.tagline}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mt-1">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-neutral-400 leading-relaxed max-w-2xl text-base md:text-lg mb-6">
                    {pillar.description}
                  </p>

                  {/* Badges de Keywords */}
                  <div className="flex flex-wrap gap-2">
                    {pillar.keywords.map((word) => (
                      <span key={word} className="text-xs font-medium px-3 py-1.5 rounded-full border border-border/60 bg-background/50 text-neutral-300">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}