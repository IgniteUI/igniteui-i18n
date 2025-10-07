import type { IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Czech resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsCS: IDateRangePickerResourceStrings = {
  date_range_picker_date_separator: 'na',
  date_range_picker_done_button: 'Hotovo',
  date_range_picker_cancel_button: 'Zrušit',
  date_range_picker_last7Days: 'Posledních 7 dní',
  date_range_picker_currentMonth: 'Tento měsíc',
  date_range_picker_last30Days: 'Posledních 30 dní',
  date_range_picker_yearToDate: 'Od začátku roku',
} satisfies Required<IDateRangePickerResourceStrings>;
