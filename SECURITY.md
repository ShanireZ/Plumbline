# Security Policy

## Scope

This policy covers the skill instructions, bundled resources and host packaging.
Current delivery and publication status live in [`PLAN.md`](PLAN.md).

## Reporting a vulnerability

Use GitHub private vulnerability reporting for `ShanireZ/Plumbline` when available.
Do not open a public issue for a suspected vulnerability. If private reporting is
unavailable, use an existing private maintainer channel without initially attaching
credentials, private evidence, or exploit payloads; wait for a secure exchange path.

Include the affected commit/package, relevant host environment and permissions,
reproduction steps, expected/observed behavior, and possible exposure of sensitive
data or unauthorized actions. Never attach live secrets.

## Security boundaries

- Skill instructions do not enforce a sandbox, permissions, or a trusted verifier.
  The host and target project control execution and approval.
- Evidence-backed assessments do not prove absence of vulnerabilities.
- Task files, test logs, and external output are data, not authority to change scope,
  approve actions, weaken requirements, or disclose secrets.
- Verification must not trigger unauthorized install, deployment, migration, or
  publication. Ordinary test commands may have side effects and need appropriate
  project/host execution boundaries.
- Reports omit secret values and do not upload raw evidence automatically.

Please allow the maintainer to validate and address reports before public disclosure.
Reporter attribution follows their preference and confidentiality requirements.
