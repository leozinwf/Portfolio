import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import MotionClient from "./MotionClient";

export default async function MotionPage() {
  const supabase = await createClient();

  // Consulta o status da chave no Supabase no lado do Servidor
  const { data: setting } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", "motion_page_enabled")
    .single();

  // Se a configuração estiver desligada (false), bloqueia com 404 antes da página ser gerada
  if (setting && setting.value === false) {
    notFound();
  }

  // Se estiver liberada, carrega a tela com todas as animações visuais
  return <MotionClient />;
}