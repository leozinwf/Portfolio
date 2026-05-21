"use client";

import { motion } from "framer-motion";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

const stackCategories = [
  {
    title: "Engenharia de Interface",
    tools: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Infraestrutura & Dados",
    tools: ["Supabase", "PostgreSQL", "Node.js", "Serverless"]
  },
  {
    title: "Design & Experiência",
    tools: ["Figma", "UI/UX System", "Motion Design", "Design Comportamental"]
  }
];

export function TechStack() {
  return (
    <section className="py-20 w-full relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-sm font-mono tracking-widest uppercase text-neutral-500 mb-12"
        >
          Fundação Tecnológica
        </motion.p>

        {/* Atualizado para divide-border (linhas divisórias visíveis em ambos os temas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {stackCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: cinematicEasing }}
              className="flex flex-col items-center pt-8 md:pt-0 px-4 text-center"
            >
              <h4 className="text-white font-medium mb-6 text-sm tracking-wide">
                {category.title}
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {category.tools.map((tool) => (
                  <span 
                    key={tool} 
                    // Atualizado para bg-surface/50 e border-border
                    className="px-3 py-1.5 text-xs font-mono text-neutral-400 bg-surface/50 border border-border rounded-md shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}