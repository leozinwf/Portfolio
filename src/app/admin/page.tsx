import { Eye, Users, MousePointerClick, Clock, FileText, Monitor, Compass, Globe } from "lucide-react";
import { DateFilter } from "@/components/admin/DateFilter";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    type: "authorized_user",
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  },
});

async function getAnalyticsData(periodDays: string) {
  const propertyId = process.env.GA_PROPERTY_ID;

  if (!propertyId || !process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REFRESH_TOKEN) {
    console.warn("Variáveis do GA via OAuth ausentes no arquivo .env.local.");
    return {
      metrics: {
        pageViews: "0", pageViewsGrowth: { text: "0%", isPositive: false },
        uniqueVisitors: "0", visitorsGrowth: { text: "0%", isPositive: false },
        bounceRate: "0%", bounceRateImprovement: { text: "0%", isPositive: false },
        avgSession: "0m 0s",
      },
      topPages: [], topDevices: [], topSources: [], topCountries: [],
    };
  }

  let currentStart = "30daysAgo";
  let pastStart = "60daysAgo";
  let pastEnd = "31daysAgo";

  if (periodDays === "7") {
    currentStart = "7daysAgo";
    pastStart = "14daysAgo";
    pastEnd = "8daysAgo";
  } else if (periodDays === "90") {
    currentStart = "90daysAgo";
    pastStart = "180daysAgo";
    pastEnd = "91daysAgo";
  }

  try {
    // Buscando os 5 relatórios do GA4 em paralelo
    const [mainReport, pagesReport, devicesReport, sourcesReport, countriesReport] = await Promise.all([
      // 1. Métricas Gerais e Comparativo
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
          { startDate: currentStart, endDate: "today" },
          { startDate: pastStart, endDate: pastEnd },
        ],
        metrics: [
          { name: "screenPageViews" },
          { name: "activeUsers" },
          { name: "bounceRate" },
          { name: "averageSessionDuration" },
        ],
      }),
      // 2. Top 5 Páginas
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: currentStart, endDate: "today" }],
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }],
        limit: 5,
      }),
      // 3. Dispositivos utilizados
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: currentStart, endDate: "today" }],
        dimensions: [{ name: "deviceCategory" }],
        metrics: [{ name: "activeUsers" }],
      }),
      // 4. Origem do Tráfego (Canais de Origem)
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: currentStart, endDate: "today" }],
        dimensions: [{ name: "sessionSource" }],
        metrics: [{ name: "activeUsers" }],
        limit: 5,
      }),
      // 5. Localização (Países)
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: currentStart, endDate: "today" }],
        dimensions: [{ name: "country" }],
        metrics: [{ name: "activeUsers" }],
        limit: 5,
      }),
    ]);

    // Processamento do Relatório 1 (Cards)
    const rows = mainReport[0].rows || [];
    const currentPeriod = rows[0]?.metricValues || [];
    const pastPeriod = rows[1]?.metricValues || [];

    const calcGrowth = (current: number, past: number, invertColorRule = false) => {
      if (past === 0) return { text: current > 0 ? "+100%" : "0%", isPositive: current > 0 };
      const diff = ((current - past) / past) * 100;
      return { 
        text: `${diff > 0 ? "+" : ""}${diff.toFixed(1)}%`, 
        isPositive: invertColorRule ? diff < 0 : diff > 0 
      };
    };

    const pageViews = parseInt(currentPeriod[0]?.value || "0");
    const pastPageViews = parseInt(pastPeriod[0]?.value || "0");
    const activeUsers = parseInt(currentPeriod[1]?.value || "0");
    const pastActiveUsers = parseInt(pastPeriod[1]?.value || "0");
    const bounceRate = parseFloat(currentPeriod[2]?.value || "0") * 100;
    const pastBounceRate = parseFloat(pastPeriod[2]?.value || "0") * 100;
    const avgSessionSeconds = parseFloat(currentPeriod[3]?.value || "0");

    // Processamento do Relatório 2 (Páginas)
    const topPages = (pagesReport[0].rows || []).map(row => ({
      path: row.dimensionValues?.[0]?.value || "/",
      views: parseInt(row.metricValues?.[0]?.value || "0").toLocaleString("pt-BR")
    }));

    // Processamento do Relatório 3 (Dispositivos)
    const topDevices = (devicesReport[0].rows || []).map(row => ({
      name: row.dimensionValues?.[0]?.value || "Desconhecido",
      users: parseInt(row.metricValues?.[0]?.value || "0")
    }));

    // Processamento do Relatório 4 (Origem do Tráfego)
    const topSources = (sourcesReport[0].rows || []).map(row => {
      let sourceName = row.dimensionValues?.[0]?.value || "Direto";
      if (sourceName === "(direct)") sourceName = "Acesso Direto";
      return {
        name: sourceName,
        users: parseInt(row.metricValues?.[0]?.value || "0").toLocaleString("pt-BR")
      };
    });

    // Processamento do Relatório 5 (Países)
    const topCountries = (countriesReport[0].rows || []).map(row => ({
      name: row.dimensionValues?.[0]?.value || "Desconhecido",
      users: parseInt(row.metricValues?.[0]?.value || "0").toLocaleString("pt-BR")
    }));

    return {
      metrics: {
        pageViews: pageViews.toLocaleString("pt-BR"),
        pageViewsGrowth: calcGrowth(pageViews, pastPageViews),
        uniqueVisitors: activeUsers.toLocaleString("pt-BR"),
        visitorsGrowth: calcGrowth(activeUsers, pastActiveUsers),
        bounceRate: `${bounceRate.toFixed(1)}%`,
        bounceRateImprovement: calcGrowth(bounceRate, pastBounceRate, true), 
        avgSession: `${Math.floor(avgSessionSeconds / 60)}m ${Math.floor(avgSessionSeconds % 60)}s`,
      },
      topPages,
      topDevices,
      topSources,
      topCountries,
    };
  } catch (error) {
    console.error("Erro ao buscar dados completos do GA4:", error);
    return {
      metrics: {
        pageViews: "Erro", pageViewsGrowth: { text: "N/A", isPositive: false },
        uniqueVisitors: "Erro", visitorsGrowth: { text: "N/A", isPositive: false },
        bounceRate: "Erro", bounceRateImprovement: { text: "N/A", isPositive: false },
        avgSession: "Erro",
      },
      topPages: [], topDevices: [], topSources: [], topCountries: [],
    };
  }
}

