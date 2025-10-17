import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Spanish resource strings for IgxCarousel
 */
export const CarouselResourceStringsES: ICarouselResourceStrings = {
  carousel_of: 'de',
  carousel_slide: 'diapositiva',
  carousel_previous_slide: 'diapositiva anterior',
  carousel_next_slide: 'diapositiva siguiente',
} satisfies Required<ICarouselResourceStrings>;
