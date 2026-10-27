# Plumbline

[![License: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blue.svg?style=flat-square)](LICENSE)
![Type: Agent Skill](https://img.shields.io/badge/type-Agent%20Skill-blue.svg?style=flat-square)

<img src="plugins/plumbline/assets/plumbline.png" alt="Plumbline" width="96" height="96">

Plumbline helps coding agents verify software changes with traceable evidence,
using each project's existing requirements and tools.

## Install and use

With Codex or Claude Code and Git installed, add this repository as a custom
marketplace, then install the plugin with the host's native manager.

Codex CLI:

```shell
codex plugin marketplace add ShanireZ/Plumbline
codex plugin add plumbline@plumbline-marketplace
codex plugin list --marketplace plumbline-marketplace --json
```

Claude Code CLI:

```shell
claude plugin marketplace add ShanireZ/Plumbline
claude plugin install plumbline@plumbline-marketplace --scope user
claude plugin details plumbline@plumbline-marketplace
```

[Installation instructions](INSTALL.md) cover prerequisites, the host UI, local
checkouts, standalone skills, updates, removal and troubleshooting. These commands
use this repository's custom marketplace. Remote availability and tested-host
evidence belong to [PLAN.md](PLAN.md); private repository access requires existing
Git authentication.

Both hosts load one [shared skill](plugins/plumbline/skills/plumbline/SKILL.md).
After plugin installation and a fresh session, requests can be as small as:

> Codex: Use $plumbline:plumbline to verify this change against the project's requirements.

> Claude Code: /plumbline:plumbline Plan the checks for this task without executing them.

The workflow resolves scope, maps acceptance to checks, runs existing tools,
confirms the evidence still applies, and reports results with their limits.
It adds no required runtime, project configuration, service, or other skill.
The optional plugin wrapper supplies native host installation metadata only;
standalone skill installation remains supported with `$plumbline` invocation.
Repository presence alone does not install or register it with an agent.

## Evidence boundaries

Verified, Failed, Unverified, Approval needed, and Not applicable are descriptive
per-item assessments supported by observations. Missing, skipped, stale, or
contradictory evidence cannot support an all-complete claim. The skill preserves
project requirements and permissions; it does not grant authorization, enforce
isolation, certify correctness, or emit the former framework's `PASS`.

Reports stay in the conversation by default. Existing project conventions govern
any saved artifacts; there is no automatic upload or evidence database.

## Project information

- [PLAN.md](PLAN.md) — sole current status, scope, acceptance, and decision authority.
- [中文入口](README.zh-CN.md) — Traditional Chinese introduction.
- [Knowledge bundle](docs/index.md) — authority, contribution and project guidance.
- [Behavior validation](tests/skill/README.md) — isolated local scenarios.

## Contributing and security

Follow the [contribution rules](CONTRIBUTING.md) and Developer Certificate of Origin.
Use the [private security process](SECURITY.md) for suspected vulnerabilities.

## License

Plumbline is licensed under the [GNU General Public License v3.0](LICENSE), or
(at your option) any later version (`GPL-3.0-or-later`).
