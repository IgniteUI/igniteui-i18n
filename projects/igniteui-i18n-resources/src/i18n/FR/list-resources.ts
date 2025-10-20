import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxList
 */
export const ListResourceStringsFR: IListResourceStrings = {
  list_no_items: "Il n'y a aucun élément dans la liste.",
  list_loading: 'Chargement des données du serveur...',
} satisfies Required<IListResourceStrings>;
