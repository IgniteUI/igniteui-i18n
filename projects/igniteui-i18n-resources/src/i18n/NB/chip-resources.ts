import type { IChipResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxChip
 */
export const ChipResourceStringsNB: IChipResourceStrings = {
    chip_remove: 'Fjern brikke',
    chip_select: 'Velg brikke'
} satisfies MakeRequired<IChipResourceStrings>;
