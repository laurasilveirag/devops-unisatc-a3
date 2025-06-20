import { test, expect } from '@playwright/test';

test('cria nova categoria', async ({ page }) => {
  await page.goto('http://localhost:1337/admin/auth/login');

  await page.waitForSelector('input[name="email"]');

  await page.locator('input[name="email"]').fill('admin@satc.edu.br');
  await page.locator('input[name="password"]').fill('welcomeToStrapi123');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Content Manager' }).click();
  await page.getByRole('link', { name: 'Categoria' }).click();
  await page.locator('div').filter({ hasText: /^CategoriaCreate new entry$/ }).getByRole('link').click();

  await page.getByRole('textbox', { name: 'Nome' }).fill('Filmes e Séries');
  await page.getByRole('textbox', { name: 'Descrição' }).fill('Categorias para artigos sobre cinema e televisão.');
  await page.getByRole('button', { name: 'Save' }).click();

});