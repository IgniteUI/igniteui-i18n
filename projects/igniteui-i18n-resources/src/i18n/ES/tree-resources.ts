import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxTree
 */
export const TreeResourceStringsES: ITreeResourceStrings = {
  expand: 'Expandir',
  collapse: 'Contraer',
} satisfies Required<ITreeResourceStrings>;
