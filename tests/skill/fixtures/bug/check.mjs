import test from 'node:test';
import assert from 'node:assert/strict';
import { appendFileSync } from 'node:fs';

const before = process.argv.includes('--before');
const { pages } = await import(before ? './before/pagination.mjs' : './pagination.mjs');
appendFileSync('check-runs.txt', before ? 'before\n' : 'current\n');
test('empty input has no pages', () => assert.deepEqual(pages([], 2), []));
test('ordinary grouping retains all items', () => assert.deepEqual(pages([1, 2, 3], 2), [[1, 2], [3]]));
test('invalid size is rejected', () => assert.throws(() => pages([1], 0), RangeError));
