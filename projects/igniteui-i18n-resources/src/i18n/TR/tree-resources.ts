import { type ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Turkish resource strings for IgxTree
 */
export const TreeResourceStringsTR = {
    expand: 'Genişlet',
    collapse: 'Daralt'
} satisfies MakeRequired<ITreeResourceStrings>;
