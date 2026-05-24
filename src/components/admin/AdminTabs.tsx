"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, FolderGit2 } from "lucide-react";

export function AdminTabs() {
  const pathname = usePathname();

  const tabs = [
    { name: "Dashboard", href: "/admin", icon: BarChart3 },
    { name: "Projetos", href: "/admin/projects", icon: FolderGit2 },
  ];

  return (
    <nav className="flex items-center gap-8">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`flex items-center gap-2 pb-4 text-sm font-medium transition-all relative ${
              isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.name}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}