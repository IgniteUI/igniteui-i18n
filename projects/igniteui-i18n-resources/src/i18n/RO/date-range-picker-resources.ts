import type { IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Romanian resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsRO: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'la',
    date_range_picker_done_button: 'Gata',
    date_range_picker_cancel_button: 'Anulează',
    date_range_picker_last7Days: 'Ultimele 7 zile',
    date_range_picker_currentMonth: 'Luna curentă',
    date_range_picker_last30Days: 'Ultimele 30 de zile',
    date_range_picker_yearToDate: 'De la începutul anului'
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
