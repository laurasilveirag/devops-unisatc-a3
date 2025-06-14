# Dockerfile
FROM node:18

WORKDIR /app

COPY . .

# Ativa o corepack e prepara o pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Instala dependências e faz o build
RUN pnpm install
RUN pnpm build

EXPOSE 1337

# Comando de inicialização do Strapi
CMD ["pnpm", "start"]
