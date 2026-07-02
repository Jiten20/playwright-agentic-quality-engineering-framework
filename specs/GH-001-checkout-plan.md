# GH-001 Checkout Test Plan

## Objective
Validate the successful checkout journey for SauceDemo using the seed-test initialization path and the visible application behavior observed in the browser.

## Scope
- Login
- Product selection
- Cart review
- Checkout information entry
- Order review and completion
- Confirmation message

## Scenario Inventory

### Scenario GH-001-SC01: Successful login with valid credentials
- Scenario ID: GH-001-SC01
- GitHub Issue reference: GH-001
- Type: Functional
- Priority: High
- Preconditions:
  - The browser is open to the SauceDemo login page.
  - The application is available and the login form is visible.
- Steps:
  1. Open the SauceDemo login page.
  2. Enter the username shown by the application for the standard user.
  3. Enter the matching password shown by the application.
  4. Click the Login button.
- Expected result:
  - The user is authenticated successfully.
  - The browser navigates to the inventory page.
  - The Products page is displayed with the product catalog.
- Requirement evidence:
  - Acceptance Criterion 1: The user can log in using valid credentials.
  - Scope: Login.
- Observed UI evidence:
  - The login page displays username, password, and login controls.
  - After successful login, the URL changes to /inventory.html and the Products heading is shown.
- Assumptions:
  - The standard credentials exposed by the login page are valid for the intended test data.
- Classification: VERIFIED

### Scenario GH-001-SC02: Add Sauce Labs Backpack to the cart
- Scenario ID: GH-001-SC02
- GitHub Issue reference: GH-001
- Type: Functional
- Priority: High
- Preconditions:
  - The user is logged in and the inventory page is visible.
- Steps:
  1. Locate Sauce Labs Backpack in the product list.
  2. Click the Add to cart control for that product.
  3. Observe the cart indicator and the product button state.
- Expected result:
  - The product is added to the cart.
  - The cart count updates to show one item.
  - The Add to cart button changes to Remove for the selected product.
- Requirement evidence:
  - Acceptance Criterion 2: The user can add Sauce Labs Backpack to the cart.
  - Acceptance Criterion 3: The selected product appears in the cart.
  - Scope: Products and Cart.
- Observed UI evidence:
  - The inventory page shows Sauce Labs Backpack with an Add to cart button.
  - After clicking it, the cart badge changes to 1 and the button changes to Remove.
- Assumptions:
  - The product name and button state are stable for the test environment.
- Classification: VERIFIED

### Scenario GH-001-SC03: Review the cart and proceed to checkout
- Scenario ID: GH-001-SC03
- GitHub Issue reference: GH-001
- Type: Functional
- Priority: High
- Preconditions:
  - Sauce Labs Backpack has been added to the cart.
  - The cart badge indicates one item.
- Steps:
  1. Open the cart from the shopping cart link.
  2. Verify that Sauce Labs Backpack is listed with quantity and price.
  3. Click Checkout.
- Expected result:
  - The cart page shows the selected product.
  - The user can continue to the checkout information step.
  - The checkout form is displayed with first name, last name, and postal code fields.
- Requirement evidence:
  - Acceptance Criterion 3: The selected product appears in the cart.
  - Acceptance Criterion 4: The user can proceed to checkout.
  - Scope: Cart and Checkout.
- Observed UI evidence:
  - The cart page displays the backpack entry, quantity, description, and price.
  - The Checkout button is present and navigates to the checkout information page.
- Assumptions:
  - The cart retains the selected product when the user navigates to the cart page.
- Classification: VERIFIED

### Scenario GH-001-SC04: Enter checkout information and continue to order review
- Scenario ID: GH-001-SC04
- GitHub Issue reference: GH-001
- Type: Functional
- Priority: High
- Preconditions:
  - The user is on the checkout information page.
  - The first name, last name, and postal code fields are visible.
- Steps:
  1. Enter a first name.
  2. Enter a last name.
  3. Enter a postal or zip code.
  4. Click Continue.
- Expected result:
  - The user can submit the checkout information.
  - The application advances to the order overview page.
  - The overview page shows the selected item details and the order total.
- Requirement evidence:
  - Acceptance Criterion 5: The user can enter first name, last name and postal code.
  - Acceptance Criterion 4: The user can proceed to checkout.
  - Scope: Checkout.
- Observed UI evidence:
  - The checkout information page shows first name, last name, and zip/postal code fields.
  - After continuing, the page changes to Checkout: Overview and displays payment information, shipping information, item total, tax, and total.
- Assumptions:
  - Any non-empty values for the personal details are acceptable for this validation path.
- Classification: VERIFIED

### Scenario GH-001-SC05: Complete the order and confirm the success message
- Scenario ID: GH-001-SC05
- GitHub Issue reference: GH-001
- Type: Functional
- Priority: High
- Preconditions:
  - The user is on the order overview page after entering checkout information.
  - The selected product and totals are visible.
- Steps:
  1. Review the order summary and totals.
  2. Click Finish.
  3. Observe the confirmation page.
- Expected result:
  - The order is completed successfully.
  - The confirmation page is displayed.
  - The message Thank you for your order! is shown.
- Requirement evidence:
  - Acceptance Criterion 6: The user can complete the order.
  - Acceptance Criterion 7: The message "Thank you for your order!" is displayed.
  - Scope: Order confirmation.
- Observed UI evidence:
  - The overview page includes a Finish button.
  - After finishing, the application shows the Checkout: Complete! page with the Thank you for your order! heading.
- Assumptions:
  - The completion flow does not require any additional confirmation or payment step beyond the visible Finish action.
- Classification: VERIFIED

## Notes
- The plan is limited to the supported happy path described by the issue and confirmed through observed UI behavior.
- No unsupported or speculative scenarios were added beyond the requirement evidence and visible application behavior.

## QA Approval

## QA Approval

Status: APPROVED  
Reviewed by: Jiten Motwani

Approved scenarios:

- GH-001-SC01
- GH-001-SC02
- GH-001-SC03
- GH-001-SC04
- GH-001-SC05