import type { IComboResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxCombo
 */
export const ComboResourceStringsES: IComboResourceStrings = {
    combo_empty_message: 'La lista está vacía',
    combo_filter_search_placeholder: 'Escriba un término de búsqueda',
    combo_addCustomValues_placeholder: 'Agregar elemento',
    combo_clearItems_placeholder: 'Borrar selección',
    combo_aria_label_options: 'Opciones seleccionadas',
    combo_aria_label_no_options: 'No hay opciones seleccionadas'
} satisfies Required<IComboResourceStrings>;
