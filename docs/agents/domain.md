---
type: convention
title: Project context
description: Maps Plumbline product terms to their authoritative source locations.
tags: [agents, project-context]
status: stable
sources:
  - id: plan
    resource: ../../PLAN.md
    title: Public product contract and decisions
---

# Project context

Read [the relevant product contract](../../PLAN.md) before changing the package.
Use the actual repository structure when locating implementation and checks.[^plan]

| Term | Meaning and source |
| --- | --- |
| Skill | The shared [operational instructions](../../plugins/plumbline/skills/plumbline/SKILL.md), references and report template. |
| Plugin | The native wrapper at `plugins/plumbline/`; its README and manifests describe the installed payload. |
| Marketplace | A host catalog pointing at that wrapper; see [installation](../../INSTALL.md). |
| Evidence | Observations bound to the checked source, inputs and environment; see the skill's selective references. |
| Acceptance | Project-owned requirements and checks, not a universal correctness score. |

See [the authority map](../governance/source-of-truth.md) for contribution,
security and validation sources.

[^plan]: Plumbline product contract and decisions.
