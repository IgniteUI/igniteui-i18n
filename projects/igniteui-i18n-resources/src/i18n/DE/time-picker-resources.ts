import { type ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsDE = {
    time_picker_ok: 'Ok',
    time_picker_cancel: 'Abbrechen',
    time_picker_change_time: 'Uhrzeit ändern',
    time_picker_choose_time: 'Uhrzeit wählen'
} satisfies MakeRequired<ITimePickerResourceStrings>;
