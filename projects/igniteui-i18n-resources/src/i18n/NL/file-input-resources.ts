import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxInput
 */
export const FileInputResourceStringsNL: IFileInputResourceStrings = {
  upload_button: 'Bestand uploaden',
  file_placeholder: 'Geen bestand gekozen',
} satisfies Required<IFileInputResourceStrings>;
