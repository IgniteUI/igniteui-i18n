import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxInput
 */
export const FileInputResourceStringsHU: IFileInputResourceStrings = {
  file_input_upload_button: 'Fájl feltöltése',
  file_input_placeholder: 'Nincs fájl kiválasztva',
} satisfies Required<IFileInputResourceStrings>;
