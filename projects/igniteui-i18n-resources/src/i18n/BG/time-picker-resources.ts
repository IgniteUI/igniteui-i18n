import { type ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsBG = {
    time_picker_ok: 'ОК',
    time_picker_cancel: 'Отмяна',
    time_picker_change_time: 'Промяна на времето',
    time_picker_choose_time: 'Избор на време'
} satisfies MakeRequired<ITimePickerResourceStrings>;
