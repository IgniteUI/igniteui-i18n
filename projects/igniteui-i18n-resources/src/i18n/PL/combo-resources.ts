import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxCombo
 */
export const ComboResourceStringsPL: IComboResourceStrings = {
    combo_empty_message: 'Lista jest pusta',
    combo_filter_search_placeholder: 'Wprowadź tekst wyszukiwania',
    combo_addCustomValues_placeholder: 'Dodaj element',
    combo_clearItems_placeholder: 'Wyczyść wybór',
    combo_aria_label_options: 'Wybrane opcje',
    combo_aria_label_no_options: 'Brak wybranych opcji'
} satisfies MakeRequired<IComboResourceStrings>;
