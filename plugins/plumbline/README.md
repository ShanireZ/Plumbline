# Plumbline

Plumbline helps coding agents verify a concrete software change against the target
project's existing requirements. It selects proportionate checks, records observed
evidence, checks whether that evidence still applies, and reports unresolved gaps.
It requires no additional runtime, project configuration, MCP server or hook.

After installing the plugin, open a fresh host session in the target project:

- Codex: `Use $plumbline:plumbline to verify this change.`
- Claude Code: `/plumbline:plumbline Verify this change.`

The workflow preserves project permissions. A verification request does not grant
permission to repair, install, deploy or publish. Planning-only requests do not
execute checks. See [the skill](skills/plumbline/SKILL.md) for the portable workflow.

The plugin is licensed under [GNU GPL version 3 only](LICENSE) (`GPL-3.0-only`). The nested skill carries
the same license text for standalone installation.
