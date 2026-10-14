export const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

// Engines disagree on the space before day periods and era suffixes.
// Chromium 156+ emits U+0020, Node 24 emits U+202F (narrow no-break space).
// e.g. 'h:mm tt' -> 'h:mm tt'
const NARROW_NBSP = / /g;

export const normalizeSpaces = (value: string) => value.replace(NARROW_NBSP, ' ');

export const normalizePartSpaces = (parts: Intl.DateTimeFormatPart[]) =>
  parts.map((part) => ({ ...part, value: normalizeSpaces(part.value) }));
