"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const technologies = [
  "React 19", "Next.js", "TypeScript", "Node.js", 
  "Supabase", "Tailwind CSS", "Framer Motion", "Vite",
  "Adobe Suite", "Blender 3D", "Figma"
];

export function TechStack() {
  return (
    <section className="py-24 w-full relative bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center mb-12"
        >
          <Cpu className="w-6 h-6 text-neutral-500 mb-6" strokeWidth={1.5} />
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
            Infraestrutura Moderna
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl">
            As nossas plataformas são construídas sobre um ecossistema de ponta, focado rigorosamente na performance, escalabilidade e numa experiência visual imersiva.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {technologies.map((tech, i) => (
            <div 
              key={i} 
              className="px-6 py-3 rounded-full border border-white/5 bg-white/[0.01] text-neutral-400 text-sm font-mono tracking-wide hover:bg-white/[0.03] hover:text-white hover:border-white/10 transition-all duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}