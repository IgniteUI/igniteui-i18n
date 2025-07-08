import { type ICalendarResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Simplified Chinese (zh-Hans) resource strings for IgxCalendar
 */
export const CalendarResourceStringsZHHANS = {
    calendar_previous_month: '上个月',
    calendar_next_month: '下个月',
    calendar_previous_year: 'Previous Year',
    calendar_next_year: 'Next Year',
    calendar_previous_years: 'Previous {0} Years',
    calendar_next_years: 'Next {0} Years',
    calendar_select_date: 'Select Date',
    calendar_select_month: '选择月',
    calendar_select_year: '选择年',
    calendar_range_start: '范围开始',
    calendar_range_end: '范围结束',
    calendar_range_label_start: 'Start',
    calendar_range_label_end: 'End',
    calendar_range_placeholder: 'Select Range',
    calendar_selected_month_is: '所选月份: ',
    calendar_first_picker_of: '{0} 的第一个选择器从开始',
    calendar_multi_selection: '带有 {0} 日期选择器的多选日历',
    calendar_range_selection: '带有 {0} 日期选择器的范围选择日历',
    calendar_single_selection: '带有 {0} 日期选择器的日历',
    calendar_singular_multi_selection: '多选日历',
    calendar_singular_range_selection: '范围选择日历',
    calendar_singular_single_selection: '日历'
} satisfies MakeRequired<ICalendarResourceStrings>;
