import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxInput
 */
export const InputResourceStringsNL: IInputResourceStrings = {
    input_upload_button: 'Bestand uploaden',
    input_file_placeholder: 'Geen bestand gekozen'
} satisfies MakeRequired<IInputResourceStrings>;
