import { type IDateRangePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxDateRangePicker
 */
export const DateRangePickerResourceStringsFR: IDateRangePickerResourceStrings = {
    date_range_picker_date_separator: 'à',
    date_range_picker_done_button: 'Terminée',
    date_range_picker_cancel_button: 'Annuler',
    date_range_picker_last7Days: '7 derniers jours',
    date_range_picker_currentMonth: 'Mois en cours',
    date_range_picker_last30Days: '30 derniers jours',
    date_range_picker_yearToDate: 'Année à ce jour',
} satisfies MakeRequired<IDateRangePickerResourceStrings>;
