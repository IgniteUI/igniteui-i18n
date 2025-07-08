import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Swedish resource strings for IgxCombo
 */
export const ComboResourceStringsSV = {
    combo_empty_message: 'Listan är tom',
    combo_filter_search_placeholder: 'Ange sökterm',
    combo_addCustomValues_placeholder: 'Lägg till objekt',
    combo_clearItems_placeholder: 'Rensa urval'
} satisfies MakeRequired<IComboResourceStrings>;
