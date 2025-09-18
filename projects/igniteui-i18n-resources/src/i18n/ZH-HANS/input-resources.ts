import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Simplified Chinese (zh-Hans) resource strings for IgxInput
 */
export const InputResourceStringsZHHANS: IInputResourceStrings = {
    input_upload_button: '上传文件',
    input_file_placeholder: '未选择文件'
} satisfies MakeRequired<IInputResourceStrings>;
