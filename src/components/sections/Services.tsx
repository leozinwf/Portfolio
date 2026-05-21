"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Code2, Video, Workflow } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Engenharia Web & Sistemas",
    description: "Landing pages de alta conversão, plataformas SaaS e dashboards gerenciais desenvolvidos com performance impecável e arquitetura escalável.",
    icon: <Code2 className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "Posicionamento & Branding",
    description: "Estruturação de identidade online, presença profissional corporativa e design visual focado inteiramente na perceção de alto valor da sua marca.",
    icon: <MonitorSmartphone className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "Audiovisual & Motion",
    description: "Narrativas visuais, vídeos comerciais, motion design e efeitos cinematográficos projetados para reter a atenção e engajar o seu público-alvo.",
    icon: <Video className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: "Estratégia & Automação",
    description: "Engenharia de experiência do utilizador (UX), otimização de fluxos de trabalho e sistemas invisíveis que automatizam e escalam a sua operação.",
    icon: <Workflow className="w-6 h-6" strokeWidth={1.5} />,
  }
];

const deliverables = [
  "Landing Pages", "SaaS", "Dashboards", "Portais Corporativos",
   "Motion Design", "Branding Digital", "E-commerce Premium"
];

export function Services() {
  return (
    <section className="py-32 md:py-40 w-full relative bg-background border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500">
              Expertise
            </h2>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6"
          >
            Arquitetura de <span className="font-light italic text-neutral-500">Valor.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed"
          >
            Não entregamos apenas código ou vídeos. Desenvolvemos a infraestrutura completa para que a sua marca domine o ambiente digital e gere autoridade instantânea.
          </motion.p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="group p-10 md:p-12 rounded-3xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="mb-8 text-neutral-500 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light text-base md:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* O que construímos - Visual Pílulas Minimalistas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          <h3 className="text-sm font-mono tracking-widest uppercase text-neutral-500 mb-8">O que nós construímos</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {deliverables.map((item, i) => (
              <div 
                key={i} 
                className="px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300 text-sm font-light tracking-wide hover:bg-white/[0.05] transition-colors cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}