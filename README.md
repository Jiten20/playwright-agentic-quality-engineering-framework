# Playwright Agentic Quality Engineering Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Playwright MCP](https://img.shields.io/badge/Playwright_MCP-Agentic_QE-purple)
![GitHub MCP](https://img.shields.io/badge/GitHub_MCP-Traceability-black)
![CI/CD](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-orange)
[![Playwright Quality Gate](https://github.com/Jiten20/playwright-agentic-quality-engineering-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/Jiten20/playwright-agentic-quality-engineering-framework/actions/workflows/playwright.yml)

An AI-assisted quality engineering framework built using **Playwright**, **TypeScript**, **Playwright MCP**, and **GitHub-based traceability**.

The framework demonstrates a controlled multi-agent workflow for **test planning, automation generation, hallucination detection, failure diagnosis, human approval, reporting, and GitHub Actions CI/CD**.

---

## 📁 Project Structure

```text
playwright-agentic-quality-engineering-framework/
│
├── .github/
│   ├── agents/
│   │   ├── playwright-test-planner.agent.md
│   │   ├── playwright-test-generator.agent.md
│   │   └── playwright-test-healer.agent.md
│   │
│   ├── ISSUE_TEMPLATE/
│   │
│   └── workflows/
│       └── playwright.yml
│
├── .vscode/
│   └── mcp.json
│
├── docs/
│   ├── automation-standards.md
│   ├── hallucination-guardrails.md
│   └── human-approval-process.md
│
├── fixtures/
│   └── baseTest.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── requirements/
│   ├── GH-001-successful-checkout.md
│   └── GH-002-hallucination-challenge.md
│
├── specs/
│   ├── GH-001-checkout-plan.md
│   └── rejected/
│       └── GH-002-unsupported-scenarios.md
│
├── test-data/
│   └── testData.ts
│
├── tests/
│   ├── smoke/
│   │   └── GH-001-checkout.spec.ts
│   ├── regression/
│   └── seed.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

Generated folders such as `playwright-report/` and `test-results/` are excluded from Git and published through GitHub Actions as execution artifacts.

---

## 🤖 Agentic QA Workflow

```text
GitHub Issue / Requirement
          ↓
Playwright Test Planner
          ↓
Playwright MCP Browser Exploration
          ↓
Evidence-Based Test Plan
          ↓
Hallucination Validation
          ↓
Senior QA Approval
          ↓
Playwright Test Generator
          ↓
POM + Fixtures + Automated Tests
          ↓
GitHub Actions Quality Gate
          ↓
Pass → Report / Pull Request
Fail → Playwright Test Healer
          ↓
Human Review
```

The framework keeps a human QA approval gate between AI-generated test planning and automation generation.

---

## 🧠 Multi-Agent Responsibilities

### Playwright Test Planner

The Planner agent:

* Reads the GitHub Issue and acceptance criteria
* Explores SauceDemo using Playwright MCP
* Generates structured test scenarios
* Captures requirement and observed UI evidence
* Identifies assumptions and unsupported behaviour
* Does not generate automation code

### Playwright Test Generator

The Generator agent:

* Reads only QA-approved test scenarios
* Generates Playwright TypeScript tests
* Creates or reuses Page Objects
* Uses custom fixtures and external test data
* Adds GitHub Issue traceability
* Executes and verifies generated tests

### Playwright Test Healer

The Healer agent:

* Analyses failed tests, traces, screenshots, and errors
* Reproduces failures against the live application
* Classifies application and automation failures
* Proposes the smallest maintainable correction
* Re-runs failed and related tests
* Requires human approval before accepting changes

---

## ✅ Test Results Summary

| Requirement                          |     Approved Scenarios |     Passing | Failing |
| ------------------------------------ | ---------------------: | ----------: | ------: |
| GH-001 — Successful Product Checkout |                      5 |         ✅ 5 |       0 |
| GH-002 — Hallucination Validation    | 4 rejected suggestions | ✅ Validated |       0 |
| **Total automated GH-001 scenarios** |                  **5** |     ✅ **5** |   **0** |

### GH-001 — Successful Product Checkout

| Scenario ID | Scenario                                   | Status |
| ----------- | ------------------------------------------ | ------ |
| GH-001-SC01 | Login with valid credentials               | ✅ PASS |
| GH-001-SC02 | Add Sauce Labs Backpack to the cart        | ✅ PASS |
| GH-001-SC03 | Review cart and proceed to checkout        | ✅ PASS |
| GH-001-SC04 | Enter checkout information and continue    | ✅ PASS |
| GH-001-SC05 | Complete the order and verify confirmation | ✅ PASS |

---

## 🛡️ Hallucination Detection Scenario

The framework includes a controlled hallucination-validation requirement under:

```text
requirements/GH-002-hallucination-challenge.md
```

The following stakeholder suggestions were intentionally unverified:

* Enter credit-card details
* Select a payment method
* Apply a discount code
* Verify an email receipt

The Test Planner compared each suggestion against:

1. Approved acceptance criteria
2. Current SauceDemo behaviour
3. Playwright MCP browser evidence

All four suggestions were classified as:

```text
REJECTED_UNSUPPORTED
```

The rejected scenarios are documented in:

```text
specs/rejected/GH-002-unsupported-scenarios.md
```

No Playwright automation was generated for unsupported requirements.

---

## 🔎 Scenario Classification

Every AI-generated scenario must be classified as one of the following:

| Classification               | Meaning                                                         |
| ---------------------------- | --------------------------------------------------------------- |
| `VERIFIED`                   | Supported by the requirement and observed application behaviour |
| `ASSUMPTION_REQUIRES_REVIEW` | Possible scenario, but requirement evidence is incomplete       |
| `REJECTED_UNSUPPORTED`       | Not supported by the requirement or current application         |

Only scenarios marked `VERIFIED` and approved by the Senior QA are passed to the Test Generator.

---

## ⚙️ Setup & Installation

### Prerequisites

* Node.js 20+
* npm
* VS Code
* Git
* GitHub Copilot or another compatible MCP-enabled agent environment

### Clone Repository

```bash
git clone https://github.com/Jiten20/playwright-agentic-quality-engineering-framework.git
cd playwright-agentic-quality-engineering-framework
```

### Install Dependencies

```bash
npm ci
```

### Install Playwright Browsers

```bash
npx playwright install
```

For Linux or CI environments:

```bash
npx playwright install --with-deps
```

---

## 🚀 Running Tests

| Command                   | Description                           |
| ------------------------- | ------------------------------------- |
| `npm test`                | Run all Playwright tests              |
| `npm run test:smoke`      | Run smoke tests                       |
| `npm run test:regression` | Run regression tests                  |
| `npm run test:headed`     | Run tests in headed mode              |
| `npm run test:debug`      | Run tests using Playwright Debug Mode |
| `npm run typecheck`       | Validate TypeScript                   |
| `npm run report`          | Open the Playwright HTML report       |

### Examples

```bash
# Run all tests
npm test

# Run smoke tests
npm run test:smoke

# Run regression tests
npm run test:regression

# Run in headed mode
npm run test:headed

# Validate TypeScript
npm run typecheck

# Open the latest HTML report
npm run report
```

---

## 🏷️ GitHub Issue Traceability

Tests are mapped to GitHub Issues and scenario IDs.

Example:

```typescript
test(
  'Complete the order and verify confirmation',
  {
    tag: ['@smoke', '@GH-1', '@GH-001-SC05'],
    annotation: {
      type: 'github-issue',
      description: 'GH-001 — Successful Product Checkout'
    }
  },
  async ({ loginPage, productsPage, cartPage, checkoutPage }) => {
    // Test implementation
  }
);
```

Traceability flow:

```text
GitHub Issue
    ↓
Requirement File
    ↓
Planner Test Plan
    ↓
QA-Approved Scenario
    ↓
Generated Playwright Test
    ↓
GitHub Actions Result
```

---

## 🏗️ Design Approach

### Page Object Model

The framework uses the **Page Object Model** to separate reusable application behaviour from test logic.

```text
Test File
    ↓
Custom Fixture
    ↓
Page Object
    ↓
Playwright Locator and Action
    ↓
Browser
```

Benefits:

* Reduced code duplication
* Centralised locator maintenance
* Reusable page actions
* Cleaner test implementation
* Easier framework scalability

---

### Custom Fixtures

Custom fixtures inject Page Objects directly into tests.

Example:

```typescript
test(
  'Validate checkout',
  async ({
    loginPage,
    productsPage,
    cartPage,
    checkoutPage
  }) => {
    // Test implementation
  }
);
```

Benefits:

* Cleaner tests
* Reduced setup code
* Reusable dependencies
* Better test isolation
* Lazy fixture initialisation

---

### Test Steps

The framework uses `test.step()` to represent business-level actions.

```typescript
await test.step('Login with valid credentials', async () => {
  await loginPage.login(username, password);
});

await test.step('Complete checkout', async () => {
  await checkoutPage.completeCheckout();
});
```

Benefits:

* More readable HTML reports
* Easier failure diagnosis
* Clear test execution flow
* Better trace readability

---

## 🎯 Locator Strategy

The framework follows Playwright locator best practices.

| Priority | Locator Type         | Example                                  |
| -------- | -------------------- | ---------------------------------------- |
| ✅ 1      | `getByRole()`        | `getByRole('button', { name: 'Login' })` |
| ✅ 2      | `getByLabel()`       | `getByLabel('Username')`                 |
| ✅ 3      | `getByPlaceholder()` | `getByPlaceholder('Username')`           |
| ✅ 4      | `getByText()`        | `getByText('Products')`                  |
| ✅ 5      | `getByTestId()`      | `getByTestId('checkout')`                |
| ⚠️ 6     | Stable CSS selector  | `[data-test="checkout"]`                 |

Avoid:

* Fragile XPath locators
* Long CSS chains
* `nth-child()` selectors
* Styling-based classes
* Arbitrary `waitForTimeout()` calls

SauceDemo uses the `data-test` attribute. The framework configures:

```typescript
use: {
  testIdAttribute: 'data-test'
}
```

This allows:

```typescript
page.getByTestId('login-button');
```

---

## 📊 Reporting

Playwright HTML reports are generated automatically after execution.

Open the local report:

```bash
npx playwright show-report
```

### Generated Evidence

* HTML report
* Business-level test steps
* Screenshots on failure
* Playwright traces
* Video recordings
* Error messages and stack traces

Generated reports are excluded from Git and uploaded as GitHub Actions artifacts.

---

## 🔄 CI/CD Integration

The project uses **GitHub Actions** as a Playwright quality gate.

Workflow:

```text
.github/workflows/playwright.yml
```

### Pipeline Triggers

The workflow executes on:

* Push to configured branches
* Pull requests targeting `main`
* Manual workflow execution
* Re-running a completed GitHub Actions job

### Pipeline Steps

1. Checkout repository
2. Set up Node.js
3. Install dependencies using `npm ci`
4. Install Playwright browsers
5. Execute TypeScript validation
6. Run Playwright tests
7. Upload the HTML report
8. Upload failure evidence

---

## ▶️ Manually Execute the GitHub Actions Workflow

Ensure the workflow includes:

```yaml
on:
  workflow_dispatch:

  push:
    branches:
      - main

  pull_request:
    branches:
      - main
```

Then:

1. Open the repository on GitHub.
2. Select **Actions**.
3. Select **Playwright Quality Gate**.
4. Click **Run workflow**.
5. Select the branch.
6. Click **Run workflow** again.

To re-run an existing execution:

1. Open **Actions**.
2. Open a completed workflow run.
3. Select **Re-run jobs**.
4. Choose **Re-run all jobs**.

---

## 🧪 Playwright Configuration

Configured in:

```text
playwright.config.ts
```

| Setting           | Value                                   | Purpose                           |
| ----------------- | --------------------------------------- | --------------------------------- |
| `testDir`         | `./tests`                               | Test location                     |
| `fullyParallel`   | `true`                                  | Enable parallel-safe execution    |
| `forbidOnly`      | CI only                                 | Prevent committed focused tests   |
| `retries`         | 2 in CI                                 | Retry failed CI tests             |
| `workers`         | 1 in CI                                 | Improve CI stability              |
| `screenshot`      | `only-on-failure`                       | Capture failure screenshots       |
| `trace`           | `on-first-retry` or `retain-on-failure` | Support diagnosis                 |
| `video`           | `retain-on-failure`                     | Record failed executions          |
| `testIdAttribute` | `data-test`                             | Support SauceDemo test attributes |

---

## 📝 `.gitignore`

```gitignore
# Dependencies
node_modules/

# Playwright outputs
playwright-report/
test-results/
blob-report/

# Build output
dist/

# Environment variables
.env
.env.*

# OS files
.DS_Store
Thumbs.db
```

---

## 🛠️ Technology Stack

| Tool            | Purpose                                 |
| --------------- | --------------------------------------- |
| Playwright      | Browser automation and test execution   |
| TypeScript      | Framework implementation                |
| Playwright MCP  | Browser exploration for AI agents       |
| GitHub MCP      | Repository, Issue and PR interaction    |
| GitHub Issues   | Requirements and traceability           |
| GitHub Projects | Agent workflow and QA approval tracking |
| GitHub Actions  | Continuous integration                  |
| HTML Reporter   | Test execution reporting                |
| VS Code         | MCP-enabled development environment     |

---

## 🔐 Human Approval and Governance

The framework applies the following controls:

* Planner output must be reviewed by a Senior QA.
* Unsupported requirements must not be automated.
* Only explicitly approved scenarios can be generated.
* The Generator must not change approved expected results.
* The Healer must not delete valid assertions to make tests pass.
* AI-generated changes must not be committed directly to `main`.
* Pull-request review is required before merge.
* MCP configuration must not contain secrets or personal access tokens.

---

## 🚀 Future Enhancements

* Automated GitHub Issue comments using GitHub MCP
* Automatic feature-branch and pull-request creation
* Structured failure-analysis reports
* Controlled self-healing locator proof of concept
* Cross-browser execution
* API testing using Playwright
* Environment support for DEV, QA, and UAT
* Docker execution
* Allure reporting
* RAG-based retrieval from historical requirements, defects, and reports

---

## 📌 Key Highlights

* Playwright + TypeScript
* Playwright MCP browser exploration
* Multi-agent Planner, Generator, and Healer workflow
* GitHub Issue traceability
* Evidence-based AI test planning
* Human QA approval gate
* Hallucination detection and rejection
* Page Object Model
* Custom fixtures
* Web-first assertions
* HTML reporting
* Screenshots, traces, and videos on failure
* GitHub Actions CI/CD quality gate
* Maintainable and scalable framework design
