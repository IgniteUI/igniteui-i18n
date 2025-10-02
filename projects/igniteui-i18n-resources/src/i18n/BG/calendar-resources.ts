import type { ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxCalendar
 */
export const CalendarResourceStringsBG: ICalendarResourceStrings = {
    calendar_previous_month: 'Предходен месец',
    calendar_next_month: 'Следващ месец',
    calendar_previous_year: 'Предходна година',
    calendar_next_year: 'Следваща година',
    calendar_previous_years: 'Предходни {0} години',
    calendar_next_years: 'Следващи {0} години',
    calendar_select_date: 'Избор на дата',
    calendar_select_month: 'Избор на месец',
    calendar_select_year: 'Избор на година',
    calendar_range_start: 'Начало на диапазона',
    calendar_range_end: 'Край на диапазона',
    calendar_range_label_start: 'Начало',
    calendar_range_label_end: 'Край',
    calendar_range_placeholder: 'Избери диапазон',
    calendar_selected_month_is: 'Избраният месец е ',
    calendar_first_picker_of: 'Първия селектор от {0} започва от',
    calendar_multi_selection: 'Календар с множествен избор с {0} избирачи на дати',
    calendar_range_selection: 'Календар с избор на диапазон с {0} избирачи на дати',
    calendar_single_selection: 'Календар с {0} избирачи на дати',
    calendar_singular_multi_selection: 'Календар с множествен избор',
    calendar_singular_range_selection: 'Календар с избор на диапазон',
    calendar_singular_single_selection: 'Календар'
} satisfies Required<ICalendarResourceStrings>;
