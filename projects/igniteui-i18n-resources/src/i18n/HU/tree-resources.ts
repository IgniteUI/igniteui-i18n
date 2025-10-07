import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxTree
 */
export const TreeResourceStringsHU: ITreeResourceStrings = {
  expand: 'Kibontás',
  collapse: 'Összecsukás',
} satisfies Required<ITreeResourceStrings>;
