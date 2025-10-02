import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxPaginator
 */
export const PaginatorResourceStringsNB: IPaginatorResourceStrings = {
    paginator_label: 'Elementer per side',
    paginator_pager_text: 'av',
    paginator_first_page_button_text: 'Gå til første side',
    paginator_previous_page_button_text: 'Forrige side',
    paginator_last_page_button_text: 'Gå til siste side',
    paginator_next_page_button_text: 'Neste side'
} satisfies Required<IPaginatorResourceStrings>;
