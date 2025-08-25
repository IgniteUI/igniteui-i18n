import { type IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsPL: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'do',
    date_range_picker_done_button: 'Gotowe',
    date_range_picker_cancel_button: 'Anuluj',
    date_range_picker_last7Days: 'Ostatnie 7 dni',
    date_range_picker_currentMonth: 'Bieżący miesiąc',
    date_range_picker_last30Days: 'Ostatnie 30 dni',
    date_range_picker_yearToDate: 'Od początku roku',
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
