import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

// Tipagem correta para o Next.js moderno (params agora é uma Promise)
type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Tornamos a geração de metadados assíncrona com "await params"
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) return { title: 'Post não encontrado' };
  
  return {
    title: `${post.title} | Leonardo Sabatini`,
    description: post.excerpt,
  };
}

// 2. Tornamos o Componente assíncrono (async) e resolvemos a Promise
export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-20">
      
      {/* Botão de Voltar */}
      <div className="container mx-auto px-4 md:px-8 max-w-3xl mb-12">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Artigos
        </Link>
      </div>

      {/* Cabeçalho do Artigo */}
      <header className="container mx-auto px-4 md:px-8 max-w-3xl mb-16 text-center">
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-neutral-400 mb-6">
          <span className="px-3 py-1 rounded-full border border-border/60 bg-surface/40 text-accent-blue uppercase tracking-wider">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
          {post.title}
        </h1>
        
        {/* Linha Divisória Elegante */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/80 to-transparent"></div>
      </header>

      {/* Corpo do Texto formatado com o Typography do Tailwind */}
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent-blue hover:prose-a:text-accent-purple prose-p:leading-relaxed prose-p:text-neutral-300 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

    </article>
  );
}