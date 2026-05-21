"use client";

import { motion } from "framer-motion";
import { Globe, MonitorSmartphone, Video, Workflow, Check } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Posicionamento Digital",
    description: "Google Meu Negócio, identidade online, presença profissional e branding visual para destacar sua marca no mercado.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Desenvolvimento Web & Sistemas",
    description: "Landing pages de alta conversão, sistemas personalizados, plataformas SaaS, automações e dashboards gerenciais.",
    icon: <MonitorSmartphone className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Audiovisual & Conteúdo",
    description: "Vídeos comerciais, reels de alto impacto, cinematografia, motion design e efeitos visuais (VFX) que retêm a atenção.",
    icon: <Video className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Estratégia & Performance",
    description: "Automação de processos, organização digital, engenharia de experiência do usuário (UX) e otimização de fluxos de trabalho.",
    icon: <Workflow className="w-6 h-6" />,
  }
];

const deliverables = [
  "Landing pages", "Sistemas internos", "SaaS", "Dashboards",
  "Portais", "Sites institucionais", "Automação RPA", "Branding digital",
  "Vídeos comerciais", "Motion design", "Estrutura visual para marcas"
];

export function Services() {
  return (
    <section className="py-32 w-full relative bg-background border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabeçalho */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Serviços <span className="font-light italic text-neutral-500">Premium.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg md:text-xl font-light"
          >
            Não entrego apenas código ou vídeos. Desenvolvo a estrutura completa para que sua marca tenha uma presença digital inquestionável.
          </motion.p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="group p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="mb-8 text-neutral-300 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* O que eu posso construir */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="p-10 md:p-16 rounded-[2.5rem] bg-neutral-900/50 border border-white/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">O que eu construo</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-black/20 text-neutral-300 text-sm">
                <Check className="w-4 h-4 text-neutral-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}