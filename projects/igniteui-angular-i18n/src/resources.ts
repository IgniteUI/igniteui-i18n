import { GridResourceStringsEN, type IGridResourceStrings } from './grid-resources';
import { PaginatorResourceStringsEN, type IPaginatorResourceStrings } from './paginator-resources';
import { TimePickerResourceStringsEN, type ITimePickerResourceStrings } from './time-picker-resources';
import { DatePickerResourceStringsEN, type IDatePickerResourceStrings } from './date-picker-resources';
import { DateRangePickerResourceStringsEN, type IDateRangePickerResourceStrings } from './date-range-picker-resources';
import { CarouselResourceStringsEN, type ICarouselResourceStrings } from './carousel-resources';
import { ListResourceStringsEN, type IListResourceStrings } from './list-resources';
import { CalendarResourceStringsEN, type ICalendarResourceStrings } from './calendar-resources';
import { TreeResourceStringsEN, type ITreeResourceStrings } from './tree-resources';
import { InputResourceStringsEN, type IInputResourceStrings } from './input-resources';
import { ChipResourceStringsEN, type IChipResourceStrings} from './chip-resources';
import { ComboResourceStringsEN, type IComboResourceStrings } from './combo-resources';
import { QueryBuilderResourceStringsEN, type IQueryBuilderResourceStrings } from './query-builder-resources';
import { BannerResourceStringsEN, type IBannerResourceStrings } from './banner-resources';
import { ActionStripResourceStringsEN, type IActionStripResourceStrings } from './action-strip-resources';

export interface IResourceStrings extends IGridResourceStrings, ITimePickerResourceStrings, ICalendarResourceStrings,
    ICarouselResourceStrings, IChipResourceStrings, IComboResourceStrings, IInputResourceStrings, IDatePickerResourceStrings,
    IDateRangePickerResourceStrings, IListResourceStrings, IPaginatorResourceStrings, ITreeResourceStrings,
    IActionStripResourceStrings, IQueryBuilderResourceStrings, IBannerResourceStrings { }
    
/**
 * English resource strings for all components
 */
export const ResourceStringsEN: IResourceStrings = {
    ...GridResourceStringsEN,
    ...PaginatorResourceStringsEN,
    ...TimePickerResourceStringsEN,
    ...DatePickerResourceStringsEN,
    ...DateRangePickerResourceStringsEN,
    ...CarouselResourceStringsEN,
    ...ListResourceStringsEN,
    ...CalendarResourceStringsEN,
    ...TreeResourceStringsEN,
    ...InputResourceStringsEN,
    ...ChipResourceStringsEN,
    ...ComboResourceStringsEN,
    ...QueryBuilderResourceStringsEN,
    ...BannerResourceStringsEN,
    ...ActionStripResourceStringsEN,
};

