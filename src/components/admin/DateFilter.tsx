'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Calendar } from "lucide-react";

export function DateFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPeriod = searchParams.get('period') || '30';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    router.push(`/admin?period=${value}`);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full sm:w-44">
      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-500">
        <Calendar className="w-3 h-3" />
        <span>Período</span>
      </div>
      <div className="relative">
        <select
          value={currentPeriod}
          onChange={handleChange}
          aria-label="Período"
          /* Trocamos as cores hardcoded por bg-surface/20 e border-border/50 para herdar do seu globals.css */
          className="bg-surface/20 border border-border/50 rounded-xl px-3 py-2 text-xs font-medium backdrop-blur-sm focus:outline-none focus:border-neutral-400 transition-colors cursor-pointer w-full appearance-none pr-8"
        >
          {/* As opções de fundo agora usam bg-background para alternar perfeitamente entre branco/preto de acordo com o tema */}
          <option value="7" className="bg-background">Últimos 7 dias</option>
          <option value="30" className="bg-background">Últimos 30 dias</option>
          <option value="90" className="bg-background">Últimos 90 dias</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
    </div>
  );
}