import type { IFileInputResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxInput
 */
export const FileInputResourceStringsPT: IFileInputResourceStrings = {
  upload_button: 'Carregar ficheiro',
  file_placeholder: 'Nenhum ficheiro selecionado',
} satisfies Required<IFileInputResourceStrings>;
