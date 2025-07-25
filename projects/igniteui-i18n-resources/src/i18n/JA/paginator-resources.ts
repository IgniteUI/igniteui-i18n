import { type IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxPaginator
 */
export const PaginatorResourceStringsJA: IPaginatorResourceStrings = {
    paginator_label: 'ページごとの項目',
    paginator_pager_text: '/',
    paginator_first_page_button_text: '最初のページに移動',
    paginator_previous_page_button_text: '前のページ',
    paginator_last_page_button_text: '最後のページに移動',
    paginator_next_page_button_text: '次のページ'
} satisfies MakeRequired<IPaginatorResourceStrings>;
