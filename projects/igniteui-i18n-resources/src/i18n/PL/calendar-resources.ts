import type { ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxCalendar
 */
export const CalendarResourceStringsPL: ICalendarResourceStrings = {
    calendar_previous_month: 'Poprzedni miesiąc',
    calendar_next_month: 'W przyszłym miesiącu',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_month: 'Wybierz miesiąc',
    calendar_select_date: 'Select Date',
    calendar_select_year: 'Wybierz rok',
    calendar_range_start: 'Początek zakresu',
    calendar_range_end: 'Koniec zakresu',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: 'Wybrany miesiąc to ',
    calendar_first_picker_of: 'Pierwszy wybór {0} zaczyna się od',
    calendar_multi_selection: 'Kalendarz wielokrotnego wyboru z {0} selektorami dat',
    calendar_range_selection: 'Kalendarz wyboru ciągłego z {0} selektorami dat',
    calendar_single_selection: 'Kalendarz z {0} selektorami dat',
    calendar_singular_multi_selection: 'Kalendarz wielokrotnego wyboru',
    calendar_singular_range_selection: 'Kalendarz wyboru ciągłego',
    calendar_singular_single_selection: 'Kalendarz'
} satisfies MakeRequired<ICalendarResourceStrings>;
