import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Korean resource strings for IgxTree
 */
export const TreeResourceStringsKO: ITreeResourceStrings = {
    expand: '확장',
    collapse: '축소'
} satisfies MakeRequired<ITreeResourceStrings>;
