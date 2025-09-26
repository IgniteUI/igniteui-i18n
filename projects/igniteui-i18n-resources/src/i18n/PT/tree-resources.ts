import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxTree
 */
export const TreeResourceStringsPT: ITreeResourceStrings = {
    expand: 'Expandir',
    collapse: 'Fechar'
} satisfies Required<ITreeResourceStrings>;
