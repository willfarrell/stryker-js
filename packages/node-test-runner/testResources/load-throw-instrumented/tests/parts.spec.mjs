import test from 'node:test';
import assert from 'node:assert/strict';
import { parts } from '../src/parts.mjs';

const [first] = parts; // throws as the file loads once `parts` is mutated to null

test('the first part is a', () => {
  assert.equal(first, 'a');
});

test('there are two parts', () => {
  assert.equal(parts.length, 2);
});
