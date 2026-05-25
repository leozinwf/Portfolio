"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, ArrowRight, CircleDollarSign, MessageSquare, ChevronDown } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projectNeeds = [
  "Website", "Landing Page", "Sistema Web", "App Mobile", 
  "Edição de Vídeo", "Motion Design", "Branding", "Automação", "Outro"
];

const deadlineOptions = [
  "Selecione um prazo",
  "Urgente (1 a 2 semanas)",
  "Curto (Até 1 mês)",
  "Médio (1 a 3 meses)",
  "Longo (Mais de 3 meses)",
  "Flexível"
];

// DADOS DA SUA FAQ SEPARADOS POR CATEGORIA
const faqData = [
  {
    category: "Processo",
    questions: [
      { q: "Como funciona o processo do projeto?", a: "Após o envio do formulário, analiso sua necessidade e retorno com uma proposta alinhada ao objetivo, escopo e direção do projeto." },
      { q: "O projeto já precisa estar planejado?", a: "Não. Posso ajudar desde a fase inicial da ideia, estruturação e definição da melhor solução." },
      { q: "Você ajuda na parte estratégica?", a: "Sim. Além do desenvolvimento visual e técnico, também auxilio na experiência, organização e direção criativa do projeto." },
      { q: "Posso enviar referências?", a: "Claro. Referências ajudam bastante a entender o estilo, identidade e resultado esperado." },
      { q: "Como funciona o briefing?", a: "O briefing serve para entender seu projeto, objetivos, referências, funcionalidades e necessidades específicas antes do início." },
      { q: "Como acompanho o andamento do projeto?", a: "O acompanhamento acontece durante todas as etapas, com atualizações, alinhamentos e validações conforme o desenvolvimento avança." }
    ]
  },
  {
    category: "Prazos",
    questions: [
      { q: "Qual o tempo médio de resposta?", a: "Normalmente respondo em até 24 horas úteis." },
      { q: "Quanto tempo leva para finalizar um projeto?", a: "O prazo varia conforme complexidade, escopo e quantidade de funcionalidades do projeto." },
      { q: "Existe prazo mínimo?", a: "Sim. Cada projeto possui um cronograma específico para garantir qualidade no resultado final." },
      { q: "O projeto é entregue pronto para uso?", a: "Sim. Os projetos são entregues prontos para utilização, publicação ou implementação." },
      { q: "O site funciona no celular?", a: "Sim. Todos os projetos são desenvolvidos de forma responsiva para desktop, tablet e dispositivos móveis." }
    ]
  },
  {
    category: "Pagamento",
    questions: [
      { q: "Como funciona o pagamento?", a: "O pagamento geralmente é dividido em etapas, com entrada inicial e restante alinhado durante o projeto." },
      { q: "Você emite nota fiscal?", a: "Dependendo do projeto e formato da contratação, isso pode ser alinhado previamente." },
      { q: "O orçamento é personalizado?", a: "Sim. Cada projeto possui necessidades diferentes, então os valores são definidos de forma personalizada." },
      { q: "Posso parcelar?", a: "Dependendo do escopo e duração do projeto, é possível alinhar formas de pagamento." },
      { q: "Existe valor mínimo para projetos?", a: "Sim. O valor varia conforme a complexidade e demanda envolvida no desenvolvimento." }
    ]
  },
  {
    category: "Tecnologia",
    questions: [
      { q: "Você desenvolve apenas websites?", a: "Não. Também trabalho com sistemas web, aplicações, automações, interfaces e soluções digitais personalizadas." },
      { q: "Quais tecnologias você utiliza?", a: "Utilizo tecnologias modernas focadas em performance, experiência e escalabilidade no desenvolvimento dos projetos." },
      { q: "Você cria sistemas personalizados?", a: "Sim. Os sistemas podem ser desenvolvidos conforme a necessidade específica de cada projeto." },
      { q: "Trabalha com automações?", a: "Sim. Também desenvolvo soluções automatizadas para otimizar processos e produtividade." },
      { q: "Faz integração com APIs?", a: "Sim. É possível integrar APIs, plataformas externas e serviços específicos conforme a necessidade do projeto." },
      { q: "O projeto é otimizado para performance?", a: "Sim. Os projetos são desenvolvidos buscando boa performance, organização e experiência de uso." }
    ]
  },
  {
    category: "Criativo",
    questions: [
      { q: "Você também trabalha com edição de vídeo?", a: "Sim. Trabalho com edição criativa, vídeos comerciais, reels, conteúdos cinematográficos e projetos audiovisuais." },
      { q: "Faz motion design?", a: "Sim. Também desenvolvo animações, motion graphics e elementos visuais dinâmicos." },
      { q: "Trabalha com identidade visual?", a: "Sim. Posso desenvolver identidade visual, direção estética e elementos visuais para marcas e projetos." },
      { q: "Pode cuidar da direção criativa?", a: "Sim. Além da execução técnica, também ajudo na construção visual e criativa do projeto." },
      { q: "Faz conteúdo para redes sociais?", a: "Sim. Também produzo conteúdos visuais e audiovisuais voltados para redes sociais." }
    ]
  },
  {
    category: "Suporte",
    questions: [
      { q: "Você faz manutenção após a entrega?", a: "Sim. Dependendo do projeto, posso oferecer suporte e manutenção contínua." },
      { q: "Posso solicitar atualizações futuras?", a: "Sim. Novas funcionalidades, ajustes e melhorias podem ser adicionados posteriormente." },
      { q: "Existe suporte técnico?", a: "Sim. O suporte pode ser alinhado conforme a necessidade do projeto." },
      { q: "Você oferece acompanhamento contínuo?", a: "Sim. Alguns projetos podem contar com acompanhamento, suporte e evolução contínua após a entrega." }
    ]
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", needs: "", deadline: "", message: "",
  });

  const [budgetValue, setBudgetValue] = useState<number>(15000);

  // Estados para a FAQ
  const [activeFaqCategory, setActiveFaqCategory] = useState(faqData[0].category);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      phone: formData.phone,
      company: formData.company,
      needs: formData.needs,
      deadline: formData.deadline,
      budget: formatCurrency(budgetValue),
      message: formData.message,
    }]);

    setIsSubmitting(false);

    if (error) {
      setErrorMsg("Ocorreu um erro ao enviar. Tente novamente ou me chame nas redes sociais.");
      console.error(error);
    } else {
      setIsSubmitted(true);
    }
  };

  const SelectCard = ({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all text-center duration-200 cursor-pointer ${
        active 
          ? "bg-white border-transparent shadow-md text-black" 
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
      <section className="relative max-w-4xl mx-auto text-center px-4 mb-16 z-10">
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
          Cada projeto possui uma necessidade diferente.<br className="hidden md:block" />
          Quanto mais detalhes você enviar, melhor consigo entender sua ideia e criar algo realmente estratégico.
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
          <p className="text-xs text-neutral-500 italic -mt-2 mb-4">Campos com * são obrigatórios</p>

          {/* 1. DADOS PESSOAIS */}
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

          {/* 2. CONTATO E EMPRESA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Telefone (WhatsApp) <span className="text-red-400">*</span></label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 transition-all" placeholder="(11) 99999-9999" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Empresa/Projeto</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 transition-all" placeholder="Nome do negócio" />
            </div>
          </div>

          {/* 3. NECESSIDADE TÉCNICA */}
          <div>
            <label className="block text-xs font-mono uppercase text-neutral-500 mb-3">Tipo de projeto</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {projectNeeds.map(need => (
                <SelectCard key={need} label={need} active={formData.needs === need} onClick={() => setFormData({...formData, needs: need})} />
              ))}
            </div>
          </div>

          {/* 4. PRAZO E ORÇAMENTO */}
          <div className="space-y-6">
            <div>
              <label htmlFor="deadline" className="block text-xs font-mono uppercase text-neutral-500 mb-2">Prazo Estimado</label>
              <select id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 transition-all appearance-none cursor-pointer text-white">
                {deadlineOptions.map(opt => (
                  <option key={opt} value={opt === "Selecione um prazo" ? "" : opt} className="bg-surface text-neutral-300">{opt}</option>
                ))}
              </select>
            </div>

            <div className="p-5 rounded-2xl bg-background/40 border border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <label htmlFor="budgetValue" className="block text-xs font-mono uppercase text-neutral-500">Orçamento Previsto</label>
                </div>
                <div className="flex items-center gap-2 bg-surface border border-border rounded-xl px-3 py-2 max-w-[160px]">
                  <CircleDollarSign className="w-4 h-4 text-neutral-500 shrink-0" />
                  <input 
                    id="budgetValue"
                    title="Orçamento Previsto"
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
                  id="budgetRange"
                  title="Orçamento Previsto"
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
          </div>

          {/* 5. MENSAGEM */}
          <div>
            <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Mensagem <span className="text-red-400">*</span></label>
            <textarea required name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-400 transition-all resize-none" placeholder="Descreva mais sobre sua ideia, o problema que deseja resolver, ou deixe links de referência..." />
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
                <>Solicitar orçamento <Send className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </motion.form>

        {/* --- FAQ SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-16 border-t border-border/30 max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">Perguntas Frequentes</h2>
            <p className="text-sm text-neutral-500">Tire suas dúvidas sobre o meu processo, prazos e métodos de trabalho.</p>
          </div>

          {/* Filtros da FAQ (Tabs) */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqData.map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => {
                  setActiveFaqCategory(cat.category);
                  setOpenFaqIndex(null); // Fecha a aba aberta ao mudar de categoria
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFaqCategory === cat.category
                    ? "bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                    : "bg-surface/20 text-neutral-400 border border-border/40 hover:text-white hover:bg-surface/40"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Acordeão de Perguntas */}
          <div className="space-y-3">
            {faqData.find(c => c.category === activeFaqCategory)?.questions.map((faq, idx) => (
              <div key={idx} className="border border-border/40 rounded-xl bg-surface/10 overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-surface/20 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? "rotate-180 text-white" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-4 pt-1 text-sm text-neutral-400 leading-relaxed border-t border-border/10 mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* REDES SOCIAIS */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center gap-4"
        >
          <p className="text-sm text-neutral-500">Ou entre em contato diretamente pelas redes:</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/leozinwf" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface/30 border border-border/50 rounded-xl hover:bg-surface/80 hover:text-accent-blue transition-colors text-neutral-400">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/leonardosabatini" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface/30 border border-border/50 rounded-xl hover:bg-surface/80 hover:text-accent-blue transition-colors text-neutral-400">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}