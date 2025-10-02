import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Swedish resource strings for IgxCombo
 */
export const ComboResourceStringsSV: IComboResourceStrings = {
    combo_empty_message: 'Listan är tom',
    combo_filter_search_placeholder: 'Ange sökterm',
    combo_addCustomValues_placeholder: 'Lägg till objekt',
    combo_clearItems_placeholder: 'Rensa urval',
    combo_aria_label_options: 'Valda alternativ',
    combo_aria_label_no_options: 'Inga valda alternativ'
} satisfies Required<IComboResourceStrings>;
