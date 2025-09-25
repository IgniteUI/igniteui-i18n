import type { ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxCalendar
 */
export const CalendarResourceStringsPT: ICalendarResourceStrings = {
    calendar_previous_month: 'Mês anterior',
    calendar_next_month: 'Mês seguinte',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_month: 'Selecionar mês',
    calendar_select_date: 'Select Date',
    calendar_select_year: 'Selecionar ano',
    calendar_range_start: 'Início do intervalo',
    calendar_range_end: 'Fim do intervalo',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: 'O mês selecionado é ',
    calendar_first_picker_of: 'O primeiro selecionador de {0} começa em',
    calendar_multi_selection: 'Calendário de seleção múltipla com {0} selecionadores de data',
    calendar_range_selection: 'Calendário de seleção de intervalo com {0} selecionadores de data',
    calendar_single_selection: 'Calendário com seletores de datas {0}',
    calendar_singular_multi_selection: 'Calendário de seleção múltipla',
    calendar_singular_range_selection: 'Calendário de seleção de intervalo',
    calendar_singular_single_selection: 'Calendário'
} satisfies MakeRequired<ICalendarResourceStrings>;
