"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { ArrowLeft, Save, Loader2, Trash2 } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EditProjectPage({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
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

  useEffect(() => {
    async function loadProject() {
      const supabase = createClient();
      const { data, error } = await supabase.from("projects").select("*").eq("id", id).single();
      
      if (!error && data) {
        setFormData({
          title: data.title || "",
          slug: data.slug || "",
          category: data.category || "",
          problem: data.problem || "",
          strategy: data.strategy || "",
          solution: data.solution || "",
          result: data.result || "",
          image_url: data.image_url || "",
          live_url: data.live_url || "",
          is_published: data.is_published,
          is_featured: data.is_featured,
        });
      }
      setIsLoading(false);
    }
    loadProject();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (name: 'is_published' | 'is_featured') => {
    setFormData({ ...formData, [name]: !formData[name] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);

    const supabase = createClient();
    const { error } = await supabase.from("projects").update(formData).eq("id", id);

    setIsSaving(false);

    if (error) {
      setMessage({ type: 'error', text: `Erro ao atualizar: ${error.message}` });
    } else {
      setMessage({ type: 'success', text: "Projeto atualizado com sucesso!" });
      setTimeout(() => { router.push("/admin"); }, 1500);
    }
  };

  const handleDelete = async () => {
    if (confirm("Tens a certeza que queres eliminar permanentemente este projeto?")) {
      const supabase = createClient();
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (!error) { router.push("/admin"); }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-neutral-500 gap-2 font-mono text-xs">
        <Loader2 className="w-5 h-5 animate-spin" /> Carregando registro...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 text-white">
      <header className="border-b border-border bg-surface/30 px-8 py-4 flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
        <Link href="/admin" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={handleDelete} className="p-2 border border-red-500/20 text-red-500 bg-red-500/5 hover:bg-red-500/10 rounded-md transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
          <button 
            onClick={handleSubmit} disabled={isSaving}
            className="bg-white text-black text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2 hover:bg-neutral-200 transition-colors disabled:opacity-70"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Salvar Alterações
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-3xl mt-12">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight mb-1">Editar: {formData.title}</h1>
          <p className="text-neutral-400 font-light text-sm">Modifica os parâmetros estratégicos da publicação.</p>
        </div>

        {message && (
          <div className={`p-4 rounded-md mb-8 text-sm font-medium border ${message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>{message.text}</div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="p-6 rounded-2xl border border-border bg-surface/30 flex flex-col sm:flex-row gap-6 justify-between sm:items-center">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="is_featured" checked={formData.is_featured} onChange={() => handleCheckboxChange('is_featured')} className="mt-1 accent-white" />
              <label htmlFor="is_featured" className="cursor-pointer">
                <span className="block text-sm font-medium">Destacar na Home Page</span>
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="is_published" checked={formData.is_published} onChange={() => handleCheckboxChange('is_published')} className="mt-1 accent-white" />
              <label htmlFor="is_published" className="cursor-pointer">
                <span className="block text-sm font-medium">Publicar no Índice Geral</span>
              </label>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface/30 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-border pb-4">Especificações Primárias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Título do Projeto</label>
                <input name="title" value={formData.title} onChange={handleChange} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Categoria</label>
                <input name="category" value={formData.category} onChange={handleChange} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Slug URL</label>
                <input name="slug" value={formData.slug} onChange={handleChange} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Imagem URL</label>
                <input name="image_url" value={formData.image_url} onChange={handleChange} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Link de Produção</label>
              <input name="live_url" value={formData.live_url} onChange={handleChange} className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" />
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface/30 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-border pb-4">Arquitetura de Caso</h2>
            <div><label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Problema</label><textarea name="problem" value={formData.problem} onChange={handleChange} rows={3} className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 resize-none" /></div>
            <div><label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Estratégia</label><textarea name="strategy" value={formData.strategy} onChange={handleChange} rows={3} className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 resize-none" /></div>
            <div><label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Solução</label><textarea name="solution" value={formData.solution} onChange={handleChange} rows={3} className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 resize-none" /></div>
            <div><label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Resultado</label><textarea name="result" value={formData.result} onChange={handleChange} rows={3} className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 resize-none" /></div>
          </div>
        </form>
      </main>
    </div>
  );
}