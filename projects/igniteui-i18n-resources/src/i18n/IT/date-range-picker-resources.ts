import { type IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsIT: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'a',
    date_range_picker_done_button: 'Fine',
    date_range_picker_cancel_button: 'Annulla',
    date_range_picker_last7Days: 'Ultimi 7 giorni',
    date_range_picker_currentMonth: 'Mese corrente',
    date_range_picker_last30Days: 'Ultimi 30 giorni',
    date_range_picker_yearToDate: 'Anno fino ad oggi'
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
