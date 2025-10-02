import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * German resource strings for IgxCarousel
 */
export const CarouselResourceStringsDE: ICarouselResourceStrings = {
    carousel_of: 'von',
    carousel_slide: 'Folie',
    carousel_previous_slide: 'Vorherige Folie',
    carousel_next_slide: 'Nächste Folie'
} satisfies Required<ICarouselResourceStrings>;
