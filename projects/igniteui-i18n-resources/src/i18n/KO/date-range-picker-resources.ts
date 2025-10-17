import type { IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Korean resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsKO: IDateRangePickerResourceStrings = {
  date_range_picker_date_separator: '에',
  date_range_picker_done_button: '완료',
  date_range_picker_cancel_button: '취소',
  date_range_picker_last7Days: '지난 7일',
  date_range_picker_currentMonth: '이번 달',
  date_range_picker_last30Days: '지난 30일',
  date_range_picker_yearToDate: '올해 초부터 현재까지',
} satisfies Required<IDateRangePickerResourceStrings>;
