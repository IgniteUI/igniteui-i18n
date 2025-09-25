import { type IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Simplified Chinese (zh-Hans) resource strings for IgxList
 */
export const ListResourceStringsZHHANS: IListResourceStrings = {
    list_no_items: '列表中没有任何项。',
    list_loading: '正在从服务器加载数据...'
} satisfies MakeRequired<IListResourceStrings>;
