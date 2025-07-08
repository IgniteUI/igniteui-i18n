import { type ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsES = {
    time_picker_ok: 'Aceptar',
    time_picker_cancel: 'Cancelar',
    time_picker_change_time: 'Cambiar hora',
    time_picker_choose_time: 'Elige hora'
} satisfies MakeRequired<ITimePickerResourceStrings>;
