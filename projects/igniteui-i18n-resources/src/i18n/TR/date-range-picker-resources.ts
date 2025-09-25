import { type IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Turkish resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsTR: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: '-',
    date_range_picker_done_button: 'Bitti',
    date_range_picker_cancel_button: 'İptal',
    date_range_picker_last7Days: 'Son 7 gün',
    date_range_picker_currentMonth: 'Geçerli ay',
    date_range_picker_last30Days: 'Son 30 gün',
    date_range_picker_yearToDate: 'Yılbaşı itibarıyla',
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
