import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxCombo
 */
export const ComboResourceStringsIT: IComboResourceStrings = {
    combo_empty_message: "L'elenco è vuoto",
    combo_filter_search_placeholder: 'Immettere il testo di ricerca',
    combo_addCustomValues_placeholder: 'Aggiungi elemento',
    combo_clearItems_placeholder: 'Cancella selezione',
    combo_aria_label_options: 'Opzioni selezionate',
    combo_aria_label_no_options: 'Nessuna opzione selezionata'
} satisfies Required<IComboResourceStrings>;
