import type { IChipResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxChip
 */
export const ChipResourceStringsJA: IChipResourceStrings = {
  chip_remove: 'チップを削除',
  chip_select: 'チップを選択',
} satisfies Required<IChipResourceStrings>;
