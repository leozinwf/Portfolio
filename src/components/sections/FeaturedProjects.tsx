"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const cases = [
  {
    id: "grana-xp",
    title: "Grana XP",
    category: "SaaS Financeiro & Gamificação",
    year: "2026",
    challenge: "A gestão financeira tradicional falha em reter o utilizador por ser monótona e burocrática, gerando abandono rápido da ferramenta.",
    solution: "Engenharia de um ecossistema financeiro gamificado. Sincronização em tempo real (serverless) para dados financeiros, arquitetura de interface limpa e mecânicas de recompensa por consistência.",
    impact: "Maior retenção e conversão de rotinas financeiras em hábitos diários rastreáveis.",
    tech: ["Next.js", "Supabase", "TypeScript", "Framer Motion"],
    image: "/projects/grana_xp.webp",
    link: "https://grana-xp.vercel.app/"
  },
  {
    id: "doohub",
    title: "DooHub",
    category: "Plataforma de Gestão Corporativa",
    year: "2025",
    challenge: "Empresas enfrentam dificuldades para centralizar processos internos (RH, ponto, comunicação) numa única plataforma intuitiva.",
    solution: "Arquitetura robusta focada em produtividade. Desenvolvimento de módulos integrados, painéis gerenciais de alta performance e estruturação de bases de dados seguras.",
    impact: "Redução do tempo operacional e controlo absoluto sobre a gestão de colaboradores.",
    tech: ["React 19", "Vite", "Tailwind CSS", "Supabase"],
    image: "/projects/doohub.webp",
    link: "https://doohub.vercel.app/"
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-32 md:py-40 w-full relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: cinematicEasing }}
              className="flex items-center gap-3 mb-6"
            >
              <FolderGit2 className="w-4 h-4 text-neutral-500" />
              <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500">
                Casos de Estudo
              </h2>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
            >
              Projetos que geram <br className="hidden md:block" />
              <span className="font-light italic text-neutral-500">autoridade imediata.</span>
            </motion.h3>
          </div>
        </div>

        {/* Lista de Casos de Estudo */}
        <div className="flex flex-col gap-32">
          {cases.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: cinematicEasing }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              
              {/* IMAGEM PREMIUM */}
              <div className={`lg:col-span-7 group relative rounded-3xl overflow-hidden bg-white/[0.01] border border-white/5 aspect-video md:aspect-[4/3] flex items-center justify-center transition-all duration-700 hover:bg-white/[0.03] ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={project.image}
                  alt={`Caso de estudo: ${project.title}`}
                  fill
                  className="object-contain p-8 md:p-16 transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={index === 0}
                />
              </div>

              {/* INFORMAÇÃO E NARRATIVA */}
              <div className={`lg:col-span-5 flex flex-col ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-3 py-1 text-xs font-mono border border-white/10 bg-white/[0.02] text-neutral-400 rounded-full">
                    {project.year}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-3xl md:text-4xl font-medium text-white mb-10">
                  {project.title}
                </h4>

                <div className="space-y-8 mb-10 border-l border-white/10 pl-6">
                  <div>
                    <h5 className="text-sm font-medium text-white mb-3">O Desafio de Negócio</h5>
                    <p className="text-neutral-400 font-light leading-relaxed text-base">
                      {project.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-white mb-3">A Arquitetura & Solução</h5>
                    <p className="text-neutral-400 font-light leading-relaxed text-base">
                      {project.solution} <span className="text-neutral-300 font-medium block mt-2">Impacto: {project.impact}</span>
                    </p>
                  </div>
                </div>

                {/* Tecnologias & CTA */}
                <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-neutral-500">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors group"
                  >
                    Aceder à Plataforma
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}