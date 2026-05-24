// src/data/blog.ts

export const blogPosts = [
  {
    id: 1,
    slug: "engenharia-do-movimento-framer-motion", // É o que vai na URL: /blog/engenharia-do-movimento...
    title: "A Engenharia do Movimento: UX além do estático",
    category: "Estudos",
    date: "20 de Maio, 2026",
    readTime: "5 min de leitura",
    excerpt: "Por que interfaces estáticas estão morrendo e como o Framer Motion altera a percepção de tempo do usuário durante o carregamento de dados.",
    // Para um blog simples inicial, podemos usar HTML direto no conteúdo
    content: `
      <p>A transição entre duas telas não é apenas um detalhe visual; é o espaço onde a psicologia do usuário opera. Quando construímos um fluxo...</p>
      <h2>O Problema da Fricção</h2>
      <p>Em sistemas tradicionais, a troca de informações gera uma quebra cognitiva. Ao aplicar <em>spring animations</em>, nós comunicamos peso e hierarquia.</p>
    `,
  },
  {
    id: 2,
    slug: "bastidores-rpa-analise-dados",
    title: "Bastidores: Como um robô reduziu 300h de trabalho manual",
    category: "Bastidores",
    date: "12 de Abril, 2026",
    readTime: "8 min de leitura",
    excerpt: "O passo a passo da descoberta de negócio até a implementação de um motor analítico em lote que mitigou falhas críticas.",
    content: `
      <p>A maior dificuldade na automação não é escrever o script, é mapear a regra de negócio correta. Neste Projeto...</p>
    `,
  },
  {
    id: 3,
    slug: "ui-concepts-ia-gerativa",
    title: "Prototipando interfaces com IA: O futuro do front-end",
    category: "Experimentos",
    date: "05 de Março, 2026",
    readTime: "4 min de leitura",
    excerpt: "Testes práticos de como a Inteligência Artificial está acelerando a construção de layouts complexos.",
    content: `
      <p>A inteligência artificial não vai substituir o desenvolvedor que sabe orquestrar a arquitetura, mas vai...</p>
    `,
  }
];