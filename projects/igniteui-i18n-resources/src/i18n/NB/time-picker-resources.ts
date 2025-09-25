import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsNB: ITimePickerResourceStrings = {
    time_picker_ok: 'OK',
    time_picker_cancel: 'Avbryt',
    time_picker_change_time: 'Endre tid',
    time_picker_choose_time: 'Velg tid'
} satisfies MakeRequired<ITimePickerResourceStrings>;
