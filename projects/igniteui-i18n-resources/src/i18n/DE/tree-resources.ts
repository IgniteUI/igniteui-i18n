import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxTree
 */
export const TreeResourceStringsDE: ITreeResourceStrings = {
    expand: 'Erweitern',
    collapse: 'Reduzieren'
} satisfies MakeRequired<ITreeResourceStrings>;
