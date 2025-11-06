import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Czech resource strings for IgxInput
 */
export const FileInputResourceStringsCS: IFileInputResourceStrings = {
  upload_button: 'Nahrát soubor',
  file_placeholder: 'Není zvolený žádný soubor',
} satisfies Required<IFileInputResourceStrings>;
