import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxCombo
 */
export const ComboResourceStringsJA = {
    combo_empty_message: 'リストが空です',
    combo_filter_search_placeholder: '検索条件の入力',
    combo_addCustomValues_placeholder: '項目の追加',
    combo_clearItems_placeholder: '選択のクリア'
} satisfies MakeRequired<IComboResourceStrings>;
