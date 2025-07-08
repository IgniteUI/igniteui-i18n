import { type ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Romanian resource strings for IgxTree
 */
export const TreeResourceStringsRO = {
    expand: 'Extindere',
    collapse: 'Restrângere'
} satisfies MakeRequired<ITreeResourceStrings>;
