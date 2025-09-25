import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Norwegian resource strings for IgxCarousel
 */
export const CarouselResourceStringsNB: ICarouselResourceStrings = {
    carousel_of: 'av',
    carousel_slide: 'lysbilde',
    carousel_previous_slide: 'forrige lysbilde',
    carousel_next_slide: 'neste lysbilde'
} satisfies MakeRequired<ICarouselResourceStrings>;
