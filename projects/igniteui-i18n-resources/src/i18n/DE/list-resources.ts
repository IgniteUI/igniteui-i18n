import { type IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxList
 */
export const ListResourceStringsDE: IListResourceStrings = {
    list_no_items: 'Es gibt keine Einträge in der Liste.',
    list_loading: 'Lade Daten vom Server...'
} satisfies MakeRequired<IListResourceStrings>;
