import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Korean resource strings for IgxPaginator
 */
export const PaginatorResourceStringsKO: IPaginatorResourceStrings = {
    paginator_label: '페이지 당 항목',
    paginator_pager_text: '의',
    paginator_first_page_button_text: '첫 페이지로 이동',
    paginator_previous_page_button_text: '이전 페이지',
    paginator_last_page_button_text: '마지막 페이지로 이동',
    paginator_next_page_button_text: '다음 페이지'
} satisfies Required<IPaginatorResourceStrings>;
