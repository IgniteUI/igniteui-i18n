import { type ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Czech resource strings for IgxTree
 */
export const TreeResourceStringsCS = {
    expand: 'Rozbalit',
    collapse: 'Sbalit'
} satisfies MakeRequired<ITreeResourceStrings>;
