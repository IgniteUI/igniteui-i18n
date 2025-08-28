import { type IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsNB: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'til',
    date_range_picker_done_button: 'Ferdig',
    date_range_picker_cancel_button: 'Avbryt',
    date_range_picker_last7Days: 'Siste 7 dager',
    date_range_picker_currentMonth: 'Denne måneden',
    date_range_picker_last30Days: 'Siste 30 dager',
    date_range_picker_yearToDate: 'Året til dato'
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
