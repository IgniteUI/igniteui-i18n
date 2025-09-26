import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxList
 */
export const ListResourceStringsPT: IListResourceStrings = {
    list_no_items: 'Não há itens na lista.',
    list_loading: 'A carregar dados do servidor...'
} satisfies Required<IListResourceStrings>;
