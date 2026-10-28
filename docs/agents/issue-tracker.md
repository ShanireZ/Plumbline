---
type: convention
title: Issue tracker
description: Defines public work requests, triage and their authority boundaries.
tags: [agents, issue-tracker, github]
status: stable
sources:
  - id: plan
    resource: ../../PLAN.md
    title: Product decisions and delivery boundaries
  - id: contribution
    resource: ../../CONTRIBUTING.md
    title: Contribution and review rules
  - id: labels
    resource: https://github.com/ShanireZ/Plumbline/labels
    title: GitHub tracker labels
---

# Issue tracker

Use [GitHub Issues](https://github.com/ShanireZ/Plumbline/issues) for public
features, defects and design proposals. Each issue should describe one
reviewable outcome, its acceptance criteria and relevant source/decision links.[^contribution]

Product scope and approved decisions stay in
[`PLAN.md`](../../PLAN.md). An issue does not override those decisions or authorize
external writes.[^plan]

Verify a supplied issue URL or number before acting. Keep work in the existing
tracker and record acceptance criteria before implementation.

## Triage

Write requests for information, readiness judgments and their reasons in the
issue text. Only `wontfix` is mapped to a workflow label, for work that will not
be actioned. Other GitHub default labels may exist. Check the current labels
before applying one; changing the label scheme needs separate approval.[^labels]

Follow [SECURITY.md](../../SECURITY.md) for suspected vulnerabilities. Public
contact requests must contain no vulnerability details.

[^plan]: Product decisions and delivery boundaries.
[^contribution]: Focused changes, acceptance and review rules.
[^labels]: Current tracker labels, not additional execution authority.
