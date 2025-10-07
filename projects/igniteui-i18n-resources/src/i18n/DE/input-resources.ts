import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxInput
 */
export const InputResourceStringsDE: IInputResourceStrings = {
  input_upload_button: 'Datei hochladen',
  input_file_placeholder: 'Keine Datei ausgewählt',
} satisfies Required<IInputResourceStrings>;
