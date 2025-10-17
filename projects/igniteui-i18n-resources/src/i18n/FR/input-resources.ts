import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxInput
 */
export const InputResourceStringsFR: IInputResourceStrings = {
  input_upload_button: 'Charger un fichier',
  input_file_placeholder: 'Aucun fichier sélectionné',
} satisfies Required<IInputResourceStrings>;
