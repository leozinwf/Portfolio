import { createClient } from "@/utils/supabase/server";
import { Plus, Edit3, Home as HomeIcon, Eye } from "lucide-react";
import Link from "next/link";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Meus projetos</h2>
        <Link href="/admin/projects/new" className="bg-white text-black px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
          <Plus className="w-4 h-4" /> Novo Projeto
        </Link>
      </div>

      <div className="border border-border/40 rounded-3xl bg-surface/10 overflow-hidden backdrop-blur-md">
        {!projects || projects.length === 0 ? (
          <div className="p-20 text-center text-neutral-500 font-light">Nenhum projeto indexado.</div>
        ) : (
          <div className="divide-y divide-border/40">
            {projects.map((p) => (
              <div key={p.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface/20 transition-colors">
                <div>
                  <h4 className="text-white font-medium">{p.title}</h4>
                  <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest">{p.category} • /{p.slug}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-tighter">
                    <span className={p.is_featured ? 'text-amber-500' : 'text-neutral-700'}>Home</span>
                    <span className={p.is_published ? 'text-emerald-500' : 'text-neutral-700'}>Publicado</span>
                  </div>
                  <Link href={`/admin/projects/${p.id}`} className="p-2.5 rounded-xl border border-border/60 bg-surface/40 text-neutral-400 hover:text-white transition-all">
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