FROM node:18

WORKDIR /app

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install
RUN pnpm build

# ⚠️ Adiciona variáveis de ambiente necessárias
ENV APP_KEYS=ImJMpHjnCdJw4ii7jZzCXQ==,Jg239VoMach6Fh2LAH6ydA==,LAdmPTwE8oqyVjAV4pCkBQ==,f1gPGngKmE5xhyDktSpCVw==

EXPOSE 1337

CMD ["pnpm", "start"]
