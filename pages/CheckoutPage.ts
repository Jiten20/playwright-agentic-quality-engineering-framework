import { expect, Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly reviewTitle: Locator;
  readonly successMessage: Locator;

  constructor(private readonly page: Page) {
    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.postalCodeInput = page.getByTestId('postalCode');
    this.continueButton = page.getByTestId('continue');
    this.finishButton = page.getByTestId('finish');
    this.reviewTitle = page.getByTestId('title');
    this.successMessage = page.getByRole('heading', { name: 'Thank you for your order!' });
  }

  async enterCustomerInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueToOverview(): Promise<void> {
    await this.continueButton.click();
  }

  async verifyOverviewVisible(): Promise<void> {
    await expect(this.reviewTitle).toBeVisible();
  }

  async finishOrder(): Promise<void> {
    await this.finishButton.click();
  }

  async verifyOrderSuccess(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
  }
}