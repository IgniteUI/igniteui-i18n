import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Portuguese resource strings for IgxCarousel
 */
export const CarouselResourceStringsPT: ICarouselResourceStrings = {
    carousel_of: 'de',
    carousel_slide: 'deslizar',
    carousel_previous_slide: 'diapositivo anterior',
    carousel_next_slide: 'próximo diapositivo'
} satisfies MakeRequired<ICarouselResourceStrings>;
