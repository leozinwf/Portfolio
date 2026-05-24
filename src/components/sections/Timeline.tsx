"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    id: 1,
    period: "O Início",
    role: "Audiovisual & VFX",
    description: "Minha porta de entrada para o mundo digital. Onde desenvolvi o olhar para o design, motion suave e a importância de criar uma experiência visual impactante antes mesmo de escrever a primeira linha de código.",
  },
  {
    id: 2,
    period: "Evolução Técnica",
    role: "Infraestrutura & Scripting",
    description: "Administração de servidores dedicados de jogos online, mergulhando em configurações de rede, port forwarding e desenvolvimento de scripts para tradução em massa e manipulação de arquivos.",
  },
  {
    id: 3,
    period: "A Profissionalização",
    role: "Full-Stack",
    description: "Foco total na engenharia de software. Criação de interfaces modernas com React e Next.js, além do desenvolvimento de robôs de automação (RPA) para resolver etapas complexas de análise e reduzir falhas operacionais.",
  },
  {
    id: 4,
    period: "2026 - Presente",
    role: "Produtos, Nuvem & SaaS",
    description: "Arquitetando soluções de ponta a ponta. Desde a infraestrutura segura em cloud até a construção de aplicações ricas e gamificadas (como o Grana XP), unindo design premium, banco de dados e performance.",
  }
];

export function Timeline() {
  return (
    <section className="py-24 w-full relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Cabeçalho */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">trajetória</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg"
          >
            Como a edição de vídeo e a paixão por tecnologia me trouxeram até a engenharia de software.
          </motion.p>
        </div>

        {/* Linha do Tempo */}
        <div className="relative border-l border-border/60 ml-4 md:ml-0 md:pl-0">
          
          {/* Fio de luz animado (Opcional visual premium) */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-transparent origin-top"
          ></motion.div>

          <div className="flex flex-col gap-12">
            {timelineData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Ponto de luz na linha */}
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-surface border-2 border-accent-blue group-hover:bg-accent-blue transition-colors duration-300">
                  <div className="absolute inset-0 bg-accent-blue rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <span className="text-sm font-mono text-accent-blue/80 tracking-widest uppercase shrink-0">
                    {item.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {item.role}
                  </h3>
                </div>
                <p className="text-neutral-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}