import type { ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxCalendar
 */
export const CalendarResourceStringsJA: ICalendarResourceStrings = {
    calendar_previous_month: '前月',
    calendar_next_month: '翌月',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_date: 'Select Date',
    calendar_select_month: '月の選択',
    calendar_select_year: '年の選択',
    calendar_range_start: '範囲開始',
    calendar_range_end: '範囲終了',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: '選択した月: ',
    calendar_first_picker_of: '{0} の最初のピッカーの開始: ',
    calendar_multi_selection: '{0} 日付ピッカーの複数選択カレンダー',
    calendar_range_selection: '{0} 日付ピッカーの範囲選択カレンダー',
    calendar_single_selection: '{0} 日付ピッカーのカレンダー',
    calendar_singular_multi_selection: '複数選択カレンダー',
    calendar_singular_range_selection: '範囲選択カレンダー',
    calendar_singular_single_selection: 'カレンダー'
} satisfies MakeRequired<ICalendarResourceStrings>;
