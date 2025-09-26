import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Danish resource strings for IgxList
 */
export const ListResourceStringsDA: IListResourceStrings = {
    list_no_items: 'Der er ingen elementer på listen.',
    list_loading: 'Indlæser data fra serveren...'
} satisfies Required<IListResourceStrings>;
