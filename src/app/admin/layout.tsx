import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { LayoutDashboard, FolderGit2, Layers } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { AdminTabs } from "@/components/admin/AdminTabs"; // Criaremos abaixo

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="min-h-screen transition-colors duration-500">
      {/* --- HERO SECTION ADMINISTRATIVA --- */}
      <section className="relative max-w-5xl mx-auto text-center px-4 pt-32 pb-16 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none -z-10 blur-3xl"></div>
        
        <div className="flex items-center justify-center gap-2 mb-6">
           <div className="px-3 py-1 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-white flex items-center gap-2">
              <Layers className="w-3 h-3 text-accent-blue" />
              <span>Painel de Controle</span>
           </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Gestão do <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Studio OS.</span>
        </h1>
        <p className="text-neutral-500 text-sm max-w-md mx-auto font-light">
          Monitore métricas de performance e gerencie a narrativa dos seus estudos de caso.
        </p>
      </section>

      {/* --- NAVEGAÇÃO DE ABAS --- */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/40 pb-0">
          <AdminTabs />
          <div className="pb-4 md:pb-0">
            <LogoutButton />
          </div>
        </header>
      </div>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        {children}
      </main>
    </div>
  );
}