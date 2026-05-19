"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface/20 border border-border/50 rounded-[40px] p-8 md:p-16 backdrop-blur-sm relative overflow-hidden"
        >
           {/* Glow decorativo */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-blue/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-purple/10 blur-[100px] rounded-full"></div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Inicie uma <span className="text-accent-blue">conversa.</span></h1>
          <p className="text-neutral-400 text-lg mb-12 max-w-xl mx-auto">
            Seja para um projeto novo, uma consultoria de automação ou apenas para trocar uma ideia sobre tech.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="mailto:contato@leozinwf.space" className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-surface/40 border border-border/60 hover:border-accent-blue/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-white font-medium">E-mail</span>
            </a>
            
            <a href="#" className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-surface/40 border border-border/60 hover:border-accent-blue/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-white font-medium">WhatsApp</span>
            </a>

            <a href="#" className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-surface/40 border border-border/60 hover:border-accent-blue/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                <Send className="w-6 h-6" />
              </div>
              <span className="text-white font-medium">Telegram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}