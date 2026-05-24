"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, ArrowRight, CircleDollarSign, MessageSquare } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projectNeeds = [
  "Web Full-Stack", "SAAS personalizado", "UI/UX Design", "Consultoria / Outro"
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "", email: "", needs: "", objective: "",
  });

  const [budgetValue, setBudgetValue] = useState<number>(15000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const supabase = createClient();
    
    const { error } = await supabase.from("leads").insert([{
      name: formData.name,
      email: formData.email,
      needs: formData.needs,
      budget: formatCurrency(budgetValue),
      objective: formData.objective,
    }]);

    setIsSubmitting(false);

    if (error) {
      setErrorMsg("Ocorreu um erro ao enviar. Tente novamente ou me chame nas redes sociais.");
    } else {
      setIsSubmitted(true);
    }
  };

  // SelectCard ajustado para usar a paleta inteligente do globals.css
  const SelectCard = ({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all text-center duration-200 cursor-pointer ${
        active 
          ? "bg-white border-transparent shadow-md" 
          : "border-border/60 bg-surface/20 text-neutral-500 hover:border-neutral-400 hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center transition-colors duration-500">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full p-8 rounded-3xl bg-surface/30 border border-border/50 text-center backdrop-blur-xl">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">Briefing Recebido</h2>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8">
            Seus dados foram salvos com sucesso. Analisarei a sua solicitação e retornarei o contato em breve.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-surface border border-border px-6 py-3 rounded-xl hover:bg-surface/80 transition-colors">
            Voltar ao início <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 overflow-hidden min-h-screen transition-colors duration-500">
      
      {/* --- HERO SECTION --- */}
      <section className="relative max-w-4xl mx-auto text-center px-4 mb-20 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none -z-10 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-6 text-white"
        >
          <MessageSquare className="w-3.5 h-3.5 text-accent-blue" />
          <span>Contato & Briefing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-white"
        >
          Vamos iniciar o seu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-neutral-500">
            próximo grande projeto.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed"
        >
          Me conte um pouco sobre sua ideia, necessidade técnica e expectativas. Analisarei as informações para estruturarmos a arquitetura ideal.
        </motion.p>
      </section>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: cinematicEasing, delay: 0.3 }}
          onSubmit={handleSubmit} 
          className="space-y-8 bg-surface/30 border border-border/40 p-6 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl"
        >
          
          {/* 1. DADOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Nome <span className="text-red-400">*</span></label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 transition-all" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">E-mail <span className="text-red-400">*</span></label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 transition-all" placeholder="seu@email.com" />
            </div>
          </div>

          {/* 2. NECESSIDADE TÉCNICA */}
          <div>
            <label className="block text-xs font-mono uppercase text-neutral-500 mb-3">O que você precisa? (Opcional)</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {projectNeeds.map(need => (
                <SelectCard key={need} label={need} active={formData.needs === need} onClick={() => setFormData({...formData, needs: need})} />
              ))}
            </div>
          </div>

          {/* 3. ORÇAMENTO DEDICADO */}
          <div className="p-5 rounded-2xl bg-background/40 border border-border/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500">Orçamento Previsto</label>
              </div>
              <div className="flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2 max-w-[160px]">
                <CircleDollarSign className="w-4 h-4 text-neutral-500 shrink-0" />
                <input 
                  type="text" 
                  value={new Intl.NumberFormat('pt-BR').format(budgetValue)}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, "");
                    setBudgetValue(Number(onlyNumbers));
                  }}
                  className="w-full bg-transparent text-sm font-semibold outline-none text-right"
                />
                <span className="text-xs text-neutral-500 font-mono">BRL</span>
              </div>
            </div>

            <div className="space-y-2">
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000"
                value={budgetValue}
                onChange={(e) => setBudgetValue(Number(e.target.value))}
                className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-accent-blue"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                <span>R$ 1k</span>
                <span className="font-medium bg-surface px-2 py-0.5 rounded border border-border/40 text-white">{formatCurrency(budgetValue)}</span>
                <span>R$ 100k+</span>
              </div>
            </div>
          </div>

          {/* 4. DETALHES */}
          <div>
            <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Detalhes do Projeto <span className="text-red-400">*</span></label>
            <textarea required name="objective" rows={4} value={formData.objective} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 transition-all resize-none" placeholder="Descreva o escopo, problema que deseja resolver ou deixe links de referência..." />
          </div>

          {errorMsg && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl text-center">
              {errorMsg}
            </div>
          )}

          {/* BOTÃO */}
          <div className="pt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-sm font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>Enviando... <Loader2 className="w-4 h-4 animate-spin" /></>
              ) : (
                <>Enviar Solicitação <Send className="w-4 h-4" /></>
              )}
            </button>
          </div>

        </motion.form>
      </div>
    </div>
  );
}