import type { IChipResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxChip
 */
export const ChipResourceStringsBG: IChipResourceStrings = {
    chip_remove: 'Премахване на чипa',
    chip_select: 'Избор на чип'
} satisfies MakeRequired<IChipResourceStrings>;
