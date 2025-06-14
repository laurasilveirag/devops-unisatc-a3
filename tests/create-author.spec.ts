import { test, expect } from '@playwright/test';

//Faz login no STRAPI e cria um novo autor
test('cria novo autor', async ({ page }) => {
  await page.goto('http://localhost:1337/admin/auth/login');

  // Espera o campo de e-mail
  await page.waitForSelector('input[name="email"]');

  // Preenche os campos usando seletores diretos para evitar ambiguidade
  await page.locator('input[name="email"]').fill('admin@satc.edu.br');
  await page.locator('input[name="password"]').fill('welcomeToStrapi123');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Content Manager' }).click();
  await page.getByRole('link', { name: 'Autor' }).click();
  await page.locator('div').filter({ hasText: /^AutorCreate new entry$/ }).getByRole('link').click();

  await page.getByRole('textbox', { name: 'Nome' }).fill('Laurinha');
  await page.getByRole('textbox', { name: 'Email' }).fill('laura@gmail.com');
  await page.getByRole('button', { name: 'Save' }).click();

});
