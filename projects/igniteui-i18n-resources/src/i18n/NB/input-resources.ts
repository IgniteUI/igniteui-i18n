import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxInput
 */
export const InputResourceStringsNB: IInputResourceStrings = {
    input_upload_button: 'Last opp fil',
    input_file_placeholder: 'Det er ikke valgt noen fil'
} satisfies Required<IInputResourceStrings>;
