import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly cartTitle: Locator;
  readonly backpackItem: Locator;
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.cartTitle = page.getByTestId('title');
    this.backpackItem = page.getByRole('link', { name: 'Sauce Labs Backpack' });
    this.checkoutButton = page.getByTestId('checkout');
  }

  async open(): Promise<void> {
    await this.page.goto('/cart.html');
  }

  async verifyBackpackVisible(): Promise<void> {
    await expect(this.backpackItem).toBeVisible();
  }

  async verifyCartPageVisible(): Promise<void> {
    await expect(this.cartTitle).toBeVisible();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}