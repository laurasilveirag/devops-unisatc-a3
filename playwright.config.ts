// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  use: {
    headless: true,
    baseURL: 'http://localhost:1337',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
});
