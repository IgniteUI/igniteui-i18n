import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Turkish resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsTR: ITimePickerResourceStrings = {
  time_picker_ok: 'OK',
  time_picker_cancel: 'Iptal',
  time_picker_change_time: 'Saati değiştir',
  time_picker_choose_time: 'Saat seçin',
} satisfies Required<ITimePickerResourceStrings>;
