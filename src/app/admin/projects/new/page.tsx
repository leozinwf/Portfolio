"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { ArrowLeft, Save, Loader2, UploadCloud, ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewProjectPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: "", slug: "", category: "", problem: "", strategy: "", 
    solution: "", result: "", image_url: "", live_url: "", 
    is_published: true, is_featured: false,
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

  // Lógica de Upload via Supabase Storage
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const supabase = createClient();
    
    // Gera um nome único para o arquivo para evitar conflitos
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `projetos/${fileName}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from('portfolio') // Nome do seu bucket no Supabase
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('portfolio').getPublicUrl(filePath);
      setFormData({ ...formData, image_url: data.publicUrl });
      setMessage({ type: 'success', text: "Imagem enviada com sucesso!" });
    } catch (error: any) {
      setMessage({ type: 'error', text: `Erro no upload: ${error.message}` });
    } finally {
      setIsUploading(false);
    }
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
        <button onClick={handleSubmit} disabled={isLoading || isUploading} className="bg-white text-black text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2 hover:bg-neutral-200 transition-colors disabled:opacity-70">
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Salvar
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
           {/* Checkboxes de Exibição omitidos aqui por brevidade, mantenha os seus do código original */}
           
          <div className="p-8 rounded-2xl border border-border bg-surface/30 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-border pb-4">Especificações Primárias</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Título do Projeto</label>
                <input name="title" value={formData.title} onChange={handleChange} onBlur={generateSlug} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Slug URL</label>
                <input name="slug" value={formData.slug} onChange={handleChange} required className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-neutral-400" />
              </div>
            </div>

            {/* Novo Campo de Upload de Imagem */}
            <div>
              <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Imagem de Capa</label>
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />
              
              <div className="mt-2 flex items-center gap-4">
                <button 
                  type="button" 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="flex items-center gap-2 bg-surface border border-border px-4 py-2.5 rounded-md text-sm hover:bg-neutral-800 transition-colors disabled:opacity-50"
                >
                  {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
                  {isUploading ? "Enviando..." : "Fazer Upload da Imagem"}
                </button>
                {formData.image_url && <span className="text-xs text-green-400 font-mono flex items-center gap-1"><ImageIcon className="w-3 h-3"/> Imagem anexada</span>}
              </div>
              {/* Opcional: Preview da imagem */}
              {formData.image_url && (
                <div className="mt-4 relative aspect-video w-full max-w-sm rounded-lg overflow-hidden border border-border">
                  <Image src={formData.image_url} alt="Preview" fill className="object-cover" />
                </div>
              )}
            </div>

            {/* Restante dos seus campos (Categoria, Live URL, Arquitetura de caso)... Mantenha como estavam! */}
          </div>
        </form>
      </main>
    </div>
  );
}