import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxList
 */
export const ListResourceStringsIT: IListResourceStrings = {
    list_no_items: "Non ci sono elementi nell'elenco.",
    list_loading: 'Caricamento dati dal server in corso...'
} satisfies Required<IListResourceStrings>;
