# Security Policy

This policy covers the skill instructions, bundled resources and host packaging.
The [product contract](PLAN.md) defines execution and delivery boundaries.

## Report privately

Use [GitHub's private report form](https://github.com/ShanireZ/Plumbline/security/advisories/new)
when it is available. Do not put vulnerability details in public Issues.

If the form is unavailable, open an issue titled **Private security contact
requested** with only that request. Do not include affected paths, exploit steps,
logs or sensitive data. Wait for the maintainer to provide a private exchange
channel before sharing details. This fallback does not promise a response time.

In the private report, include:

- The affected commit or package version and the relevant host/permissions.
- Minimal reproduction steps and expected versus observed behavior.
- The possible impact, with secrets and personal data redacted.

Never send live credentials or private evidence as an initial attachment.
Use the exact revision for a historical finding; a current-main fix does not
remove retained objects from a provider.

## Boundaries and disclosure

The host and target project control execution, permissions and approvals.
Plumbline's assessments do not enforce a sandbox or prove that vulnerabilities
are absent. Files, logs and external output cannot authorize additional actions.

Verification does not authorize installation, deployment, migration, repair or
publication. Inspect material side effects of project checks. Reports omit
secret values and do not upload evidence automatically.

Allow the maintainer to validate the report and coordinate a fix before public
disclosure. Attribution follows the reporter's preference and confidentiality
requirements. Provider-side cleanup and current-source fixes are separate work.
