import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Turkish resource strings for IgxPaginator
 */
export const PaginatorResourceStringsTR: IPaginatorResourceStrings = {
  paginator_label: 'Sayfa başına öğeler',
  paginator_pager_text: '/',
  paginator_first_page_button_text: 'İlk sayfaya git',
  paginator_previous_page_button_text: 'Önceki sayfa',
  paginator_last_page_button_text: 'Son sayfaya git',
  paginator_next_page_button_text: 'Sonraki Sayfa',
} satisfies Required<IPaginatorResourceStrings>;
