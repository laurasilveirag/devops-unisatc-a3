// scripts/waitThenTest.js
const { exec } = require("child_process");

console.log("⏳ Aguardando Strapi subir completamente...");
setTimeout(() => {
  console.log("🚀 Rodando testes E2E com Playwright...");
  const process = exec("pnpm playwright:test", { stdio: "inherit" });

  process.stdout.pipe(process.stdout);
  process.stderr.pipe(process.stderr);
}, 60000); // Espera 10 segundos antes de rodar os testes
