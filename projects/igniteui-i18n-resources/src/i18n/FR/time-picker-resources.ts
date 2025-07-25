import { type ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsFR: ITimePickerResourceStrings = {
    time_picker_ok: 'Ok',
    time_picker_cancel: 'Annuler',
    time_picker_change_time: 'Modifier l’heure',
    time_picker_choose_time: 'Choisir l’heure'
} satisfies MakeRequired<ITimePickerResourceStrings>;
