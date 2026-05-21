import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { 
  LogOut, 
  FolderGit2, 
  Plus, 
  Edit3, 
  Home as HomeIcon, 
  Eye, 
  Briefcase, 
  FileText, 
  Layers,
  BarChart3,
  Users,
  MousePointerClick,
  Clock,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------------------------
// 💡 NOTA SOBRE O GOOGLE ANALYTICS:
// Para buscar os dados reais, você precisará instalar o pacote oficial:
// npm install @google-analytics/data
// E criar uma função aqui no servidor para buscar os dados usando sua 
// Service Account do Google Cloud. Os valores abaixo são apenas para layout.
// ----------------------------------------------------------------------

async function getAnalyticsData() {
  // Simulando uma requisição ao Google Analytics API
  return {
    pageViews: "12.450",
    pageViewsGrowth: "+14%",
    uniqueVisitors: "8.230",
    visitorsGrowth: "+8%",
    bounceRate: "42.3%",
    bounceRateImprovement: "-2.1%",
    avgSession: "2m 14s",
  };
}

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Busca os projetos no Supabase
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  // Busca os dados (mockados por enquanto) do Analytics
  const analytics = await getAnalyticsData();

  return (
    <div className="min-h-screen bg-background text-white pt-24">

      {/* HEADER ADMINISTRATIVO PREMIUM */}
      <header className="border-b border-border bg-surface/30 px-8 pt-10 pb-4 sticky top-0 backdrop-blur-md z-50">
        <div className="flex items-center justify-between max-w-5xl mx-auto mb-5">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-accent-blue" />
            <span className="font-mono text-sm tracking-widest uppercase font-medium">
              Studio OS
            </span>
          </div>
          <button className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
            <LogOut className="w-4 h-4" /> Sair
          </button>
        </div>

        {/* Sistema de Abas */}
        <div className="flex items-center gap-6 max-w-5xl mx-auto text-sm font-medium overflow-x-auto">
          <Link
            href="/admin"
            className="flex items-center gap-2 px-1 pb-3 border-b-2 border-white text-white font-medium transition-all whitespace-nowrap"
          >
            <BarChart3 className="w-4 h-4" /> Visão Geral (Dashboard)
          </Link>

          <div className="flex items-center gap-2 px-1 pb-3 border-b-2 border-transparent text-neutral-500 cursor-not-allowed select-none group relative whitespace-nowrap">
            <FileText className="w-4 h-4" /> Blog
            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border border-border bg-surface text-neutral-500 scale-90">
              Breve
            </span>
          </div>

          <div className="flex items-center gap-2 px-1 pb-3 border-b-2 border-transparent text-neutral-500 cursor-not-allowed select-none group relative whitespace-nowrap">
            <Briefcase className="w-4 h-4" /> Contratos
            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border border-border bg-surface text-neutral-500 scale-90">
              Breve
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-8 py-12 max-w-5xl">
        
        {/* =========================================
            1. SEÇÃO DASHBOARD (GOOGLE ANALYTICS)
        ========================================= */}
        <section className="mb-16">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold tracking-tight mb-2">
              Performance do Site
            </h1>
            <p className="text-neutral-400 font-light text-sm">
              Métricas de tráfego e engajamento dos últimos 30 dias.
            </p>
          </div>

          {/* Grid de KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* KPI 1: Page Views */}
            <div className="p-6 border border-border rounded-2xl bg-surface/20 flex flex-col gap-4">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="text-sm font-medium">Page Views</span>
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl font-semibold text-white mb-1">{analytics.pageViews}</div>
                <div className="flex items-center gap-1 text-xs text-emerald-500 font-medium">
                  <ArrowUpRight className="w-3 h-3" />
                  {analytics.pageViewsGrowth} vs mês anterior
                </div>
              </div>
            </div>

            {/* KPI 2: Visitantes Únicos */}
            <div className="p-6 border border-border rounded-2xl bg-surface/20 flex flex-col gap-4">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="text-sm font-medium">Visitantes Únicos</span>
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl font-semibold text-white mb-1">{analytics.uniqueVisitors}</div>
                <div className="flex items-center gap-1 text-xs text-emerald-500 font-medium">
                  <ArrowUpRight className="w-3 h-3" />
                  {analytics.visitorsGrowth} vs mês anterior
                </div>
              </div>
            </div>

            {/* KPI 3: Taxa de Rejeição (Bounce Rate) */}
            <div className="p-6 border border-border rounded-2xl bg-surface/20 flex flex-col gap-4">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="text-sm font-medium">Bounce Rate</span>
                <MousePointerClick className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl font-semibold text-white mb-1">{analytics.bounceRate}</div>
                <div className="flex items-center gap-1 text-xs text-emerald-500 font-medium">
                  <ArrowUpRight className="w-3 h-3" /> {/* Nota: Em bounce rate, queda é bom, mas mantive verde para consistência */}
                  {analytics.bounceRateImprovement} vs mês anterior
                </div>
              </div>
            </div>

            {/* KPI 4: Tempo de Sessão */}
            <div className="p-6 border border-border rounded-2xl bg-surface/20 flex flex-col gap-4">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="text-sm font-medium">Duração Média</span>
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl font-semibold text-white mb-1">{analytics.avgSession}</div>
                <div className="flex items-center gap-1 text-xs text-neutral-500 font-medium">
                  Estável
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            2. SEÇÃO DE GESTÃO DE PROJETOS (SUPABASE)
        ========================================= */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2 flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-neutral-400" />
                Casos de Estudo
              </h2>
              <p className="text-neutral-400 font-light text-sm">
                Gerencie a visibilidade dos seus projetos no portfólio.
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
          <div className="border border-border rounded-2xl bg-surface/10 overflow-hidden shadow-sm">
            <div className="p-4 md:p-6 border-b border-border bg-surface/20 flex justify-between items-center">
              <h3 className="text-white font-medium text-sm">Projetos Ativos</h3>
              <span className="text-xs font-mono text-neutral-500">{projects?.length || 0} encontrados</span>
            </div>

            {!projects || projects.length === 0 ? (
              <div className="p-12 text-center text-neutral-500 font-light text-sm">
                Nenhum projeto encontrado no banco de dados.
              </div>
            ) : (
              <div className="divide-y divide-border">
                {projects.map((project) => (
                  <div key={project.id} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface/30 transition-colors duration-300">
                    <div className="space-y-1">
                      <h4 className="text-white font-medium text-base">{project.title}</h4>
                      <p className="text-neutral-500 font-mono text-xs">{project.category} • /{project.slug}</p>
                    </div>

                    <div className="flex items-center gap-6 self-end md:self-auto">
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
                        className="p-2 rounded-md border border-border bg-background text-neutral-400 hover:text-white hover:border-neutral-500/30 transition-all shadow-sm"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}