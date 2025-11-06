import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxInput
 */
export const FileInputResourceStringsPL: IFileInputResourceStrings = {
  upload_button: 'Przekaż plik',
  file_placeholder: 'Nie wybrano pliku',
} satisfies Required<IFileInputResourceStrings>;
