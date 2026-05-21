"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// (Mantenha os ícones GithubIcon, LinkedinIcon, InstagramIcon aqui)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-background">
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative">
        
        {/* =========================================
            1. HERO PESSOAL & VISÃO
        ========================================= */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 leading-[1.1] text-white">
              Não vejo tecnologia <br className="hidden md:block" />
              <span className="font-light italic text-neutral-500">apenas como ferramenta.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-300 font-medium leading-snug max-w-3xl mb-8">
              Vejo como experiência, percepção e comunicação.
            </p>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl font-light">
              Sou um Digital Creative Developer. Meu trabalho é conectar desenvolvimento robusto, design intencional e audiovisual para construir soluções completas e visualmente impactantes.
            </p>
          </motion.div>
        </section>

        <div className="w-full h-px bg-white/10 my-16"></div>

        {/* =========================================
            2. FILOSOFIA (O DIFERENCIAL)
        ========================================= */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="flex flex-col md:flex-row gap-12 md:gap-24"
          >
            <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500 shrink-0 md:w-32 pt-2">
              A Filosofia
            </h2>
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed font-light">
              <p>
                Meu foco nunca é apenas desenvolver algo funcional. Um sistema que funciona mas não comunica profissionalismo, é um sistema incompleto.
              </p>
              <p>
                Crio projetos que transmitem valor, profissionalismo e identidade. Do código que roda no servidor (SaaS, integrações e automações) à animação que guia o olhar do usuário na tela (Motion & VFX).
              </p>
              <p>
                É a interseção exata entre <span className="text-white font-medium">Lógica, Estética e Estratégia.</span>
              </p>
            </div>
          </motion.div>
        </section>

        <div className="w-full h-px bg-white/10 my-16"></div>

        {/* =========================================
            3. COMO EU PENSO (O PROCESSO)
        ========================================= */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="flex flex-col md:flex-row gap-12 md:gap-24"
          >
            <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-500 shrink-0 md:w-32 pt-2">
              A Abordagem
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Estrutura Visual</h3>
                <p className="text-neutral-400 font-light leading-relaxed">Antes do código, definimos a identidade. O audiovisual e o design não são enfeites, são ferramentas de retenção e posicionamento da sua marca.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Engenharia de Produto</h3>
                <p className="text-neutral-400 font-light leading-relaxed">Arquitetura de dados escalável, sistemas rápidos, painéis intuitivos e código sustentável usando as melhores práticas do mercado.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Automação Operacional</h3>
                <p className="text-neutral-400 font-light leading-relaxed">Sistemas não devem apenas ser bonitos, devem economizar tempo. Implemento automações que removem o atrito operacional do seu negócio.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* =========================================
            4. CTA FINAL
        ========================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="py-32 mt-16 text-center border-t border-white/10"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Pronto para elevar seu <span className="font-light italic text-neutral-500">posicionamento?</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-lg mx-auto font-light">
            Se o seu negócio precisa de uma presença digital que gere confiança e converta, vamos conversar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/contact" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2">
              Solicitar Orçamento
            </a>
            
            <div className="flex items-center gap-3">
              <a href="https://github.com/SEU_GITHUB" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/SEU_LINKEDIN" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/SEU_INSTA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}