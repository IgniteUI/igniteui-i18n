import { type IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Traditional Chinese (zh-Hant) resource strings for IgxPaginator
 */
export const PaginatorResourceStringsZHHANT: IPaginatorResourceStrings = {
    paginator_label: '每頁項目',
    paginator_pager_text: '/',
    paginator_first_page_button_text: '前往首頁',
    paginator_previous_page_button_text: '上一頁',
    paginator_last_page_button_text: '轉到最後一頁',
    paginator_next_page_button_text: '下一頁'
} satisfies MakeRequired<IPaginatorResourceStrings>;
