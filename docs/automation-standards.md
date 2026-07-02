# Playwright Automation Standards

## Test Design

- Test visible user behaviour.
- Keep every test independent.
- Do not rely on test execution order.
- Use one clear business scenario per test.
- Use test.step() for business-level actions.

## Architecture

- Use TypeScript.
- Use Page Object Model for reusable page behaviour.
- Use custom fixtures to provide Page Objects.
- Store test data outside test files.
- Keep tests readable and business focused.

## Locator Strategy

Use this order:

1. getByRole()
2. getByLabel()
3. getByText()
4. getByTestId()
5. Stable CSS only when necessary

Do not use:

- XPath
- nth-child
- long CSS chains
- styling classes
- arbitrary timeouts

## Assertions

- Use Playwright web-first assertions.
- Every test must have a meaningful business assertion.
- Do not use manual isVisible() checks as assertions.
- Do not replace assertions merely to make a test pass.

## AI Rules

- Generated tests require QA review.
- Reuse existing pages and fixtures.
- Do not overwrite working tests without approval.
- Never commit directly to main.