import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Czech resource strings for IgxList
 */
export const ListResourceStringsCS: IListResourceStrings = {
    list_no_items: 'V seznamu nejsou žádné položky.',
    list_loading: 'Načítání dat ze serveru...'
} satisfies MakeRequired<IListResourceStrings>;
