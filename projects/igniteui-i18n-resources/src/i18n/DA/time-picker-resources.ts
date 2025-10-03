import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Danish resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsDA: ITimePickerResourceStrings = {
  time_picker_ok: 'OK',
  time_picker_cancel: 'Annuller',
  time_picker_change_time: 'Skift klokkeslæt',
  time_picker_choose_time: 'Vælg et klokkeslæt',
} satisfies Required<ITimePickerResourceStrings>;
