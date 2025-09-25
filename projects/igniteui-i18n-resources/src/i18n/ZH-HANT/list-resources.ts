import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Traditional Chinese (zh-Hant) resource strings for IgxList
 */
export const ListResourceStringsZHHANT: IListResourceStrings = {
    list_no_items: '清單中沒有任何項目。',
    list_loading: '正在從伺服器載入資料...'
} satisfies MakeRequired<IListResourceStrings>;
