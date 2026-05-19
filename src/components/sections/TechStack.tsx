"use client";

import { motion } from "framer-motion";

// Lista de tecnologias (ajuste como preferir)
const stackItems = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Supabase",
  "Framer Motion",
  "SQL Server",
  "RPA",
  "UI/UX Design",
  "Photoshop"
];

export function TechStack() {
  // Duplicamos o array para criar a ilusão de um loop infinito contínuo
  const duplicatedStack = [...stackItems, ...stackItems];

  return (
    <section className="py-12 w-full overflow-hidden relative border-y border-border/40 bg-surface/20 mt-20">
      
      {/* Máscaras de gradiente nas bordas para dar um efeito "fade" suave nas laterais */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-fit">
        <motion.div
          className="flex gap-8 px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20, // Tempo que leva para dar a volta (aumente para mais lento)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedStack.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 py-3 bg-surface/50 border border-border/50 rounded-xl backdrop-blur-sm whitespace-nowrap text-sm font-medium text-neutral-300 hover:text-white hover:border-accent-blue/50 transition-colors cursor-default"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}