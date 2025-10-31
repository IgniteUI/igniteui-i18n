import { describe, expect, it } from 'vitest';
import { GridResourceStringsEN } from './i18n/EN/grid-resources.js';
import { generateLocaleKey } from './utils.js';

describe('util', () => {
  it('generateLocaleKey should produce same key for objects with same values, regardless or order of keys', () => {
    const optionsA = {
      currency: 'BGN',
      compactDisplay: 'long',
    } as Intl.NumberFormatOptions;
    const optionsB = {
      compactDisplay: 'long',
      currency: 'BGN',
    } as Intl.NumberFormatOptions;
    const keyA = generateLocaleKey('bg', optionsA);
    const keyB = generateLocaleKey('bg', optionsB);
    expect(keyA).equal(keyB);
  });

  it('grid extended resources should correctly be resolved', () => {
    expect(GridResourceStringsEN.grid_emptyGrid_message).toEqual('Grid has no data.');
    expect(GridResourceStringsEN.grid_min_length_validation_error).toEqual(
      'Entry should be at least {0} character(s) long'
    );
  });
});
