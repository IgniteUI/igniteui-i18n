import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxInput
 */
export const FileInputResourceStringsPL: IFileInputResourceStrings = {
  file_input_upload_button: 'Przekaż plik',
  file_input_placeholder: 'Nie wybrano pliku',
} satisfies Required<IFileInputResourceStrings>;
