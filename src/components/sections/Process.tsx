"use client";

import { motion } from "framer-motion";
import { GitBranch, Layout, Cpu, Rocket, Workflow } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    id: "01",
    title: "Discovery & Estratégia",
    description: "Mapeamento do modelo de negócio, definição da direção criativa e planeamento da arquitetura de software. Nenhuma linha de código é escrita sem um propósito comercial claro.",
    icon: <GitBranch className="w-5 h-5" />
  },
  {
    id: "02",
    title: "Design & Narrativa Visual",
    description: "Criação de interfaces imersivas e fluxos de utilizador de alta conversão. Aplicamos tipografia rigorosa e animações fluidas para transmitir uma estética de luxo digital.",
    icon: <Layout className="w-5 h-5" />
  },
  {
    id: "03",
    title: "Engenharia & Automação",
    description: "Desenvolvimento full-stack robusto. Construímos a infraestrutura com React e Supabase, integrando robôs de análise e automações que substituem processos manuais.",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    id: "04",
    title: "Escala & Otimização",
    description: "Testes de performance, deploy em cloud e monitorização contínua. O ecossistema é entregue preparado para lidar com elevado tráfego e pronto para evoluir.",
    icon: <Rocket className="w-5 h-5" />
  }
];

export function Process() {
  return (
    <section className="py-32 md:py-40 w-full relative bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Workflow className="w-4 h-4 text-neutral-500" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500">
              Metodologia de Elite
            </h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
          >
            Engenharia de <span className="font-light italic text-neutral-500">ponta a ponta.</span>
          </motion.h3>
        </div>

        <div className="relative">
          {/* Linha vertical de conexão - Agora usa via-border para ser visível em ambos os modos */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: cinematicEasing }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Espaçador para manter alinhamento central em ecrãs grandes */}
                <div className="hidden md:block flex-1" />

                {/* Nó central (Círculo do ícone) - Ajustado para bg-surface e border-border */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-border bg-surface text-neutral-400 shrink-0 shadow-sm">
                  {step.icon}
                </div>

                {/* Conteúdo do Card - Ajustado para bg-surface/30 */}
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-2xl border border-border bg-surface/30 hover:border-neutral-400/30 transition-colors duration-500 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <span className="text-xs font-mono text-neutral-500 mb-3 block">Fase {step.id}</span>
                    <h4 className="text-xl font-medium text-white mb-4">{step.title}</h4>
                    <p className="text-neutral-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}