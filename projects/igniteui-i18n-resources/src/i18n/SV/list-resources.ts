import { type IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Swedish resource strings for IgxList
 */
export const ListResourceStringsSV = {
    list_no_items: 'Det finns inga objekt i listan.',
    list_loading: 'Laddar data från servern...'
} satisfies MakeRequired<IListResourceStrings>;
