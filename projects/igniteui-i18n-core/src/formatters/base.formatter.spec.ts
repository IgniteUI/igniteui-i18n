import { describe, expect, it } from 'vitest';
import { BaseFormatter } from './base.formatter.js';

describe('base formatter', () => {
  it('should not keep every Intl formatter it created', () => {
    // More distinct locales than the cache may hold, e.g. 'en-x-0', 'en-x-1'.
    const distinctLocales = 1000;
    const formatter = new BaseFormatter('en', Intl.NumberFormat);
    const first = formatter.getIntlFormatter('en');
    expect(formatter.getIntlFormatter('en')).toBe(first);

    for (let i = 0; i < distinctLocales; i++) {
      formatter.getIntlFormatter(`en-x-${i}`);
    }

    expect(formatter.getIntlFormatter('en')).not.toBe(first);
  });
});
