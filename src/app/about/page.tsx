"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Film, Layers, User } from "lucide-react";
import Link from "next/link";

// Ícones Sociais
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 overflow-hidden">
      
      {/* =========================================
          1. HERO & MANIFESTO
      ========================================= */}
      <section className="relative max-w-4xl mx-auto text-center px-4 mb-24 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none -z-10 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-6"
        >
          <User className="w-3.5 h-3.5 text-accent-blue" />
          <span>O Manifesto</span>
        </motion.div>

        {/* Ajuste de leading-tight e padding (pb-2) para evitar corte nos ascendentes e descendentes */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight pb-2 text-white"
        >
          Engenharia invisível. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-neutral-400 py-1">
            Impacto absoluto.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed space-y-6"
        >
          <p>
            Não encaro a tecnologia apenas como infraestrutura funcional. Encaro-a como o meio mais poderoso de perceção, comunicação e posicionamento estratégico do nosso tempo.
          </p>
          <p className="text-base md:text-lg">
            No estúdio LeozinWF, o objetivo não é entregar ferramentas. É arquitetar ecossistemas digitais onde o desenvolvimento robusto, a direção de arte e a automação de negócios convergem para construir uma autoridade inquestionável.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative">
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        {/* =========================================
            2. A FILOSOFIA
        ========================================= */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
          >
            <div className="lg:col-span-4">
              <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500 sticky top-32">
                A Interseção
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-10 text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
              <p>
                Acreditamos que um sistema que funciona com perfeição matemática, mas falha em comunicar o valor da marca, é um produto incompleto. O mercado atual pune interfaces genéricas com a irrelevância.
              </p>
              <p>
                A nossa especialidade é <span className="text-white font-medium">romper as fronteiras entre o lógico e o estético.</span> Desde o código de backend (integrações Serverless e arquiteturas SaaS) até às microinterações no ecrã (Motion & VFX), cada decisão é milimetricamente calculada para reter a atenção do utilizador.
              </p>
            </div>
          </motion.div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>

        {/* =========================================
            3. PILARES DE ENGENHARIA
        ========================================= */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
          >
            <div className="lg:col-span-4">
              <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500 sticky top-32">
                Os 3 Pilares
              </h2>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:border-accent-blue/30 transition-all duration-300">
                <Layers className="w-6 h-6 text-accent-blue mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-white mb-4 leading-tight">Direção de Arte Visual</h3>
                <p className="text-neutral-400 font-light leading-relaxed text-base">
                  Antes da primeira linha de código, definimos a identidade. O design não é cosmético; é uma ferramenta psicológica de retenção e posicionamento *premium* da sua marca.
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:border-accent-purple/30 transition-all duration-300">
                <Terminal className="w-6 h-6 text-accent-purple mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-white mb-4 leading-tight">Engenharia de Produto</h3>
                <p className="text-neutral-400 font-light leading-relaxed text-base">
                  Arquitetura de dados escalável, sistemas de alta performance e código sustentável. Construímos infraestruturas preparadas para aguentar o crescimento exponencial do seu negócio.
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:border-emerald-500/30 transition-all duration-300 md:col-span-2">
                <Film className="w-6 h-6 text-emerald-500 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-white mb-4 leading-tight">Sistemas e Automação Operacional</h3>
                <p className="text-neutral-400 font-light leading-relaxed text-base max-w-2xl">
                  Sistemas não devem apenas ser bonitos, devem devolver o ativo mais precioso: tempo. Implementamos lógicas de backend e automações invisíveis que removem o atrito operacional, permitindo que a sua equipa se foque na estratégia, e não na operação.
                </p>
              </div>

            </div>
          </motion.div>
        </section>

        {/* =========================================
            4. CTA FINAL
        ========================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="py-24 md:py-32 mt-8 md:mt-16 text-center border-t border-white/5 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-gradient-to-t from-accent-blue/5 to-transparent pointer-events-none -z-10 blur-3xl rounded-full"></div>

          {/* Ajuste de padding inferior também aqui para os descendentes do span */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-white leading-tight pb-2">
            Vamos construir o seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple py-1">próximo nível.</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Projetos de alta performance exigem uma execução impecável. Reserve uma sessão estratégica e descubra como podemos escalar a sua presença digital.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="group relative px-10 py-5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Agendar Sessão Estratégica
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            
            <div className="flex items-center gap-3">
              <a href="https://github.com/leozinwf" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-blue/50 transition-all duration-300">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/leonardosabatini" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-blue/50 transition-all duration-300">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/leozinwf" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-purple/50 transition-all duration-300">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}