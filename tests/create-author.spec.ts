import { test, expect } from '@playwright/test';

test('cria novo autor com falha', async ({ page }) => {
  await page.goto('http://localhost:1337/admin/auth/login');

  await page.waitForSelector('input[name="email"]');

  await page.locator('input[name="email"]').fill('admin@satc.edu.br');
  await page.locator('input[name="password"]').fill('welcomeToStrapi123');

  await page.getByRole('button', { name: 'Login' }).click();

  // 🧨 Aqui está a falha: texto incorreto propositalmente
  await expect(page.getByRole('heading', { name: 'Painel de Controle' })).toBeVisible();
});
