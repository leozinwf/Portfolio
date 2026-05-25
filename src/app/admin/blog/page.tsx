import { createClient } from "@/utils/supabase/server";
import { Plus, Edit3 } from "lucide-react";
import Link from "next/link";

export default async function AdminBlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Publicações do Blog</h2>
          <p className="text-sm text-neutral-400 mt-1">Gerencie seus artigos, estudos e bastidores.</p>
        </div>
        <Link href="/admin/blog/new" className="bg-white text-black px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
          <Plus className="w-4 h-4" /> Novo Post
        </Link>
      </div>

      <div className="border border-border/40 rounded-3xl bg-surface/10 overflow-hidden backdrop-blur-md">
        {!posts || posts.length === 0 ? (
          <div className="p-20 text-center flex flex-col items-center gap-3">
            <p className="text-neutral-500 font-light">Nenhuma publicação encontrada.</p>
            <Link href="/admin/blog/new" className="text-xs text-white underline underline-offset-4 opacity-70 hover:opacity-100">
              Escrever meu primeiro artigo
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-border/40">
            {posts.map((post) => (
              <div key={post.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface/20 transition-colors">
                <div>
                  <h4 className="text-white font-medium">{post.title}</h4>
                  <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest mt-1">
                    {post.category || 'Sem Categoria'} • /{post.slug}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-tighter">
                    <span className={post.is_published ? 'text-emerald-500' : 'text-neutral-700'}>
                      {post.is_published ? 'Publicado' : 'Rascunho'}
                    </span>
                  </div>
                  <Link href={`/admin/blog/${post.id}`} className="p-2.5 rounded-xl border border-border/60 bg-surface/40 text-neutral-400 hover:text-white transition-all">
                    <Edit3 className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}