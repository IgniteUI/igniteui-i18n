import { type IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Swedish resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsSV: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'till',
    date_range_picker_done_button: 'Färdig',
    date_range_picker_cancel_button: 'Avbryt',
    date_range_picker_last7Days: 'Senaste 7 dagarna',
    date_range_picker_currentMonth: 'Aktuell månad',
    date_range_picker_last30Days: 'Senaste 30 dagarna',
    date_range_picker_yearToDate: 'Året hittills'
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
