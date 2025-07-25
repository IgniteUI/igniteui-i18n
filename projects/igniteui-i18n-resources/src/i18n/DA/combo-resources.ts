import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Danish resource strings for IgxCombo
 */
export const ComboResourceStringsDA: IComboResourceStrings = {
    combo_empty_message: 'Listen er tom',
    combo_filter_search_placeholder: 'Indtast en søgeterm',
    combo_addCustomValues_placeholder: 'Tilføj element',
    combo_clearItems_placeholder: 'Ryd markering'
} satisfies MakeRequired<IComboResourceStrings>;
