import { type ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxCalendar
 */
export const CalendarResourceStringsNB: ICalendarResourceStrings = {
    calendar_previous_month: 'Forrige måned',
    calendar_next_month: 'Neste måned',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_date: 'Select Date',
    calendar_select_month: 'Velg måned',
    calendar_select_year: 'Velg år',
    calendar_range_start: 'Rekkevidde start',
    calendar_range_end: 'Rekkevidde slutt',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: 'Valgt måned er ',
    calendar_first_picker_of: 'Den første plukkeren på {0} starter fra',
    calendar_multi_selection: 'Flervalgskalender med {0} datovelgere',
    calendar_range_selection: 'Områdevalgskalender med {0} datovelgere',
    calendar_single_selection: 'Kalender med {0} datovelgere',
    calendar_singular_multi_selection: 'Kalender med flere valg',
    calendar_singular_range_selection: 'Områdevalgskalender',
    calendar_singular_single_selection: 'Kalender'
} satisfies MakeRequired<ICalendarResourceStrings>;
