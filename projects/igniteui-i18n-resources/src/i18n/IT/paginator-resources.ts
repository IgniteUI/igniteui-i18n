import { type IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxPaginator
 */
export const PaginatorResourceStringsIT: IPaginatorResourceStrings = {
    paginator_label: 'Elementi per pagina',
    paginator_pager_text: 'di',
    paginator_first_page_button_text: 'Vai alla prima pagina',
    paginator_previous_page_button_text: 'Pagina precedente',
    paginator_last_page_button_text: "Vai all'ultima pagina",
    paginator_next_page_button_text: 'Pagina successiva'
} satisfies MakeRequired<IPaginatorResourceStrings>;
