import { test, expect } from '../../fixtures/baseTest';
import { standardUser, checkoutInfo } from '../../test-data/testData';

test.describe('GH-001 approved scenarios', () => {
  test('logs in with valid credentials @smoke @regression @GH-001 @GH-001-SC01', async ({ loginPage, productsPage, page }) => {
    await test.step('Open the login page and sign in', async () => {
      await loginPage.open();
      await loginPage.login(standardUser.username, standardUser.password);
    });

    await test.step('Verify that the inventory page is shown', async () => {
      await expect(productsPage.productsTitle).toBeVisible();
      await expect(productsPage.shoppingCartLink).toBeVisible();
      await expect(page).toHaveURL(/\/inventory\.html/);
    });
  });

  test('adds Sauce Labs Backpack to the cart @smoke @regression @GH-001 @GH-001-SC02', async ({ loginPage, productsPage }) => {
    await test.step('Sign in and open the inventory page', async () => {
      await loginPage.open();
      await loginPage.login(standardUser.username, standardUser.password);
      await productsPage.verifyProductsPageVisible();
    });

    await test.step('Add the approved backpack product to the cart', async () => {
      await productsPage.addBackpackToCart();
      await productsPage.verifyBackpackAddedToCart();
    });
  });

  test('reviews the cart and proceeds to checkout @smoke @regression @GH-001 @GH-001-SC03', async ({ loginPage, productsPage, cartPage, checkoutPage }) => {
    await test.step('Sign in and add the approved backpack to the cart', async () => {
      await loginPage.open();
      await loginPage.login(standardUser.username, standardUser.password);
      await productsPage.verifyProductsPageVisible();
      await productsPage.addBackpackToCart();
    });

    await test.step('Open the cart and continue to checkout', async () => {
      await productsPage.openCart();
      await cartPage.verifyCartPageVisible();
      await cartPage.verifyBackpackVisible();
      await cartPage.proceedToCheckout();
    });

    await test.step('Verify that the checkout form is available', async () => {
      await expect(checkoutPage.firstNameInput).toBeVisible();
      await expect(checkoutPage.lastNameInput).toBeVisible();
      await expect(checkoutPage.postalCodeInput).toBeVisible();
    });
  });

  test('enters checkout information and continues to order review @smoke @regression @GH-001 @GH-001-SC04', async ({ loginPage, productsPage, cartPage, checkoutPage }) => {
    await test.step('Sign in and add the approved backpack to the cart', async () => {
      await loginPage.open();
      await loginPage.login(standardUser.username, standardUser.password);
      await productsPage.verifyProductsPageVisible();
      await productsPage.addBackpackToCart();
    });

    await test.step('Open the cart and continue to checkout form', async () => {
      await productsPage.openCart();
      await cartPage.verifyCartPageVisible();
      await cartPage.verifyBackpackVisible();
      await cartPage.proceedToCheckout();
    });

    await test.step('Enter customer information and proceed to overview', async () => {
      await checkoutPage.enterCustomerInformation(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.postalCode);
      await checkoutPage.continueToOverview();
    });

    await test.step('Verify the order overview page is displayed', async () => {
      await checkoutPage.verifyOverviewVisible();
    });
  });

  test('completes the order and confirms the success message @smoke @regression @GH-001 @GH-001-SC05', async ({ loginPage, productsPage, cartPage, checkoutPage }) => {
    await test.step('Sign in and add the approved backpack to the cart', async () => {
      await loginPage.open();
      await loginPage.login(standardUser.username, standardUser.password);
      await productsPage.verifyProductsPageVisible();
      await productsPage.addBackpackToCart();
    });

    await test.step('Open the cart and continue to checkout form', async () => {
      await productsPage.openCart();
      await cartPage.verifyCartPageVisible();
      await cartPage.verifyBackpackVisible();
      await cartPage.proceedToCheckout();
    });

    await test.step('Enter customer information and proceed to overview', async () => {
      await checkoutPage.enterCustomerInformation(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.postalCode);
      await checkoutPage.continueToOverview();
    });

    await test.step('Finish the order', async () => {
      await checkoutPage.verifyOverviewVisible();
      await checkoutPage.finishOrder();
    });

    await test.step('Verify the success message is displayed', async () => {
      await checkoutPage.verifyOrderSuccess();
    });
  });
});
