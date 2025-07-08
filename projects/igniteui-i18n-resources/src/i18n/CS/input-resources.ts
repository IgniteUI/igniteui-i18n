import { type IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Czech resource strings for IgxInput
 */
export const InputResourceStringsCS = {
    input_upload_button: 'Nahrát soubor',
    input_file_placeholder: 'Není zvolený žádný soubor'
} satisfies MakeRequired<IInputResourceStrings>;
