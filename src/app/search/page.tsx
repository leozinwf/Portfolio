"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";
import { Search, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchResults() {
      if (!query) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const supabase = createClient();
      
      // Busca no banco projetos que tenham o texto no título ou na categoria
      const { data, error } = await supabase
        .from("projects")
        .select("id, title, slug, category, image_url")
        .eq("is_published", true)
        .textSearch("fts", query, {
          type: "websearch",
          config: "portuguese"
        });

      if (!error && data) {
        setResults(data);
      }
      
      setIsLoading(false);
    }

    fetchResults();
  }, [query]);

  return (
    <div className="min-h-screen pt-32 pb-24 container mx-auto px-6 max-w-4xl">
      <div className="flex items-center gap-3 mb-12 text-neutral-400">
        <Search className="w-6 h-6" />
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
          Resultados para <span className="text-accent-blue font-bold">"{query}"</span>
        </h1>
      </div>

      {isLoading ? (
        <div className="flex items-center gap-2 text-neutral-500 py-10">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Buscando projetos...</span>
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="group border border-border bg-surface/30 rounded-2xl overflow-hidden hover:border-neutral-500/50 transition-colors"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-video w-full bg-surface border-b border-border p-6 flex items-center justify-center">
                   {project.image_url ? (
                     <Image 
                        src={project.image_url} 
                        alt={project.title} 
                        fill 
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
                      />
                   ) : (
                     <span className="text-neutral-500 text-xs uppercase tracking-widest">Sem Imagem</span>
                   )}
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-neutral-500 uppercase mb-1">{project.category}</p>
                    <h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-foreground group-hover:-rotate-45 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-border rounded-2xl bg-surface/10">
          <p className="text-neutral-400 font-light">Nenhum projeto encontrado com esse termo.</p>
          <Link href="/projects" className="text-sm font-medium text-foreground underline mt-4 inline-block hover:text-neutral-300">
            Ver todos os projetos
          </Link>
        </div>
      )}
    </div>
  );
}

// O Next.js requer o uso do Suspense em volta de componentes que chamam useSearchParams
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center">Carregando pesquisa...</div>}>
      <SearchResults />
    </Suspense>
  );
}