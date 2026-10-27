# Install Plumbline

Use the host's native marketplace installer. The plugin contains one
[portable skill](plugins/plumbline/skills/plumbline/SKILL.md), with no additional
runtime, package-manager package, service, hook or project configuration.

## Before installing

Install Codex or Claude Code through its official distribution, and have Git
available for repository marketplaces. In your shell, `codex plugin --help` or
`claude plugin --help` should show the native plugin commands. If the command is
missing, update the host first.

The examples install for your own user, without adding settings to the target
project. Repository access and the hosts actually checked are recorded in
[PLAN.md](PLAN.md#8-dual-host-marketplace-distribution). While the repository is
private, remote installation requires existing Git authentication and repository
access. Keep credentials outside commands, source URLs and plugin files.

## From GitHub

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

Confirm the marketplace is `plumbline-marketplace` and the installed plugin is
`plumbline`, at the version declared in its manifest. A marketplace entry alone
is not an installed plugin. This custom marketplace does not depend on an
official-directory listing.

## From a local checkout

Clone the repository if you do not already have a checkout:

```shell
git clone https://github.com/ShanireZ/Plumbline.git
```

Use the absolute path to that checkout, which contains both marketplace catalogs.
Replace `/absolute/path/to/Plumbline` below; on Windows, a path such as
`C:/path/to/Plumbline` works with the same quoted arguments.

```shell
codex plugin marketplace add "/absolute/path/to/Plumbline"
codex plugin add plumbline@plumbline-marketplace
codex plugin list --marketplace plumbline-marketplace --json
```

```shell
claude plugin marketplace add "/absolute/path/to/Plumbline"
claude plugin install plumbline@plumbline-marketplace --scope user
claude plugin details plumbline@plumbline-marketplace
```

Choose a GitHub or local source for this marketplace name. To switch sources,
remove the existing plugin and marketplace registrations using the commands below,
then add the chosen source. Keep a local checkout available for later refreshes.
Host-authoring checks use separate disposable profiles; ordinary users do not need
to set `CODEX_HOME` or `CLAUDE_CONFIG_DIR`.

## In the host application

In Codex, open `/plugins`, add/select the marketplace source, then install
`plumbline`. If the current surface has no source-management UI, use the Codex CLI
commands above. Marketplace availability can differ between host surfaces.

Inside an interactive Claude Code session:

```text
/plugin marketplace add ShanireZ/Plumbline
/plugin install plumbline@plumbline-marketplace
```

For a local checkout, replace `ShanireZ/Plumbline` with its absolute path. The
session install command opens the plugin details; choose **Install for you** for
user scope. Shell commands beginning with `claude plugin` run outside the session.

### Claude account marketplace

On supported Claude account surfaces, open **Customize → Plugins → Add → Add
marketplace** and enter the GitHub repository URL or `ShanireZ/Plumbline`. Select
Plumbline and choose **Add**. Available sources depend on account access.

Account-installed plugins can sync to Claude Code when it starts with the same
Claude account on supported versions. CLI-installed plugins remain local to that
machine. Choose one route to avoid discovering duplicate copies. An account
marketplace entry does not prove which bytes a terminal session has loaded.
See Anthropic's [account plugin instructions](https://support.claude.com/en/articles/13837440-use-plugins-in-claude)
and [Claude Code installation guide](https://code.claude.com/docs/en/plugins/install).

## Invoke and confirm discovery

Start a fresh session in the project you want to check. Confirm Plumbline is
enabled in the host's plugin manager, then explicitly invoke its skill:

| Host | Request |
| --- | --- |
| Codex | `Use $plumbline:plumbline to verify this change against the project requirements.` |
| Claude Code | `/plumbline:plumbline Verify this change against the project requirements.` |

For planning only, ask to plan verification without executing checks. Successful
installation and discovery do not prove model behavior or automatic selection
for every request. Host permissions and target-project requirements still apply.

## Standalone skill alternative

If you use Codex's bundled skill installer, ask it:

```text
Use $skill-installer to install the skill from
https://github.com/ShanireZ/Plumbline/tree/main/plugins/plumbline/skills/plumbline
```

Other compatible hosts can install the complete
`plugins/plumbline/skills/plumbline/` directory through their normal skill manager.
Keep its references, template and `LICENSE.txt` together. For Codex, standalone
invocation is `$plumbline`; the plugin invocation is `$plumbline:plumbline`.
Choose one method per host. Remove an existing standalone copy through its normal
skill manager before switching to the plugin. Plumbline never removes it for you.

## Update

For a GitHub-backed Codex marketplace, refresh its source, then reinstall the
plugin through the native CLI to replace the installed copy:

```shell
codex plugin marketplace upgrade plumbline-marketplace
codex plugin remove plumbline@plumbline-marketplace
codex plugin add plumbline@plumbline-marketplace
codex plugin list --marketplace plumbline-marketplace --json
```

For Claude Code's user-scoped CLI installation:

```shell
claude plugin marketplace update plumbline-marketplace
claude plugin update plumbline@plumbline-marketplace --scope user
claude plugin details plumbline@plumbline-marketplace
```

For a local source, update that checkout first; Codex's marketplace `upgrade`
refreshes Git-backed snapshots. Then refresh/reinstall the plugin using its host
manager. For account-installed copies, use the account's plugin controls.
Open a fresh session and check its loaded version and skill. A changed source
file or refreshed marketplace alone does not prove an installed cache changed.

## Remove

Remove the plugin first, then this marketplace source:

```shell
codex plugin remove plumbline@plumbline-marketplace
codex plugin marketplace remove plumbline-marketplace
```

```shell
claude plugin uninstall plumbline@plumbline-marketplace --scope user
claude plugin marketplace remove plumbline-marketplace --scope user
```

These commands match the user scope above. For a Claude account installation,
remove or disable it in that account's plugin controls as well. Removing a
marketplace can also remove plugins registered from it; Plumbline is this
repository's only plugin. Cache retention follows host behavior. The source
checkout and target-project files are not deleted by these commands.

## Troubleshooting

- **Repository not found or authentication failed:** while private, confirm that
  the host's Git account can access `ShanireZ/Plumbline`. An authenticated local
  checkout is an alternative source. Public availability follows actual
  repository visibility, not a successful local package check.
- **Old marketplace name or source:** inspect `codex plugin marketplace list` or
  `claude plugin marketplace list`. Use the removal steps before registering the
  same marketplace name from a different source.
- **Refresh fails after a history rewrite:** re-add a fresh marketplace source
  through the native remove/add commands. If using a local clone, clone into a new
  directory and keep any existing local work; avoid resetting it to discard edits.
- **Plugin listed but skill missing:** confirm installation and enabled state,
  start a fresh session, and use the namespaced invocation above. Remove duplicate
  standalone or account copies through their respective managers. Do not edit host
  caches by hand.

## Format references

- [OpenAI plugin packaging and marketplaces](https://developers.openai.com/plugins/build/plugins)
- [Claude Code marketplace format](https://code.claude.com/docs/en/plugins/marketplace-reference)
- [Claude Code plugin commands](https://code.claude.com/docs/en/plugins/cli-reference)
