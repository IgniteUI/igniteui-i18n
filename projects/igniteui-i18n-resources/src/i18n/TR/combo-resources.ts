import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Turkish resource strings for IgxCombo
 */
export const ComboResourceStringsTR = {
    combo_empty_message: 'Liste boş',
    combo_filter_search_placeholder: 'Arama terimi girin',
    combo_addCustomValues_placeholder: 'Öğe ekle',
    combo_clearItems_placeholder: 'Seçimi temizle'
} satisfies MakeRequired<IComboResourceStrings>;
