import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Korean resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsKO: ITimePickerResourceStrings = {
  time_picker_ok: '확인',
  time_picker_cancel: '취소',
  time_picker_change_time: '시간 변경',
  time_picker_choose_time: '시간 선택',
} satisfies Required<ITimePickerResourceStrings>;
