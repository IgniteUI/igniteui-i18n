import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Swedish resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsSV: ITimePickerResourceStrings = {
    time_picker_ok: 'OK',
    time_picker_cancel: 'Avbryt',
    time_picker_change_time: 'Ändra tid',
    time_picker_choose_time: 'Välj tid'
} satisfies Required<ITimePickerResourceStrings>;
