import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Simplified Chinese (zh-Hans) resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsZHHANS: ITimePickerResourceStrings = {
    time_picker_ok: '确定',
    time_picker_cancel: '取消',
    time_picker_change_time: '更改时间',
    time_picker_choose_time: '选择时间'
} satisfies MakeRequired<ITimePickerResourceStrings>;
