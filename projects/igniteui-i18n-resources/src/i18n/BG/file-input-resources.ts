import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxInput
 */
export const FileInputResourceStringsBG: IFileInputResourceStrings = {
  upload_button: 'Качване на файл',
  file_placeholder: 'Няма избран файл',
} satisfies Required<IFileInputResourceStrings>;
