import type { IPaginatorResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Czech resource strings for IgxPaginator
 */
export const PaginatorResourceStringsCS: IPaginatorResourceStrings = {
    paginator_label: 'Položek na stráncee',
    paginator_pager_text: 'z',
    paginator_first_page_button_text: 'Přejít na první stránku',
    paginator_previous_page_button_text: 'Předchozí stránka',
    paginator_last_page_button_text: 'Přejít na poslední stránku',
    paginator_next_page_button_text: 'Další strana'
} satisfies MakeRequired<IPaginatorResourceStrings>;
