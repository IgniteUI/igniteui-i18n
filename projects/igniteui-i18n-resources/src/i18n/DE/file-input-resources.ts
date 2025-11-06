import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxInput
 */
export const FileInputResourceStringsDE: IFileInputResourceStrings = {
  file_input_upload_button: 'Datei hochladen',
  file_input_placeholder: 'Keine Datei ausgewählt',
} satisfies Required<IFileInputResourceStrings>;
