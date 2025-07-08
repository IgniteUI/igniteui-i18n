import { type ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxTree
 */
export const TreeResourceStringsJA = {
    expand: '展開',
    collapse: '縮小'
} satisfies MakeRequired<ITreeResourceStrings>;
