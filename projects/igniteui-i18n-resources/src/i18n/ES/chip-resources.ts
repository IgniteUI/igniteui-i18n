import type { IChipResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxChip
 */
export const ChipResourceStringsES: IChipResourceStrings = {
    chip_remove: 'Quitar chip',
    chip_select: 'Seleccionar chip'
} satisfies MakeRequired<IChipResourceStrings>;
