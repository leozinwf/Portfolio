"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Loader2 } from "lucide-react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

// Definição da estrutura do projeto vinda do banco de dados
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

export function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const supabase = createClient();

      // Busca apenas os projetos marcados como publicados, ordenando pelos mais recentes
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("is_featured", true) // Filtra apenas o que definires como destaque para a Home
        .order("created_at", { ascending: false });

      if (!error && data) {
        setProjects(data as Project[]);
      }
      setIsLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <section id="featured-projects" className="py-32 md:py-48 w-full relative bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">

        {/* Cabeçalho da Seção */}
        <div className="mb-24 md:mb-36 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: cinematicEasing }}
            className="flex items-center gap-3 text-neutral-500"
          >
            <FolderGit2 className="w-4 h-4" />
            <h2 className="text-xs font-mono tracking-widest uppercase">
              Estudos de Caso
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: cinematicEasing, delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
          >
            Soluções estratégicas que <br />
            <span className="font-light italic text-neutral-500">transformam marcas.</span>
          </motion.h3>
        </div>

        {/* Estado de Carregamento Premium */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 w-full">
            <Loader2 className="w-6 h-6 animate-spin text-neutral-500" />
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">Carregando Ecossistema</span>
          </div>
        ) : projects.length === 0 ? (
          /* Estado Vazio (Caso não haja projetos publicados) */
          <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-surface/10">
            <p className="text-neutral-500 font-light text-sm">Nenhum estudo de caso publicado no momento.</p>
          </div>
        ) : (
          /* Lista Dinâmica de Casos de Estudo */
          <div className="flex flex-col gap-40 md:gap-52">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: cinematicEasing }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
              >

                {/* COMPOSIÇÃO VISUAL: IMAGEM PREMIUM */}
                <div className={`lg:col-span-7 group relative rounded-2xl overflow-hidden bg-surface/30 border border-border aspect-video flex items-center justify-center transition-all duration-700 hover:bg-surface/50 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  {project.image_url && (
                    <Image
                      src={project.image_url}
                      alt={`Estudo de caso: ${project.title}`}
                      fill
                      className="object-contain p-6 md:p-12 transition-transform duration-700 group-hover:scale-[1.01]"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority={index === 0}
                    />
                  )}
                </div>

                {/* NARRATIVA ESTRUTURADA */}
                <div className={`lg:col-span-5 flex flex-col ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>

                  {/* Nome e Link do Projeto */}
                  <div className="mb-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                      {project.category}
                    </span>
                    <h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-white flex items-center justify-between w-full">
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
                    </h4>
                  </div>

                  {/* Estrutura de Solução de Negócio baseada nas colunas do Supabase */}
                  <div className="space-y-8 font-light border-l border-border pl-6 md:pl-8">

                    {project.problem && (
                      <div>
                        <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-2">
                          Problema
                        </h5>
                        <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                          {project.problem}
                        </p>
                      </div>
                    )}

                    {project.strategy && (
                      <div>
                        <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-2">
                          Estratégia
                        </h5>
                        <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                          {project.strategy}
                        </p>
                      </div>
                    )}

                    {project.solution && (
                      <div>
                        <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-2">
                          Solução
                        </h5>
                        <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                          {project.solution}
                        </p>
                      </div>
                    )}

                    {project.result && (
                      <div>
                        <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-2">
                          Resultado
                        </h5>
                        <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
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
    </section>
  );
}