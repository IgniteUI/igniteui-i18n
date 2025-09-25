import { type ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Romanian resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsRO: ITimePickerResourceStrings = {
    time_picker_ok: 'OK',
    time_picker_cancel: 'Anulare',
    time_picker_change_time: 'Schimbați ora',
    time_picker_choose_time: 'Alegeți ora'
} satisfies MakeRequired<ITimePickerResourceStrings>;
