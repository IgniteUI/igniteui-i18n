import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxInput
 */
export const FileInputResourceStringsIT: IFileInputResourceStrings = {
  upload_button: 'Carica file',
  file_placeholder: 'Nessun file scelto',
} satisfies Required<IFileInputResourceStrings>;
