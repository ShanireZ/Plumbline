# Contributing to Plumbline

Plumbline's current milestone, implementation status, and execution boundary are maintained only in [`PLAN.md`](PLAN.md). Contributions must preserve the authority and trust boundaries defined there.

## Before contributing

- Read [`AGENTS.md`](AGENTS.md), [`PLAN.md`](PLAN.md), and the relevant skill instructions and behavior scenarios.
- Use GitHub Issues for public features, defects, and design changes after the repository is published.
- Use the private process in [`SECURITY.md`](SECURITY.md) for suspected vulnerabilities.
- Do not implement an unapproved product decision or silently reopen the current D081 contract or retained decisions.

## Developer Certificate of Origin

Every commit must certify the [Developer Certificate of Origin 1.1](https://developercertificate.org/) using a `Signed-off-by` trailer:

```text
Signed-off-by: Your Name <your.email@example.com>
```

Use `git commit -s` to add the trailer. By signing off, you certify that you have the right to submit the contribution under this project's license.

The sign-off email must match the commit author email under ASCII case-insensitive comparison; the display names may differ. `Co-Authored-By` does not create an additional sign-off requirement.

The fresh skill-only history has no retrospective exceptions or certificate route.
Every reachable commit must carry its own author-email-matching sign-off.

Run `bash tests/governance/check-dco.sh` from a complete, non-shallow checkout. The
no-argument check validates every commit reachable from `HEAD` and proves its own
missing-sign-off, wrong-email, and shallow-history failure paths.

## Change expectations

- Keep changes focused and explain the policy or acceptance criterion they satisfy.
- Validate packaging and exercise realistic isolated scenarios for skill behavior changes; see [`tests/skill/README.md`](tests/skill/README.md).
- A new or changed gate must include positive and negative controls proving that it can detect the intended failure.
- Preserve target-project requirements and authorization boundaries. Do not import retired framework thresholds or policies into the skill.
- Update the smallest authoritative document. Do not duplicate conclusions into navigation documents.
- Never include credentials, private evidence, real secret values, or unredacted sensitive logs.

## Review and publication

The owner controls repository visibility, commits, pushes, mirror synchronization
and releases. Each action requires the applicable explicit authorization. Delivery
scope and any conditional visibility authorization are recorded in `PLAN.md`.

## License

Contributions are accepted under `GPL-3.0-or-later`, matching the repository license.
