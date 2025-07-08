import { type IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxPaginator
 */
export const PaginatorResourceStringsES = {
    paginator_label: 'Elementos por página',
    paginator_pager_text: 'de',
    paginator_first_page_button_text: 'Ir a la primera página',
    paginator_previous_page_button_text: 'Página anterior',
    paginator_last_page_button_text: 'Ir a la última página',
    paginator_next_page_button_text: 'Página siguiente'
} satisfies MakeRequired<IPaginatorResourceStrings>;
