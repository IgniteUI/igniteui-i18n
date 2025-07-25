import { type ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Traditional Chinese (zh-Hant) resource strings for IgxCalendar
 */
export const CalendarResourceStringsZHHANT: ICalendarResourceStrings = {
    calendar_previous_month: '上個月',
    calendar_next_month: '下個月',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_date: 'Select Date',
    calendar_select_month: '選取月',
    calendar_select_year: '選取年',
    calendar_range_start: '範圍開始',
    calendar_range_end: '範圍結束',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: '選取的月份: ',
    calendar_first_picker_of: '{0} 的第一個選擇器從開始',
    calendar_multi_selection: '帶有 {0} 日期選擇器的多重選擇日曆',
    calendar_range_selection: '帶有 {0} 日期選擇器的範圍選擇日曆',
    calendar_single_selection: '帶有 {0} 日期選擇器的日曆',
    calendar_singular_multi_selection: '多重選擇日曆',
    calendar_singular_range_selection: '範圍選擇日曆',
    calendar_singular_single_selection: '日曆'
} satisfies MakeRequired<ICalendarResourceStrings>;
