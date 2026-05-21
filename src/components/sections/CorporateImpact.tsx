"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Target, TrendingUp } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export function CorporateImpact() {
  return (
    <section className="py-32 md:py-40 w-full relative bg-background border-t border-white/5 overflow-hidden">
      
      {/* Glow de fundo extremamente subtil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho Premium */}
        <div className="mb-24 md:mb-32 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="flex items-center gap-3 mb-6"
          >
            <Target className="w-4 h-4 text-neutral-500" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500">
              A Vantagem Competitiva
            </h2>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Posicionamento & <br className="hidden md:block" />
            <span className="font-light italic text-neutral-500">Engenharia Digital.</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEasing }}
            className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light"
          >
            A interseção perfeita entre como a sua marca é vista pelo mercado e como a sua operação funciona nos bastidores. Construo o seu ecossistema digital de ponta a ponta.
          </motion.p>
        </div>

        {/* Grid Split do Impacto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
          
          {/* Card 1: Posicionamento & Soluções Digitais */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: cinematicEasing }}
            className="group p-10 md:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="mb-10 text-neutral-400 group-hover:text-white transition-colors duration-500">
                <Globe className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Posicionamento & <br/> Soluções Digitais
              </h4>
              <p className="text-neutral-400 leading-relaxed font-light text-lg mb-12">
                A primeira impressão dita o valor do seu negócio. Desenvolvo soluções digitais que elevam a percepção da sua marca — desde a identidade visual e interfaces modernas (UI/UX) até landing pages de alta conversão. O objetivo é criar vitrines digitais que comuniquem autoridade inquestionável.
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-500">
              <span>Métrica de Sucesso</span>
              <span className="text-white font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Autoridade e Conversão
              </span>
            </div>
          </motion.div>

          {/* Card 2: Arquitetura de Sistemas & Dashboards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: cinematicEasing }}
            className="group p-10 md:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="mb-10 text-neutral-400 group-hover:text-white transition-colors duration-500">
                <Cpu className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Arquitetura de <br/> Sistemas & Dashboards
              </h4>
              <p className="text-neutral-400 leading-relaxed font-light text-lg mb-12">
                Por trás de um grande posicionamento, deve existir um motor robusto. Desenvolvimento full-stack de ecossistemas internos (SaaS, Web Apps, Portais). Crio arquiteturas de dados escaláveis e painéis gerenciais intuitivos que organizam a sua operação e suportam o crescimento do negócio.
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-500">
              <span>Métrica de Sucesso</span>
              <span className="text-white font-medium flex items-center gap-2">
                Escalabilidade Operacional
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}