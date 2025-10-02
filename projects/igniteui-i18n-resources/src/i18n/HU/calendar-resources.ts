import type { ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxCalendar
 */
export const CalendarResourceStringsHU: ICalendarResourceStrings = {
    calendar_previous_month: 'Előző hónap',
    calendar_next_month: 'Következő hónap',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_date: 'Select Date',
    calendar_select_month: 'Hónap kiválasztása',
    calendar_select_year: 'Év kiválasztása',
    calendar_range_start: 'Tartomány kezdete',
    calendar_range_end: 'Tartomány vége',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: 'A kiválasztott hónap ',
    calendar_first_picker_of: 'A(z) {0} első választója innen indul:',
    calendar_multi_selection: 'Többszörös időpontválasztó naptár {0} dátumválasztóval',
    calendar_range_selection: 'Időtartamválasztó naptár {0} dátumválasztóval',
    calendar_single_selection: 'Naptár {0} dátumválasztóval',
    calendar_singular_multi_selection: 'Többszörös időpontválasztó naptár',
    calendar_singular_range_selection: 'Időtartamválasztó naptár',
    calendar_singular_single_selection: 'Naptár'
} satisfies Required<ICalendarResourceStrings>;
