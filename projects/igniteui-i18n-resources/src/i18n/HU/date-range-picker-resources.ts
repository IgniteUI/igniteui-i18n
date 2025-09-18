import type { IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsHU: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: '-',
    date_range_picker_done_button: 'Kész',
    date_range_picker_cancel_button: 'Mégse',
    date_range_picker_last7Days: 'Az elmúlt 7 nap',
    date_range_picker_currentMonth: 'Aktuális hónap',
    date_range_picker_last30Days: 'Az elmúlt 30 nap',
    date_range_picker_yearToDate: 'Év elejétől napjainkig'
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
