import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxList
 */
export const ListResourceStringsNB: IListResourceStrings = {
    list_no_items: 'Det er ingen elementer på listen.',
    list_loading: 'Laster inn data fra serveren...'
} satisfies MakeRequired<IListResourceStrings>;
