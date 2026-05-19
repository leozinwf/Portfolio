"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Ícones Customizados (SVG)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export function Cta() {
  return (
    <section className="w-full relative mt-12">
      {/* Background Glow Específico pro CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl pt-24 pb-12 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Vamos construir algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">incrível?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Estou sempre aberto a novos desafios, automações complexas e projetos que exigem um visual impecável.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3">
            <WhatsAppIcon className="w-5 h-5" />
            Iniciar Conversa
          </a>
          <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-xl border border-border bg-surface/50 hover:bg-surface hover:border-accent-blue/50 transition-all text-white flex items-center justify-center gap-3">
            <Mail className="w-5 h-5" />
            Enviar E-mail
          </a>
        </motion.div>

        {/* Rodapé Minimalista */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-blue transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            {/* Adicione o LinkedIn aqui se quiser, usando a mesma estrutura */}
          </div>

          <div className="text-neutral-500 text-sm flex flex-col items-center md:items-end">
            <p>© 2026 Leonardo Sabatini. Todos os direitos reservados.</p>
            <p className="mt-1">São Bernardo do Campo, SP — Brasil.</p>
          </div>
        </motion.footer>

      </div>
    </section>
  );
}