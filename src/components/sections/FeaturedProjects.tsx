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
    challenge: "Transformar a gestão financeira pessoal num ecossistema envolvente, fugindo da rigidez das tradicionais folhas de cálculo.",
    solution: "Desenvolvimento full-stack de uma plataforma web gamificada. Integração de sincronização em tempo real para dados financeiros, arquitetura de interface limpa e mecânicas de recompensa por consistência do utilizador.",
    impact: "Maior retenção e conversão de rotinas financeiras monótonas em hábitos diários rastreáveis.",
    tech: ["React", "Supabase", "Tailwind CSS", "Motion"],
    image: "/projects/grana_xp.webp",
    link: "/projects/grana-xp"
  },
  {
    id: "doohub",
    title: "DooHub",
    category: "Plataforma de Gestão Corporativa",
    year: "2025",
    challenge: "Criar um ecossistema centralizado para gestão e automação de processos de negócio, substituindo fluxos manuais dispersos.",
    solution: "Arquitetura de sistema robusta focada em engenharia de produtividade, painéis gerenciais (dashboards) responsivos e estruturação de bases de dados para processamento em larga escala.",
    impact: "Redução drástica do tempo operacional na análise de dados e otimização de fluxos de trabalho.",
    tech: ["Next.js", "TypeScript", "Node.js", "Arquitetura de Dados"],
    image: "/projects/doohub.webp",
    link: "/projects/doohub"
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-32 md:py-40 w-full relative bg-background overflow-hidden border-t border-border/40 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Cabeçalho */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: cinematicEasing }}
              className="flex items-center gap-3 mb-6 opacity-60"
            >
              <FolderGit2 className="w-4 h-4" />
              <h2 className="text-xs font-mono tracking-widest uppercase">
                Casos de Estudo
              </h2>
            </motion.div>
            
            {/* O texto agora herda o default do site (preto no claro, branco no escuro) */}
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
            >
              Projetos que geram <br className="hidden md:block" />
              <span className="font-light italic opacity-60">autoridade e conversão.</span>
            </motion.h3>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEasing }}
          >
            <Link 
              href="/projects" 
              className="group flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <span>Ver todo o arquivo</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Lista de Casos de Estudo */}
        <div className="flex flex-col gap-32 md:gap-40">
          {cases.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: cinematicEasing }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              
              {/* === CONTAINER DA IMAGEM AGORA USA bg-surface === */}
              {/* Usa a variável --surface do seu globals.css para ficar perfeito em ambos os temas */}
              <div className={`lg:col-span-7 group relative rounded-[2rem] overflow-hidden bg-surface border border-border/50 shadow-2xl shadow-black/5 aspect-video md:aspect-[4/3] flex items-center justify-center transition-all duration-500 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Image
                  src={project.image}
                  alt={`Imagem do caso de estudo: ${project.title}`}
                  fill
                  className="object-contain p-6 md:p-12 filter transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 border border-border/20 rounded-[2rem] pointer-events-none transition-colors duration-500"></div>
              </div>

              {/* Informação e Narrativa do Caso */}
              <div className={`lg:col-span-5 flex flex-col ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-3 py-1 text-xs font-mono border border-border/50 rounded-full opacity-70">
                    {project.year}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest opacity-60">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-3xl md:text-4xl font-bold mb-10">
                  {project.title}
                </h4>

                <div className="space-y-8 mb-10">
                  <div>
                    <h5 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue opacity-80"></div> O Desafio
                    </h5>
                    <p className="opacity-70 font-light leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-purple opacity-80"></div> A Solução & Impacto
                    </h5>
                    <p className="opacity-70 font-light leading-relaxed">
                      {project.solution} <span className="opacity-100 font-medium ml-1">{project.impact}</span>
                    </p>
                  </div>
                </div>

                {/* Tecnologias & CTA */}
                <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono opacity-60">
                        {t} <span className="opacity-40 last:hidden px-1">/</span>
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity group"
                  >
                    Ler Caso Completo
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}