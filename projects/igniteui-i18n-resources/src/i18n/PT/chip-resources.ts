import type { IChipResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxChip
 */
export const ChipResourceStringsPT: IChipResourceStrings = {
    chip_remove: 'Remova o chip',
    chip_select: 'Selecione o chip'
} satisfies MakeRequired<IChipResourceStrings>;
