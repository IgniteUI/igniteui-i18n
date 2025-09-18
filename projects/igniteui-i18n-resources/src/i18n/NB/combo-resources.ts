import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxCombo
 */
export const ComboResourceStringsNB: IComboResourceStrings = {
    combo_empty_message: 'Listen er tom',
    combo_filter_search_placeholder: 'Skriv inn søkeord',
    combo_addCustomValues_placeholder: 'Legg til element',
    combo_clearItems_placeholder: 'Fjern valg',
    combo_aria_label_options: 'Valgte alternativer',
    combo_aria_label_no_options: 'Ingen valgte alternativer'
} satisfies MakeRequired<IComboResourceStrings>;
