import { type ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxTree
 */
export const TreeResourceStringsNL = {
    expand: 'Uitvouwen',
    collapse: 'Samenvouwen'
} satisfies MakeRequired<ITreeResourceStrings>;
