import { type ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxCalendar
 */
export const CalendarResourceStringsDE: ICalendarResourceStrings = {
    calendar_previous_month: 'Vorheriger Monat',
    calendar_next_month: 'Nächster Monat',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_date: 'Select Date',
    calendar_select_month: 'Wähle Monat',
    calendar_select_year: 'Wähle Jahr',
    calendar_range_start: 'Datumsperiode Anfang',
    calendar_range_end: 'Datumsperiode Ende',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: 'Der ausgewählter Monat ist ',
    calendar_first_picker_of: 'Die erste Auswahl von {0} beginnt am',
    calendar_multi_selection: 'Mehrfachauswahl-Kalender mit {0} Datumswählern',
    calendar_range_selection: 'Datumsperiodenauswahl-Kalender mit {0} Datumswählern',
    calendar_single_selection: 'Kalender mit {0} Datumswählern',
    calendar_singular_multi_selection: 'Mehrfachauswahl-Kalender ',
    calendar_singular_range_selection: 'Datumsperiodenauswahl-Kalender',
    calendar_singular_single_selection: 'Kalender'
} satisfies MakeRequired<ICalendarResourceStrings>;
