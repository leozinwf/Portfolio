"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NewProjectPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    problem: "",
    strategy: "",
    solution: "",
    result: "",
    image_url: "",
    live_url: "",
    is_published: true,
    is_featured: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: 'is_published' | 'is_featured') => {
    setFormData({ ...formData, [name]: !formData[name] });
  };

  const generateSlug = () => {
    const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    setFormData({ ...formData, slug });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const supabase = createClient();
    const { error } = await supabase.from("projects").insert([formData]);

    setIsLoading(false);

    if (error) {
      setMessage({ type: 'error', text: `Erro ao salvar: ${error.message}` });
    } else {
      setMessage({ type: 'success', text: "Projeto criado com sucesso!" });
      setTimeout(() => { router.push("/admin"); }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 text-white">
      <header className="border-b border-border bg-surface/30 px-8 py-4 flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
        <Link href="/admin" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <button 
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-white text-black text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2 hover:bg-neutral-200 transition-colors disabled:opacity-70"
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Salvar Estudo de Caso
        </button>
      </header>

      <main className="container mx-auto px-6 max-w-3xl mt-12">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight mb-1">Novo Estudo de Caso</h1>
          <p className="text-neutral-400 font-light text-sm">Desenha a fundação estrutural e narrativa do projeto.</p>
        </div>

        {message && (
          <div className={`p-4 rounded-md mb-8 text-sm font-medium border ${message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>
            {message.text}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Configurações de Exibição Dinâmica */}
          <div className="p-6 rounded-2xl border border-border bg-surface/30 flex flex-col sm:flex-row gap-6 justify-between sm:items-center">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="is_featured" checked={formData.is_featured} onChange={() => handleCheckboxChange('is_featured')} className="mt-1 accent-white" />
              <label htmlFor="is_featured" className="cursor-pointer">
                <span className="block text-sm font-medium">Destacar na Home Page</span>
                <span className="block text-xs text-neutral-400 font-light">Se selecionado, o projeto aparecerá na seção principal do teu site.</span>
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="is_published" checked={formData.is_published} onChange={() => handleCheckboxChange('is_published')} className="mt-1 accent-white" />
              <label htmlFor="is_published" className="cursor-pointer">
                <span className="block text-sm font-medium">Publicar no Índice Geral</span>
                <span className="block text-xs text-neutral-400 font-light">Tornar o projeto visível na página de listagem global de projetos.</span>
              </label>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface/30 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-border pb-4">Especificações Primárias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Título do Projeto</label>
                <input name="title" value={formData.title} onChange={handleChange} onBlur={generateSlug} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" placeholder="Ex: DooHub" />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Categoria</label>
                <input name="category" value={formData.category} onChange={handleChange} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" placeholder="Ex: SaaS Corporativo" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Slug URL</label>
                <input name="slug" value={formData.slug} onChange={handleChange} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" placeholder="ex: doohub" />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Imagem URL</label>
                <input name="image_url" value={formData.image_url} onChange={handleChange} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" placeholder="/projects/doohub.webp" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Link de Produção (Opcional)</label>
              <input name="live_url" value={formData.live_url} onChange={handleChange} className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" placeholder="https://doohub.app" />
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface/30 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-border pb-4">Arquitetura de Caso</h2>
            <div>
              <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Problema</label>
              <textarea name="problem" value={formData.problem} onChange={handleChange} rows={3} required title="Problema" placeholder="Descreva o problema identificado..." className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 resize-none" />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Estratégia</label>
              <textarea name="strategy" value={formData.strategy} onChange={handleChange} rows={3} required title="Estratégia" placeholder="Descreva a estratégia..." className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 resize-none" />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Solução</label>
              <textarea
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                rows={3}
                required
                title="Solução"
                placeholder="Descreva a solução proposta..."
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 resize-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Resultado</label>
              <textarea name="result" value={formData.result} onChange={handleChange} rows={3} required className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 resize-none" placeholder="Descreva os resultados alcançados..." />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}