"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Loader2, Eye, EyeOff } from "lucide-react";

export function PageToggle() {
  const [isEnabled, setIsEnabled] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  // Carrega o status atual vindo do Supabase
  useEffect(() => {
    async function getSetting() {
      const { data } = await supabase
        .from("site_settings")
        .select("value")
        .eq("key", "motion_page_enabled")
        .single();
      
      if (data) setIsEnabled(data.value);
    }
    getSetting();
  }, [supabase]);

  const handleToggle = async () => {
    if (isEnabled === null || loading) return;
    
    setLoading(true);
    const newValue = !isEnabled;

    const { error } = await supabase
      .from("site_settings")
      .update({ value: newValue, updated_at: new Date().toISOString() })
      .eq("key", "motion_page_enabled");

    if (!error) {
      setIsEnabled(newValue);
    }
    setLoading(false);
  };

  if (isEnabled === null) {
    return (
      <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
        <Loader2 className="w-3.5 h-3.5 animate-spin" /> Verificando integridade...
      </div>
    );
  }

  return (
    <div className="p-6 border border-border/50 rounded-2xl bg-surface/20 flex items-center justify-between backdrop-blur-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-white">Módulo Motion</h4>
        <p className="text-xs text-neutral-500 font-light">
          {isEnabled ? "A rota /motion está pública e ativa." : "A rota /motion está oculta (Retorna 404)."}
        </p>
      </div>

      <button
        onClick={handleToggle}
        disabled={loading}
        className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
          isEnabled 
            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20" 
            : "bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20"
        }`}
      >
        {loading ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : isEnabled ? (
          <>
            <Eye className="w-3.5 h-3.5" /> Página Ativa
          </>
        ) : (
          <>
            <EyeOff className="w-3.5 h-3.5" /> Desativada
          </>
        )}
      </button>
    </div>
  );
}