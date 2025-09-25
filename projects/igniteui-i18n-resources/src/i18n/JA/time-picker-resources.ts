import type { ITimePickerResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxTimePicker
 */
export const TimePickerResourceStringsJA: ITimePickerResourceStrings = {
    time_picker_ok: 'OK',
    time_picker_cancel: 'キャンセル',
    time_picker_change_time: '時間の変更',
    time_picker_choose_time: '時間の選択'
} satisfies MakeRequired<ITimePickerResourceStrings>;
