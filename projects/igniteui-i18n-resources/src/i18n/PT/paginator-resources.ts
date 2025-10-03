import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxPaginator
 */
export const PaginatorResourceStringsPT: IPaginatorResourceStrings = {
  paginator_label: 'Itens por página',
  paginator_pager_text: 'de',
  paginator_first_page_button_text: 'Ir para a primeira página',
  paginator_previous_page_button_text: 'Página anterior',
  paginator_last_page_button_text: 'Ir para a última página',
  paginator_next_page_button_text: 'Página seguinte',
} satisfies Required<IPaginatorResourceStrings>;
