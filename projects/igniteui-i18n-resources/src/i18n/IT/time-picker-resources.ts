import { type ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsIT = {
    time_picker_ok: 'OK',
    time_picker_cancel: 'Annulla',
    time_picker_change_time: 'Modifica orario',
    time_picker_choose_time: 'Scegli orario'
} satisfies MakeRequired<ITimePickerResourceStrings>;
