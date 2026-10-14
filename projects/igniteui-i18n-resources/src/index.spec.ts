/// <reference types="vite/client" />
import { describe, expect, it } from 'vitest';
// biome-ignore lint/correctness/useImportExtensions: JSON module, not a .js file.
import pkg from '../package.json' with { type: 'json' };
import * as resources from './index.js';

// Sources of the built entry points, e.g. './i18n/BG/index.ts'.
const SOURCES = Object.keys(import.meta.glob('./**/index.ts'));

/** Each language's `<prefix><LANG>` export, e.g. ['BG', CarouselResourceStringsBG]. */
function byLanguage(prefix: string) {
  return Object.entries(resources)
    .filter(([name]) => name.startsWith(prefix) && name !== `${prefix}EN`)
    .map(([name, strings]) => [name.slice(prefix.length), strings as Record<string, string>] as const);
}

describe('igniteui-i18n-resources', () => {
  it('exports only entry points the build emits', () => {
    for (const [subpath, target] of Object.entries(pkg.exports)) {
      // './i18n/BG/index.d.ts' and './i18n/BG/index.js' are built from './i18n/BG/index.ts'.
      expect.soft(SOURCES, subpath).toContain(target.types.replace(/\.d\.ts$/, '.ts'));
      expect.soft(SOURCES, subpath).toContain(target.default.replace(/\.js$/, '.ts'));
    }
  });

  it('translates every validation message', () => {
    for (const [lang, strings] of byLanguage('ValidationResourceStrings')) {
      for (const [key, en] of Object.entries(resources.ValidationResourceStringsEN)) {
        expect.soft(strings[key], `${lang} ${key}`).toBeDefined();
        expect.soft(strings[key], `${lang} ${key}`).not.toEqual(en);
      }
    }
  });

  it('names the slide alike in slide navigation', () => {
    for (const [lang, strings] of byLanguage('CarouselResourceStrings')) {
      // e.g. 'slide' in 'previous slide'
      const slide = strings.carousel_slide.toLowerCase();
      expect.soft(strings.carousel_previous_slide.toLowerCase(), lang).toContain(slide);
      expect.soft(strings.carousel_next_slide.toLowerCase(), lang).toContain(slide);
    }
  });
});
