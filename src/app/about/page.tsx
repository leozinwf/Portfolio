"use client";

import { motion } from "framer-motion";
import { TechStack } from "@/components/sections/TechStack";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-1 gap-12"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              A história<span className="text-accent-purple">.</span>
            </h1>
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p>
                Meu nome é <span className="text-white font-medium">Leonardo Sabatini</span>, mas no mundo digital me conhecem como <span className="text-accent-blue font-medium">leozinwf</span>.
              </p>
              <p>
                Minha trajetória começou no audiovisual, onde aprendi que a estética e o ritmo são fundamentais para reter a atenção de alguém. Mas a curiosidade técnica me levou além.
              </p>
              <p>
                Passei anos gerenciando servidores dedicados e criando scripts de tradução e automação. Essa base de infraestrutura me deu o rigor necessário para construir aplicações que não são apenas bonitas, mas sólidas e escaláveis.
              </p>
              <p>
                Hoje, unifico essas duas frentes: o design cinematográfico do audiovisual com a engenharia robusta do desenvolvimento Full-Stack e RPA.
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Ferramentas que domino</h2>
          <TechStack />
        </div>
      </div>
    </div>
  );
}