import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxCombo
 */
export const ComboResourceStringsBG: IComboResourceStrings = {
    combo_empty_message: 'Списъкът е празен',
    combo_filter_search_placeholder: 'Въведете термин за търсене',
    combo_addCustomValues_placeholder: 'Добавяне на елемент',
    combo_clearItems_placeholder: 'Изчистване на избора',
    combo_aria_label_options: 'Има избрани опции',
    combo_aria_label_no_options: 'Няма избрани опции'
} satisfies Required<IComboResourceStrings>;
