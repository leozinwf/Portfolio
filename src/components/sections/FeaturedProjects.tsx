"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Image from "next/image";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const cases = [
  {
    id: "grana-xp",
    title: "Grana XP",
    category: "Plataforma SaaS & Gamificação",
    problem: "Modelos financeiros tradicionais são burocráticos e monótonos, gerando baixa retenção e o abandono rápido por parte dos utilizadores.",
    strategy: "Aplicar design comportamental e mecânicas de progressão para converter tarefas financeiras em jornadas intuitivas e envolventes.",
    solution: "Uma plataforma interativa de alto padrão visual com sincronização instantânea e sistemas de engajamento ativo.",
    result: "Aumento imediato na consistência do utilizador e transformação de dados frios em uma experiência digital valiosa.",
    image: "/projects/grana_xp.webp",
    link: "https://grana-xp.vercel.app/"
  },
  {
    id: "doohub",
    title: "DooHub",
    category: "Hub de Gestão Corporativa",
    problem: "Empresas enfrentam dificuldades crónicas para centralizar operações internas, gestão de equipas e comunicação corporativa.",
    strategy: "Estruturar um ecossistema digital integrado, focado em simplicidade absoluta, organização inteligente e escalabilidade de negócio.",
    solution: "Um hub operacional centralizado que unifica RH, produtividade e canais de comunicação com uma interface imersiva e segura.",
    result: "Otimização do fluxo de trabalho, eliminação de falhas operacionais e consolidação de uma presença corporativa forte.",
    image: "/projects/doohub.webp",
    link: "https://doohub.vercel.app/"
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-32 md:py-48 w-full relative bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        
        {/* Cabeçalho da Seção com Foco Estratégico */}
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

        {/* Lista de Casos de Estudo */}
        <div className="flex flex-col gap-40 md:gap-52">
          {cases.map((project, index) => (
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
                <Image
                  src={project.image}
                  alt={`Estudo de caso: ${project.title}`}
                  fill
                  className="object-contain p-6 md:p-12 transition-transform duration-700 group-hover:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={index === 0}
                />
              </div>

              {/* NARRATIVA ESTRUTURADA */}
              <div className={`lg:col-span-5 flex flex-col ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                
                {/* 1. NOME DO PROJETO */}
                <div className="mb-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-white flex items-center justify-between w-full">
                    {project.title}
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-neutral-400 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </h4>
                </div>

                {/* ESTRUTURA OBRIGATÓRIA DA SOLUÇÃO DE NEGÓCIO */}
                <div className="space-y-8 font-light border-l border-border pl-6">
                  
                  {/* 2. PROBLEMA */}
                  <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-2">
                      Problema
                    </h5>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                      {project.problem}
                    </p>
                  </div>
                  
                  {/* 3. ESTRATÉGIA */}
                  <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-2">
                      Estratégia
                    </h5>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                      {project.strategy}
                    </p>
                  </div>

                  {/* 4. SOLUÇÃO */}
                  <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-2">
                      Solução
                    </h5>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                      {project.solution}
                    </p>
                  </div>

                  {/* 5. RESULTADO */}
                  <div>
                    <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-2">
                      Resultado
                    </h5>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                      {project.result}
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}