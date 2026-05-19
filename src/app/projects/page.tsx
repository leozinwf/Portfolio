"use client";

import { motion } from "framer-motion";
export const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m2 4l2 4-6 6M6 10h.01M6 10h.01M6 10h.01M6 10h.01M6 10h.01M6 10h.01M6 10h.01M6 10h.01M6 10h.01" />
  </svg>
);
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Projetos<span className="text-accent-blue">.</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Uma coleção de sistemas, automações e interfaces criadas para resolver problemas reais e gerar valor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface/20 border border-border/50 rounded-3xl overflow-hidden hover:border-accent-blue/40 transition-colors"
            >
              <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center border-b border-border/50`}>
                <span className="text-white/10 font-mono tracking-widest uppercase">Project Preview</span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-3 text-neutral-400">
                    <a href={project.github} className="hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
                    <a href={project.link} className="hover:text-white transition-colors"><ArrowUpRight className="w-6 h-6" /></a>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-background border border-border/60 text-neutral-400">
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