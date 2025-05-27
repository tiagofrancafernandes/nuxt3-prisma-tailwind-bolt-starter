# Nuxt3 Prisma Tailwind Bolt Starter

Este projeto é um painel administrativo simples para gerenciamento de posts, criado com [Nuxt 3](https://nuxt.com/), estilizado com [TailwindCSS](https://tailwindcss.com/), utilizando [Prisma ORM](https://www.prisma.io/) para interação com o banco de dados, e gerado inicialmente através do [bolt.new](https://bolt.new/).

## Como surgiu este projeto?

A ideia deste projeto nasceu a partir de um pedido feito ao [bolt.new](https://bolt.new/) para criar uma aplicação Nuxt3 com TailwindCSS, incluindo uma área logada para gerenciar posts, que podem ser visualizados no frontend. O ORM escolhido para manipulação do banco de dados foi o Prisma.

Durante o desenvolvimento, contei com a ajuda da IA [ChatGPT](https://chat.openai.com/) e do [Cody, assistente de código da Sourcegraph](https://sourcegraph.com/cody), que auxiliaram na estruturação do projeto, implementação de autenticação, integração com o Prisma e ajustes gerais.

## Tecnologias utilizadas

- [Nuxt 3](https://nuxt.com/) — Framework fullstack para Vue.js
- [TailwindCSS](https://tailwindcss.com/) — Utilitário de CSS para estilização rápida
- [Prisma ORM](https://www.prisma.io/) — ORM moderno para Node.js e TypeScript
- [bolt.new](https://bolt.new/) — Gerador de projetos modernos
- [Cody (Sourcegraph)](https://sourcegraph.com/cody) & [ChatGPT](https://chat.openai.com/) — Assistentes de IA para desenvolvimento

## Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nuxt3-prisma-tailwind-bolt-starter.git
cd nuxt3-prisma-tailwind-bolt-starter
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Este projeto utiliza o Prisma ORM. Configure o arquivo `.env` com a string de conexão do seu banco de dados (por padrão, pode ser SQLite para testes):

```env
DATABASE_URL="file:./dev.db"
```

### 4. Rode as migrações e popule o banco

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 6. Login

Use as credenciais padrão para acessar a área administrativa:

- **E-mail:** admin@mail.com
- **Senha:** password

## Observações

- Este projeto é um ponto de partida e pode ser expandido conforme sua necessidade.
- Para produção, lembre-se de alterar as credenciais padrão e proteger melhor as informações sensíveis.

---

Projeto criado com auxílio do [bolt.new](https://bolt.new/), [ChatGPT](https://chat.openai.com/) e [Cody](https://sourcegraph.com/cody).

---

#### Prisma links

- https://www.prisma.io/docs/getting-started/quickstart-sqlite

<!-- npx prisma generate && npx prisma migrate dev --name init -->

**Force regenerate database and seed the data**

```sh
npx prisma migrate reset --force && npx prisma generate
```
