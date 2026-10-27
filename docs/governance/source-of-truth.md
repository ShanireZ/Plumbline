---
type: governance
title: Source of truth
description: Defines authority boundaries for the portable skill, native packaging and contribution checks.
tags: [governance, authority, skill]
status: approved
sources:
  - id: plan
    resource: ../../PLAN.md
    title: Current product plan and owner decisions
---

# Source of truth

[`PLAN.md`](../../PLAN.md) owns product scope, acceptance, current delivery state
and owner decisions. D081 adopts the portable skill, D083 supplies thin native host
packaging, and D084 limits delivery to the GitHub page and custom marketplace/CLI
installation while retiring obsolete framework material. D085 defines the
owner-authorized fresh skill-only history and ordinary DCO requirement.

| Material | Responsibility | Authority |
|---|---|---|
| `PLAN.md` | Product contract, decisions, current status | Highest project authority |
| `plugins/plumbline/skills/plumbline/` | Portable operational instructions, selective references, report template | Implements the plan; does not override target-project or host authority |
| `plugins/plumbline/`, marketplace catalogs, `INSTALL.md` | Host packaging and native installation instructions | Implements D083; does not grant installation or publication authority |
| `tests/skill/` | Behavior scenarios and local checks | Evidence of sampled behavior, not a universal guarantee |
| `tests/distribution/` | Package and negative-control checks | Local packaging evidence |
| `tests/governance/` | Ordinary contribution-history checks | Every reachable commit needs its own matching sign-off |
| README and documentation indexes | Stable identity and navigation | No duplicate changing status |

The retired Rust/Docker framework and prior Git history are held only in private
offline recovery material. They are not an active source tree or second product.
No historical contract may
silently reintroduce a dependency, risk threshold, runtime or permission obligation.

Changes to approved scope belong in the plan, followed by the smallest affected
instructions and navigation updates. Do not weaken a target project's acceptance
or permission rules to make verification succeed. Provider receipts, private run
data and credentials remain outside the repository.

Current milestone and delivery status stay only in the plan. Packaging, behavior
samples, installation/discovery, real-project adoption, and publication are separate
claims and require their own evidence.
