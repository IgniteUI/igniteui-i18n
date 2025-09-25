import type { IChipResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxChip
 */
export const ChipResourceStringsIT: IChipResourceStrings = {
    chip_remove: 'Rimuovere chip',
    chip_select: 'Seleziona chip'
} satisfies MakeRequired<IChipResourceStrings>;
