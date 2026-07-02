# GH-002 Rejected Unsupported Scenarios

## Purpose
This document records untrusted stakeholder suggestions that were evaluated against the approved acceptance criteria for GH-002 and the observed SauceDemo checkout interface. These ideas were rejected because they are not supported by the approved requirements or the current application behavior.

## Rejected Scenarios

### 1. Enter credit-card details
- Scenario ID: GH-002-REJ-01
- GitHub Issue reference: GH-002
- Proposed idea: Enter credit-card details
- Classification: REJECTED_UNSUPPORTED
- Reason for rejection:
  - The approved acceptance criteria for GH-002 only require entry of first name, last name, and postal code, followed by continue, finish, and confirmation verification.
  - The observed SauceDemo checkout flow does not present any credit-card entry form in the supported checkout path.
  - The current UI shows a checkout information form with first name, last name, and postal code fields, and the later overview page shows payment information as static display text rather than an editable field.
- Requirement evidence:
  - Approved acceptance criteria 1-6 for GH-002.
- Observed UI evidence:
  - The checkout information page displays first name, last name, and zip/postal code fields only.
  - The order overview page presents payment information as read-only text and does not expose a credit-card entry control.
- Assumptions:
  - None. The suggestion introduces a new interaction not supported by the approved criteria or the observed UI.

### 2. Select a payment method
- Scenario ID: GH-002-REJ-02
- GitHub Issue reference: GH-002
- Proposed idea: Select a payment method
- Classification: REJECTED_UNSUPPORTED
- Reason for rejection:
  - The approved acceptance criteria do not include payment selection.
  - The observed SauceDemo checkout flow does not require a user to choose a payment method before proceeding.
  - The interface presents payment information as fixed summary content rather than an editable payment-method selection step.
- Requirement evidence:
  - Approved acceptance criteria 1-6 for GH-002.
- Observed UI evidence:
  - The checkout overview page displays static payment information text such as SauceCard #31337.
  - No payment-method selector is visible in the supported flow.
- Assumptions:
  - None. This suggestion adds an unsupported workflow step.

### 3. Apply a discount code
- Scenario ID: GH-002-REJ-03
- GitHub Issue reference: GH-002
- Proposed idea: Apply a discount code
- Classification: REJECTED_UNSUPPORTED
- Reason for rejection:
  - The approved acceptance criteria do not include a discount or promotional code step.
  - The observed checkout flow does not provide a discount-code field or coupon entry control.
- Requirement evidence:
  - Approved acceptance criteria 1-6 for GH-002.
- Observed UI evidence:
  - The order overview page contains pricing summary fields but no discount code input.
- Assumptions:
  - None. The suggestion introduces an unsupported feature that is not present in the approved scope.

### 4. Verify an email receipt
- Scenario ID: GH-002-REJ-04
- GitHub Issue reference: GH-002
- Proposed idea: Verify an email receipt
- Classification: REJECTED_UNSUPPORTED
- Reason for rejection:
  - The approved acceptance criteria focus on order confirmation and do not mention receipt delivery or email verification.
  - The observed application confirms the order on-screen and does not expose an email receipt workflow.
- Requirement evidence:
  - Approved acceptance criteria 1-6 for GH-002.
- Observed UI evidence:
  - The confirmation page displays the order success message and does not present any email receipt or delivery notification mechanism.
- Assumptions:
  - None. This is outside the approved acceptance criteria and the visible application behavior.

## Summary
All four stakeholder suggestions were evaluated and rejected as REJECTED_UNSUPPORTED because they are not backed by the approved acceptance criteria or the current SauceDemo checkout interface.
