import { Eye, Users, MousePointerClick, Clock } from "lucide-react";
import { PageToggle } from "@/components/admin/PageToggle";

async function getAnalyticsData() {
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

export default async function DashboardPage() {
  const analytics = await getAnalyticsData();

  const metrics = [
    { title: "Page Views", val: analytics.pageViews, grow: analytics.pageViewsGrowth, icon: Eye },
    { title: "Visitantes", val: analytics.uniqueVisitors, grow: analytics.visitorsGrowth, icon: Users },
    { title: "Bounce Rate", val: analytics.bounceRate, grow: analytics.bounceRateImprovement, icon: MousePointerClick },
    { title: "Duração Média", val: analytics.avgSession, grow: "Estável", icon: Clock },
  ];

  return (
    <div className="space-y-8">
      {/* SEÇÃO DE CONTROLE DINÂMICO DE ROTAS */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Status e Visibilidade de Páginas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PageToggle />
          {/* Você pode colocar outros controles aqui no futuro */}
        </div>
      </div>

      {/* METRICAS DO SITE */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Métricas Gerais (Últimos 30 dias)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.title} className="p-6 border border-border/50 rounded-2xl bg-surface/20 flex flex-col gap-4 backdrop-blur-sm">
              <div className="flex items-center justify-between text-neutral-500">
                <span className="text-xs font-mono uppercase tracking-wider">{m.title}</span>
                <m.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl font-semibold text-white mb-1">{m.val}</div>
                <div className={`text-[10px] font-medium ${m.grow.includes('+') ? 'text-emerald-500' : 'text-neutral-500'}`}>
                  {m.grow} vs mês anterior
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}