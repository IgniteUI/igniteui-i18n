import type { ITreeResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Simplified Chinese (zh-Hans) resource strings for IgxTree
 */
export const TreeResourceStringsZHHANS: ITreeResourceStrings = {
    expand: '展开',
    collapse: '折叠'
} satisfies MakeRequired<ITreeResourceStrings>;
