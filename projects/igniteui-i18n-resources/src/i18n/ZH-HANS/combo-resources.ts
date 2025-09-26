import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Simplified Chinese (zh-Hans) resource strings for IgxCombo
 */
export const ComboResourceStringsZHHANS: IComboResourceStrings = {
    combo_empty_message: '列表为空',
    combo_filter_search_placeholder: '输入搜索字符串',
    combo_addCustomValues_placeholder: '添加项目',
    combo_clearItems_placeholder: '清除选择',
    combo_aria_label_options: '选定的选项',
    combo_aria_label_no_options: '没有选定的选项'
} satisfies Required<IComboResourceStrings>;
