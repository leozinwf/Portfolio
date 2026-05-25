"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Carregamento dinâmico do React Quill para respeitar a estilização Notion do seu globals.css
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-full bg-surface/10 border border-border/40 rounded-xl flex items-center justify-center text-xs text-neutral-500 font-mono">
      Carregando editor de texto...
    </div>
  ),
});

// Cast to any to avoid TSX prop type mismatch from the dynamic import
const ReactQuillAny: any = ReactQuill;

export default function NewPostPage() {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [readTime, setReadTime] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Gera o slug limpo automaticamente baseado no título digitado
  useEffect(() => {
    const generatedSlug = title
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/[^a-z0-9\s-]/g, "")    // Remove caracteres especiais
      .replace(/[\s_]+/g, "-")         // Transforma espaços em hífens
      .replace(/-+/g, "-");            // Evita hífens duplicados
    setSlug(generatedSlug);
  }, [title]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("blog_posts").insert([
        {
          title,
          slug,
          category: category || null,
          read_time: readTime || null,
          excerpt: excerpt || null,
          content,
          is_published: isPublished,
        },
      ]);

      if (error) throw error;

      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      console.error("Erro ao salvar o artigo:", error);
      alert("Erro ao criar a publicação. Verifique os logs do console.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/blog"
          className="p-2 rounded-xl border border-border/40 bg-surface/10 text-neutral-400 hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h2 className="text-xl font-semibold text-white">Nova Publicação</h2>
          <p className="text-xs text-neutral-400 mt-0.5">Escreva um artigo rico para a aba de Blog do seu site.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-6 border border-border/40 rounded-3xl bg-surface/10 backdrop-blur-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Título */}
            <div className="space-y-1.5">
              <label htmlFor="title" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Título do Post</label>
              <input
                id="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: A Engenharia do Movimento"
                title="Título do artigo do blog"
                className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>

            {/* Slug */}
            <div className="space-y-1.5">
              <label htmlFor="slug" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Slug (URL)</label>
              <input
                id="slug"
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="slug-da-url"
                title="URL amigável para o artigo"
                className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Categoria */}
            <div className="space-y-1.5">
              <label htmlFor="category" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Categoria</label>
              <input
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Ex: Estudos, Bastidores, Experimentos"
                title="Categoria do artigo do blog"
                className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>

            {/* Tempo de Leitura */}
            <div className="space-y-1.5">
              <label htmlFor="readTime" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Tempo de Leitura</label>
              <input
                id="readTime"
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="Ex: 5 min de leitura"
                title="Tempo estimado de leitura do artigo"
                className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>
          </div>

          {/* Resumo */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Resumo (Excerpt)</label>
            <textarea
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Uma breve introdução descritiva que aparece no card da listagem pública..."
              className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors resize-none"
            />
          </div>

          {/* Editor Rich Text */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Conteúdo do Artigo</label>
            <ReactQuillAny
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Escreva o conteúdo formatado aqui..."
            />
          </div>

          {/* Controle de Status */}
          <div className="flex items-center justify-between border-t border-border/30 pt-4 mt-2">
            <div>
              <h4 className="text-sm font-medium text-white">Publicar Artigo</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Se desativado, o post será armazenado como rascunho privado.</p>
            </div>
            <label htmlFor="isPublished" className="relative inline-flex items-center cursor-pointer select-none">
              <input
                id="isPublished"
                type="checkbox"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                title="Publicar ou manter como rascunho"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-neutral-800 border border-border/40 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-neutral-400 after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500/20 peer-checked:border-emerald-500/50 peer-checked:after:bg-emerald-500"></div>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-black px-6 py-2.5 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Salvando...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" /> Salvar Artigo
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}