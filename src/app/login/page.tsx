"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Credenciais inválidas. Tenta novamente.");
      setIsLoading(false);
    } else {
      // Redireciona para o painel de administração e atualiza a página para o middleware agir
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      
      {/* Brilho de fundo muito subtil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none -z-10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: cinematicEasing }}
        className="w-full max-w-[400px]"
      >
        <div className="p-8 md:p-10 border border-border bg-surface/30 rounded-2xl shadow-sm backdrop-blur-md">
          
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-12 h-12 rounded-xl border border-border bg-surface flex items-center justify-center mb-6 shadow-sm">
              <Lock className="w-5 h-5 text-neutral-400" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">
              Acesso Restrito
            </h1>
            <p className="text-sm text-neutral-400 font-light">
              Painel de administração do estúdio.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-400 transition-colors text-sm"
                  placeholder="admin@leozinwf.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2 font-medium">
                  Palavra-passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-400 transition-colors text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                className="text-red-500 text-xs text-center font-medium bg-red-500/10 border border-red-500/20 py-2.5 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-medium rounded-lg px-4 py-3.5 flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all duration-300 disabled:opacity-70 text-sm"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-neutral-500" />
              ) : (
                <>
                  Entrar no Sistema <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

        </div>
      </motion.div>
    </div>
  );
}