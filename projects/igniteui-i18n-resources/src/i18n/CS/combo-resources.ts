import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 *  Czech resource strings for IgxCombo
 */
export const ComboResourceStringsCS: IComboResourceStrings = {
    combo_empty_message: 'Seznam je prázdný',
    combo_filter_search_placeholder: 'Zadejte hledaný výraz',
    combo_addCustomValues_placeholder: 'Přidat položku',
    combo_clearItems_placeholder: 'Vymazat výběr',
    combo_aria_label_options: 'Vybrané možnosti',
    combo_aria_label_no_options: 'Žádné možnosti nejsou vybrány'
} satisfies MakeRequired<IComboResourceStrings>;
