import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Traditional Chinese (zh-Hant) resource strings for IgxCombo
 */
export const ComboResourceStringsZHHANT = {
    combo_empty_message: '清單是空的',
    combo_filter_search_placeholder: '輸入搜尋字串',
    combo_addCustomValues_placeholder: '新增項目',
    combo_clearItems_placeholder: '清除選擇'
} satisfies MakeRequired<IComboResourceStrings>;
