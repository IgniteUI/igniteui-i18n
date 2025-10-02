import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxList
 */
export const ListResourceStringsHU: IListResourceStrings = {
    list_no_items: 'Nincsenek elemek a listában.',
    list_loading: 'Adatok betöltése a szerverről...'
} satisfies Required<IListResourceStrings>;
