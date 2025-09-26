import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Czech resource strings for IgxTree
 */
export const TreeResourceStringsCS: ITreeResourceStrings = {
    expand: 'Rozbalit',
    collapse: 'Sbalit'
} satisfies Required<ITreeResourceStrings>;
