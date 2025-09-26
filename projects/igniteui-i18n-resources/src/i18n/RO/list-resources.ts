import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Romanian resource strings for IgxList
 */
export const ListResourceStringsRO: IListResourceStrings = {
    list_no_items: 'Nu există articole în listă.',
    list_loading: 'Se încarcă datele de pe server...'
} satisfies Required<IListResourceStrings>;
