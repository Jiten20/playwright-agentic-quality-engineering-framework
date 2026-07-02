import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly productsTitle: Locator;
  readonly backpackAddToCartButton: Locator;
  readonly backpackRemoveButton: Locator;
  readonly shoppingCartLink: Locator;

  constructor(private readonly page: Page) {
    this.productsTitle = page.getByTestId('title');
    this.backpackAddToCartButton = page.getByTestId('add-to-cart-sauce-labs-backpack');
    this.backpackRemoveButton = page.getByTestId('remove-sauce-labs-backpack');
    this.shoppingCartLink = page.getByTestId('shopping-cart-link');
  }

  async addBackpackToCart(): Promise<void> {
    await this.backpackAddToCartButton.click();
  }

  async openCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }

  async verifyProductsPageVisible(): Promise<void> {
    await expect(this.productsTitle).toBeVisible();
  }

  async verifyBackpackAddedToCart(): Promise<void> {
    await expect(this.backpackRemoveButton).toBeVisible();
  }
}