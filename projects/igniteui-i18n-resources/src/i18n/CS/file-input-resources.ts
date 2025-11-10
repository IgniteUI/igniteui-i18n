import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Czech resource strings for IgxInput
 */
export const FileInputResourceStringsCS: IFileInputResourceStrings = {
  file_input_upload_button: 'Nahrát soubor',
  file_input_placeholder: 'Není zvolený žádný soubor',
} satisfies Required<IFileInputResourceStrings>;
