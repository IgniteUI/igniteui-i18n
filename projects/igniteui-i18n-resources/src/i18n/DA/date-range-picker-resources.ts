import type { IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Danish resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsDA: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'till',
    date_range_picker_done_button: 'Færdigt',
    date_range_picker_cancel_button: 'Annuller',
    date_range_picker_last7Days: 'Sidste 7 dage',
    date_range_picker_currentMonth: 'Denne måned',
    date_range_picker_last30Days: 'Sidste 30 dage',
    date_range_picker_yearToDate: 'Året til dato'
} satisfies Required<IDateRangePickerResourceStrings>;
