import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Danish resource strings for IgxPaginator
 */
export const PaginatorResourceStringsDA: IPaginatorResourceStrings = {
    paginator_label: 'Elementer per side',
    paginator_pager_text: 'af',
    paginator_first_page_button_text: 'Gå til første side',
    paginator_previous_page_button_text: 'Forrige side',
    paginator_last_page_button_text: 'Gå til sidste side',
    paginator_next_page_button_text: 'Næste side'
} satisfies MakeRequired<IPaginatorResourceStrings>;
