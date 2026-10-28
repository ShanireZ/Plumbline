# AGENTS.md — Plumbline

In a containing workspace, also read its `../AGENTS.md` when present.

## Identity and authority

Plumbline is a portable Agent Skill for evidence-based verification of software
changes using each target project's existing authorities and tools.

This is an independent Git repository on `main`. GitHub is authoritative; CNB is
its separately authorized mirror. Product scope, acceptance and approved product
decisions live in [`PLAN.md`](PLAN.md).

Read first:

1. [`PLAN.md`](PLAN.md) — public product contract and decisions.
2. [`docs/governance/source-of-truth.md`](docs/governance/source-of-truth.md) — authority boundaries.
3. [`plugins/plumbline/skills/plumbline/SKILL.md`](plugins/plumbline/skills/plumbline/SKILL.md) — distributable instructions.
4. [`tests/skill/README.md`](tests/skill/README.md) — local behavior validation.

## Working boundaries

- Implement the approved skill scope. It has no mandatory runtime, scripts,
  project configuration, plugin dependencies, policy engine, or automatic upload.
- Preserve target-project requirements and host permissions. Skill conclusions
  are evidence-backed assessments, never a Plumbline `PASS`, security sandbox,
  signed attestation, or unbypassable completion decision.
- Keep the package self-contained. Load references selectively and do not make
  users read this repository's governance or historical framework specification.
- Wrap the shared skill in native Codex/Claude Code metadata only. Installation
  instructions live in [`INSTALL.md`](INSTALL.md); keep one skill source and
  synchronize host metadata. Validation profiles stay outside real user settings.
- Keep the approved icon, license and DCO requirement for every reachable commit.
- This is a non-web package; there is no browser build or hosted-service gate.
- Do not silently change an approved decision. Record owner-approved scope changes
  in `PLAN.md`; README and documentation indexes remain navigation.
- Local commit, push, PR, mirror sync, release, publication, and installation each
  require the owner's applicable explicit authorization. Historical authorization
  does not carry forward.
- Write public documentation and host UI text in English. Keep internal operating
  records, authorization receipts, recovery material and credentials outside Git;
  no public document should require a maintainer's local files.

## Verification

- Run the available skill creator's `scripts/quick_validate.py plugins/plumbline/skills/plumbline`
  with Python; this checks packaging, not agent behavior.
- Run `node --test tests/distribution/package.test.mjs` for distribution changes.
- Run `bash tests/governance/check-dco.sh` for contribution-history checks and its
  unsigned, wrong-email and shallow-history negative controls.
- Exercise the isolated scenarios in [`tests/skill/README.md`](tests/skill/README.md)
  for behavior changes; keep generated run evidence outside the package.
- Use Codex for execution testing and static review for Claude metadata.
- Check local Markdown links, source targets and anchors after documentation edits.
- Run `git diff --check` and confirm unrelated work and the active skill bytes are
  preserved. There is no Rust build or Docker runtime in the active package.
- Report synthetic behavior, real-project use, installation and discovery evidence
  separately, with the commands, inputs, outcomes and limitations actually observed.

## Navigation

- [Agent conventions](docs/agents/index.md) — project context, Issues and triage.
