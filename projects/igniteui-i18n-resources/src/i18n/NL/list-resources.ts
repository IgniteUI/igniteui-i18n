import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxList
 */
export const ListResourceStringsNL: IListResourceStrings = {
    list_no_items: 'Er zijn geen items in de lijst.',
    list_loading: 'Gegevens van de server laden...'
} satisfies MakeRequired<IListResourceStrings>;
