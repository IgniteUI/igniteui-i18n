import { type ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxTree
 */
export const TreeResourceStringsFR: ITreeResourceStrings = {
    expand: 'Développer',
    collapse: 'Réduire'
} satisfies MakeRequired<ITreeResourceStrings>;