interface PageProps {
  searchParams: Promise<{ period?: string }>;
}

export default async function DashboardPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const period = resolvedParams.period || "30";
  
  const data = await getAnalyticsData(period);
  const { metrics, topPages, topDevices, topSources, topCountries } = data;

  const mainCards = [
    { title: "Page Views", val: metrics.pageViews, grow: metrics.pageViewsGrowth, icon: Eye },
    { title: "Visitantes", val: metrics.uniqueVisitors, grow: metrics.visitorsGrowth, icon: Users },
    { title: "Bounce Rate", val: metrics.bounceRate, grow: metrics.bounceRateImprovement, icon: MousePointerClick },
    { title: "Duração Média", val: metrics.avgSession, grow: { text: "Estável", isPositive: false }, icon: Clock },
  ];

  const totalDeviceUsers = topDevices.reduce((sum, d) => sum + d.users, 0) || 1;

  return (
    <div className="space-y-8">
      {/* SEÇÃO DE CONTROLE DINÂMICO E FILTRO */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-b border-border/10 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Visão Geral</h2>
          <p className="text-sm text-neutral-400 mt-1">Acompanhe o desempenho do seu portfólio em tempo real.</p>
        </div>
        
        <DateFilter />
      </div>

      {/* METRICAS DO SITE */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          Métricas Gerais (Últimos {period} dias)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mainCards.map((m) => (
            <div key={m.title} className="p-6 border border-border/50 rounded-2xl bg-surface/20 flex flex-col gap-4 backdrop-blur-sm">
              <div className="flex items-center justify-between text-neutral-500">
                <span className="text-xs font-mono uppercase tracking-wider">{m.title}</span>
                <m.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-3xl font-semibold text-white mb-1">{m.val}</div>
                <div className={`text-[10px] font-medium ${m.grow.isPositive ? 'text-emerald-500' : 'text-neutral-500'}`}>
                  {m.grow.text} vs período anterior
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GRADE DETALHADA: ROW 1 (PÁGINAS E ORIGENS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Bloco: Páginas Mais Acessadas */}
        <div className="p-6 border border-border/50 rounded-2xl bg-surface/20 backdrop-blur-sm space-y-4">
          <div className="flex items-center justify-between text-neutral-400 border-b border-border/30 pb-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <FileText className="w-4 h-4 text-neutral-500" /> Páginas Mais Visitadas
            </h4>
            <span className="text-xs font-mono text-neutral-500">Acessos</span>
          </div>
          <div className="space-y-3">
            {topPages.length > 0 ? (
              topPages.map((page) => (
                <div key={page.path} className="flex items-center justify-between text-sm">
                  <span className="font-mono text-neutral-300 truncate max-w-[240px] sm:max-w-[360px] bg-neutral-900/40 px-2 py-0.5 rounded border border-neutral-800/50 text-xs">
                    {page.path}
                  </span>
                  <span className="font-semibold text-white">{page.views}</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-neutral-500 py-2">Nenhum dado disponível.</p>
            )}
          </div>
        </div>

        {/* Bloco: Origem do Tráfego */}
        <div className="p-6 border border-border/50 rounded-2xl bg-surface/20 backdrop-blur-sm space-y-4">
          <div className="flex items-center justify-between text-neutral-400 border-b border-border/30 pb-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Compass className="w-4 h-4 text-neutral-500" /> Fontes de Tráfego
            </h4>
            <span className="text-xs font-mono text-neutral-500">Usuários</span>
          </div>
          <div className="space-y-3">
            {topSources.length > 0 ? (
              topSources.map((source) => (
                <div key={source.name} className="flex items-center justify-between text-sm">
                  <span className="text-neutral-300 font-medium truncate max-w-[200px]">
                    {source.name}
                  </span>
                  <span className="font-semibold text-white">{source.users}</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-neutral-500 py-2">Nenhum dado disponível.</p>
            )}
          </div>
        </div>
      </div>

      {/* GRADE DETALHADA: ROW 2 (DISPOSITIVOS E LOCALIZAÇÃO) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Bloco: Dispositivos */}
        <div className="p-6 border border-border/50 rounded-2xl bg-surface/20 backdrop-blur-sm space-y-4">
          <div className="flex items-center justify-between text-neutral-400 border-b border-border/30 pb-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Monitor className="w-4 h-4 text-neutral-500" /> Dispositivos do Público
            </h4>
            <span className="text-xs font-mono text-neutral-500">Proporção</span>
          </div>
          <div className="space-y-4">
            {topDevices.length > 0 ? (
              topDevices.map((device) => {
                const pct = ((device.users / totalDeviceUsers) * 100).toFixed(1);
                return (
                  <div key={device.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs text-neutral-300">
                      <span className="capitalize font-medium">{device.name}</span>
                      <span className="text-neutral-400 font-mono">{device.users} ({pct}%)</span>
                    </div>
                    <div className="w-full bg-neutral-900/60 h-2 rounded-full overflow-hidden border border-neutral-800/40">
                      <div 
                        className="bg-neutral-400 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-xs text-neutral-500 py-2">Nenhum dado disponível.</p>
            )}
          </div>
        </div>

        {/* Bloco: Localização (Países) */}
        <div className="p-6 border border-border/50 rounded-2xl bg-surface/20 backdrop-blur-sm space-y-4">
          <div className="flex items-center justify-between text-neutral-400 border-b border-border/30 pb-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Globe className="w-4 h-4 text-neutral-500" /> Localização dos Visitantes
            </h4>
            <span className="text-xs font-mono text-neutral-500">Usuários</span>
          </div>
          <div className="space-y-3">
            {topCountries.length > 0 ? (
              topCountries.map((country) => (
                <div key={country.name} className="flex items-center justify-between text-sm">
                  <span className="text-neutral-300 font-medium">
                    {country.name}
                  </span>
                  <span className="font-semibold text-white">{country.users}</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-neutral-500 py-2">Nenhum dado disponível.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}