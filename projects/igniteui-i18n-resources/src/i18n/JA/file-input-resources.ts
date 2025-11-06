import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxInput
 */
export const FileInputResourceStringsJA: IFileInputResourceStrings = {
  upload_button: 'ファイルのアップロード',
  file_placeholder: 'ファイルが指定されていません',
} satisfies Required<IFileInputResourceStrings>;
