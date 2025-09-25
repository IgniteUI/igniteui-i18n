import { type ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxCalendar
 */
export const CalendarResourceStringsNL: ICalendarResourceStrings = {
    calendar_previous_month: 'Vorige maand',
    calendar_next_month: 'Volgende maand',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_date: 'Select Date',
    calendar_select_month: 'Selecteer maand',
    calendar_select_year: 'Selecteer jaar',
    calendar_range_start: 'Begin van bereik',
    calendar_range_end: 'Einde van bereik',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: 'Geselecteerde maand is ',
    calendar_first_picker_of: 'De eerste kiezer van {0} begint vanaf',
    calendar_multi_selection: 'Multi-selectiekalender met {0} datumkiezers',
    calendar_range_selection: 'Bereikkalender met {0} datumkiezers',
    calendar_single_selection: 'Kalender met {0} datumkiezers',
    calendar_singular_multi_selection: 'Multi-selectie kalender',
    calendar_singular_range_selection: 'Bereikselectie kalender',
    calendar_singular_single_selection: 'Kalender'
} satisfies MakeRequired<ICalendarResourceStrings>;
