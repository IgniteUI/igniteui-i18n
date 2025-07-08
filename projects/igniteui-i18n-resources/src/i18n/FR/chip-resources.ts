import { type IChipResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxChip
 */
export const ChipResourceStringsFR = {
    chip_remove: 'Supprimer la puce',
    chip_select: 'Sélectionner la puce'
} satisfies MakeRequired<IChipResourceStrings>;
