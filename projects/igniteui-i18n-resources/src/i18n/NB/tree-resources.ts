import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxTree
 */
export const TreeResourceStringsNB: ITreeResourceStrings = {
  expand: 'Vis',
  collapse: 'Skjul',
} satisfies Required<ITreeResourceStrings>;
