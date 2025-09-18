import type { IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsES: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'a',
    date_range_picker_done_button: 'Listo',
    date_range_picker_cancel_button: 'Cancelar',
    date_range_picker_last7Days: 'Últimos 7 días',
    date_range_picker_currentMonth: 'Mes actual',
    date_range_picker_last30Days: 'Últimos 30 días',
    date_range_picker_yearToDate: 'Año hasta la fecha'
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
