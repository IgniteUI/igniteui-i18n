import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxPaginator
 */
export const PaginatorResourceStringsFR: IPaginatorResourceStrings = {
    paginator_label: 'Entrées par page',
    paginator_pager_text: 'de',
    paginator_first_page_button_text: 'Aller à la première page',
    paginator_previous_page_button_text: 'Page précédente',
    paginator_last_page_button_text: 'Aller à la dernière page',
    paginator_next_page_button_text: 'Page suivante'
} satisfies MakeRequired<IPaginatorResourceStrings>;
