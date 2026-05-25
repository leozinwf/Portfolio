import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] transition-colors duration-500">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold tracking-tighter text-[var(--text-main-dynamic)] opacity-20">404</h1>
        <p className="text-xl font-light text-[var(--text-muted-dynamic)]">Página não encontrada ou indisponível.</p>
        <Link 
          href="/" 
          className="inline-block px-8 py-3 bg-[var(--text-main-dynamic)] text-[var(--background)] rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}