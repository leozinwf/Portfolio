"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <button 
      onClick={handleLogout}
      className="text-xs text-neutral-500 hover:text-red-400 transition-colors flex items-center gap-2 cursor-pointer"
    >
      <LogOut className="w-4 h-4" /> Sair
    </button>
  );
}