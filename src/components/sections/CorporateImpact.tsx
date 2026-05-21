"use client";

import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";

export function CorporateImpact() {
  return (
    <section className="py-32 md:py-40 w-full relative bg-background border-t border-white/5 flex justify-center overflow-hidden">
      
      {/* Brilho de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none -z-10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-10"
        >
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <Fingerprint className="w-8 h-8 text-neutral-400" strokeWidth={1} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 1 }}
          className="text-3xl md:text-5xl font-medium text-white mb-10 leading-tight"
        >
          Arte encontra <span className="font-light italic text-neutral-500">Engenharia.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="space-y-8 text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Não vemos a tecnologia apenas como funcionalidade. Vemos como experiência, perceção e comunicação estratégica. 
          </p>
          <p>
            No estúdio LeozinWF, o foco não é criar algo que simplesmente "funcione". A nossa missão é construir infraestruturas digitais completas — com identidade, presença e um impacto inquestionável. Unimos o rigor lógico e métrico da engenharia de software à sensibilidade estética da direção de arte cinematográfica.
          </p>
          <p className="text-neutral-300 font-medium">
            Se procura o padrão, está no lugar errado. Se procura excelência digital, vamos conversar.
          </p>
        </motion.div>

      </div>
    </section>
  );
}