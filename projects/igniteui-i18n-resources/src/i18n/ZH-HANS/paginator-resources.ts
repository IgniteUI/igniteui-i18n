import { type IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Simplified Chinese (zh-Hans) resource strings for IgxPaginator
 */
export const PaginatorResourceStringsZHHANS = {
    paginator_label: '每页的项数',
    paginator_pager_text: '/',
    paginator_first_page_button_text: '转到第一页',
    paginator_previous_page_button_text: '上一页',
    paginator_last_page_button_text: '转到最后一页',
    paginator_next_page_button_text: '下一页'
} satisfies MakeRequired<IPaginatorResourceStrings>;
