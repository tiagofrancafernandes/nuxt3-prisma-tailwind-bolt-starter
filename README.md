# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

----
#### Prisma links
- https://www.prisma.io/docs/getting-started/quickstart-sqlite

<!-- npx prisma generate && npx prisma migrate dev --name init -->


**Force regenerate database and seed the data**
```sh
npx prisma migrate reset --force && npx prisma generate
```
