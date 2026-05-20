"use client";
import { motion } from "framer-motion";
import { 
  Code2, 
  Film, 
  LayoutTemplate, 
  Cpu, 
  Search, 
  Layers, 
  Sparkles, 
  CheckCircle2,
  Mail
} from "lucide-react";

// Adicione os componentes SVG customizados logo abaixo dos imports:
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      
      {/* LINHAS ARQUITETURAIS DE FUNDO (Grid cinematográfico) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none -z-10 flex justify-between px-4 md:px-8 opacity-20">
        <div className="w-px h-full bg-border/80"></div>
        <div className="w-px h-full bg-border/80 hidden md:block"></div>
        <div className="w-px h-full bg-border/80 hidden lg:block"></div>
        <div className="w-px h-full bg-border/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative">
        
        {/* =========================================
            1. HERO PESSOAL
        ========================================= */}
        <section className="py-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none -z-10 blur-3xl rounded-full"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Entre tecnologia, design e <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-neutral-400">
                narrativa visual.
              </span>
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl">
              <p className="text-white font-medium">
                Sou um criador digital brasileiro focado em frontend, motion design e experiências visuais modernas.
              </p>
              <p>
                Trabalho unindo tecnologia, direção visual e narrativa para desenvolver produtos digitais que não são apenas funcionais, mas elegantes e memoráveis.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-border/40 my-8 relative">
          <motion.div 
            initial={{ scaleX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1.5, ease: cinematicEasing }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent origin-left"
          />
        </div>

        {/* =========================================
            2. MINHA TRAJETÓRIA
        ========================================= */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="flex flex-col md:flex-row gap-8 md:gap-16"
          >
            <h2 className="text-sm font-mono tracking-widest uppercase text-accent-blue shrink-0 md:w-48 pt-1">
              01 // A Trajetória
            </h2>
            <div className="space-y-6 text-neutral-400 text-base md:text-lg leading-relaxed border-l border-border/40 pl-6 md:pl-10 relative">
              <div className="absolute top-2 -left-[5px] w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              
              <p>
                Minha conexão com criatividade e tecnologia começou através da edição de vídeo e experimentos visuais. Com o tempo, fui expandindo essa curiosidade para motion design, interfaces, sistemas e desenvolvimento frontend.
              </p>
              <p>
                Hoje, utilizo essa mistura entre direção visual, experiência do usuário e tecnologia para criar produtos digitais modernos que unem funcionalidade e identidade visual com extrema precisão técnica.
              </p>
              <p>
                Ao longo da jornada, também desenvolvi soluções internas, dashboards, automações e sistemas complexos focados em melhorar processos operacionais e experiências digitais de ponta a ponta.
              </p>
            </div>
          </motion.div>
        </section>

        {/* =========================================
            3. FILOSOFIA CRIATIVA
        ========================================= */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
            className="p-8 md:p-12 rounded-[32px] border border-border/50 bg-surface/20 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 opacity-50"></div>
            
            <h2 className="text-sm font-mono tracking-widest uppercase text-accent-purple mb-8 relative z-10">
              02 // A Filosofia
            </h2>
            
            <div className="space-y-6 text-lg md:text-2xl font-medium text-white leading-snug relative z-10">
              <p>
                "Acredito que boas experiências digitais vão muito além de interfaces bonitas. Para mim, <span className="text-accent-blue">tecnologia, design e movimento</span> precisam trabalhar juntos."
              </p>
              <p className="text-neutral-400 text-base md:text-lg font-normal">
                Gosto de construir experiências que transmitam sensação, clareza e identidade — combinando performance de alto nível, usabilidade e direção visual impecável. Meu objetivo final é transformar ideias abstratas em produtos digitais funcionais, modernos e visualmente marcantes.
              </p>
            </div>
          </motion.div>
        </section>

        {/* =========================================
            4. COMO EU PENSO PRODUTOS
        ========================================= */}
        <section className="py-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest uppercase text-white mb-12"
          >
            03 // O Pensamento de Produto
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Linha vertical de conexão no meio (apenas desktop) */}
            <div className="hidden md:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-px bg-border/40"></div>

            {[
              {
                step: "01",
                icon: <Search className="w-5 h-5 text-accent-blue" />,
                title: "Entendimento",
                desc: "Antes de construir qualquer interface, busco entender o contexto, a necessidade de negócio e a experiência exata que precisa ser criada."
              },
              {
                step: "02",
                icon: <Layers className="w-5 h-5 text-accent-purple" />,
                title: "Estruturação",
                desc: "Organizo fluxos, arquiteturas de informação e funcionalidades pensando primeiramente em clareza, performance e escalabilidade técnica."
              },
              {
                step: "03",
                icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
                title: "Experiência Visual",
                desc: "Utilizo motion design, direção visual e microinterações táteis para tornar a experiência não apenas intuitiva, mas altamente memorável."
              },
              {
                step: "04",
                icon: <CheckCircle2 className="w-5 h-5 text-orange-500" />,
                title: "Refinamento",
                desc: "Acredito que os detalhes fazem a obra. Responsividade absoluta, fluidez, acessibilidade e percepção visual milimétrica fecham o ciclo."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: cinematicEasing }}
                className="p-8 rounded-[24px] border border-border/40 bg-surface/10 hover:bg-surface/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-2xl text-border font-bold opacity-50">{item.step}</span>
                  <div className="p-2 rounded-lg bg-surface border border-border/50">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================
            5. ÁREAS QUE CONECTO
        ========================================= */}
        <section className="py-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest uppercase text-white mb-12"
          >
            04 // Áreas Que Conecto
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Frontend Development",
                desc: "Aplicações modernas, interfaces responsivas e experiências web de altíssima performance.",
                icon: <Code2 className="w-6 h-6 text-accent-blue" />
              },
              {
                title: "Motion & Visual",
                desc: "Motion design, direção visual, VFX e experiências cinematográficas totalmente digitais.",
                icon: <Film className="w-6 h-6 text-accent-purple" />
              },
              {
                title: "UI / UX",
                desc: "Interfaces intuitivas focadas em clareza, fluidez e engenharia de experiência do usuário.",
                icon: <LayoutTemplate className="w-6 h-6 text-emerald-500" />
              },
              {
                title: "Systems & Automation",
                desc: "Soluções digitais em lote, dashboards complexos e automação de fluxos operacionais.",
                icon: <Cpu className="w-6 h-6 text-orange-500" />
              }
            ].map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: cinematicEasing }}
                className="group p-6 rounded-2xl border border-border/50 bg-background/50 hover:border-accent-blue/40 transition-all flex flex-col justify-between"
              >
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{area.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{area.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================
            6 & 7. ECOSSISTEMA E EXPLORAÇÃO
        ========================================= */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* STACK PREMIUM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
          >
            <h2 className="text-sm font-mono tracking-widest uppercase text-white mb-8">
              05 // O Ecossistema
            </h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-mono text-accent-blue mb-3">FRONTEND</h4>
                <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
                  {['Next.js', 'TypeScript', 'React', 'TailwindCSS', 'Framer Motion'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full border border-border/60 bg-surface/30">{t}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs font-mono text-accent-purple mb-3">MOTION & DESIGN</h4>
                <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
                  {['After Effects', 'Premiere Pro', 'Photoshop', 'Blender', 'Figma'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full border border-border/60 bg-surface/30">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-emerald-500 mb-3">BACKEND & SYSTEMS</h4>
                <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
                  {['Supabase', 'Firebase', 'APIs REST', 'Node.js', 'Automação RPA'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full border border-border/60 bg-surface/30">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ATUALMENTE EXPLORANDO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: cinematicEasing }}
          >
            <h2 className="text-sm font-mono tracking-widest uppercase text-white mb-8">
              06 // Explorando
            </h2>
            <div className="flex flex-col gap-3">
              {[
                "IA aplicada a produtos digitais",
                "Interfaces imersivas e experimentais",
                "Motion avançado para web (WebGL)",
                "Arquitetura de sistemas SaaS modernos",
                "Automação e engenharia de produtividade"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-neutral-400 text-sm p-3 rounded-xl border border-border/30 bg-surface/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </section>

        {/* =========================================
            8. CTA FINAL
        ========================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="py-32 text-center relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-t from-accent-purple/5 to-transparent pointer-events-none -z-10 blur-3xl rounded-full"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Vamos construir algo <span className="text-accent-blue italic">juntos?</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-lg mx-auto">
            Estou sempre explorando novas ideias, arquiteturas de produtos e experiências digitais. Se o seu projeto precisa de visão e execução, me chame.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:seuemail@exemplo.com" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <Mail className="w-4 h-4" /> Entrar em Contato
            </a>
            
            <div className="flex items-center gap-2">
              {/* Note que mudamos para GithubIcon, LinkedinIcon e InstagramIcon */}
              <a href="https://github.com/SEU_GITHUB" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-border/60 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-blue hover:bg-surface/50 transition-all duration-300">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/SEU_LINKEDIN" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-border/60 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-blue hover:bg-surface/50 transition-all duration-300">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/SEU_INSTA" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-border/60 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-blue hover:bg-surface/50 transition-all duration-300">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}