"use client";

import { motion } from "framer-motion";
import { Film, Play, Sparkles, MonitorSmartphone, Clapperboard, Tv } from "lucide-react";

const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const motionCategories = [
  {
    id: "reel",
    title: "Showreel & Vídeos Principais",
    subtitle: "A essência do ritmo e da montagem",
    description: "Compilações dinâmicas de projetos, edições de alto impacto e direção visual que sintetizam conceitos complexos em narrativas cinemáticas curtas e memoráveis.",
    icon: <Film className="w-5 h-5 text-accent-blue" />,
    placeholderText: "[ Seu Showreel / Vídeo Principal aqui ]",
    aspectRatio: "video", // 16:9
  },
  {
    id: "ui-animation",
    title: "UI Animation & Micro-interactions",
    subtitle: "A engenharia do movimento invisível",
    description: "Animações de interface aplicadas que ditam o fluxo do usuário. Transições de estados, feedbacks táteis visuais e comportamentos orgânicos criados para reter atenção.",
    icon: <MonitorSmartphone className="w-5 h-5 text-accent-purple" />,
    placeholderText: "[ Demonstração de Interface / Screen Recording Animado ]",
    aspectRatio: "video",
  },
  {
    id: "vfx-graphics",
    title: "VFX & Motion Graphics",
    subtitle: "Composição e manipulação visual",
    description: "Inserção de efeitos digitais, animações de elementos vetoriais e tipografia cinética. Onde a abstração matemática se torna arte em movimento.",
    icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
    placeholderText: "[ Experimento de VFX ou Motion Graphics ]",
    aspectRatio: "video",
  },
  {
    id: "reels-shorts",
    title: "Vertical Content & Reels",
    subtitle: "Engajamento nativo e retenção rápida",
    description: "Produção de conteúdo vertical otimizado para prender a atenção nos primeiros 3 segundos, unindo cortes cirúrgicos, sonorização expressiva e design ágil.",
    icon: <Clapperboard className="w-5 h-5 text-orange-500" />,
    placeholderText: "[ Reel / Shorts 9:16 ]",
    aspectRatio: "vertical", // 9:16
  }
];

export default function MotionPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative max-w-4xl mx-auto text-center px-4 mb-24 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none -z-10 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-6"
        >
          <Tv className="w-3.5 h-3.5 text-accent-blue" />
          <span>Visual & Cinemático</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          Design que se move. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-neutral-400">
            Histórias que convertem.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          Do frame estático à composição em tempo real. Orquestro ritmo, transições e efeitos visuais para transformar código e telas em experiências cinematográficas imersivas.
        </motion.p>
      </section>

      {/* --- GRID DE CATEGORIAS E SHOWCASE --- */}
      <section className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex flex-col gap-20">
          {motionCategories.map((category, index) => {
            const isVertical = category.aspectRatio === "vertical";

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: cinematicEasing }}
                className={`flex flex-col gap-8 lg:gap-12 items-stretch ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* LADO TEXTUAL */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-surface rounded-xl border border-border/50 shadow-inner">
                      {category.icon}
                    </div>
                    <span className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                      {category.subtitle}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {category.title}
                  </h2>

                  <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                    {category.description}
                  </p>
                </div>

                {/* LADO DO PLAYER/MOCKUP */}
                <div className={`w-full lg:w-7/12 flex justify-center items-center`}>
                  <div 
                    className={`relative w-full rounded-2xl bg-surface/30 border border-border/60 overflow-hidden shadow-2xl group flex items-center justify-center backdrop-blur-sm transition-colors duration-300 hover:border-accent-blue/30 ${
                      isVertical ? "max-w-[280px] aspect-[9/16]" : "aspect-video"
                    }`}
                  >
                    {/* Elemento Interno de Midia */}
                    <div className="absolute inset-2 rounded-xl bg-background/80 border border-border/40 flex flex-col items-center justify-center p-4 text-center transition-all duration-500 group-hover:scale-[1.01]">
                      
                      {/* Ícone de Play de alta fidelidade */}
                      <div className="w-12 h-12 rounded-full bg-surface border border-border/60 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-accent-blue group-hover:text-white group-hover:scale-110 shadow-lg cursor-pointer">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                      
                      <span className="text-xs font-mono text-neutral-400 mt-4 tracking-widest uppercase">
                        {category.placeholderText}
                      </span>

                      {/* Dica técnica comentada para quando integrar vídeo real */}
                      {/* Quando tiver o arquivo de vídeo (.mp4 ou embed), substitua esse bloco por:
                        <video 
                          src={`/motion/${category.id}.mp4`} 
                          controls 
                          className="w-full h-full object-cover rounded-xl"
                          poster={`/motion/${category.id}-thumb.jpg`}
                        />
                      */}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}