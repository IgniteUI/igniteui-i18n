import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Traditional Chinese (zh-Hant) resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsZHHANT: ITimePickerResourceStrings = {
  time_picker_ok: '確定',
  time_picker_cancel: '取消',
  time_picker_change_time: '變更時間',
  time_picker_choose_time: '選擇時間',
} satisfies Required<ITimePickerResourceStrings>;
