import { type IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Turkish resource strings for IgxInput
 */
export const InputResourceStringsTR = {
    input_upload_button: 'Dosya yükle',
    input_file_placeholder: 'Dosya seçilmedi'
} satisfies MakeRequired<IInputResourceStrings>;
