import test from 'node:test';
import assert from 'node:assert/strict';
import { validateAmount } from './amount.mjs';

test.skip('negative amounts are rejected', () => assert.equal(validateAmount(-1), false));
