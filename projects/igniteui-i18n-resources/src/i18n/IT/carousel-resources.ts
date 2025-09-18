import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Italian resource strings for IgxCarousel
 */
export const CarouselResourceStringsIT: ICarouselResourceStrings = {
    carousel_of: 'di',
    carousel_slide: 'diapositiva',
    carousel_previous_slide: 'diapositiva precedente',
    carousel_next_slide: 'diapositiva successiva'
} satisfies MakeRequired<ICarouselResourceStrings>;
