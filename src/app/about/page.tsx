"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Film, Layers } from "lucide-react";
import Link from "next/link";

// Ícones Sociais (Mantidos e Otimizados)
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
    <div className="min-h-screen pt-32 pb-10 relative overflow-hidden bg-background">
      
      {/* Brilho de Fundo Cinematográfico */}
      <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none -z-10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative">
        
        {/* =========================================
            1. HERO & MANIFESTO
        ========================================= */}
        <section className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
              <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500">
                O Manifesto
              </h2>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-10 leading-[1.05] text-white">
              Engenharia invisível. <br className="hidden md:block" />
              <span className="font-light italic text-neutral-500">Impacto absoluto.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-3xl mb-8">
              Não encaro a tecnologia apenas como infraestrutura funcional. Encaro-a como o meio mais poderoso de perceção, comunicação e posicionamento estratégico do nosso tempo.
            </p>
            
            <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl font-light">
              No estúdio LeozinWF, o objetivo não é entregar ferramentas. É arquitetar ecossistemas digitais onde o desenvolvimento robusto, a direção de arte e a automação de negócios convergem para construir uma autoridade inquestionável.
            </p>
          </motion.div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>

        {/* =========================================
            2. A FILOSOFIA (GRID ASSIMÉTRICA)
        ========================================= */}
        <section className="py-24">
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
            3. PILARES DE ENGENHARIA (CARDS PREMIUM)
        ========================================= */}
        <section className="py-24">
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
              
              {/* Card 1 */}
              <div className="p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-colors">
                <Layers className="w-6 h-6 text-neutral-500 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-white mb-4">Direção de Arte Visual</h3>
                <p className="text-neutral-400 font-light leading-relaxed text-base">
                  Antes da primeira linha de código, definimos a identidade. O design não é cosmético; é uma ferramenta psicológica de retenção e posicionamento *premium* da sua marca.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-colors">
                <Terminal className="w-6 h-6 text-neutral-500 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-white mb-4">Engenharia de Produto</h3>
                <p className="text-neutral-400 font-light leading-relaxed text-base">
                  Arquitetura de dados escalável, sistemas de alta performance e código sustentável. Construímos infraestruturas preparadas para aguentar o crescimento exponencial do seu negócio.
                </p>
              </div>

              {/* Card 3 (Ocupa as duas colunas em ecrãs grandes) */}
              <div className="p-10 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-colors md:col-span-2">
                <Film className="w-6 h-6 text-neutral-500 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-white mb-4">Sistemas e Automação Operacional</h3>
                <p className="text-neutral-400 font-light leading-relaxed text-base max-w-2xl">
                  Sistemas não devem apenas ser bonitos, devem devolver o ativo mais precioso: tempo. Implementamos lógicas de backend e automações invisíveis que removem o atrito operacional, permitindo que a sua equipa se foque na estratégia, e não na operação.
                </p>
              </div>

            </div>
          </motion.div>
        </section>

        {/* =========================================
            4. CTA FINAL (FOCO EM CONSULTORIA)
        ========================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="py-32 mt-16 text-center border-t border-white/5 relative"
        >
          {/* Spotlight no CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none -z-10 blur-3xl rounded-full"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-white">
            Vamos construir o seu <br />
            <span className="font-light italic text-neutral-500">próximo nível.</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
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
              <a href="https://github.com/SEU_GITHUB" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-300">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/SEU_LINKEDIN" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-300">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/SEU_INSTA" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-300">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}