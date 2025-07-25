import { type IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Danish resource strings for IgxInput
 */
export const InputResourceStringsDA: IInputResourceStrings = {
    input_upload_button: 'Upload fil',
    input_file_placeholder: 'Der er ikke valgt nogen fil'
} satisfies MakeRequired<IInputResourceStrings>;
