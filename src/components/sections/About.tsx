"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Film, Layers } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    id: "01",
    title: "A Convergência",
    description: "Não acredito em barreiras entre disciplinas. Para mim, engenharia de software é design em movimento, e o audiovisual é a interface pela qual a estratégia ganha vida. Romper as fronteiras entre o lógico e o estético é onde o valor real reside.",
    icon: <Layers className="w-4 h-4" strokeWidth={1.5} />
  },
  {
    id: "02",
    title: "Ritmo e Narrativa",
    description: "Assim como o cinema da A24 manipula a luz, o tempo e a tensão para reter a audiência, um produto digital de alto padrão coordena performance, microinterações e tipografia para prender a atenção e guiar o utilizador de forma invisível.",
    icon: <Film className="w-4 h-4" strokeWidth={1.5} />
  },
  {
    id: "03",
    title: "Sistemas Inteligentes",
    description: "A beleza visual sem uma infraestrutura robusta é efêmera. Desenvolvemos automações e arquiteturas full-stack limpas que absorvem a complexidade operacional, deixando apenas uma superfície fluida, veloz e focada em conversão.",
    icon: <Terminal className="w-4 h-4" strokeWidth={1.5} />
  }
];

export function About() {
  return (
    <section className="py-32 md:py-48 w-full relative bg-background overflow-hidden border-t border-white/5">
      
      {/* Luz de fundo abstrata e dramática (Estilo Cinema / Lente) */}
      <div className="absolute top-1/3 right-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015),transparent_60%)] pointer-events-none -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Grid Principal: Manifesto de um lado, Filosofia do outro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Coluna Esquerda: O Título Conceitual (Fica fixo no scroll em telas grandes se desejado) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: cinematicEasing }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles className="w-4 h-4 text-neutral-500" />
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">
                Creative Technologist
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]"
            >
              Moldando o invisível através de <br />
              <span className="font-light italic text-neutral-500">engenharia e direção de arte.</span>
            </motion.h3>
          </div>

          {/* Coluna Direita: O Manifesto Textual Profundo */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: cinematicEasing }}
              className="space-y-6 text-neutral-400 font-light text-lg md:text-xl leading-relaxed"
            >
              <p>
                Não encaro a tecnologia apenas como linhas de código funcionais ou ferramentas de automação. Encaro-a como o meio mais poderoso de <span className="text-white font-medium">comunicação, percepção e impacto</span> que existe hoje.
              </p>
              <p>
                O ecossistema digital contemporâneo está saturado de interfaces genéricas e templates esquecíveis. O meu papel é o oposto: injetar intencionalidade estratégica, design imersivo e engenharia matemática em cada ponto de contacto. 
              </p>
              <p>
                Seja a desenhar um sistema SaaS complexo, a automatizar fluxos de trabalho invisíveis ou a dirigir uma narrativa audiovisual cinematográfica, o objetivo final permanece imutável: <span className="text-white italic font-light">construir autoridade inquestionável para marcas líderes.</span>
              </p>
            </motion.div>

            {/* Linha divisória minimalista */}
            <div className="w-full h-[1px] bg-white/10 my-4" />

            {/* Sub-grid dos Pilares Filosóficos */}
            <div className="flex flex-col gap-10">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: index * 0.1, ease: cinematicEasing }}
                  className="group flex gap-6 items-start"
                >
                  {/* Ícone Minimalista + Número */}
                  <div className="flex flex-col items-center gap-2 pt-1 text-neutral-500 group-hover:text-white transition-colors duration-500">
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors">
                      {pillar.icon}
                    </div>
                    <span className="font-mono text-[10px] tracking-wider opacity-60">
                      {pillar.id}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-white tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-neutral-400 font-light text-base leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}