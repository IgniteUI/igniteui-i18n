import { type ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Bulgarian resource strings for IgxCarousel
 */
export const CarouselResourceStringsBG = {
    carousel_of: 'от',
    carousel_slide: 'слайд',
    carousel_previous_slide: 'предишен слайд',
    carousel_next_slide: 'следващ слайд'
} satisfies MakeRequired<ICarouselResourceStrings>;
