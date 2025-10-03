import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsNL: ITimePickerResourceStrings = {
  time_picker_ok: 'OK',
  time_picker_cancel: 'Annuleren',
  time_picker_change_time: 'Tijd wijzigen',
  time_picker_choose_time: 'Tijd kiezen',
} satisfies Required<ITimePickerResourceStrings>;
