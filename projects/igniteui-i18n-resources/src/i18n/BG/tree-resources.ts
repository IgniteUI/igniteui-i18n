import { type ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxTree
 */
export const TreeResourceStringsBG: ITreeResourceStrings = {
    expand: 'Разгъване',
    collapse: 'Свиване',
} satisfies MakeRequired<ITreeResourceStrings>;
