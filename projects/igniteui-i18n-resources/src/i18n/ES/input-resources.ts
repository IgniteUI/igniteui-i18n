import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxInput
 */
export const InputResourceStringsES: IInputResourceStrings = {
    input_upload_button: 'Cargar archivo',
    input_file_placeholder: 'No hay ningún archivo seleccionado'
} satisfies Required<IInputResourceStrings>;
