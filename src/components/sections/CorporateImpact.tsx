"use client";

import { motion, type Easing } from "framer-motion";
import { Bot, LineChart, Server, ShieldCheck } from "lucide-react";

const cinematicEasing: Easing = [0.16, 1, 0.3, 1] as const;

export function CorporateImpact() {
  return (
    <section className="py-32 w-full relative">
      {/* Background Glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-3/4 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Impacto em <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">escala.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
            className="text-neutral-400 text-lg max-w-2xl leading-relaxed"
          >
            Sistemas arquitetados para resolver gargalos operacionais, reduzir falhas humanas e garantir estabilidade para fluxos de trabalho críticos.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

          {/* Card 1: Dashboards (Ocupa 1 coluna) */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
            className="md:col-span-1 group relative p-8 md:p-10 rounded-[32px] bg-surface/20 border border-border/50 hover:bg-surface/40 hover:border-accent-purple/30 transition-all duration-500 overflow-hidden flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="mb-8 p-4 bg-background/50 rounded-2xl w-fit border border-border/50">
              <LineChart className="w-8 h-8 text-accent-purple" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              SaaS & UX Interna
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Dashboards analíticos de alta performance. Convertendo bancos de dados densos em decisões visuais claras.
            </p>
          </motion.div>

          {/* Card 2: Infra (Ocupa as 3 colunas em formato horizontal) */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEasing }}
            className="md:col-span-3 group relative p-8 md:p-10 rounded-[32px] bg-surface/20 border border-border/50 hover:bg-surface/40 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-background/50 rounded-xl border border-border/50">
                  <Server className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="p-3 bg-background/50 rounded-xl border border-border/50">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Infraestrutura & Nuvem
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Setup de ambientes seguros em nuvem (Oracle Cloud/Linux) e orquestração de scripts para manipulação massiva de dados, garantindo que o back-end suporte a escalabilidade da operação.
              </p>
            </div>
            
            {/* Elemento Visual Decorativo (Terminal Fake) */}
            <div className="w-full md:w-[400px] h-32 bg-background/80 rounded-2xl border border-border/50 p-4 font-mono text-xs text-emerald-500/70 flex flex-col gap-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
              <span>&gt; system_check --status</span>
              <span>[OK] All sub-systems operational.</span>
              <span>&gt; _</span>
              <div className="w-2 h-4 bg-emerald-500/70 animate-pulse"></div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}