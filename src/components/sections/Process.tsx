"use client";

import { motion } from "framer-motion";
import { Eye, Compass, Code2, Rocket } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    id: "01",
    title: "Discovery & Estratégia",
    description: "Imersão profunda no seu modelo de negócio para alinhar objetivos comerciais ao ecossistema digital. Mapeamos as necessidades do público-alvo, analisamos o posicionamento dos concorrentes e desenhamos a arquitetura ideal da solução antes de tocar em qualquer linha de código.",
    icon: <Compass className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Direção Visual & UX",
    description: "Prototipagem de interfaces exclusivas e de alta fidelidade, projetadas especificamente para gerar autoridade imediata. Cada microinteração, escolha tipográfica e transição fluida é planeada para reter a atenção do utilizador e comunicar o valor premium da sua marca.",
    icon: <Eye className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Engenharia de Produto",
    description: "Tradução da visão criativa em infraestrutura robusta e de alta performance. Desenvolvimento full-stack limpo e escalável utilizando Next.js, React e Supabase, assegurando carregamentos instantâneos, segurança de dados e uma base sólida prontificada para o crescimento.",
    icon: <Code2 className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "Implementação & Evolução",
    description: "Lançamento estratégico do produto no mercado com otimização minuciosa para produção. Estruturamos painéis gerenciais e dashboards intuitivos para que possa acompanhar métricas em tempo real, garantindo que a plataforma continue a evoluir com máxima eficiência.",
    icon: <Rocket className="w-5 h-5" strokeWidth={1.5} />,
  },
];

export function Process() {
  return (
    <section className="py-32 md:py-40 w-full relative bg-background border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="mb-24 md:mb-32 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500">
              O Método
            </h2>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEasing }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Uma abordagem linear e <br className="hidden md:block" />
            <span className="font-light italic text-neutral-500">milimetricamente executada.</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEasing }}
            className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light"
          >
            Projetos de alto impacto não acontecem por acaso. Sigo um processo transparente que elimina a adivinhação e garante previsibilidade do início ao fim.
          </motion.p>
        </div>

        {/* Linhas de Processo Minimalistas */}
        <div className="flex flex-col border-t border-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: cinematicEasing }}
              className="group py-12 md:py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start hover:bg-white/[0.01] transition-colors duration-500 px-4 rounded-xl"
            >
              {/* Fase, Número e Ícone */}
              <div className="md:col-span-2 flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                <span className="font-mono text-xs text-neutral-500 tracking-wider">
                  FASE {step.id}
                </span>
                <div className="text-neutral-500 group-hover:text-white transition-colors duration-500">
                  {step.icon}
                </div>
              </div>

              {/* Título da Etapa */}
              <div className="md:col-span-4">
                <h4 className="text-2xl font-medium text-white group-hover:translate-x-1 transition-transform duration-500">
                  {step.title}
                </h4>
              </div>

              {/* Descrição Detalhada */}
              <div className="md:col-span-6">
                <p className="text-neutral-400 leading-relaxed font-light text-base md:text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}