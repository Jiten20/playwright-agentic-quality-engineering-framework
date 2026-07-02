# Hallucination Guardrails

Every generated scenario must be supported by at least one source:

1. GitHub Issue acceptance criteria
2. Verified behaviour observed through Playwright
3. Existing approved product documentation

Each scenario must contain:

- Evidence source
- Requirement reference
- Observed UI evidence
- Assumptions
- Approval status

## Classification

### VERIFIED

Supported by the requirement and application.

### ASSUMPTION_REQUIRES_REVIEW

Possible scenario, but requirement evidence is incomplete.

### REJECTED_UNSUPPORTED

Not supported by the requirement or application.

## Rules

- Never automate REJECTED_UNSUPPORTED scenarios.
- Never treat assumptions as requirements.
- Never invent fields, flows or expected results.
- Never change expected results to make a test pass.
- Human QA approval is required before generation.