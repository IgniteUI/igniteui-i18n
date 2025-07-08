import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxCombo
 */
export const ComboResourceStringsHU = {
    combo_empty_message: 'Üres a lista',
    combo_filter_search_placeholder: 'Írjon be egy keresési kifejezést',
    combo_addCustomValues_placeholder: 'Elem hozzáadása',
    combo_clearItems_placeholder: 'Kiválasztás törlése'
} satisfies MakeRequired<IComboResourceStrings>;
