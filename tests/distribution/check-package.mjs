// Developer-only distribution gate. No code here is shipped in the plugin.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, realpathSync } from 'node:fs';
import { dirname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function checkPackage(root) {
  const plugin = resolve(root, 'plugins/plumbline');
  const skill = resolve(plugin, 'skills/plumbline');
  const json = (path) => JSON.parse(readFileSync(resolve(root, path), 'utf8'));
  const contained = (base, path) => {
    const rel = relative(realpathSync(base), realpathSync(path));
    assert(rel && !isAbsolute(rel) && rel !== '..' && !rel.startsWith('../') && !rel.startsWith('..\\'), `Path escapes package: ${path}`);
  };
  const files = (dir, prefix = '') => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    assert(!entry.isSymbolicLink(), `Symlink in payload: ${entry.name}`);
    const path = resolve(dir, entry.name);
    const name = prefix + entry.name;
    return entry.isDirectory() ? files(path, name + '/') : [name];
  });
  assert.deepEqual(files(plugin).sort(), [
    '.claude-plugin/plugin.json', 'LICENSE', 'NOTICE', 'README.md', 'plugin.json', 'assets/plumbline.png',
    'skills/plumbline/LICENSE.txt', 'skills/plumbline/NOTICE.txt', 'skills/plumbline/SKILL.md',
    'skills/plumbline/agents/openai.yaml', 'skills/plumbline/assets/report-template.md',
    'skills/plumbline/references/check-selection.md', 'skills/plumbline/references/evidence-boundaries.md',
  ].sort(), 'Unexpected or missing plugin payload');

  const codex = json('.agents/plugins/marketplace.json');
  const claude = json('.claude-plugin/marketplace.json');
  for (const catalog of [codex, claude]) {
    assert.equal(catalog.name, 'plumbline-marketplace');
    assert.equal(catalog.plugins.length, 1);
    assert.equal(catalog.plugins[0].name, 'plumbline');
    const source = catalog === codex ? catalog.plugins[0].source.path : catalog.plugins[0].source;
    assert.equal(source, './plugins/plumbline', 'Wrong catalog source');
    contained(root, resolve(root, source));
  }
  assert.equal(codex.plugins[0].source.source, 'local');
  assert.deepEqual(codex.plugins[0].policy, { installation: 'AVAILABLE', authentication: 'ON_INSTALL' });
  assert.equal(claude.owner.name, 'ShanireZ');

  const portable = json('plugins/plumbline/plugin.json');
  const native = json('plugins/plumbline/.claude-plugin/plugin.json');
  assert.equal(portable.$schema, 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json');
  assert.match(portable.version, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/);
  assert.equal(portable.name, 'plumbline');
  assert.equal(portable.license, 'GPL-3.0-only');
  for (const key of ['name', 'version', 'description', 'author', 'license']) {
    assert.deepEqual(portable[key], native[key], `Host metadata differs: ${key}`);
  }
  assert.deepEqual(Object.keys(native).sort(), ['name', 'version', 'description', 'author', 'license'].sort());
  assert.deepEqual(Object.keys(portable).sort(), ['$schema', 'name', 'version', 'description', 'author', 'license', 'extensions'].sort());
  const ui = portable.extensions['com.openai'].interface;
  assert.equal(ui.displayName, 'Plumbline');
  assert(ui.shortDescription.length > 0 && ui.shortDescription.length <= 30);
  assert.equal(ui.category, codex.plugins[0].category);
  assert(ui.defaultPrompt.includes('$plumbline:plumbline'));
  for (const key of ['logo', 'composerIcon']) {
    assert.equal(ui[key], './assets/plumbline.png', `Wrong branding asset reference: ${key}`);
    contained(plugin, resolve(plugin, ui[key]));
  }
  const icon = readFileSync(resolve(plugin, ui.logo));
  assert(icon.length >= 33 && icon.length <= 5 * 1024 * 1024, 'Invalid icon file size');
  assert(icon.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), 'Invalid PNG signature');
  assert.equal(icon.toString('ascii', 12, 16), 'IHDR', 'Missing PNG image header');
  const width = icon.readUInt32BE(16);
  const height = icon.readUInt32BE(20);
  assert(width === height && width >= 256 && width <= 4096, 'Icon must be square and 256-4096 pixels');

  const license = readFileSync(resolve(root, 'LICENSE'));
  // Providers classify the standard text; keep project-specific terms in NOTICE.
  assert.equal(createHash('sha256').update(license).digest('hex'),
    '3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986', 'Standard GPL text differs');
  for (const path of [resolve(plugin, 'LICENSE'), resolve(skill, 'LICENSE.txt')]) {
    assert(readFileSync(path).equals(license), `License differs: ${path}`);
  }
  const notice = readFileSync(resolve(root, 'NOTICE'));
  const grant = Buffer.from('Plumbline\nCopyright (C) 2026 ShanireZ\nSPDX-License-Identifier: GPL-3.0-only\n\nPlumbline is licensed under the GNU General Public License, version 3 only.\n\n');
  assert(notice.subarray(0, grant.length).equals(grant), 'Project license grant must be GPL-3.0-only');
  for (const path of [resolve(plugin, 'NOTICE'), resolve(skill, 'NOTICE.txt')]) {
    assert(readFileSync(path).equals(notice), `Project license notice differs: ${path}`);
  }
  const instructions = readFileSync(resolve(skill, 'SKILL.md'), 'utf8');
  assert.match(instructions, /^---\r?\nname: plumbline\r?\n/);
  assert.match(instructions, /\r?\nlicense: GPL-3\.0-only\r?\n/);
  assert(instructions.split('\n').length <= 251);
  for (const file of files(plugin).filter((path) => path.endsWith('.md'))) {
    const path = resolve(plugin, file);
    for (const match of readFileSync(path, 'utf8').matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0];
      if (!target || /^[a-z]+:/i.test(target)) continue;
      contained(plugin, resolve(dirname(path), target));
    }
  }
  return { plugin: portable.name, version: portable.version, files: files(plugin).length };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const root = resolve(process.argv[2] ?? fileURLToPath(new URL('../..', import.meta.url)));
    console.log(JSON.stringify(checkPackage(root)));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
