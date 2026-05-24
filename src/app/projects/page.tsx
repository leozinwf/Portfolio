"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Loader2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

interface Project {
  id: string;
  title: string;
  category: string;
  slug: string;
  problem: string;
  strategy: string;
  solution: string;
  result: string;
  image_url: string;
  live_url: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAllProjects() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setProjects(data as Project[]);
      }
      setIsLoading(false);
    }

    fetchAllProjects();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">

        {/* --- HERO SECTION CINEMÁTICA --- */}
        <section className="relative max-w-4xl mx-auto text-center px-4 mb-24 z-10">
          {/* Efeito Glow no Fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-neutral-500/10 to-transparent pointer-events-none -z-10 blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-6"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-accent-blue" />
            <span>Índice de Projetos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-white"
          >
            Casos de estudo e <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-neutral-400">
              soluções de engenharia.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Exploração detalhada da arquitetura, desafios e resultados práticos dos produtos digitais construídos recentemente.
          </motion.p>
        </section>

        {/* Estado de Carregamento */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4 w-full">
            <Loader2 className="w-6 h-6 animate-spin text-neutral-500" />
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">
              Acedendo ao banco de dados
            </span>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-surface/10">
            <p className="text-neutral-500 font-light text-sm">
              Nenhum projeto registado ou publicado no momento.
            </p>
          </div>
        ) : (
          /* Grelha Dinâmica de Estudos de Caso Completos */
          <div className="flex flex-col gap-32 md:gap-48">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: cinematicEasing }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
              >

                {/* Visual da Imagem / Mockup */}
                <div className={`lg:col-span-6 group relative rounded-2xl overflow-hidden bg-surface/30 border border-border aspect-video flex items-center justify-center transition-colors duration-700 hover:bg-surface/50 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  {project.image_url && (
                    <Link href={`/projects/${project.slug}`} className="relative w-full h-full block cursor-pointer">
                      <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-contain p-6 md:p-10 transition-transform duration-700 group-hover:scale-[1.01]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </Link>
                  )}
                </div>

                {/* Narrativa Estruturada de Negócio */}
                <div className={`lg:col-span-6 flex flex-col ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>

                  <div className="mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight text-white flex items-center justify-between w-full">
                      {project.title}
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-neutral-400 hover:text-white transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                    </h2>
                  </div>

                  {/* Quatro Pilares da Solução */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 font-light border-l border-border pl-6">

                    {project.problem && (
                      <div>
                        <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-1.5">
                          Problema
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    )}

                    {project.strategy && (
                      <div>
                        <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-1.5">
                          Estratégia
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {project.strategy}
                        </p>
                      </div>
                    )}

                    {project.solution && (
                      <div>
                        <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-1.5">
                          Solução
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    )}

                    {project.result && (
                      <div>
                        <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-1.5">
                          Resultado
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    )}

                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}