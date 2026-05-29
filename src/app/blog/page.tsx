import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { ArrowRight, FileText, Image as ImageIcon } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  read_time: string | null;
  excerpt: string | null;
  cover_image: string | null; // Adicionado
  is_published: boolean;
  created_at: string;
}

export const revalidate = 60; 

export default async function BlogPage() {
  const supabase = await createClient();
  
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  const posts = data as BlogPost[] | null;
  const cinematicEasing = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      
      <section className="relative max-w-4xl mx-auto text-center px-4 mb-20 z-10 pt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-accent-blue/10 to-transparent pointer-events-none -z-10 blur-3xl"></div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-6 text-foreground animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both" style={{ animationTimingFunction: cinematicEasing }}>
          <FileText className="w-3.5 h-3.5 text-accent-blue" />
          <span>Publicações do Blog</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both" style={{ animationTimingFunction: cinematicEasing }}>
          Artigos, reflexões e <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-neutral-400">bastidores de código.</span>
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both" style={{ animationTimingFunction: cinematicEasing }}>
          Exploração detalhada sobre desenvolvimento full-stack, automações, arquitetura de software e os desafios técnicos do cotidiano.
        </p>
      </section>

      {!posts || posts.length === 0 ? (
        <div className="text-center py-20 text-neutral-500 font-light border border-border/40 rounded-3xl bg-surface/10 backdrop-blur-md animate-in fade-in duration-1000 delay-300 fill-mode-both" style={{ animationTimingFunction: cinematicEasing }}>
          Nenhuma publicação encontrada no momento. Volte em breve!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both" style={{ animationTimingFunction: cinematicEasing }}>
          {posts.map((post) => {
            const formattedDate = new Date(post.created_at).toLocaleDateString("pt-BR", {
              day: "2-digit", month: "short", year: "numeric",
            });

            return (
              <article key={post.id} className="group relative flex flex-col p-6 border border-border/40 rounded-3xl bg-surface/10 hover:bg-surface/20 backdrop-blur-md transition-all duration-300 min-h-[300px]">
                
                {/* Renderizando a Imagem de Capa do Card */}
                {post.cover_image && (
                  <div className="w-full h-48 mb-5 overflow-hidden rounded-2xl relative border border-border/20">
                    <img 
                      src={post.cover_image} 
                      alt={post.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                )}

                <div className="flex-1 flex flex-col space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    <span className="text-neutral-400 font-medium">{post.category || "Geral"}</span>
                    <div className="flex items-center gap-2.5">
                      <span>{formattedDate}</span>
                      {post.read_time && <><span className="text-neutral-700">•</span><span>{post.read_time}</span></>}
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <h2 className="text-xl font-semibold text-white group-hover:text-neutral-200 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0 rounded-3xl" />
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-white mt-6 group-hover:translate-x-1 transition-transform pointer-events-none">
                  Ler artigo <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}