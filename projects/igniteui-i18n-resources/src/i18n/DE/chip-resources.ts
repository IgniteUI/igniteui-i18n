import { type IChipResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxChip
 */
export const ChipResourceStringsDE = {
    chip_remove: 'Chip entfernen',
    chip_select: 'Chip auswählen'
} satisfies MakeRequired<IChipResourceStrings>;
