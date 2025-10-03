import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxPaginator
 */
export const PaginatorResourceStringsNL: IPaginatorResourceStrings = {
  paginator_label: 'Items per pagina',
  paginator_pager_text: 'van',
  paginator_first_page_button_text: 'Ga naar de eerste pagina',
  paginator_previous_page_button_text: 'Vorige pagina',
  paginator_last_page_button_text: 'Ga naar de laatste pagina',
  paginator_next_page_button_text: 'Volgende pagina',
} satisfies Required<IPaginatorResourceStrings>;
