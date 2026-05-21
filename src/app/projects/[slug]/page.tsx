import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 text-white">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Voltar ao índice
        </Link>

        {/* Cabeçalho de Alta Costura */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 mb-6">
            <span className="flex items-center gap-1"><Bookmark className="w-3.5 h-3.5" /> {project.category}</span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full" />
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Estudo de Caso</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-none">{project.title}</h1>
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors w-max">
                Aceder à Plataforma <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Imagem Principal */}
        {project.image_url && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-surface/30 p-12 flex items-center justify-center mb-24">
            <Image src={project.image_url} alt={project.title} fill className="object-contain p-6 md:p-12" />
          </div>
        )}

        {/* Narrativa Limpa e Editorial */}
        <div className="space-y-20 font-light max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-border pt-10">
            <h3 className="md:col-span-4 text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">O Desafio</h3>
            <p className="md:col-span-8 text-neutral-300 text-lg leading-relaxed">{project.problem}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-border pt-10">
            <h3 className="md:col-span-4 text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">A Estratégia</h3>
            <p className="md:col-span-8 text-neutral-300 text-lg leading-relaxed">{project.strategy}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-border pt-10">
            <h3 className="md:col-span-4 text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">A Solução</h3>
            <p className="md:col-span-8 text-neutral-300 text-lg leading-relaxed">{project.solution}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-border pt-10">
            <h3 className="md:col-span-4 text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">O Resultado</h3>
            <p className="md:col-span-8 text-neutral-300 text-lg leading-relaxed">{project.result}</p>
          </div>
        </div>

      </div>
    </div>
  );
}