import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Dutch resource strings for IgxCarousel
 */
export const CarouselResourceStringsNL: ICarouselResourceStrings = {
    carousel_of: 'van',
    carousel_slide: 'dia',
    carousel_previous_slide: 'vorige dia',
    carousel_next_slide: 'volgende dia'
} satisfies MakeRequired<ICarouselResourceStrings>;
