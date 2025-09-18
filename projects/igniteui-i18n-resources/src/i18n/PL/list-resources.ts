import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxList
 */
export const ListResourceStringsPL: IListResourceStrings = {
    list_no_items: 'Na liście nie ma żadnych elementów.',
    list_loading: 'Ładowanie danych z serwera...'
} satisfies MakeRequired<IListResourceStrings>;
