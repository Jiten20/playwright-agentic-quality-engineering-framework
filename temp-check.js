const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com', { waitUntil: 'domcontentloaded' });
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.waitForLoadState('networkidle');
  
  // Add backpack to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  
  // Navigate to cart
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForLoadState('networkidle');
  
  // Proceed to checkout
  await page.locator('[data-test="checkout"]').click();
  await page.waitForLoadState('networkidle');
  
  // Enter checkout info
  await page.locator('[data-test="firstName"]').fill('Jane');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('SW1A 1AA');
  await page.locator('[data-test="continue"]').click();
  await page.waitForLoadState('networkidle');
  
  // Now on overview page - check finish button
  const html = await page.locator('body').innerHTML();
  console.log('finish btn:', html.match(/<button[^>]*>Finish<[^>]*>/));
  console.log('finish input:', html.match(/<input[^>]*finish[^>]*>/i));
  
  // Click finish and check completion page
  const finishBtn = page.locator('button:has-text("Finish")');
  console.log('finish btn exists:', await finishBtn.count());
  if (await finishBtn.count() > 0) {
    await finishBtn.click();
    await page.waitForLoadState('networkidle');
    console.log('completion page body:', await page.locator('body').innerText());
  }
  
  await browser.close();
})();
