import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Polish resource strings for IgxCarousel
 */
export const CarouselResourceStringsPL: ICarouselResourceStrings = {
    carousel_of: 'z',
    carousel_slide: 'slajd',
    carousel_previous_slide: 'poprzedni slajd',
    carousel_next_slide: 'następny slajd'
} satisfies MakeRequired<ICarouselResourceStrings>;
