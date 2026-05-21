"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, TrendingUp, Target } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const impacts = [
  {
    title: "Autoridade Imediata",
    description: "Elevamos a percepção de valor da sua marca no primeiro segundo de navegação, através de design refinado e interações milimétricas.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Operações Inteligentes",
    description: "Desenhamos lógicas de sistema complexas e bases de dados que automatizam as suas operações, reduzindo o erro humano e o esforço manual.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Performance Inegociável",
    description: "Código limpo, arquitetura serverless e otimização extrema garantem carregamentos instantâneos, fundamentais para a conversão.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Segurança e Escala",
    description: "Aplicações preparadas para crescer. Implementamos infraestruturas sólidas que suportam o aumento de tráfego de forma natural e segura.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export function CorporateImpact() {
  return (
    <section className="py-24 md:py-32 w-full bg-background relative border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
              Por que líderes escolhem o nosso <span className="font-light italic text-neutral-500">estúdio?</span>
            </h2>
            <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
              Não entregamos apenas estética. Entregamos plataformas digitais concebidas para dominar mercados, converter visitantes em clientes e otimizar processos internos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: cinematicEasing }}
                className="p-8 rounded-2xl bg-surface/40 border border-border hover:border-neutral-400/30 transition-colors"
              >
                <div className="text-neutral-300 mb-6 bg-surface border border-border w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-lg font-medium text-white mb-3 tracking-tight">{item.title}</h4>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}