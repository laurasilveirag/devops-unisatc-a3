import { test, expect } from '@playwright/test';

test('cria novo autor', async ({ page }) => {
  await page.goto('http://localhost:1337/admin/auth/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@satc.edu.br');
  await page.getByRole('textbox', { name: 'Password' }).fill('welcomeToStrapi123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Content Manager' }).click();
  await page.getByRole('link', { name: 'Autor' }).click();
  await page.locator('div').filter({ hasText: /^AutorCreate new entry$/ }).getByRole('link').click();

  await page.getByRole('textbox', { name: 'Nome' }).fill('Laurinha');
  await page.getByRole('textbox', { name: 'Email' }).fill('lauraa@gmail.com');
  await page.getByRole('button', { name: 'Save' }).click();
});
