import { PageToggle } from "@/components/admin/PageToggle";
import { Settings, ShieldAlert } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Cabeçalho */}
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Settings className="w-6 h-6 text-neutral-400" />
          Configurações do Site
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Gerencie a visibilidade de rotas e comportamentos gerais do seu portfólio.
        </p>
      </div>

      {/* Bloco de Visibilidade de Páginas */}
      <div className="p-6 border border-border/50 rounded-2xl bg-surface/20 backdrop-blur-sm space-y-6">
        <div className="flex items-start gap-4 border-b border-border/30 pb-5">
          <div className="p-3 bg-neutral-900/50 rounded-xl border border-border/40">
            <ShieldAlert className="w-5 h-5 text-neutral-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Controle de Visibilidade</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Ative ou desative seções inteiras do site. Páginas ocultas redirecionarão os visitantes automaticamente para a home.
            </p>
          </div>
        </div>
        
        {/* Aqui entra o seu componente de toggle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PageToggle />
        </div>
      </div>

    </div>
  );
}