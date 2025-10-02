import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Czech resource strings for IgxCarousel
 */
export const CarouselResourceStringsCS: ICarouselResourceStrings = {
    carousel_of: 'z',
    carousel_slide: 'skluzavka',
    carousel_previous_slide: 'předchozí snímek',
    carousel_next_slide: 'další snímek'
} satisfies Required<ICarouselResourceStrings>;
