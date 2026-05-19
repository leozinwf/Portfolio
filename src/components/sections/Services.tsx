"use client";

import { motion } from "framer-motion";
import { Code2, LayoutDashboard, Bot, Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Desenvolvimento Web & Apps",
    description: "Criação de aplicações full-stack escaláveis e de alta performance utilizando ecossistemas modernos como Next.js, React e Supabase.",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Dashboards & Interfaces",
    description: "Sistemas internos e plataformas interativas (incluindo lógicas gamificadas) focadas na melhor experiência do usuário e visualização de dados.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Automação (RPA) & Infra",
    description: "Desenvolvimento de robôs e scripts para automatizar fluxos de trabalho, atuando desde rotinas manuais até etapas críticas de análise de sistemas.",
    icon: <Bot className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Motion & UI Design",
    description: "Interfaces com animações fluidas, transições elegantes e micro-interações que transformam um site comum em um produto digital premium.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
  }
];

export function Services() {
  return (
    <section className="py-24 w-full relative bg-surface/10 border-y border-border/40">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            O que eu <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">entrego</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Soluções completas de ponta a ponta. Do design da interface até a lógica do servidor e automação de processos.
          </motion.p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-3xl bg-surface/20 border border-border/50 hover:bg-surface/40 transition-all duration-300"
            >
              {/* Ícone com Glow de fundo */}
              <div className="mb-6 relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface border border-border/60 text-white group-hover:scale-110 transition-transform duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}></div>
                {service.icon}
              </div>

              {/* Textos */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}