import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxCombo
 */
export const ComboResourceStringsHU: IComboResourceStrings = {
    combo_empty_message: 'Üres a lista',
    combo_filter_search_placeholder: 'Írjon be egy keresési kifejezést',
    combo_addCustomValues_placeholder: 'Elem hozzáadása',
    combo_clearItems_placeholder: 'Kiválasztás törlése',
    combo_aria_label_options: 'Kiválasztott lehetőségek',
    combo_aria_label_no_options: 'Nincsenek kiválasztott lehetőségek'
} satisfies MakeRequired<IComboResourceStrings>;
