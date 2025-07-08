import { type IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxList
 */
export const ListResourceStringsJA = {
    list_no_items: 'リストに項目がありません。',
    list_loading: 'サーバーからデータを読み込んでいます。'
} satisfies MakeRequired<IListResourceStrings>;
