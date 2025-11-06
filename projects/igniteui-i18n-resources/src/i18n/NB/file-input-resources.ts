import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxInput
 */
export const FileInputResourceStringsNB: IFileInputResourceStrings = {
  file_input_upload_button: 'Last opp fil',
  file_input_placeholder: 'Det er ikke valgt noen fil',
} satisfies Required<IFileInputResourceStrings>;
