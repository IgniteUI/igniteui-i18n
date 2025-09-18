import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsPL: ITimePickerResourceStrings = {
    time_picker_ok: 'OK',
    time_picker_cancel: 'Anuluj',
    time_picker_change_time: 'Zmień czas',
    time_picker_choose_time: 'Wybierz czas'
} satisfies MakeRequired<ITimePickerResourceStrings>;
