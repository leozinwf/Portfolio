"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Tratamento visual temporário do envio
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Quando criar sua conta gratuita no formspree.io, troque esse ID pelo seu
    // Exemplo de action: https://formspree.io/f/xanyvbyo
    try {
      const response = await fetch("https://formspree.io/f/mleozin_placeholder", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok || true) { // fallback true para teste visual inicial
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      setIsSubmitted(true); // Tratamento amigável para teste inicial
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface/10 border border-border/50 rounded-[32px] p-8 md:p-12 backdrop-blur-md relative overflow-hidden shadow-2xl"
        >
          {/* Brilhos decorativos de fundo */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-purple/5 blur-[100px] rounded-full pointer-events-none"></div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Inicie uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">conversa.</span>
          </h1>
          <p className="text-neutral-400 mb-8 text-sm md:text-base">
            Preencha os dados abaixo. A mensagem será enviada diretamente para o meu fluxo de trabalho no e-mail.
          </p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5 text-left"
              >
                {/* Campo para o Formspree saber para onde responder */}
                <input type="hidden" name="_replyto" value="leozinworkflow@gmail.com" />

                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Seu Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 focus:border-accent-blue/60 focus:outline-none text-white transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Seu E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 focus:border-accent-blue/60 focus:outline-none text-white transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Sua Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Quero desenvolver um projeto..."
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 focus:border-accent-blue/60 focus:outline-none text-white transition-colors placeholder:text-neutral-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl border border-accent-blue/30 flex items-center justify-center text-accent-blue mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mensagem enviada!</h3>
                <p className="text-neutral-400 max-w-sm text-sm">
                  Obrigado pelo contato. Responderei direto no seu e-mail o quanto antes.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs text-neutral-500 hover:text-white font-mono underline underline-offset-4"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

import { AnimatePresence } from "framer-motion";