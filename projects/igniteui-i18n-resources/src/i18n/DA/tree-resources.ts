import { type ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Danish resource strings for IgxTree
 */
export const TreeResourceStringsDA = {
    expand: 'Udvid',
    collapse: 'Skjul'
} satisfies MakeRequired<ITreeResourceStrings>;
