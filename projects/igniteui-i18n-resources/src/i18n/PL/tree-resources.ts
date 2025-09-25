import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxTree
 */
export const TreeResourceStringsPL: ITreeResourceStrings = {
    expand: 'Rozwiń',
    collapse: 'Zwiń'
} satisfies MakeRequired<ITreeResourceStrings>;
