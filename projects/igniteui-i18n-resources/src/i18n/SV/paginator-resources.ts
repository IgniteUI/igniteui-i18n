import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Swedish resource strings for IgxPaginator
 */
export const PaginatorResourceStringsSV: IPaginatorResourceStrings = {
    paginator_label: 'Objekt per sida',
    paginator_pager_text: 'av',
    paginator_first_page_button_text: 'Gå till första sidan',
    paginator_previous_page_button_text: 'Föregående sida',
    paginator_last_page_button_text: 'Gå till sista sidan',
    paginator_next_page_button_text: 'Nästa sida'
} satisfies MakeRequired<IPaginatorResourceStrings>;
