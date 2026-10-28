---
type: governance
title: Source of truth
description: Defines product, implementation, contribution and evidence authorities.
tags: [governance, authority]
status: stable
sources:
  - id: plan
    resource: ../../PLAN.md
    title: Product contract and owner decisions
  - id: guide
    resource: ../../AGENTS.md
    title: Project boundaries and commands
---

# Source of truth

User instructions and host permissions bound every action.
[`PLAN.md`](../../PLAN.md) owns Plumbline's product scope, acceptance, delivery
state and decisions. [The project guide](../../AGENTS.md) records execution
boundaries and validation commands.[^plan][^guide]

| Material | Responsibility |
| --- | --- |
| `PLAN.md` | Product contract, current state and owner decisions. |
| `plugins/plumbline/skills/plumbline/` | Shared operational instructions, selective references and report template. |
| `plugins/plumbline/`, both catalogs and `INSTALL.md` | Package metadata and native/standalone installation. |
| `NOTICE`, `LICENSE` and packaged copies | GPL-3.0-only project grant and unmodified standard license text. |
| `CONTRIBUTING.md` and `tests/governance/` | Contribution rules and DCO checks. |
| `SECURITY.md` | Private reporting and disclosure guidance. |
| `tests/distribution/` and `tests/skill/` | Package checks and sampled behavior evidence. |
| README and indexes | Identity, usage entry points and navigation. |

Update the document that owns a fact, then repair its navigation. Do not repeat
changing status in indexes or silently restore retired framework requirements.

Packaging, agent behavior, native installation, real-project use and public
availability require distinct evidence. Raw run data, recovery material and
provider correspondence remain outside Git. An earlier successful check cannot
establish a changed candidate's behavior.

[^plan]: Product contract and owner decisions.
[^guide]: Project boundaries and commands.
