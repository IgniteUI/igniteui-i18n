import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxTree
 */
export const TreeResourceStringsIT: ITreeResourceStrings = {
    expand: 'Espandi',
    collapse: 'Comprimi'
} satisfies Required<ITreeResourceStrings>;
