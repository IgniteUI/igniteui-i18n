import { type ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsHU = {
    time_picker_ok: 'OK',
    time_picker_cancel: 'Mégse',
    time_picker_change_time: 'Idő módosítása',
    time_picker_choose_time: 'Idő beállítása'
} satisfies MakeRequired<ITimePickerResourceStrings>;
