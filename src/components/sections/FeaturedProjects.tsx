"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { featuredProjects } from "@/data/projects";

// Ícone do GitHub (mantido o SVG customizado para leveza)
export const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FeaturedProjects() {
  return (
    <section className="py-32 w-full relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho da Seção com Efeito Reveal */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Cases de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Sucesso</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Não apenas linhas de código, mas produtos desenhados para resolver problemas reais com excelência visual e técnica.
          </motion.p>
        </div>

        {/* Layout Split-Screen para os Projetos */}
        <div className="flex flex-col gap-24 md:gap-32">
          {featuredProjects.map((project, index) => {
            // Alterna a direção da imagem (esquerda/direita) a cada projeto no desktop
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, ease: cinematicEasing }}
                className={`group flex flex-col gap-8 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                
                {/* LADO A: O Visual (Mockup) */}
                <div className="w-full lg:w-1/2 h-[350px] sm:h-[450px] rounded-[32px] p-4 relative overflow-hidden bg-surface/20 border border-border/40 hover:border-accent-blue/30 transition-colors duration-500">
                  {/* Gradiente de fundo reagindo ao hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700`}></div>
                  
                  {/* A "Interface" flutuando (Motion Efeito Parallax Simulado) */}
                  <div className="absolute inset-8 md:inset-12 bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:-translate-y-3 group-hover:scale-[1.02] transition-all duration-700 ease-out">
                    <span className="text-neutral-600 font-mono text-sm tracking-widest uppercase">Mockup / Produto</span>
                    {/* Dica: Quando tiver prints, coloque a <img> real aqui com object-cover e rounded-2xl */}
                  </div>
                </div>

                {/* LADO B: O Business Case */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  {/* Tag Premium */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded-full">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-500">
                    {project.title}
                  </h3>

                  {/* Blocos de Desafio e Solução */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                        O Desafio
                      </h4>
                      <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                        A Solução
                      </h4>
                      <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-3 mb-10">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3 text-neutral-300 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0 opacity-80" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Footer do Projeto: Stack "Invisível" e Links */}
                  <div className="mt-auto pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider mr-2">Core:</span>
                      {project.stack.map((tech, i) => (
                        <span key={tech} className="text-xs text-neutral-400 font-medium flex items-center">
                          {tech}
                          {i !== project.stack.length - 1 && <span className="opacity-30 mx-2">•</span>}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a href={project.github} className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-blue hover:bg-surface transition-all duration-300">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                      <a href={project.link} className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-blue hover:bg-surface transition-all duration-300 group-hover:scale-110">
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}