import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.created_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-8 animate-in fade-in duration-500">
      
      {/* Botão de Voltar */}
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors group mb-4"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Voltar para o blog
      </Link>

      {/* Cabeçalho do Artigo */}
      <div className="space-y-4 border-b border-border/20 pb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500">
          <span className="flex items-center gap-1 bg-neutral-900/40 border border-neutral-800/60 px-2.5 py-0.5 rounded-md text-[10px] uppercase tracking-wider font-medium text-neutral-300">
            <Tag className="w-3 h-3" /> {post.category || "Geral"}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          {post.read_time && (
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.read_time}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {post.title}
        </h1>
        
        {post.excerpt && (
          <p className="text-base text-neutral-400 font-light leading-relaxed pt-2 italic">
            "{post.excerpt}"
          </p>
        )}
      </div>

      {/* Conteúdo do Artigo Formatado com Tailwind Prose */}
      <article 
        className="prose prose-neutral dark:prose-invert max-w-none 
          prose-p:text-neutral-400 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
          prose-headings:text-white prose-headings:font-semibold prose-headings:tracking-tight
          prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
          prose-strong:text-white prose-em:text-neutral-300
          prose-code:text-neutral-200 prose-code:bg-neutral-900/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-neutral-800/40 prose-code:font-mono prose-code:text-xs"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
    </main>
  );
}