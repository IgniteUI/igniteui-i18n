import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxInput
 */
export const FileInputResourceStringsFR: IFileInputResourceStrings = {
  upload_button: 'Charger un fichier',
  file_placeholder: 'Aucun fichier sélectionné',
} satisfies Required<IFileInputResourceStrings>;
