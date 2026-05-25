"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Inbox, Calendar, User, Mail, DollarSign, Briefcase, Loader2, CheckCircle2, Circle, Phone, Building, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  needs: string;
  deadline: string | null;
  budget: string;
  objective: string | null;
  message: string | null;
  created_at: string;
  is_read: boolean;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setLeads(data);
      }
      setIsLoading(false);
    }

    fetchLeads();
  }, []);

  const toggleReadStatus = async (id: string, currentStatus: boolean) => {
    const supabase = createClient();
    const newStatus = !currentStatus;

    setLeads((prev) => 
      prev.map((lead) => lead.id === id ? { ...lead, is_read: newStatus } : lead)
    );

    await supabase.from("leads").update({ is_read: newStatus }).eq("id", id);
  };

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-neutral-500" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white">Leads & Contactos</h2>
        <p className="text-sm text-neutral-400 mt-1">
          Acompanhe e gira as propostas de briefing submetidas no formulário do portfólio.
        </p>
      </div>

      <div className="space-y-4">
        {leads.length === 0 ? (
          <div className="p-12 border border-border/50 rounded-2xl bg-surface/20 text-center backdrop-blur-sm">
            <Inbox className="w-8 h-8 text-neutral-500 mx-auto mb-3" />
            <p className="text-sm text-neutral-400">Nenhum contacto recebido até ao momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {leads.map((lead) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 border rounded-2xl bg-surface/20 backdrop-blur-sm space-y-4 transition-colors ${
                  lead.is_read ? "border-border/50 opacity-70" : "border-accent-blue/50 shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                }`}
              >
                {/* Cabeçalho do Lead */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/10 pb-4">
                  <div className="flex items-start gap-3">
                    {/* Alterado de bg-white/5 fixa para usar bg-surface do tema */}
                    <div className={`p-2 rounded-xl border mt-1 md:mt-0 ${lead.is_read ? 'bg-surface border-border/40 text-neutral-400' : 'bg-accent-blue/10 border-accent-blue/30 text-accent-blue'}`}>
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white flex items-center flex-wrap gap-2">
                        {lead.name}
                        {/* Alterado de bg-neutral-900/50 fixa para usar bg-surface e border do tema */}
                        {lead.company && (
                          <span className="text-xs text-neutral-400 font-normal bg-surface px-2 py-0.5 rounded-full flex items-center gap-1 border border-border/60">
                            <Building className="w-3 h-3" /> {lead.company}
                          </span>
                        )}
                        {!lead.is_read && (
                          <span className="bg-accent-blue/20 text-accent-blue text-[10px] px-2 py-0.5 rounded-full border border-accent-blue/20 uppercase tracking-wider">
                            Novo
                          </span>
                        )}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                        <a href={`mailto:${lead.email}`} className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                          <Mail className="w-3 h-3" /> {lead.email}
                        </a>
                        {lead.phone && (
                          <a 
                            href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs text-neutral-400 hover:text-emerald-500 transition-colors flex items-center gap-1.5"
                          >
                            <Phone className="w-3 h-3" /> {lead.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 w-full md:w-auto">
                    <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(lead.created_at).toLocaleDateString("pt-BR", {
                        day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
                      })}
                    </span>
                    
                    <button
                      onClick={() => toggleReadStatus(lead.id, lead.is_read)}
                      className={`flex items-center justify-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                        lead.is_read 
                          ? "bg-surface border-border text-neutral-400 hover:text-white" 
                          : "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20"
                      }`}
                    >
                      {lead.is_read ? (
                        <><Circle className="w-3.5 h-3.5" /> Marcar não lido</>
                      ) : (
                        <><CheckCircle2 className="w-3.5 h-3.5" /> Marcar como lido</>
                      )}
                    </button>
                  </div>
                </div>

                {/* Detalhes Técnicos, Orçamento e Prazo */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-background/30 p-4 rounded-xl border border-border/30 text-sm">
                  <div className="flex items-start gap-2 text-neutral-300">
                    <Briefcase className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">Projeto</span>
                      {/* Alterado de text-neutral-200 para text-white (que adapta dinamicamente) */}
                      <span className="font-medium text-white">{lead.needs || "Não especificada"}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-300">
                    <DollarSign className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">Orçamento</span>
                      {/* Alterado de text-emerald-400/90 para alternar a cor conforme o tema */}
                      <span className="font-medium text-emerald-600 dark:text-emerald-400">{lead.budget || "Não especificado"}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-300">
                    <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">Prazo</span>
                      {/* Alterado de text-neutral-200 para text-white */}
                      <span className="font-medium text-white">{lead.deadline || "Não especificado"}</span>
                    </div>
                  </div>
                </div>

                {/* Mensagem / Objetivo */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                    Mensagem do Cliente
                  </span>
                  <p className="text-sm text-neutral-300 leading-relaxed bg-background/50 p-4 rounded-xl border border-border/40 whitespace-pre-wrap">
                    {lead.message || lead.objective || "Nenhuma mensagem adicionada."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}