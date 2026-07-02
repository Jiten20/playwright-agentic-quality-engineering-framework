import { test, expect } from '../fixtures/baseTest';

test('seed', async ({ loginPage, page }) => {
  await loginPage.open();

  await expect(page).toHaveTitle(/Swag Labs/);
});