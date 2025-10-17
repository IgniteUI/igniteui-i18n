import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxPaginator
 */
export const PaginatorResourceStringsHU: IPaginatorResourceStrings = {
  paginator_label: 'Elemek száma oldalanként',
  paginator_pager_text: '/',
  paginator_first_page_button_text: 'Ugrás az első oldalra',
  paginator_previous_page_button_text: 'Előző oldal',
  paginator_last_page_button_text: 'Ugrás az utolsó oldalra',
  paginator_next_page_button_text: 'Következő oldal',
} satisfies Required<IPaginatorResourceStrings>;
