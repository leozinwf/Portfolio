"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, FolderGit2, FileText, Settings, Inbox } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export function AdminTabs() {
  const pathname = usePathname();
  const [unreadCount, setUnreadCount] = useState(0);

  // Busca a quantidade de leads não lidos
  useEffect(() => {
    async function fetchUnreadCount() {
      const supabase = createClient();
      const { count } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true })
        .eq("is_read", false);
        
      if (count !== null) setUnreadCount(count);
    }

    fetchUnreadCount();
  }, [pathname]); // Atualiza sempre que mudar de página

  const tabs = [
    { name: "Dashboard", href: "/admin", icon: BarChart3 },
    { name: "Leads", href: "/admin/leads", icon: Inbox, badge: unreadCount },
    { name: "Projetos", href: "/admin/projects", icon: FolderGit2 },
    { name: "Blog", href: "/admin/blog", icon: FileText },
    { name: "Configurações", href: "/admin/settings", icon: Settings },
  ];

  return (
    <nav className="flex items-center gap-8 overflow-x-auto no-scrollbar">
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.href) && (tab.href !== '/admin' || pathname === '/admin');
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`flex items-center gap-2 pb-4 text-sm font-medium transition-all relative whitespace-nowrap ${
              isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.name}
            
            {/* BADGE DE NOTIFICAÇÃO */}
            {tab.badge !== undefined && tab.badge > 0 && (
              <span className="flex items-center justify-center bg-accent-blue text-white text-[10px] font-bold h-4 min-w-[16px] px-1 rounded-full ml-0.5">
                {tab.badge}
              </span>
            )}

            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}