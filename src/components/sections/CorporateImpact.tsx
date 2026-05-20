"use client";

import { motion, type Easing } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";

const cinematicEasing: Easing = [0.16, 1, 0.3, 1] as const;

export function CorporateImpact() {
  return (
    <section className="py-32 w-full relative border-t border-border/40 overflow-hidden">
      {/* Background Glow dinâmico adaptado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-3/4 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            A vantagem do <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-neutral-400">Perfil Híbrido</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
            className="text-neutral-400 text-lg md:text-xl leading-relaxed"
          >
            A lacuna entre o design visual e a engenharia de software é onde a maioria dos produtos falha. O perfil híbrido elimina essa fricção.
          </motion.p>
        </div>

        {/* Grid Split do Impacto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: Produto Coeso */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="group p-8 md:p-10 rounded-[32px] border border-border/50 bg-surface/20 backdrop-blur-sm flex flex-col justify-between hover:border-accent-blue/30 transition-all duration-300"
          >
            <div>
              <div className="w-14 h-14 mb-8 p-3 bg-surface rounded-2xl border border-border/50 shadow-inner flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-accent-blue" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Execução Sem Perda de Fidelidade
              </h3>
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg mb-8">
                O maior pesadelo de um produto é um design incrível no Figma que se transforma em uma interface engessada no navegador. Sendo o criador da experiência e o engenheiro da interface, garanto que cada pixel, sombra e micro-interação imaginada seja codificada com precisão absoluta.
              </p>
            </div>
            
            <div className="pt-6 border-t border-border/40 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>Resultado</span>
              <span className="text-accent-blue font-bold">100% Fidelidade Visual</span>
            </div>
          </motion.div>

          {/* Card 2: Sistemas Orgânicos */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="group p-8 md:p-10 rounded-[32px] border border-border/50 bg-surface/20 backdrop-blur-sm flex flex-col justify-between hover:border-accent-purple/30 transition-all duration-300"
          >
            <div>
              <div className="w-14 h-14 mb-8 p-3 bg-surface rounded-2xl border border-border/50 shadow-inner flex items-center justify-center">
                <Layers className="w-7 h-7 text-accent-purple" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Sistemas, não apenas Telas
              </h3>
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg mb-8">
                Interfaces estáticas não retêm usuários. Através do "Systems Thinking", construo aplicações completas (SaaS, Dashboards, Web Apps) integrando lógicas de automação e regras complexas de negócio, tudo empacotado em um ecossistema fluido e cinematográfico.
              </p>
            </div>
            
            <div className="pt-6 border-t border-border/40 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>Resultado</span>
              <span className="text-accent-purple font-bold">Ecossistemas Escaláveis</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}