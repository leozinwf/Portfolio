# 🌌 Portfolio Premium | leozinwf.space

Repositório oficial do meu portfólio pessoal. Uma aplicação construída sob o conceito visual **"Apple encontra startup cyberpunk minimalista"**, focada em performance, transições suaves e design focado em produto/SaaS.

Status do Projeto: **Online** 🌐 
Link Oficial: [leozinwf.space](https://leozinwf.space)

---

## 🚀 Tecnologias e Ferramentas

O ecossistema foi escolhido de forma cirúrgica para garantir o melhor índice de renderização (SEO) aliado à flexibilidade do Motion Design:

- **Frontend:** Next.js (App Router v15/v16)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4 (Configurações baseadas em variáveis nativas do CSS)
- **Animações:** Framer Motion (Transições de layout, loops infinitos e entradas amortecidas)
- **Hospedagem & Deploy:** Vercel

---

## 🛠️ Arquitetura de Pastas

A estrutura foi planejada de modo modular e altamente escalável, dividindo responsabilidades visuais de lógicas de dados:

```text
src/
├── app/               # Roteamento de páginas (Home, About, Projects, Contact)
├── components/        # Componentes reutilizáveis organizados por escopo
│   ├── layout/        # Navbar flutuante e estruturas globais
│   └── sections/      # Seções de impacto da página principal (Hero, TechStack, etc)
├── data/              # Arquivos estruturados contendo dados estáticos (Data-driven UI)
└── styles/            # Estilos CSS globais e injeção de ruído cinematográfico