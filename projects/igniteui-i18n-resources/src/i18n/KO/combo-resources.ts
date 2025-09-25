import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Korean resource strings for IgxCombo
 */
export const ComboResourceStringsKO: IComboResourceStrings = {
    combo_empty_message: '목록이 비어 있음',
    combo_filter_search_placeholder: '검색어 입력',
    combo_addCustomValues_placeholder: '항목 추가',
    combo_clearItems_placeholder: '선택 지우기',
    combo_aria_label_options: '선택된 옵션',
    combo_aria_label_no_options: '선택된 옵션 없음'
} satisfies MakeRequired<IComboResourceStrings>;
