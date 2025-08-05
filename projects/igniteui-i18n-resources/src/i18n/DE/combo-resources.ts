import { type IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxCombo
 */
export const ComboResourceStringsDE: IComboResourceStrings = {
    combo_empty_message: 'Die Liste ist leer',
    combo_filter_search_placeholder: 'Suchbegriff eingeben',
    combo_addCustomValues_placeholder: 'Element hinzufügen',
    combo_clearItems_placeholder: 'Auswahl löschen',
    combo_aria_label_options: 'Ausgewählte Optionen',
    combo_aria_label_no_options: 'Keine Optionen ausgewählt'
} satisfies MakeRequired<IComboResourceStrings>;
