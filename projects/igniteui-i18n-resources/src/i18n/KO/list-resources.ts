import type { IListResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Korean resource strings for IgxList
 */
export const ListResourceStringsKO: IListResourceStrings = {
    list_no_items: '목록에 항목이 없습니다.',
    list_loading: '서버에서 데이터를로드하는 중...'
} satisfies Required<IListResourceStrings>;
