import { type ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * French resource strings for IgxCarousel
 */
export const CarouselResourceStringsFR: ICarouselResourceStrings = {
    carousel_of: 'de',
    carousel_slide: 'diapositive',
    carousel_previous_slide: 'diapositive précédente',
    carousel_next_slide: 'diapositive suivante'
} satisfies MakeRequired<ICarouselResourceStrings>;
