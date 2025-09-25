import { type ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Romanian resource strings for IgxCalendar
 */
export const CalendarResourceStringsRO: ICalendarResourceStrings = {
    calendar_previous_month: 'Luna trecută',
    calendar_next_month: 'Luna viitoare',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_date: 'Select Date',
    calendar_select_month: 'Alege luna',
    calendar_select_year: 'Selectați Anul',
    calendar_range_start: 'Începutul intervalului',
    calendar_range_end: 'Sfârșitul intervalului',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: 'Luna selectată este ',
    calendar_first_picker_of: 'Primul selector din {0} începe de la',
    calendar_multi_selection: 'Calendar cu selecție multiplă cu {0} selectoare de date',
    calendar_range_selection: 'Calendar de selecție a intervalului cu {0} selector de date',
    calendar_single_selection: 'Calendar cu {0} selectoare de date',
    calendar_singular_multi_selection: 'Calendar de selecție multiplă',
    calendar_singular_range_selection: 'Calendar de selectare a gamei',
    calendar_singular_single_selection: 'Calendar'
} satisfies MakeRequired<ICalendarResourceStrings>;
