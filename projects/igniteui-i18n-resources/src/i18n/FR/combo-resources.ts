import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxCombo
 */
export const ComboResourceStringsFR: IComboResourceStrings = {
    combo_empty_message: 'La liste est vide',
    combo_filter_search_placeholder: 'Entrez un terme de recherche',
    combo_addCustomValues_placeholder: 'Ajouter un élément',
    combo_clearItems_placeholder: 'Effacer la sélection',
    combo_aria_label_options: 'Options sélectionnées',
    combo_aria_label_no_options: 'Aucune option sélectionnée'
} satisfies Required<IComboResourceStrings>;
