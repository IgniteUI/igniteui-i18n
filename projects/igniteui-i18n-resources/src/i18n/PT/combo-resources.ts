import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxCombo
 */
export const ComboResourceStringsPT: IComboResourceStrings = {
    combo_empty_message: 'A lista está vazia',
    combo_filter_search_placeholder: 'Digite um termo de pesquisa',
    combo_addCustomValues_placeholder: 'Adicionar item',
    combo_clearItems_placeholder: 'Limpar seleção'
} satisfies MakeRequired<IComboResourceStrings>;
