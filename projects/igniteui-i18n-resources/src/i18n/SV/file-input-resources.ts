import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Swedish resource strings for IgxInput
 */
export const FileInputResourceStringsSV: IFileInputResourceStrings = {
  upload_button: 'Ladda upp fil',
  file_placeholder: 'Ingen fil har valts',
} satisfies Required<IFileInputResourceStrings>;
