"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";

// Ícone customizado do GitHub (SVG)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

export function FeaturedProjects() {
  return (
    <section className="py-24 w-full relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Trabalhos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">destaque</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl"
          >
            Uma seleção dos meus projetos mais recentes focados em performance, automação e design funcional.
          </motion.p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative flex flex-col rounded-3xl bg-surface/30 border border-border/50 hover:border-accent-blue/40 overflow-hidden transition-colors"
            >
              {/* Efeito de Glow no Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/0 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Mockup / Imagem Placeholder - AJUSTADO PARA SER LIMPO */}
              <div className={`h-64 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center border-b border-border/50`}>
                {/* LINHA REMOVIDA AQUI QUE APLICAVA O RUÍDO NO CARD */}
                <span className="text-white/20 font-mono text-sm tracking-widest uppercase">Mockup Image</span>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-neutral-400 hover:text-white transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="text-neutral-400 hover:text-white transition-colors">
                      <ArrowUpRight className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-surface border border-border/60 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}