// Run: node --test tests/distribution/package.test.mjs
// Native Codex evidence is separate: use the owner's authorized Desktop route.
// Fresh skills/list must return the enabled plumbline:plumbline from the intended
// cache with pluginId plumbline@plumbline-marketplace and verified payload bytes.
// Claude compatibility metadata is checked statically; do not invoke Claude CLI.
// These Node checks make no model calls and do not change user installations.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { cpSync, mkdtempSync, mkdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, isAbsolute, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const root = fileURLToPath(new URL('../..', import.meta.url));
const gate = fileURLToPath(new URL('./check-package.mjs', import.meta.url));
const run = (dir) => spawnSync(process.execPath, [gate, dir], { encoding: 'utf8', timeout: 15000 });

test('canonical catalogs and minimal payload pass the actual entry point', () => {
  const result = run(root);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), { plugin: 'plumbline', version: '0.1.4', files: 13 });
});

test('license files retain the unprefixed standard GPL text for provider detection', () => {
  for (const path of ['LICENSE', 'plugins/plumbline/LICENSE', 'plugins/plumbline/skills/plumbline/LICENSE.txt']) {
    assert.equal(createHash('sha256').update(readFileSync(join(root, path))).digest('hex'),
      '3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986', `${path}: keep the project grant outside the standard license text`);
  }
});

const editJson = (dir, path, edit) => {
  const file = join(dir, path);
  const value = JSON.parse(readFileSync(file, 'utf8'));
  edit(value);
  writeFileSync(file, JSON.stringify(value));
};
const controls = [
  ['unintended later-version grant', (dir) => {
    for (const path of ['plugins/plumbline/plugin.json', 'plugins/plumbline/.claude-plugin/plugin.json']) {
      editJson(dir, path, (v) => { v.license = 'GPL-3.0-or-later'; });
    }
  }, /GPL-3\.0-only/],
  ['wrong standalone skill license', (dir) => {
    const file = join(dir, 'plugins/plumbline/skills/plumbline/SKILL.md');
    writeFileSync(file, readFileSync(file, 'utf8').replace('license: GPL-3.0-only', 'license: GPL-3.0-or-later'));
  }, /GPL-3/],
  ['missing project license grant', (dir) => {
    for (const path of ['NOTICE', 'plugins/plumbline/NOTICE', 'plugins/plumbline/skills/plumbline/NOTICE.txt']) {
      writeFileSync(join(dir, path), '');
    }
  }, /Project license grant must be GPL-3\.0-only/],
  ['later-version project notice', (dir) => {
    for (const path of ['NOTICE', 'plugins/plumbline/NOTICE', 'plugins/plumbline/skills/plumbline/NOTICE.txt']) {
      const file = join(dir, path);
      writeFileSync(file, readFileSync(file, 'utf8').replaceAll('GPL-3.0-only', 'GPL-3.0-or-later'));
    }
  }, /Project license grant must be GPL-3\.0-only/],
  ['project grant prepended to every standard license', (dir) => {
    const grant = readFileSync(join(dir, 'NOTICE'), 'utf8');
    for (const path of ['LICENSE', 'plugins/plumbline/LICENSE', 'plugins/plumbline/skills/plumbline/LICENSE.txt']) {
      const file = join(dir, path);
      writeFileSync(file, grant + readFileSync(file, 'utf8'));
    }
  }, /Standard GPL text differs/],
  ['different packaged project notice', (dir) => writeFileSync(join(dir, 'plugins/plumbline/NOTICE'), 'wrong notice'), /Project license notice differs/],
  ['changed standard GPL text in every copy', (dir) => {
    for (const path of ['LICENSE', 'plugins/plumbline/LICENSE', 'plugins/plumbline/skills/plumbline/LICENSE.txt']) {
      const file = join(dir, path);
      writeFileSync(file, readFileSync(file, 'utf8').replace('Version 3, 29 June 2007', 'Version 2, 29 June 1991'));
    }
  }, /Standard GPL text differs/],
  ['version mismatch', (dir) => editJson(dir, 'plugins/plumbline/.claude-plugin/plugin.json', (v) => { v.version = '0.2.0'; }), /Host metadata differs: version/],
  ['catalog escape', (dir) => editJson(dir, '.agents/plugins/marketplace.json', (v) => { v.plugins[0].source.path = '../outside'; }), /Wrong catalog source/],
  ['missing standalone license', (dir) => rmSync(join(dir, 'plugins/plumbline/skills/plumbline/LICENSE.txt')), /Unexpected or missing plugin payload/],
  ['changed license', (dir) => writeFileSync(join(dir, 'plugins/plumbline/LICENSE'), 'not the license'), /License differs/],
  ['broken skill reference', (dir) => {
    const file = join(dir, 'plugins/plumbline/skills/plumbline/SKILL.md');
    writeFileSync(file, readFileSync(file, 'utf8').replace('references/check-selection.md', 'references/missing.md'));
  }, /ENOENT/],
  ['unexpected hook payload', (dir) => writeFileSync(join(dir, 'plugins/plumbline/hooks.json'), '{}'), /Unexpected or missing plugin payload/],
  ['missing icon', (dir) => rmSync(join(dir, 'plugins/plumbline/assets/plumbline.png')), /Unexpected or missing plugin payload/],
  ['escaping icon reference', (dir) => editJson(dir, 'plugins/plumbline/plugin.json', (v) => { v.extensions['com.openai'].interface.logo = '../outside.png'; }), /Wrong branding asset reference: logo/],
  ['damaged icon bytes', (dir) => {
    const file = join(dir, 'plugins/plumbline/assets/plumbline.png');
    const bytes = readFileSync(file);
    bytes[0] = 0;
    writeFileSync(file, bytes);
  }, /Invalid PNG signature/],
  ['nonsquare icon', (dir) => {
    const file = join(dir, 'plugins/plumbline/assets/plumbline.png');
    const bytes = readFileSync(file);
    bytes.writeUInt32BE(96, 20);
    writeFileSync(file, bytes);
  }, /Icon must be square/],
];
for (const [name, mutate, expected] of controls) {
  test(`rejects ${name} through the actual entry point in a disposable copy`, () => {
    const temporaryRoot = realpathSync(tmpdir());
    const dir = mkdtempSync(join(temporaryRoot, 'plumbline-distribution-'));
    try {
      for (const path of ['.agents/plugins', '.claude-plugin', 'plugins/plumbline', 'LICENSE', 'NOTICE']) {
        const dest = join(dir, path);
        mkdirSync(dirname(dest), { recursive: true });
        cpSync(join(root, path), dest, { recursive: true });
      }
      mutate(dir);
      const result = run(dir);
      assert.equal(result.status, 1, result.stdout + result.stderr);
      assert.match(result.stderr, expected);
    } finally {
      assert(isAbsolute(dir) && dirname(dir) === temporaryRoot && basename(dir).startsWith('plumbline-distribution-'));
      rmSync(dir, { recursive: true, force: true });
    }
  });
}
