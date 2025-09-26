import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxInput
 */
export const InputResourceStringsBG: IInputResourceStrings = {
    input_upload_button: 'Качване на файл',
    input_file_placeholder: 'Няма избран файл'
} satisfies Required<IInputResourceStrings>;
