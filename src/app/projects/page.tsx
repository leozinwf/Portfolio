"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/sections/FeaturedProjects"; 
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";

const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Projetos<span className="text-accent-blue">.</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Uma coleção de sistemas, automações e interfaces criadas para resolver problemas reais e gerar valor.
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: cinematicEasing }}
              className="group bg-surface/20 border border-border/50 rounded-[32px] overflow-hidden hover:border-accent-blue/40 transition-colors flex flex-col"
            >
              {/* Mockup Area */}
              <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center border-b border-border/50 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]"></div>
                <span className="text-white/30 font-mono tracking-widest uppercase text-sm relative z-10">Mockup / Preview</span>
              </div>
              
              {/* Conteúdo */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-mono text-accent-blue mb-3 block uppercase tracking-wider">{project.type}</span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex gap-3 text-neutral-400">
                    <a href={project.github} className="hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
                    <a href={project.link} className="hover:text-white transition-colors"><ArrowUpRight className="w-6 h-6" /></a>
                  </div>
                </div>
                
                {/* Usando a 'solution' no lugar da antiga 'description' */}
                <p className="text-neutral-400 mb-8 leading-relaxed flex-grow">
                  {project.solution}
                </p>
                
                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/40">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-background border border-border/60 text-neutral-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}