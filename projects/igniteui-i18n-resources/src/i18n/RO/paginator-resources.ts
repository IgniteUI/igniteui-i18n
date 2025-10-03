import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Romanian resource strings for IgxPaginator
 */
export const PaginatorResourceStringsRO: IPaginatorResourceStrings = {
  paginator_label: 'Articole pe pagină',
  paginator_pager_text: 'de',
  paginator_first_page_button_text: 'Accesați prima pagină',
  paginator_previous_page_button_text: 'Pagina precedentă',
  paginator_last_page_button_text: 'Accesați ultima pagină',
  paginator_next_page_button_text: 'Pagina următoare',
} satisfies Required<IPaginatorResourceStrings>;
