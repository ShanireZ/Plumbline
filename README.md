[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文（TW）](README.zh-TW.md) | [日本語](README.ja.md)

# Plumbline

[![License: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blue.svg?style=flat-square)](LICENSE)
![Type: Agent Skill](https://img.shields.io/badge/type-Agent%20Skill-blue.svg?style=flat-square)

<img src="plugins/plumbline/assets/plumbline.png" alt="Plumbline" width="96" height="96">

Evidence-based software verification for Codex and Claude Code.

Plumbline uses your project's requirements and tools to choose checks, verify
changes, and report what the evidence supports and what remains unverified.
No extra runtime or project configuration is required.

## Install

With Git and your host's native plugin manager available:

**Codex**

```shell
codex plugin marketplace add ShanireZ/Plumbline
codex plugin add plumbline@plumbline-marketplace
```

**Claude Code**

```shell
claude plugin marketplace add ShanireZ/Plumbline
claude plugin install plumbline@plumbline-marketplace --scope user
```

See [installation instructions](INSTALL.md) for prerequisites, access, updates,
removal, and standalone skill installation.

## Use

Start a fresh session in the project you want to check:

> Codex: Use $plumbline:plumbline to verify this change against the project's requirements.

> Claude Code: /plumbline:plumbline Verify this change against the project's requirements.

For a plan only, ask it to plan verification without running checks.
Reports stay in the conversation by default. Project permissions still apply;
missing, skipped, or stale evidence leaves the relevant result unverified.

## More

- [Product scope and status](PLAN.md) · [Documentation](docs/index.md)
- [Contributing and DCO](CONTRIBUTING.md) · [Security](SECURITY.md)
- [GNU GPL v3.0 or later](LICENSE) (`GPL-3.0-or-later`)
