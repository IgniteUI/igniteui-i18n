import { type IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxInput
 */
export const InputResourceStringsJA: IInputResourceStrings = {
    input_upload_button: 'ファイルのアップロード',
    input_file_placeholder: 'ファイルが指定されていません'
} satisfies MakeRequired<IInputResourceStrings>;
