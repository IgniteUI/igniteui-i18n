import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxCombo
 */
export const ComboResourceStringsNL: IComboResourceStrings = {
  combo_empty_message: 'De lijst is leeg',
  combo_filter_search_placeholder: 'Typ een zoekterm',
  combo_addCustomValues_placeholder: 'Item toevoegen',
  combo_clearItems_placeholder: 'Selectie wissen',
  combo_aria_label_options: 'Geselecteerde opties',
  combo_aria_label_no_options: 'Geen geselecteerde opties',
} satisfies Required<IComboResourceStrings>;
