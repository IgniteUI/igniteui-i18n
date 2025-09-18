import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxPaginator
 */
export const PaginatorResourceStringsDE: IPaginatorResourceStrings = {
    paginator_label: 'Einträge pro Seite',
    paginator_pager_text: 'von',
    paginator_first_page_button_text: 'Gehe zur ersten Seite',
    paginator_previous_page_button_text: 'Vorherige Seite',
    paginator_last_page_button_text: 'Gehe zur letzten Seite',
    paginator_next_page_button_text: 'Nächste Seite'
} satisfies MakeRequired<IPaginatorResourceStrings>;
