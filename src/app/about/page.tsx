"use client";

import { motion } from "framer-motion";
import { User, Cpu, Sparkles, Compass, Eye, Camera, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

const cinematicEasing = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32 overflow-hidden min-h-screen transition-colors duration-500">
      
      {/* 1. HERO PRINCIPAL */}
      <section className="relative max-w-4xl mx-auto text-center px-6 mb-32 z-10">
        {/* Glow de Fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none -z-10 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-6 text-white"
        >
          <User className="w-3.5 h-3.5 text-accent-blue" />
          <span>Mindset & Filosofia</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
        >
          Não vejo projetos apenas como interfaces. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-neutral-400">
            Vejo como experiências que precisam ser sentidas.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Sou Leonardo Sabatini, um criativo multidisciplinar especializado no cruzamento entre desenvolvimento web full-stack, motion design e engenharia de produto. Transformo conceitos complexos em produtos digitais vivos, de alta performance e com forte direção de arte.
        </motion.p>
      </section>

      {/* CONTAINER DO CONTEÚDO EDITORIAL */}
      <div className="max-w-4xl mx-auto px-6 space-y-32">
        
        {/* 2. SUA HISTÓRIA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 font-light text-neutral-400 leading-relaxed text-base md:text-lg">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-accent-purple" /> 01. Minha História
            </h2>
            <p className="text-white font-medium text-xl leading-snug">
              Tudo começou com a obsessão por entender a engrenagem interna das coisas.
            </p>
            <p>
              Antes mesmo de compreender os conceitos formais de design, programação ou produção audiovisual, eu já desmontava interfaces e códigos para decifrar como funcionavam por trás da tela. Sempre fui atraído pela zona cinzenta onde a lógica exata encontra a pura criatividade.
            </p>
            <p>
              Em vez de me limitar a uma única vertical técnica engessada, decidi conectar todas elas. Ao longo dos anos, unifiquei engenharia de software, motion design, arquitetura de dados com Supabase, interfaces fluidas e conceitos visuais cinematográficos em uma única metodologia de entrega.
            </p>
            <p className="italic text-neutral-300">
              Hoje, meu ecossistema de trabalho existe exatamente nessa intersecção: entre a precisão da engenharia e o impacto da estética.
            </p>
          </div>
          
          {/* PLACEHOLDER: Foto Real do Setup / Trabalho */}
          <div className="lg:col-span-5 aspect-[4/5] bg-surface/30 border border-border/40 rounded-3xl relative overflow-hidden group flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-background/50 border border-border/60 flex items-center justify-center text-neutral-400 mb-4 group-hover:scale-110 transition-transform duration-500">
              <Camera className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1">[ Sua Foto Cinemática Aqui ]</span>
            <span className="text-[10px] text-neutral-500 max-w-[180px]">Ambiente escuro, trabalhando no setup ou bastidores com câmera/notebook.</span>
          </div>
        </section>

        {/* 3. FILOSOFIA CRIATIVA */}
        <section className="p-8 md:p-12 rounded-3xl bg-surface/20 border border-border/40 backdrop-blur-md space-y-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-400" /> 02. Filosofia de Projeto
          </h2>
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
              Construindo percepção através de micro-detalhes invisíveis.
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed mb-8">
              Acredito sinceramente que boas aplicações digitais vão muito além de uma estética atraente. O design precisa comunicar um propósito claro. O movimento deve carregar uma intenção de fluxo. A tecnologia, por sua vez, deve desaparecer de forma sutil para que a experiência do usuário ocorra naturalmente.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/30">
            {["Tipografia & Contraste", "Ritmo & Cadência", "Tempo de Resposta", "Interação Tátil"].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 p-4 rounded-xl bg-background/30 border border-border/30">
                <span className="text-[10px] font-mono text-neutral-500">02.{idx + 1}</span>
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. O QUE EU FAÇO & DIREÇÃO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 lg:order-2 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent-blue" /> 03. Vetores de Execução
            </h2>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Desenvolvimento premium voltado a produtos fora do comum.
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base">
              Atuo desenhando e codificando a jornada completa de produtos digitais. Isso significa assumir desde a fundação estrutural dos dados até o polimento visual milimétrico da interface.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {["Websites Premium", "Aplicações Full-Stack", "UI Animation", "Direção de Arte", "Modelagem de Dados"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-surface/50 border border-border/40 text-neutral-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* PLACEHOLDER: Loop de Vídeo de UI Animada / Código */}
          <div className="lg:col-span-7 lg:order-1 aspect-video bg-surface/30 border border-border/40 rounded-3xl relative overflow-hidden group flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-background/50 border border-border/60 flex items-center justify-center text-neutral-400 mb-4 group-hover:bg-accent-blue group-hover:text-white transition-all duration-500">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1">[ Loop de Vídeo / Motion Graphics ]</span>
            <span className="text-[10px] text-neutral-500 max-w-[240px]">Gravação de tela acelerada codificando, animação do Framer Motion ou transições de UI.</span>
          </div>
        </section>

        {/* 5. SUA VISÃO */}
        <section className="text-center max-w-3xl mx-auto py-12 border-y border-border/30 space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center justify-center gap-2">
            <Eye className="w-4 h-4 text-neutral-400" /> 04. Visão de Mercado
          </h2>
          <p className="text-xl md:text-3xl font-light tracking-tight text-white leading-relaxed">
            "A internet está se tornando automatizada, veloz e assustadoramente <span className="text-neutral-500 italic font-light">genérica</span>. As marcas e produtos que realmente capturam a atenção hoje não são apenas puramente funcionais — elas possuem personalidade, ritmo e presença marcante."
          </p>
        </section>

        {/* 6. PARTE HUMANA & BASTIDORES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              05. Fora das Telas
            </h2>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Onde busco oxigênio criativo.
            </h3>
            <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed">
              Grande parte das minhas soluções de código e direções visuais nascem do consumo ativo de cultura digital, cinema independente, música eletrônica/sintetizadores, experimentos tridimensionais, hardware e o estudo aplicado de inteligência artificial. Acredito que repertório técnico sem repertório cultural produz apenas soluções comuns.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border/40 bg-surface/10 space-y-1">
              <span className="text-xs font-mono text-neutral-500 block">01 / CULTURA</span>
              <span className="text-sm font-medium text-white block">Cinema & Direção Visual</span>
            </div>
            <div className="p-4 rounded-xl border border-border/40 bg-surface/10 space-y-1">
              <span className="text-xs font-mono text-neutral-500 block">02 / EXPERIMENTOS</span>
              <span className="text-sm font-medium text-white block">Sintetizadores & Áudio</span>
            </div>
            <div className="p-4 rounded-xl border border-border/40 bg-surface/10 space-y-1">
              <span className="text-xs font-mono text-neutral-500 block">03 / EXPLORAÇÃO</span>
              <span className="text-sm font-medium text-white block">Hardware & Lab I.A</span>
            </div>
            <div className="p-4 rounded-xl border border-border/40 bg-surface/10 space-y-1">
              <span className="text-xs font-mono text-neutral-500 block">04 / DESIGN</span>
              <span className="text-sm font-medium text-white block">Interfaces Futuristas</span>
            </div>
          </div>
        </section>

        {/* 7. ENCERRAMENTO FORTE (CTA) */}
        <section className="pt-16 border-t border-border/40 flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Pronto para projetar algo memorável?
          </h2>
          <p className="text-neutral-400 font-light text-sm max-w-sm leading-relaxed">
            Se você busca apenas um executor de tarefas comum, eu provavelmente não sou a escolha certa. Mas se você quer desenhar um produto com alma e alta engenharia, vamos conversar.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white text-black px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
            >
              Iniciar uma Consultoria <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}