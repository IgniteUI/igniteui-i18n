import type { IInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxInput
 */
export const InputResourceStringsPT: IInputResourceStrings = {
    input_upload_button: 'Carregar ficheiro',
    input_file_placeholder: 'Nenhum ficheiro selecionado'
} satisfies Required<IInputResourceStrings>;
