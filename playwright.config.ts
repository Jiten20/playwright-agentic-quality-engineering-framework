import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: Boolean(process.env.CI),

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never',
    }],
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',

    // SauceDemo uses data-test instead of data-testid.
    testIdAttribute: 'data-test',

    screenshot: 'only-on-failure',

    trace: process.env.CI
      ? 'on-first-retry'
      : 'retain-on-failure',

    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

  outputDir: 'test-results',
});