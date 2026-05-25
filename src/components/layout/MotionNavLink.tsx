import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export async function MotionNavLink() {
  const supabase = await createClient();

  // Lê o status diretamente do banco no servidor
  const { data: setting } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", "motion_page_enabled")
    .single();

  // Se estiver desativado (false), o componente retorna null e o link desaparece do menu
  if (!setting || setting.value === false) {
    return null;
  }

  return <Link href="/motion">Motion</Link>;
}