import type { IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsDE: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'bis',
    date_range_picker_done_button: 'Fertig',
    date_range_picker_cancel_button: 'Abbrechen',
    date_range_picker_last7Days: 'Letzte 7 Tage',
    date_range_picker_currentMonth: 'Aktueller Monat',
    date_range_picker_last30Days: 'Letzte 30 Tage',
    date_range_picker_yearToDate: 'Jahr bis heute'
} satisfies Required<IDateRangePickerResourceStrings>;
