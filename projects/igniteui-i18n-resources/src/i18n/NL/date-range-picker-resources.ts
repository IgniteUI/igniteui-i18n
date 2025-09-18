import type { IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsNL: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'tot',
    date_range_picker_done_button: 'Gereed',
    date_range_picker_cancel_button: 'Annuleren',
    date_range_picker_last7Days: 'Laatste 7 dagen',
    date_range_picker_currentMonth: 'Huidige maand',
    date_range_picker_last30Days: 'Laatste 30 dagen',
    date_range_picker_yearToDate: 'Jaar tot datum'
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
