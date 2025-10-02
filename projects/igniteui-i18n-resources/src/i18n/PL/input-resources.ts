import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxInput
 */
export const InputResourceStringsPL: IInputResourceStrings = {
    input_upload_button: 'Przekaż plik',
    input_file_placeholder: 'Nie wybrano pliku'
} satisfies Required<IInputResourceStrings>;
