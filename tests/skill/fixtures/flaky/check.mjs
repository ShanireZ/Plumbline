import assert from 'node:assert/strict';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const prior = existsSync('execution-count.txt') ? Number(readFileSync('execution-count.txt', 'utf8')) : 0;
const count = prior + 1;
writeFileSync('execution-count.txt', String(count));
const observed = count % 2 === 0 ? 'healthy' : 'timeout';
console.log(`Service observation ${count}: ${observed}`);
assert.equal(observed, 'healthy');
