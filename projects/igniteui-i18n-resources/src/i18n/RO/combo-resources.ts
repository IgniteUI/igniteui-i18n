import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Romanian resource strings for IgxCombo
 */
export const ComboResourceStringsRO: IComboResourceStrings = {
  combo_empty_message: 'Lista este goală',
  combo_filter_search_placeholder: 'Introduceți termenul de căutare',
  combo_addCustomValues_placeholder: 'Adăugați element',
  combo_clearItems_placeholder: 'Ștergeți selecția',
  combo_aria_label_options: 'Opțiuni selectate',
  combo_aria_label_no_options: 'Nicio opțiune selectată',
} satisfies Required<IComboResourceStrings>;
