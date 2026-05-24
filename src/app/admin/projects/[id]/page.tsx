"use client";

import { useState, useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { ArrowLeft, Save, Loader2, UploadCloud, ImageIcon, Wand2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] flex items-center justify-center text-neutral-500 text-sm">Carregando editor...</div>
});

const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

export default function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fetching, setFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Guardamos os dados originais para comparar se houve mudança
  const [initialData, setInitialData] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: "", slug: "", category: "", description: "",
    problem: "", strategy: "", solution: "", result: "",
    content: "", image_url: "", live_url: "",
    is_published: true, is_featured: false,
  });

  useEffect(() => {
    async function loadProject() {
      const supabase = createClient();
      const { data, error } = await supabase.from("projects").select("*").eq("id", id).single();

      if (!error && data) {
        const loadedData = {
          title: data.title || "", slug: data.slug || "", category: data.category || "",
          description: data.description || "", problem: data.problem || "",
          strategy: data.strategy || "", solution: data.solution || "",
          result: data.result || "", content: data.content || "",
          image_url: data.image_url || "", live_url: data.live_url || "",
          is_published: data.is_published ?? true, is_featured: data.is_featured ?? false,
        };
        setFormData(loadedData);
        setInitialData(loadedData); // Salva a cópia
      } else {
        setMessage({ type: 'error', text: "Falha ao carregar os dados originais." });
      }
      setFetching(false);
    }
    loadProject();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = (field: 'is_published' | 'is_featured') => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleGenerateSlug = () => {
    if (formData.title) {
      const slug = formData.title.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/[\s_]+/g, '-').replace(/-+/g, '-');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  // Verifica se o formulário atual é diferente do original carregado do banco
  const hasChanges = initialData ? JSON.stringify(formData) !== JSON.stringify(initialData) : false;

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const supabase = createClient();
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `projetos/${fileName}`;

    try {
      const { error: uploadError } = await supabase.storage.from('portfolio').upload(filePath, file);
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from('portfolio').getPublicUrl(filePath);
      setFormData(prev => ({ ...prev, image_url: data.publicUrl }));
      setMessage({ type: 'success', text: "Nova mídia indexada." });
    } catch (error: any) {
      setMessage({ type: 'error', text: `Falha no upload: ${error.message}` });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasChanges) return;

    setIsLoading(true);
    setMessage(null);

    const supabase = createClient();
    const { error } = await supabase.from("projects").update(formData).eq("id", id);

    setIsLoading(false);

    if (error) {
      setMessage({ type: 'error', text: `Erro ao salvar: ${error.message}` });
    } else {
      setMessage({ type: 'success', text: "Projeto atualizado com sucesso." });
      setInitialData(formData); // Atualiza a cópia original para o botão desativar de novo
      setTimeout(() => { router.push("/admin/projects"); }, 1500);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center text-neutral-500 font-mono text-xs gap-2">
        <Loader2 className="w-4 h-4 animate-spin" /> Recuperando informações do banco...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-12">
          <Link href="/admin/projects" className="text-xs font-mono uppercase text-neutral-500 hover:text-white flex items-center gap-2 mb-6 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" /> Voltar à lista
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Editar Projeto</h1>
          <p className="text-neutral-500 text-sm font-light">Modifique as informações ou expanda a publicação do projeto.</p>
        </div>

        {message && (
          <div className={`p-4 rounded-xl mb-8 text-sm font-medium border ${message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10 bg-surface/30 border border-border/40 p-6 md:p-8 rounded-3xl backdrop-blur-xl">

          {/* 01. IDENTIFICAÇÃO PRINCIPAL */}
          <div className="space-y-5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-border/40 pb-2">01. Identificação & SEO</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Título do Projeto *</label>
                <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 transition-all text-white" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Slug URL *</label>
                <div className="flex gap-2">
                  <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 transition-all text-white" />
                  <button type="button" onClick={handleGenerateSlug} className="px-3 bg-surface border border-border rounded-xl text-neutral-400 hover:text-white transition-colors flex items-center justify-center shrink-0 cursor-pointer" title="Gerar automaticamente do título">
                    <Wand2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Categoria *</label>
              <input required type="text" name="category" value={formData.category} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 transition-all text-white" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Descrição Curta (Cards e Home) *</label>
              <textarea required name="description" rows={2} value={formData.description} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 transition-all resize-none text-white" />
            </div>
          </div>

          {/* 02. ARQUIVOS E ENDEREÇOS */}
          <div className="space-y-5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-border/40 pb-2">02. Mídias & Conexões</h2>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">URL de Produção (Live URL)</label>
              <input type="url" name="live_url" value={formData.live_url} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 transition-all" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Imagem de Capa</label>
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                <button type="button" onClick={() => fileInputRef.current?.click()} disabled={isUploading} className="flex items-center gap-2 bg-surface border border-border/60 px-4 py-2.5 rounded-xl text-xs font-medium hover:text-white hover:border-neutral-400 transition-all disabled:opacity-50 cursor-pointer">
                  {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />} Alterar Mídia
                </button>
                {formData.image_url && <span className="text-xs text-emerald-400 font-mono flex items-center gap-1"><ImageIcon className="w-3.5 h-3.5" /> Link ativo no Storage</span>}
              </div>
              {formData.image_url && (
                <div className="mt-4 relative aspect-video w-full max-w-sm rounded-2xl overflow-hidden border border-border/40 bg-background/40">
                  <Image src={formData.image_url} alt="Preview" fill className="object-contain p-2" />
                </div>
              )}
            </div>
          </div>

          {/* 03. CASO DE ESTUDO RESUMIDO */}
          <div className="space-y-5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-border/40 pb-2">03. Arquitetura de Caso (Resumos)</h2>
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">O Problema</label>
                <textarea name="problem" rows={3} value={formData.problem} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 transition-all resize-none" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">A Estratégia</label>
                <textarea name="strategy" rows={3} value={formData.strategy} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 transition-all resize-none" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">A Solução</label>
                <textarea name="solution" rows={3} value={formData.solution} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 transition-all resize-none" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">O Resultado</label>
                <textarea name="result" rows={3} value={formData.result} onChange={handleChange} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 transition-all resize-none" />
              </div>
            </div>
          </div>

          {/* 04. PUBLICAÇÃO COMPLETA */}
          <div className="space-y-5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-border/40 pb-2">04. Publicação Completa</h2>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">Conteúdo do Artigo / Caso Completo</label>
              <div className="bg-background/50 rounded-xl overflow-hidden border border-border/40">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                  modules={quillModules}
                  className="min-h-[300px]"
                />
              </div>
            </div>
          </div>

          {/* 05. CONFIGURAÇÕES DE VISIBILIDADE */}
          <div className="space-y-5">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-border/40 pb-2">05. Status de Exibição</h2>
            <div className="flex flex-wrap gap-4">
              <button type="button" onClick={() => handleToggle('is_published')} className={`px-4 py-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${formData.is_published ? 'bg-white text-black border-transparent' : 'border-border/60 text-neutral-500'}`}>
                {formData.is_published ? "✓ Publicado Ativo" : "Rascunho Oculto"}
              </button>
              <button type="button" onClick={() => handleToggle('is_featured')} className={`px-4 py-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${formData.is_featured ? 'bg-white text-black border-transparent' : 'border-border/60 text-neutral-500'}`}>
                {formData.is_featured ? "★ Destacado na Home" : "Exibição Padrão"}
              </button>
            </div>
          </div>

          {/* BOTÃO DE SALVAR E ATUALIZAR (NO FINAL) */}
          <div className="pt-8 border-t border-border/40 flex justify-end">
            <button
              type="submit"
              disabled={!hasChanges || isLoading || isUploading}
              className="bg-white text-black text-sm font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              {hasChanges ? "Salvar Alterações" : "Sem mudanças para salvar"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}