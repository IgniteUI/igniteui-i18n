import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Turkish resource strings for IgxInput
 */
export const FileInputResourceStringsTR: IFileInputResourceStrings = {
  file_input_upload_button: 'Dosya yükle',
  file_input_placeholder: 'Dosya seçilmedi',
} satisfies Required<IFileInputResourceStrings>;
