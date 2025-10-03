import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxPaginator
 */
export const PaginatorResourceStringsPL: IPaginatorResourceStrings = {
  paginator_label: 'Liczba elementów na stronie',
  paginator_pager_text: 'z',
  paginator_first_page_button_text: 'Przejdź do pierwszej strony',
  paginator_previous_page_button_text: 'Poprzednia strona',
  paginator_last_page_button_text: 'Przejdź do ostatniej strony',
  paginator_next_page_button_text: 'Następna strona',
} satisfies Required<IPaginatorResourceStrings>;
