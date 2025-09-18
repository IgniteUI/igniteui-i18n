import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Turkish resource strings for IgxCarousel
 */
export const CarouselResourceStringsTR: ICarouselResourceStrings = {
    carousel_of: '/',
    carousel_slide: 'slayt',
    carousel_previous_slide: 'önceki slayt',
    carousel_next_slide: 'sonraki slayt'
} satisfies MakeRequired<ICarouselResourceStrings>;
