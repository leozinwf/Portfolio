"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { ArrowLeft, Save, Loader2, Image as ImageIcon, X } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-full bg-surface/10 border border-border/40 rounded-xl flex items-center justify-center text-xs text-neutral-500 font-mono">
      Carregando editor de texto...
    </div>
  ),
});

const ReactQuillAny: any = ReactQuill;

export default function NewPostPage() {
  const router = useRouter();
  const supabase = createClient();
  const quillRef = useRef<any>(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [readTime, setReadTime] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Estados para a Imagem de Capa
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string>("");

  useEffect(() => {
    const generatedSlug = title
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-");
    setSlug(generatedSlug);
  }, [title]);

  // Função utilitária para fazer upload no bucket "all"
  const uploadToSupabase = async (file: File, folder: string) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("all")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from("all").getPublicUrl(filePath);
    return data.publicUrl;
  };

  // Handler customizado para upload de imagens dentro do React Quill
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (input.files && input.files[0]) {
        const file = input.files[0];
        try {
          const url = await uploadToSupabase(file, "blog-content");
          const quill = quillRef.current?.getEditor();
          if (quill) {
            const range = quill.getSelection(true);
            quill.insertEmbed(range.index, "image", url);
          }
        } catch (error) {
          console.error("Erro ao subir imagem do conteúdo:", error);
          alert("Erro ao fazer upload da imagem no editor.");
        }
      }
    };
  }, []);

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), [imageHandler]);

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImageFile(file);
      setCoverImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let coverImageUrl = null;

      if (coverImageFile) {
        coverImageUrl = await uploadToSupabase(coverImageFile, "blog-covers");
      }

      const { error } = await supabase.from("blog_posts").insert([
        {
          title,
          slug,
          category: category || null,
          read_time: readTime || null,
          excerpt: excerpt || null,
          content,
          cover_image: coverImageUrl,
          is_published: isPublished,
        },
      ]);

      if (error) throw error;

      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      console.error("Erro ao salvar o artigo:", error);
      alert("Erro ao criar a publicação. Verifique os logs.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 mb-20">
      <div className="flex items-center gap-3">
        <Link href="/admin/blog" className="p-2 rounded-xl border border-border/40 bg-surface/10 text-neutral-400 hover:text-white transition-all">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h2 className="text-xl font-semibold text-white">Nova Publicação</h2>
          <p className="text-xs text-neutral-400 mt-0.5">Escreva um artigo rico para a aba de Blog.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-6 border border-border/40 rounded-3xl bg-surface/10 backdrop-blur-md space-y-6">
          
          {/* Imagem de Capa */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Imagem de Capa</label>
            <div className="flex flex-col items-start gap-4">
              {coverImagePreview && (
                <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden border border-border/40 group">
                  <img src={coverImagePreview} alt="Capa Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => { setCoverImageFile(null); setCoverImagePreview(""); }}
                    className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-red-500/80 rounded-lg text-white backdrop-blur-md transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              {!coverImagePreview && (
                <label className="flex flex-col items-center justify-center w-full md:w-1/2 aspect-video rounded-xl border-2 border-dashed border-border/40 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors cursor-pointer text-neutral-500 hover:text-neutral-300">
                  <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                  <span className="text-sm">Clique para adicionar uma capa</span>
                  <input type="file" accept="image/*" onChange={handleCoverImageChange} className="hidden" />
                </label>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1.5">
              <label htmlFor="title" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Título do Post</label>
              <input id="title" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex: A Engenharia do Movimento" className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="slug" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Slug (URL)</label>
              <input id="slug" type="text" required value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="slug-da-url" className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors font-mono" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="category" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Categoria</label>
              <input id="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Ex: Estudos" className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="readTime" className="text-xs font-mono uppercase tracking-wider text-neutral-500">Tempo de Leitura</label>
              <input id="readTime" type="text" value={readTime} onChange={(e) => setReadTime(e.target.value)} placeholder="Ex: 5 min de leitura" className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Resumo (Excerpt)</label>
            <textarea rows={2} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Uma breve introdução descritiva..." className="w-full bg-neutral-900/40 border border-border/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors resize-none" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Conteúdo do Artigo</label>
            <ReactQuillAny
              ref={quillRef}
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              placeholder="Escreva o conteúdo formatado aqui..."
            />
          </div>

          <div className="flex items-center justify-between border-t border-border/30 pt-6 mt-2">
            <div>
              <h4 className="text-sm font-medium text-white">Publicar Artigo</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Se desativado, o post será armazenado como rascunho.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input type="checkbox" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} className="sr-only peer" />
              <div className="w-11 h-6 bg-neutral-800 border border-border/40 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-neutral-400 after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500/20 peer-checked:border-emerald-500/50 peer-checked:after:bg-emerald-500"></div>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" disabled={isLoading} className="bg-white text-black px-6 py-2.5 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50 cursor-pointer">
            {isLoading ? <><Loader2 className="w-4 h-4 animate-spin" /> Salvando...</> : <><Save className="w-4 h-4" /> Salvar Artigo</>}
          </button>
        </div>
      </form>
    </div>
  );
}