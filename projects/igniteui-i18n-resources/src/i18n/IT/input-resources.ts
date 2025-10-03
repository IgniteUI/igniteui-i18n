import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxInput
 */
export const InputResourceStringsIT: IInputResourceStrings = {
  input_upload_button: 'Carica file',
  input_file_placeholder: 'Nessun file scelto',
} satisfies Required<IInputResourceStrings>;
