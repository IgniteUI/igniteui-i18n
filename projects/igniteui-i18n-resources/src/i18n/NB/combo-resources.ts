import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxCombo
 */
export const ComboResourceStringsNB = {
    combo_empty_message: 'Listen er tom',
    combo_filter_search_placeholder: 'Skriv inn søkeord',
    combo_addCustomValues_placeholder: 'Legg til element',
    combo_clearItems_placeholder: 'Fjern valg'
} satisfies MakeRequired<IComboResourceStrings>;
