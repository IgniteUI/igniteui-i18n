import { type IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Traditional Chinese (zh-Hant) resource strings for IgxInput
 */
export const InputResourceStringsZHHANT: IInputResourceStrings = {
    input_upload_button: '上傳檔案',
    input_file_placeholder: '未選擇檔案'
} satisfies MakeRequired<IInputResourceStrings>;
