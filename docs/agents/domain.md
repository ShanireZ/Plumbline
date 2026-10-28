---
type: convention
title: Project context
description: Maps Plumbline product terms to their authoritative source locations.
tags: [agents, project-context]
status: stable
sources:
  - id: plan
    resource: ../../PLAN.md
    title: Product contract and owner decisions
---

# Project context

Read [the relevant product contract](../../PLAN.md) before changing the package.
Use the actual repository structure rather than a generic application template.[^plan]

| Term | Meaning and source |
| --- | --- |
| Skill | The shared [operational instructions](../../plugins/plumbline/skills/plumbline/SKILL.md), references and report template. |
| Plugin | The native wrapper at `plugins/plumbline/`; its README and manifests describe the installed payload. |
| Marketplace | A host catalog pointing at that wrapper; see [installation](../../INSTALL.md). |
| Evidence | Observations bound to the checked source, inputs and environment; see the skill's selective references. |
| Acceptance | Project-owned requirements and checks, not a universal correctness score. |

Product decisions stay in `PLAN.md`. Package checks live in
`tests/distribution/`; sampled behavior cases live in
[`tests/skill/`](../../tests/skill/README.md). Contributor and reporting rules
belong in [CONTRIBUTING.md](../../CONTRIBUTING.md) and
[SECURITY.md](../../SECURITY.md).

If an implementation conflicts with an approved decision, state the conflict and
resolve it through the owner. A tool, issue or test result cannot reopen scope
or grant publication permission.

[^plan]: Plumbline product contract and owner decisions.
