import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsPT: ITimePickerResourceStrings = {
    time_picker_ok: 'OK',
    time_picker_cancel: 'Cancelar',
    time_picker_change_time: 'Alterar hora',
    time_picker_choose_time: 'Escolher hora'
} satisfies MakeRequired<ITimePickerResourceStrings>;
