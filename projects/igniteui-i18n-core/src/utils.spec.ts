import { describe, expect, it, vi } from 'vitest';
import { GridResourceStringsEN } from './i18n/EN/grid-resources.js';
import { generateLocaleKey, toCanonicalLocale } from './utils.js';

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

  it('toCanonicalLocale should not keep every tag it canonicalized', () => {
    // More distinct tags than the cache may hold, e.g. 'en-x-0', 'en-x-1'.
    const distinctTags = 1000;
    toCanonicalLocale('en-x-first');
    for (let i = 0; i < distinctTags; i++) {
      toCanonicalLocale(`en-x-${i}`);
    }

    const canonicalize = vi.spyOn(Intl, 'getCanonicalLocales');
    expect(toCanonicalLocale('en-x-first')).toEqual('en-x-first');
    expect(canonicalize).toHaveBeenCalledOnce();
    canonicalize.mockRestore();
  });
});
