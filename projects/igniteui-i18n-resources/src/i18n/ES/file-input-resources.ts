import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxInput
 */
export const FileInputResourceStringsES: IFileInputResourceStrings = {
  upload_button: 'Cargar archivo',
  file_placeholder: 'No hay ningún archivo seleccionado',
} satisfies Required<IFileInputResourceStrings>;
