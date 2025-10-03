import type { IChipResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxChip
 */
export const ChipResourceStringsPL: IChipResourceStrings = {
  chip_remove: 'Usuń chip',
  chip_select: 'Wybierz chip',
} satisfies Required<IChipResourceStrings>;
