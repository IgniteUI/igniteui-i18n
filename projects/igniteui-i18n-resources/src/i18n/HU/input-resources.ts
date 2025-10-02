import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxInput
 */
export const InputResourceStringsHU: IInputResourceStrings = {
    input_upload_button: 'Fájl feltöltése',
    input_file_placeholder: 'Nincs fájl kiválasztva'
} satisfies Required<IInputResourceStrings>;
