import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { LogOut, FolderGit2, Plus, Edit3, Home as HomeIcon, Eye, Briefcase, FileText, Layers } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-background text-white pt-24">

      {/* HEADER ADMINISTRATIVO PREMIUM COM ABAS INTEGRADAS */}
      {/* HEADER ADMINISTRATIVO PREMIUM COM MAIS ESPAÇAMENTO SUPERIOR */}
      <header className="border-b border-border bg-surface/30 px-8 pt-10 pb-4 sticky top-0 backdrop-blur-md z-50">
        <div className="flex items-center justify-between max-w-5xl mx-auto mb-5">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-neutral-400" />
            <span className="font-mono text-sm tracking-widest uppercase font-medium">
              Studio OS
            </span>
          </div>
          <button className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
            <LogOut className="w-4 h-4" /> Sair
          </button>
        </div>

        {/* Sistema de Abas */}
        <div className="flex items-center gap-6 max-w-5xl mx-auto text-sm font-medium">
          <Link
            href="/admin"
            className="flex items-center gap-2 px-1 pb-3 border-b-2 border-white text-white font-medium transition-all"
          >
            <FolderGit2 className="w-4 h-4" /> Projetos
          </Link>

          <div className="flex items-center gap-2 px-1 pb-3 border-b-2 border-transparent text-neutral-500 cursor-not-allowed select-none group relative">
            <FileText className="w-4 h-4" /> Blog
            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border border-border bg-surface text-neutral-500 scale-90">
              Breve
            </span>
          </div>

          <div className="flex items-center gap-2 px-1 pb-3 border-b-2 border-transparent text-neutral-500 cursor-not-allowed select-none group relative">
            <Briefcase className="w-4 h-4" /> Contratos
            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border border-border bg-surface text-neutral-500 scale-90">
              Breve
            </span>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL DA ABA SELECIONADA (PROJETOS) */}
      <main className="container mx-auto px-6 md:px-8 py-12 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-2">
              Casos de Estudo
            </h1>
            <p className="text-neutral-400 font-light text-sm">
              Gerencie a visibilidade e a narrativa estratégica dos seus principais projetos.
            </p>
          </div>
          <Link
            href="/admin/projects/new"
            className="inline-flex items-center gap-2 bg-white text-black px-4 py-2.5 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors shrink-0 shadow-sm"
          >
            <Plus className="w-4 h-4" /> Novo Projeto
          </Link>
        </div>

        {/* Tabela de Projetos */}
        <div className="border border-border rounded-2xl bg-surface/20 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border bg-surface/10">
            <h3 className="text-white font-medium text-sm">Estudos de Caso Ativos</h3>
          </div>

          {!projects || projects.length === 0 ? (
            <div className="p-12 text-center text-neutral-500 font-light text-sm">
              Nenhum projeto encontrado no banco de dados.
            </div>
          ) : (
            <div className="divide-y divide-border">
              {projects.map((project) => (
                <div key={project.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface/10 transition-colors duration-300">
                  <div className="space-y-1">
                    <h4 className="text-white font-medium text-base">{project.title}</h4>
                    <p className="text-neutral-500 font-mono text-xs">{project.category} • /{project.slug}</p>
                  </div>

                  <div className="flex items-center gap-6 self-end sm:self-auto">
                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span className={`flex items-center gap-1.5 ${project.is_featured ? 'text-amber-500' : 'text-neutral-600'}`}>
                        <HomeIcon className="w-3.5 h-3.5" /> Home
                      </span>
                      <span className={`flex items-center gap-1.5 ${project.is_published ? 'text-green-500' : 'text-neutral-600'}`}>
                        <Eye className="w-3.5 h-3.5" /> Publicado
                      </span>
                    </div>

                    <Link
                      href={`/admin/projects/${project.id}`}
                      className="p-2 rounded-md border border-border bg-surface/50 text-neutral-400 hover:text-white hover:border-neutral-500/30 transition-all shadow-sm"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}