import { type IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsPT: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'para',
    date_range_picker_done_button: 'Concluído',
    date_range_picker_cancel_button: 'Cancelar',
    date_range_picker_last7Days: 'Últimos 7 dias',
    date_range_picker_currentMonth: 'Mês atual',
    date_range_picker_last30Days: 'Últimos 30 dias',
    date_range_picker_yearToDate: 'Ano até hoje'
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
