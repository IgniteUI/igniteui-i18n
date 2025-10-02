import type { IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsJA: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: '～',
    date_range_picker_done_button: '完了',
    date_range_picker_cancel_button: 'キャンセル',
    date_range_picker_last7Days: '過去7日間',
    date_range_picker_currentMonth: '今月',
    date_range_picker_last30Days: '過去30日間',
    date_range_picker_yearToDate: '年初来'
} satisfies Required<IDateRangePickerResourceStrings>;
