import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Danish resource strings for IgxInput
 */
export const FileInputResourceStringsDA: IFileInputResourceStrings = {
  upload_button: 'Upload fil',
  file_placeholder: 'Der er ikke valgt nogen fil',
} satisfies Required<IFileInputResourceStrings>;
