import type { IDatePickerResourceStrings } from './date-picker.interface';
import type { IDateRangePickerResourceStrings } from './date-range-picker.interface';
import type { IGridResourceStrings } from './grid.interface';
import type { ITimePickerResourceStrings } from './time-picker.interface';
import type { IPaginatorResourceStrings } from './paginator.interface';
import type { ICarouselResourceStrings } from './carousel.interface';
import type { IChipResourceStrings } from './chip.interface';
import type { IListResourceStrings } from './list.interface';
import type { ICalendarResourceStrings } from './calendar.interface';
import type { IInputResourceStrings } from './input.interface';
import type { ITreeResourceStrings } from './tree.interface';
import type { IActionStripResourceStrings } from './action-strip.interface';
import type { IQueryBuilderResourceStrings } from './query-builder.interface';
import type { IComboResourceStrings } from './combo.interface';
import type { IBannerResourceStrings } from './banner.interface';

export interface IResourceStrings
    extends IGridResourceStrings,
        ITimePickerResourceStrings,
        ICalendarResourceStrings,
        ICarouselResourceStrings,
        IChipResourceStrings,
        IComboResourceStrings,
        IInputResourceStrings,
        IDatePickerResourceStrings,
        IDateRangePickerResourceStrings,
        IListResourceStrings,
        IPaginatorResourceStrings,
        ITreeResourceStrings,
        IActionStripResourceStrings,
        IQueryBuilderResourceStrings,
        IBannerResourceStrings {}
