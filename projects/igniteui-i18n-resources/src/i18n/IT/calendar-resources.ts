import type { ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxCalendar
 */
export const CalendarResourceStringsIT: ICalendarResourceStrings = {
    calendar_previous_month: 'Mese precedente',
    calendar_next_month: 'Mese prossimo',
    calendar_previous_year: "L'anno precedente",
    calendar_next_year: "L'anno prossimo",
    calendar_previous_years: '{0} anni precedenti',
    calendar_next_years: 'Prossimi {0} anni',
    calendar_select_date: 'Select Date',
    calendar_select_month: 'Selezionare il mese',
    calendar_select_year: "Selezionare l'anno",
    calendar_range_start: 'Inizio intervallo',
    calendar_range_end: 'Fine intervallo',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: 'Mese selezionato: ',
    calendar_first_picker_of: 'Il primo selettore di {0} inizia da',
    calendar_multi_selection: 'Calendario a selezione multipla con {0} selettori di data',
    calendar_range_selection: 'Calendario di selezione intervallo con {0} selettori di data',
    calendar_single_selection: 'Calendario con {0} selettori di data',
    calendar_singular_multi_selection: 'Calendario a selezione multipla',
    calendar_singular_range_selection: 'Calendario di selezione intervallo ',
    calendar_singular_single_selection: 'Calendario'
} satisfies MakeRequired<ICalendarResourceStrings>;
