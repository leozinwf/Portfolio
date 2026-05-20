"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

const cinematicEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function BlogIndex() {
  return (
    <div className="min-h-screen pt-24 pb-20 overflow-hidden">
      
      {/* --- HERO SECTION DO BLOG --- */}
      <section className="relative max-w-4xl mx-auto text-center px-4 mb-20 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none -z-10 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: cinematicEasing }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-surface/40 backdrop-blur-md text-xs font-mono tracking-widest uppercase mb-6"
        >
          <BookOpen className="w-3.5 h-3.5 text-accent-blue" />
          <span>Knowledge Base</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          Artigos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Experimentos</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: cinematicEasing, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          Ensaios sobre engenharia de produto, motion design, arquitetura de sistemas e os bastidores das soluções que construo.
        </motion.p>
      </section>

      {/* --- LISTA DE ARTIGOS --- */}
      <section className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="flex flex-col gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: cinematicEasing }}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-[24px] border border-border/50 bg-surface/20 backdrop-blur-sm hover:border-accent-blue/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow de Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/0 via-accent-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex-1">
                  {/* Meta Infos */}
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs font-mono text-neutral-400 mb-4">
                    <span className="px-3 py-1 rounded-full border border-border/60 bg-background/50 text-accent-blue uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 hidden sm:flex">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  {/* Título e Resumo */}
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
                    {post.title}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed text-sm md:text-base line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>

                  {/* Botão de Leitura */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-neutral-300 group-hover:text-accent-blue transition-colors">
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

    </div>
  );
}