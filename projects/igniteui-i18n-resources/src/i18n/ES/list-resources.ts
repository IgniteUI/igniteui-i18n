import { type IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxList
 */
export const ListResourceStringsES: IListResourceStrings = {
    list_no_items: 'No hay elementos en la lista.',
    list_loading: 'Cargando datos desde el servidor…'
} satisfies MakeRequired<IListResourceStrings>;
