import { type ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Swedish resource strings for IgxCalendar
 */
export const CalendarResourceStringsSV = {
    calendar_previous_month: 'Förra månaden',
    calendar_next_month: 'Nästa månad',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_date: 'Select Date',
    calendar_select_month: 'Välj månad',
    calendar_select_year: 'Välj år',
    calendar_range_start: 'Områdesstart',
    calendar_range_end: 'Områdesslut',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: 'Vald månad är ',
    calendar_first_picker_of: 'Första väljaren av {0} börjar från',
    calendar_multi_selection: 'Flervalskalender med {0} datumväljare',
    calendar_range_selection: 'Områdesvalskalender med {0} datumväljare',
    calendar_single_selection: 'Kalender med {0} datumväljare',
    calendar_singular_multi_selection: 'Flervalskalender',
    calendar_singular_range_selection: 'Områdesvalskalender',
    calendar_singular_single_selection: 'Kalender'
} satisfies MakeRequired<ICalendarResourceStrings>;
