import { type IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsBG: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'до',
    date_range_picker_done_button: 'Завърши',
    date_range_picker_cancel_button: 'Отмени',
    date_range_picker_last7Days: 'Последните 7 дни',
    date_range_picker_currentMonth: 'Текущ месец',
    date_range_picker_last30Days: 'Последните 30 дни',
    date_range_picker_yearToDate: 'От началото на годината'
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
