import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Turkish resource strings for IgxList
 */
export const ListResourceStringsTR: IListResourceStrings = {
    list_no_items: 'Listede hiç öğe yok.',
    list_loading: 'Sunucudan veri yükleniyor...'
} satisfies MakeRequired<IListResourceStrings>;
